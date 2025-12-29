import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { client } from '@/sanity/lib/client'
import crypto from 'crypto'

const writeClient = client.withConfig({ token: process.env.SANITY_API_TOKEN, useCdn: false })

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    // @ts-ignore
    if (!session || session.user?.role !== 'super_admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { email } = await req.json()
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Generate secure token
    const token = crypto.randomBytes(32).toString('hex')
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours

    // Create invite doc
    const invite = await writeClient.create({
      _type: 'invite',
      email,
      token,
      role: 'admin', // Default to admin
      status: 'pending',
      expiresAt,
      // @ts-ignore
      createdBy: { _type: 'reference', _ref: session.user.id } // Requires user ID in session
    })

    // In a real app, send email here. For now, return the link.
    const inviteLink = `${process.env.NEXTAUTH_URL}/invite/${token}`

    return NextResponse.json({ 
      success: true, 
      link: inviteLink, 
      message: 'Invite created. Share this link with the user.' 
    })

  } catch (error) {
    console.error('Invite Error:', error)
    return NextResponse.json({ error: 'Failed to create invite' }, { status: 500 })
  }
}
