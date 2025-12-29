import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  trailingSlash: true,
  async redirects() {
    return [
        { source: '/payment-page', destination: '/medical-certificate/payment', permanent: true },
        { source: '/medical-certificate-in-mumbai', destination: '/online-medical-certificate-in-mumbai', permanent: true },
        { source: '/medical-certificate-in-delhi', destination: '/online-medical-certificate-in-delhi', permanent: true },
        { source: '/medical-certificate-in-kolkata', destination: '/online-medical-certificate-in-kolkata', permanent: true },
        { source: '/medical-certificate-in-bangalore', destination: '/online-medical-certificate-in-bangalore', permanent: true },
        { source: '/medical-certificate-in-bengaluru', destination: '/online-medical-certificate-in-bangalore', permanent: true },
        { source: '/medical-certificate-in-chennai', destination: '/online-medical-certificate-in-chennai', permanent: true },
        { source: '/medical-certificate-in-hyderabad', destination: '/online-medical-certificate-in-hyderabad', permanent: true },
        { source: '/medical-certificate-in-pune', destination: '/online-medical-certificate-in-pune', permanent: true },
        { source: '/online-medical-certificates-in-mumbai', destination: '/online-medical-certificate-in-mumbai', permanent: true },
        { source: '/online-medical-certificates-in-delhi', destination: '/online-medical-certificate-in-delhi', permanent: true },
        { source: '/online-medical-certificates-in-kolkata', destination: '/online-medical-certificate-in-kolkata', permanent: true },
        { source: '/online-medical-certificates-in-bangalore', destination: '/online-medical-certificate-in-bangalore', permanent: true },
        { source: '/online-medical-certificates-in-chennai', destination: '/online-medical-certificate-in-chennai', permanent: true },
        { source: '/online-medical-certificates-in-hyderabad', destination: '/online-medical-certificate-in-hyderabad', permanent: true },
        { source: '/author/pulsequik-com', destination: '/', permanent: true },
        { source: '/online-medical-certificates', destination: '/medical-certificates', permanent: true },
        { source: '/get-best-medical-certificate-online-in-a-minutes', destination: '/medical-fitness-certificate', permanent: true },
        { source: '/best-doctors-consulting-and-medicine', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
