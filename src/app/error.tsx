
'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main>
        <section className="page-not-found pq-pb-210">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pq-error-block">
                            <div className="pq-errot-text">500</div>
                            <h2>Internal Server Error</h2>
                            <p>Sorry, An Unexpected Error Occurred. Please Try Again Later.</p>
                            <div className="pq-btn-block">
                                <div className="pq-btn-container">
                                    <button onClick={() => reset()} className="pq-button me-3">
                                        <div className="pq-button-block">
                                            <span className="pq-button-text">
                                                Try Again
                                            </span>
                                            <i className="ion ion-refresh"></i>
                                        </div>
                                    </button>
                                    <Link href="/" className="pq-button">
                                        <div className="pq-button-block"> 
                                            <span className="pq-button-text">Back to Home</span> 
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
