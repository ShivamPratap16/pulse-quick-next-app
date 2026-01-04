"use client";

import { useCertificateRedirect } from "@/hooks/useCertificateRedirect";

type Props = {
    buttonText?: string;
    indianUrl: string;
};

export default function CertificateButton({ buttonText = 'Get Certificate Now', indianUrl }: Props) {
    const finalUrl = useCertificateRedirect(indianUrl);

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
