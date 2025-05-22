import React from 'react'
import banner from "../../../assets/images/red/banner.webp";
import whychooose from "../../../assets/images/kulu/wavy.svg";
import Link from 'next/link';
import BannerPage from '../BannerPage';
import Image from 'next/image';
import { Iconslider } from '../Iconslider';
import { Contentslider } from '../Contentslider';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import slider1 from "../../../assets/images/red/slider1.webp";
import slider2 from "../../../assets/images/red/slider2.webp";
import slider3 from "../../../assets/images/red/slider3.webp";
import slider4 from "../../../assets/images/red/slider4.webp";
import slider5 from "../../../assets/images/red/slider5.webp";
import slider6 from "../../../assets/images/red/slider6.webp";
import slider7 from "../../../assets/images/red/slider7.webp";
import slider8 from "../../../assets/images/red/slider8.webp";
import slider9 from "../../../assets/images/red/slider9.webp";
import slider10 from "../../../assets/images/red/slider10.webp";
import slider11 from "../../../assets/images/red/slider11.webp";
import slider12 from "../../../assets/images/red/slider12.webp";



export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Red Sandalwood `,
        title: "At Atulye Krishi Vana, agroforestry isn't just farming; it's a commitment to nurturing biodiversity, empowering communities, and sustaining the planet.",
        subtitle: "Red Sandalwood The Precious Timber for Agroforestry & Ayurveda",
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />

        </>

    )
}



export const Choose = () => {
    const heading = "Why Choose Red Sandalwood?";
    const cardData = [
        {
            title: "High-Value Timber",
            description: "Prized for its distinctive red wood, used in furniture, carvings, and luxury products.",
        },
        {
            title: "Medicinal & Cosmetic Uses",
            description: "Widely used in Ayurvedic treatments, skincare, and herbal formulations.",
        },
        {
            title: "Long-Term Investment",
            description: "Matures within 25-30 years, offering exceptional returns.",
        },
        {
            title: "Sustainable Agroforestry",
            description: "Aids in soil conservation and ecological balance.",
        },
        {
            title: "Legal Export Market",
            description: "High demand in India, China, Japan, and Middle Eastern countries.",
        },

    ];



    return (
        <>
            <div className="relative w-full md:-mt-28 z-10 devided-line">
                <Image
                    src={whychooose}
                    alt="Divider"
                    width={1920}
                    height={700}
                    className="w-full object-cover h-full"
                />
            </div>

            <Iconslider
                card={cardData}
                heading={heading}
            />


        </>
    );
}


export const Growth = () => {
    const speciesData = [
        {
            name: "Climate Requirements",
            info: "Red Sandalwood is well-adapted to arid and semi-arid regions with moderate rainfall.",
            points: [
                'Maximum Temperature: 45°C',
                'Minimum Temperature:10°C',
                'Annual Rainfall Requirement: 800 mm to 1600 mm',
            ],
            info2: "Red Sandalwood prefers dry, tropical climates but can withstand moderate rainfall. Once established, it exhibits excellent drought tolerance."
        },
        {
            name: "Soil Preferences",
            info: "Red Sandalwood grows best in well-drained soils and can adapt to poor soil conditions.",
            points: [
                'Best Suited Soil: Red, lateritic, loamy, and well-drained sandy soils',
                'Soil Depth: Deep-rooted, requires a minimum of 1.5m soil depth',
                'Soil Drainage: Essential to prevent root rot',
                'pH Range: 6.5 - 7.5 (neutral to slightly acidic)'

            ],
            info2: "Due to its resilience, Red Sandalwood is a preferred species for afforestation and soil rehabilitation."
        },


    ];

    return (
        <>

            <Contentslider
                title="Growth Conditions of Red Sandalwood"
                speciesData={speciesData}
            />
        </>
    );
}



export const Cultivation = () => {
    const GrowthHeading = "Cultivation & Growth Characteristics";
    const GrowthDescription = "Red Sandalwood possesses unique growth traits suitable for commercial cultivation."
    const slides = [
        {
            group: "Silvicultural Characteristics",
            image: slider1,
            title: "Moderate Growth Rate",
            desc: "Reaches a height of 6-8 meters in 10 years.",

        },
        {
            group: "Silvicultural Characteristics",
            image: slider2,
            title: "Low Water Requirement",
            desc: "Thrives with minimal irrigation.",
        },
        {
            group: "Silvicultural Characteristics",
            image: slider3,
            title: "Pest & Disease Resistance",
            desc: "Naturally resistant to most pests and fungal infections.",
        },
        {
            group: "Silvicultural Characteristics",
            image: slider4,
            title: "Drought Tolerance",
            desc: "Ideal for dryland farming.",
        },
        {
            group: "Silvicultural Characteristics",
            image: slider5,
            title: "Longevity",
            desc: "Trees remain productive for over 50 years.",
        },
        {
            group: "Nursery Practices",
            image: slider6,
            title: "Seed Propagation",
            desc: "Propagated through seeds and tissue culture techniques.",
        },
        {
            group: "Nursery Practices",
            image: slider7,
            title: "Germination Process",
            desc: "Takes 4-6 weeks for optimal growth.",
        },
        {
            group: "Nursery Practices",
            image: slider8,
            title: "Shading & Watering",
            desc: "Requires partial shade and regular watering in early growth stages.",
        },
        {
            group: "Nursery Practices",
            image: slider9,
            title: "Transplantation",
            desc: "Ideal when saplings reach 30-50 cm in height.",
        },
        {
            group: "Planting & Spacing",
            image: slider10,
            title: "Pit Size",
            desc: "60 cm x 60 cm x 60 cm for deep-root establishment.",
        },
        {
            group: "Planting & Spacing",
            image: slider11,
            title: "Ideal Spacing",
            desc: "5m x 5m for proper growth and timber quality.",
        },
        {
            group: "Planting & Spacing",
            image: slider12,
            title: "Intercropping Compatibility",
            desc: "Can be intercropped with medicinal plants and pulses.",
        },

    ];
    return (
        <>
            <GrowthSlider
                GrowthHeading={GrowthHeading}
                GrowthDescription={GrowthDescription}
                slides={slides}
            />


        </>
    );
}
