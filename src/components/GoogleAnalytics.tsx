'use client'

import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <>
      {/* GA4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XLW13N9XPC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XLW13N9XPC', {
             send_page_view: false,
             transport_type: 'beacon'
          });
          gtag('config', 'AW-16627812342', {
             send_page_view: false,
             transport_type: 'beacon'
          });
        `}
      </Script>

      {/* GTM */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WVT69XCV');
        `}
      </Script>
      <noscript>
        <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WVT69XCV"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Conversion Tracking */}
      <Script id="conversion-tracking" strategy="lazyOnload">
        {`
          window.addEventListener("load", function () {
            document.addEventListener('click', function(e) {
              if (e.target.closest('[href^="tel:"]')) {
                gtag("event", "conversion", {
                  send_to: "AW-16627812342/F5PCCPPGkcMZEPaP4fg9",
                  transport_type: 'beacon'
                });
              }
            });
          });
        `}
      </Script>
    </>
  )
}
