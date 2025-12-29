
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { client } from '@/sanity/lib/client'

export async function GET(req: Request) {
  const start = Date.now()
  try {
    const session = await getServerSession(authOptions)
    // @ts-ignore
    if (!session || !['admin', 'super_admin'].includes(session.user?.role)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // specific query for logs & posts
    const logs = await client.fetch(`
      *[_type in ["activityLog", "post"]] | order(coalesce(timestamp, _createdAt) desc)[0...10] {
        _type,
        _id,
        _createdAt,
        timestamp,
        // Activity Log Fields
        action,
        performedBy,
        details,
        // Post Fields
        title,
        "slug": slug.current,
        "authorName": author->name
      }
    `)
    
    // Simulate Vercel Status Check (mock for now as we don't have token)
    // In real scenario, we'd fetch https://api.vercel.com/v6/deployments
    const vercelStatus = 'ready' 

    const latency = Date.now() - start

    return NextResponse.json({
      logs,
      health: {
        sanity: 'connected',
        apiLatency: latency,
        vercel: vercelStatus
      }
    })
  } catch (error) {
    console.error('Dashboard Data Error:', error)
    return NextResponse.json({ 
        error: 'Failed to fetch dashboard data',
        health: {
            sanity: 'disconnected',
            apiLatency: Date.now() - start,
            vercel: 'unknown'
        }
    }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
    try {
        const session = await getServerSession(authOptions)
        // @ts-ignore
        if (!session || session.user?.role !== 'super_admin') {
          return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
        }

        // Delete all activity logs
        await client.delete({ query: '*[_type == "activityLog"]' })

        return NextResponse.json({ success: true, message: 'All logs cleared' })
    } catch (error) {
        console.error('Clear Logs Error:', error)
        return NextResponse.json({ error: 'Failed to clear logs' }, { status: 500 })
    }
}
