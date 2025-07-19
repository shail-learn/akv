"use client"
import React, { useState } from 'react'
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/palm-main/banner.webp";
import basket from "../../../assets/images/palm-main/Why.webp";
import Image from 'next/image';
import { Productlist } from '../Productlist';
import product1 from "../../../assets/images/palm/product01.webp";
import product2 from "../../../assets/images/palm/product02.webp";
import product3 from "../../../assets/images/flower/product3.webp";
import harvestimg from "../../../assets/images/palm-main/Premium.webp";

import backgroundImage from "../../../assets/images/timber/category-bg.webp";

export const Palms = () => {
    const text = {
        banner: banner,
        heading: `Grace, Grandeur & Green Utility  The Timeless Charm of Palms`,
        title: "Palms and cycads are more than just tropical icons — they’re powerful additions to landscapes, farms, and eco-restoration projects. Whether you're looking to create aesthetic focal points or enhance soil conservation and biodiversity, Atulye Krishi Vana brings you a curated collection of both ornamental and functional palm varieties, along with rare cycads that thrive in Indian climates.",
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


export const Why = () => {
    const basketData = {
        heading: "Why Palms & Cycads?",
        points: [
            { items: "Provide vertical drama in landscapes" },
            { items: "Require minimal care and water once established" },
            { items: "Adapt well to urban, rural, and coastal area" },
            { items: "Useful in ornamental design as well as agroforestry systems" },
            { items: "Cycads offer prehistoric beauty and resilience" },
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
                        </div>

                        <div className="w-full md:w-[40%]">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src={basketData.image}
                                    alt="Basket of fruits and vegetables"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                    quality={90}
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
            title: "Ornamental Palms",
            image: product1,

            link: "/agroforestry/palms-cycads/ornamental-palms",

        },
        {
            title: "Functional & Native Palms",
            image: product2,

            link: "/agroforestry/palms-cycads/functional-native-palms",

        },


    ];
    return (
        <>
            <Productlist heading={heading} fruitData={fruitData} bgimg={bgimg} />

        </>
    )
}


export const Best = () => {
    const heading = "Best Used In"
    const points = [
        { item: "Resort and villa landscaping" },
        { item: "Urban avenues and boulevards" },
        { item: "Home entrances and patio gardens" },
        { item: "Institutional campuses and garden decor" },
    ]
    return (
        <>

            <section className="py-14   lg:py-20">
                <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
                    <div className='w-[95%] md:w-[92%] mx-auto'>
                        <div className="relative rounded-lg">
                            <Image
                                src={harvestimg}
                                alt="Forest Image"
                                className="w-full md:h-full object-cover h-60 rounded-2xl"
                            />

                            <div className="absolute redhat w-3/5 md:w-1/3 h-28 flex items-center top-8 -left-3 md:-left-8 bg-[#1B453C] text-white py-3 px-6 rounded-md  ">
                                <h2 className='lg:leading-snug  text-white redhat text-left border-l border-white border-opacity-20 ps-3 text-2xl md:text-4xl  font-normal'>
                                    {heading}
                                </h2>

                            </div>
                            <div className="absolute top-8 md:-right-8 -right-3  bg-[#1B453C] md:w-16 w-10 h-28 rounded-md"></div>
                        </div>
                        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-1 mt-4'>
                            {points.map((item, index) => (
                                <p className='text-base redhat font-semibold   text-black my-2' key={index}>
                                    {item.item}
                                </p>
                            ))}

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
