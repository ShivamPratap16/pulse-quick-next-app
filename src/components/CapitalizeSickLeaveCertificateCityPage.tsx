"use client";

import React from 'react';
import { MEDICAL_URL } from '@/lib/constants';

type Props = {
    city_name: string;
    certificate_name?: string;
};

// Helper to capitalize words
function capitalizeWords(str: string) {
    if (!str) return '';
    return str.toLowerCase().replace(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
}

export default function CapitalizeSickLeaveCertificateCityPage({ city_name, certificate_name = 'Sick Leave Certificate' }: Props) {
    const cityName = capitalizeWords(city_name);
    // Use the medical URL for sick leave, matching Vue config.public.MEDICAL_URL logic
    const sickLeaveUrl = MEDICAL_URL || '#';

    return (
        <section className="pq-90">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        {/* SEO H1 */}
                        <h1 className="mb-3">
                            Online Medical Certificate for Sick Leave in {cityName} – Fast, Verified & 100% Legit
                        </h1>

                        {/* SEO Meta-like intro */}
                        <p className="lead" style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                            Get your online medical certificate for sick leave within 40 minutes. Legit, doctor-verified,
                            affordable & accepted everywhere. Learn how to get a medical certificate for sick leave today.
                        </p>

                        <hr />

                        <p>
                            When you're unwell, the last thing you want is to wait in long clinic lines or search endlessly for a
                            “medical certificate from doctor near me.” That’s where the modern solution from us online medical certificate for
                            sick leave comes in. This guide explains everything you need to know about getting your sick leave
                            certificate quickly, legally, and stress-free.
                        </p>

                        <p>
                            <strong>PulseQuik</strong> provides a fast, trusted, and legally valid way to get your medical certificate
                            for sick leave right from home in {cityName}. With 30–40 minute delivery, licensed doctors, and complete
                            online convenience, it beats every competitor.
                        </p>

                        <hr />

                        <h2>What Is an Online Medical Certificate for Sick Leave?</h2>
                        <p>
                            An online medical certificate for sick leave is a digitally issued doctor’s note confirming that you’re
                            unwell and need time off from work, school, exams, travel, or other responsibilities. It works the same way
                            as a physical certificate issued in a clinic—only faster and more convenient.
                        </p>

                        <p>These certificates are commonly used for:</p>
                        <ul className="custom-list ps-4 mb-3">
                            <li>Workplaces</li>
                            <li>Schools & colleges</li>
                            <li>HR teams</li>
                            <li>Public institutions</li>
                            <li>Travel refunds</li>
                            <li>Hospitals & clinics</li>
                            <li>Government offices</li>
                        </ul>

                        <p>
                            A certified doctor evaluates your symptoms and issues a valid sick leave medical certificate, accepted by
                            employers, institutions, and organizations across India — including in {cityName}.
                        </p>

                        <hr />

                        <h2>Why Sick Leave Certificates Matter Today</h2>
                        <p>
                            In today’s fast-paced world, health issues can strike without warning. Whether it's flu, COVID-19, migraine,
                            infection, or stress, a medical certificate for sick leave ensures that your absence is documented
                            and approved.
                        </p>

                        <p>Employers and institutions require it for:</p>
                        <ul className="custom-list ps-4 mb-3">
                            <li>Paid leave approval</li>
                            <li>Exam absence</li>
                            <li>Attendance requirements</li>
                            <li>Travel cancellations</li>
                            <li>Remote-work approvals</li>
                        </ul>

                        <p>A valid certificate protects you, keeps records clear, and ensures transparency.</p>

                        <hr />

                        <h2>Who Needs a Medical Certificate for Sick Leave?</h2>
                        <p>Sick leave certificates are useful for:</p>
                        <ul className="custom-list ps-4 mb-3">
                            <li><strong>Employees</strong> — Required for HR compliance, paid/unpaid leave, and proof of illness.</li>
                            <li><strong>Students</strong> — Needed for missed exams, attendance shortage, medical leave, and assignments.</li>
                            <li><strong>Freelancers & Business Owners</strong> — Used to maintain formal records.</li>
                            <li><strong>Travelers</strong> — Required for flight cancellation, rescheduling, or medical emergencies.</li>
                            <li><strong>Anyone Who Needs Formal Proof of Illness</strong> — For government work, banks, institutions, or personal commitments.</li>
                        </ul>

                        <hr />

                        <h2>How to Get a Medical Certificate for Sick Leave Online (Step-by-Step)</h2>
                        <p>
                            PulseQuik makes the process incredibly simple. If you're wondering <em>how to get a medical certificate for sick
                                leave</em> in {cityName}, here’s the fastest way:
                        </p>

                        <h3>Step 1: Fill Out the Online Form</h3>
                        <p>Enter your:</p>
                        <ul className="custom-list ps-4 mb-3">
                            <li>Symptoms</li>
                            <li>Personal details</li>
                            <li>Leave date</li>
                            <li>Duration needed</li>
                        </ul>
                        <p>This takes less than 2 minutes.</p>

                        <h3>Step 2: Doctor Verification & Online Assessment</h3>
                        <p>
                            A licensed MBBS/MD doctor reviews your symptoms, medical condition, and required leave duration. In some cases,
                            a quick call may be made to verify symptoms. No physical visit is needed.
                        </p>

                        <h3>Step 3: Receive Your Sick Leave Certificate in 40 Minutes</h3>
                        <p>Your certificate will include:</p>
                        <ul className="custom-list ps-4 mb-3">
                            <li>Doctor name & registration number</li>
                            <li>Digital signature</li>
                            <li>Symptoms assessed</li>
                            <li>Leave duration & recommendations</li>
                        </ul>
                        <p>Delivered via:</p>
                        <ul className="custom-list ps-4 mb-3">
                            <li>Email</li>
                            <li>WhatsApp</li>
                            <li>Downloadable PDF</li>
                        </ul>

                        <hr />

                        <h2>Benefits of an Online Sick Leave Certificate:</h2>

                        <h3>Saves Time & Helps You Recover Faster</h3>
                        <p>
                            Instead of spending hours traveling or waiting in queues, you get quick form submission, fast verification,
                            fast delivery, and zero stress. Most certificates are issued in 30–40 minutes.
                        </p>

                        <h3>Zero Travel, Zero Waiting Rooms</h3>
                        <p>Avoid exposure to infections and unnecessary travel when you’re unwell. Everything is handled 100% online.</p>

                        <h3>Legally Valid & Doctor-Certified</h3>
                        <p>
                            All certificates are verified, digitally signed, and compliant with Telemedicine guidelines. Accepted by IT
                            companies, government offices, banks, schools & colleges, and airlines.
                        </p>

                        <hr />

                        <h2>Types of Medical Certificates Available Online</h2>
                        <p>PulseQuik offers multiple types of certificates to suit every scenario in {cityName}:</p>

                        <h3>General Sick Leave Certificate</h3>
                        <p>For fever, flu, cold, infection, or minor illness requiring rest.</p>

                        <h3>Medical Certificate for Sick Leave for Students</h3>
                        <p>
                            Schools and colleges often require absence justification, exam leave documentation, and attendance proof.
                            PulseQuik provides student-friendly certificates accepted nationwide and in {cityName}.
                        </p>

                        <h3>Work-Related Sick Leave Certificate</h3>
                        <p>Approved by HR teams for paid/unpaid leave, stress leave, and WFH leave.</p>

                        <h3>Travel & Event Cancellation Certificates</h3>
                        <p>Useful for flight delays, ticket refunds, missed events, and medical emergencies.</p>

                        <h3>Fitness & Recovery Certificates</h3>
                        <p>
                            After recovery, HR teams often require proof that you're fit to return. PulseQuik provides fitness, recovery,
                            and post-illness certificates.
                        </p>

                        <hr />

                        <h2>Why Choose PulseQuik (Better Than Competitors)?</h2>
                        <p>PulseQuik offers stronger advantages across the board for residents of {cityName}:</p>

                        <ul className="custom-list ps-4 mb-3">
                            <li><strong>Fastest Service:</strong> 30–40 Minute Delivery (competitors usually take 60–120 minutes).</li>
                            <li><strong>Certified MBBS/MD Doctors Only:</strong> Fully compliant with National Medical Commission (NMC) and Telemedicine Guidelines.</li>
                            <li><strong>Secure, Confidential & Hassle-Free:</strong> Encrypted data, no misuse, no third-party sharing.</li>
                            <li><strong>Affordable Pricing:</strong> Lower than competitors despite faster delivery.</li>
                        </ul>

                        <hr />

                        <h2>What Your Sick Leave Medical Certificate Includes</h2>
                        <p>Every certificate contains:</p>
                        <ul className="custom-list ps-4 mb-3">
                            <li>Doctor’s name</li>
                            <li>Registration number</li>
                            <li>Verified assessment</li>
                            <li>Leave recommendation</li>
                            <li>Digital signature</li>
                            <li>Issue date</li>
                        </ul>
                        <p>This ensures high acceptance.</p>

                        <hr />

                        <h2>Medical Certificate for Sick Leave for Students</h2>
                        <p>
                            Schools & colleges need valid leave dates, doctor verification, and accurate informations. PulseQuik offers fast
                            student-specific documentation accepted by educational institutions in {cityName}.
                        </p>

                        <hr />

                        <h2>Medical Certificate From Doctor Near Me (Online Alternative)</h2>
                        <p>
                            Instead of searching for “medical certificate from doctor near me,” you can consult doctors online faster.
                            Advantages include no travel, lower cost, faster delivery, and verified doctors. Valid nationwide including
                            in {cityName}.
                        </p>

                        <hr />

                        <h2>Is an Online Sick Leave Certificate Legal in India?</h2>
                        <p>
                            Yes. 100% legal under the Telemedicine Practice Guidelines 2020 and NMC rules. Valid for organizations across
                            India as long as a licensed doctor issues the certificate and telemedicine rules are followed.
                        </p>

                        <hr />

                        <h2>Common Conditions That Require a Sick Leave Medical Certificate</h2>
                        <ul className="custom-list ps-4 mb-3">
                            <li>Fever</li>
                            <li>Viral flu</li>
                            <li>Stomach infection</li>
                            <li>Dengue</li>
                            <li>Malaria</li>
                            <li>Typhoid</li>
                            <li>COVID-19</li>
                            <li>Migraine & stress issues</li>
                            <li>Mental health conditions</li>
                        </ul>

                        <hr />

                        <h2>How Employers Verify Sick Leave Certificates</h2>
                        <p>Employers typically check:</p>
                        <ol className="ps-4 mb-3">
                            <li>Doctor name</li>
                            <li>Registration number</li>
                            <li>Signature</li>
                            <li>Contact number</li>
                            <li>Certificate format</li>
                        </ol>
                        <p>PulseQuik certificates pass these validations because they strictly follow NMC rules and Telemedicine guidelines.</p>

                        <hr />

                        <h2>Pricing for Online Medical Certificates</h2>
                        <p>PulseQuik offers:</p>
                        <ul className="custom-list ps-4 mb-3">
                            <li>Digital Certificate (Fastest Delivery)</li>
                            <li>Optional Hard Copy via Post</li>
                            <li>Lowest prices in the industry</li>
                        </ul>

                        <hr />

                        <h2>Cities Where PulseQuik Sick Leave Certificates Are Accepted</h2>
                        <p>
                            PulseQuik delivers legally valid online medical certificates for sick leave in every major Indian city,
                            including {cityName}. Whether you are a student, IT employee, government officer, or freelancer, your
                            sick leave certificate is accepted nationwide.
                        </p>

                        <h3>Medical Certificate for Sick Leave in {cityName}</h3>
                        <p>
                            Getting a medical certificate for sick leave in {cityName} can be time-consuming due to clinic rush. With
                            PulseQuik: no waiting rooms, no long queues — get a sick leave medical certificate in 40 minutes. Many
                            professionals in {cityName} rely on PulseQuik for fast documentation.
                        </p>

                        <h3>Online Sick Leave Certificate for {cityName} Professionals</h3>
                        <p>
                            Tech professionals, corporate employees, students and others in {cityName} use PulseQuik for verified
                            digital certificates that HR teams and institutions accept.
                        </p>

                        <hr />

                        <h2>Why Your Employer or College Will Accept PulseQuik Certificates</h2>
                        <p>
                            People often worry: “Will my company accept an online medical certificate for sick leave?” With PulseQuik →
                            yes. Always. Here’s why:
                        </p>

                        <h3>1. Doctor Name & Registration Number Included</h3>
                        <p>
                            Every sick leave certificate includes an MBBS/MD doctor’s name, medical registration number, digital signature,
                            and clinic details — eliminating doubts about legitimacy.
                        </p>

                        <h3>2. Complies With the Telemedicine Practice Guidelines (2020)</h3>
                        <p>
                            These guidelines allow remote consultations, online digital medical certification, meaning your
                            online medical certificate for sick leave is legally recognized.
                        </p>

                        <h3>3. Encrypted, Tamper-Proof PDFs</h3>
                        <p>Employers can verify authenticity quickly, and the certificate cannot be altered.</p>

                        <h3>4. Matches Standard Medical Certificate Format</h3>
                        <p>PulseQuik certificates follow NMC standards and professional medical templates to ensure acceptance.</p>

                        <hr />

                        <h2>Common Scenarios Where People Request an Online Medical Certificate for Sick Leave</h2>
                        <p>PulseQuik issues thousands of certificates every month. Common reasons include:</p>

                        <h3>1. Fever, Cold, Cough, Viral Infection</h3>
                        <p>One of the most requested categories — symptoms include high fever, body pain, fatigue, and sore throat.</p>

                        <h3>2. Food Poisoning or Stomach Flu</h3>
                        <p>Sudden illness from contaminated food or water often requires immediate documentation.</p>

                        <h3>3. Migraine or Severe Headache</h3>
                        <p>Many corporate employees request an online sick leave certificate due to migraine episodes.</p>

                        <h3>4. Mental Health Leave (Stress, Burnout, Anxiety)</h3>
                        <p>
                            Colleges and companies now accept stress leave, anxiety leave, and burnout documentation. PulseQuik doctors
                            evaluate symptoms and issue appropriate certificates that protect your privacy.
                        </p>

                        <h3>5. COVID-19, Flu & Viral Fever</h3>
                        <p>
                            COVID-related documentation is still in demand for school absence, workplace leave, and travel cancellation.
                            PulseQuik provides a verified medical certificate for sick leave with exact recovery period mentioned.
                        </p>

                        <hr />

                        <h2>Advantages of Choosing PulseQuik (Based on Competitor Weakness Analysis)</h2>
                        <p>After analyzing competitor pages, here’s why PulseQuik outperforms them for users in {cityName}:</p>

                        <ol className="ps-4 mb-3">
                            <li><strong>Fastest Delivery (30–40 Minutes)</strong> — Competitors often take 60–120 minutes.</li>
                            <li><strong>Superior Certificate Quality</strong> — Detailed certificates with doctor assessment and symptom descriptions.</li>
                            <li><strong>Strict Privacy Protection</strong> — No third-party sharing, encrypted data, and non-misuse.</li>
                            <li><strong>Better Doctor Network</strong> — Verified MBBS & MD Docters following NMC rules.</li>
                            <li><strong>More Certificate Types</strong> — Including sick leave, recovery, student leave, travel cancellation, WFH, and fitness certificates.</li>
                        </ol>

                        <hr />

                        <h2>How Long Can a Sick Leave Medical Certificate Cover?</h2>
                        <p>Typical durations (doctors evaluate case-by-case):</p>
                        <ul className="custom-list ps-4 mb-3">
                            <li>1 day → Fever, mild cold</li>
                            <li>2–3 days → Flu, stomach infection</li>
                            <li>5–7 days → Dengue, typhoid, severe flu</li>
                            <li>10–14 days → Surgery recovery, major infection</li>
                        </ul>
                        <p>PulseQuik doctors evaluate symptoms and provide accurate medical guidance for the right duration.</p>

                        <hr />

                        <h2>Can You Get a Backdated Medical Certificate?</h2>
                        <p>
                            PulseQuik may issue backdated certificates only upon legitimate doctor approval. This is allowed when you were
                            legitimately sick previously and couldn't obtain a certificate on the same day. Backdating without justification is not permitted.
                        </p>

                        <hr />

                        <h2>How Employers Verify Sick Leave Certificates</h2>
                        <p>Most HR teams follow these steps:</p>
                        <ol className="ps-4 mb-3">
                            <li>Check doctor name</li>
                            <li>Validate registration number</li>
                            <li>Verify date & signature</li>
                            <li>Confirm leave duration</li>
                        </ol>
                        <p>PulseQuik certificates pass these validations because they strictly follow NMC rules and Telemedicine guidelines.</p>

                        <hr />

                        <h2>How PulseQuik Ensures Certificate Authenticity</h2>
                        <p>
                            Every online medical certificate for sick leave includes a real doctor signature, valid registration number,
                            accurate information notes, mandatory doctor review, and proper format — making them highly credible.
                        </p>

                        <hr />

                        <h2>Legal Status of Online Medical Certificates in India</h2>
                        <p>
                            Online medical certificates are legal when issued by licensed doctors and when telemedicine guidelines are
                            followed. PulseQuik complies with National Medical Commission (NMC) and Telemedicine Practice Guidelines 2020.
                        </p>

                        <hr />

                        <h2>How to Choose the Best Online Platform for a Sick Leave Certificate</h2>
                        <p>Before ordering online, check:</p>
                        <ul className="custom-list ps-4 mb-3">
                            <li>Doctor credentials</li>
                            <li>Delivery time</li>
                            <li>Price transparency</li>
                            <li>Certificate format</li>
                            <li>Customer reviews</li>
                            <li>Legal compliance</li>
                            <li>Privacy standards</li>
                        </ul>
                        <p>PulseQuik ranks highly across all categories for users in {cityName}.</p>

                        <hr />

                        <h2>Conclusion: Get Your Sick Leave Certificate Online in 40 Minutes</h2>
                        <p>
                            Whether you're a student, employee, consultant, or traveler in {cityName}, PulseQuik offers the fastest,
                            most reliable way to get a medical certificate for sick leave, an online sick leave certificate, or other related documentation.
                        </p>

                        <ul className="custom-list ps-4 mb-3">
                            <li>100% legal certificate</li>
                            <li>Verified MBBS/MD doctors</li>
                            <li>Delivery in 30–40 minutes</li>
                            <li>Secure & confidential processing</li>
                            <li>Professionally written documentation</li>
                        </ul>

                        <div className="col-xl-4 d-xl-flex justify-content-xl-end align-items-center text-left mt-4 mt-xl-0">
                            <a className="pq-button pq-button-flat" href={sickLeaveUrl}>
                                <div className="pq-button-block">
                                    <span className="pq-button-text">👉 Get sick leave certificate now</span>
                                    <i className="ion ion-plus-round"></i>
                                </div>
                            </a>
                        </div>

                        <hr />

                        {/* City specific marketing block */}
                        <div className="city-block" style={{ background: '#f8f9fb', borderRadius: '8px', padding: '1rem', marginTop: '1.5rem' }}>
                            <h3>Need this certificate in {cityName}?</h3>
                            <p>
                                Click the link above to complete your application and receive your verified sick leave certificate in {cityName} within 30–40 minutes.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
