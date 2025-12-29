
import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import PaymentInfo from '@/components/PaymentInfo';
import { DOCTOR_CONSULTATION_URL } from '@/lib/constants';

export const metadata = {
    title: 'Doctor Consultation Payment | PulseQuik',
};

const DoctorConsultationPayment = () => {
    return (
        <main>
            <Breadcrumb 
                pageName="DOCTOR CONSULTATION Payment" 
                breadcrumbItems={[
                    { label: 'Home', href: '/', icon: 'fas fa-home' },
                    { label: 'DOCTOR CONSULTATION Payment', active: true }
                ]}
            />
            <div className="container pq-pb-140 mt-3">
                <PaymentInfo paymentLink={DOCTOR_CONSULTATION_URL} />
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-container pb-2">
                             <iframe 
                                aria-label='Doctor Consultation' 
                                style={{ height: '1900px', width: '99%', border: 'none' }}
                                src={DOCTOR_CONSULTATION_URL}
                             >
                             </iframe>
                        </div>
                    </div>
                </div>
                <PaymentInfo paymentLink={DOCTOR_CONSULTATION_URL} />
            </div>
        </main>
    );
};

export default DoctorConsultationPayment;
