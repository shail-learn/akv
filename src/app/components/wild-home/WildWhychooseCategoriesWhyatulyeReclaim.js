"use client"
import React, { useState } from 'react'
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/grasshome/banner.webp";
import basket from "../../../assets/images/grasshome/info.webp";
import Image from 'next/image';
import { Productlist } from '../Productlist';
import product1 from "../../../assets/images/grasshome/product1.webp";
import product2 from "../../../assets/images/grasshome/product2.webp";
import Plant from "../../../assets/images/grasshome/why.webp";
import { MdCheckCircle } from "react-icons/md";
import grow from "../../../assets/images/grasshome/grow.webp";
import Link from 'next/link';
import backgroundImage from "../../../assets/images/timber/category-bg.webp";

export const Wild = () => {
    const text = {
        banner: banner,
        heading: `Wild & Forest Trees`,
        subtitle:"Where Ecology Meets Ancestry",
        title: "India’s forests are more than green covers — they’re living legacies of biodiversity, culture, and healing. At Atulye Krishi Vana, our collection of Wild & Forest Trees honours that legacy by offering native, sacred, and multifunctional species for ecosystem restoration, cultural spaces, herbal projects, and agroforestry landscapes. These are the trees that shaped traditions, supported life, and stood tall through centuries. Now, they’re ready to root into your land and purpose.        ",
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
                subtitle={text.subtitle}

            />
        </>
    )
}


export const Whychoose = () => {
    const basketData = {
        heading: "Why Choose Wild & Forest Trees?",
        points: [
            { items: "Enrich degraded and deforested lands" },
            { items: "Anchor sacred groves, temples, and cultural spaces" },
            { items: "Attract birds, bees, and forest biodiversity" },
            { items: "Provide medicinal, culinary, and ecological value" },
            { items: "Grow climate resilience and soil regeneration" },
        ],
        image: basket,
    };

    return (
        <>

            <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>

                    <div className="flex flex-col-reverse justify-between lg:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-4xl redhat font-semibold text-center md:text-left text-[#1B453C] mb-8  md:mb-10">
                                {basketData.heading}
                            </h2>
                            <ul className="mt-0 md:mt-4 text-black list-inside space-y-1 list-disc">
                                {basketData.points.map((item, index) => (
                                    <li key={index}>{item.items}</li>
                                ))}
                            </ul>
                            <p className='py-6'>Whether you’re restoring native habitats, creating heritage parks, or setting up a spiritual garden — these trees form the soul of sustainable Indian landscapes.</p>
                        </div>

                        <div className="w-full md:w-[40%]">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src={basketData.image}
                                    alt="Basket of fruits and vegetables"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export const Categories = () => {
    const heading = "Explore Our Categories"
    const bgimg = backgroundImage
    const fruitData = [
        {
            title: "Sacred & Culturally Trees",
            image: product1,
            link: "/agroForestry/wild-and-forest-trees/sacred-and-culturally-trees",
        },
        {
            title: "Medicinal & Multi Purpose Trees",
            image: product2,
            link: "/agroForestry/wild-and-forest-trees/medicinal-and-multi-purpose-trees",
        },
        {
            title: "Wild forest giants & Natives",
            image: product2,
            link: "/agroForestry/wild-and-forest-trees/wild-forest-giants-and-natives",
        },


    ];
    return (
        <>
            <Productlist heading={heading} fruitData={fruitData} bgimg={bgimg} />

        </>
    )
}


export const Whyatulye = () => {
    const heading = `Why Atulye Krishi Vana?`

    const futurePlans = [
        `Verified, high-survival native nursery stock`,
        `Sourced ethically and grown organically`,
        `Suitable for arid, tribal, coastal, and hilly terrains`,
        `Bulk and small-scale availability`,
        `Planting & maintenance support available`,

    ];


    return (
        <>

            <section className="text-center md:text-left  py-16   lg:py-20  ">
                <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10">

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-black mb-4 md:mb-10"
                            dangerouslySetInnerHTML={{ __html: heading }}
                        />

                        {/* List using map() */}
                        <ul className="mt-6 space-y-4">
                            {futurePlans.map((plan, index) => (
                                <li key={index} className="flex  text-left space-x-3">
                                    <span className="w-6 h-6 text-[#1B453C] flex items-center justify-center rounded-full">
                                        <MdCheckCircle className='w-6 h-6' />
                                    </span>
                                    <p
                                        className="text-[#141414] redhat"
                                        dangerouslySetInnerHTML={{ __html: plan }}
                                    />
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className=" w-full md:w-1/2">
                        <Image
                            src={Plant}
                            alt="Planting"
                            width={200}
                            height={200}
                            className="w-full h-full"
                        />

                    </div>
                </div>
            </section>
        </>
    )
}



export const Reclaim = () => {
    const growData = {
        "heading": "Reclaim the Wild. Revive the Sacred. Restore the Balance.",
        "paragraphs": [
            "Let your land tell a deeper story — of culture, resilience, and native wisdom. Whether it's a single sacred tree or a 500-tree rewilding plan, we’ll help you choose and grow with intention.",

        ],

        "image": grow
    }
    return (
        <>
            <section className="bg-[#f1f1f1] py-10 px-4">
                <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 flex flex-col-reverse md:flex-row items-center gap-8">
                    {/* Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl redhat font-semibold text-center md:text-left text-[#1B453C]  mb-4">
                            {growData.heading}
                        </h2>

                        {growData.paragraphs.map((p, index) => (
                            <p key={index} className="text-black mb-2 py-6">
                                {p}
                            </p>
                        ))}
                        <div className='mt-12'>
                            <Link href="https://atulye-foundation.org/" target='_blank'
                                className="text-lg text-[#1B453C] font-normal px-4 py-2 border border-[#1B453C]">
                                Join us
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="overflow-hidden  w-[350px] h-[350px] relative mx-auto md:mx-0 md:ml-auto">
                            <Image
                                src={growData.image}
                                alt="Grow with us"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-[50%] shadow-lg"
                            />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
