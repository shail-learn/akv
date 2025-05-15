import React from 'react'
import SliderTwoBg from '../SliderTwoBg'
import impact1 from "../../../assets/images/gamhar/image1.webp";
import impact2 from "../../../assets/images/gamhar/image2.webp";
import impact3 from "../../../assets/images/gamhar/image3.webp";
import bgimpact from "../../../assets/images/gamhar/cultivation.webp";
import img01 from "../../../assets/images/gamhar/asian-farmer.webp";
import marketImg from "../../../assets/images/gamhar/street-market-sunset.webp";


import Image from 'next/image';
import { UsesSlider } from '../UsesSlider';


export const Cultivation = () => {
    const heading = "Cultivation & Growth Characteristics";

    const boxslider = [
        {
            image: impact1,
            heading: "Silvicultural Characteristics",
            list: [
                "Rapid Growth Rate – Reaches a height of 8-10 meters within 3-4 years.",
                "Moderate Water Requirement – Needs regular irrigation in initial years but withstands dry conditions later.",
                "Pest & Disease Resistance – Shows resistance to most common pests and diseases.",
                "Drought Tolerance – Can withstand short dry spells without significant impact.",
                "Longevity – Remains productive for over 30 years with proper management.",
            ],
        },
        {
            image: impact2,
            heading: "Nursery Practices",
            list: [
                "Seed Propagation: Usually propagated through seeds and tissue culture techniques.",
                "Germination Process: Seeds germinate within 2-3 weeks under favorable conditions.",
                "Shading & Watering: Requires partial shade and regular watering in early stages.",
                "Transplantation: Ideal for field planting once saplings reach 40-50 cm in height.",

            ],
        },
        {
            image: impact3,
            heading: "Planting & Spacing",
            list: [
                "Pit Size: 45 cm x 45 cm x 45 cm for deep root establishment.",
                "Ideal Spacing: 3m x 3m for optimal timber yield.",
                "Intercropping Compatibility: Can be intercropped with pulses, turmeric, or medicinal plants. Following these best practices ensures high timber yield and faster maturity",

            ],
        },
    ];
    return (
        <>
            <SliderTwoBg heading={heading} bgImage={bgimpact} boxslider={boxslider} />
        </>
    )
}



export const Harvesting = () => {
    const plantingData = {
        title: "Harvesting & Yield of Gamhar Trees",

        steptitle: "Gamhar is a short-rotation timber species that can be harvested within 6-10 years.",
        steps: [
            "Harvesting Age: Begins at 6-8 years; optimal timber harvest at 10 years.",
            "Annual Growth Rate: 2-3 cm in diameter increase per year.",
            "Harvesting Method: Clear felling with sustainable replanting practices.",
            "Timber Yield: 1.5-2 cubic meters per tree after 10 years.",
            "Post-Harvest Processing: Timber is dried and treated for durability before being used in manufacturing.",
        ],

        imageSrc: img01,
    };

    return (
        <>
            <section className=' py-16  lg:py-20' >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16'>
                        <div className="md:w-1/2 w-full">
                            <div className='relative'>

                                <Image
                                    src={plantingData.imageSrc}
                                    alt="Planting Techniques"
                                    width={600}
                                    height={400}
                                    className="rounded-[20px]"
                                    style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                                />
                                <div className="absolute inset-0 -z-10 h-[110%] w-[96%] md:w-full translate-x-6 -translate-y-3 md:-translate-y-4 bg-white border border-gray-400 rounded-[20px] shadow-md"></div>

                            </div>

                        </div>
                        <div className='lg:w-6/12  w-12/12'>

                            <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C]">{plantingData.title}</h2>

                            <p className='text-[15px] redhat font-semibold mt-6 md:mt-10 mb-2 md:text-base text-black'>{plantingData.steptitle}</p>
                            <ul className="list-disc space-y-1 pl-5 text-black mb-4">
                                {plantingData.steps.map((step, index) => (
                                    <li key={index} className="text-[15px] md:text-base redhat font-normal text-black">
                                        {step}
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}


export const Market = () => {

    const fertilizationData = {
        heading: "Market Demand & Pricing",
        sections: [
            {
                subHeading: "Market Demand",
                description:
                    "Gamhar timber is widely used in various industries due to its strength, durability, and workability.",
                points: [
                    "Furniture & Plywood Industry – Valued for its light yet strong wood.",
                    "Construction & Joinery – Used in doors, panels, and frames.",
                    "Paper & Pulp Industry – Utilized in paper production.",
                    "Ayurvedic Medicine – Extracts used for anti-inflammatory and anti-microbial properties.",
                    "Export Market – Demand rising in Southeast Asia, the Middle East, and Europe.",
                ],
            },
            {
                subHeading: "Market Supply",
                points: [
                    "Increasing Market Prices – Growing demand for sustainable timber.",
                    "Agroforestry Adoption – More farmers are shifting towards Gamhar plantations.",
                    "Value Addition Possibilities – Timber treatment and processing increase profitability.",
                ],
            },
        ],
        image: "/images/market-demand.jpg",
    };



    return (
        <>
            <section className="flex flex-wrap md:flex-nowrap bg-[#1B453C]">
                <div className="w-full md:w-6/12">
                    <Image
                        src={marketImg}
                        alt="Market Demand"
                        className="w-full md:h-[800px] min-h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-6/12 p-6 md:p-12 text-white flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl redhat font-semibold mb-4">
                        {fertilizationData.heading}
                    </h2>

                    <div className="mr-6 p-4 space-y-6">
                        {fertilizationData.sections.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-xl md:text-2xl redhat font-normal mb-2">
                                    {section.subHeading}
                                </h3>

                                {section.description && (
                                    <p className="text-sm font-light redhat md:text-base mb-4 text-gray-200">
                                        {section.description}
                                    </p>
                                )}

                                <ul className="list-disc redhat ml-6 space-y-2 text-gray-200 text-sm md:text-base">
                                    {section.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}


export const Uses = () => {
    const heading = "Uses & Applicationss"

    const card = [
        {
            title: 'Timber & Plywood Industry',
            description: [
                "Lightweight, durable, and termite-resistant wood for furniture and panels.",
                "Ideal for doors, windows, and modular woodwork."
              ]
        },
        {
            title: 'Construction & Joinery',
            description: [
                "Used in interior decoration, flooring, and wooden structures.",
                "High demand for wooden frameworks and paneling.",

              ]
        },
        {
            title: 'Paper & Pulp Industry',
            description: [
                "Used in high-quality paper manufacturing.",
                "Raw material for pulp-based industries."
              ]
        },
        {
            title: 'Ayurveda & Traditional Medicine',
            description: [
                "Bark extracts used in herbal medicine for anti-inflammatory properties.",
                "Leaves and roots have applications in natural remedies."
              ]
        },
        {
            title: 'Agroforestry & Sustainable Land Management',
            description: [
                "Prevents soil erosion and improves fertility.",
                "Supports biodiversity in agroforestry systems."
              ]
        },
    ]

    return (
        <>

            <UsesSlider card={card} heading={heading} />

        </>
    )
}

