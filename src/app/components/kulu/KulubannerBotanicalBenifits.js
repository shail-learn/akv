import React from 'react'

import BannerPage from '../BannerPage';
import banner from "../../../assets/images/kulu/banner.webp";
import whychooose from "../../../assets/images/kulu/wavy.svg";
import Image from 'next/image';
import { Iconslider } from '../Iconslider';

export const Kulubanner = () => {
    const text = {
        banner: banner,
        heading: `Kulu (Sterculia urens)`,
        subtitle: "The Resilient Gum-Yielding Tree for Sustainable Agroforestry",
        title: "Kulu (Sterculia urens) is a deciduous tree native to India, known for its high-value gum extraction. It thrives in dry deciduous forests and rocky terrains, making it a resilient species with multiple commercial and ecological benefits. ",
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


export const Botanical = () => {
    const heading = "Botanical Profile of Kulu (Sterculia urens)";
    const cardData = [
        {
            title: " Medicinal Properties",
            description: "Used in traditional medicine for various health benefits.",
        },
        {
            title: " Premium-Quality Timber",
            description: "Highly valued for furniture, veneer, and construction.",
        },
        {
            title: " Fast Growth",
            description: "Matures within 10-15 years, providing substantial yields.",
        },
        {
            title: "Medicinal Properties",
            description: " Used in traditional medicine for various health benefits.",
        },
        {
            title: "High Economic Returns",
            description:
                "Profitable due to its valuable timber and diverse applications.",
        },
    ];



    return (
        <>
            <div className="relative w-full md:-mt-28 z-10">
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


export const Benifits = () => {
    return (
        <div>Benifits</div>
    )
}
