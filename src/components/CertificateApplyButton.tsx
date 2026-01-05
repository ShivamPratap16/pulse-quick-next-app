
"use client";

import { FORM1A_URL, CARA_FORM_URL, MEDICAL_URL } from "@/lib/constants";
import { useCertificateRedirect } from "@/hooks/useCertificateRedirect";

type Props = {
    certificate_name: string;
    buttonText?: string;
};

export default function CertificateApplyButton({ certificate_name, buttonText = 'Apply' }: Props) {
    let paymentLink = "";
    if (certificate_name === 'Form 1A Fitness') {
        paymentLink = FORM1A_URL || "#";
    } else if (certificate_name === 'CARA Fitness') {
        paymentLink = CARA_FORM_URL || "#";
    } else {
        paymentLink = MEDICAL_URL;
    }

    const finalLink = useCertificateRedirect(paymentLink);

    return (
        <>
            <a
                href={finalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-auto pq-apply-btn"
                aria-label={`Apply for Online ${certificate_name} Certificate`}
            >
                {buttonText}
            </a>
            <style jsx>{`
                .pq-apply-btn {
                    display: inline-block;
                    padding: 4px 16px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #fff;
                    background: var(--primary-color, #2490eb);
                    border-radius: 16px;
                    border: none;
                    text-decoration: none;
                    transition: background 0.2s;
                    margin-left: 8px;
                }
                .pq-apply-btn:hover, .pq-apply-btn:focus {
                    background: #14457b;
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>
        </>
    );
}
