
import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import Click2Action from '@/components/Click2Action';
import ProcessTow from '@/components/ProcessTow';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CertificateButton from '@/components/CertificateButton';
import { MEDICAL_URL, indianCities } from '@/lib/constants';
import { getMetadata } from '@/lib/meta-data';
import { getCityBreadcrumb } from '@/lib/breadcrumb';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import CertificateSection from '@/components/CertificateSection';

type Props = {
    params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
    return indianCities.map((city) => ({
        city: city,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params;
    if (!city) return { title: 'Page Not Found' };

    const path = `/online-medical-certificate-in-${city}`;
    
    // Use getMetadata utility if it supports strict lookup (it does fallback)
    // But since this is a dynamic page not in meta.json usually, we rely on getMetadata's fallback or construct it here.
    // getMetadata fallback logic:
    // const formattedTitle = routeKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    // ...
    // This is good.
    return getMetadata(path) || {
        title: `Online Medical Certificate in ${city.charAt(0).toUpperCase() + city.slice(1)} | PulseQuik`,
        description: `Get a valid Medical Certificate in ${city.charAt(0).toUpperCase() + city.slice(1)} online within minutes. Doctor Consultation included.`
    };
}

export default async function OnlineMedicalCertificateCity({ params }: Props) {
    const { city } = await params;
    if (!city) return notFound();
    
    const formattedCity = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const pageTitle = `Online Medical Certificate in ${formattedCity}`;

    const breadcrumbItems = [
        { label: "Home", href: "/", icon: "fas fa-home" },
        ...getCityBreadcrumb('online-medical-certificate-in-india', city)
        // getCityBreadcrumb returns items where the last one is the current page.
        // We need to ensure the last item is active.
    ].map((item, index, arr) => ({
        ...item,
        active: index === arr.length - 1
    }));

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb
                pageName={pageTitle}
                breadcrumbItems={breadcrumbItems}
                backgroundImage="/assets/images/breadcrumb.webp"
            />
            <Click2Action 
                certificate_name="Medical" 
                is_certificate_city={true} 
                certificate_city={formattedCity}
            />

            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="text-container pb-2">
                                <h2 className="">Ultimate Guide for Medical Certificates in {formattedCity}: Get Your Required Medical Certificate Online in Minutes</h2>
                            </div>
                        </div>
                        <p>
                            Need medical certificate in {formattedCity}, getting the required medical certificate has never been so easy. However, in today&apos;s fast-paced world, obtaining a legitimate medical certificate, fast and without complications, is critical. Whether it be for work, travel, sporting, or legal reasons, PulseQuik can provide trusted and certified medical certificates issued by registered medical MBBS professionals in {formattedCity}.
                        </p>

                        <h2>Reasons, Why Do You Need a Medical Certificate in {formattedCity}?</h2>
                        <p>A medical certificate is an document issued by a licensed healthcare professional as evidence of your health status. Medical certificates are required for various personal and professional reasons including the following:</p>
                        <ul className="custom-list">
                            <li>Verification of time spent off due to sickness</li>
                            <li>Fitness assessment for work or return to work</li>
                            <li>Workplace modifications</li>
                            <li>Travel permissions</li>
                            <li>Evidence in a legal case</li>
                        </ul>

                        <p>At PulseQuik, we provide a variety of medical certificates depending on what you need. Ensuring all are authentic and meet the medical guidelines.</p>

                        <h2>Types of Medical Certificates Offered by PulseQuik in {formattedCity}</h2>
                    </div>
                </div>
                <CertificateSection className="certificate-margin-top20" />
            </section>

            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <h2>Why Choose PulseQuik for Medical Certificates in {formattedCity}?</h2>
                        <ul className="custom-list">
                            <li><strong>Verified & Certified Medical Doctors:</strong> All medical certificates are issued by healthcare professionals on a state-listed scale.</li>
                            <li><strong>Quick & Secure Process:</strong> Apply for your medical certificate online and receive it without long wait times.</li>
                            <li><strong>Governed by Law:</strong> All certificates comply with government and medical regulatory standards.</li>
                            <li><strong>100% Digital & Paperless:</strong> Easy online application, and receive medical certificates online quickly.</li>
                        </ul>
                        <h2>How to Get a Medical Certificate Online from PulseQuik in {formattedCity}?</h2>
                        <ul className="custom-list">
                            <li><strong>Step 1:</strong> Choose the type of medical certificate needed from our list.</li>
                            <li><strong>Step 2:</strong> Fill out the online form, including personal information and your medical details.</li>
                            <li><strong>Step 3:</strong> Complete Secure Payment.</li>
                            <li><strong>Step 4:</strong> Your application will be reviewed and a telehealth consultation will happen if necessary.</li>
                            <li><strong>Step 5:</strong> You will receive your digital medical certificate within 40 minutes.</li>
                        </ul>
                        <ProcessTow className="pq-pb-140" />

                        <p><strong>📢 Note:</strong> Handwritten certificates can be shipped to your address in {formattedCity} upon request.</p>
                        <p><strong>📢 Note:</strong> A digital medical certificate issued under the Telemedicine Act of 2019 is legally valid in India.</p>

                        <h3>Conclusion</h3>
                        <p>Getting a medical certificate online in {formattedCity} is now easier than ever with PulseQuik. Whether for sick leave, fitness to work, or travel clearance, our medical certificates are fast, secure, and government-compliant—available in just a few clicks.</p>

                        <p><strong>Need a medical certificate in {formattedCity}? Get yours today!</strong></p>
                        <div className="col-xl-4 d-xl-flex justify-content-xl-end align-items-center text-left mt-4 mt-xl-0">
                            <CertificateButton buttonText="Click To Get Certificate Now" indianUrl={MEDICAL_URL} />
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
            <FAQ />
        </main>
    );
}
