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

export const metadata: Metadata = getMetadata('/sports-medical-certificate') || {
    title: "Sports Medical Certificate Online | Get Fit Certificate for Sports",
    description: "Get your sports medical certificate online in 30 minutes. Valid for marathons, schools, gyms, and events. Certified doctors.",
};

export default function SportsMedicalCertificate() {
    const breadcrumbItems = [
        { label: 'Home', href: '/', icon: 'fas fa-home' },
        ...getBreadcrumbItems('sports-medical-certificate').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb pageName="Sports Medical Certificate" breadcrumbItems={breadcrumbItems} />
            <Click2Action certificate_name="Sports Medical" is_certificate_city={false} />
            
            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="text-container pb-2">
                                <h2>How to Get a Sports Medical Certificate Online with PulseQuik – Fast, Custom & Trusted</h2>
                            </div>
                        </div>

                        <h2>What is a Sports Medical Certificate and Why is it Important?</h2>
                        <p>
                            A sports medical certificate is an document confirming that you&apos;re physically fit to engage
                            in sports or physical activities. It ensures safety during participation and is often mandatory for
                            schools, colleges, clubs, marathons, and professional events.
                        </p>
                        <p>
                            Whether you’re training for an Ironman or joining a local football team, PulseQuik helps you get
                            this certificate quickly, easily, and in full compliance with medical regulations.
                        </p>

                        <h2>Who Needs a Sports Fitness Medical Certificate?</h2>
                        <ul className="custom-list">
                            <li>Athletes & Sports Enthusiasts</li>
                            <li>School & College Students</li>
                            <li>Event Participants (Ironman, cycling, swimming, etc.)</li>
                            <li>Recreational Gym-goers</li>
                            <li>Immigration or Visa Applicants (fitness proof)</li>
                        </ul>

                        <h2>Events and Activities That Require One</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Activity/Sport</th>
                                    <th>Require</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Marathons & Triathlons</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>School/College Sports</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>International Competitions</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Military/Police Exams</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Recreational Clubs</td>
                                    <td>Sometimes</td>
                                </tr>
                                <tr>
                                    <td>Gym Memberships</td>
                                    <td>Sometimes</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>Key Types of Medical Fitness Certificates for Athletes</h2>
                        <ul className="custom-list">
                            <li><strong>Competitive Sports Certificate:</strong> For professional-level tournaments and
                                training.</li>
                            <li><strong>Recreational Fitness Certificate:</strong> For gyms, community sports, or weekend
                                events.</li>
                            <li><strong>School/College Fitness Forms:</strong> Required by institutions for sports and physical
                                activities.</li>
                        </ul>

                        <h2>Why Choose PulseQuik for Your Sports Medical Certificate?</h2>
                        <ul className="custom-list">
                            <li><strong>Global Availability:</strong> Certificates customized for Australia, U.S., Europe,
                                India, and more.</li>
                            <li><strong>Fast Turnaround:</strong> Delivered same-day, often within 30–40 minutes.</li>
                            <li><strong>Doctor-Signed & Legal:</strong> Issued by certified doctors and fully compliant.</li>
                        </ul>

                        <h2>Step-by-Step Process to Get Your Sports Medical Certificate</h2>
                        <ul className="custom-list">
                            <li><strong>Step 1:</strong> Choose the purpose (school, marathon, Ironman, visa, etc.)</li>
                            <li><strong>Step 2:</strong> Fill out a health form (conditions, surgeries, asthma, activity levels)
                            </li>
                            <li><strong>Step 3:</strong> Doctor reviews your form or contacts you via teleconsultation if needed
                            </li>
                            <li><strong>Step 4:</strong> Certificate is delivered to WhatsApp/Email within 30–40 minutes</li>
                        </ul>

                        <h2>Custom Formats for Schools, Colleges, and Sports Events</h2>
                        <ul className="custom-list">
                            <li>Upload institution- or event-specific forms</li>
                            <li>Request custom headers or ministry-required fields</li>
                            <li>Get Ironman, UltraMarathon, or triathlon-compliant formats</li>
                        </ul>

                        <h2>What’s Included in a PulseQuik Medical Fitness Certificate?</h2>
                        <ul className="custom-list">
                            <li><strong>Full Name:</strong> Applicant’s name</li>
                            <li><strong>Date of Birth & Age:</strong> Verified info</li>
                            <li><strong>Assessment Date:</strong> When fitness was certified</li>
                            <li><strong>Declared Fit For:</strong> Activity/Sport</li>
                            <li><strong>Medical Practitioner:</strong> Name, Signature, and License</li>
                            <li><strong>Optional Health Notes:</strong> Doctor’s comments</li>
                        </ul>
                        <p><strong>Optional Add-ons:</strong></p>
                        <ul className="custom-list">
                            <li>Resting heart rate</li>
                            <li>Blood pressure</li>
                            <li>Body Mass Index (BMI)</li>
                            <li>Condition-specific advice</li>
                        </ul>

                        <h2>How PulseQuik Ensures Legal and Medical Compliance</h2>
                        <ul className="custom-list">
                            <li>Every certificate is signed by a licensed doctor</li>
                            <li>Valid for Australia, Canada, U.S., UK, India, Europe</li>
                            <li>Region-specific formatting and terminology used</li>
                        </ul>

                        <h2>Conclusion: PulseQuik is Your Fast Lane to Medical Clearance</h2>
                        <p>
                            Whether you&apos;re joining a school team, racing in Ironman, or applying for a visa, PulseQuik makes it
                            fast, affordable, and professional to get your sports medical certificate.
                        </p>
                        <p>
                            No appointments. No stress. Just fast fitness validation from doctors you can trust.
                        </p>

                        <div className="col-xl-4 d-xl-flex justify-content-xl-end align-items-center text-left mt-4 mt-xl-0">
                            <CertificateButton
                                buttonText="Get Sports Medical Certificate Now"
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
