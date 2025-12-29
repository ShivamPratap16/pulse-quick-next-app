
import metaData from './meta.json';
import metaOutsideCountries from './metaOutsideCountries.json';

export interface MetaData {
    url: string;
    canonical: string;
    title: string;
    description: string;
    keyword: string;
}

const allMetaData: MetaData[] = [...metaData, ...metaOutsideCountries];

export function getMetadata(path: string): MetaData | null {
    // 1. Try exact match
    const data = allMetaData.find((item) => item.url === path || item.url === `${path}/`);
    if (data) return data;

    // 2. Fallback: Generate from URL
    // Mimics useSEO.js logic: split, capitalize, join
    const routeKey = path.replace(/^\//, '');
    if (!routeKey) return null; // Home page should have static meta

    const formattedTitle = routeKey
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        url: path,
        canonical: `https://pulsequik.com${path}`,
        title: `${formattedTitle} - PulseQuik`,
        description: `Get your ${formattedTitle} online from certified doctors. Quick, easy, and valid medical certificates.`,
        keyword: `${formattedTitle}, medical certificate, online doctor`
    };
}

export function getAllPaths() {
    return allMetaData.map((item) => item.url);
}
