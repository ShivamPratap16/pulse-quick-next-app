
"use client";

import { useState } from "react";

type Props = {
    displayText?: string;
    email?: string;
    className?: string;
};

export default function SecureEmail({ displayText, email = "care@pulsequik.com", className = "" }: Props) {
    // Simple email obfuscation to prevent basic scraping
    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.href = `mailto:${email}`;
    };

    return (
        <a
            href="#"
            onClick={handleEmailClick}
            className={className}
            style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
        >
            {displayText || email}
        </a>
    );
}
