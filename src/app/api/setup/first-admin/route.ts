
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { client } from '@/sanity/lib/client'

const writeClient = client.withConfig({ token: process.env.SANITY_API_TOKEN, useCdn: false })

export async function GET(req: Request) {
    // 1. Environment Lock
    if (process.env.ENABLE_SETUP !== 'true') {
        return NextResponse.json({ error: 'Setup disabled. Missing environment variable.' }, { status: 403 })
    }

    try {
        const session = await getServerSession(authOptions)
        if (!session || !session.user) {
            return NextResponse.json({ error: 'Unauthorized. Please login first.' }, { status: 401 })
        }

        // 2. Database Lock: Check if ANY super_admin exists
        const existingSuperAdmin = await client.fetch(`count(*[_type == "user" && role == "super_admin"])`)

        if (existingSuperAdmin > 0) {
            return NextResponse.json({ error: 'Setup locked. Super Admin already exists.' }, { status: 403 })
        }

        // 3. Promote Current User
        // @ts-ignore
        const userId = session.user.id
        
        await writeClient.patch(userId)
            .set({ 
                role: 'super_admin', 
                accessRequestStatus: 'approved',
                approvedAt: new Date().toISOString(),
                approvedBy: { _type: 'reference', _ref: userId } // Self-approved (Bootstrap)
            })
            .commit()

        return NextResponse.json({ 
            success: true, 
            message: 'Bootstrap successful. You are now Super Admin. PLEASE REMOVE ENABLE_SETUP FROM ENV IMMEDIATELY.' 
        })

    } catch (error) {
        console.error('Bootstrap Error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
