'use client';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import slider1 from "../../../assets/images/guava/man-hands.webp";
import slider2 from "../../../assets/images/guava/man-hands1.webp";
import slider3 from "../../../assets/images/guava/man-hands2.webp";

import ImageCard from '../ImageCard';
import Pest1 from "../../../assets/images/guava/Pest1.webp";
import Pest2 from "../../../assets/images/guava/Pest2.webp";
import Pest3 from "../../../assets/images/guava/Pest3.webp";
import Pest4 from "../../../assets/images/guava/Pest4.webp";
import tree from "../../../assets/images/guava/tree.svg";
import business from "../../../assets/images/guava/business-new.webp";
import { FaqSlider } from '../FaqSlider';




export const Pruning = () => {
    const heading = `Pruning & <br/> Canopy Management`
    const data = [
        {
            id: 1,
            img: slider2,
            text: "Prune past season’s terminal growth to 10-15cm during Sept- Oct and Feb- March"
        },
        {
            id: 2,
            img: slider1,
            text: "Bend erect branches by tying them to pegs for better growth."
        },
        {
            id: 3,
            img: slider3,
            text: "Rejuvenation of old trees by cutting back to 75 cm from ground level improves productivity."
        },

    ];

    return (
        <>
            <section className='py-14 lg:py-20'>
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <h2
                        className='lg:leading-snug text-[#1B453C] redhat mb-6 md:ml-10 md:mb-10 text-center md:text-left text-3xl md:text-4xl font-medium w-full'
                        dangerouslySetInnerHTML={{ __html: heading }}
                    ></h2>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-6'>
                        {data.map((item, index) => (
                            <div key={index} className=''>
                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden rounded-lg`}
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.text}
                                        width={500}
                                        height={300}
                                        className="object-cover w-full h-full  transition-all duration-100 rounded-tl-[50px]"
                                    />
                                    <p className="mt-6 text-[15px] text-justify text-black">{item.text}</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}


export const Pest = () => {
    const heading = "Pest and Disease Management"
    const bugs = [
        {
            title: "Tea Mosquito Bug",
            description: "Spray Quinalphos 25EC @ 2 ml/liter or neem oil 3%.",
            image: Pest1,
        },
        {
            title: "Aphids",
            description: "Control with Monocrotophos 36 WSC @ 1ml/liter.",
            image: Pest2,
        },
        {
            title: "Mealy Bug",
            description: "Use Triazophos @ 2ml/liter + neem oil 5 ml",
            image: Pest3,
        },
        {
            title: "Fruit Flies",
            description: "Set 50 traps per hectare with fish meal and Dichlorvos.",
            image: Pest4,
        },
    ];

    return (
        <>

            <section className='py-14 lg:py-20 bg-[#1B453C] bg-no-repeat bg-contain bg-center' style={{ backgroundImage: `url(${tree.src})` }}>
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <h2 className="lg:leading-snug text-white redhat mb-6  md:mb-10 text-center text-3xl md:text-4xl font-medium w-full" > {heading}</h2>
                    <ImageCard data={bugs} />
                </div>
            </section>

        </>
    )
}


export const Why = () => {
    const heading = "Why Choose Atulye Krishi Vana for Guava Farming?"
    const text = "At Atulye Krishi Vana, we provide expert guidance, high-quality planting materials, and sustainable cultivation techniques to help farmers achieve higher yields and better market access."
    const info = `For consultation and bulk orders, contact us at <a href="mailto:info@atulyekrishivana.com">info@atulyekrishivana.com</a> <br/> or visit our farm in Sehore, Madhya Pradesh to learn more!`
    return (
        <>
            <div className="px-4 md:px-6 bg-[#D9D9D999]">
                <h2 className="lg:leading-snug text-[#1B453C] redhat p-6 text-center text-3xl md:text-4xl font-medium w-full" > {heading}</h2>
            </div>
            <section className='py-14 lg:py-40 relative' style={{ background: `url(${business.src}) center center/ cover no-repeat` }}>
                <div className='absolute top-0 left-0 w-full h-full opacity-50 bg-black'></div>
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <p className='relative text-white text-center text-xl md:text-3xl font-normal leading-8 md:leading-10 redhat z-10'>{text}</p>
                </div>
            </section>
            <div className="px-4 md:px-6 bg-[#D9D9D999]">
                <div className="mx-auto max-w-7xl">
                    <p className="lg:leading-snug text-[#1B453C] redhat p-6 link_blue font-medium w-full"
                        dangerouslySetInnerHTML={{ __html: info }}
                    ></p>
                </div>
            </div>

        </>
    )
}



export const Faqs = () => {
    const heading = "FAQs"
    const card = [
        {
            title: 'Does bamboo require a lot of water to grow?',
            description: 'Bamboo requires water for optimal growth, especially during the initial establishment phase, but it is not a water-intensive crop. Once mature, bamboo is highly drought-resistant due to its deep root system',

        },
        {
            title: 'How does bamboo compare to traditional timber trees in terms of profitability?',
            description: 'Bamboo is significantly more profitable than traditional timber trees due to its rapid growth and continuous harvest cycle. While hardwood trees like teak take 20-30 years to mature, bamboo can be harvested within 3-5 years',

        },
        {
            title: 'How can I protect my bamboo plantation from pests and diseases?',
            description: 'Bamboo is naturally resistant to most pests and diseases, but occasional issues may arise. Common pests include bamboo borers, mealybugs, and aphids, which can damage shoots and leaves.',
        },
        {
            title: 'Does bamboo require a lot of water to grow?',
            description: 'Bamboo requires water for optimal growth, especially during the initial establishment phase, but it is not a water-intensive crop. Once mature, bamboo is highly drought-resistant due to its deep root system',

        },
        {
            title: 'How does bamboo compare to traditional timber trees in terms of profitability?',
            description: 'Bamboo is significantly more profitable than traditional timber trees due to its rapid growth and continuous harvest cycle. While hardwood trees like teak take 20-30 years to mature, bamboo can be harvested within 3-5 years',

        },
    ]
    return (
        <>
            <FaqSlider card={card} heading={heading} />
        </>
    )
}
