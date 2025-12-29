import Link from 'next/link';
import React from 'react';

type Props = {
    paymentLink?: string;
};

const PaymentInfo = ({ paymentLink }: Props) => {
    if (!paymentLink) return null;

    return (
        <div className="row">
            <div className="alert alert-info" role="alert">
                <i className="fa fa-info-circle me-2" aria-hidden="true"></i>
                If you're having difficulty completing the form,{' '}
                <a href={paymentLink} target="_blank" rel="noopener noreferrer" title="Payment">
                    Click Here
                </a>
            </div>
        </div>
    );
};

export default PaymentInfo;
