import React from 'react'
import banner from "../../../assets/images/rosewood/banner.webp";
import Link from 'next/link';
import BannerPage from '../BannerPage';
import Image from 'next/image';
import { Wave } from '../Wave';
import { Iconslider } from '../Iconslider';
import { Contentslider } from '../Contentslider';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import image1 from "../../../assets/images/rosewood/img1.webp";
import image2 from "../../../assets/images/rosewood/img2.webp";
import image3 from "../../../assets/images/rosewood/img3.webp";
import image4 from "../../../assets/images/rosewood/img4.webp";
import image5 from "../../../assets/images/rosewood/img5.webp";
import image6 from "../../../assets/images/rosewood/img6.webp";
import image7 from "../../../assets/images/rosewood/img7.webp";
import image8 from "../../../assets/images/rosewood/img8.webp";
import image9 from "../../../assets/images/rosewood/img9.webp";
import image10 from "../../../assets/images/rosewood/img10.webp";
import image11 from "../../../assets/images/rosewood/img11.webp";
import image12 from "../../../assets/images/rosewood/img12.webp";


export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Rosewood (Dalbergia latifolia) – A Premium Hardwood for Timeless Craftsmanship`,
        title: 'Rosewood, scientifically known as Dalbergia latifolia, is a high-quality timber species indigenous to India. It is prized for its luxurious deep brown color, exceptional durability, and rich grain texture, making it one of the most sought-after woods in furniture, décor, and musical instrument manufacturing. Found across the sub-Himalayan tract from eastern Uttar Pradesh to Sikkim, as well as in central, western, and southern India, rosewood has been a cornerstone of fine woodworking for centuries.        ',
        opacity: 'opacity-20'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>

    )
}


export const Rosewood = () => {
    const heading = "Why Choose Rosewood?";
    const custom_class = "original_img padding_argust desktop-p-0 pt-10"
    const cardData = [
        {
            title: "Superior Durability",
            description: "Hard, close-grained wood resistant to decay and insects.",
        },
        {
            title: "Elegant Appearance",
            description: "Rich dark brown or purple-black streaked texture.",
        },
        {
            title: "Long-Lasting Value",
            description: "Strengthens over time, making it ideal for heirloom furniture.",
        },
        {
            title: "Versatile Applications",
            description: "Used in furniture, carvings, musical instruments, and luxury interiors.",
        },
        {
            title: "Sustainable Growth Potential",
            description: "Can be cultivated with proper management for long-term supply.",
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
    const speciesData = [
        {
            name: "Climate Requirements",
            info: "Rosewood is well-suited to tropical and subtropical climates and thrives in a wide range of temperatures.",
            points: [
                'Maximum Temperature: 38°C to 50°C',
                'Minimum Temperature: 0°C to 15°C',
                'Annual Rainfall Requirement: 750 mm to 5000 mm',
            ],

        },
        {
            name: "Soil Preferences ",
            info: "Rosewood can grow in a variety of soil types and geological formations but achieves the best growth in deep, well-drained moist soils. Key soil considerations include:",
            points: [
                'Best Suited Soil: Loamy and well-drained soils.',
                'Soil Depth: Prefers deep soil for strong root establishment.',
                'Soil Drainage: Good drainage is crucial to prevent root diseases.',
                ' pH Range: Thrives in slightly acidic to neutral soil conditions.'

            ],
            info2: "This adaptability makes rosewood a highly valuable species for different forestry conditions."
        },


    ];

    return (
        <>
            <Contentslider
                title="Growth Conditions of Rosewood"
                speciesData={speciesData}
            />

        </>
    );
}



export const Cultivation = () => {
    const GrowthHeading = "Cultivation & Growth Characteristics";
    const GrowthDescription = "Rosewood exhibits unique silvicultural traits that make it a versatile and valuable species:"
    const slides = [
        {
            group: "Silvicultural Characteristics",
            image: image1,
            title: "Moderate Light Demander ",
            desc: "Tolerates shade in early stages but grows best in full sunlight.",

        },
        {
            group: "Silvicultural Characteristics",
            image: image2,
            title: "Frost Sensitivity -",
            desc: "Less tolerant of extreme frost compared to teak but can survive mild cold.",
        },
        {
            group: "Silvicultural Characteristics",
            image: image3,
            title: "Coppicing Ability –",
            desc: "Regenerates well through root suckers and coppice shoots.",
        },
        {
            group: "Silvicultural Characteristics",
            image: image4,
            title: "Drought Resistance -",
            desc: "Requires careful watering in the initial stages but becomes highly resistant in later years.",
        },
        {
            group: "Silvicultural Characteristics",
            image: image5,
            title: "Growth Rate -",
            desc: "Slow-growing but produces dense and high-quality timber.",
        },
        {
            group: "Nursery Practices",
            image: image6,
            title: "Seed Collection Period -",
            desc: "February – March.",
        },
        {
            group: "Nursery Practices",
            image: image7,
            title: "Seed Characteristics -",
            desc: "Weighs between 18 to 40 seeds per gram.",
        },
        {
            group: "Nursery Practices",
            image: image8,
            title: "Germination Process -",
            desc: "Seeds are sown in March in nursery beds under shade.",
        },
        {
            group: "Nursery Practices",
            image: image9,
            title: "Shading & Watering -",
            desc: "Regular watering and weed management are crucial for healthy seedlings.",
        },
        {
            group: "Nursery Practices",
            image: image10,
            title: "Transplantation -",
            desc: "When seedlings reach 5-8 cm, they are either pricked out into polybags or directly planted in pre-dug pits.",
        },
        {
            group: "Planting & Spacing",
            image: image11,
            title: "Pit Size -",
            desc: "1.2 m² or 1.8 m² pits for healthy root development.",
        },
        {
            group: "Planting & Spacing",
            image: image12,
            title: "Ideal Spacing -",
            desc: "1.8 m x 1.8 m or 2 m x 2 m to allow optimal growth and airflow.",
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
