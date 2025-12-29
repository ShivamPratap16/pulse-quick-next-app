import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { client } from '@/sanity/lib/client'

const writeClient = client.withConfig({ token: process.env.SANITY_API_TOKEN, useCdn: false })

// GET: List pending requests
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    // @ts-ignore
    if (!session || session.user?.role !== 'super_admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const pendingRequests = await writeClient.fetch(
        `*[_type == "user" && (accessRequestStatus == "pending" || role in ["admin", "super_admin"])]{
            _id, name, email, image, accessRequestStatus, role
        } | order(accessRequestStatus desc, role desc)`
    )

    return NextResponse.json({ requests: pendingRequests })
  } catch (error) {
    console.error('Fetch Requests Error:', error)
    return NextResponse.json({ error: 'Failed to fetch requests' }, { status: 500 })
  }
}

// PATCH: Approve, Reject, or Update Role
export async function PATCH(req: Request) {
    try {
        const session = await getServerSession(authOptions)
        // @ts-ignore
        if (!session || session.user?.role !== 'super_admin') {
          return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
        }
    
        const { userId, action, role } = await req.json() // action: 'approve' | 'reject' | 'update_role'
        if (!userId || !['approve', 'reject', 'update_role'].includes(action)) {
            return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 })
        }

        // Fetch target user details for better logging
        const targetUser = await client.fetch(`*[_type == "user" && _id == $id][0]{email}`, { id: userId })
        const targetEmail = targetUser?.email || userId // Fallback to ID if not found

        const updates: any = {}
        let logAction = ''
        let logDetails = ''

        if (action === 'update_role') {
            if (!['user', 'admin', 'super_admin'].includes(role)) {
                return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
            }
            updates.role = role
            
            // If demoting to 'user', clear the approval status so they don't see "Access Approved"
            if (role === 'user') {
                updates.accessRequestStatus = null
            }

            logAction = 'Role Update'
            logDetails = `Updated role to ${role} for user ${targetEmail}`
        } else {
            // Approve/Reject logic
            updates.accessRequestStatus = action === 'approve' ? 'approved' : 'rejected'
            // @ts-ignore
            updates.approvedBy = { _type: 'reference', _ref: session.user.id }
            updates.approvedAt = new Date().toISOString()

            if (action === 'approve') {
                updates.role = 'admin' // Grant admin role
            }
            logAction = `Request ${action === 'approve' ? 'Approved' : 'Rejected'}`
            logDetails = `${logAction} for user ${targetEmail}`
        }

        await writeClient.patch(userId).set(updates).commit()
        
        // Log Activity
        await writeClient.create({
            _type: 'activityLog',
            action: logAction,
            performedBy: session.user?.email || 'Unknown Admin',
            details: logDetails,
            timestamp: new Date().toISOString()
        })
    
        return NextResponse.json({ success: true, message: `Action ${action} completed` })
      } catch (error) {
        console.error('Update Request Error:', error)
        return NextResponse.json({ error: 'Failed to update request' }, { status: 500 })
      }
}

// DELETE: Remove User
export async function DELETE(req: Request) {
    try {
        const session = await getServerSession(authOptions)
        // @ts-ignore
        if (!session || session.user?.role !== 'super_admin') {
          return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
        }

        const { searchParams } = new URL(req.url)
        const userId = searchParams.get('userId')

        if (!userId) {
            return NextResponse.json({ error: 'User ID required' }, { status: 400 })
        }

        // Fetch user before deleting for logs
        const targetUser = await client.fetch(`*[_type == "user" && _id == $id][0]{email}`, { id: userId })
        const targetEmail = targetUser?.email || userId

        await writeClient.delete(userId)
        
        // Log Activity
        await writeClient.create({
            _type: 'activityLog',
            action: 'Delete User',
            performedBy: session.user?.email || 'Unknown Admin',
            details: `Deleted user ${targetEmail}`,
            timestamp: new Date().toISOString()
        })

        return NextResponse.json({ success: true, message: 'User deleted' })

    } catch (error) {
        console.error('Delete User Error:', error)
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
    }
}
