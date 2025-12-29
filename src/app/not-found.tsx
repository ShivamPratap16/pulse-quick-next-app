
import Link from 'next/link';

export default function NotFound() {
    return (
        <main>
            <section className="page-not-found pq-pb-210">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pq-error-block">
                                <div className="pq-errot-text">404</div>
                                <p><span>Oops! This Page is Not Found.</span></p>
                                <div className="pq-btn-block">
                                    <div className="pq-btn-container">
                                        <Link href="/" className="pq-button">
                                            <div className="pq-button-block">
                                                <span className="pq-button-text">
                                                    Back to Home
                                                </span>
                                                <i className="ion ion-plus-round"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
