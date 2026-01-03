import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Testimonials from '@/components/Testimonials';
import ProcessTow from '@/components/ProcessTow';
import { INTL_URL } from '@/lib/constants';
import { getMetadata } from '@/lib/meta-data';
import { getBreadcrumbItems } from '@/lib/breadcrumb';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = getMetadata('/international-medical-certificate') || {
    title: 'International Medical Certificate',
    description: 'Get an authentic, doctor-signed International Medical Certificate online. Valid for travel, work, and visa purposes globally.',
};

export default function InternationalMedicalCertificate() {
    const breadcrumbItems = [
        { label: 'Home', href: '/', icon: 'fas fa-home' },
        ...getBreadcrumbItems('international-medical-certificate').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb
                pageName="International Medical Certificate"
                breadcrumbItems={breadcrumbItems}
                backgroundImage="/assets/images/breadcrumb.webp"
            />

            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3 mt-4">
                            <h2 className="pb-2">International Medical Certificate – Get Yours Online with Pulsequik</h2>
                        </div>
                        <div className="col-12">
                            <p>
                                At Pulsequik, we provide internationally recognized, doctor-certified medical certificates that are valid in many countries. Whether you need one for work, travel, study, or visa purposes, we ensure a seamless experience adhering to global compliance and security standards.
                            </p>
                            <p>
                                Our team of authorized medical professionals follows WHO health policies and HIPAA principles to ensure accuracy, confidentiality, and data protection. This ensures your medical certificate is legally valid and meets the strictest international requirements.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <h2>Why Choose Our International Medical Certificates?</h2>
                            <ul className="custom-list">
                                <li>Globally recognized – Suitable for travel, work, and visa applications.</li>
                                <li>Doctor-certified – Issued by licensed medical doctors.</li>
                                <li>100% online and secure – No clinic visits, ensuring full confidentiality.</li>
                                <li>Timely delivery – Receive your certificate efficiently after doctor review.</li>
                                <li>Affordable Pricing – High-quality service at a fraction of traditional consultation costs without any hidden charges.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 mb-3 mt-4">
                            <h2 className="pb-2">International Medical Certificate – Get Yours Online with Pulsequik</h2>
                        </div>
                        <div className="col-12">
                            <p>Follow these simple steps to get your International Medical Certificate:</p>
                            <ul className="custom-list">
                                <li><strong>Fill Out the Online Form:</strong> Provide your details and reason for requesting the certificate.</li>
                                <li><strong>Doctor’s Review & Approval:</strong> A certified doctor will assess your request.</li>
                                <li><strong>Receive Your Certificate:</strong> After review and approval, you’ll receive your digital doctor-certified International Medical Certificate via WhatsApp.</li>
                            </ul>
        
                            <p>No clinic visits, no waiting – just a straightforward, hassle-free process!</p>
                            <p>Whether you're applying for a work permit, student visa, travel clearance, or employment verification, we make it fast, easy, and reliable to get your international medical certificate online.</p>
                            <p>Get started now to receive your International Medical Certificate.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mt-4">
                            {/* Using a direct anchor tag styled as a button to match Vue implementation */}
                            <a
                                className="pq-button pq-button-flat"
                                href={INTL_URL || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="pq-button-block">
                                    <span className="pq-button-text">Get International Medical Certificate</span>
                                    <span className="plus-icon" style={{
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '30px',
                                        marginLeft: '10px'
                                    }}>+</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
            <div className="mb-5 pb-5">
                {/* Added margin/padding wrapper similar to fix in dynamic pages */}
                <ProcessTow className="mb-5" />
            </div>
        </main>
    );
}
