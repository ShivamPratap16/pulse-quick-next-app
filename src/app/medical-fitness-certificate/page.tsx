
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

export const metadata: Metadata = getMetadata('/medical-fitness-certificate') || {
    title: "Medical Fitness Certificate | PulseQuik",
    description: "Get a valid Medical Fitness Certificate online within minutes from PulseQuik. Doctor Consultation included.",
};

export default function MedicalFitnessCertificate() {
    const breadcrumbItems = [
        { label: "Home", href: "/", icon: "fas fa-home" },
        ...getBreadcrumbItems('medical-fitness-certificate').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb pageName="Medical Fitness Certificate" breadcrumbItems={breadcrumbItems} />
            <Click2Action certificate_name="Medical Fitness" is_certificate_city={false} />

            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3 mt-4">
                            <h2 className="pb-2">how to get medical fitness certificate online – Everything You Need to Know</h2>
                            <p>
                                A Medical Fitness Certificate is an document that confirms an individual's physical and mental well-being for employment, sports participation, travel, or legal purposes.
                                Whether you're an employee, athlete, student, or individual requiring medical clearance, this certificate ensures that you meet the required health standards.
                            </p>
                            <p>
                                With the convenience of online medical services, you can now obtain a Medical Fitness Certificate online through Pulsequik, saving time and effort.
                            </p>
                        </div>

                        <div className="col-12 mt-4">
                            <h2 className="pb-2">What is a Medical Fitness Certificate?</h2>
                            <p>
                                A Medical Fitness Certificate is issued by a certified doctor verifying that an individual is medically fit to perform specific activities, such as:
                            </p>
                            <ul className="custom-list">
                                <li>Starting a new job (Government, private sector, or armed forces)</li>
                                <li>Participating in sports & athletic events</li>
                                <li>Applying for a driving license or travel visa</li>
                                <li>Enrolling in educational institutions</li>
                                <li>Undergoing surgery or medical procedures</li>
                            </ul>
                        </div>

                        <div className="col-12 mt-4">
                            <h2 className="pb-2">Who Needs a Medical Fitness Certificate?</h2>
                            <p>
                                A Medical Fitness Certificate is required in various professional and personal scenarios:
                            </p>
                            <ul className="custom-list">
                                <li><strong>Employees & Job Applicants</strong> – Many jobs require medical clearance before hiring.</li>
                                <li><strong>Athletes & Sports Participants</strong> – Required for fitness professionals and competitive sports.</li>
                                <li><strong>Drivers & Pilots</strong> – Mandatory for driving licenses and commercial transport permits.</li>
                                <li><strong>Travelers & Visa Applicants</strong> – Some countries require it for visa approvals.</li>
                                <li><strong>Students & University Applicants</strong> – Required for medical, defense, and sports courses.</li>
                            </ul>
                        </div>

                        <div className="col-12 mt-4">
                            <h2 className="pb-2">Why Get Your Medical Fitness Certificate Online with Pulsequik?</h2>
                            <ul className="custom-list">
                                <li><strong>Fast & Time-Saving</strong> – Get your certificate within 40 minutes.</li>
                                <li><strong>100% Online Process</strong> – No need for physical hospital visits.</li>
                                <li><strong>Affordable & Cost-Effective</strong> – Lower cost with no hidden fees.</li>
                                <li><strong>Doctor-Approved & Legally Recognized</strong> – Valid for work, travel, and legal use.</li>
                                <li><strong>Secure & Private</strong> – Your data is encrypted and confidential.</li>
                            </ul>
                        </div>

                        <div className="col-12 mt-4">
                            <h2 className="pb-2">How to Apply and Get a Medical Fitness Certificate Online?</h2>
                            <p>
                                Traditionally, obtaining a Medical Fitness Certificate required hospital visits, long wait times, and doctor consultations. But with Pulsequik, the process is now quick and secure.
                            </p>
                            <ul className="custom-list">
                                <li><strong>Fill Out the Application Form</strong> – Provide personal and medical details.</li>
                                <li><strong>Doctor’s Assessment</strong> – A certified doctor reviews and approves your application.</li>
                                <li><strong>Download Your Certificate</strong> – Once approved, your digital doctor-certified Medical Fitness Certificate is emailed/WhatsApped to you within 40 minutes. You can download, print, or share it as needed.</li>
                            </ul>

                            <p><strong>📢 Need a Medical Fitness Certificate?</strong> <br />
                                🏆 100% Online | Doctor-Approved | Fast & Secure – with Pulsequik.
                            </p>
                        </div>

                        <div className="col-xl-4 d-xl-flex justify-content-xl-end align-items-center text-left mt-4 mt-xl-0">
                            <CertificateButton buttonText="Get Medical Fitness Certificate Now" indianUrl={MEDICAL_URL} />
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
            <div className="pq-pb-140">
                <ProcessTow />
            </div>
            <FAQ />
        </main>
    );
}
