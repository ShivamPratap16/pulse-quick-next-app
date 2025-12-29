import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
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
            <Header />
            {children}
            <Footer />
            <FloatingIcons />
        </>
    );
}
