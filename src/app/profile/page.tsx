'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import RequestAdminAccess from '@/components/RequestAdminAccess'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login?callbackUrl=/profile')
    }
  }, [status, router])

  if (status === 'loading' || !session) {
      return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>
  }

  // @ts-ignore
  const role = session.user?.role || 'user'

  return (
    <div style={{ minHeight: '100vh', background: '#f4f7f6', padding: '40px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>My Profile</h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
                {session.user?.image ? (
                    <Image src={session.user.image} alt={session.user?.name || 'User'} width={80} height={80} style={{ borderRadius: '50%' }} />
                ) : (
                    <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#eee' }}></div>
                )}
                <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 600 }}>{session.user?.name}</h2>
                    <p style={{ color: '#666' }}>{session.user?.email}</p>
                    <div style={{ marginTop: '8px', display: 'inline-block', padding: '4px 12px', background: '#e0f2fe', color: '#0369a1', borderRadius: '12px', fontSize: '12px', fontWeight: 600, textTransform: 'capitalize' }}>
                        {role.replace('_', ' ')}
                    </div>
                </div>
            </div>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '32px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Account Settings</h3>
                {/* Placeholder for future specific settings */}
                <p style={{ color: '#666' }}>Manage your account details and preferences.</p>
                
                {/* Admin Request Component */}
                <RequestAdminAccess />
            </div>
        </div>
    </div>
  )
}
