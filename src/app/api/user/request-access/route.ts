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

    // Get current user to check status
    const user = await writeClient.fetch(`*[_type == "user" && email == $email][0]`, { email: session.user.email })
    
    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    if (user.accessRequestStatus === 'pending') {
        return NextResponse.json({ error: 'Request already pending' }, { status: 400 })
    }
    
    if (user.role === 'admin' || user.role === 'super_admin') {
         return NextResponse.json({ error: 'You are already an admin' }, { status: 400 })
    }

    // Update status
    await writeClient.patch(user._id).set({ accessRequestStatus: 'pending' }).commit()

    return NextResponse.json({ success: true, message: 'Access request submitted' })

  } catch (error) {
    console.error('Request Access Error:', error)
    return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 })
  }
}
