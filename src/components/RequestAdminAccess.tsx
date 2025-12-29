'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function RequestAdminAccess() {
    const { data: session, update } = useSession()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    
    // @ts-ignore
    const status = session?.user?.accessRequestStatus
    // @ts-ignore
    const role = session?.user?.role

    if (!session) return null // Should be logged in
    
    if (role === 'admin' || role === 'super_admin') {
        return null // Already admin
    }

    if (status === 'approved') {
         return (
             <div style={{ marginTop: '20px', padding: '16px', background: '#dcfce7', color: '#166534', borderRadius: '8px' }}>
                 <strong>Access Approved!</strong> Please sign out and sign in again to access the dashboard.
             </div>
         )
    }

    if (status === 'pending') {
        return (
            <div style={{ marginTop: '20px', padding: '16px', background: '#fef9c3', color: '#854d0e', borderRadius: '8px' }}>
                <strong>Request Pending.</strong> Please wait for an admin to approve your request.
            </div>
        )
    }

    const handleRequest = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/user/request-access', { method: 'POST' })
            const data = await res.json()
            if (data.success) {
                setMessage('Request submitted successfully.')
                // Optimistically update session or just force reload if needed, 
                // but simpler to just let the component know we are pending now via local derivation if needed, 
                // However, await update() should work.
                await update() 
                
                // If update() is slow, we can also force a refresh or router.refresh() 
                // But typically update() is enough. Let's force a reload for safety if update is flaky.
                window.location.reload()
            } else {
                setMessage(data.error || 'Failed to submit request')
            }
        } catch (e) {
            setMessage('Error processing request')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '12px', marginTop: '40px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>Admin Access</h3>
            <p style={{ color: '#666', marginBottom: '16px' }}>Need to manage content? Request admin permissions.</p>
            
            <button 
                onClick={handleRequest} 
                disabled={loading}
                style={{ 
                    padding: '10px 20px', 
                    background: '#0f172a', 
                    color: '#fff', 
                    borderRadius: '6px', 
                    fontWeight: 600, 
                    cursor: loading ? 'not-allowed' : 'pointer'
                }}
            >
                {loading ? 'Submitting...' : 'Request Access'}
            </button>
            
            {message && <p style={{ marginTop: '12px', color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
        </div>
    )
}
