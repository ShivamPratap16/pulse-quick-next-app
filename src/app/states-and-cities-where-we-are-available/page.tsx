import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import StatesCitiesContent from '@/components/StatesCitiesContent';
import { getMetadata } from '@/lib/meta-data';
import { getBreadcrumbItems } from '@/lib/breadcrumb';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = getMetadata('/states-and-cities-where-we-are-available') || {
    title: 'States and Cities Where We Are Available - PulseQuik',
    description: 'Find out where PulseQuik services are available across India and internationally.'
};

export default function StatesAndCities() {
    const breadcrumbItems = [
        { label: 'Home', href: '/', icon: 'fas fa-home' },
        ...getBreadcrumbItems('states-and-cities-where-we-are-available').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb
                pageName="States and Cities Where We Are Available"
                breadcrumbItems={breadcrumbItems}
                backgroundImage="/assets/images/breadcrumb.webp"
            />
            <StatesCitiesContent />
        </main>
    );
}
