import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/app/page"; 
import LoginOverlay from "@/components/auth/LoginOverlay";
import FloatingIcons from "@/components/FloatingIcons";

export const metadata = {
  title: "Login - PulseQuik",
};

export default function LoginPage() {
  return (
    <>
      {/* Stylesheets required for the site look (normally in (site)/layout.tsx) */}
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

      {/* Background Content (Site Layout + Home Page) */}
      <div aria-hidden="true" style={{ 
          filter: 'blur(5px)', 
          pointerEvents: 'none', 
          height: '100vh', 
          overflow: 'hidden',
          opacity: 0.8
      }}>
          <Header />
            {/* Render Home Page content */}
            <Home />
          <Footer />
          {/* Include FloatingIcons visually if needed, though usually fixed position might conflict with blur container unless inside it */}
           <FloatingIcons /> 
      </div>

      {/* Login Overlay */}
      <React.Suspense fallback={<div>Loading...</div>}>
          <LoginOverlay />
      </React.Suspense>
    </>
  );
}
