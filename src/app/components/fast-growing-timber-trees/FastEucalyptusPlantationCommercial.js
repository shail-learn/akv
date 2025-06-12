import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/fast/banner.webp";

import product1 from "../../../assets/images/fast/product1.webp";
import product2 from "../../../assets/images/fast/product2.webp";
import product3 from "../../../assets/images/fast/product3.webp";
import Image from 'next/image';
import { Gridbox } from '../Gridbox';
import why1 from "../../../assets/images/fast/growth1.webp";
import why2 from "../../../assets/images/fast/growth2.webp";
import why3 from "../../../assets/images/fast/growth3.webp";
import why4 from "../../../assets/images/fast/growth4.webp";
import why5 from "../../../assets/images/fast/growth5.webp";
import { Iconslider } from '../Iconslider';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';

import image1 from "../../../assets/images/fast/img1.webp";
import image2 from "../../../assets/images/fast/img2.webp";
import image3 from "../../../assets/images/fast/img3.webp";
import image4 from "../../../assets/images/fast/img4.webp";

export const Fast = () => {
    const text = {
        banner: banner,
        heading: `Fast-Growing Timber Trees <br/>
        (Commercially Valuable)`,

        title: 'Timber trees that grow quickly are in high demand for commercial forestry and agroforestry projects. These trees provide high-quality wood in a shorter rotation cycle, making them ideal for sustainable harvesting and replanting. At Atulye Krishi Vana, we specialize in cultivating fast-growing timber species that offer economic benefits while maintaining environmental sustainability.',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>


    )
}



export const Eucalyptus = () => {
    const timberData = [
        {
            title: "Khamer ",
            subtitle: "(Gamhar)",
            image: product1,
            scientific: "A light, durable hardwood that matures rapidly and is ideal for furniture and plywood.",
        },
        {
            title: "Eucalyptus ",
            subtitle: "(Eucalyptus sp.)",
            image: product2,
            scientific: "A fast-growing, durable hardwood with multiple industrial uses.",
        },
        {
            title: "Rain Tree ",
            subtitle: "(Samanea saman)",
            image: product3,
            scientific: "A widely planted species known for its shade, nitrogen-fixing ability, and high-quality wood.",
        },
    ];

    return (
        <>
            <section className="bg-[#1B453C] py-8 md:pb-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {timberData.map((item, index) => (
                        <div key={index} className="bg-[#D9D9D966] rounded-xl p-4 text-center shadow-md">
                            <h2 className="text-xl md:text-2xl font-bold text-white py-0 rounded">{item.title}</h2>
                            <p className="text-base text-white mt-1">{item.subtitle}</p>
                            <div className="mt-3">

                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full md:h-48  rounded shadow-sm"
                                />
                            </div>
                            <p className="text-base font-light text-white mt-3 ">
                                ({item.scientific})
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}


export const Plantation = () => {

    const main_heading = "Eucalyptus (Eucalyptus sp.)"
    const shortinfo = "Eucalyptus is one of the most widely cultivated fast-growing hardwood species globally. Known for its straight trunk, rapid growth, and adaptability, it is a preferred choice for commercial plantations. "

    const heading = "Key Features";
    const custom_class = "!mt-0 plant_p"
    const cardData = [
        {
            title: "Environmental Benefits",
            description: "Absorbs high amounts of CO₂, improving air quality.",
        },
        {
            title: "Growth Rate",
            description: "Reaches harvestable size in 8-12 years.",
        },
        {
            title: "Wood Quality",
            description: "Hard, dense, and suitable for construction, paper, and biomass energy.",
        },
        {
            title: "Growth Rate",
            description: "Reaches harvestable size in 8-12 years.",
        },


    ];

    const whyChooseData = [
        {
            image: why1,
            title: 'Climate ',
            description: 'Thrives in warm, temperate, and tropical climates.',
        },
        {
            image: why2,
            title: 'Soil',
            description: 'Prefers well-drained sandy loam; tolerates degraded lands.',
        },
        {
            image: why3,
            title: 'Spacing',
            description: '3m x 3m for timber plantations; closer spacing for pulpwood.',
        },
        {
            image: why4,
            title: 'Irrigation',
            description: 'Moderate water needs; drought-tolerant once established.',
        },
        {
            image: why5,
            title: 'Maintenance ',
            description: ' Requires pruning to maintain a straight trunk.',
        },
    ];

    return (
        <>
            <section className="py-10 md:pt-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
                <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
                    <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
                        {main_heading}
                    </h2>
                    <p className="mt-0 md:mt-4 text-white">{shortinfo}</p>
                </div>
            </section>

            <Iconslider
                card={cardData}
                heading={heading}
                custom_class={custom_class}
            />


            <Gridbox heading="Plantation & Growth Requirements" data={whyChooseData} />

        </>
    )
}



export const Commercial = () => {
    const custom_class1 = "growth_padding"
    const GrowthHeading = "Commercial Uses";
    const slides = [
      {

        image: image1,
        title: "Timber & Plywood -",
        desc: "Used for furniture, doors, and flooring.",

      },
      {

        image: image2,
        title: "Pulp & Paper Industry – ",
        desc: "One of the primary sources of raw material.",
      },
      {

        image: image3,
        title: "Essential Oils -",
        desc: "Extracted for medicinal and cosmetic purposes.",
      },

      {

        image: image4,
        title: "Biomass & Fuelwood -",
        desc: "Used in renewable energy production.",
      },


    ];
    return (
        <>
        <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        className={custom_class1}
      />

        </>
    )
}
