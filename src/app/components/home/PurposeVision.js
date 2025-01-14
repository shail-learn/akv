"use client"
import Link from 'next/link'
import React from 'react'
import { Autoplay,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import icon1 from "../../../assets/images/home/care.svg";
import icon2 from "../../../assets/images/home/friendship.svg";
import icon3 from "../../../assets/images/home/rocket.svg";

export const PurposeVision = () => {
    const text = [" Our goal is to create a legacy of environmental preservation without taking from future generations. Our vision is to foster ‘billionaires’ of natural wealth by ensuring sustainable prosperity and environmental protection."]


    const boxslider = [
        {
            image: icon1,

            description: 'Kindness to people and the planet',
        },
        {
            image: icon2,

            description: 'Transparency, accountability, and respect',
        },
        {
            image: icon3,

            description: 'Innovation and excellence in sustainable practices',
        },
        {
            image: icon1,

            description: 'Kindness to people and the planet',
        },
        {
            image: icon2,

            description: 'Transparency, accountability, and respect',
        },
        {
            image: icon3,

            description: 'Innovation and excellence in sustainable practices',
        },
    ]


    return (
        <>
            <section
                className=" bg-[#1A3232]   pt-14 pb-16 lg:pt-16 lg:pb-20 vision-sec" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <h2 className="lg:leading-snug text-white redhat mb-7 text-center text-3xl md:text-4xl  font-normal  w-full">
                        Our Purpose & <span className='text-[#4C9E8C]'>Vision</span></h2>
                    <div className='lg:w-6/12 mx-auto text-center'>
                        <p className='italic text-white text-normal text-sm lg:text-base'>
                            {text}
                        </p>
                    </div>

                </div>
                <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-10 '>


                    <div className='  px-0 md:px-6 lg:px-2 relative z-1 '>

                        <div className='mx-auto  w-12/12'>

                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}

                                slidesPerView={1}
                                spaceBetween={10}
                                navigation={true}
                                modules={[Autoplay,Navigation]}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                  }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 80,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 50,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 60,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 70,
                                    },
                                }}

                                className="mySwiper2 outer-arrow"
                            >

                                {boxslider.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='w-full h-60 lg:h-60 item-center flex text-center items-center rounded-3xl px-8 lg:px-12 py-8 bg-white item_slider'>
                                            <div className='lg:w-12/12 mx-auto'>
                                                <div className='grid gap-2 items-center justify-center mb-5'>
                                                    <Image src={item.image} alt='icon' className='w-12 lg:w-14 lg:h-14 mx-auto' />

                                                </div>
                                                <p className='text-md text-black font-normal'>{item.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}


                            </Swiper>
                                <div className='text-center'>
                            <Link href="#" className='text-white bg-[#498A8A] rounded-full p-3 px-12 lg:px-20 hover:bg-[#2D6B5E] hover:text-white transition delay-100 duration-100 ease-in-out'>Join the Mission</Link>

                            </div>

                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}
