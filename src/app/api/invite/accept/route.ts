import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { client } from '@/sanity/lib/client'

const writeClient = client.withConfig({ token: process.env.SANITY_API_TOKEN, useCdn: false })

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user?.email) {
       return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    const { token } = await req.json()
    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 400 })
    }

    // Find valid invite
    const invite = await writeClient.fetch(
      `*[_type == "invite" && token == $token && status == "pending"][0]`,
      { token }
    )

    if (!invite) {
      return NextResponse.json({ error: 'Invalid or expired invite' }, { status: 400 })
    }

    // Check expiration
    if (new Date(invite.expiresAt) < new Date()) {
      await writeClient.patch(invite._id).set({ status: 'expired' }).commit()
      return NextResponse.json({ error: 'Invite expired' }, { status: 400 })
    }

    // Verify email match (Optional: depending on strictness. Plan didn't specify, but safer if email matches)
    // For now, we allow any logged-in user to accept if they have the link (common pattern), 
    // OR we can enforce email match. 
    // Let's enforce email match if invite has email set, for security.
    if (invite.email && invite.email !== session.user.email) {
         return NextResponse.json({ error: 'This invite is for a different email address' }, { status: 403 })
    }

    // Update User Role
    // valid, proceed
    // We need to find the user ID. simpler to query by email from session
    const user = await writeClient.fetch(`*[_type == "user" && email == $email][0]`, { email: session.user.email })
    
    if (!user) {
         return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    await writeClient.patch(user._id).set({ role: invite.role }).commit()
    await writeClient.patch(invite._id).set({ status: 'accepted' }).commit()

    return NextResponse.json({ success: true, message: 'Invite accepted. Role updated.' })

  } catch (error) {
    console.error('Accept Invite Error:', error)
    return NextResponse.json({ error: 'Failed to accept invite' }, { status: 500 })
  }
}
