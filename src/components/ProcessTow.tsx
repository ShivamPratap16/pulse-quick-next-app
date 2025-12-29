
import Image from "next/image";

const processSteps = [
    {
        number: '01',
        title: 'Submit The Form',
        description: 'Fill out our form to request your medical certificate.',
        image: '/assets/images/process/1.webp',
        mobile_img: '/assets/images/process/mobile-1.webp',
        alt: 'Submit Form'
    },
    {
        number: '02',
        title: 'Online Payment',
        description: 'Complete payment using online mode or by link.',
        image: '/assets/images/process/2.webp',
        mobile_img: '/assets/images/process/mobile-2.webp',
        alt: 'Online Payment'
    },
    {
        number: '03',
        title: 'Doctor Consultation',
        description: 'Our doctor will assess your request and reach out shortly.',
        image: '/assets/images/process/3.webp',
        mobile_img: '/assets/images/process/mobile-3.webp',
        alt: 'Doctor Consultation'
    },
    {
        number: '04',
        title: 'Get Certificate',
        description: 'Receive your certificate online within 40 minutes.',
        image: '/assets/images/process/4.webp',
        mobile_img: '/assets/images/process/mobile-4.webp',
        alt: 'Get Certificate'
    }
];

export default function ProcessTow({ className = "" }: { className?: string }) {
    return (
        <section className={`pwproc-section pwproc-bg ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="pwproc-section-header text-center">
                            <span className="pwproc-subtitle">OUR STEPS</span>
                            <h5 className="pwproc-title">Our Working Process</h5>
                        </div>
                    </div>
                </div>

                <div className="pwproc-container">
                    {processSteps.map((step, index) => (
                        <div key={step.number} className="pwproc-item">
                            <div className="pwproc-card">
                                <div className="pwproc-mobile-number">{step.number}</div>

                                <div className="pwproc-media">
                                    <div className="pwproc-img-wrapper">
                                        {/* Desktop/Tablet image */}
                                        <div className="pwproc-img pwproc-img-desktop" style={{ position: 'relative', width: '150px', height: '150px' }}>
                                            <Image
                                                src={step.image}
                                                alt={step.alt}
                                                fill
                                                sizes="(max-width: 768px) 60px, (max-width: 1024px) 100px, 150px"
                                                priority={index === 0}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                        {/* Mobile image */}
                                        <div className="pwproc-img pwproc-img-mobile" style={{ position: 'relative', width: '60px', height: '60px' }}>
                                            <Image
                                                src={step.mobile_img}
                                                alt={step.alt}
                                                fill
                                                sizes="60px"
                                                priority={index === 0}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="pwproc-number">
                                        <span>{step.number}</span>
                                    </div>
                                </div>

                                <div className="pwproc-info">
                                    <h5 className="pwproc-card-title">{step.title}</h5>
                                    <div className="pwproc-desc">
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
