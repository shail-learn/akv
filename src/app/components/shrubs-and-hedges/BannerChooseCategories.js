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



export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Shrubs & Hedges`,
        subtitle: "Sculpt Your Landscape. Nurture Its Soul.",
        title: "Shrubs and hedges are more than just boundary lines or garden fillers — they’re living design elements that shape space, invite life, and offer year-round beauty. <br/>  At Atulye Krishi Vana, our curated selection of indigenous and ornamental varieties blends form with function, supporting ecological balance while elevating your landscape design. <br/> Whether you're crafting a lush border, creating a pollinator-friendly zone, or building a natural privacy wall — our shrubs and hedges bring resilience, structure, and purpose to your land. ",
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


export const Choose = () => {
    const basketData = {
        heading: "Why Choose Shrubs & Hedges?",
        points: [
            { items: "Beautify landscapes with flowering textures & seasonal colors" },
            { items: "Attract birds, bees, butterflies, and beneficial insects" },
            { items: "Define boundaries naturally — without concrete or fences" },
            { items: "Improve soil health, moisture retention, and microclimate" },
            { items: "Offer low-maintenance greenery for small & large spaces" },
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
                            <p className='mt-6'>From forest gardens to urban terraces, these versatile plants work in harmony with your vision — and nature’s rhythms.</p>
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
            title: "Shrubs",
            image: product1,
            link: "/agroforestry/shrubs-and-hedges/shrubs",
        },
        {
            title: "Hedges",
            image: product2,
            link: "/agroforestry/shrubs-and-hedges/hedges",
        },


    ];
    return (
        <>
            <Productlist heading={heading} fruitData={fruitData} bgimg={bgimg} />

        </>
    )
}
