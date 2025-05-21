import React from 'react'
import BannerPage from '../BannerPage'
import { Wave } from '../Wave'
import { Iconslider } from '../Iconslider'
import banner from "../../../assets/images/melia/banner.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import image1 from "../../../assets/images/melia/img1.webp";
import image2 from "../../../assets/images/melia/img2.webp";
import image3 from "../../../assets/images/melia/img3.webp";
import image4 from "../../../assets/images/melia/img4.webp";

export const Melia = () => {
    const text = {
        banner: banner,
        heading: `Melia Dubia – The Fast-Growing Green Gold of Agroforestry`,
        title: "Melia Dubia, commonly known as Malabar Neem, is a fast-growing, high-yield timber tree widely cultivated for its economic and environmental benefits. This deciduous tree, native to the Indian subcontinent, has gained popularity among farmers and agroforestry investors.",
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />


        </>

    )
}


export const Choose = () => {
    const heading = "Why Choose Melia Dubia?";
    const custom_class = "original_img padding_argust desktop-p-0"
    const cardData = [
        {
            title: "Low Maintenance",
            description: "Requires minimal care and water compared to traditional hardwoods.",
        },
        {
            title: "Fast Growth Rate",
            description: "Matures within 6-8 years, making it a quick-yielding investment.",
        },
        {
            title: "High-Demand Timber",
            description: "Used in plywood, furniture, and biomass industries.",
        },
        {
            title: "Eco-Friendly Cultivation",
            description: "Absorbs high amounts of CO₂ and promotes afforestation.",
        },
        {
            title: "High Economic Returns",
            description: "Provides an excellent revenue stream for farmers and investors.",
        },

    ];



    return (
        <>

            <Iconslider
                card={cardData}
                heading={heading}
                custom_class={custom_class}
            />


        </>
    );
}



export const Growth = () => {
    const heading = "Growth Conditions of Melia Dubia";
    const items = {
        points: [
            {
                title: "Maximum Temperature: 45°C  ",

            },
            {
                title: "Annual Rainfall Requirement: 600 mm – 2000 mm",

            },
            {
                title: " Minimum Temperature: 5°C",

            },
        ],
    };

    return (
        <section className="relative z-20 bg-[#1b453c] text-white pb-4 md:pb-10">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-medium text-center pt-12 pb-4 md:pt-14">
                    {heading}
                </h2>
                <p className="text-base leading-relaxed mb-10 md:mb-16 text-center">Climate Requirements</p>
                <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 text-center md:text-left mt-10">
                    {items.points.map((point, idx) => (
                        <div
                            key={idx}
                            className={`flex-1 text-center relative px-4 md:px-6 ${idx !== 0 ? "border-t pt-6 md:pt-0 md:border-t-0  md:border-l md:border-gray-400" : ""
                                }`}
                        >
                            <h3 className="text-lg font-medium mb-2">{point.title}</h3>
                            <p className="text-sm leading-relaxed">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-[#1B453C] pt-8 md:pt-14'>
                <div className='max-w-5xl mx-auto px-4 text-center text-white text-base'>
                    <p>It adapts well to both tropical and subtropical regions, making it suitable for large-scale plantations across India and Southeast Asia.


                    </p>
                </div>
            </div>
        </section>
    );
}


export const Soil = () => {
    const GrowthHeading = "Soil Preferences";
    const slides = [
        {
            image: image1,
            title: "Best Suited Soil",
            desc: "Red loamy, sandy, or black cotton soil with good drainage.",

        },
        {
            image: image2,
            title: "Soil Depth:",
            desc: "Prefers deep soil for strong root growth.",
        },
        {
            image: image3,
            title: "Soil Drainage:",
            desc: " Requires well-drained soil to prevent root rot.",
        },
        {
            image: image4,
            title: "pH Range:",
            desc: "5.5 - 7.5 (slightly acidic to neutral conditions are ideal). Due to its adaptable nature, Melia Dubia can be cultivated in various agro-climatic regions with proper soil and water management.",
        },


    ];

    return (
        <>
            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
            />


        </>
    )
}
