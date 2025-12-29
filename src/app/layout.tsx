import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather, Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "PulseQuik",
  description: "Online Medical Certificates",
  icons: {
    icon: '/favicon.ico',
  },
};

import { Providers } from "@/components/Providers";
import SiteStyles from "@/components/SiteStyles";

import StyledComponentsRegistry from '@/lib/registry'

import GoogleAnalytics from "@/components/GoogleAnalytics";
import SchemaOrg from "@/components/SchemaOrg";
import WebVitals from "@/components/WebVitals";
import Loader from "@/components/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SiteStyles />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${poppins.variable}`} suppressHydrationWarning={true}>
        <GoogleAnalytics />
        <SchemaOrg />
        <WebVitals />
        <Loader />
        <StyledComponentsRegistry>
            <Providers>
                <LayoutWrapper>{children}</LayoutWrapper>
            </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
