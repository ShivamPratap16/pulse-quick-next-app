
import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import PaymentInfo from '@/components/PaymentInfo';
import { FORM1A_URL } from '@/lib/constants';

export const metadata = {
    title: 'Form 1a Medical Certificate Payment | PulseQuik',
};

const Form1aCertificatePayment = () => {
    return (
        <main>
            <Breadcrumb 
                pageName="Form 1a Medical Certificate Payment" 
                breadcrumbItems={[
                    { label: 'Home', href: '/', icon: 'fas fa-home' },
                    { label: 'Form 1a Medical Certificate Payment', active: true }
                ]}
            />
            <div className="container pq-pb-140 mt-3">
                <PaymentInfo paymentLink={FORM1A_URL} />
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-container pb-2">
                            <iframe 
                                aria-label='Form 1A Fitness Certificate' 
                                allow="camera;" 
                                style={{ height: '500px', width: '99%', border: 'none' }}
                                src='https://forms.zohopublic.in/vamshicureprivatelimited/form/Form1AFitnessCertificate/formperma/tOcBi5ocNsLh0kdc6LiztJGHqkX_SQ7A8mxoz1ZfpzA?zf_enablecamera=true'
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
                <PaymentInfo paymentLink={FORM1A_URL} />
            </div>
        </main>
    );
};

export default Form1aCertificatePayment;
