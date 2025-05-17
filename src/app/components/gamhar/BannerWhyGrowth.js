import React from 'react'
import BannerPage from '@/app/components/BannerPage';
import banner from "../../../assets/images/gamhar/banner.webp";
import whyimage from "../../../assets/images/gamhar/why.webp";
import harvestimg from "../../../assets/images/bamboo/harvest.webp";

import Image from 'next/image';

export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Gamhar`,
        title: "Gamhar (Gmelina arborea), a fast-growing deciduous tree, is widely recognized for its high-quality timber, medicinal value, and agroforestry benefits. Native to India, Gamhar has gained prominence in sustainable farming due to its adaptability, rapid growth, and economic potential. It is extensively cultivated for furniture-grade wood, construction, plywood, and medicinal applications.",
        subtitle: `The Versatile Timber Tree of Indian Agroforestry`,
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


export const Why = () => {

    const gamharData = {
        title: "Why Choose Gamhar?",
        image: whyimage,
        points: [
            {
                text: "High-Quality Timber – Sought after for furniture, plywood, and construction.",
                highlight: true,
            },
            {
                text: "Fast Growth – Matures quickly, allowing multiple harvests.",
                highlight: false,
            },
            {
                text: "Sustainable Agroforestry – Improves soil structure and supports biodiversity.",
                highlight: false,
            },
            {
                text: "Medicinal Benefits – Used in Ayurveda for various therapeutic applications",
                highlight: false,
            },
            {
                text: "High Economic Returns – Generates revenue through timber, leaves, and bark extracts.",
                highlight: false,
            },
        ],
    };

    return (
        <>
            <section className=' py-14 lg:py-20'>
                <div className='mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2'>
                    <div className="flex flex-col md:flex-row items-center gap-8 ">

                        <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden">
                            <Image
                                src={gamharData.image}
                                alt="Gamhar Tree"
                                width={540}
                                height={683}
                                className="rounded-xl w-full h-auto object-cover"
                            />

                            {/* <div className="absolute top-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg text-xl font-semibold">
                                {gamharData.title}
                            </div> */}
                        </div>

                        <div className="w-full md:w-1/2 space-y-4 md:space-y-8">
                            {gamharData.points.map((point, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-xl px-6 py-4 md:h-28 flex items-center   text-base bg-[#D9D9D9] hover:bg-[#6D8C54] hover:text-white text-black"
                                >
                                    {point.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}


export const Growth = () => {
    const heading = "Growth Conditions of Gamhar"

    const gamharRequirements = {
        climate: {
            title: "Climate Requirements",
            points: [
                "Maximum Temperature: 45°C",
                "Minimum Temperature: 10°C",
                "Annual Rainfall Requirement: 750 mm - 4500 mm",
            ],
        },
        soil: {
            title: "Soil Preferences",
            points: [
                "Soil Depth: Deep soils facilitate robust root growth.",
                "Soil Drainage: Requires well-drained soil to prevent waterlogging.",
                "pH Range: 5.5 - 7.5 (slightly acidic to neutral conditions are ideal).",
            ],
        },
        note:
            "Due to its hardy nature, Gamhar is suitable for degraded lands and can be integrated into afforestation programs.",
    };
    const { climate, soil, note } = gamharRequirements;
    return (
        <>
            <section className="py-14 lg:py-16 !pt-10">
                <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
                    <div className='w-[95%] md:w-[92%] mx-auto'>
                        <div className="relative rounded-lg">
                            <Image
                                src={harvestimg}
                                alt="Forest Image"
                                className="w-full md:h-full object-cover h-60 rounded-2xl"
                            />
                            <div className="absolute redhat w-3/5 md:w-1/3 h-28 flex items-center top-8 -left-3 md:-left-8 bg-[#8EB558] text-white py-3 px-6 rounded-md  ">
                                <h2 className='lg:leading-snug  text-white redhat text-left border-l border-white border-opacity-20 ps-3 text-2xl md:text-4xl  font-normal'>
                                    {heading}
                                </h2>

                            </div>
                            <div className="absolute top-8 md:-right-8 -right-3  bg-[#8EB558] md:w-16 w-10 h-28 rounded-md"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-8">

                            <div>
                                <h3 className="text-lg font-semibold mb-2">{climate.title}</h3>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    {climate.points.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{soil.title}</h3>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    {soil.points.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="text-center text-sm text-[#1B453C] mt-6">
                            {note}
                        </p>
                    </div>


                </div>
            </section>
        </>
    )
}
