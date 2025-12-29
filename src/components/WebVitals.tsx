'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

export default function WebVitals() {
  // Report Web Vitals to Google Analytics
  useReportWebVitals((metric) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: metric.name,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // CLS is multiplied by 1000 in the original Vue code
      });
    }
  });

  // Connection speed monitoring for slow networks
  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      const updateConnectionStatus = () => {
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          document.documentElement.classList.add('slow-connection');
        } else {
          document.documentElement.classList.remove('slow-connection');
        }
      };

      updateConnectionStatus();
      connection.addEventListener('change', updateConnectionStatus);
      return () => connection.removeEventListener('change', updateConnectionStatus);
    }
  }, []);

  return null;
}
