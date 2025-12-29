"use client";

import React from 'react';

type ContentData = {
    intro?: { subtitle?: string; description?: string };
    whyChoose?: { title?: string; features?: { title: string; description: string; list?: string[] }[] };
    howToGet?: { title?: string; steps?: string[] };
    conclusion?: { paragraph1?: string; paragraph2?: string };
};

type Props = {
    city_name: string;
    certificate_name: string;
    contentData: ContentData;
};

// Helper to capitalize words
function capitalizeWords(str: string) {
    if (!str) return '';
    return str.toLowerCase().replace(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
}

export default function CapitalizeWord({ city_name, certificate_name, contentData }: Props) {
    const cityName = capitalizeWords(city_name);

    // Helpers to process content (replace placeholders)
    function processContent(content?: string) {
        if (!content) return '';
        return content
            .replace(/\{cityName\}/g, cityName)
            .replace(/\{certificate_name\}/g, certificate_name);
    }

    return (
        <section className="pq-90">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <div className="text-container pb-2">
                            <h2 className="">{certificate_name} Certificate in {cityName}</h2>
                        </div>
                        <p><span>{processContent(contentData.intro?.subtitle)}</span></p>
                        <p>{processContent(contentData.intro?.description)}</p>

                        <h2>{processContent(contentData.whyChoose?.title)}</h2>
                        <br />

                        {contentData.whyChoose?.features?.map((feature, index) => (
                            <React.Fragment key={index}>
                                <p><span>{feature.title}</span></p>
                                <p>{processContent(feature.description)}</p>
                                {feature.list && (
                                    <ul className="custom-list ps-4 mb-3">
                                        {feature.list.map((item, itemIndex) => (
                                            <li key={itemIndex}>{processContent(item)}</li>
                                        ))}
                                    </ul>
                                )}
                            </React.Fragment>
                        ))}

                        <p><span>{processContent(contentData.howToGet?.title)}</span></p>
                        {contentData.howToGet?.steps && (
                            <ul className="custom-list ps-4 mb-3">
                                {contentData.howToGet.steps.map((step, stepIndex) => (
                                    <li key={stepIndex}>{processContent(step)}</li>
                                ))}
                            </ul>
                        )}

                        <p>{processContent(contentData.conclusion?.paragraph1)}</p>
                        <p>{processContent(contentData.conclusion?.paragraph2)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
