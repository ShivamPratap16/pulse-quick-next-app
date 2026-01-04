"use client";

import { useState, useEffect } from "react";
import { INTL_URL, CARA_FORM_URL, FORM1A_URL } from "@/lib/constants";

export function useCertificateRedirect(indianUrl: string) {
    const [finalUrl, setFinalUrl] = useState(indianUrl);

    useEffect(() => {
        // Exception: If the button is for CARA or Form 1A, do NOT redirect to International Form.
        if (indianUrl === CARA_FORM_URL || indianUrl === FORM1A_URL) return;

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

    return finalUrl;
}
