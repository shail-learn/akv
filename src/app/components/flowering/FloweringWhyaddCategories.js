"use client"
import React, { useState } from 'react'
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/flower/banner.webp";
import basket from "../../../assets/images/flower/flower.webp";
import Image from 'next/image';
import { Productlist } from '../Productlist';
import product1 from "../../../assets/images/flower/product1.webp";
import product2 from "../../../assets/images/flower/product2.webp";
import product3 from "../../../assets/images/flower/product3.webp";


import backgroundImage from "../../../assets/images/timber/category-bg.webp";

export const Flowering = () => {
    const text = {
        banner: banner,
        heading: `Bringing Beauty to Life <br/>
        One Plant at a Time`,
        title: "From vibrant seasonal blooms to evergreen ornamental foliage, our collection celebrates the art of nature. Whether you're planning a garden, styling a space, or restoring a landscape — flowering and ornamental plants create the impact you're looking for.",
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



export const Whyadd = () => {
    const basketData = {
        heading: "Why Add These Plants to Your Landscape?",
        points: [
            { items: "Enhance visual appeal across seasons" },
            { items: "Attract pollinators and support biodiversity" },
            { items: "Improve air quality naturally" },
            { items: "Bring vibrance to homes, farms, and public spaces" },
            { items: "Boost emotional wellness through greenery" },
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
            title: "Flowering Plants",
            image: product1,
            link: "/agroForestry/flowering-ornamental-plants/flowering-plants",
        },
        {
            title: "Tropical Bloomers",
            image: product2,
            link: "/agroForestry/flowering-ornamental-plants/tropical-bloomers",
        },
        {
            title: "Duranata Hedge",
            image: product3,
            link: "/agroForestry/flowering-ornamental-plants/duranata-hedge",
        },

    ];
    return (
        <>
            <Productlist heading={heading} fruitData={fruitData} bgimg={bgimg} />

        </>
    )
}
