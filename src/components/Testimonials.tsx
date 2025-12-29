
"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const testimonials = [
    {
        name: "Pushyamitran Radharamanan",
        rating: 5,
        text: "It is a very good platform get medical leave certificate.",
    },
    {
        name: "Ankita Nair",
        rating: 5,
        text: "Pulsequik was fantastic. Easy booking, a smooth consultation, and a thorough doctor. I received my medical certificate promptly. Highly recommend!",
    },
    {
        name: "Srishti Maurya",
        rating: 5,
        text: "The website s 100% genuine and can assist you if you have any problem related to certificate."
    },
    {
        name: "Dr. Ankit Singh",
        rating: 5,
        text: "Very good service. I get this service for my brother in law. Got call of MBBS doctor for consultation and received medical certificate too. I recommend pulsequik"
    },
    {
        name: "Amit Kumar",
        rating: 5,
        text: "Pulsequik provided excellent service. The online consultation was easy, the doctor was attentive, and I received my medical certificate quickly.",
    },
    {
        name: "Pooja Sharma",
        rating: 5,
        text: "Pulsequik was quick and efficient. The online consultation was smooth, and the doctor was attentive. Great telemedicine service!",
    },
    {
        name: "Pratima Rajput",
        rating: 5,
        text: "I got my certificate in 30 minutes. Great service, cooperative team. Highly recommend 🤗🤗.",
    },
    {
        name: "Aditya Rai",
        rating: 5,
        text: "Its actually a very helpful website!! A boon for students and office employees. The doctors are very helpful and understanding.",
    },
    {
        name: "Rudransh Sharma",
        rating: 5,
        text: "Best Urgently Medical Certification for College Students Leave"
    },
    {
        name: "Pankaj Patil",
        rating: 5,
        text: "Very good response and loyalty with customers, i will refer for my friends also."
    },
    {
        name: "Deepika Rajan",
        rating: 5,
        text: "It was amazing and I'm really impressed with theme response and immediate help. Thankyou team"
    },
    {
        name: "Abhishek Pandey",
        rating: 5,
        text: "I would suggest go for service. Very dedicated and quick work. Thanks for unfit to travel report."
    },
    {
        name: "harsha reddy",
        rating: 5,
        text: "Best and Genuine App for Medical certificate i booked slot for my mother and within 30 minutes of my payment they shared the report. Trust worthy and i can refer to my friends."
    },
    {
        name: "Nikita Singh",
        rating: 5,
        text: "It is really helpful. thank you pulsequik 😊"
    },
    {
        name: "jurist hkb",
        rating: 5,
        text: "Got my fitness certificate for gym Within 40 minutes thanks"
    },
    {
        name: "Sukhman Singh",
        rating: 5,
        text: "Great and promt service"
    }
];

