
"use client";

import Image from "next/image";
import { MEDICAL_URL } from "@/lib/constants";

import { useCertificateRedirect } from "@/hooks/useCertificateRedirect";

export default function HeroBanner() {
    const finalUrl = useCertificateRedirect(MEDICAL_URL);

    return (
        <div className="medical-certificate-ad">
            <Image
                src="/assets/images/hero-banner/mobile.webp"
                alt="Medical Certificate Banner"
                fill
                className="hero-bg-mobile"
                priority
                sizes="(max-width: 768px) 100vw"
            />
            <img
                src="/assets/rev/assets/2-61-1.jpg"
                alt="Medical Certificate Banner"
                className="hero-bg-tablet"
                width={1024}
                height={600}
                fetchPriority="high"
                decoding="async"
            />
            <Image
                src="/assets/rev/assets/2-61-1.jpg"
                alt="Medical Certificate Banner"
                fill
                className="hero-bg-desktop"
                priority
                sizes="(min-width: 1024px) 100vw"
            />

            <div className="content-box">
                <p className="tagline">HASSLE FREE CERTIFICATE</p>

                <h1 className="headline">
                    Medical Certificate
                    <br />By Certified Doctors
                </h1>
                <p className="description-1">
                    We provide a quick and convenient way to consult for doctors notes and
                </p>
                <p className="description">
                    medical letters when you need it.
                </p>
                <a href={finalUrl} target="_blank" className="cta-button">
                    GET YOUR MEDICAL CERTIFICATE <span className="plus-icon">+</span>
                </a>
            </div>
            <div className="doctor-image-area"></div>
        </div>
    );
}
