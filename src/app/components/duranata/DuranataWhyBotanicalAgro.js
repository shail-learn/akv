import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/hedge/banner.webp";
import { Iconslider } from '../Iconslider';
import { BlurSliderTitleImage } from '../BlurSliderTitleImage';
import product1 from "../../../assets/images/fast/product1.webp";
import product2 from "../../../assets/images/fast/product2.webp";
import product3 from "../../../assets/images/fast/product3.webp";

import { Gridbox } from '../Gridbox';
import key1 from "../../../assets/images/digestive/key1.webp";
import key2 from "../../../assets/images/digestive/key2.webp";
import key3 from "../../../assets/images/digestive/key3.webp";
import key4 from "../../../assets/images/digestive/key4.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import image1 from "../../../assets/images/digestive/image1.webp";

export const Duranata = () => {
    const text = {
        banner: banner,
        heading: `Duranta Hedge (Duranta repens)`,
        subtitle: "A Vibrant Guardian for India’s Living Fences",
        title: 'Duranta repens, also known as Golden Dewdrop or Sky Flower, is an evergreen ornamental shrub renowned for its vibrant foliage, delicate lavender-blue flowers, and golden berries. But beyond its visual appeal, it serves as a highly functional hedge plant—ideal for natural fencing, biodiversity support, and soil protection',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}



export const Why = () => {
    const heading = "Why Choose Duranta as a Hedge Plant?";
    const custom_class = "original_img padding_argust desktop-p-0";
    const cardData = [
        {
            title: "Low Maintenance and Fast Growth",
            description:
                "Duranta is a fast-growing shrub that can reach up to 2–3 meters in a short time under proper care.",
        },
        {
            title: "Natural Boundary with Beauty",

            description:
                "Duranta forms thick, dense hedges that serve as both a natural barrier and an ornamental feature",
        },
        {
            title: "Security with Sustainability",

            description:
                "The plant’s thorny stems and compact growth habit make it an effective deterrent against trespassing animals and unauthorized entry",
        },
        {
            title: "Support for Pollinators and Birds",
            description:
                "Its lavender-blue flowers attract bees and butterflies, while its berries are consumed by birds. This makes Duranta a valuable part of pollinator corridors and bird-friendly green spaces.",
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



export const Botanical = () => {
    const title = "Botanical Profile"
    const class1 = "h-16"
    const timberData = [
        {
            title: "Common Names",
            subtitle: "Duranta, Golden Dewdrop, Sky Flower",
            image: product1,

        },
        {
            title: "Botanical Name ",
            subtitle: "Duranta erecta or Duranta repens",
            image: product2,
        },
        {
            title: "Family",
            subtitle: "Verbenaceae",
            image: product3,

        },
        {
            title: "Growth Habit",
            subtitle: "Dense, fast-growing shrub or small tree",
            image: product3,
        },
        {
            title: "Flowering",
            subtitle: "Small blue, violet, or lavender flowers, followed by golden berries",
            image: product3,
        },
        {
            title: "Lifespan",
            subtitle: "Perennial",
            image: product3,
        },
        {
            title: "Thorns",
            subtitle: "Present on some cultivars (especially older woody stems)",
            image: product3,
        },
    ];
    return (
        <>
            <BlurSliderTitleImage data={timberData} title={title} height={class1} />

        </>
    )
}


export const Agro = () => {



    const gridBox = "xl:!grid-cols-4 custom_height12"
    const whyChooseData = [

        {
            image: key1,
            title: 'Natural Fencing',
            description: "Duranta’s dense and thorny structure forms a near-impenetrable hedge that is ideal for replacing barbed wire in rural farms. It marks property boundaries while deterring stray cattle and trespassers."

        },
        {
            image: key2,
            title: 'Ornamental Borders',
            description: "Its attractive foliage and blooms are ideal for residential boundaries, institutional campuses, urban parks, and gardens. The plant creates a neat, manicured look with basic trimming.        "
        },
        {
            image: key3,
            title: 'Municipal Beautification',
            description: "Duranta is used in avenue medians, public green belts, and housing societies due to its ability to create uniform, low-maintenance hedges"

        },
        {
            image: key4,
            title: 'Pollinator Corridors',
            description: "When grown as part of mixed landscaping, Duranta contributes to habitat corridors for pollinators, especially in degraded urban ecosystems."

        },

    ];

    const GrowthHeading = "Agro-climatic Suitability";
    const GrowthDescription ="Duranta is extremely adaptable to various Indian agro-climatic zones. It thrives in:    "
    const slides = [
        {

            image: image1,
            title:"Tropical and Subtropical Climates:",
            desc: `Performs best in warm to hot regions`,

        },

    ];

    return (
        <>


            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
                GrowthDescription={GrowthDescription}
            />

            <Gridbox heading="Landscaping & Functional Applications" data={whyChooseData} gridBox={gridBox} />



        </>
    )
}