export default function Testimonials() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="pq-bg-primary-dark pq-bg-img-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pq-section pq-style-1 d-flex align-items-center justify-content-between" style={{ gap: '16px' }}>
                            <div className="pq-section-title-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <span className="pq-section-sub-title" style={{ marginBottom: '4px' }}>TESTIMONIAL</span>
                                <h5 className="pq-section-title pq-text-white" style={{ display: 'inline-block', marginBottom: '0' }}>Our Happy Clients Say About Us</h5>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="pq-swiper-nav">
                                <div ref={prevRef} className="swiper-button-prev">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 6L9 12L15 18" stroke="#2490eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div ref={nextRef} className="swiper-button-next">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 6L15 12L9 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12" style={{ position: 'relative' }}>
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                // Assign navigation refs
                                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 16 },
                                768: { slidesPerView: 3, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 20 }
                            }}
                            className="pq-testimonial pq-testimonial-style-3"
                            style={{ height: '350px' }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="pq-testimonial-box pq-style-3">
                                        <div className="pq-testimonial-star">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <i key={i} className="fas fa-star" />
                                            ))}
                                        </div>
                                        <p className="pq-testimonial-content">
                                            {testimonial.text}
                                        </p>
                                        <div className="pq-testimonial-media">
                                            <div className="pq-testimonial-meta">
                                                <h5>{testimonial.name}</h5>
                                            </div>
                                            <div className="pq-testimonial-icon">
                                                <i className="fas fa-quote-right" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Scope Styles from Vue component */}
            <style jsx global>{`
            .pq-testimonial .pq-testimonial-box.pq-style-3 {
                height: 280px !important;
                min-height: 280px !important;
                max-height: 280px !important;
                display: flex !important;
                flex-direction: column !important;
                justify-content: space-between !important;
                background: #fff;
                border-radius: 10px;
                padding: 30px;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
                margin: 0 auto;
                position: relative;
                width: 100%;
                min-width: 0;
                max-width: 340px;
                box-sizing: border-box !important;
            }

            .pq-testimonial .swiper-slide {
                height: 300px !important;
                min-height: 300px !important;
                display: flex !important;
                align-items: stretch !important;
            }

            .pq-testimonial .pq-testimonial-box.pq-style-3 .pq-testimonial-content {
                flex: 1 !important;
                margin: 15px 0;
                line-height: 1.6;
                color: #666;
                font-size: 14px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                line-clamp: 4;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                word-wrap: break-word;
                height: auto;
                min-height: 80px;
            }

            .pq-testimonial .pq-testimonial-box.pq-style-3 .pq-testimonial-star {
                margin-bottom: 15px;
                height: 20px;
                display: flex;
                align-items: center;
            }

            .pq-testimonial .pq-testimonial-star i {
                color: #ffc107;
                font-size: 16px;
                margin-right: 2px;
            }

            .pq-testimonial .pq-testimonial-box.pq-style-3 .pq-testimonial-media {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                margin-top: auto !important;
                padding-top: 15px;
                border-top: 1px solid #eee;
                height: 50px;
                min-height: 50px;
                position: relative;
            }

            .pq-testimonial .pq-testimonial-meta h5 {
                margin: 0;
                font-size: 16px;
                font-weight: 600;
                color: #333;
                line-height: 1.2;
            }

            .pq-testimonial .pq-testimonial-icon {
                color: #2490eb;
                font-size: 20px;
            }

            .pq-testimonial .pq-testimonial-box.pq-style-3:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            }

            .pq-swiper-nav {
                display: flex;
                gap: 10px;
                flex-shrink: 0;
            }

            .swiper-button-prev,
            .swiper-button-next {
                position: static !important;
                width: 48px;
                height: 48px;
                border-radius: 8px;
                background: #fff;
                color: #2490eb;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                transition: all 0.3s ease;
                cursor: pointer;
                border: none;
                margin: 0;
            }

            .swiper-button-next {
                background: #2490eb;
                color: #fff;
            }
            .swiper-button-prev:after, .swiper-button-next:after {
                display: none;
            }

            .swiper-button-prev svg, .swiper-button-next svg {
                width: 24px;
                height: 24px;
            }

            .swiper-button-prev:hover {
                background: #2490eb;
                color: #fff;
            }

            .swiper-button-next:hover {
                background: #1976c5;
                color: #fff;
            }

            @media (max-width: 768px) {
                .pq-section.pq-style-1 {
                    flex-direction: column !important;
                    align-items: flex-start !important;
                    gap: 20px !important;
                }
                .pq-swiper-nav, .swiper-button-prev, .swiper-button-next {
                    display: none !important;
                }
                .pq-testimonial .pq-testimonial-box.pq-style-3 {
                    height: 250px !important;
                    min-height: 250px !important;
                    max-height: 250px !important;
                    padding: 20px;
                    max-width: 90vw;
                    margin: 0 auto;
                }
                .pq-testimonial .swiper-slide {
                    height: 270px !important;
                    min-height: 270px !important;
                    max-height: 270px !important;
                }
                 .pq-testimonial .pq-testimonial-box.pq-style-3 .pq-testimonial-content {
                    font-size: 13px;
                    -webkit-line-clamp: 3;
                    line-clamp: 3;
                    min-height: 60px;
                }
                .pq-testimonial .pq-testimonial-box.pq-style-3 .pq-testimonial-media {
                    height: 40px;
                    min-height: 40px;
                }
            }
      `}</style>
        </section>
    );
}
