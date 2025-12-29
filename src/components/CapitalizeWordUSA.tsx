"use client";

import React from 'react';

type Props = {
    city_name: string;
    certificate_name?: string;
};

// Helper to capitalize words
function capitalizeWords(str: string) {
    if (!str) return '';
    return str.toLowerCase().replace(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
}

export default function CapitalizeWordUSA({ city_name, certificate_name = 'Medical' }: Props) {
    const cityName = capitalizeWords(city_name);

    return (
        <section className="pq-90">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <div className="text-container pb-2">
                            <h1>Get Your Online Medical Certificate in {cityName}, USA – Quick, Reliable & Doctor Verified</h1>
                            <p>
                                Want a medical certificate urgently in {cityName}? Whether it's for work, school, travel, or personal paperwork, PulseQuik provides online medical certificates in {cityName} that are doctor-signed, legally compliant, and delivered within 30–40 minutes – all from home.
                            </p>
                        </div>

                        <h2>Why Choose PulseQuik in {cityName}, USA?</h2>
                        <ul className="custom-list ps-4 mb-3">
                            <li>✅ <strong>Same-Day Delivery:</strong> Receive your certificate within less than 30-40 minutes.</li>
                            <li>✅ <strong>Certified Doctors:</strong> Documents reviewed and signed by licensed physicians.</li>
                            <li>✅ <strong>Accepted Across {cityName} & Nationwide:</strong> Valid for employers, schools, airlines, banks, and legal authorities.</li>
                            <li>✅ <strong>100% Online:</strong> No visits to clinics, no waiting – complete the process on your laptop or phone.</li>
                            <li>✅ <strong>HIPAA-Compliant & Confidential:</strong> Your health information is completely safeguarded.</li>
                        </ul>

                        <h2>Types of Online Medical Certificates Available in {cityName}</h2>
                        <ul className="custom-list ps-4 mb-3">
                            <li><strong>Sick Leave Certificate</strong> – For school or work absence due to sickness.</li>
                            <li><strong>Fitness Certificate</strong> – For gym, sports, or work.</li>
                            <li><strong>Return-to-Work Certificate</strong> – After illness clearance for returning to work.</li>
                            <li><strong>Mental Health Certificate</strong> – For anxiety, stress, or other mental health issues.</li>
                            <li><strong>Chronic Illness Certificate</strong> – For chronic conditions needing evidence.</li>
                            <li><strong>Fit to Fly / Unfit to Travel Certificate</strong> – For travel approval or delay.</li>
                            <li><strong>Work From Home Certificate</strong> – For remote work.</li>
                            <li><strong>Caretaker Certificate</strong> – For leave to take care of a family member.</li>
                        </ul>

                        <h2>How to Obtain a Medical Certificate Online in {cityName}</h2>
                        <ol className="custom-list ps-4 mb-3">
                            <li><strong>Complete a Quick Online Form:</strong> Provide your personal and medical information on our secure website.</li>
                            <li><strong>Doctor Review & Teleconsultation (if required):</strong> A licensed doctor will review your details and might call you for a brief video or phone consultation.</li>
                            <li><strong>Get Your Certificate:</strong> Your signed certificate is delivered to your Email/WhatsApp within 30–40 minutes.</li>
                        </ol>

                        <h2>Where Are These Certificates Accepted?</h2>
                        <p>PulseQuik medical certificates are accepted and valid by:</p>
                        <ul className="custom-list ps-4 mb-3">
                            <li>✔️ Employers (corporate offices, MNCs, startups)</li>
                            <li>✔️ Educational institutions (colleges, universities)</li>
                            <li>✔️ Airlines (for travel documents)</li>
                            <li>✔️ Banks and public sector offices</li>
                            <li>✔️ Government agencies and legal authorities</li>
                        </ul>

                        <p>No matter if you’re applying for leave, fitness reports, or travel authorization, our online certificates are compliant with all professional and legal requirements in the USA.</p>

                        <h2>Trusted by Thousands Nationwide in the USA</h2>
                        <p>Join the thousands who trust PulseQuik for fast, verified, and secure medical certification in {cityName} and other US cities.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
