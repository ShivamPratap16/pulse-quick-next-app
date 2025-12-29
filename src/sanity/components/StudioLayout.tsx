import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* 1. HIDE FOOTER LINKS (Community, Docs, Privacy, sanity.io) */
  /* Targets the login screen's footer and any links containing 'sanity.io' */
  [data-ui="SignInScreen"] footer,
  [data-ui="SignInScreen"] a[href*="sanity.io"],
  [data-ui="SignInScreen"] div[class*="Box"]:last-child {
      display: none !important;
      visibility: hidden !important;
      height: 0 !important;
      pointer-events: none !important;
  }

  /* 2. REMOVE DEFAULT SANITY LOGO FROM LOGIN CARD */
  /* This targets the 'S' logo inside the card and any default SVG logos */
  [data-ui="SignInScreen"] [data-ui="Card"] > div:first-child > div:first-child,
  [data-ui="SignInScreen"] header svg,
  svg[data-sanity-icon="logo"] {
      display: none !important;
  }

  /* 3. ENLARGE AND CENTER LOGIN CARD */
  [data-ui="SignInScreen"] [data-ui="Card"] {
      min-width: 550px !important; /* Increased width */
      padding: 60px !important;    /* Increased padding */
      border-radius: 24px !important;
      background: #1E1E1E !important; /* Premium Dark Background */
      border: 1px solid #333 !important;
      box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.6) !important;
  }

  /* 4. PREMIUM BUTTON STYLING */
  [data-ui="SignInScreen"] button {
      margin-top: 15px !important;
      height: 56px !important;
      font-weight: 600 !important;
      font-size: 1.1rem !important;
      border-radius: 14px !important;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  [data-ui="SignInScreen"] button:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.4);
  }

  /* 5. FIX NAVBAR OVERLAP */
  /* Target only the branding area text if needed, or rely on config */
  /* [data-ui="Navbar"] [data-ui="Text"] { display: none !important; } */
`

const StudioLayout = (props: any) => {
  return (
    <>
      <GlobalStyle />
      {props.renderDefault(props)}
      
      <style>{`
        /* Extra safety: Nuclear option for any residual footer link text */
        [data-ui="SignInScreen"] * {
            --card-footer-display: none;
        }
        [data-ui="SignInScreen"] div:has(> a[href*="sanity.io"]) {
            display: none !important;
        }
      `}</style>
    </>
  )
}

export default StudioLayout