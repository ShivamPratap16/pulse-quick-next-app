"use client";

import React from 'react';
import ProcessTow from './ProcessTow'; // Reuse existing component (check import path)
// Note: Vue used LazyProcessTow. We can use regular ProcessTow or dynamic import if needed.
import { FORM1A_URL } from '@/lib/constants';

type Props = {
    city_name: string;
    certificate_name: string;
};

// Start Helper function
function capitalizeFirstLetterOfWord(cityName: string) {
    if (!cityName) return '';
    return cityName.replace(/(?:^|\s|-)(\S)/g, (x) => x.toUpperCase()).replace(/-/g, ' ');
}

export default function Form1aCapitalizeWord({ city_name, certificate_name }: Props) {
    const cityName = capitalizeFirstLetterOfWord(city_name);
    // Vue uses config.public.FORM1A_URL. Next.js uses constants.
    const paymentLink = FORM1A_URL;

    return (
        <section className="pq-90">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <p>Getting an RTO medical fitness certificate is a pain, but with us, it is so easy. Whether you require a Form 1A certificate to apply for, renew, or obtain a commercial vehicle permit, our wide-ranging online service provides certification in the comfort of your home in {cityName}.</p>

                        <h2>What is Form 1A RTO Medical Fitness Certificate?</h2>
                        <p>A Form 1A Medical Certificate is a government-mandated health document necessary for all RTOs as mandated by Rule 5 of the CMV Rules, 1989. The certificate is proof that the applicant is physically and mentally fit to hold a motor vehicle license. This certificate must be issued by a registered medical practitioner (MBBS doctor) approved by the RTO.</p>

                        <h2>Who Is Required To Have A Form 1A RTO Medical Fitness Certificate?</h2>
                        <ul className="custom-list">
                            <li>Every applicant above 40 years – Must possess this certificate while applying for a new driving license and also while renewing the existing one.</li>
                            <li>Commercial vehicle drivers – Mandatory while seeking a heavy transport or commercial vehicle license.</li>
                            <li>Learner’s License applicants – Some RTOs will ask for this certificate from first-time applicants.</li>
                            <li>Driving license renewal – Essential for drivers renewing licenses beyond age 40.</li>
                            <li>People with medical conditions – Required for those with medical problems. They should obtain this as proof of those with weak eyesight, diabetes, and any other medical conditions.</li>
                        </ul>
                        <p>Even if it’s not mandatory for your application, obtaining a Form 1A certificate is always a good idea to ensure you're in good health to drive.</p>

                        <h2>How to Apply for Form 1A Medical Fitness Certificate Online in {cityName}?</h2>
                        <p>
                            Getting a Form 1A medical certificate used to require a visit to a certified medical practitioner. However, Pulsequik Online Services make the certificate obtainable without leaving a comfortable chair. Here’s how:
                        </p>
                        <ul className="custom-list">
                            <li><strong>Fill Out the Application:</strong> Provide details such as your name, contact information, and any illness history (if applicable).</li>
                            <li><strong>Consultation with Doctor (if needed):</strong> In some cases, you may be asked to connect with a certified doctor to confirm and verify your medical fitness.</li>
                            <li><strong>Receive Your Certificate:</strong> After review and approval, you’ll receive your digital doctor-certified Form 1A Fitness Certificate via email/WhatsApp within 40 minutes.</li>
                        </ul>

                        <div className="pq-pb-140">
                            {/* Assuming ProcessTow is self-contained. Vue passed class="pq-pb-140" to LazyProcessTow. */}
                            {/* We can pass className if ProcessTow accepts it (checked in previous turn, it does) */}
                            <ProcessTow className="" />
                        </div>

                        <p>The entire process is simple, stress-free, fast, affordable, and ensures you receive a valid, RTO-accepted document.</p>

                        <h2>Why Choose Pulsequik for Your RTO Medical Certificate?</h2>
                        <ul className="custom-list">
                            <li><strong>Quick Turnaround –</strong> Get your certificate soft copy within 40 minutes of your application.</li>
                            <li><strong>100% Online Process –</strong> No more long waits at clinics or hospital visits and paperwork hassles.</li>
                            <li><strong>Government-Recognized Doctors –</strong> Certified medical professionals issue the certificate—under HIPPA-compliant and WHO (World Health Organization) guidelines, ensuring authenticity and reliability.</li>
                            <li><strong>Valid Across India –</strong> Accepted by all RTO offices in India.</li>
                            <li><strong>Handwritten Certificate Options –</strong> we also offer handwritten certificates with shipping options. This personalized touch can often be preferred for certain applications or personal records.</li>
                        </ul>

                        <p><strong>So, why wait? Don't Delay!</strong></p>
                        <div className="col-xl-4 d-xl-flex justify-content-xl-end align-items-center text-left mt-4 mt-xl-0">
                            <a className="pq-button pq-button-flat" href={paymentLink}>
                                <div className="pq-button-block">
                                    <span className="pq-button-text">Get Form 1A Fitness Certificate Now</span>
                                    <i className="ion ion-plus-round"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
