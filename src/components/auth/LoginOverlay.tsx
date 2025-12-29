"use client";

import React, { Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/admin';

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl });
  };

  return (
    <div className="login-card" onClick={(e) => e.stopPropagation()}>
      <div className="text-center mb-4">
        <Image 
          src="/assets/images/logo/main-optimized.webp"
          alt="PulseQuik" 
          width={150} 
          height={45} 
          className="img-fluid mb-4"
          style={{ objectFit: 'contain', width: '150px', height: 'auto' }}
        />
        <h3 className="fw-bold fs-4 mb-2" style={{ color: '#1a1a1a' }}>Welcome Back</h3>
        <p className="text-muted small">Sign in securely to your dashboard</p>
      </div>

      <button 
        onClick={handleGoogleLogin} 
        className="btn btn-lg w-100 d-flex align-items-center justify-content-center gap-3 google-btn"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12 5.04c3.27 0 6.22 1.13 8.54 3.19l6.29-6.29C22.69 1.54 17.38 0 12 0 7.37 0 3.32 2.68 1.63 6.64l7.14 5.92C9.46 9.38 10.66 5.04 12 5.04z" />
            <path fill="#34A853" d="M12 24c5.96 0 10.87-4.14 12.63-9.59H12v-7.2h8.8c.8 4.29.35 8.79-2.2 12.39-2.58 3.65-6.66 5.6-11.2 5.6-6.17 0-11.66-3.8-13.88-9.4l-7.16 6.04C3.21 21.02 7.37 24 12 24z" />
            <path fill="#4A90E2" d="M24 12.2c0-.86-.06-1.68-.19-2.48H12v4.8h6.84c-.3 1.51-1.16 2.76-2.4 3.76l5.7 4.54c3.35-3.09 5.25-7.61 5.25-12.2" />
            <path fill="#FBBC05" d="M1.63 6.64l-1.3-3.69L.29 .29C-1.87 4.14 -1.87 8.57 .29 12.42l3.29-2.61 1.76-1.5c-1.35-2.27-1.35-4.99 0-7.27l-3.71-3.08" />
            <path fill="#34A853" d="M0 12c0 3.96 1.41 6.84 3.71 9.36L10.87 15.35c-2.25-1.55-3.68-4.08-3.68-7.35 0-3.27 1.43-5.8 3.68-7.35L3.71 0C1.41 2.52 0 5.4 0 9.36" />
        </svg>
        <span className="fw-medium">Sign in with Google</span>
      </button>
      
      <style jsx>{`
        .login-card {
            background: rgba(255, 255, 255, 1);
            padding: 48px 40px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.12);
            width: 100%;
            max-width: 420px;
            max-height: 90vh;
            overflow-y: auto;
            border: 1px solid rgba(0,0,0,0.04);
            transform: translateY(0);
            transition: transform 0.3s ease;
        }
        .google-btn {
            background-color: #fff;
            border: 1px solid #e1e4e8;
            color: #3f4448;
            font-size: 16px;
            padding: 14px;
            border-radius: 12px;
            transition: all 0.2s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
        .google-btn:hover {
            background-color: #f8f9fa;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            border-color: #d1d5da;
        }
        .google-btn:active {
            transform: translateY(0);
            box-shadow: none;
        }
      `}</style>
    </div>
  );
}

export default function LoginOverlay() {
  const router = useRouter();
  
  const handleOverlayClick = () => {
    router.push('/');
  };

  return (
    <div className="login-overlay" onClick={handleOverlayClick}>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
      <style jsx>{`
        .login-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            background: rgba(0, 0, 0, 0.4); /* Slight overlay dim */
            backdrop-filter: blur(8px); /* The Blur Effect */
            cursor: pointer;
        }
        /* Restore cursor for inner card */
        .login-overlay :global(.login-card) {
            cursor: default;
        }
      `}</style>
    </div>
  );
}
