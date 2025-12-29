export interface BreadcrumbItem {
    label: string;
    href?: string;
    active?: boolean;
    icon?: string;
}

const breadcrumbConfig: Record<string, BreadcrumbItem[]> = {
    // Medical Certificates main page
    'medical-certificates': [
        { label: 'Medical Certificates', href: '/medical-certificates/' }
    ],
    'about-us': [
        { label: 'About Us', href: '/about-us/' }
    ],
    'careers': [
        { label: 'Careers', href: '/careers/' }
    ],
    'contact-us': [
        { label: 'Contact Us', href: '/contact-us/' }
    ],
    'faq': [
        { label: 'FAQ', href: '/faq/' }
    ],
    'privacy-policy': [
        { label: 'Privacy Policy', href: '/privacy-policy/' }
    ],
    'refund-cancellation-policy': [
        { label: 'Refund & Cancellation Policy', href: '/refund-cancellation-policy/' }
    ],
    'states-and-cities-where-we-are-available': [
        { label: 'States and Cities Where We Are Available', href: '/states-and-cities-where-we-are-available/' }
    ],
    'terms-and-conditions': [
        { label: 'Terms and Conditions', href: '/terms-and-conditions/' }
    ],
    'work-with-us-as-a-doctor': [
        { label: 'Work With Us As A Doctor', href: '/work-with-us-as-a-doctor/' }
    ],
    'doctor-consultation': [
        { label: 'Online Doctor Consultation', href: '/doctor-consultation/' }
    ],

    // Online medical certificate in India
    'online-medical-certificate-in-india': [
        { label: 'Online Medical Certificate in India', href: '/online-medical-certificate-in-india/' }
    ],

    // City-specific medical certificates
    'online-medical-certificate-in-indore': [
        { label: 'Online Medical Certificate in India', href: '/online-medical-certificate-in-india/' },
        { label: 'Online Medical Certificate in Indore', href: '/online-medical-certificate-in-indore/' }
    ],
    'online-medical-certificate-in-jaipur': [
        { label: 'Online Medical Certificate in India', href: '/online-medical-certificate-in-india/' },
        { label: 'Online Medical Certificate in Jaipur', href: '/online-medical-certificate-in-jaipur/' }
    ],
    'online-medical-certificate-in-ahmedabad': [
        { label: 'Online Medical Certificate in India', href: '/online-medical-certificate-in-india/' },
        { label: 'Online Medical Certificate in Ahmedabad', href: '/online-medical-certificate-in-ahmedabad/' }
    ],
    'online-medical-certificate-in-kolkata': [
        { label: 'Online Medical Certificate in India', href: '/online-medical-certificate-in-india/' },
        { label: 'Online Medical Certificate in Kolkata', href: '/online-medical-certificate-in-kolkata/' }
    ],
    'online-medical-certificate-in-mumbai': [
        { label: 'Online Medical Certificate in India', href: '/online-medical-certificate-in-india/' },
        { label: 'Online Medical Certificate in Mumbai', href: '/online-medical-certificate-in-mumbai/' }
    ],
    'online-medical-certificate-in-delhi': [
        { label: 'Online Medical Certificate in India', href: '/online-medical-certificate-in-india/' },
        { label: 'Online Medical Certificate in Delhi', href: '/online-medical-certificate-in-delhi/' }
    ],
    'online-medical-certificate-in-bangalore': [
        { label: 'Online Medical Certificate in India', href: '/online-medical-certificate-in-india/' },
        { label: 'Online Medical Certificate in Bangalore', href: '/online-medical-certificate-in-bangalore/' }
    ],
    'online-medical-certificate-in-chennai': [
        { label: 'Online Medical Certificate in India', href: '/online-medical-certificate-in-india/' },
        { label: 'Online Medical Certificate in Chennai', href: '/online-medical-certificate-in-chennai/' }
    ],
    'online-medical-certificate-in-hyderabad': [
        { label: 'Online Medical Certificate in India', href: '/online-medical-certificate-in-india/' },
        { label: 'Online Medical Certificate in Hyderabad', href: '/online-medical-certificate-in-hyderabad/' }
    ],
    'online-medical-certificate-in-pune': [
        { label: 'Online Medical Certificate in India', href: '/online-medical-certificate-in-india/' },
        { label: 'Online Medical Certificate in Pune', href: '/online-medical-certificate-in-pune/' }
    ],

    // Certificate types
    'backdated-medical-certificate': [
        { label: 'Medical Certificates', href: '/medical-certificates/' },
        { label: 'Backdated Medical Certificate', href: '/backdated-medical-certificate/' }
    ],
    'fit-to-fly-certificate': [
        { label: 'Medical Certificates', href: '/medical-certificates/' },
        { label: 'Fit to Fly Certificate', href: '/fit-to-fly-certificate/' }
    ],
    'form-1a-fitness-certificate': [
        { label: 'Medical Certificates', href: '/medical-certificates/' },
        { label: 'Form 1A Fitness Certificate', href: '/form-1a-fitness-certificate/' }
    ],
    'sports-medical-certificate': [
        { label: 'Medical Certificates', href: '/medical-certificates/' },
        { label: 'Sports Medical Certificate', href: '/sports-medical-certificate/' }
    ],
    'unfit-to-travel-certificate': [
        { label: 'Medical Certificates', href: '/medical-certificates/' },
        { label: 'Unfit to Travel Certificate', href: '/unfit-to-travel-certificate/' }
    ],
    'caretaker-certificate': [
        { label: 'Medical Certificates', href: '/medical-certificates/' },
        { label: 'Caretaker Certificate', href: '/caretaker-certificate/' }
    ],
    'cara-fitness-certificate': [
        { label: 'Medical Certificates', href: '/medical-certificates/' },
        { label: 'Cara Fitness Certificate', href: '/cara-fitness-certificate/' }
    ],
    'medical-fitness-certificate': [
        { label: 'Medical Certificates', href: '/medical-certificates/' },
        { label: 'Medical Fitness Certificate', href: '/medical-fitness-certificate/' }
    ],
    'recovery-certificate': [
        { label: 'Medical Certificates', href: '/medical-certificates/' },
        { label: 'Recovery Certificate', href: '/recovery-certificate/' }
    ],
    'sick-leave-certificate': [
        { label: 'Medical Certificates', href: '/medical-certificates/' },
        { label: 'Sick Leave Certificate', href: '/sick-leave-certificate/' }
    ],
    'work-from-home-certificate': [
        { label: 'Medical Certificates', href: '/medical-certificates/' },
        { label: 'Work From Home Certificate', href: '/work-from-home-certificate/' }
    ],

    // International certificates
    'international-medical-certificate': [
        { label: 'Medical Certificates', href: '/medical-certificates/' },
        { label: 'International Medical Certificate', href: '/international-medical-certificate/' }
    ],
    'online-medical-certificate-in-australia': [
        { label: 'Online Medical Certificate in Australia', href: '/online-medical-certificate-in-australia/' }
    ],
    'online-medical-certificate-in-canada': [
        { label: 'Online Medical Certificate in Canada', href: '/online-medical-certificate-in-canada/' }
    ],
    'online-medical-certificate-in-eu': [
        { label: 'Online Medical Certificate in EU', href: '/online-medical-certificate-in-eu/' }
    ],
    'online-medical-certificate-in-germany': [
        { label: 'Online Medical Certificate in Germany', href: '/online-medical-certificate-in-germany/' }
    ],
    'online-medical-certificate-in-ireland': [
        { label: 'Online Medical Certificate in Ireland', href: '/online-medical-certificate-in-ireland/' }
    ],
    'online-medical-certificate-in-philippines': [
        { label: 'Online Medical Certificate in Philippines', href: '/online-medical-certificate-in-philippines/' }
    ],
    'online-medical-certificate-in-singapore': [
        { label: 'Online Medical Certificate in Singapore', href: '/online-medical-certificate-in-singapore/' }
    ],
    'online-medical-certificate-in-uae': [
        { label: 'Online Medical Certificate in UAE', href: '/online-medical-certificate-in-uae/' }
    ],
    'online-medical-certificate-in-uk': [
        { label: 'Online Medical Certificate in UK', href: '/online-medical-certificate-in-uk/' }
    ],
    'online-medical-certificate-in-usa': [
        { label: 'Online Medical Certificate in USA', href: '/online-medical-certificate-in-usa/' }
    ],
};

