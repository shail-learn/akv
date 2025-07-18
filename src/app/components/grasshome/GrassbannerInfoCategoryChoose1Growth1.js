"use client"
import React, { useState } from 'react'
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/grasshome/banner.webp";
import basket from "../../../assets/images/grasshome/info.webp";
import Image from 'next/image';
import { Productlist } from '../Productlist';
import product1 from "../../../assets/images/grasshome/product01.webp";
import product2 from "../../../assets/images/grasshome/product02.webp";
import Plant from "../../../assets/images/grasshome/why.webp";
import { MdCheckCircle } from "react-icons/md";
import grow from "../../../assets/images/grasshome/grow.webp";
import Link from 'next/link';
import backgroundImage from "../../../assets/images/timber/category-bg.webp";

export const Grassbanner = () => {
    const text = {
        banner: banner,
        heading: `Grass, Fodder & Agricultural Plants Rooted in Regeneration. Nourishing Livelihoods.`,
        title: "At Atulye Krishi Vana, we grow more than just plants — we grow possibilities. Our collection of grass, fodder, and agricultural plants is tailored to support India’s farmers, dairy owners, self-reliant households, and regenerative agriculture pioneers. From increasing milk yield with protein-rich fodder to creating healthy kitchen gardens at home, these plants are the foundation of a resilient and sustainable food system.",
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



export const Info = () => {
    const basketData = {
        heading: "Why Grass, Fodder & Agricultural Plants Matter",
        points: [
            { items: "Improve livestock nutrition and productivity" },
            { items: "Enrich soil health through nitrogen fixation and organic matter" },
            { items: "Enable kitchen-level food security" },
            { items: "Protect land from erosion and heat stress" },
            { items: "Provide seasonal income and resource independence" },
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
                            <p className='py-6'>With expert-grown nursery stock and climate-appropriate varieties, Atulye Krishi Vana ensures your farm or garden thrives — naturally and sustainably.</p>
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



export const Category = () => {
    const heading = "Explore Our Categories"
    const bgimg = backgroundImage
    const fruitData = [
        {
            title: "Grass & Fodder Crops",
            image: product1,
            link: "/agroforestry/grass-fodder-and-agricultural-plants/grass-and-fodder-crops",
        },
        {
            title: "Agricultural & Kitchen Crops",
            image: product2,
            link: "/agroforestry/grass-fodder-and-agricultural-plants/agricultural-and-kitchen-crops",
        },


    ];
    return (
        <>
            <Productlist heading={heading} fruitData={fruitData} bgimg={bgimg} />

        </>
    )
}



export const Choose1 = () => {
    const heading = `Why Choose Atulye Krishi Vana?`
    const content = "At Atulye, we’re not just cultivators — we’re collaborators in your growth. With access to best-quality nursery stock, training, and region-wise plant recommendations, you’re supported from seed to soil."
    const heading2 = "What We Offer:"
    const futurePlans = [
        `Certified, pest-resistant varieties`,
        `Ready-to-plant rootstocks and seeds`,
        `Guidance on seasonal planting & care`,
        `Fodder systems planning for integrated farms`,
        `Soil-health focused plant pairings`,

    ];


    return (
        <>

            <section className="text-center md:text-left  py-16   lg:py-20  ">
                <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10">

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-black mb-4 md:mb-10"
                            dangerouslySetInnerHTML={{ __html: heading }}
                        />
                        <p className='text-base redhat font-medium'>{content}</p>
                        <h2 className="text-2xl md:leading-[1.3] md:text-3xl font-semibold redhat text-black mb-4 py-6 mt-12"
                            dangerouslySetInnerHTML={{ __html: heading2 }}
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



export const Growth1 = () => {
    const growData = {
        "heading": "Grow the Future with Us",
        "paragraphs": [
            "From backyard gardens to multi-acre farms — small steps in the right direction lead to bigger harvests. Build your ecosystem today with the right mix of fodder, food, and function.",

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
