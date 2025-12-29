
import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import PaymentInfo from '@/components/PaymentInfo';
import { MEDICAL_URL } from '@/lib/constants';

export const metadata = {
    title: 'Medical Certificate Payment | PulseQuik',
};

const MedicalCertificatePayment = () => {
    return (
        <main>
            <Breadcrumb 
                pageName="Medical Certificate Payment" 
                breadcrumbItems={[
                    { label: 'Home', href: '/', icon: 'fas fa-home' },
                    { label: 'Medical Certificate Payment', active: true }
                ]}
            />
            <div className="container pq-pb-140 mt-3">
                <PaymentInfo paymentLink={MEDICAL_URL} />
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-container pb-2">
                             <iframe 
                                aria-label='Get Your Certificate Now !!' 
                                style={{ height: '5200px', width: '99%', border: 'none' }}
                                src='https://forms.zohopublic.in/vamshicureprivatelimited/form/GetYourCertificateNow/formperma/NVXQ3OaK6sH2gF9LEx5igl-YZHzDJLNKB7U4gDDsWPo'
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
                <PaymentInfo paymentLink={MEDICAL_URL} />
            </div>
        </main>
    );
};

export default MedicalCertificatePayment;
