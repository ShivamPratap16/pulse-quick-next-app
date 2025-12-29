
import Script from 'next/script';
import React from 'react';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "PulseQuik",
  "foundingDate": "2024-05-01",
  "alternateName": ["Pulse Quick", "PulseQuik Telemedicine", "PulseQuik Health Services"],
  "description": "PulseQuik is a trusted telemedicine platform providing legitimate medical certificates from licensed doctors, all online. Get sick leave, unfit to travel, Form 1A, CARA, and other medical certificates quickly and hassle-free, right from the comfort of your home.",
  "telephone": "9021240033",
  "email": "care@pulsequik.com",
  "@id": "https://pulsequik.com/",
  "url": "https://pulsequik.com/",
  "logo": "https://pulsequik.com/assets/images/logo/main-optimized.webp",
  "image": "https://pulsequik.com/assets/images/logo/main-optimized.webp",
  "priceRange": "₹649-₹1899",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "E-12, SIDDHARTH LAKE CITY, ANAND NAGAR, RAISEN ROAD, BHOPAL",
    "addressLocality": "Bhopal",
    "addressRegion": "MADHYA PRADESH",
    "addressCountry": "IN",
    "postalCode": "462023"
  },
  "foundingLocation": {
    "@type": "Place",
    "address": "Bhopal, Madhya Pradesh, India"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "08:00",
    "closes": "20:00"
  }],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9021240033",
    "contactType": "customer support",
    "email": "care@pulsequik.com",
    "availableLanguage": ["English", "Hindi"]
  },
  "founders": [{
    "@type": "Person",
    "name": "Akshay Shrivastava",
    "jobTitle": "Founder",
    "sameAs": "https://www.instagram.com/mr.__akshay_ak47/"
  }, {
    "@type": "Person",
    "name": "Chanchal Rajput",
    "jobTitle": "Founder",
    "sameAs": "https://www.instagram.com/__its_chanchu_/"
  }],
  "sameAs": ["https://www.facebook.com/people/PulseQuik/61560506953972/", "https://www.instagram.com/pulsequik.telemedicine?igsh=MWQ2YXFmdGFhcGJuMw=="],
  "paymentAccepted": ["credit card", "debit card", "paypal", "UPI", "Net Banking"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "44"
  },
  "review": [{
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Pratima Rajput"
    },
    "reviewBody": "I got my certificate in 30 minutes great service corporative team. Highly recommend 🤗🤗.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    }
  }, {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Aditya Rai"
    },
    "reviewBody": "Its actually a very helpful website!! Its kinda a boon for students and office employees who need an actual and legal medical certificate. The doctors are very helpful and understanding. Overall it was a very good experience.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    }
  }, {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Rudransh Sharma"
    },
    "reviewBody": "Best Urgently Medical Certification for College Students Leave",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    }
  }, {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Abhishek Pandey"
    },
    "reviewBody": "I would suggest go for service. Very dedicated and quick work. Thanks for unfit to travel report.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    }
  }, {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Harsha Reddy"
    },
    "reviewBody": "Best and Genuine App for Medical certificate i booked slot for my mother and within 30 minutes of my payment they shared the report. Trust worthy and i can refer to my friends.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    }
  }],
  "hasCredential": [{
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "HIPAA Compliance Certification",
    "provider": {
      "@type": "Organization",
      "name": "U.S. Department of Health & Human Services",
      "url": "https://www.hhs.gov/hipaa/"
    }
  }, {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Digital India Initiative",
    "provider": {
      "@type": "GovernmentOrganization",
      "name": "Ministry of Electronics and Information Technology, Government of India",
      "url": "https://digitalindia.gov.in/"
    }
  }],
  "knowsAbout": ["Online Medical Certificates", "Telemedicine Consultation", "Fitness Certificates", "Sick Leave Certificates", "Form 1A Medical Certificate", "CARA Medical Certificate", "Work from Home Certificate"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medical Certificates Offered",
    "itemListElement": [{
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Sick Leave Certificate"
      },
      "price": "649",
      "priceCurrency": "INR"
    }, {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Form 1A Medical Fitness Certificate"
      },
      "price": "649",
      "priceCurrency": "INR"
    }, {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Unfit to Travel Certificate"
      },
      "price": "649",
      "priceCurrency": "INR"
    }, {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "CARA Medical Certificate"
      },
      "price": "649",
      "priceCurrency": "INR"
    }, {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Medical Fitness Certificate"
      },
      "price": "649",
      "priceCurrency": "INR"
    }, {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Caretaker Certificate"
      },
      "price": "649",
      "priceCurrency": "INR"
    }, {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Medical Recovery Certificate"
      },
      "price": "649",
      "priceCurrency": "INR"
    }, {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Work from Home Certificate"
      },
      "price": "649",
      "priceCurrency": "INR"
    }]
  },
  "potentialAction": [{
    "@type": "OrderAction",
    "name": "Sick Leave Medical Certificate",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pulsequik.com/sick-leave-certificate"
    },
    "actionStatus": "ActiveActionStatus"
  }, {
    "@type": "OrderAction",
    "name": "Get a Work From Home Medical Certificate",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pulsequik.com/work-from-home-certificate"
    },
    "actionStatus": "ActiveActionStatus"
  }, {
    "@type": "OrderAction",
    "name": "Get a Medical Recovery Certificate",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pulsequik.com/recovery-certificate"
    },
    "actionStatus": "ActiveActionStatus"
  }, {
    "@type": "OrderAction",
    "name": "Get a Caretaker Certificate",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pulsequik.com/caretaker-certificate"
    },
    "actionStatus": "ActiveActionStatus"
  }, {
    "@type": "OrderAction",
    "name": "Medical Fitness Certificate",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pulsequik.com/medical-fitness-certificate"
    },
    "actionStatus": "ActiveActionStatus"
  }, {
    "@type": "OrderAction",
    "name": "CARA Fitness Medical Certificate",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pulsequik.com/cara-fitness-certificate"
    },
    "actionStatus": "ActiveActionStatus"
  }, {
    "@type": "OrderAction",
    "name": "Unfit to Travel Certificate",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pulsequik.com/unfit-to-travel-certificate"
    },
    "actionStatus": "ActiveActionStatus"
  }, {
    "@type": "OrderAction",
    "name": "Form 1A Fitness Certificate",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pulsequik.com/form-1a-fitness-certificate"
    },
    "actionStatus": "ActiveActionStatus"
  }, {
    "@type": "OrderAction",
    "name": "Get a medical certificate online",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pulsequik.com/medical-certificate/payment"
    },
    "actionStatus": "ActiveActionStatus"
  }, {
    "@type": "OrderAction",
    "name": "Form 1A Medical Certificate for Driving License Online",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pulsequik.com/form-1a-fitness-certificate/payment"
    },
    "actionStatus": "ActiveActionStatus"
  }],
  "serviceArea": [{
    "@type": "Place",
    "address": {
      "addressCountry": "United Arab Emirates",
      "addressLocality": ["Dubai", "Abu Dhabi", "Sharjah"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "United Kingdom",
      "addressLocality": ["London", "Manchester", "Birmingham"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "Australia",
      "addressLocality": ["Sydney", "Melbourne", "Brisbane"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "Austria",
      "addressLocality": ["Vienna", "Salzburg", "Graz"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "Qatar",
      "addressLocality": ["Doha", "Al Wakrah", "Al Khor"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "New Zealand",
      "addressLocality": ["Auckland", "Wellington", "Christchurch"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "Nepal",
      "addressLocality": ["Kathmandu", "Pokhara", "Lalitpur"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "Mauritius",
      "addressLocality": ["Port Louis", "Curepipe", "Vacoas"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "Malaysia",
      "addressLocality": ["Kuala Lumpur", "Penang", "Johor Bahru"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "Maldives",
      "addressLocality": ["Male", "Hulhumale", "Addu City"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "Kuwait",
      "addressLocality": ["Kuwait City", "Al Ahmadi", "Hawalli"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "Japan",
      "addressLocality": ["Tokyo", "Osaka", "Yokohama"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "Italy",
      "addressLocality": ["Rome", "Milan", "Naples"]
    }
  }, {
    "@type": "Place",
    "address": {
      "addressCountry": "Germany",
      "addressLocality": ["Berlin", "Munich", "Frankfurt"]
    }
  }],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "url": "https://www.pulsequik.com/faq",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is the process to obtain medical certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You have to fill the form and complete the payment after that doctor will call you for the consultation and within 40 minutes you will get your document."
      }
    }, {
      "@type": "Question",
      "name": "How can we trust you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are a registered private limited company we are only mediator between the patient and the doctor our only motive is to give immediate service whoever is in need also it is time saving you can obtain medical certificate just by sitting at your home."
      }
    }, {
      "@type": "Question",
      "name": "Will it be accepted by the organisation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will get certificate issued by MD MBBS doctor and they follow the NMC guidelines while issuing the certificate."
      }
    }, {
      "@type": "Question",
      "name": "How long does it take to get a medical certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will obtain your medical certificate from us within 40 minutes."
      }
    }, {
      "@type": "Question",
      "name": "Are the certificates issued by PulseQuik legally valid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all medical certifications are issued by certified doctors and are legally acceptable for submission to employers, schools, or government agencies. We do not provide fake medical certificates."
      }
    }, {
      "@type": "Question",
      "name": "Are the doctors genuine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we have registered MD and MBBS doctors who issue the certificates."
      }
    }, {
      "@type": "Question",
      "name": "Do I need to visit a doctor in person?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, the entire process is online. Our registered doctors evaluate your request and issue the certificate without needing an in-person visit."
      }
    }, {
      "@type": "Question",
      "name": "Can I use this medical certificate for my office or school leave?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our medical certificates are widely accepted in workplaces and educational institutions across the world."
      }
    }, {
      "@type": "Question",
      "name": "What payment methods do you accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept credit/debit cards, UPI, PayPal, and Net Banking."
      }
    }]
  }
};

export default function SchemaOrg() {
  return (
    <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">
      {JSON.stringify(schemaData)}
    </Script>
  );
}
