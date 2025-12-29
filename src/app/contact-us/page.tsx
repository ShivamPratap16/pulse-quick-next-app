
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { getMetadata } from "@/lib/meta-data";
import { getBreadcrumbItems } from "@/lib/breadcrumb";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = getMetadata('/contact-us') || {
    title: "Contact Us - PulseQuik",
    description: "Get in touch with PulseQuik for any queries regarding online medical certificates and consultations.",
};

export default function ContactUs() {
    const breadcrumbItems = [
        { label: "Home", href: "/", icon: "fas fa-home" },
        ...getBreadcrumbItems('contact-us').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb pageName="Contact Us" breadcrumbItems={breadcrumbItems} />

            {/* Page Heading and Introduction */}
            <section className="pq-page-header text-center py-5">
                <div className="container">
                    <h2 className="display-5 fw-bold">Get in Touch with Pulsequik</h2>
                    <p className="lead text-muted">
                        Have questions, feedback, or need assistance with our medical and fitness certificates?
                        We’re here to help. Reach out to us through any of the channels below, and our team will get back to you shortly.
                    </p>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="pq-contact-us pq-pb-140">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Location */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="pq-contact-box h-100">
                                <div className="pq-contact-box-icon">
                                    <div className="icon animation-grow">
                                        <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                                    </div>
                                </div>
                                <div className="pq-contact-box-info">
                                    <h4 className="pq-contact-box-title">Our Location</h4>
                                    <p className="pq-contact-box-description">
                                        Siddharth Lake City, Anand Nagar, Raisen Road, Bhopal, Madhya Pradesh 462023 India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone & WhatsApp */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="pq-contact-box h-100">
                                <div className="pq-contact-box-icon">
                                    <div className="icon animation-grow">
                                        <i aria-hidden="true" className="fas fa-phone-alt"></i>
                                    </div>
                                </div>
                                <div className="pq-contact-box-info">
                                    <h4 className="pq-contact-box-title">Our Contact</h4>
                                    <div className="pq-contact-box-description">
                                        <a href="tel:+919021240033" className="d-block mb-1">
                                            <i className="fa fa-phone-alt me-2"></i> + (91) 9021240033
                                        </a>
                                        <a href="https://api.whatsapp.com/send/?phone=919021240033&text&type=phone_number&app_absent=0" target="_blank" className="d-block">
                                            <i className="fab fa-whatsapp me-2"></i> + (91) 9021240033
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="pq-contact-box h-100">
                                <div className="pq-contact-box-icon">
                                    <div className="icon animation-grow">
                                        <i aria-hidden="true" className="fas fa-envelope"></i>
                                    </div>
                                </div>
                                <div className="pq-contact-box-info">
                                    <h4 className="pq-contact-box-title">Mail Us</h4>
                                    <p className="pq-contact-box-description">
                                        <a href="mailto:care@pulsequik.com">care@pulsequik.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
