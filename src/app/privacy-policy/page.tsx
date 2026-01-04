
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SecureEmail from "@/components/SecureEmail";
import { getMetadata } from "@/lib/meta-data";
import { getBreadcrumbItems } from "@/lib/breadcrumb";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = getMetadata('/privacy-policy') || {
    title: "Privacy Policy | PulseQuik",
    description: "Read PulseQuik's Privacy Policy to understand how we collect, use, and protect your personal and health information.",
};

export default function PrivacyPolicy() {
    const breadcrumbItems = [
        { label: "Home", href: "/", icon: "fas fa-home" },
        ...getBreadcrumbItems('privacy-policy').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb pageName="Privacy Policy" breadcrumbItems={breadcrumbItems} />

            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-3">Privacy Policy</h2>
                            <p>
                                This Privacy Policy describes how PulseQuik collects, uses, and discloses personal information when you use our telemedicine platform and related services. We are committed to protecting your privacy and complying with applicable data protection laws, including the guidelines set forth by the National Medical Commission (NMC).
                            </p>

                            <p><span>Information We Collect</span></p>
                            <ul className="custom-list">
                                <li><span>Personal Information:</span> Personal Information: When you register for an account or use our services, we may collect personal information such as your name, contact details, date of birth, illness history, and health-related information.</li>
                                <li><span>Usage Information:</span> We automatically collect information about your interaction with our platform, such as log data, device information, and usage patterns. This data is collected for internal analytics and service improvement only and is not shared with third-party advertisers.</li>
                            </ul>

                            <p><span>How We Use Your Information</span></p>
                            <ul className="custom-list">
                                <li><span>Providing Services:</span> We use the collected information to provide telemedicine consultations, issue medical certificates, and facilitate doctor-patient interactions in compliance with NMC guidelines.</li>
                                <li><span>Improving Services:</span> We analyze usage data to improve our platform, enhance user experience, and develop new features. This analysis is performed on aggregated or anonymized data and is never used to target you with advertising.</li>
                                <li><span>Communication:</span> We may use your contact information to communicate with you about your appointments, health updates, and platform-related announcements (transactional communications). We will only send you marketing communications if you provide explicit, separate consent (opt-in).</li>
                                <li><span>Legal Compliance:</span> We process personal information to comply with legal obligations, resolve disputes, and enforce our terms and policies.</li>
                                <li><span>Advertising Restrictions:</span> We do not use any of your Personal Health Information for personalized advertising. We are strictly prohibited from sharing your Personal Health Information with any ad network, data broker, or other third party for advertising or marketing purposes.</li>
                            </ul>

                            <p><span>Data Security</span></p>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. We regularly review our security practices to ensure compliance with industry standards.
                            </p>

                            <p><span>Data Sharing and Disclosure</span></p>
                            <ul className="custom-list">
                                <li><span>With Your Consent:</span> We may share your information with third parties (such as a specialist or pharmacy) for additional services, but only at your explicit direction and with your consent.</li>
                                <li><span>Service Providers:</span> We may engage third-party service providers to perform functions on our behalf, such as hosting, data analysis, and customer support. These providers are contractually obligated to safeguard your information and are strictly prohibited from using your data for any other purpose, especially advertising.</li>
                                <li><span>Legal Compliance:</span> We may disclose personal information if required by law or in response to valid legal requests, such as court orders or government investigations.</li>
                                <li><span>Prohibition on Ad-Related Sharing:</span> We do not sell, rent, or share your Personal Health Information with third parties for their own marketing or advertising purposes under any circumstances.</li>
                            </ul>

                            <p><span>Your Rights</span></p>
                            <p>
                                You have the right to access, correct, or delete your personal information. You may also request restrictions on processing or object to the processing of your data. To exercise these rights or inquire about our privacy practices, please contact us using the information provided below.
                            </p>

                            <p><span>Changes to this Policy</span></p>
                            <p>
                                We reserve the right to update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website or through other communication channels.
                            </p>

                            <p><span>Contact Us</span></p>
                            <p>
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at <SecureEmail displayText="care@pulsequik.com" />
                            </p>

                            <p className="pq-mb-100">
                                This Privacy Policy outlines how PulseQuik protects your privacy while delivering secure,
                                compliant, and reliable telemedicine services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
