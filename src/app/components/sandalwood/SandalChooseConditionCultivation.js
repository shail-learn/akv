import React from 'react'
import banner from "../../../assets/images/sandalwood/banner.webp";
import Link from 'next/link';
import BannerPage from '../BannerPage';
import Image from 'next/image';
import { Wave } from '../Wave';
import { Iconslider } from '../Iconslider';
import { Contentslider } from '../Contentslider';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';

import image1 from "../../../assets/images/sandalwood/img1.webp";
import image2 from "../../../assets/images/sandalwood/img2.webp";
import image3 from "../../../assets/images/sandalwood/img3.webp";
import image4 from "../../../assets/images/sandalwood/img4.webp";
import image5 from "../../../assets/images/sandalwood/img5.webp";
import image6 from "../../../assets/images/sandalwood/img6.webp";
import image7 from "../../../assets/images/sandalwood/img7.webp";
import image8 from "../../../assets/images/sandalwood/img8.webp";
import image9 from "../../../assets/images/sandalwood/img9.webp";
import image10 from "../../../assets/images/sandalwood/img10.webp";
import image11 from "../../../assets/images/sandalwood/img11.webp";

import why1 from "../../../assets/images/sandalwood/why1.webp";
import why2 from "../../../assets/images/sandalwood/why2.webp";
import why3 from "../../../assets/images/sandalwood/why3.webp";
import why4 from "../../../assets/images/sandalwood/why4.webp";
import why5 from "../../../assets/images/sandalwood/why5.webp";

export const Sandal = () => {
    const text = {
        banner: banner,
        heading: `Sandalwood (Santalum album)`,
        subtitle: "The Gold Standard of Aromatic Timber",
        title: 'Sandalwood, scientifically known as Santalum album, is a highly valued tree native to India, prized for its fragrant heartwood and essential oil. Known as "liquid gold" in the perfume and cosmetics industry, sandalwood has been an integral part of traditional medicine, spiritual rituals, and fine craftsmanship for centuries.',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>

    )
}



export const Choose = () => {
    const heading = "Why Choose Sandalwood?";
    const custom_class = "original_img padding_argust desktop-p-0 pt-10"
    const cardData = [
        {
            title: "Long-Lasting Value",
            description: "Strengthens with age, increasing in value over time.",
            icon:why1
        },
        {
            title: "High-Value Essential Oil",
            description: "Used in perfumes, cosmetics, and aromatherapy.",
            icon:why2

        },
        {
            title: "Premium Aromatic Timber",
            description: "Prized for its fragrance and durability.",
            icon:why3

        },
        {
            title: "Versatile Applications",
            description: "Used in medicine, religious rituals, and luxury products.",
            icon:why4

        },
        {
            title: "Sustainable Growth Potential",
            description: "Can be cultivated with proper management for long-term supply.",
            icon:why5

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


export const Condition = () => {
    const speciesData = [
        {
            name: "Climate Requirements",
            info: "Sandalwood thrives in tropical and subtropical climates with moderate temperatures and well-distributed rainfall.",
            points: [
                'Maximum Temperature: 35°C to 45°C',
                'Minimum Temperature: 5°C to 12°C',
                'Annual Rainfall Requirement: 600 mm to 1600 mm',
            ],

        },
        {
            name: "Soil Preferences ",
            info: "Sandalwood can grow in various soil types, but deep, well-drained soils provide the best conditions for healthy growth.",
            points: [
                'Best Suited Soil: Red loamy, sandy, or gravelly soils with good drainage.',
                'Soil Depth: Requires deep soil for proper root establishment.',
                'Soil Drainage: Essential for preventing root rot.',
                'pH Range: Thrives in neutral to slightly alkaline soils (pH 6.5-7.5).'

            ],
            info2: "This adaptability makes sandalwood a highly valuable species for various agroforestry conditions."
        },


    ];

    return (
        <>
            <Contentslider
                title="Growth Conditions of Sandalwood"
                speciesData={speciesData}
            />
        </>
    );
}



export const Cultivation = () => {
    const GrowthHeading = "Cultivation & Growth Characteristics";
    const GrowthDescription = "Sandalwood exhibits unique growth traits that enhance its commercial and ecological value:"
    const slides = [
        {
            group: "Silvicultural Characteristics",
            image: image1,
            title: "Semi-Parasitic Nature –",
            desc: " Requires a host plant for optimal nutrient absorption.",

        },
        {
            group: "Silvicultural Characteristics",
            image: image2,
            title: "Moderate Light Demander –",
            desc: "Prefers full sunlight for vigorous growth.",
        },
        {
            group: "Silvicultural Characteristics",
            image: image3,
            title: "Drought Tolerance –",
            desc: "Can withstand dry conditions but requires water in the early stages.",
        },
        {
            group: "Silvicultural Characteristics",
            image: image4,
            title: "Growth Rate -",
            desc: "Slow-growing but yields premium-quality heartwood.",
        },
        {
            group: "Nursery Practices",
            image: image5,
            title: "Seed Collection Period -",
            desc: "June – July.",
        },
        {
            group: "Nursery Practices",
            image: image6,
            title: "Seed Characteristics -",
            desc: "Small, black seeds requiring pre-treatment for better germination.",
        },
        {
            group: "Nursery Practices",
            image: image7,
            title: "Germination Process -",
            desc: "Seeds are sown in polybags with host plants like pigeon pea or castor.",
        },
        {
            group: "Nursery Practices",
            image: image8,
            title: "Shading & Watering -",
            desc: "Regular watering and weed management are crucial for healthy seedlings.",
        },
        {
            group: "Nursery Practices",
            image: image9,
            title: "Transplantation -",
            desc: "When seedlings reach 25-30 cm, they are transplanted into the field.",
        },
        {
            group: "Planting & Spacing",
            image: image10,
            title: "Pit Size -",
            desc: "45 cm x 45 cm x 45 cm pits for strong root development.",
        },
        {
            group: "Planting & Spacing",
            image: image11,
            title: "Ideal Spacing -",
            desc: "3 m x 3 m to allow optimal growth and nutrient access.",
        },



    ];

    return (
        <>
            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
                GrowthDescription={GrowthDescription}
            />


        </>
    )
}
