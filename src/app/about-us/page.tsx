
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { getMetadata } from "@/lib/meta-data";
import { getBreadcrumbItems } from "@/lib/breadcrumb";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = getMetadata('/about-us') || {
    title: "About Us - PulseQuik",
    description: "Learn more about PulseQuik and our mission to provide accessible online medical certificates.",
};

export default function AboutUs() {
    const breadcrumbItems = [
        { label: "Home", href: "/", icon: "fas fa-home" },
        ...getBreadcrumbItems('about-us').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb pageName="About Us" breadcrumbItems={breadcrumbItems} />
            <section className="pq-90 pq-pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 pe-xl-5 mt-2">
                            <img 
                                className="img-fluid wow fadeInLeft" 
                                alt="pulsequik registered logo" 
                                width="155" 
                                height="150" 
                                src="/assets/images/about-us/registered-logo.webp" 
                                style={{ visibility: 'visible', animationName: 'fadeInLeft', height: '150px', width: '155px' }} 
                            />
                        </div>
                        <div className="col-xl-10 px-xl-4 mt-4 mt-xl-0">
                            <div className="pq-section pq-style-1 text-left">
                                <span className="pq-section-sub-title">What About Us</span>
                                <h5 className="pq-section-title">Joining Hands With Techno Easement</h5>
                                <p className="pq-section-description">
                                    Founded in 2024 by Akshay Shrivastava and Chanchal Rajput, PulseQuik is a pioneering telemedicine platform dedicated to providing accessible, reliable, and convenient healthcare services. PulseQuik is revolutionizing the way individuals access healthcare.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h4>Our Mission</h4>
                            </div>
                        </div>
                        <p>
                            Our mission is to make healthcare accessible to everyone, regardless of location or circumstance. By
                            leveraging technology, we aim to simplify the process of obtaining medical consultations and
                            certifications, ensuring timely and efficient care for all.
                        </p>
                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h4>Our Vision</h4>
                            </div>
                        </div>
                        <p>
                            We envision a future where quality healthcare is just a click away for everyone. By continuously innovating and expanding our services, we strive to bridge the gap between patients and healthcare providers, making virtual healthcare the norm.
                        </p>
                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h4>Core Values</h4>
                            </div>
                        </div>
                        <p>
                            <span>Accessibility:</span> We are committed to breaking down barriers to healthcare access,
                            providing services that are available to anyone, anywhere.<br /><br />

                            <span>Trust:</span> We prioritize the safety and confidentiality of our patients, maintaining
                            the highest standards of integrity and professionalism.<br /><br />

                            <span>Innovation:</span> Embracing the latest technological advancements, we continuously
                            improve our platform to meet the evolving needs of our users.<br /><br />

                            <span>Compassion:</span> We believe in compassionate care, ensuring that every patient feels
                            heard, understood, and valued.
                        </p>
                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h4>Key Offerings</h4>
                            </div>
                        </div>
                        <p>
                            <span>Online Medical Certificates:</span> PulseQuik provides <strong>doctor-certified</strong> medical certificates
                            issued by certified doctors, simplifying the process for patients who need documentation for work, school, or personal reasons.<br /><br />

                            <span>Doctor Consultations:</span> Our platform connects patients with experienced medical
                            professionals for virtual consultations, offering expert advice and <strong>professional guidance</strong> from the comfort of their homes.<br /><br />

                            <span>Availability:</span> Please feel free to submit your request at any time, and our team
                            will respond during regular business hours.<br /><br />

                            <span>User-Friendly Interface:</span> Our intuitive platform is designed to be easy to navigate,
                            ensuring a seamless experience for users of all ages and tech-savviness levels.<br /><br />

                            <span>Secure and Confidential:</span> We employ advanced security measures to protect patient
                            data, ensuring that all interactions and records are kept confidential.<br /><br />
                        </p>
                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h4>Achievements</h4>
                            </div>
                        </div>
                        <p>
                            <span>Innovative Healthcare Solution:</span> Recognized as a game-changer in the telemedicine
                            industry, PulseQuik has quickly gained a reputation for its unique offering of online medical certificates.<br /><br />

                            <span>Rapid Growth:</span> Since our inception, we have expanded our reach, serving thousands of
                            patients across the country and building a robust network of healthcare professionals.<br /><br />

                            <span>Positive Impact:</span> Our services have made a significant impact on patient lives,
                            reducing the need for physical visits to healthcare facilities and providing timely medical support.
                        </p>
                        <div className="col-md-12">
                            <div className="text-container pb-2">
                                <h4>Join Us</h4>
                            </div>
                        </div>
                        <p>
                            At PulseQuik, we are always looking for passionate individuals who are eager to contribute to the
                            future of healthcare. If you are interested in joining a dynamic and innovative team, visit our careers page to explore current opportunities.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
