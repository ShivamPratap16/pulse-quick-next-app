"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Loader() {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Reset loader to visible state for the new route
        setShow(true);
        setIsLoading(true);

        // Simulating loading delay for smooth transition
        const timeout = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => setShow(false), 500); // Remove from DOM after fade out
        }, 400); // Loader visible duration

        return () => clearTimeout(timeout);
    }, [pathname]);

    if (!show) return null;

    return (
        <div id="pq-loading" style={{ opacity: isLoading ? 1 : 0, transition: 'opacity 0.5s ease-out' }}>
            <div id="pq-loading-center">
                <Image
                    src="/assets/images/logo/main-optimized.webp"
                    alt="loading"
                    width={200}
                    height={67}
                    priority
                />
            </div>
        </div>
    );
}
