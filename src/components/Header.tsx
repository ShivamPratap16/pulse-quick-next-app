
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import CertificateButton from "./CertificateButton";
import { MEDICAL_URL } from "@/lib/constants";

export default function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleNavbar = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const closeMenu = () => {
        setIsMobileNavOpen(false);
    };

    // Close nav on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsMobileNavOpen(false);
            }
        };

        const handleScroll = () => {
            if (isMobileNavOpen) setIsMobileNavOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMobileNavOpen]);

    // Smart Navbar Logic
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <header id="pq-header" className="pq-header-default">
            <div className="pq-top-header">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-md-6 text-right">
                            <div className="pq-header-social text-right">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/people/PulseQuik/61560506953972/" target="_blank" aria-label="Facebook">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/pulsequik.telemedicine?igsh=MWQ2YXFmdGFhcGJuMw==" target="_blank" aria-label="Instagram">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pq-header-contact">
                                <ul>
                                    <li>
                                        <a href="tel:+919021240033">
                                            <i className="fas fa-phone"></i>
                                            <span> +91 9021240033</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://api.whatsapp.com/send/?phone=919021240033&text&type=phone_number&app_absent=0">
                                            <i className="fab fa-whatsapp"></i>
                                            <span> +91 9021240033</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:care@pulsequik.com">
                                            <i className="fas fa-envelope"></i>
                                            <span>care@pulsequik.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                ref={navRef}
                className={`pq-bottom-header pq-has-sticky sticky-nav-animated ${isVisible ? 'nav-visible' : 'nav-hidden'}`}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand" href="/" onClick={closeMenu}>
                                    <Image
                                        src="/assets/images/logo/main-small.webp"
                                        alt="PulseQuik"
                                        width={200}
                                        height={60}
                                        className="img-fluid logo site-logo"
                                        priority
                                    />
                                </Link>

                                <div className={`collapse navbar-collapse ${isMobileNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                                    <div id="pq-menu-contain" className="pq-menu-contain">
                                        <ul id="pq-main-menu" className="navbar-nav ml-auto">
                                            <li className="menu-item"><Link href="/" onClick={closeMenu}>Home</Link></li>
                                            <li className="menu-item"><Link href="/medical-certificates" onClick={closeMenu}>Medical Certificates</Link></li>
                                            <li className="menu-item"><Link href="/international-medical-certificate" onClick={closeMenu}>International Certificate</Link></li>
                                            <li className="menu-item">
                                                <a href="#" onClick={(e) => e.preventDefault()}>Services</a><i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                <ul className="sub-menu">
                                                    <li className="menu-item"><Link href="/sick-leave-certificate/" onClick={closeMenu}>Sick Leave Certificate</Link></li>
                                                    <li className="menu-item"><Link href="/work-from-home-certificate/" onClick={closeMenu}>WFH Certificate</Link></li>
                                                    <li className="menu-item"><Link href="/recovery-certificate/" onClick={closeMenu}>Recovery Certificate</Link></li>
                                                    <li className="menu-item"><Link href="/medical-fitness-certificate/" onClick={closeMenu}>Medical Fitness Certificate</Link></li>
                                                    <li className="menu-item"><Link href="/form-1a-fitness-certificate/" onClick={closeMenu}>Form 1A Fitness Certificate</Link></li>
                                                    <li className="menu-item"><Link href="/cara-fitness-certificate/" onClick={closeMenu}>Cara Fitness Certificate</Link></li>
                                                    <li className="menu-item"><Link href="/unfit-to-travel-certificate/" onClick={closeMenu}>Unfit To Travel Certificate</Link></li>
                                                    <li className="menu-item"><Link href="/fit-to-fly-certificate/" onClick={closeMenu}>Fit To Travel/Fly Certificate</Link></li>
                                                    <li className="menu-item"><Link href="/caretaker-certificate/" onClick={closeMenu}>Caretaker Certificate</Link></li>
                                                    <li className="menu-item"><Link href="/sports-medical-certificate/" onClick={closeMenu}>Sports Medical Certificate</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item"><Link href="/about-us" onClick={closeMenu}>About Us</Link></li>
                                            <li className="menu-item"><Link href="/blog" onClick={closeMenu}>Blog</Link></li>
                                            <li className="menu-item"><Link href="/contact-us" onClick={closeMenu}>Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="d-none d-lg-inline-block ms-3">
                                    <CertificateButton buttonText="Get Certificate" indianUrl={MEDICAL_URL} />
                                </div>

                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    onClick={toggleNavbar}
                                    aria-label="Toggle navigation"
                                >
                                    <i className="fas fa-bars"></i>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}
