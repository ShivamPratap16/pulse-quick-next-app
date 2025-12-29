'use client'

import { useSession } from 'next-auth/react'
import RequestAdminAccess from '@/components/RequestAdminAccess'
import Link from 'next/link'

export default function UnauthorizedPage() {
  const { data: session } = useSession()

  return (
    <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        background: '#f4f7f6', 
        fontFamily: 'sans-serif',
        padding: '20px'
    }}>
        <div style={{ 
            maxWidth: '500px', 
            width: '100%', 
            background: '#fff', 
            borderRadius: '16px', 
            padding: '40px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#dc2626' }}>Access Denied</h1>
            <p style={{ color: '#666', marginBottom: '24px', lineHeight: 1.6 }}>
                You do not have permission to view the Admin Dashboard. 
                {session?.user?.email && (
                    <span> You are currently signed in as <strong>{session.user.email}</strong>.</span>
                )}
            </p>

            <RequestAdminAccess />

            <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <Link href="/" style={{ color: '#007bff', textDecoration: 'none', fontSize: '14px' }}>
                    &larr; Return to Home
                </Link>
            </div>
        </div>
    </div>
  )
}
