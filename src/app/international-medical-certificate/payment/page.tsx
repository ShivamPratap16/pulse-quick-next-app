
import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import PaymentInfo from '@/components/PaymentInfo';
import { INTL_URL } from '@/lib/constants';

export const metadata = {
    title: 'International Medical Certificate Payment | PulseQuik',
};

const InternationalMedicalCertificatePayment = () => {
    return (
        <main>
            <Breadcrumb 
                pageName="International Medical Certificate Payment" 
                breadcrumbItems={[
                    { label: 'Home', href: '/', icon: 'fas fa-home' },
                    { label: 'International Medical Certificate Payment', active: true }
                ]}
            />
            <div className="container pq-pb-140 mt-3">
                <PaymentInfo paymentLink={INTL_URL} />
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-container pb-2">
                            <iframe 
                                aria-label='Doctor Consultation' 
                                style={{ height: '4900px', width: '99%', border: 'none' }}
                                src={INTL_URL}
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
                <PaymentInfo paymentLink={INTL_URL} />
            </div>
        </main>
    );
};

export default InternationalMedicalCertificatePayment;
