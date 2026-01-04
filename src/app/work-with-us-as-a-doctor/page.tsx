
import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { getMetadata } from '@/lib/meta-data';
import { getBreadcrumbItems } from '@/lib/breadcrumb';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = getMetadata('/work-with-us-as-a-doctor') || {
    title: 'Work With Us As A Doctor - PulseQuik',
    description: 'Join PulseQuik as a doctor and provide online consultations.'
};

export default function WorkWithUsAsADoctor() {
    const breadcrumbItems = [
        { label: 'Home', href: '/', icon: 'fas fa-home' },
        ...getBreadcrumbItems('work-with-us-as-a-doctor').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb
                pageName="Work with us as a Doctor"
                breadcrumbItems={breadcrumbItems}
            />
            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-3">Work with us as a Doctor</h2>
                            <br />
                            <p><span>Join PulseQuik:</span> Empowering Doctors to Shape the Future of Telemedicine</p>
                            <p>PulseQuik is leading the charge in revolutionizing telemedicine, and we're inviting passionate
                                doctors to join us on this transformative journey. As an online telemedicine platform, we provide
                                accessible medical certificates and expert consultations to patients worldwide, all from the
                                convenience of their homes.</p>
                            <p><span>Why Choose PulseQuik?</span></p>
                            <p>
                                Innovative Telemedicine Solutions: Be at the forefront of healthcare innovation by utilizing
                                cutting-edge technology to provide seamless and efficient medical services to patients.
                            </p>
                            <p>
                                Flexible Work Opportunities: Enjoy the freedom to work remotely and manage your own schedule,
                                empowering you to maintain a healthy work-life balance while making a real impact in patients'
                                lives.
                            </p>
                            <p>Global Reach: Reach patients from all corners of the globe and contribute to breaking down barriers
                                to healthcare access, ensuring that everyone, regardless of location, can receive quality medical
                                care.</p>
                            <p>Professional Growth: Join a dynamic team of healthcare professionals dedicated to continuous learning
                                and development. Expand your skills and expertise while collaborating with like-minded individuals
                                in a supportive environment.</p>


                            <p><span>Perks & Benefits</span></p>
                            <ul className="custom-list">
                                <li>Competitive compensation packages.</li>
                                <li>Flexible remote work arrangements.</li>
                                <li>Opportunities for professional development and career advancement.</li>
                                <li>Access to a diverse network of medical professionals and experts.</li>
                                <li>The satisfaction of being part of a mission-driven company dedicated to improving healthcare
                                    access and outcomes globally.</li>
                            </ul>
                            <p><span>Join Us in Redefining Telemedicine</span></p>
                            <p>If you're a dedicated doctor looking to make a difference in the rapidly evolving landscape of
                                telemedicine, we want to hear from you. Join PulseQuik and help us shape the future of healthcare
                                delivery, one virtual consultation at a time.</p>
                            <p><span>Apply Now</span></p>
                            <p className="pq-mb-100">Visit our careers page to explore current opportunities and submit your application
                                to join our team of passionate healthcare professionals at PulseQuik. Together, let's empower
                                patients, transform healthcare, and create a healthier world for all.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
