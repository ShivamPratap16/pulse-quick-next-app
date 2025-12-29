
import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { CAREER_URL } from '@/lib/constants';
import { getMetadata } from '@/lib/meta-data';
import { getBreadcrumbItems } from '@/lib/breadcrumb';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = getMetadata('/careers') || {
    title: 'Careers - PulseQuik',
    description: 'Join the PulseQuik team and help revolutionize healthcare.'
};

export default function Careers() {
    const breadcrumbItems = [
        { label: 'Home', href: '/', icon: 'fas fa-home' },
        ...getBreadcrumbItems('careers').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb
                pageName="Careers"
                breadcrumbItems={breadcrumbItems}
            />
            <section className="pq-90 pq-pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="text-container pb-2">
                                <h2 className="">PulseQuik Careers</h2>
                            </div>
                        </div>
                        <p>
                            At Pulsequik, we value talent and believe in helping people grow. Our team is diverse and
                            excited about working together to create great solutions. We offer a friendly work environment where
                            you can be creative and develop your skills. Whether you are just starting out or looking for a new
                            challenge, we have the support you need to succeed. Check out our job openings and see how you can
                            be part of our mission. Join us and help make a difference!
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center mt-4">
                            <a className="pq-button pq-button-flat" href={CAREER_URL} target="_blank">
                                <div className="pq-button-block">
                                    <span className="pq-button-text">Click Here To Join Us</span>
                                    <i className="ion ion-plus-round"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
