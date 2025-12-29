import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Click2Action from '@/components/Click2Action';
import CertificateButton from '@/components/CertificateButton';
import Testimonials from '@/components/Testimonials';
import ProcessTow from '@/components/ProcessTow';
import FAQ from '@/components/FAQ';
import { MEDICAL_URL } from '@/lib/constants';
import { getMetadata } from '@/lib/meta-data';
import { getBreadcrumbItems } from '@/lib/breadcrumb';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = getMetadata('/caretaker-certificate') || {
    title: "Caretaker Certificate Online | Get Caretaker Medical Certificate",
    description: "Get a valid Caretaker Certificate online from a certified doctor in 30 minutes. Use it for leave from work, travel, or caring for a dependent family member.",
};

export default function CaretakerCertificate() {
    const breadcrumbItems = [
        { label: 'Home', href: '/', icon: 'fas fa-home' },
        ...getBreadcrumbItems('caretaker-certificate').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb pageName="Caretaker Certificate" breadcrumbItems={breadcrumbItems} />
            <Click2Action certificate_name="Caretaker" is_certificate_city={false} />
            
            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="text-container pb-2">
                                <h2>Caretaker Certificate: Everything You Need to Know</h2>
                            </div>
                        </div>

                        <h2>What is a Caretaker Certificate?</h2>
                        <p>
                            A Caretaker Certificate is an document issued by a certified medical doctor, confirming that an individual is required to care for a sick or dependent family member. It serves as proof for requesting leave from work, obtaining special permissions, or making travel arrangements for caregiving purposes.
                        </p>

                        <h2>Key Information Included in a Caretaker Certificate</h2>
                        <ul className="custom-list">
                            <li><strong>Patient’s Name & Medical Condition</strong></li>
                            <li><strong>Caretaker’s Details & Relationship to the Patient</strong></li>
                            <li><strong>Doctor’s Justification for Caretaking</strong></li>
                            <li><strong>Duration of Care Required</strong></li>
                            <li><strong>Doctor’s Signature & Stamp</strong></li>
                        </ul>

                        <h3>Who Needs a Caretaker Certificate?</h3>
                        <p>This certificate is essential for various personal and professional needs, such as:</p>
                        <ul className="custom-list">
                            <li><strong>Employees Taking Leave for Family Care</strong> – Helps justify leave requests and ensures compliance with HR policies.</li>
                            <li><strong>Family Members & Legal Guardians</strong> – Essential for those caring for elderly parents, spouses, or children with health conditions.</li>
                            <li><strong>Travelers Assisting a Dependent</strong> – Required by airlines and immigration authorities for smooth travel arrangements.</li>
                            <li><strong>Individuals Supporting Patients with Long-Term Illnesses</strong> – Helps secure medical insurance approvals and government assistance.</li>
                        </ul>

                        <h3>Benefits of Getting a Caretaker Certificate Online</h3>
                        <ul className="custom-list">
                            <li><strong>Fast & Time-Saving</strong> – Get your certificate within 40 minutes.</li>
                            <li><strong>Convenient & Hassle-Free</strong> – Apply from anywhere using your phone or laptop.</li>
                            <li><strong>Affordable Pricing</strong> – Cost-effective with no hidden charges.</li>
                            <li><strong>Doctor-Approved & Legally Recognized</strong> – Accepted by employers, travel authorities, and legal institutions.</li>
                            <li><strong>Secure & Private</strong> – Your personal data remains encrypted and confidential.</li>
                        </ul>

                        <h3>Why Choose Pulsequik for Your Caretaker Certificate?</h3>
                        <ul className="custom-list">
                            <li><strong>Certified Medical Experts</strong> – Licensed doctors approve each certificate.</li>
                            <li><strong>Quick Processing</strong> – Receive your certificate within 40 minutes.</li>
                            <li><strong>Employer & Travel-Approved</strong> – Valid for work leave, travel, and legal documentation.</li>
                            <li><strong>Confidential & Secure</strong> – Your data is private and encrypted.</li>
                            <li><strong>Competitive Pricing</strong> – No extra charges.</li>
                        </ul>

                        <h2>How to Get a Caretaker Certificate Online?</h2>
                        <p>Previously, obtaining a Caretaker Certificate required a doctor’s visit and lengthy paperwork. Now, Pulsequik makes it quick, secure, and fully online.</p>

                        <h3>Steps to Apply for Your Caretaker Certificate</h3>
                        <ul className="custom-list">
                            <li><strong>Fill Out the Form</strong> – Provide your name, dependent’s details, and caregiving reason.</li>
                            <li><strong>Doctor’s Review & Approval</strong> – A certified doctor will assess and approve your request.</li>
                            <li><strong>Download Your Certificate</strong> – Once approved, your digital doctor-certified Caretaker Certificate is emailed/WhatsApped to you within 40 minutes. You can download, print, or share it as needed.</li>
                        </ul>

                        <h4>📢 Need a Caretaker Certificate?</h4>
                        <p>Don’t wait! No physical visits, no delays – just a quick and efficient online process with Pulsequik.</p>
                        
                        <div className="col-xl-4 d-xl-flex justify-content-xl-end align-items-center text-left mt-4 mt-xl-0">
                            <CertificateButton
                                buttonText="Get Caretaker Certificate Now"
                                indianUrl={MEDICAL_URL}
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            <Testimonials />
            <ProcessTow className="pq-pb-140" />
            <FAQ />
        </>
    );
}
