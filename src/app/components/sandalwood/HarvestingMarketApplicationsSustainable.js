import React from 'react'
import img1 from "../../../assets/images/sandalwood/yield1.webp";
import img2 from "../../../assets/images/sandalwood/yield2.webp";
import img3 from "../../../assets/images/sandalwood/yield3.webp";
import img4 from "../../../assets/images/red/icon4.png";
import img5 from "../../../assets/images/red/icon5.png";
import { HarvestingLayout, UseSecLayout } from '../utilities/UsesStanadarLayout';
import img01 from "../../../assets/images/sandalwood/market.webp";
import Image from 'next/image';
import { FaqSlider } from '../FaqSlider';


export const Harvesting = () => {
    const Harvestingheading = "Harvesting & Yield of Red Sandalwood Trees";
    const Harvestingtext =
        "Red Sandalwood is a long-rotation timber species offering significant economic value.";

    const objectives = [
        {
            id: "01",
            title: "Harvesting Age:",
            description:
                "15-20 years for optimal heartwood yield.",
            image: img1,
        },
        {
            id: "02",
            title: "Annual Yield",
            description: " 15-20 kg of heartwood per mature tree.",
            image: img2,
        },
        {
            id: "03",
            title: "Growth Rate ",
            description: "Moderate but steady, with high-quality essential oil concentration over time.",
            image: img3,
        },

    ];
    return (
        <>
            <HarvestingLayout
                Harvestingheading={Harvestingheading}
                Harvestingtext={Harvestingtext}
                objectives={objectives}
            />


        </>
    );
}



export const Market = () => {
    const marketData = {
        imageSrc: img01,
        title: "Market Demand & Pricing",
        steptitle: "Global Demand for Karaya Gum",
        steps: [
            {
                title: "Market Demand",
                description: `Sandalwood enjoys high global demand in multiple industries: <br/>
                Perfume & Cosmetics – Used in high-end perfumes, skin care, and beauty products.<br/>
                Traditional Medicine – Widely used in Ayurveda and natural therapies. <br/>
                Spiritual & Religious Use – Essential for rituals, incense, and temple carvings.Luxury Handicrafts – Carved into decorative artifacts and sculptures.<br/>
                Export Market – Highly valued in Europe, the USA, and the Middle East. <br/>

                 `
            },

            {
                title: "Market Supply",
                description: `Due to overharvesting, natural sandalwood supply is limited. <br/>
                Sustainable plantation-based forestry is growing to meet demand.`
            }
        ]
    };
    return (
        <>
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
                    <div className="flex flex-col lg:flex-row justify-between   gap-12 lg:gap-16">
                        <div className="md:w-1/2 w-full">
                            <div className="relative">

                                <Image
                                    src={marketData.imageSrc}
                                    alt="Market Demand"
                                    width={600}
                                    height={400}
                                    className="rounded-[20px]"
                                    style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                                />

                                <div className="absolute inset-0 -z-10 h-[106%] w-[96%] md:w-full translate-x-6 -translate-y-3 md:-translate-y-4 bg-white border border-gray-400 rounded-[20px] shadow-md"></div>
                            </div>
                        </div>

                        <div className={`md:w-6/12 w-12/12`}>
                            <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-[#1B453C]">
                                {marketData.title}
                            </h2>


                            <div className="list-none mt-8 text-black mb-4">
                                {marketData.steps.map((item, index) => (
                                    <div key={index} className="mb-4">
                                        <h3 className="text-[15px] md:text-[16px] font-semibold text-black">
                                            {item.title}
                                        </h3>
                                        <p className="text-[14px] md:text-[15px] font-normal text-black" dangerouslySetInnerHTML={{ __html: item.description }}>

                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}


export const Applications = () => {
    const usesApplicationsData = {
        heading: "Uses & Applications",
        columns: [
            {
                subheading: "Essential Oil & Perfumery",
                points: [
                    "Extracted for luxury perfumes and skin care products.",
                    "Used in aromatherapy for its calming effects.",
                ],
            },
            {
                subheading: "Traditional Medicine & Ayurveda",
                points: [
                    "Used for skin treatments, stress relief, and anti-inflammatory benefits.",
                ],
            },
            {
                subheading: "Religious & Spiritual Uses",
                points: [
                    "Used in temples, incense, and rituals for its sacred fragrance.",
                ],
            },
            {
                subheading: "Luxury Handicrafts & Carvings",
                points: [
                    "Valued for crafting religious idols, sculptures, and decorative items.",
                ],
            },

        ],
    };
    return (
        <>
            <UseSecLayout usesApplicationsData={usesApplicationsData} />


        </>
    );
}


export const Sustainable = () => {
    const heading = "Sustainable Sandalwood Cultivation with Atulye Krishi Vana"
    const title1 =
        "Atulye Krishi Vana promotes sustainable sandalwood plantations through:";

    const className = "center_faq slider_height"
    const card = [
        {
            title: 'Scientific Farming Techniques ',
            description: 'High-yield saplings and efficient cultivation methods.',

        },
        {
            title: 'Eco-Friendly Forestry ',
            description: 'Reducing deforestation and illegal trade.',

        },
        {
            title: 'Farmer Support & Training',
            description: 'Helping farmers grow sandalwood for long-term income.',
        },
        {
            title: 'Eco-Friendly Forestry ',
            description: 'Reducing deforestation and illegal trade.',

        },
    ]

    return (
        <>

            <FaqSlider card={card} heading={heading}   title1={title1} classname={className} />

        </>
    )
}
