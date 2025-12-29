
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

export const metadata: Metadata = getMetadata('/sick-leave-certificate') || {
    title: "Sick Leave Certificate | PulseQuik",
    description: "Get a valid Sick Leave Certificate online within minutes from PulseQuik. Doctor Consultation included.",
};

export default function SickLeaveCertificate() {
    const breadcrumbItems = [
        { label: "Home", href: "/", icon: "fas fa-home" },
        ...getBreadcrumbItems('sick-leave-certificate').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb pageName="Sick Leave Certificate" breadcrumbItems={breadcrumbItems} />
            <Click2Action certificate_name="Sick Leave" is_certificate_city={false} />

            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="text-container pb-2">
                                <h2 className="">Get a Sick Leave Certificate Online within 40 Minutes – Fast, Legitimate & Hassle-Free</h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <p>
                                Need a sick leave certificate for work, school, or personal commitments? When you're unwell, the last thing you want is to sit in a crowded waiting room or book an inconvenient doctor's appointment.
                            </p>
                            <p>
                                At Pulsequik, we make it easy to get a certified sick leave certificate online—quickly, securely, and without unnecessary hassle. Simply apply online, and receive your legally valid medical certificate within 40 minutes, right from the comfort of your home.
                            </p>
                        </div>
                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h3>What is a Sick Leave Certificate?</h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <p>
                                A sick leave certificate, also known as a medical certificate, is an document issued by a licensed doctor confirming your illness and advising rest. It is commonly required by:
                            </p>
                            <ul className="custom-list">
                                <li>Employers – To approve paid or unpaid sick leave.</li>
                                <li>Educational Institutions – For excusing missed classes, exams, or coursework.</li>
                                <li>Freelancers & Business Owners – To maintain accurate absence records.</li>
                                <li>General Individuals – To provide formal documentation for any personal or professional commitments.</li>
                            </ul>
                            <p>With Pulsequik, your certificate includes:</p>
                            <ul className="custom-list">
                                <li>Licensed doctor's name, credentials, and digital signature.</li>
                                <li>Verified medical assessment based on your symptoms.</li>
                                <li>Recommended leave duration.</li>
                                <li>Secure and professional documentation, accepted by most organizations.</li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h3>How to Get a Sick Leave Certificate Online with Pulsequik?</h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <ul className="custom-list">
                                <li><strong>Complete a Quick Online Form:</strong> Visit Pulsequik.com, enter your symptoms, personal details, and requested leave duration.</li>
                                <li><strong>Consultation (If Required):</strong> Some cases may require a brief online review by a licensed doctor to verify your condition.</li>
                                <li><strong>Receive Your Certificate:</strong> After review and approval, you'll receive your digital doctor-certified sick leave certificate via email/WhatsApp within 40 minutes. You can download, print, or share it as needed.</li>
                            </ul>
                            <p>💡 <strong>Average processing time: Just 30-40 minutes!</strong></p>
                        </div>
                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h4>Why Choose Pulsequik for Your Sick Leave Certificate?</h4>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <ul className="custom-list">
                                <li>Legitimate & Certified – All certificates are issued by licensed medical professionals.</li>
                                <li>Fast Processing – Get your certificate in minutes, not hours or days.</li>
                                <li>Secure & Confidential – Your personal and medical information is encrypted and protected.</li>
                                <li>No Clinic Visit Required – Complete everything online, from application to approval.</li>
                                <li>Affordable Pricing – High-quality service at a fraction of traditional consultation costs.</li>
                            </ul>
                            <p>Pulsequik is trusted by employees, students, and professionals globally. So, why wait at a clinic when you can get a doctor-certified sick leave certificate online in minutes?</p>
                            <p>Click below to apply now and get your medical certificate quickly!</p>
                        </div>
                        <div className="col-xl-4 d-xl-flex justify-content-xl-end align-items-center text-left mt-4 mt-xl-0">
                            <CertificateButton buttonText="Get Your Sick Leave Certificate Now" indianUrl={MEDICAL_URL} />
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
