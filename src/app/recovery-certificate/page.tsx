
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Click2Action from "@/components/Click2Action";
import CertificateButton from "@/components/CertificateButton";
import ProcessTow from "@/components/ProcessTow";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { MEDICAL_URL } from "@/lib/constants";
import { getMetadata } from "@/lib/meta-data";
import { getBreadcrumbItems } from "@/lib/breadcrumb";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = getMetadata('/recovery-certificate') || {
    title: "Recovery Certificate | PulseQuik",
    description: "Get a valid Medical Recovery Certificate online within minutes from PulseQuik. Confirm your fitness to return to work.",
};

export default function RecoveryCertificate() {
    const breadcrumbItems = [
        { label: "Home", href: "/", icon: "fas fa-home" },
        ...getBreadcrumbItems('recovery-certificate').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb pageName="Recovery Certificate" breadcrumbItems={breadcrumbItems} />
            <Click2Action certificate_name="Recovery" is_certificate_city={false} />

            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3 mt-4">
                            <h2 className="pb-2">Recovery Certificate – Get Your Medical Recovery Certificate Online with Pulsequik</h2>
                            <p>
                                Recovering from any illness, surgery, or other medical condition is an important milestone. A Recovery Certificate is a document that confirms that you are fit and healthy again, allowing you to return to work, travel, or resume other normal activities. Whether it's for employment after illness or for financial restoration, these certificates play a critical role in various sectors. With Pulsequik, you can obtain your Recovery Certificate online efficiently.
                            </p>

                            <h2>What is a Recovery Certificate?</h2>
                            <p>
                                A Recovery Certificate is a medical document issued from a certified licensed doctor confirming that an individual has successfully recovered from an illness, injury, or other medical condition and is now fit and healthy again.
                            </p>

                            <h3>Key Information in a Recovery Certificate:</h3>
                            <ul className="custom-list">
                                <li>Patient's Name & Relevant Health Information</li>
                                <li>Doctor's Confirmation of Recovery</li>
                                <li>Date of Recovery</li>
                                <li>Doctor's Signature & Stamp</li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <p>
                                This certificate is often required for work rejoining, travel approval, fitness resumption, and medical record maintenance.
                            </p>

                            <h2>Who Needs a Recovery Certificate?</h2>
                            <ul className="custom-list">
                                <li><strong>Employees Returning to Work:</strong> Required for resuming work after medical leave.</li>
                                <li><strong>Travelers Requiring Medical Clearance:</strong> Needed for international flights post-recovery.</li>
                                <li><strong>Post-Surgery:</strong> To ensure medical fitness before resuming any daily activities.</li>
                                <li><strong>Athletes & Fitness Enthusiasts:</strong> Required to join gyms, sports participation, and training.</li>
                            </ul>

                            <h2>How to Get a Recovery Certificate Online?</h2>
                            <p>With Pulsequik, obtaining a Recovery Certificate is simple and hassle-free:</p>
                            <h3>Steps to Get a Recovery Certificate Online:</h3>
                            <ul className="custom-list">
                                <li>Fill Out the Form – Provide your details and recovery confirmation.</li>
                                <li>Doctor’s Review & Approval – A certified doctor will assess your request.</li>
                                <li>Receive Your Certificate – Once approved, your digital doctor-certified Recovery Certificate is emailed/WhatsApped to you. You can download, print, or share it as needed.</li>
                            </ul>

                            <h2>Benefits of Getting a Recovery Certificate Online</h2>
                            <ul className="custom-list">
                                <li><strong>Saves Time & Effort:</strong> No in-person doctor visits required.</li>
                                <li><strong>Convenient & Hassle-Free:</strong> Apply from anywhere.</li>
                                <li><strong>Affordable Pricing:</strong> Cost-effective compared to traditional methods.</li>
                                <li><strong>Doctor-Approved & Widely Accepted:</strong> Recognized by employers, airlines, and institutions.</li>
                                <li><strong>Secure & Confidential:</strong> Your medical data remains protected.</li>
                            </ul>

                            <h2>Why Choose Pulsequik for Your Recovery Certificate?</h2>
                            <ul className="custom-list">
                                <li>Licensed Medical Professionals – Certified doctors issue every certificate.</li>
                                <li>Efficient Processing – Get your certificate promptly after review.</li>
                                <li>Suitable for Use – Recognized for work, travel, and fitness purposes.</li>
                                <li>Secure & Confidential – Your data remains encrypted and private.</li>
                                <li>Competitive Pricing – Affordable and transparent rates.</li>
                            </ul>

                            <p>Don’t wait! Click below to get your Recovery Certificate today and move forward with confidence.</p>

                        </div>

                        <div className="col-xl-4 d-xl-flex justify-content-xl-end align-items-center text-left mt-4 mt-xl-0">
                            <CertificateButton buttonText="Get Your Recovery Certificate Now" indianUrl={MEDICAL_URL} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="pq-pb-140">
                <ProcessTow />
            </div>
            <Testimonials />
            <FAQ />
        </main>
    );
}
