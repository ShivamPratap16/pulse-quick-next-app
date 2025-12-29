'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            if (scrollHeight) {
                setProgress((currentScroll / scrollHeight) * 100);
            }
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${progress}%`,
                height: '4px',
                background: 'linear-gradient(90deg, #007bff, #00d4ff)',
                zIndex: 9999,
                transition: 'width 0.1s ease-out',
                boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)'
            }}
        />
    );
}
