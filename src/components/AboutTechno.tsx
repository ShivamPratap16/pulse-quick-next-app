
import AnimatedCounter from './AnimatedCounter';
import styles from './AboutTechno.module.css';

export default function AboutTechno() {
    return (
        <section className={styles.countersSection}>
            <div className={styles.backgroundOverlay}></div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="pq-counter pq-style-2">
                            <div className="pq-counter-contain">
                                <div className="pq-counter-info">
                                    <div className="pq-counter-num-prefix">
                                        <h5 style={{ color: '#fff', fontSize: '3rem', fontWeight: 700, margin: 0 }}>
                                            <AnimatedCounter end={4500} suffix="+" />
                                        </h5>
                                    </div>
                                    <p className="pq-counter-description" style={{ color: '#eee', fontSize: '1.1rem', marginTop: '10px' }}>Certificate Delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="pq-counter pq-style-2">
                            <div className="pq-counter-contain">
                                <div className="pq-counter-info">
                                    <div className="pq-counter-num-prefix">
                                        <h5 style={{ color: '#fff', fontSize: '3rem', fontWeight: 700, margin: 0 }}>
                                            <AnimatedCounter end={3000} suffix="+" />
                                        </h5>
                                    </div>
                                    <p className="pq-counter-description" style={{ color: '#eee', fontSize: '1.1rem', marginTop: '10px' }}>Happy Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="pq-counter pq-style-2">
                            <div className="pq-counter-contain">
                                <div className="pq-counter-info">
                                    <div className="pq-counter-num-prefix">
                                        <h5 style={{ color: '#fff', fontSize: '3rem', fontWeight: 700, margin: 0 }}>
                                            <AnimatedCounter end={500} suffix="+" />
                                        </h5>
                                    </div>
                                    <p className="pq-counter-description" style={{ color: '#eee', fontSize: '1.1rem', marginTop: '10px' }}>Cities Covered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

