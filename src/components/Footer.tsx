
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="pq-footer" className="footer-margin-mob">
            <div className="pq-footer-style-1">
                <div className="pq-subscribe align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="pq-subscribe-bg">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-12 certified-logo text-center">
                                            <div className="d-flex justify-content-around flex-wrap">
                                                <div className="pq-clientbox pq-style-1 m-2">
                                                    <Image src="/assets/images/compliance/bsi.webp" alt="BSI" width={100} height={100} className="img-fluid" />
                                                </div>
                                                <div className="pq-clientbox pq-style-1 m-2">
                                                    <Image src="/assets/images/compliance/digital_india.webp" alt="Digital India" width={100} height={100} className="img-fluid" />
                                                </div>
                                                <div className="pq-clientbox pq-style-1 m-2">
                                                    <Image src="/assets/images/compliance/hippa.webp" alt="HIPAA" width={100} height={100} className="img-fluid" />
                                                </div>
                                                <div className="pq-clientbox pq-style-1 m-2">
                                                    <Image src="/assets/images/compliance/national_medical.webp" alt="NMC" width={100} height={100} className="img-fluid" />
                                                </div>
                                                <div className="pq-clientbox pq-style-1 m-2">
                                                    <Image src="/assets/images/compliance/who.webp" alt="WHO" width={100} height={100} className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pq-footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="pq-footer-block">
                                    <Image src="/assets/images/footer_logo_optimized.webp" className="pq-footer-logo img-fluid" alt="medicate-footer-logo" width={232} height={50} />
                                    <p>
                                        Get authentic medical certificates online as we connect you with licensed doctors who provide valid certificates quickly and conveniently from home. Our platform ensures you receive legally valid medical certificates from trusted professionals, without the need for in-person visits.
                                    </p>
                                    <div className="pq-footer-social">
                                        <ul>
                                            <li><a href="https://www.facebook.com/people/PulseQuik/61560506953972/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.instagram.com/pulsequik.telemedicine?igsh=MWQ2YXFmdGFhcGJuMw==" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6  col-md-6">
                                <div className="pq-footer-block">
                                    <h4 className="footer-title">Quick Links</h4>
                                    <div className="menu-useful-links-container">
                                        <ul id="menu-useful-links" className="menu">
                                            <li><Link href="/states-and-cities-where-we-are-available">States and cities where We are giving services</Link></li>
                                            <li><Link href="/international-medical-certificate">International Certificate</Link></li>
                                            <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
                                            <li><Link href="/medical-certificates">Medical Certificates</Link></li>
                                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                            <li><Link href="/form-1a-fitness-certificate">Form 1A Certificate</Link></li>
                                            <li><Link href="/refund-cancellation-policy">Refund Policy</Link></li>
                                            <li><Link href="/contact-us">Contact Us</Link></li>
                                            <li><Link href="/refund-cancellation-policy">Cancellation Policy</Link></li>
                                            <li><Link href="/about-us">About Us</Link></li>
                                            <li><Link href="/doctor-consultation">Doctor Consultation</Link></li>
                                            <li><Link href="/careers">Careers</Link></li>
                                            <li><Link href="/work-with-us-as-a-doctor">Work with us as Doctor</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3  col-md-6">
                                <div className="pq-footer-block">
                                    <h4 className="footer-title">Contact Us</h4>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <ul className="pq-contact">
                                                <li> <a href="tel:+919021240033"><i className="fas fa-phone"></i><span> +91 9021240033</span></a> </li>
                                                <li> <a href="https://api.whatsapp.com/send/?phone=919021240033&text&type=phone_number&app_absent=0" target="_blank"><i className="fab fa-whatsapp"></i><span> +91 9021240033</span></a> </li>
                                                <li><a href="mailto:care@pulsequik.com"><i className="fas fa-envelope"></i><span>care@pulsequik.com</span></a></li>
                                                <li>
                                                    <i className="fas fa-map-marker"></i>
                                                    <span>Siddharth Lake City, Anand Nagar, Raisen Road, Bhopal, Madhya Pradesh 462023 India</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pq-copyright-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center ">
                                <span className="pq-copyright">
                                    Copyright 2024 | All Rights Reserved | Vamshi Cure Private Limited.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
