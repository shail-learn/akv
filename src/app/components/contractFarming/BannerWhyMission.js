"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from "../../../assets/images/contract-farming/banner.webp";
import BannerPage from '../BannerPage';
import imageleft from "../../../assets/images/contract-farming/quality.webp";
import icon1 from "../../../assets/images/contract-farming/icon1.svg";
import icon2 from "../../../assets/images/contract-farming/icon2.svg";
import icon3 from "../../../assets/images/contract-farming/icon3.svg";
import icon4 from "../../../assets/images/contract-farming/icon4.svg";
import icon5 from "../../../assets/images/contract-farming/icon5.svg";
import missionbanner from "../../../assets/images/contract-farming/newly-planted.webp";

import icon01 from "../../../assets/images/contract-farming/vision1.svg";
import icon02 from "../../../assets/images/contract-farming/vision2.svg";
import icon03 from "../../../assets/images/contract-farming/vision3.svg";


import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination, Navigation } from 'swiper/modules';



export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Contract Farming for Fodder - Atulye Krishi Vana <br/>
         A Partnership Rooted in Sustainability! `,
        title: 'Welcome to Atulye Krishi Vana’s Contract Farming Program for Fodder. We are on a mission to create a sustainable and profitable agricultural ecosystem that supports farmers, enhances livestock nutrition, and contributes to environmental conservation. Our contract farming model ensures a steady supply of high-quality fodder while offering financial security and technical assistance to farmers.',


    }
    return (
        <>
            <BannerPage heading={text.heading} title={text.title} banner={text.banner} />
        </>


    )
}



export const Why = () => {
    const heading = "Why Choose Contract Farming?"
    const leftimg = imageleft;
    const heading2 = "Benefits for Farmers:"

    const whychoose = [
        {
            image: icon1,
            title: 'Assured Buyback',
            description: 'Farmers get a guaranteed market for their fodder crops.'
        },
        {
            image: icon2,
            title: 'Technical Support',
            description: 'We provide training and expert guidance.'
        },
        {
            image: icon3,
            title: 'Sustainable Practices',
            description: 'Implementing eco-friendly farming techniques.'
        },
        {
            image: icon4,
            title: 'Financial Assistance',
            description: 'Access to subsidies and micro-financing options.'
        },
        {
            image: icon5,
            title: 'Community Development',
            description: 'Enhancing rural livelihoods through job creation.'
        },
        {
            image: icon1,
            title: 'Assured Buyback',
            description: 'Farmers get a guaranteed market for their fodder crops.'
        },
        {
            image: icon2,
            title: 'Technical Support',
            description: 'We provide training and expert guidance.'
        },
        {
            image: icon3,
            title: 'Sustainable Practices',
            description: 'Implementing eco-friendly farming techniques.'
        },
        {
            image: icon4,
            title: 'Financial Assistance',
            description: 'Access to subsidies and micro-financing options.'
        },
        {
            image: icon5,
            title: 'Community Development',
            description: 'Enhancing rural livelihoods through job creation.'
        },
    ]


    return (
        <>
            <section className='pt-12 pb-12 lg:pt-14 lg:pb-14'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
                    <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium text-center redhat text-[#1B453C] mb-10 md:mb-14'>{heading}</h2>
                    <div className='flex md:flex-col flex-col lg:flex-row justify-between gap-8 md:gap-10'>
                        <div className='md:w-7/12  w-full  w-12/12'>
                            <Image src={leftimg} alt='banner' className='w-full rounded-2xl mt-2' />
                        </div>
                        <div className='md:w-5/12  w-full  w-12/12'>
                            <h3 className='text-xl md:leading-[1.3] md:text-2xl font-medium redhat text-black mb-6'>{heading2}</h3>
                            <div className="relative w-full">
                                <Swiper
                                    spaceBetween={30}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    pagination={{
                                        el: ".custom-pagination2",
                                        clickable: true,
                                    }}
                                    modules={[Grid, Pagination, Navigation]}
                                    grid={{ rows: 5, fill: "row" }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                        },
                                        1024: {
                                            slidesPerView: 1,
                                        },
                                    }}


                                    className="mySwiper"
                                >
                                    {whychoose.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="flex flex-row gap-4 md:gap-6">
                                                <div className="flex items-center">
                                                    <div className="bg-[#6D8C54] p-2 rounded-full">
                                                        <Image src={item.image} alt="icon" className="w-8 h-8" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-bold redhat text-[#1F1E17] mb-2">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-sm  font-medium redhat text-[#1F1E17]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className="flex justify-between items-center style2_slider mt-16">
                                    <div className='flex gap-10'>
                                        <button className="swiper-button-prev bg-white rounded-full shadow border border-[#F0F0F0] px-4 py-2 !relative">  </button>
                                        <button className="swiper-button-next bg-white rounded-full shadow border border-[#F0F0F0] px-4 py-2 !relative">  </button>
                                    </div>
                                    <div>
                                        <div className="custom-pagination2 flex justify-center"></div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>

                </div>

            </section>


        </>
    )
}


export const Mission = () => {
    const heading = "Our Mission & Vision"
    const subtitle = "Atulye Krishi Vana aims to revolutionize the agriculture sector by promoting agroforestry and sustainable farming models. Our mission is to:"
    const mission = [
        {
            image: icon01,
            description: 'Restore ecosystems through afforestation and reforestation.'
        },
        {
            image: icon02,
            description: 'Empower rural communities with sustainable livelihoods.'
        },
        {
            image: icon03,
            description: 'Ensure economic prosperity through innovative farming solutions.'
        },

    ]
    return (
        <>
            <section className='pt-14 pb-14 lg:pt-20 lg:pb-20 relative' style={{ background: `url(${missionbanner.src})center center / cover no-repeat` }}>
                <div className='absolute left-0 top-0 w-full h-full bg-black bg-opacity-30'></div>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-10'>
                    <div className='flex md:flex-col flex-col lg:flex-row justify-between items-center gap-8 md:gap-10'>
                        <div className='md:w-4/12  w-full  w-12/12'>
                            <div className='md:max-w-[80%]'>
                                <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium text-center md:text-left redhat text-white mb-6'>{heading}</h2>
                                <p className='text-white text-normal font-normal text-justify text-sm lg:text-base mb-8 lg:mb-10'>{subtitle}</p>
                            </div>
                        </div>
                        <div className='md:w-8/12  w-full  w-12/12'>
                            <div className='flex md:flex-col flex-col lg:flex-row justify-between gap-6 md:gap-6'>
                                {mission.map((item, index) => (
                                    <div className='md:w-4/12 w-full  w-12/12' key={index}>
                                        <div className='text-center md:p-10 py-14 p-8  bg-white rounded-xl h-full'>
                                            <Image src={item.image} className='w-20 h-20 md:w-24 md:h-24 object-contain mx-auto' alt='icon' />
                                            <p className='text-normal text-sm lg:text-[15px] pt-8 font-medium'>{item.description}</p>
                                        </div>
                                    </div>
                                ))}



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

