'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'
import { myTheme, myDarkTheme } from '@/sanity/theme'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function StudioPage() {
    const [isDark, setIsDark] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [authorized, setAuthorized] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const checkAccess = async () => {
             try {
                const res = await fetch('/api/auth/verify-access')
                const data = await res.json()
                if (data.authorized) {
                    setAuthorized(true)
                } else {
                    router.push('/unauthorized') // or / 
                }
             } catch (e) {
                 router.push('/')
             } finally {
                setMounted(true)
             }
        }

        checkAccess()
        
        const stored = localStorage.getItem('sanity-studio-theme')
        if (stored === 'dark') {
            setIsDark(true)
        }
    }, [router])

    const toggleTheme = () => {
        const newVal = !isDark
        setIsDark(newVal)
        localStorage.setItem('sanity-studio-theme', newVal ? 'dark' : 'light')
    }

    if (!mounted) return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: '#fff' }}>
                Verifying Access...
            </div>
        )
    
    if (!authorized) return null

    const activeConfig = {
        ...config,
        theme: isDark ? myDarkTheme : myTheme
    }

    return (
        <>
            <NextStudio config={activeConfig} />
            <button
                onClick={toggleTheme}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '20px',
                    zIndex: 1000,
                    padding: '10px',
                    background: isDark ? '#fff' : '#18191A',
                    color: isDark ? '#000' : '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px'
                }}
                title="Toggle Dark Mode"
            >
                {isDark ? '☀️' : '🌙'}
            </button>
        </>
    )
}
