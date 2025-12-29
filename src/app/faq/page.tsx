
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import { getMetadata } from "@/lib/meta-data";
import { getBreadcrumbItems } from "@/lib/breadcrumb";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = getMetadata('/faq') || {
    title: "Frequently Asked Questions | PulseQuik",
    description: "Find answers to common questions about PulseQuik's online medical certificates.",
};

export default function FAQPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/", icon: "fas fa-home" },
        ...getBreadcrumbItems('faq').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb pageName="Frequently Asked Questions" breadcrumbItems={breadcrumbItems} />
            <FAQ />
        </main>
    );
}
