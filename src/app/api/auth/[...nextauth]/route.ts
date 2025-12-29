import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { client } from "@/sanity/lib/client"

const writeClient = client.withConfig({ token: process.env.SANITY_API_TOKEN, useCdn: false })

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
        if (!user.email) return false;
        
        try {
            // Use writeClient for consistency, though read is fine with public client if dataset is public
            const existingUser = await writeClient.fetch(`*[_type == "user" && email == $email][0]`, { email: user.email });
            
            if (!existingUser) {
                await writeClient.create({
                    _type: 'user',
                    email: user.email,
                    name: user.name,
                    image: user.image,
                    role: 'user',
                    accessRequestStatus: 'none'
                });
            }
            return true;
        } catch (error) {
            console.error("Sanity Sign In Error:", error);
            return false;
        }
    },
    async jwt({ token, user, trigger, session }) {
        if (user) {
            token.id = user.id;
        }
        
        // Fetch latest role data from Sanity
        if (token.email) {
            try {
                // Use writeClient to ensure we get latest data (no CDN cache)
                const sanityUser = await writeClient.fetch(`*[_type == "user" && email == $email][0]{_id, role, accessRequestStatus}`, { email: token.email });
                if (sanityUser) {
                    token.id = sanityUser._id; // Sync Sanity ID
                    token.role = sanityUser.role;
                    
                    // Sanity Check: If role is 'user', they cannot be 'approved' for admin access.
                    // This fixes the "Infinite Approval Loop" if data gets out of sync.
                    if (sanityUser.role === 'user' && sanityUser.accessRequestStatus === 'approved') {
                        token.accessRequestStatus = null; 
                    } else {
                        token.accessRequestStatus = sanityUser.accessRequestStatus;
                    }
                }
            } catch (error) {
                 console.error("Sanity JWT Error:", error);
            }
        }
        
        return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.image = token.picture;
          // @ts-ignore
          session.user.id = token.id as string;
          // @ts-ignore
          session.user.role = token.role;
           // @ts-ignore
          session.user.accessRequestStatus = token.accessRequestStatus;
      }
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
