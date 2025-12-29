'use client'

import { usePathname } from 'next/navigation'

export default function SiteStyles() {
  const pathname = usePathname()
  
  // Exclude styles for Admin, Studio, and Login routes which have their own isolated styles
  const isIsolatedRoute = 
    pathname?.startsWith('/studio') || 
    pathname?.startsWith('/admin') || 
    pathname?.startsWith('/login')

  if (isIsolatedRoute) {
    return null
  }

  return (
      <>
        {/* Bootstrap is loaded via import in layout, but these override styles should be conditional */}
        <link rel="stylesheet" href="/assets/css/process.min.css" />
        <link rel="stylesheet" href="/assets/css/city-hover.min.css" />
        <link rel="stylesheet" href="/assets/css/certificate.min.css" />
        <link rel="stylesheet" href="/assets/css/hero-banner.min.css" />
        <link rel="stylesheet" href="/assets/css/ionicons.min.css" />
        <link rel="stylesheet" href="/assets/css/faq.css" />
        <link rel="stylesheet" href="/assets/css/overrides.min.css" />
        <link rel="stylesheet" href="/assets/css/style.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/responsive.min.css" />
      </>
  )
}
