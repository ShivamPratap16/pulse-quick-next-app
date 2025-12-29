'use client'

import React, { useState, useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Icons = {
    Overview: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
    ),
    Blogs: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
    ),
    Redirects: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10"></polyline>
            <polyline points="23 20 23 14 17 14"></polyline>
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
        </svg>
    ),
    Analytics: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
    ),
    User: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    ),
    SignOut: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
    ),
    ChevronLeft: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    ),
    Menu: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    ),
    ExternalLink: () => (
         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
    ),
    Sun: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
    ),
    Moon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
    ),
    Lock: () => (
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
    ),
    Users: () => (
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
             <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
    ),
    Activity: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
    ),
    Server: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
    )
}

export default function AdminPage() {
  const { data: session } = useSession()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const [editingUser, setEditingUser] = useState<any>(null)
  
  // Super Admin Logic
  const [pendingRequests, setPendingRequests] = useState<any[]>([])
  const [inviteLink, setInviteLink] = useState('')
  const [adminEmail, setAdminEmail] = useState('')
  const [loadingInvite, setLoadingInvite] = useState(false)
  const [loadingRequests, setLoadingRequests] = useState(false)
  
  // @ts-ignore
  const isSuperAdmin = session?.user?.role === 'super_admin'

  // Persist Dark Mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('admin_theme')
    if (savedTheme === 'dark') {
        setIsDarkMode(true)
    }
    
    const handleResize = () => {
        const mobile = window.innerWidth < 768
        setIsMobile(mobile)
        if (mobile) setIsSidebarOpen(false)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
      if (isSuperAdmin) {
          fetchRequests()
      }
  }, [isSuperAdmin])

  const fetchRequests = async () => {
      setLoadingRequests(true)
      try {
          const res = await fetch('/api/admin/requests')
          const data = await res.json()
          if (data.requests) setPendingRequests(data.requests)
      } catch (e) {
          console.error(e)
      } finally {
          setLoadingRequests(false)
      }
  }

  const toggleTheme = () => {
      const newTheme = !isDarkMode
      setIsDarkMode(newTheme)
      localStorage.setItem('admin_theme', newTheme ? 'dark' : 'light')
  }
  
  const generateInvite = async () => {
      setLoadingInvite(true)
      try {
          const res = await fetch('/api/admin/invite', {
              method: 'POST',
              body: JSON.stringify({ email: adminEmail }),
              headers: { 'Content-Type': 'application/json' }
          })
          const data = await res.json()
          if (data.success) {
              setInviteLink(data.link)
          } else {
              alert(data.error)
          }
      } catch (e) {
          console.error(e)
          alert('Failed to generate invite')
      } finally {
          setLoadingInvite(false)
      }
  }

  const handleRequest = async (userId: string, action: 'approve' | 'reject') => {
      try {
          const res = await fetch('/api/admin/requests', {
              method: 'PATCH',
              body: JSON.stringify({ userId, action }),
              headers: { 'Content-Type': 'application/json' }
          })
          const data = await res.json()
          if (data.success) {
              fetchRequests() // refresh
          } else {
              alert(data.error)
          }
      } catch (e) {
          alert('Error updating request')
      }
  }

  // Role Update & Delete Logic
  const handleRoleUpdate = async () => {
      if (!editingUser) return

      try {
        const res = await fetch('/api/admin/requests', {
            method: 'PATCH',
            body: JSON.stringify({ userId: editingUser._id, action: 'update_role', role: editingUser.role }),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json()
        if (data.success) {
            setEditingUser(null) // Close modal
            fetchRequests()
        } else {
            alert(data.error)
        }
      } catch (e) {
          console.error(e)
          alert('Failed to update role')
      }
  }

  const handleDeleteUser = async (userId: string) => {
      if(!confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;

      try {
          const res = await fetch(`/api/admin/requests?userId=${userId}`, {
              method: 'DELETE',
          })
          const data = await res.json()
          if(data.success) {
              fetchRequests()
          } else {
              alert(data.error)
          }
      } catch (e) {
          console.error(e)
          alert('Failed to delete user')
      }
  }

  const router = useRouter()
  
  // Responsive Sidebar Logic
  const sidebarWidth = isMobile 
    ? (isSidebarOpen ? '280px' : '0px') 
    : (isSidebarOpen ? '280px' : '80px');

  // Theme Colors
  const theme = {
      bg: isDarkMode ? '#0f172a' : '#f4f7f6',
      sidebarBg: isDarkMode ? '#1e293b' : '#fff',
      text: isDarkMode ? '#f8fafc' : '#333',
      textSec: isDarkMode ? '#94a3b8' : '#6c757d',
      border: isDarkMode ? '#334155' : '#eee',
      cardBg: isDarkMode ? '#1e293b' : '#fff',
      cardHover: isDarkMode ? '#2d3b4e' : '#fff', // slight lift handled by transform usually
      hoverBg: isDarkMode ? '#334155' : '#f8f9fa',
      shadow: isDarkMode ? '0 10px 30px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.03)',
  }

  // View State
  const [currentView, setCurrentView] = useState<'overview' | 'users' | 'activity'>('overview')

  return (
    <div style={{ minHeight: '100vh', backgroundColor: theme.bg, fontFamily: '"Inter", sans-serif', color: theme.text, display: 'flex', transition: 'background-color 0.3s' }}>
      
      {/* Mobile Sidebar Overlay */}
      {isMobile && isSidebarOpen && (
        <div 
            onClick={() => setIsSidebarOpen(false)}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 99
            }}
        />
      )}

      {/* Modal for Edit Role */}
      {editingUser && (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: theme.cardBg,
                padding: '30px',
                borderRadius: '16px',
                width: '90%',
                maxWidth: '400px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                border: `1px solid ${theme.border}`
            }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: theme.text }}>Edit Role</h3>
                
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: theme.textSec }}>Assign Role</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {[
                            { value: 'user', label: 'User (Revoke Admin)' },
                            { value: 'admin', label: 'Admin' },
                            { value: 'super_admin', label: 'Super Admin' }
                        ].map(role => (
                            <label key={role.value} style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '10px', 
                                padding: '12px', 
                                borderRadius: '8px', 
                                border: `1px solid ${editingUser.role === role.value ? '#3b82f6' : theme.border}`,
                                backgroundColor: editingUser.role === role.value ? (isDarkMode ? '#1e3a8a' : '#eff6ff') : 'transparent',
                                cursor: 'pointer'
                            }}>
                                <input 
                                    type="radio" 
                                    name="role" 
                                    value={role.value} 
                                    checked={editingUser.role === role.value}
                                    onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                                />
                                <span style={{ fontWeight: 500 }}>{role.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                    <button 
                        onClick={() => setEditingUser(null)}
                        style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid transparent', background: 'transparent', color: theme.textSec, cursor: 'pointer', fontWeight: 600 }}
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleRoleUpdate}
                        style={{ padding: '10px 24px', borderRadius: '8px', border: 'none', background: '#3b82f6', color: '#fff', cursor: 'pointer', fontWeight: 600 }}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* Sidebar */}
      <aside style={{
        width: isMobile ? '280px' : sidebarWidth,
        transform: isMobile && !isSidebarOpen ? 'translateX(-100%)' : 'translateX(0)',
        backgroundColor: theme.sidebarBg,
        boxShadow: isDarkMode ? '2px 0 10px rgba(0,0,0,0.2)' : '2px 0 10px rgba(0,0,0,0.05)',
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0,
        zIndex: 100,
        transition: 'transform 0.3s ease, width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRight: `1px solid ${theme.border}`
      }}>
        <div style={{ padding: '24px', borderBottom: `1px solid ${theme.border}`, display: 'flex', alignItems: 'center', justifyContent: isSidebarOpen || isMobile ? 'space-between' : 'center', height: '80px' }}>
             {(isSidebarOpen || isMobile) ? (
               <>
                 <Image 
                   src="/assets/images/logo/main.webp" 
                   alt="PulseQuik" 
                   width={140} 
                   height={35} 
                   style={{ objectFit: 'contain', filter: isDarkMode ? 'brightness(0) invert(1)' : 'none' }}
                   priority
                 />
                 <button onClick={() => setIsSidebarOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.textSec, display: 'flex' }}>
                    <Icons.ChevronLeft />
                 </button>
               </>
             ) : (
                <button onClick={() => setIsSidebarOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.textSec, display: 'flex' }}>
                     <Icons.Menu />
                </button>
             )}
        </div>

        <nav style={{ flex: 1, padding: '20px 10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
             <NavLink 
                href="#" 
                icon={<Icons.Overview />} 
                label="Overview" 
                isOpen={isSidebarOpen || isMobile} 
                active={currentView === 'overview'} 
                theme={theme} 
                isDarkMode={isDarkMode} 
                onClick={() => {
                    setCurrentView('overview');
                    if(isMobile) setIsSidebarOpen(false);
                }}
             />
             <NavLink href="/studio/structure/blogs" icon={<Icons.Blogs />} label="Blogs" isOpen={isSidebarOpen || isMobile} theme={theme} isDarkMode={isDarkMode} />
             <NavLink href="/studio/structure/redirects" icon={<Icons.Redirects />} label="Redirects" isOpen={isSidebarOpen || isMobile} theme={theme} isDarkMode={isDarkMode} />
             <NavLink 
                href="#" 
                icon={<Icons.Activity />} 
                label="Activity Logs" 
                isOpen={isSidebarOpen || isMobile} 
                active={currentView === 'activity'} 
                theme={theme} 
                isDarkMode={isDarkMode} 
                onClick={() => {
                    setCurrentView('activity');
                    if(isMobile) setIsSidebarOpen(false);
                }}
             />

             {isSuperAdmin && (
                 <NavLink 
                    href="#" 
                    icon={<Icons.Users />} 
                    label="User Management" 
                    isOpen={isSidebarOpen || isMobile} 
                    active={currentView === 'users'} 
                    theme={theme} 
                    isDarkMode={isDarkMode} 
                    onClick={() => {
                        setCurrentView('users');
                        if(isMobile) setIsSidebarOpen(false);
                    }} 
                  />
             )}
        </nav>

        <div style={{ padding: '20px', borderTop: `1px solid ${theme.border}` }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: isSidebarOpen || isMobile ? 'flex-start' : 'center' }}>
                 {session?.user?.image ? (
                    <Image src={session.user.image} alt="User" width={40} height={40} style={{ borderRadius: '50%' }} />
                 ) : (
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: isDarkMode ? '#334155' : '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.textSec }}>
                        <Icons.User />
                    </div>
                 )}
                 {(isSidebarOpen || isMobile) && (
                     <div style={{ overflow: 'hidden' }}>
                         <div style={{ fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap', color: theme.text }}>{session?.user?.name || 'Admin'}</div>
                         <div style={{ fontSize: '0.8rem', color: theme.textSec, whiteSpace: 'nowrap' }}>{session?.user?.email}</div>
                     </div>
                 )}
             </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ 
          flex: 1, 
          marginLeft: isMobile ? 0 : sidebarWidth, 
          padding: isMobile ? '20px' : '40px', 
          transition: 'margin-left 0.3s ease',
          width: isMobile ? '100%' : `calc(100% - ${sidebarWidth})`,
          overflowX: 'hidden'
      }}>
          {isMobile && !isSidebarOpen && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                 <button onClick={() => setIsSidebarOpen(true)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: theme.text }}>
                     <Icons.Menu />
                 </button>
                 <Image 
                   src="/assets/images/logo/main.webp" 
                   alt="PulseQuik" 
                   width={100} 
                   height={25} 
                   style={{ objectFit: 'contain', filter: isDarkMode ? 'brightness(0) invert(1)' : 'none' }}
                 />
                 <div style={{ width: 24 }}></div> {/* Spacer */}
            </div>
          )}

          <header style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', marginBottom: '40px', gap: '20px' }}>
              <div>
                  <h1 style={{ fontSize: isMobile ? '24px' : '28px', fontWeight: 700, color: theme.text, marginBottom: '8px' }}>
                      {currentView === 'overview' ? 'Dashboard' : 
                       currentView === 'users' ? 'User Management' : 
                       'Activity Logs'}
                  </h1>
                  <p style={{ color: theme.textSec, fontSize: isMobile ? '14px' : '16px' }}>
                      {currentView === 'overview' ? 'Welcome back, manage your content effectively.' : 
                       currentView === 'users' ? 'Manage admins and access requests.' :
                       'Track system changes and audit trails.'}
                  </p>
              </div>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  {/* Dark Mode Toggle */}
                  <button 
                    onClick={toggleTheme}
                    style={{
                        padding: '10px',
                        borderRadius: '50%',
                        width: '42px',
                        height: '42px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${theme.border}`,
                        background: theme.cardBg,
                        color: isDarkMode ? '#fbbf24' : '#64748b', // Yellow sun or slate moon
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  >
                      {isDarkMode ? <Icons.Sun /> : <Icons.Moon />}
                  </button>

                  <button 
                    onClick={() => signOut({ callbackUrl: '/' })}
                    style={{ 
                        padding: '10px 20px', 
                        borderRadius: '8px', 
                        border: `1px solid ${theme.border}`, 
                        background: theme.cardBg, 
                        color: theme.text, 
                        fontWeight: 500,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = theme.hoverBg}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = theme.cardBg}
                  >
                      <Icons.SignOut /> Sign Out
                  </button>
              </div>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              
              {/* === OVERVIEW VIEW === */}
              {currentView === 'overview' && (
                  <>
                    {/* Main Banner Card */}
                    <div style={{ gridColumn: '1 / -1', background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)', borderRadius: '16px', padding: '40px', color: '#fff', boxShadow: '0 10px 30px rgba(0,123,255,0.2)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                            <div style={{ maxWidth: '600px' }}>
                                <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>Content Studio</h2>
                                <p style={{ opacity: 0.9, fontSize: '16px', lineHeight: 1.5 }}>Access the full power of Sanity CMS. Manage Pages, Medical Certificates, Doctors, FAQs and global site settings in one place.</p>
                            </div>
                            <Link href="/studio" target="_blank" style={{ textDecoration: 'none' }}>
                                <span style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center',
                                    padding: '14px 28px', 
                                    backgroundColor: '#fff', 
                                    color: '#0056b3', 
                                    fontWeight: 600, 
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.2s',
                                    cursor: 'pointer'
                                }}>
                                    Open Studio <Icons.ExternalLink />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <DashboardCard 
                        title="Blog Posts" 
                        desc="Create, edit and publish health articles."
                        icon={<Icons.Blogs />}
                        color="#28a745"
                        link="/studio/structure/blogs"
                        linkText="Manage Blogs"
                        theme={theme}
                    />

                    <DashboardCard 
                        title="URL Redirects" 
                        desc="Manage 301/302 redirects for SEO."
                        icon={<Icons.Redirects />}
                        color="#6610f2"
                        link="/studio/structure/redirects"
                        linkText="Configure"
                        theme={theme}
                    />

                    <SystemHealthWidget theme={theme} />
                    
                    <RecentActivityWidget theme={theme} isSuperAdmin={isSuperAdmin} />
                  </>
              )}

               {/* === ACTIVITY LOGS VIEW === */}
               {currentView === 'activity' && (
                   <RecentActivityWidget theme={theme} isSuperAdmin={isSuperAdmin} />
               )}


               {/* === USERS VIEW === */}
               {currentView === 'users' && isSuperAdmin && (
                  <>
                     {/* Invite Card */}
                    <div style={{ gridColumn: '1 / -1', backgroundColor: theme.cardBg, borderRadius: '16px', padding: '30px', border: `1px solid ${theme.border}`, boxShadow: theme.shadow }}>
                        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Icons.Lock /> Invite New Admin
                        </h3>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <input 
                                type="email" 
                                placeholder="New Admin Email" 
                                value={adminEmail}
                                onChange={(e) => setAdminEmail(e.target.value)}
                                style={{ 
                                    flex: 1, 
                                    padding: '12px', 
                                    borderRadius: '8px', 
                                    border: `1px solid ${theme.border}`, 
                                    background: theme.bg,
                                    color: theme.text,
                                    outline: 'none'
                                }}
                            />
                            <button 
                                onClick={generateInvite}
                                disabled={loadingInvite || !adminEmail}
                                style={{ 
                                    padding: '12px 24px', 
                                    borderRadius: '8px', 
                                    backgroundColor: '#0f172a', 
                                    color: '#fff', 
                                    border: 'none', 
                                    fontWeight: 600, 
                                    cursor: loadingInvite ? 'not-allowed' : 'pointer',
                                    opacity: loadingInvite ? 0.7 : 1
                                }}
                            >
                                {loadingInvite ? 'Generating...' : 'Generate Invite Link'}
                            </button>
                        </div>
                        {inviteLink && (
                            <div style={{ marginTop: '20px', padding: '16px', background: theme.bg, borderRadius: '8px', border: `1px solid ${theme.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <code style={{ fontSize: '14px', wordBreak: 'break-all' }}>{inviteLink}</code>
                                <button 
                                    onClick={() => navigator.clipboard.writeText(inviteLink)}
                                    style={{ marginLeft: '12px', padding: '8px 16px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc', background: '#fff', color: '#000' }}
                                >
                                    Copy
                                </button>
                            </div>
                        )}
                    </div>

                    {/* User Management List */}
                    <div style={{ gridColumn: '1 / -1', backgroundColor: theme.cardBg, borderRadius: '16px', padding: '30px', border: `1px solid ${theme.border}`, boxShadow: theme.shadow }}>
                        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Icons.Users /> All Admins & Requests
                        </h3>
                        
                        {loadingRequests ? (
                            <p style={{ color: theme.textSec }}>Loading users...</p>
                        ) : pendingRequests.length === 0 ? (
                            <p style={{ color: theme.textSec }}>No admins or pending requests found.</p>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {pendingRequests.filter(req => req.email !== session?.user?.email).map(req => {
                                    const isPending = req.accessRequestStatus === 'pending';
                                    const isSuper = req.role === 'super_admin';
                                    const isAdmin = req.role === 'admin';
                                    
                                    return (
                                    <div key={req._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: theme.bg, borderRadius: '12px', flexWrap: 'wrap', gap: '12px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            {req.image ? (
                                                <Image src={req.image} alt={req.name || 'User'} width={40} height={40} style={{ borderRadius: '50%' }} />
                                            ) : (
                                                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#ccc' }}></div>
                                            )}
                                            <div>
                                                <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    {req.name || 'Unknown'}
                                                    {isPending && <span style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '4px', background: '#eab308', color: '#fff' }}>PENDING</span>}
                                                </div>
                                                <div style={{ fontSize: '14px', color: theme.textSec }}>{req.email}</div>
                                            </div>
                                        </div>

                                        {/* Role Badge and Actions */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            {!isPending && (
                                                <div style={{ 
                                                    padding: '6px 14px', 
                                                    borderRadius: '20px', 
                                                    background: isSuper ? 'linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)' : '#e2e8f0', 
                                                    color: isSuper ? '#ffffff' : '#475569',
                                                    fontSize: '11px',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.05em',
                                                    boxShadow: isSuper ? '0 4px 12px rgba(124, 58, 237, 0.3)' : 'inset 0 0 0 1px rgba(0,0,0,0.05)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    border: isSuper ? 'none' : '1px solid #cbd5e1'
                                                }}>
                                                    {isSuper && (
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
                                                    )}
                                                    {isSuper ? 'SUPER ADMIN' : 'ADMIN'}
                                                </div>
                                            )}
                                        
                                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                {isPending ? (
                                                    <>
                                                        <button 
                                                            onClick={() => handleRequest(req._id, 'approve')}
                                                            style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', background: '#22c55e', color: '#fff', cursor: 'pointer', fontWeight: 600 }}
                                                        >
                                                            Approve
                                                        </button>
                                                        <button 
                                                            onClick={() => handleRequest(req._id, 'reject')}
                                                            style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #ef4444', background: 'transparent', color: '#ef4444', cursor: 'pointer', fontWeight: 600 }}
                                                        >
                                                            Reject
                                                        </button>
                                                    </>
                                                ) : (
                                                    /* Edit and Delete Actions */
                                                    <>
                                                     <button 
                                                         onClick={() => setEditingUser(req)}
                                                         style={{
                                                             padding: '8px',
                                                             borderRadius: '6px',
                                                             border: `1px solid ${theme.border}`,
                                                             backgroundColor: theme.cardBg,
                                                             color: theme.text,
                                                             cursor: 'pointer',
                                                             display: 'flex',
                                                             alignItems: 'center',
                                                             justifyContent: 'center',
                                                             transition: 'all 0.2s'
                                                         }}
                                                         title="Edit Role"
                                                     >
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                                        </svg>
                                                     </button>

                                                     <button
                                                         onClick={() => handleDeleteUser(req._id)}
                                                         style={{
                                                             padding: '8px',
                                                             borderRadius: '6px',
                                                             border: '1px solid #ef4444',
                                                             backgroundColor: 'transparent',
                                                             color: '#ef4444',
                                                             cursor: 'pointer',
                                                             display: 'flex',
                                                             alignItems: 'center',
                                                             justifyContent: 'center'
                                                         }}
                                                         title="Delete User"
                                                     >
                                                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                             <polyline points="3 6 5 6 21 6"></polyline>
                                                             <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                         </svg>
                                                     </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )})}
                            </div>
                        )}
                    </div>
                  </>
              )}

          </div>
      </main>
    </div>
  )
}

function NavItem({ href, icon, label, isOpen, active, theme, isDarkMode, onClick }: any) {
    return (
        <Link href={href} style={{ textDecoration: 'none' }} onClick={onClick}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: active ? (isDarkMode ? '#1e40af' : '#e7f1ff') : 'transparent', // Custom dark blue for active state
                color: active ? (isDarkMode ? '#60a5fa' : '#007bff') : theme.textSec,
                transition: 'all 0.2s',
                gap: '12px',
                justifyContent: isOpen ? 'flex-start' : 'center',
                cursor: 'pointer'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px' }}>
                    {icon}
                </div>
                {isOpen && <span style={{ fontWeight: 500 }}>{label}</span>}
            </div>
        </Link>
    )
}

const NavLink = NavItem;


function DashboardCard({ title, desc, icon, color, link, linkText, disabled, theme }: any) {
    return (
        <div style={{ 
            backgroundColor: theme.cardBg, 
            borderRadius: '16px', 
            padding: '30px', 
            boxShadow: theme.shadow,
            border: `1px solid ${theme.border}`,
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '12px', 
                backgroundColor: `${color}15`, 
                color: color, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '20px',
            }}>
                {/* Clone element to change size/stroke if needed, or just render */}
                {React.cloneElement(icon, { width: 24, height: 24 })}
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: theme.text, marginBottom: '10px' }}>{title}</h3>
            <p style={{ fontSize: '14px', color: theme.textSec, lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>{desc}</p>
            
            <Link href={link} target={link === '#' ? '' : '_blank'} style={{ textDecoration: 'none', pointerEvents: disabled ? 'none' : 'auto' }}>
                <span style={{ 
                    display: 'block', 
                    width: '100%', 
                    padding: '12px', 
                    textAlign: 'center', 
                    borderRadius: '8px', 
                    border: `1px solid ${disabled ? theme.border : (theme.cardBg === '#fff' ? '#e9ecef' : '#475569')}`,
                    backgroundColor: disabled ? (theme.cardBg === '#fff' ? '#f8f9fa' : '#0f172a') : theme.cardBg,
                    color: disabled ? '#adb5bd' : theme.text,
                    fontWeight: 600,
                    fontSize: '14px',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s'
                }}
                onMouseOver={(e) => !disabled && (e.currentTarget.style.backgroundColor = theme.hoverBg)}
                onMouseOut={(e) => !disabled && (e.currentTarget.style.backgroundColor = theme.cardBg)}
                >
                    {linkText}
                </span>
            </Link>
        </div>
    )
}

function SystemHealthWidget({ theme }: any) {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/admin/dashboard')
            .then(res => res.json())
            .then(d => {
                setData(d.health)
                setLoading(false)
            })
            .catch(e => setLoading(false))
    }, [])

    return (
        <div style={{ 
             backgroundColor: theme.cardBg, 
             borderRadius: '16px', 
             padding: '30px', 
             boxShadow: theme.shadow,
             border: `1px solid ${theme.border}`,
             display: 'flex', flexDirection: 'column'
        }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#3b82f620', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                     <Icons.Server />
                 </div>
                 <h3 style={{ fontSize: '18px', fontWeight: 600, color: theme.text }}>System Health</h3>
             </div>

             {loading ? <p style={{ color: theme.textSec }}>Checking status...</p> : (
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <span style={{ color: theme.textSec, fontSize: '14px' }}>Sanity Database</span>
                         <span style={{ 
                             padding: '4px 10px', 
                             borderRadius: '20px', 
                             fontSize: '12px',
                             fontWeight: 600,
                             background: data?.sanity === 'connected' ? '#dcfce7' : '#fee2e2',
                             color: data?.sanity === 'connected' ? '#166534' : '#991b1b'
                         }}>
                             {data?.sanity === 'connected' ? 'Operational' : 'Issue Detected'}
                         </span>
                     </div>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <span style={{ color: theme.textSec, fontSize: '14px' }}>API Latency</span>
                         <span style={{ color: theme.text, fontWeight: 600, fontSize: '14px' }}>
                             {data?.apiLatency ? `${data.apiLatency}ms` : 'N/A'}
                         </span>
                     </div>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <span style={{ color: theme.textSec, fontSize: '14px' }}>Vercel Deployment</span>
                         <span style={{ color: theme.text, fontWeight: 600, fontSize: '14px', textTransform: 'capitalize' }}>
                             {data?.vercel || 'Unknown'}
                         </span>
                     </div>
                 </div>
             )}
        </div>
    )
}

function RecentActivityWidget({ theme, isSuperAdmin }: any) {
    const [logs, setLogs] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    const fetchLogs = () => {
        setLoading(true)
        fetch('/api/admin/dashboard')
        .then(res => res.json())
        .then(d => {
            if (d.logs) setLogs(d.logs)
            setLoading(false)
        })
        .catch(e => setLoading(false))
    }

    useEffect(() => {
        fetchLogs()
    }, [])
    
    const handleClearLogs = async () => {
        if (!confirm('Are you sure you want to clear ALL activity logs? This cannot be undone.')) return;
        try {
            const res = await fetch('/api/admin/dashboard', { method: 'DELETE' })
            const data = await res.json()
            if (data.success) {
                fetchLogs() // refresh
            } else {
                alert(data.error)
            }
        } catch(e) {
            alert('Failed to clear logs')
        }
    }

    return (
        <div style={{ 
             gridColumn: '1 / -1', // Activities take full width or large
             backgroundColor: theme.cardBg, 
             borderRadius: '16px', 
             padding: '30px', 
             boxShadow: theme.shadow,
             border: `1px solid ${theme.border}`
        }}>
             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                 <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#8b5cf620', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
                        <Icons.Activity />
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: theme.text }}>Recent Activity</h3>
                 </div>
                 
                 {isSuperAdmin && (
                     <button 
                        onClick={handleClearLogs}
                        style={{
                            padding: '8px 12px',
                            borderRadius: '8px',
                            border: `1px solid ${theme.border}`,
                            background: 'transparent',
                            color: theme.textSec,
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}
                        title="Clear all logs"
                     >
                         Clear Logs
                     </button>
                 )}
             </div>

             {loading ? <p style={{ color: theme.textSec }}>Loading activity...</p> : logs.length === 0 ? (
                 <p style={{ color: theme.textSec, fontStyle: 'italic' }}>No recent activity to show.</p> 
             ) : (
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                     {logs.map((log: any, i: number) => {
                         const isPost = log._type === 'post'
                         const date = new Date(log.timestamp || log._createdAt)
                         
                         // Determine Icon & Color
                         let iconColor = '#8b5cf6'
                         let barColor = '#8b5cf6'
                         if (isPost) {
                             iconColor = '#10b981' // Green for new content
                             barColor = '#10b981'
                         } else if (log.action?.includes('Delete') || log.action?.includes('Reject')) {
                             iconColor = '#ef4444' // Red
                             barColor = '#ef4444'
                         }

                         return (
                         <div key={log._id || i} style={{ 
                             display: 'flex', 
                             alignItems: 'flex-start', 
                             gap: '16px', 
                             padding: '16px 0', 
                             borderBottom: i < logs.length - 1 ? `1px solid ${theme.border}` : 'none' 
                         }}>
                             <div style={{ 
                                 width: '8px', 
                                 height: '8px', 
                                 borderRadius: '50%', 
                                 marginTop: '6px',
                                 backgroundColor: barColor 
                             }}></div>
                             <div>
                                 <div style={{ fontSize: '14px', fontWeight: 600, color: theme.text }}>
                                     {isPost ? 'New Blog Published' : log.action} 
                                     <span style={{ fontWeight: 400, color: theme.textSec }}>
                                         {isPost ? ` by ${log.authorName || 'Unknown Author'}` : ` by ${log.performedBy}`}
                                     </span>
                                 </div>
                                 <div style={{ fontSize: '13px', color: theme.textSec, marginTop: '4px' }}>
                                     {isPost ? (
                                         <span>
                                             Published <strong>{log.title}</strong>
                                         </span>
                                     ) : (
                                         log.details
                                     )}
                                 </div>
                                 <div style={{ fontSize: '11px', color: theme.textSec, marginTop: '4px', opacity: 0.7 }}>
                                     {date.toLocaleString()}
                                 </div>
                             </div>
                         </div>
                     )})}
                 </div>
             )}
        </div>
    )
}
