
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SecureEmail from "@/components/SecureEmail";
import { getMetadata } from "@/lib/meta-data";
import { getBreadcrumbItems } from "@/lib/breadcrumb";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = getMetadata('/refund-cancellation-policy') || {
    title: "Refund/Cancellation Policy | PulseQuik",
    description: "Read PulseQuik's Refund and Cancellation Policy. Understand the conditions for refunds and cancellations.",
};

export default function RefundPolicy() {
    const breadcrumbItems = [
        { label: "Home", href: "/", icon: "fas fa-home" },
        ...getBreadcrumbItems('refund-cancellation-policy').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb pageName="Refund/Cancellation Policy" breadcrumbItems={breadcrumbItems} />

            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-3">Refund/Cancellation Policy</h2>
                            <p>
                                At Pulsequik, we have a flexible refund policy. Here's when you can get a refund:
                            </p>
                            <br />
                            <ol className="custom-list">
                                <li>If you're under 18 and apply without your guardian knowing before talking to a doctor.</li>
                                <li>If you don't have your medical records and tell us before talking to a doctor.</li>
                                <li>If our health team finds your report issue aren't valid.</li>
                                <li>If you ask for a certificate more than five times without getting treated.</li>
                                <li>If you need a certificate for insurance or legal stuff, and you haven't talked to a doctor
                                    yet.</li>
                                <li>If the doctor hasn't contacted you.</li>
                            </ol>
                            <p><span>Remember:</span></p>
                            <ul>
                                <li>We'll charge INR 210/- for Indian Medical Certificates and INR 260/- for Form 1A if you want a
                                    refund.</li>
                                <li>No refunds for non-refundable services or just talking to a doctor online.</li>
                            </ul>
                            <p><span>You won't get a refund if:</span></p>
                            <ul className="custom-list">
                                <li>You chose a non-refundable product.</li>
                                <li>You don't want to talk to a doctor online.</li>
                                <li>You miss your online appointment without canceling 60 minutes before.</li>
                                <li>The doctor tries to call you three times and you don't answer.</li>
                                <li>You already got the certificate.</li>
                                <li>Your ailment claims are wrong or illegal.</li>
                                <li>You say different things about your condition compared to what you told us or the doctor.</li>
                                <li>You can't show documents supporting your ailment after talking to the doctor.</li>
                                <li>You cancel after talking to the doctor.</li>
                                <li>You don't respond to us for more than 7 days after booking.</li>
                                <li>The doctor doesn't think it's right to give you a certificate.</li>
                            </ul>
                            <p>
                                To get a refund, email care@pulsequik.com.in with your case details and invoice. We’ll get back to
                                you within 72 hours, Monday to Friday, 10 am to 6 pm. Refunds, if eligible, will go back to your
                                original payment method in 3-4 working days.
                            </p>
                            <p className="pq-mb-100">
                                For questions, <SecureEmail displayText="care@pulsequik.com" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
