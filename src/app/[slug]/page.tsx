import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import Breadcrumb from '@/components/Breadcrumb';
import Click2Action from '@/components/Click2Action';
import Form1aCapitalizeWord from '@/components/Form1aCapitalizeWord';
import CapitalizeSickLeaveCertificateCityPage from '@/components/CapitalizeSickLeaveCertificateCityPage';
import CapitalizeWordUSA from '@/components/CapitalizeWordUSA';
import CapitalizeWord from '@/components/CapitalizeWord';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CertificateSection from '@/components/CertificateSection';
import ProcessTow from '@/components/ProcessTow';

// Metadata function
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { pageTitle } = await getPageData(slug);

    if (pageTitle) {
        return {
            title: pageTitle,
            description: `Get your official ${pageTitle} online. Quick, doctor-verified, and 100% legitimate.`
        };
    }

    return {
        title: 'Page Not Found',
    };
}

// Helper to format city/state name for Breadcrumbs
function formatName(slug: string) {
    if (!slug) return '';
    return slug.replace(/-/g, ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
}

// Logic to determine page type and data
async function getPageData(slug: string) {
    let pageType = '';
    let cityKey = '';
    let pageTitle = '';
    let breadcrumbItems: any[] = [{ label: 'Home', href: '/', icon: 'fas fa-home' }];
    let certificateName = '';
    let isIndia = false;

    // 1. Form 1A
    if (slug.startsWith('online-form-1a-fitness-certificate-in-')) {
        pageType = 'form1a';
        cityKey = slug.replace('online-form-1a-fitness-certificate-in-', '');
        isIndia = cityKey === 'india';
        const nameFormatted = formatName(cityKey);
        pageTitle = isIndia ? 'Online Form 1A Fitness Certificate in India' : `Online Form 1A Fitness Certificate in ${nameFormatted}`;
        certificateName = 'Form 1A Fitness';

        breadcrumbItems.push({ label: 'Form 1A Fitness Certificate in India', ...(!isIndia ? { href: '/online-form-1a-fitness-certificate-in-india' } : { active: true }) });
        if (!isIndia) breadcrumbItems.push({ label: nameFormatted, active: true });
    }
    // 2. Sick Leave
    else if (slug.startsWith('online-medical-sick-leave-certificate-in-')) {
        pageType = 'sick-leave';
        cityKey = slug.replace('online-medical-sick-leave-certificate-in-', '');
        isIndia = cityKey === 'india';
        const nameFormatted = formatName(cityKey);
        pageTitle = isIndia ? 'Online Medical Sick Leave Certificate in India' : `Online Medical Sick Leave Certificate in ${nameFormatted}`;
        certificateName = 'Sick Leave';

        breadcrumbItems.push({ label: 'Online Sick Leave Certificate in India', ...(!isIndia ? { href: '/online-medical-sick-leave-certificate-in-india' } : { active: true }) });
        if (!isIndia) breadcrumbItems.push({ label: nameFormatted, active: true });
    }
    // 3. USA Medical Certificate
    else if (slug.startsWith('online-medical-certificate-in-usa-')) {
        pageType = 'usa';
        cityKey = slug.replace('online-medical-certificate-in-usa-', '');
        const nameFormatted = formatName(cityKey);
        pageTitle = `Online Medical Certificate in ${nameFormatted}, USA`;
        certificateName = 'Medical';

        // Parent could be USA page if it exists, for now direct breadcrumb
        breadcrumbItems.push({ label: 'Online Medical Certificate in USA', href: '/online-medical-certificate-in-usa' });
        breadcrumbItems.push({ label: `${nameFormatted}, USA`, active: true });
    }
    // 4. International Medical Certificate
    else if (slug.startsWith('online-international-medical-certificate-in-')) {
        pageType = 'international';
        cityKey = slug.replace('online-international-medical-certificate-in-', '');
        const isInternational = cityKey === 'international'; // Base page check if needed
        const nameFormatted = formatName(cityKey);
        pageTitle = `Online International Medical Certificate in ${nameFormatted}`;
        certificateName = 'International';

        breadcrumbItems.push({ label: 'Online International Medical Certificate', ...(!isInternational ? { href: '/online-international-medical-certificate-in-international' } : { active: true }) }); // Assumes /international base exists or points to something relevant
        if (!isInternational) breadcrumbItems.push({ label: nameFormatted, active: true });
    }
    // 5. Generic Medical Certificate (India) - Check this LAST as it overlaps
    else if (slug.startsWith('online-medical-certificate-in-')) {
        pageType = 'medical-india';
        cityKey = slug.replace('online-medical-certificate-in-', '');
        isIndia = cityKey === 'india';
        const nameFormatted = formatName(cityKey);
        pageTitle = isIndia ? 'Online Medical Certificate in India' : `Online Medical Certificate in ${nameFormatted}`;
        certificateName = 'Medical';

        breadcrumbItems.push({ label: 'Online Medical Certificate in India', ...(!isIndia ? { href: '/online-medical-certificate-in-india' } : { active: true }) });
        if (!isIndia) breadcrumbItems.push({ label: nameFormatted, active: true });
    }

    return { pageType, cityKey, pageTitle, breadcrumbItems, certificateName };
}

// Function to load JSON data for CapitalizeWord
async function getContentData(cityKey: string) {
    try {
        const filePath = path.join(process.cwd(), 'public', 'json-data', 'city-content.json');
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const allData = JSON.parse(fileContent);

        // Normalize city key: remove hyphens/spaces, lowercase
        const normalizedKey = cityKey.toLowerCase().replace(/[^a-z0-9]/g, '');

        let cityData = allData[normalizedKey] || allData[cityKey] || {};
        const defaultData = allData['default'] || {};

        // Deep merge helper (simple version)
        const merged = { ...defaultData };
        // Deep merge logic would be better but simple spread covers top level. 
        // For nested objects like 'intro', 'whyChoose', we need a bit more.
        // Doing a shallow merge of top-level sections:
        if (cityData.intro) merged.intro = { ...merged.intro, ...cityData.intro };
        if (cityData.whyChoose) merged.whyChoose = { ...merged.whyChoose, ...cityData.whyChoose };
        if (cityData.howToGet) merged.howToGet = { ...merged.howToGet, ...cityData.howToGet };
        if (cityData.conclusion) merged.conclusion = { ...merged.conclusion, ...cityData.conclusion };

        return merged;
    } catch (error) {
        console.error("Error reading city-content.json:", error);
        return {};
    }
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { pageType, cityKey, pageTitle, breadcrumbItems, certificateName } = await getPageData(slug);

    if (!pageType) return notFound();

    // Load content data only if needed (for Generic/International)
    let contentData = {};
    if (pageType === 'medical-india' || pageType === 'international') {
        contentData = await getContentData(cityKey);
    }

    return (
        <main>
            <Breadcrumb pageName={pageTitle} breadcrumbItems={breadcrumbItems} backgroundImage="/assets/images/breadcrumb.webp" />

            {pageType === 'form1a' && (
                <>
                    <Click2Action certificate_name={certificateName} is_certificate_city={true} certificate_city={formatName(cityKey)} />
                    <Form1aCapitalizeWord city_name={cityKey} certificate_name={certificateName} />
                </>
            )}

            {pageType === 'sick-leave' && (
                <>
                    <Click2Action certificate_name={certificateName} is_certificate_city={true} certificate_city={formatName(cityKey)} />
                    <CapitalizeSickLeaveCertificateCityPage city_name={cityKey} certificate_name={certificateName} />
                    <ProcessTow className="mb-5" />
                </>
            )}

            {pageType === 'usa' && (
                <>
                    <CapitalizeWordUSA city_name={cityKey} certificate_name={certificateName} />
                    <ProcessTow className="mb-5" />
                </>
            )}

            {(pageType === 'medical-india' || pageType === 'international') && (
                <>
                    <Click2Action certificate_name={certificateName} is_certificate_city={true} certificate_city={formatName(cityKey)} />
                    <CapitalizeWord city_name={cityKey} certificate_name={certificateName} contentData={contentData} />
                    <ProcessTow className="mb-5" />
                </>
            )}

            <div className="mt-5 pb-5">
                <CertificateSection className="certificate-margin-top120" />
            </div>
            <Testimonials />
            <FAQ />
        </main>
    );
}
