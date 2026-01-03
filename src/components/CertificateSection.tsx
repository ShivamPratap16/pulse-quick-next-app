
import Image from "next/image";
import Link from "next/link";
import CertificateApplyButton from "./CertificateApplyButton";

export default function CertificateSection({ className = "", title }: { className?: string, title?: string }) {
    return (
        <section className={`certificate-section ${className}`}>
            <div className="container">
                {title && (
                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="pwproc-section-header text-center">
                                <span className="pwproc-subtitle">{title}</span>
                            </div>
                        </div>
                    </div>
                )}
                <div className="row">
                    {/* Sick Leave */}
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="pq-icon-box pq-style-4">
                            <div className="pq-icon-box-wrapper">
                                <div className="pq-icon">
                                    <Image
                                        src="/assets/images/services/sick_leave.webp"
                                        alt="Online Sick Leave Certificate"
                                        width={48}
                                        height={48}
                                        className="certificate-icon"
                                        priority
                                    />
                                </div>
                                <Link href="/sick-leave-certificate/">
                                    <h5 className="pq-icon-box-title">Sick Leave Certificate</h5>
                                </Link>
                                <CertificateApplyButton certificate_name="Medical" buttonText="Apply" />
                            </div>
                        </div>
                    </div>
                    {/* Recovery */}
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="pq-icon-box pq-style-4">
                            <div className="pq-icon-box-wrapper">
                                <div className="pq-icon">
                                    <Image
                                        src="/assets/images/services/recovery.webp"
                                        alt="Online Recovery Certificate"
                                        width={48}
                                        height={48}
                                        className="certificate-icon"
                                        priority
                                    />
                                </div>
                                <Link href="/recovery-certificate/">
                                    <h5 className="pq-icon-box-title">Recovery Certificate</h5>
                                </Link>
                                <CertificateApplyButton certificate_name="Medical" buttonText="Apply" />
                            </div>
                        </div>
                    </div>
                    {/* Caretaker */}
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="pq-icon-box pq-style-4">
                            <div className="pq-icon-box-wrapper">
                                <div className="pq-icon">
                                    <Image
                                        src="/assets/images/services/caretaker.webp"
                                        alt="Online Caretaker Certificate"
                                        width={48}
                                        height={48}
                                        className="certificate-icon"
                                    />
                                </div>
                                <Link href="/caretaker-certificate/">
                                    <h5 className="pq-icon-box-title">Caretaker Certificate</h5>
                                </Link>
                                <CertificateApplyButton certificate_name="Medical" buttonText="Apply" />
                            </div>
                        </div>
                    </div>
                    {/* Medical Fitness */}
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="pq-icon-box pq-style-4">
                            <div className="pq-icon-box-wrapper">
                                <div className="pq-icon">
                                    <Image
                                        src="/assets/images/services/medical_fitness.webp"
                                        alt="Online Medical Fitness Certificate"
                                        width={48}
                                        height={48}
                                        className="certificate-icon"
                                    />
                                </div>
                                <Link href="/medical-fitness-certificate/">
                                    <h5 className="pq-icon-box-title">Medical Fitness Certificate</h5>
                                </Link>
                                <CertificateApplyButton certificate_name="Medical" buttonText="Apply" />
                            </div>
                        </div>
                    </div>
                    {/* CARA Fitness */}
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="pq-icon-box pq-style-4">
                            <div className="pq-icon-box-wrapper">
                                <div className="pq-icon">
                                    <Image
                                        src="/assets/images/services/cara_fitness.webp"
                                        alt="Online CARA Fitness Certificate"
                                        width={48}
                                        height={48}
                                        className="certificate-icon"
                                    />
                                </div>
                                <Link href="/cara-fitness-certificate/">
                                    <h5 className="pq-icon-box-title">CARA Fitness Certificate</h5>
                                </Link>
                                <CertificateApplyButton certificate_name="CARA Fitness" buttonText="Apply" />
                            </div>
                        </div>
                    </div>
                    {/* Unfit to Travel */}
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="pq-icon-box pq-style-4">
                            <div className="pq-icon-box-wrapper">
                                <div className="pq-icon">
                                    <Image
                                        src="/assets/images/services/unfit-to-travel.webp"
                                        alt="Online Unfit to Travel Certificate"
                                        width={48}
                                        height={48}
                                        className="certificate-icon"
                                    />
                                </div>
                                <Link href="/unfit-to-travel-certificate/">
                                    <h5 className="pq-icon-box-title">Unfit to Travel Certificate</h5>
                                </Link>
                                <CertificateApplyButton certificate_name="Medical" buttonText="Apply" />
                            </div>
                        </div>
                    </div>
                    {/* Form 1A */}
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="pq-icon-box pq-style-4">
                            <div className="pq-icon-box-wrapper">
                                <div className="pq-icon">
                                    <Image
                                        src="/assets/images/services/form-1a-icon.webp"
                                        alt="Online Form 1A Fitness Certificate"
                                        width={48}
                                        height={48}
                                        className="certificate-icon"
                                    />
                                </div>
                                <Link href="/form-1a-fitness-certificate/">
                                    <h5 className="pq-icon-box-title">Form 1A Fitness Certificate</h5>
                                </Link>
                                <CertificateApplyButton certificate_name="Form 1A Fitness" buttonText="Apply" />
                            </div>
                        </div>
                    </div>
                    {/* Work From Home */}
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="pq-icon-box pq-style-4">
                            <div className="pq-icon-box-wrapper">
                                <div className="pq-icon">
                                    <Image
                                        src="/assets/images/services/wfh.webp"
                                        alt="Online Work From Home Certificate"
                                        width={48}
                                        height={48}
                                        className="certificate-icon"
                                    />
                                </div>
                                <Link href="/work-from-home-certificate/">
                                    <h5 className="pq-icon-box-title">Work From Home Certificate</h5>
                                </Link>
                                <CertificateApplyButton certificate_name="Medical" buttonText="Apply" />
                            </div>
                        </div>
                    </div>
                    {/* Fit to Fly */}
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="pq-icon-box pq-style-4">
                            <div className="pq-icon-box-wrapper">
                                <div className="pq-icon">
                                    <Image
                                        src="/assets/images/services/unfit-to-travel.webp"
                                        alt="Online Fit to Fly/Travel Certificate"
                                        width={48}
                                        height={48}
                                        className="certificate-icon"
                                    />
                                </div>
                                <Link href="/fit-to-fly-certificate/">
                                    <h5 className="pq-icon-box-title">Fit to Fly/Travel Certificate</h5>
                                </Link>
                                <CertificateApplyButton certificate_name="Medical" buttonText="Apply" />
                            </div>
                        </div>
                    </div>
                    {/* Sports Fitness */}
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="pq-icon-box pq-style-4">
                            <div className="pq-icon-box-wrapper">
                                <div className="pq-icon">
                                    <Image
                                        src="/assets/images/services/medical_fitness.webp"
                                        alt="Online Medical Sports Fitness Certificate"
                                        width={48}
                                        height={48}
                                        className="certificate-icon"
                                    />
                                </div>
                                <Link href="/medical-fitness-certificate/">
                                    <h5 className="pq-icon-box-title">Sports Fitness Certificate</h5>
                                </Link>
                                <CertificateApplyButton certificate_name="Medical" buttonText="Apply" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
