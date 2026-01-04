
import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Click2Action from '@/components/Click2Action';
import CertificateSection from '@/components/CertificateSection';
import ProcessTow from '@/components/ProcessTow';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CertificateButton from '@/components/CertificateButton';
import { MEDICAL_URL } from '@/lib/constants';
import { getMetadata } from '@/lib/meta-data';
import { getBreadcrumbItems } from '@/lib/breadcrumb';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = getMetadata('/medical-certificates') || {
    title: 'Medical Certificates - PulseQuik',
    description: 'Get your medical certificates online in minutes.'
};

export default function MedicalCertificates() {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        ...getBreadcrumbItems('medical-certificates').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb
                pageName="Medical Certificates"
                breadcrumbItems={breadcrumbItems}
                backgroundImage="/assets/images/breadcrumb.webp"
            />
            <Click2Action certificate_name="Medical" is_certificate_city={false} />

            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-3">Ultimate Guide for Medical Certificates: Get Your Required Medical Certificate Online in Minutes</h2>
                            <p>
                                Need medical certificate, getting the required medical certificate has never been so easy. However, in today's fast-paced world, obtaining a legitimate medical certificate, fast and without complications, is critical. Whether it be for work, travel, sporting, or legal reasons, PulseQuik can provide trusted and certified medical certificates issued by registered medical MBBS professionals.
                            </p>

                            <h2>Reasons, Why Do You Need a Medical Certificate?</h2>
                            <p>A medical certificate is an document issued by a licensed healthcare professional as evidence of your health status. Medical certificates are required for various personal and professional reasons including the following:</p>
                            <ul className="custom-list">
                                <li>Verification of time spent off due to sickness</li>
                                <li>Fitness assessment for work or return to work</li>
                                <li>Workplace modifications</li>
                                <li>Travel permissions</li>
                                <li>Evidence in a legal case</li>
                            </ul>

                            <p>At PulseQuik, we provide a variety of medical certificates depending on what you need. Ensuring all are authentic and meet the medical guidelines.</p>

                            <h2>Types of Medical Certificates Offered by PulseQuik</h2>
                        </div>
                    </div>
                </div>
                <CertificateSection className="certificate-margin-top20" />
            </section>

            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Why Choose PulseQuik for Medical Certificates?</h2>
                            <ul className="custom-list">
                                <li><strong>Verified & Certified Medical Doctors:</strong> All medical certificates are issued by healthcare professionals on a state-listed scale.</li>
                                <li><strong>Quick & Secure Process:</strong> Apply for your medical certificate online and receive it without long wait times.</li>
                                <li><strong>Governed by Law:</strong> All certificates comply with government and medical regulatory standards.</li>
                                <li><strong>100% Digital & Paperless:</strong> Easy online application, and receive medical certificates online quickly.</li>
                            </ul>
                            <h2>How to Get a Medical Certificate Online from PulseQuik?</h2>
                            <ul className="custom-list">
                                <li><strong>Step 1:</strong> Choose the type of medical certificate needed from our list.</li>
                                <li><strong>Step 2:</strong> Fill out the online form, including personal information and your medical details.</li>
                                <li><strong>Step 3:</strong> Complete Secure Payment.</li>
                                <li><strong>Step 4:</strong> Your application will be reviewed and a telehealth consultation will happen if necessary.</li>
                                <li><strong>Step 5:</strong> You will receive your digital medical certificate within 40 minutes.</li>
                            </ul>
                            <ProcessTow className="pq-pb-140" />

                            <p><strong>📢 Note:</strong> Handwritten certificates can be shipped to your address upon request.</p>
                            <p><strong>📢 Note:</strong> A digital medical certificate issued under the Telemedicine Act of 2019 is legally valid in India.</p>

                            <h3>Conclusion</h3>
                            <p>Getting a medical certificate online is now easier than ever with PulseQuik. Whether for sick leave, fitness to work, or travel clearance, our medical certificates are fast, secure, and government-compliant—available in just a few clicks.</p>

                            <p><strong>Need a medical certificate? Get yours today!</strong></p>
                            <div className="col-xl-4 d-xl-flex justify-content-xl-end align-items-center text-left mt-4 mt-xl-0">
                                <CertificateButton buttonText="Click To Get Certificate Now" indianUrl={MEDICAL_URL} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
            <FAQ />
        </main>
    );
}
