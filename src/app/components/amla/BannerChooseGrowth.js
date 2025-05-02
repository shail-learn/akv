import React from 'react'
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/amla/banner.webp";

import why1 from "../../../assets/images/amla/why1.webp";
import why2 from "../../../assets/images/amla/why2.webp";
import why3 from "../../../assets/images/amla/why3.webp";
import why4 from "../../../assets/images/amla/why4.webp";
import why5 from "../../../assets/images/amla/why5.webp";
import bgimage from "../../../assets/images/amla/bgimage.webp";


import Image from 'next/image';


export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Amla`,
        subtitle: `The Superfruit of Indian Agroforestry`,
        title: "Amla (Emblica officinalis), also known as Indian Gooseberry, is a powerhouse of nutrition and a valuable agroforestry crop. Widely cultivated in India for its medicinal, nutritional, and economic benefits, Amla has gained prominence among farmers due to its high yield, low maintenance, and growing market demand. ",
        opacity: "opacity-50"
    };
    return (
        <>
            <BannerPage
                heading={text.heading}
                title={text.title}
                subtitle={text.subtitle}

                opacity={text.opacity}
                banner={text.banner}
                classname={text.className}

            />

        </>
    )
}

export const Choose = () => {
    const amlaData = [
        {
            image: why1,
            heading: 'High Market Demand',
            description: 'Used in Ayurveda, nutraceuticals, and the cosmetic industry.',
        },
        {
            image: why2,
            heading: 'Sustainable Crop',
            description: 'Requires minimal inputs and thrives in diverse conditions',
        },
        {
            image: why3,
            heading: 'Multi-Purpose Usage',
            description: 'Consumed fresh, dried, or processed into various products.',
        },
        {
            image: why4,
            heading: 'Soil Enrichment',
            description: 'Improves soil health and prevents erosion',
        },
        {
            image: why5,
            heading: 'High Economic Returns',
            description: 'Generates revenue through fruit, leaves, and processed products.',
        },
    ];
    return (
        <>
            <section className="bg-[#f2f2f2] py-16 px-4">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center text-green-900 mb-12">
                        Why choose Amla?
                    </h2>

                    <div className="flex flex-wrap justify-center gap-y-10  md:gap-x-16">
                        {amlaData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[40px] overflow-hidden shadow-sm flex flex-col w-full sm:w-[48%] lg:w-[30%] max-w-[360px]"
                            >
                                <div className="w-full h-48 relative">
                                    <Image
                                        src={item.image}
                                        alt={item.heading}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-[40px]"
                                    />
                                </div>
                                <div className="p-5">
                                    <p className="text-sm font-bold text-black mb-1">
                                        {item.heading}
                                        <span className="font-normal text-black"> – {item.description}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export const Growth = () => {
    const growthConditionsData = {
        backgroundImage: bgimage,
        heading: "Growth Conditions of Amla",
        sections: [
            {
                title: "Climate Requirements",
                content: [
                    "Amla is highly adaptable and grows well in tropical and subtropical climates across India.",
                    "• Maximum Temperature: 45°C",
                    "• Minimum Temperature: 5°C",
                    "• Annual Rainfall Requirement: 600 mm - 1200 mm",
                    "It is resistant to drought and extreme temperature variations, making it suitable for large-scale cultivation in different regions of India."
                ]
            },
            {
                title: "Soil Preferences",
                content: [
                    "Amla can be grown in a variety of soils, but it performs best in well-drained, deep loamy soil.",
                    "• Best Suited Soil: Sandy loam, black cotton, and red soil.",
                    "• Soil Depth: Deep soils allow strong root development.",
                    "• Soil Drainage: Well-drained soil prevents water stagnation.",
                    "• pH Range: 6.0 - 8.0 (neutral to slightly alkaline conditions are ideal).",
                    "Due to its hardy nature, Amla can be cultivated in drylands with proper soil and water conservation techniques."
                ]
            }
        ]
    };
    const { backgroundImage, heading, sections } = growthConditionsData;
    return (
        <>
            <section
                className="relative bg-cover bg-center text-white py-16 md:py-24"
                style={{ background: `url(${backgroundImage.src})center center / cover no-repeat` }}

            >
                <div className="bg-black/60 absolute inset-0 z-0" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h2 className="text-center text-3xl md:text-4xl redhat font-semibold mb-10 md:mb-16">{heading}</h2>
                    <div className="flex flex-col md:flex-row md:divide-x md:divide-white md:gap-8">
                        {sections.map((section, index) => (
                            <div key={index} className={`md:w-1/2 px-4 md:px-8 mb-10 md:mb-0`}>
                                <h3 className="font-semibold mb-3 text-white">{section.title}</h3>
                                <div className="space-y-2 text-sm font-light leading-relaxed">
                                    {section.content.map((line, idx) => (
                                        <p key={idx}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

