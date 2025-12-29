
"use client";

import { useState, useEffect } from "react";
import { INTL_URL } from "@/lib/constants";

type Props = {
    buttonText?: string;
    indianUrl: string;
};

export default function CertificateButton({ buttonText = 'Get Certificate Now', indianUrl }: Props) {
    const [finalUrl, setFinalUrl] = useState(indianUrl);

    useEffect(() => {
        // If no international URL is configured, there's no need to check location
        if (!INTL_URL) return;

        const detectLocation = async () => {
             // Check cache first to avoid API rate limits
             const cachedCountry = sessionStorage.getItem('pq_country_code');
             if (cachedCountry) {
                 if (cachedCountry !== 'IN') {
                     setFinalUrl(INTL_URL || indianUrl);
                 }
                 return;
             }

            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                if (data.country_code) {
                    sessionStorage.setItem('pq_country_code', data.country_code);
                    if (data.country_code !== 'IN') {
                        setFinalUrl(INTL_URL || indianUrl); 
                    }
                }
            } catch (error) {
                console.error("Location detection failed, using default URL", error);
                // Keep default indianUrl
            }
        };

        detectLocation();
    }, [indianUrl]);

    return (
        <a className="pq-button pq-button-flat" href={finalUrl} target="_blank" rel="noopener noreferrer">
            <div className="pq-button-block">
                <span className="pq-button-text">{buttonText}</span>
                <span className="plus-icon">+</span>
            </div>
            <style jsx>{`
                .plus-icon {
                    font-weight: bold;
                    font-size: 18px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 30px;
                }
                
                a.pq-button {
                    text-decoration: none !important;
                }
                a.pq-button:hover {
                    text-decoration: none !important;
                }
            `}</style>
        </a>
    );
}
