
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import faqData from "@/data/faqData.json";

type FAQItem = {
    question: string;
    answer: string;
    show?: boolean;
};

type FAQData = {
    [key: string]: {
        meta: {
            title: string;
            subtitle: string;
        };
        faqs: FAQItem[];
    };
};

// Cast the imported JSON to the type
const data = faqData as FAQData;

export default function FAQ() {
    const pathname = usePathname();
    const [faqList, setFaqList] = useState<FAQItem[]>([]);
    const [faqMeta, setFaqMeta] = useState<{ title?: string; subtitle?: string }>({});

    useEffect(() => {
        // match logic from Vue: data[path] || data['default']
        // pathname comes with leading slash, json keys also have keys like "/medical-fitness-certificate"
        // But "default" is a key too.

        let validData = data[pathname] || data['default'];

        if (validData) {
            setFaqMeta(validData.meta);
            // Initialize first item as open (as per Vue logic: i === 0)
            setFaqList(validData.faqs.map((faq, i) => ({ ...faq, show: i === 0 })));
        } else {
            setFaqList([]);
            setFaqMeta({});
        }
    }, [pathname]);

    const toggle = (idx: number) => {
        setFaqList(prev => prev.map((faq, i) => ({
            ...faq,
            show: i === idx ? !faq.show : false
        })));
    };

    return (
        <section className="faq pq-pb-190">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 mt-xl-0 mt-5 ps-xl-3">
                        <div className="pq-section pq-style-1 ">
                            <span className="pq-section-sub-title">{faqMeta.subtitle || 'COMMON QUERIES'}</span>
                            <h5 className="pq-section-title">{faqMeta.title || 'Frequently Asked Questions'}</h5>
                        </div>
                        <div className="pq-accordion-block mt-4">
                            {faqList.length === 0 && <div>No FAQs available for this page.</div>}

                            {faqList.map((faq, idx) => (
                                <div key={idx} className={`pq-accordion-box ${faq.show ? 'pq-active' : ''}`}>
                                    <div className="pq-ad-title" onClick={() => toggle(idx)} style={{ cursor: 'pointer' }}>
                                        <h4 className="ad-title-text">
                                            {faq.question}
                                            <i className={`fas fa-chevron-${faq.show ? 'up' : 'down'} faq-icon`} aria-hidden="true"></i>
                                        </h4>
                                    </div>

                                    {/* Simple height transition effect simulation */}
                                    <div
                                        className="pq-accordion-details"
                                        style={{
                                            display: faq.show ? 'block' : 'none',
                                            // adding some transitions if possible, but display none kills transition usually.
                                            // matching strictly structure first.
                                        }}
                                    >
                                        <p className="pq-detail-text">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scoped Styles Replica */}
            <style jsx>{`
                /* Additional smooth hover effects */
                .pq-ad-title:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .pq-accordion-box.pq-active .pq-ad-title:hover {
                    transform: translateY(0);
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                /* Improved icon rotation/color */
                .pq-ad-title .faq-icon {
                    position: absolute !important;
                    top: 50% !important;
                    right: 30px !important;
                    transform: translateY(-50%) !important;
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    opacity: 1 !important;
                    color: var(--dark-color, #000) !important; 
                    font-size: 16px !important;
                }

                .pq-accordion-box.pq-active .pq-ad-title .faq-icon {
                    color: var(--white-color, #fff) !important;
                }
            `}</style>
        </section>
    );
}
