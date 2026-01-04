
"use client";

import { useState, useEffect } from "react";
import { INTL_URL, INTL_PAGE_ROUTE } from "@/lib/constants";

type Props = {
    buttonText?: string;
    indianUrl: string;
};

export default function CertificateButton({ buttonText = 'Get Certificate Now', indianUrl }: Props) {
    const [finalUrl, setFinalUrl] = useState(indianUrl);

    useEffect(() => {
        // If no international URL is configured, there's no need to check location
        if (!INTL_URL) return;

        let isMounted = true;

        const detectLocation = async () => {
             // Check cache first
             const cachedCountry = sessionStorage.getItem('pq_user_country_v4');
             
             if (cachedCountry) {
                 if (isMounted && cachedCountry !== 'IN') {
                     setFinalUrl(INTL_URL || indianUrl);
                 }
                 return;
             }

            // Provider 1: api.country.is
            try {
                const response = await fetch('https://api.country.is');
                if (!response.ok) throw new Error('Geo API failed');
                
                const data = await response.json();
                if (data.country) {
                    sessionStorage.setItem('pq_user_country_v4', data.country);
                    if (isMounted && data.country !== 'IN') {
                        setFinalUrl(INTL_URL || indianUrl); 
                    }
                    return; // Success, exit
                }
            } catch (error) {
                // Silently fail to fallback
            }

            // Provider 2: ipapi.co (Fallback)
            try {
                const response = await fetch('https://ipapi.co/json/');
                if (!response.ok) throw new Error('Fallback Geo API failed');

                const data = await response.json();
                if (data.country_code) {
                    sessionStorage.setItem('pq_user_country_v4', data.country_code);
                    if (isMounted && data.country_code !== 'IN') {
                        setFinalUrl(INTL_URL || indianUrl); 
                    }
                    return; // Success, exit
                }
            } catch (error) {
                // Default to Indian URL
            }
        };

        detectLocation();

        return () => {
            isMounted = false;
        };
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
