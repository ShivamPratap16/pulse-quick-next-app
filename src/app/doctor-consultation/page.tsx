
"use client";
import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { DOCTOR_CONSULTATION_URL } from '@/lib/constants';

export default function DoctorConsultation() {
    return (
        <main>
            <Breadcrumb
                pageName="Online Doctor Consultation"
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Doctor Consultation', active: true }
                ]}
            />
            <section className="pq-90 pq-pb-140 mob-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="text-container pb-2">
                                <h2 className="">Online Doctor Consultation</h2>
                            </div>
                        </div>
                        <p>
                            Doctor consultation is a pivotal aspect of healthcare delivery, facilitating the assessment,
                            of medical conditions. It serves as a crucial avenue for patients to seek
                            guidance, address health concerns, and receive personalized care tailored to their individual needs.
                        </p>
                        <p>
                            During a doctor consultation, patients have the opportunity to discuss their symptoms, medical
                            history, and any relevant concerns with a healthcare provider. This exchange of information allows
                            healthcare professionals to gain valuable insights into the patient’s health status, enabling them
                            to formulate an accurate recommendation and develop an appropriate consultation plan.
                        </p>

                        <p>Key components of a doctor consultation include:</p>

                        <ul className="custom-list">
                            <li><span>Assessment of Symptoms:</span> Patients describe their symptoms in detail, including
                                the onset, duration, and severity. This information helps healthcare providers evaluate the
                                nature
                                of the problem and identify potential underlying causes.</li>

                            <li><span>Illness History Review:</span> Healthcare professionals review the patient’s medical
                                history, including past illnesses, surgeries, medications, and allergies. Understanding the
                                patient’s medical background is essential for guiding recommendations evaluation and consultation decisions.
                            </li>

                            <li><span>Physical Examination:</span> A thorough physical examination is performed to assess the
                                patient’s overall health status. This hands-on evaluation allows healthcare providers to
                                identify
                                any physical abnormalities, clinical signs, or symptoms that may require further
                                investigation.</li>

                            <li><span>Recommendations Evaluation:</span> Depending on the patient’s symptoms and illness history,
                                additional recommendations tests or screenings may be ordered. These tests can include blood tests,
                                imaging studies, or specialized procedures to provide further insight into the patient’s
                                condition.</li>

                            <li><span>Discussion and consultation Planning:</span> Based on the findings from the assessment and
                                recommendations evaluation, healthcare providers discuss potential recommendations, consultation options, and
                                management strategies with the patient. Together, they formulate a consultation plan that aligns
                                with the patient’s preferences, values, and goals.
                            </li>

                            <li> <span>Follow-Up and Monitoring:</span> Doctor consultations often include scheduling follow-up
                                appointments to monitor the patient’s progress, adjust consultation as needed, and address any
                                ongoing concerns or questions.
                            </li>
                        </ul>
                        <p>
                            Overall, doctor consultations are essential for promoting patient-centered care, facilitating
                            accurate recommendations, and providing appropriate consultation and support to individuals seeking medical
                            guidance and assistance.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center mt-4">
                            <a className="pq-button pq-button-flat" href={DOCTOR_CONSULTATION_URL}>
                                <div className="pq-button-block">
                                    <span className="pq-button-text">Get Doctor Consultation</span>
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
