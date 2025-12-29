'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    style?: React.CSSProperties;
    className?: string;
}

export default function AnimatedCounter({ 
    end, 
    duration = 2000, 
    suffix = '', 
    style, 
    className 
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function (easeOutExpo)
            const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
            
            setCount(Math.floor(ease * end));

            if (percentage < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [hasAnimated, end, duration]);

    return (
        <span ref={countRef} className={className} style={style}>
            {count}{suffix}
        </span>
    );
}
