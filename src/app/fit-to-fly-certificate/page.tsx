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

export const metadata: Metadata = getMetadata('/fit-to-fly-certificate') || {
    title: "Fit to Fly Certificate Online | Medical Certificate for Travel",
    description: "Get your Fit to Fly Medical Certificate online in 30 minutes from certified doctors. Valid for airlines, immigration, and travel insurance.",
};

export default function FitToFlyCertificate() {
    const breadcrumbItems = [
        { label: 'Home', href: '/', icon: 'fas fa-home' },
        ...getBreadcrumbItems('fit-to-fly-certificate').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb pageName="fit to Fly/Travel Certificate" breadcrumbItems={breadcrumbItems} />
            <Click2Action certificate_name="Fit to Fly" is_certificate_city={false} />
            
            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="text-container pb-2">
                                <h2>Fit to Fly Medical Certificate: Everything You Should Know Before Travelling</h2>
                            </div>
                        </div>

                        <p>
                            With increasing health regulations and airline policies, travelers often require a <strong>Fit to
                                Fly Medical Certificate</strong> to board their flights. This medical certificate
                            proves that you are fit to fly and are not a risk to yourself or others.
                            At <strong>PulseQuik</strong>, we provide a simple and easy Fit to Fly certificate issued by an
                            MBBS-registered healthcare professional, ensuring that you meet airline and international travel
                            requirements.
                        </p>

                        <h2>What is a Fit to Fly Certificate?</h2>
                        <p>
                            A <strong>Fit to Fly Medical Certificate</strong> is an document issued by a licensed
                            doctor confirming a traveler’s health condition. Airlines, immigration authorities, and travel
                            insurance companies may request this certificate, especially if you:
                        </p>
                        <ul className="custom-list">
                            <li>Have a pre-existing medical condition.</li>
                            <li>Recently had surgery.</li>
                            <li>Are pregnant.</li>
                            <li>Are recovering from an illness.</li>
                        </ul>

                        <h2>Who Requires a Fit to Fly Certificate?</h2>
                        <p><strong>Not every passenger needs this certificate, but for some, it is mandatory:</strong></p>
                        <ul className="custom-list">
                            <li><strong>Passengers with chronic disabilities:</strong> Such as heart disease, respiratory
                                conditions, or diabetes.</li>
                            <li><strong>Recent surgery patients:</strong> Especially if it was major or recent.</li>
                            <li><strong>Pregnant women:</strong> Required after 28 weeks of pregnancy.</li>
                            <li><strong>Elderly passengers:</strong> Who require medical clearance for travel.</li>
                            <li><strong>Recovering from an infectious disease:</strong> Proof of health improvement may be
                                needed.</li>
                            <li><strong>Passengers needing medical equipment on board:</strong> Such as oxygen supply or CPAP
                                machines.</li>
                        </ul>

                        <h2>Why Do Airlines Require a Fit to Fly Certificate?</h2>
                        <p>Airlines prioritize passenger safety and adhere to strict international aviation regulations. A Fit
                            to Fly Certificate ensures:</p>
                        <ul className="custom-list">
                            <li>Passengers are not at risk of serious health issues mid-flight.</li>
                            <li>Travelers do not have contagious illnesses affecting others.</li>
                            <li>Medical clearance for conditions that may worsen in-flight.</li>
                            <li>Compliance with aviation health and safety standards.</li>
                        </ul>
                        <p><strong>Failure to provide the required medical documentation can result in denied boarding, travel
                                cancellations, or insurance claim issues.</strong></p>

                        <h2>How to Get a Fit to Fly Certificate Online from PulseQuik?</h2>
                        <p>At <strong>PulseQuik</strong>, we have streamlined the process to make it simple and fast:</p>
                        <ul className="custom-list">
                            <li>Step 1: Fill out the online form, including personal information and your medical details.</li>
                            <li>Step 2: Complete Secure Payment.</li>
                            <li>Step 3: Your application will be reviewed and a telehealth consultation will happen if
                                necessary.</li>
                            <li>Step 4: Once approved, you will receive a digitally signed Fit to Fly certificate within 40
                                minutesvia email or WhatsApp.</li>
                        </ul>
                        <p>💡 <strong>Processing time: Just 30-40 minutes!</strong></p>
                        <p>📢 Note: Handwritten certificates can be shipped to your address upon request.</p>

                        <h2>Airline Policies for Fit to Fly Certificates</h2>
                        <p>Different airlines have specific requirements regarding Fit to Fly certificates. Below are general
                            guidelines:</p>
                        <ul className="custom-list">
                            <li><strong>Air India:</strong> Requires a Fit to Fly certificate for passengers with serious health
                                issues and pregnant travelers beyond 32 weeks.</li>
                            <li><strong>British Airways:</strong> Requests medical clearance for travelers with severe health
                                conditions or recent surgeries.</li>
                            <li><strong>Emirates:</strong> Requires documentation for passengers needing in-flight oxygen or
                                special medical support.</li>
                            <li><strong>Qatar Airways:</strong> Recommends travelers with communicable diseases obtain a medical
                                clearance.</li>
                            <li><strong>American Airlines:</strong> May request a Fit to Fly certificate for elderly passengers
                                or those with specific health concerns.</li>
                        </ul>
                        <p><strong>Tip:</strong> Always check with your airline before flying to ensure compliance with their
                            medical policies.</p>

                        <h2>Why Get a Fit to Fly Certificate from PulseQuik?</h2>
                        <p><strong>Choosing PulseQuik ensures you get a hassle-free, reliable Fit to Fly certificate:</strong>
                        </p>
                        <ul className="custom-list">
                            <li><strong>Quick and Hassle-Free Process:</strong> Obtain your medical clearance without visiting a
                                clinic.</li>
                            <li><strong>Certified and Globally Recognized:</strong> Issued by licensed and registered medical
                                professionals.</li>
                            <li><strong>100% Digital and Secure:</strong> Your certificate is sent via email/WhatsApp.</li>
                            <li><strong>Accepted by Airlines and Immigration Authorities:</strong> Fully compliant with
                                international travel regulations.</li>
                        </ul>

                        <h2>Conclusion</h2>
                        <p>
                            A <strong>Fit to Fly Medical Certificate</strong> is essential for travelers with medical
                            conditions, ensuring a safe and stress-free journey.
                            <strong>PulseQuik</strong> provides quick, certified, and airline-compliant Fit to Fly certificates
                            online, making travel health requirements easier to meet.
                        </p>
                        <p><strong>Don’t risk last-minute travel disruptions—get your Fit to Fly certificate today from
                                PulseQuik!</strong></p>

                        <div className="col-xl-4 d-xl-flex justify-content-xl-end align-items-center text-left mt-4 mt-xl-0">
                            <CertificateButton
                                buttonText="Get Fit to Fly Certificate Now"
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
