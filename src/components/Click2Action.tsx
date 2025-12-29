
"use client";

import { FORM1A_URL, CARA_FORM_URL, MEDICAL_URL, INTL_URL } from "@/lib/constants";
import CertificateButton from "./CertificateButton";

type Props = {
    certificate_name: string;
    is_certificate_city: boolean;
    certificate_city?: string;
};

export default function Click2Action({ certificate_name, is_certificate_city, certificate_city }: Props) {
    let paymentLink = "";
    if (certificate_name === 'Form 1A Fitness') {
        paymentLink = FORM1A_URL;
    } else if (certificate_name === 'CARA Fitness') {
        paymentLink = CARA_FORM_URL;
    } else if (certificate_name === 'International') {
        paymentLink = INTL_URL;
    } else {
        paymentLink = MEDICAL_URL;
    }

    return (
        <section className="contact-us pq-bg-primary-dark pq-bg-img-1 pq-90">
            <div className="container">
                <div className="row ">
                    <div className="col-xl-8">
                        {!is_certificate_city ? (
                            <h1 className="pq-title">Get Online {certificate_name} Certificate in 40 Minutes</h1>
                        ) : (
                            <h1 className="pq-title">Get an Online {certificate_name} Certificate in {certificate_city} within 40 Minutes</h1>
                        )}
                    </div>
                    <div className="col-xl-4 d-xl-flex justify-content-xl-end align-items-center text-left mt-4 mt-xl-0">
                        <CertificateButton
                            buttonText={`Get ${certificate_name} Certificate Now`}
                            indianUrl={paymentLink || MEDICAL_URL}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
