import React from 'react'
import backgroundImage from "../../../assets/images/fruits-vegetables/tree.webp";

import fruit1 from "../../../assets/images/fruits-vegetables/fruit1.png";
import fruit2 from "../../../assets/images/fruits-vegetables/fruit2.png";
import fruit3 from "../../../assets/images/fruits-vegetables/fruit3.png";
import fruit4 from "../../../assets/images/fruits-vegetables/fruit4.png";
import Image from 'next/image';
import fruit5 from "../../../assets/images/fruits-vegetables/fruit5.webp";
import Plant from "../../../assets/images/eco/future.webp";
import grow from "../../../assets/images/fruits-vegetables/grow.png";

import { MdCheckCircle } from "react-icons/md";



export const Find = () => {
    const heading = " Find Your Fruit"
    const fruitData = [
        {
            title: "Citrus & Juicy Fruits",
            image: fruit1,
        },
        {
            title: "Berry, Vine & Nut Plants",
            image: fruit2,
        },
        {
            title: "Large, Medicinal & Multipurpose Trees",
            image: fruit3,
        },
        {
            title: "Exotic & Imported Fruits",
            image: fruit4,
        },
        {
            title: "Indian & Tropical Fruits",
            image: fruit5,
        },
    ];
    return (
        <>
            <section
                className="py-12 px-4 md:px-10 bg-cover bg-center bg-no-repeat"
                style={{ background: `url(${backgroundImage.src})center center / cover no-repeat` }}
            >
                <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-2 '>
                    <h2 className="text-3xl md:text-4xl redhat font-semibold text-center  text-[#1B453C]  mb-8">
                        {heading}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fruitData.map((item, index) => (
                            <div
                                key={index}
                                className=" overflow-hidden"
                            >
                                <div className="w-full h-[270px]  relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="w-full object-cover h-full"
                                    />
                                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20'></div>
                                </div>
                                <div className="p-4 -mt-14 relative z-10 text-base font-semibold text-white">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}



export const Choose = () => {
    const heading = "Why choose"
    const subtitle = "Atulye Krishi Vana?"
    const futurePlans = [
        `<b>Rooted in Nature –</b> Pure, pesticide-free produce grown in healthy soil`,
        `<b>Empowering Farmers –</b> Supporting local communities with fair trade`,
        `<b>Fresh Delivery –</b> From farm to your doorstep in record time`,
        `<b>For Every Kitchen –</b> Affordable goodness for every home and every recipe`,
    ];


    return (
        <>

            <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-20">
                <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10">

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-black mb-2">
                            {heading}
                        </h2>
                        <p className="text-xl md:leading-[1.3] md:text-2xl font-semibold redhat text-[#F7C35F] lg:mb-16 mb-10">
                            {subtitle}
                        </p>


                        {/* List using map() */}
                        <ul className="mt-6 space-y-4">
                            {futurePlans.map((plan, index) => (
                                <li key={index} className="flex   space-x-3">
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

                        {/* Button */}

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


export const Join = () => {
    const growData = {
        "heading": "Join the Movement, Grow with Us",
        "paragraphs": [
            "Be part of a growing community that values freshness, health, and sustainability.",
            "Let’s support local farmers, embrace natural living, and celebrate goodness — together"
        ],
        "cta": "🌱 Join Us — Let’s Grow, Naturally",
        "image": grow
    }
    return (
        <>
            <section className="bg-[#f1f1f1] py-10 px-4">
                <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 flex flex-col-reverse md:flex-row items-center gap-8">
                    {/* Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl redhat font-semibold text-center md:text-left text-[#1B453C]  mb-8 md:mb-20">
                            {growData.heading}
                        </h2>
                        {growData.paragraphs.map((p, index) => (
                            <p key={index} className="text-black mb-2">
                                {p}
                            </p>
                        ))}
                        <p className="text-lg md:text-2xl text-[#1B453C] mt-12 font-semibold">
                            {growData.cta}
                        </p>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="overflow-hidden  w-[250px] h-[350px] relative ml-auto">
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
