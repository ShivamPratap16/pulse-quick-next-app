
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import ProcessTow from "@/components/ProcessTow";
import CertificateSection from "@/components/CertificateSection";
import AboutTechno from "@/components/AboutTechno";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Medical Certificate Online in 40 Mins from Certified Doctor",
  
  description: "Get valid medical certificates online from certified doctors in minutes. Sick leave, fitness, and recovery certificates available.",
};

const CityGrid = () => (
  <div className="row">
    <div className="col-6 col-lg-3 col-md-4 mt-4 mt-md-5">
      <div className="pq-clientbox pq-style-1">
        <Link href="/online-medical-certificate-in-delhi/">
          <Image src="/assets/images/cities/delhi.webp" alt="Medical Certificate in Delhi"
            className="pq-client-img img-fluid" width={185} height={70}
            loading="lazy" />
        </Link>
      </div>
    </div>
    <div className="col-6 col-lg-3 col-md-4 mt-4 mt-md-5">
      <div className="pq-clientbox pq-style-1">
        <Link href="/online-medical-certificate-in-mumbai/">
          <Image src="/assets/images/cities/mumbai.webp" alt="Medical Certificate in Mumbai"
            className="pq-client-img img-fluid" width={185} height={70}
            loading="lazy" />
        </Link>
      </div>
    </div>
    <div className="col-6 col-lg-3 col-md-4 mt-4 mt-md-5">
      <div className="pq-clientbox pq-style-1">
        <Link href="/online-medical-certificate-in-pune/">
          <Image src="/assets/images/cities/pune.webp" alt="Medical Certificate in Pune"
            className="pq-client-img img-fluid" width={185} height={70}
            loading="lazy" />
        </Link>
      </div>
    </div>
    <div className="col-6 col-lg-3 col-md-4 mt-4 mt-md-5">
      <div className="pq-clientbox pq-style-1">
        <Link href="/online-medical-certificate-in-kolkata/">
          <Image src="/assets/images/cities/kolkata.webp" alt="Medical Certificate in Kolkata"
            className="pq-client-img img-fluid" width={185} height={70}
            loading="lazy" />
        </Link>
      </div>
    </div>
    <div className="col-6 col-lg-3 col-md-4 mt-4 mt-md-5">
      <div className="pq-clientbox pq-style-1">
        <Link href="/online-medical-certificate-in-chennai/">
          <Image src="/assets/images/cities/chennai.webp" alt="Medical Certificate in Chennai"
            className="pq-client-img img-fluid" width={185} height={70}
            loading="lazy" />
        </Link>
      </div>
    </div>
    <div className="col-6 col-lg-3 col-md-4 mt-4 mt-md-5">
      <div className="pq-clientbox pq-style-1">
        <Link href="/online-medical-certificate-in-hyderabad/">
          <Image src="/assets/images/cities/hyderabad.webp" alt="Medical Certificate in Hyderabad"
            className="pq-client-img img-fluid" width={185} height={70}
            loading="lazy" />
        </Link>
      </div>
    </div>
    <div className="col-6 col-lg-3 col-md-4 mt-4 mt-md-5">
      <div className="pq-clientbox pq-style-1">
        <Link href="/online-medical-certificate-in-bangalore/">
          <Image src="/assets/images/cities/bangalore.webp" alt="Medical Certificate in Bangalore"
            className="pq-client-img img-fluid" width={185} height={70}
            loading="lazy" />
        </Link>
      </div>
    </div>
    <div className="col-6 col-lg-3 col-md-4 mt-4 mt-md-5">
      <div className="pq-clientbox pq-style-1">
        <Link href="/online-medical-certificate-in-ahemdabad/">
          <Image src="/assets/images/cities/ahemdabad.webp" alt="Medical Certificate in Ahmedabad"
            className="pq-client-img img-fluid" width={185} height={70}
            loading="lazy" />
        </Link>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <ProcessTow />
      <CertificateSection title="OUR Services" />
      <AboutTechno />
      <section className="pq-bg-primary-dark pq-bg-img-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="pq-section pq-style-1 text-center">
                <span className="pq-section-sub-title">Why Choose Us</span>
                <h5 className="pq-section-title pq-text-white">What We Offer For You</h5>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 mb-2">
              <div className="pq-fancy-box pq-style-5">
                <div className="pq-fancy-media">
                  <div className="pq-fancy-box-info">
                    <h5 className="pq-fancy-box-title">Reasonable</h5>
                  </div>
                </div>
                <p className="pq-fancybox-description">
                  Reasonable refers to actions or decisions that are fair, sensible, and based on sound
                  judgment
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 mt-4 mb-2 mt-md-0">
              <div className="pq-fancy-box pq-style-5">
                <div className="pq-fancy-media">
                  <div className="pq-fancy-box-info">
                    <h5 className="pq-fancy-box-title">Convenient</h5>
                  </div>
                </div>
                <p className="pq-fancybox-description">
                  Efficiently designed to save time and effort, enhancing overall productivity.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 mt-4 mb-2 mt-xl-0">
              <div className="pq-fancy-box pq-style-5">
                <div className="pq-fancy-media">
                  <div className="pq-fancy-box-info">
                    <h5 className="pq-fancy-box-title">User Friendly</h5>
                  </div>
                </div>
                <p className="pq-fancybox-description">
                  Refers to a design or interface that is easy to use and navigate, enhancing the overall user
                  experience.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 mt-4 mb-2 mt-xl-0">
              <div className="pq-fancy-box pq-style-5">
                <div className="pq-fancy-media">
                  <div className="pq-fancy-box-info">
                    <h5 className="pq-fancy-box-title">Easy To Access </h5>
                  </div>
                </div>
                <p className="pq-fancybox-description">
                  Readily available for use, minimizing time and effort required for retrieval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="pq-section pq-style-1 text-left pq-mb-30">
                <span className="pq-section-sub-title">what about us</span>
                <h5 className="pq-section-title">Your Health, Your Convenience.</h5>
              </div>
            </div>
            <div className="col-lg-5">
              <p className="pq-section-description">
                Founded in 2024 by Akshay Shrivastava and Chanchal Rajput, PulseQuik is a pioneering
                telemedicine platform dedicated to providing accessible, reliable, and convenient healthcare
                services. PulseQuik is revolutionizing the way individuals access healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pq-bg-primary-dark pq-bg-img-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="pq-section pq-style-1 text-center">
                <span className="pq-section-sub-title">How To Verify Certificate</span>
                <h5 className="pq-section-title pq-text-white">Verification Process</h5>
              </div>
            </div>
            <div className="col-xl-12 col-lg-6 col-md-6 mb-2">
              <div className="pq-fancy-box pq-style-5">
                <p className="pq-fancybox-description">
                  Our process includes a thorough verification step. Your organization can verify your
                  certificate by sending an email to your consulting doctor. They should attach the
                  certificate to this email. The consulting doctor will review and verify your certificate to
                  ensure its authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="pq-section pq-style-1 text-left">
                <span className="pq-section-sub-title">cities</span>
                <h5 className="pq-section-title">We cover all popular cities</h5>
              </div>
              <p className="pq-section-description mb-0">Our service spans across every popular city, ensuring
                comprehensive coverage tailored to your needs. Whether you seek urban adventures in bustling
                metropolises or serene escapes in cultural hubs, our reach ensure convenience and
                satisfaction.</p>
            </div>
            <div className="col-lg-8">
              <CityGrid />
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
    </main>
  );
}
