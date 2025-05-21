import React from 'react'
import { FaqSlider } from '../FaqSlider';

import img01 from "../../../assets/images/teak/small.webp";
import { MarketLayout } from '../utilities/UsesStanadarLayout';
import PlantationSection from '../PlantationSection';

import market1 from "../../../assets/images/teak/right.webp";
import market2 from "../../../assets/images/teak/left.webp";
import Image from 'next/image';



export const Cultivation = () => {
    const heading = "Cultivation & Growth Conditions";
    const className = "slider_height";
    const title1 = "Climate & Soil Requirements";

    const card = [
        {
            title: "Rainfall: 1,000-1,500 mm annually (survives in areas with as little as 750 mm)",
        },
        {
            title:
                "Thrives in monsoon climates under tropical and subtropical conditions.",
        },
        {
            title:
                "Requires sandy loam soil with a pH of 6-7 (tolerates up to 8.5 pH if well-drained).",
        },
        {
            title:
                "Prefers elevations below 1,200 meters.",
        },

    ];
    return (
        <>
            <FaqSlider
                classname={className}
                title1={title1}
                className="shailendra"
                card={card}
                heading={heading}
            />

        </>
    );
}


export const Growth = () => {
    const marketData = {
        imageSrc: img01,
        title: "Growth Characteristics",
        description: "",

        steps: [
            "Teak is deciduous, shedding leaves during the dry season.",
            "Growth rate: Moderate to slow, but faster in artificial plantations.",
            "Natural forest rotation: 100-120 years.",
            "Artificial plantations: 70-80 years.",
            "Coppice regeneration: 40-60 years.",
            "Timber yield: 1.58 cubic meters per tree per year.",

        ],

    };
    return (
        <>
            <MarketLayout marketData={marketData} />


        </>
    );
}



export const Plantation = () => {
    const plantationData = {
        heading: "Plantation & Spacing",
        sections: [
            {
                heading: "Initial spacing:",
                items: ["1.8m x 1.8m or 2m x 2m, later thinned for better growth."],
            },
            {
                heading: "Plantation methods:",
                items: [
                    "Seedlings: Planted in 45-60 cm³ pits.",
                    "Stump planting: Requires 15 cm diameter and 30 cm depth.",
                ],
            },
        ],
    };
    return (
        <>
            <PlantationSection data={plantationData} />
        </>
    )
}


export const Harvesting = () => {
    const heading = "Harvesting & Sustainability"
    const fertilizerData = {
        "heading": "Harvesting Process",
        "content": [
            {
                "title": "Teak is typically harvested when it reaches 50-80 years in plantations. Sustainable harvesting involves:",
                "items": [
                    "Thinning: Removal of weaker trees at 5, 10, and 15 years to allow stronger trees to thrive.",
                    "Final felling: Occurs between 40-80 years, depending on plantation management."
                ]
            },
            {
                "title": "From the 3rd Month Onwards:",
                "items": [
                    "Nitrogen, Phosphorus, Potassium (NPK) @ 50g per plant at bi-monthly intervals"
                ]
            }
        ]
    }

    const fertilizerData2 = {
        "heading": "Over-Exploitation Concerns",
        "content": [
            {
                "title": "Due to its high market value, teak has been over-harvested, leading to:",
                "items": [
                    "Deforestation in natural teak forests.",
                    "Illegal logging and black-market trading.",
                    "Reduction in biodiversity in teak-rich regions.",

                ]
            },

        ]
    }
    return (
        <>
            <section className="py-14 lg:py-16 pt-10 lg:pt-16 relative overflow-hidden">
                <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
                    <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-6 lg:mb-12 text-center text-3xl md:text-4xl font-semibold  w-full">
                        {heading}
                    </h2>
                    <div className='flex flex-wrap'>
                        <div className='md:w-10/12 w-full justify-center mx-auto'>
                            <div className="flex flex-col-reverse md:grid grid-cols-1 items-center md:grid-cols-2 gap-6 relative">
                                <div className='md:pr-12'>
                                    <h2 className="text-xl  text-[#1B453C] mb-6">
                                        {fertilizerData.heading}
                                    </h2>
                                    <ul className="list-disc pl-5 text-sm md:text-[15px] text-black font-light space-y-4">
                                        {fertilizerData.content.map((section, index) => (
                                            <li key={index}>
                                                <span className="font-medium">{section.title}</span>
                                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                                    {section.items.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative w-full mt-10 md:mt-0">

                                    <Image
                                        src={market1}
                                        alt="Hand planting seeds"
                                        className="w-full h-full rounded-tr-[100px] md:-ml-12 z-10 relative"
                                    />
                                    <div className="absolute -top-4 -z-10 -right-0 w-20 h-20 bg-[#fff] rounded-full"></div>

                                </div>
                            </div>

                            <div className="grid grid-cols-1 items-center order-2  md:grid-cols-2 gap-6 relative mt-6 md:-mt-4">
                                <div className="relative">
                                    <Image
                                        src={market2}
                                        alt="Bamboo Products"
                                        className="w-full h-full rounded-bl-[100px]"

                                    />

                                </div>
                                <div>
                                    <h2 className="text-xl  text-[#1B453C] mb-6">
                                        {fertilizerData2.heading}
                                    </h2>
                                    <ul className="list-disc pl-5 text-sm md:text-[15px] text-black font-light space-y-4">
                                        {fertilizerData2.content.map((section, index) => (
                                            <li key={index}>
                                                <span className="font-medium">{section.title}</span>
                                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                                    {section.items.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="absolute -z-10  -left-16 -bottom-12 w-60 h-60 md:w-96 md:h-96 bg-[#fff] rounded-full"></div>
            </section>

        </>
    )
}
