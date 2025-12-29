
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FloatingIcons() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        checkMobile(); // Check on mount
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <>
            {isMobile ? (
                <div className="floating-icons mobile">
                    <a href="tel:+919021240033" className="call-icon">
                        <span className="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 14.5c-.7 0-1.4-.1-2-.3-.2-.1-.5 0-.7.1l-1.1 1.1c-2.2-1.1-4-2.9-5.1-5.1l1.1-1.1c.2-.2.2-.5.1-.7-.2-.6-.3-1.3-.3-2C8.5 6.2 8.3 6 8 6H5.5C5.2 6 5 6.2 5 6.5c0 6.1 4.9 11 11 11 .3 0 .5-.2.5-.5V16c0-.3-.2-.5-.5-.5z" fill="#fff" />
                            </svg>
                        </span>
                        <span>Call</span>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=919021240033&text=Hi Pulsequick Team&type=phone_number&app_absent=0"
                        className="whatsapp-icon" target="_blank">
                        <span className="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.611-.916-2.206-.242-.58-.487-.501-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.075.149.198 2.099 3.205 5.077 4.377.711.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.289.173-1.413-.075-.124-.272-.198-.57-.347z" fill="#fff" />
                            </svg>
                        </span>
                        <span>WhatsApp</span>
                    </a>
                </div>
            ) : (
                <div className="floating-icons desktop">
                    <a href="tel:+919021240033" className="call-icon">
                        <Image src="/assets/images/logo/telephone.png" alt="Call" width={29} height={29} />
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=919021240033&text=Hi Pulsequick Team&type=phone_number&app_absent=0"
                        className="whatsapp-icon" target="_blank">
                        <Image src="/assets/images/logo/whatsapp.png" alt="WhatsApp" width={29} height={29} />
                    </a>
                </div>
            )}
            <style jsx>{`
        .floating-icons {
          position: fixed;
          z-index: 1000;
        }
        .desktop {
          bottom: 20px;
          left: 20px;
          display: flex;
          flex-direction: column;
        }
        .desktop a {
          margin: 10px 0;
        }
        .mobile {
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          display: flex;
          flex-direction: row;
          background: #fff;
          box-shadow: 0 -3px 15px rgba(0,0,0,0.12);
          align-items: stretch;
          justify-content: center;
          padding: 6px 8px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .mobile a {
          flex: 1 1 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 18px;
          padding: 16px 8px;
          color: #fff;
          text-decoration: none;
          margin: 4px;
          border-radius: 14px;
          gap: 8px;
        }
        .mobile .call-icon {
          background: linear-gradient(90deg, #4e54c8 0%, #7b5cff 100%);
        }
        .mobile .whatsapp-icon {
          background: #25d366;
        }
      `}</style>
        </>
    );
}
