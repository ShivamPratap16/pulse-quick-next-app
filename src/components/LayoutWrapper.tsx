"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import FloatingIcons from "./FloatingIcons";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isStudio = pathname?.startsWith("/studio");
    const isLogin = pathname?.startsWith("/login");
    const isAdmin = pathname?.startsWith("/admin");

    if (isStudio || isLogin || isAdmin) {
        return <>{children}</>;
    }

    return (
        <>
            <Header />
            {children}
            <Footer />
            <FloatingIcons />
        </>
    );
}
