
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { client } from '@/sanity/lib/client'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
    try {
        const session = await getServerSession(authOptions)
        
        if (!session || !session.user?.email) {
            return NextResponse.json({ authorized: false })
        }

        // Fetch fresh role from Sanity
        const user = await client.fetch(
            `*[_type == "user" && email == $email][0]{role}`,
            { email: session.user.email }
        )

        if (!user || (user.role !== 'admin' && user.role !== 'super_admin')) {
            return NextResponse.json({ authorized: false })
        }

        return NextResponse.json({ authorized: true, role: user.role })
    } catch (error) {
        console.error('Verify Access Error:', error)
        return NextResponse.json({ authorized: false }, { status: 500 })
    }
}
