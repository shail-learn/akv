import React from 'react'
import Image from "next/image";
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/papaya/banner.webp";

import papaya1 from "../../../assets/images/papaya/papaya1.webp";
import papaya2 from "../../../assets/images/papaya/papaya2.webp";
import image2 from "../../../assets/images/papaya/soil-papaya.webp";
import { IoMdCheckmarkCircle } from "react-icons/io";





export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Premium Papaya Cultivation <br/> with Atulye Krishi Vana`,
        title: "At Atulye Krishi Vana, we bring innovation and sustainability together to help farmers achieve success in papaya cultivation. Our scientific methods combined with traditional agricultural wisdom ensure high yields, disease-resistant crops, and economic prosperity for farmers. Whether you are growing papaya for fresh consumption or industrial use like papain extraction, our guidance and support will help you maximize productivity. ",
        opacity: "opacity-50"
    };
    return (
        <>
            <BannerPage
                heading={text.heading}
                title={text.title}
                opacity={text.opacity}
                banner={text.banner}
                classname={text.className}

            />

        </>
    )
}



export const Varieties = () => {
    const papayaData = {
        "title": "Top Papaya Varieties for Commercial Cultivation",
        "sections": [
            {
                "heading": "Gynodioecious (Bisexual + Female) Table Varieties",
                "description": "The main papaya varieties that cater to different farming needs:",
                "items": [
                    "CO 3 – Ideal for table consumption with excellent sweetness.",
                    "CO 7 – High-yielding and widely grown for fresh fruit sales.",
                    "Surya – Produces high-quality, uniformly shaped fruits with an appealing aroma."
                ],
                "image": papaya1
            },
            {
                "heading": "Dual-Purpose Varieties (Table & Papain Production)",
                "items": [
                    "CO 2 – A versatile variety used for both direct consumption and papain extraction.",
                    "CO 5 – Produces large fruits with high papain yield, making it perfect for industrial use.",
                    "CO 6 – Offers a balance of quality fruit and excellent papain production potential."
                ],
                "image": papaya2
            }
        ]
    }
    return (
        <>
            <div className=' pt-14 pb-16 lg:pt-16 lg:pb-20 bg-[#DB936933] '>
                <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#1B453C] mb-12">
                        {papayaData.title}
                    </h2>

                    <div className="space-y-6">
                        {papayaData.sections.map((section, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-between md:flex-row items-center gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Block */}
                                <div className="w-full md:w-2/3 space-y-1 text-black">
                                    {section.description && (
                                        <p className="text-base">{section.description}</p>
                                    )}
                                    <h3 className="font-semibold text-base">{section.heading}</h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        {section.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Image Block */}
                                <div className="w-full md:w-1/3 relative  ">
                                    <Image
                                        src={section.image}
                                        alt={section.heading}
                                        className='w-full h-auto'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}


export const Soil = () => {
    const soilClimateData = {
        "title": "Ideal Soil & Climate for Papaya Farming",
        "description": "Papaya is a tropical crop that thrives in warm climates with temperatures between 35°C and 38°C. It can tolerate mild frost and is suitable for elevations up to 1200 meters above sea level.",
        "image":image2,
        "soilSelectionHeading": "Soil Selection:",
        "soilPoints": [
            "Prefer well drained soils with uniform texture to prevent collar rot disease.",
            "Loose, sandy loam or red loamy soils are ideal for proper root development.",
            "A neutral to slightly acidic soil pH (6.0 – 7.0) is best for maximum nutrient absorption."
        ]
    }
    return (
        <>
            <section className="mx-auto max-w-6xl md:px-6 px-4 py-12 md:py-20">
                <div className="flex flex-col md:flex-row  gap-10 md:gap-20">

                    <div className="w-full md:w-1/2 relative h-full">
                        <Image
                            src={soilClimateData.image}
                            alt="Ideal Soil and Climate"
                            className="w-full h-full rounded-2xl"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl redhat font-semibold text-[#1B453C] mb-6">
                            {soilClimateData.title}
                        </h2>
                        <p className="text-black mb-6">{soilClimateData.description}</p>

                        <h3 className="font-semibold text-lg mb-4 text-[#1F1E17]">{soilClimateData.soilSelectionHeading}</h3>

                        <ul className="space-y-1">
                            {soilClimateData.soilPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-2 text-black text-sm">
                                    <IoMdCheckmarkCircle className="text-[#2D6B5E] mt-1" size={20} />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
