'use client'

import React, { useEffect, useState, use } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function AcceptInvitePage({ params }: { params: Promise<{ token: string }> }) {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null)

  // unwrapping params
  const { token } = use(params)

  useEffect(() => {
    if (status === 'unauthenticated') {
         // Force login, redirect back here
         router.push(`/login?callbackUrl=/invite/${token}`)
    }
  }, [status, token, router])

  const acceptInvite = async () => {
      setLoading(true)
      try {
          const res = await fetch('/api/invite/accept', {
              method: 'POST',
              body: JSON.stringify({ token }),
              headers: { 'Content-Type': 'application/json' }
          })
          const data = await res.json()
          setResult(data)
          if (data.success) {
              setTimeout(() => {
                  router.push('/admin')
              }, 2000)
          }
      } catch (e) {
          setResult({ error: 'System error processing invite' })
      } finally {
          setLoading(false)
      }
  }

  if (status === 'loading' || status === 'unauthenticated') {
      return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f7f6', fontFamily: 'sans-serif' }}>
        <div style={{ padding: '40px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Admin Invite</h1>
            <p style={{ color: '#666', marginBottom: '24px' }}>
                You have been invited to join the PulseQuik Admin Team as <strong>{session?.user?.email}</strong>.
            </p>

            {result?.error && (
                <div style={{ padding: '12px', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', marginBottom: '20px' }}>
                    {result.error}
                </div>
            )}

            {result?.success && (
                <div style={{ padding: '12px', background: '#dcfce7', color: '#166534', borderRadius: '8px', marginBottom: '20px' }}>
                    Invite Accepted! Redirecting...
                </div>
            )}

            {!result?.success && (
                <button 
                    onClick={acceptInvite}
                    disabled={loading}
                    style={{ 
                        width: '100%', 
                        padding: '14px', 
                        background: '#007bff', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '8px', 
                        fontWeight: 600, 
                        fontSize: '16px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        opacity: loading ? 0.7 : 1
                    }}
                >
                    {loading ? 'Processing...' : 'Accept Invite'}
                </button>
            )}
        </div>
    </div>
  )
}