function capitalizeWords(str: string): string {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function getBreadcrumbItems(routeName: string, customPageName?: string | null): BreadcrumbItem[] {
    const routeKey = routeName.replace(/^\//, '');
    let items = breadcrumbConfig[routeKey] ? [...breadcrumbConfig[routeKey]] : [];

    // If no config found, fallback to simple home > page structure
    if (items.length === 0 && routeKey) {
        // Try to generate a sensible default
        items = [{ 
            label: capitalizeWords(routeKey), 
            href: `/${routeKey}/` 
        }];
    }

    if (customPageName && items.length > 0) {
        items[items.length - 1] = {
            ...items[items.length - 1],
            label: customPageName
        };
    }

    return items;
}

export function getPageNameFromRoute(routeName: string, cityName?: string | null): string {
    const routeKey = routeName.replace(/^\//, '');

    if (routeKey.includes('[city]') && cityName) {
        return routeKey
            .replace('[city]', cityName)
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    const items = breadcrumbConfig[routeKey];
    if (items && items.length > 0) {
        return items[items.length - 1].label;
    }

    return capitalizeWords(routeKey);
}

export function getCityBreadcrumb(baseRoute: string, cityName: string, certificateType: string = 'Medical'): BreadcrumbItem[] {
    const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    const lowerCity = cityName.toLowerCase();

    if (baseRoute === 'online-medical-certificate-in-india') {
        const pageTitle = `Online ${certificateType} Certificate in ${formattedCityName}`;
        return [
            { label: 'Online Medical Certificate in India', href: '/online-medical-certificate-in-india/' },
            { label: pageTitle, href: `/online-medical-certificate-in-${lowerCity}/` }
        ];
    }

    if (baseRoute === 'online-medical-sick-leave-certificate-in-india') {
        const pageTitle = `Online ${certificateType} Certificate in ${formattedCityName}`;
        return [
            { label: 'Online Medical Sick Leave Certificate in India', href: '/online-medical-sick-leave-certificate-in-india/' },
            { label: pageTitle, href: `/online-medical-sick-leave-certificate-in-${lowerCity}/` }
        ];
    }

    if (baseRoute === 'online-medical-certificate-in-usa') {
        const pageTitle = `Online ${certificateType} Certificate in ${formattedCityName}, USA`;
        return [
            { label: pageTitle, href: `/online-medical-certificate-in-usa-${lowerCity}/` }
        ];
    }

    if (baseRoute === 'online-international-medical-certificate-in') {
        const pageTitle = `Online ${certificateType} Certificate in ${formattedCityName}`;
        return [
            { label: pageTitle, href: `/online-international-medical-certificate-in-${lowerCity}/` }
        ];
    }

    if (baseRoute === 'online-form-1a-fitness-certificate-in') {
        const pageTitle = `Online Form 1A Fitness Certificate in ${formattedCityName}`;
        return [
            { label: pageTitle, href: `/online-form-1a-fitness-certificate-in-${lowerCity}/` }
        ];
    }

    const pageTitle = `Online ${certificateType} Certificate in ${formattedCityName}`;
    return [
        { label: pageTitle, href: `/${baseRoute}-${lowerCity}/` }
    ];
}
