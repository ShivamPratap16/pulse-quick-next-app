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

export const metadata: Metadata = getMetadata('/work-from-home-certificate') || {
    title: "Work from Home Certificate Online | Medical Certificate for Remote Work",
    description: "Get a valid Work from Home Medical Certificate online in 30 minutes. Doctor-certified proof for employers, government office, and private companies.",
};

export default function WorkFromHomeCertificate() {
    const breadcrumbItems = [
        { label: 'Home', href: '/', icon: 'fas fa-home' },
        ...getBreadcrumbItems('work-from-home-certificate').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb pageName="Work From Home Certificate" breadcrumbItems={breadcrumbItems} />
            <Click2Action certificate_name="Work From Home" is_certificate_city={false} />
            
            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="text-container pb-2">
                                <h2>How to Get a Work from Home Certificate Online – Quick & Easy Process</h2>
                            </div>
                        </div>

                        <p>
                            In today’s fast-paced world, remote work has become a necessity for many employees. Whether you&apos;re a private employee, government worker, or a common individual, there may be situations where working from home is the best option due to health concerns, medical conditions, or personal circumstances.
                        </p>
                        <p>
                            However, most employers require documentation to approve work-from-home requests. This is where a Work from Home Certificate comes in. Traditionally, obtaining this certificate meant visiting a doctor, but now, you can get it online easily with Pulsequik.
                        </p>

                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h2>What is a Work from Home Certificate?</h2>
                            </div>
                        </div>
                        <p>
                            A Work from Home Certificate is a medical document issued by a certified doctor that recommends remote work due to medical or health-related reasons. It includes:
                        </p>
                        <ul className="custom-list">
                            <li>Patient’s Name & Details</li>
                            <li>Doctor’s Recommendation</li>
                            <li>Duration for Work from Home Approval</li>
                            <li>Doctor’s Signature & Medical Registration Number</li>
                        </ul>

                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h2>Who Needs a Work from Home Certificate?</h2>
                            </div>
                        </div>
                        <ul className="custom-list">
                            <li><strong>Private Sector Employees:</strong> Helps get employer approval without salary deductions.</li>
                            <li><strong>Government Employees:</strong> Ensures compliance with government regulations for remote work.</li>
                            <li><strong>Freelancers & Self-Employed Individuals:</strong> Useful for clients or organizations requiring formal proof.</li>
                            <li><strong>Individuals Recovering from Illness:</strong> Prevents workplace infections (flu, viral fever, COVID-19, etc.).</li>
                        </ul>

                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h2>Benefits of Getting a Work from Home Certificate Online</h2>
                            </div>
                        </div>
                        <ul className="custom-list">
                            <li><strong>Saves Time:</strong> Get your certificate in under 40 minutes without visiting a doctor.</li>
                            <li><strong>Convenience:</strong> Complete the process from the comfort of your home.</li>
                            <li><strong>Cost-Effective:</strong> Affordable compared to in-person doctor visits.</li>
                            <li><strong>Legitimate & Doctor-Signed:</strong> 100% valid and accepted by employers.</li>
                            <li><strong>Confidential & Secure:</strong> Your medical details remain private and protected.</li>
                        </ul>

                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h2>Why Choose Pulsequik for Your Work from Home Certificate?</h2>
                            </div>
                        </div>
                        <ul className="custom-list">
                            <li><strong>Certified Doctors:</strong> All certificates issued by licensed professionals.</li>
                            <li><strong>Quick Processing:</strong> Receive your certificate within 40 minutes.</li>
                            <li><strong>100% Employer-Approved:</strong> Legally recognized certificates.</li>
                            <li><strong>Secure & Confidential:</strong> Encrypted medical data protection.</li>
                            <li><strong>Affordable Pricing:</strong> No hidden charges.</li>
                        </ul>

                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h2>How to Get a Work from Home Certificate Online?</h2>
                            </div>
                        </div>
                        <p>Follow these simple steps to obtain your Work from Home Certificate:</p>
                        <ul className="custom-list">
                            <li><strong>Fill Out the Online Form:</strong> Provide your details and reason for requesting the certificate.</li>
                            <li><strong>Doctor’s Review & Approval:</strong> A certified doctor will assess your request.</li>
                            <li><strong>Receive Your Certificate:</strong> After review and approval, you’ll receive your digital doctor-certified Work from Home Certificate via email/WhatsApp within 40 minutes.</li>
                        </ul>

                        <p>No clinic visits, no waiting – just a quick, hassle-free process!</p>
                        <p>📢 Don’t wait! 📌 Click below to get your Work from Home Certificate today and ensure a stress-free remote work experience.</p>
                        
                        <div className="col-xl-4 d-xl-flex justify-content-xl-end align-items-center text-left mt-4 mt-xl-0">
                            <CertificateButton
                                buttonText="Get Work from Home Certificate Now"
                                indianUrl={MEDICAL_URL}
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            <ProcessTow className="pq-pb-140" />
            <Testimonials />
            <FAQ />
        </>
    );
}
