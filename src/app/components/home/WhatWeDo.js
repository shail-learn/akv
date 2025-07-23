"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import icon from "../../../assets/images/logo-icon.svg";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import images1 from "../../../assets/images/home/what/1.webp";
import images2 from "../../../assets/images/home/what/2.webp";
import images3 from "../../../assets/images/home/what/3.webp";
import images4 from "../../../assets/images/home/what/4.webp";


function WhatWeDo() {

    const heading = ["What We Do"]
    const text = [

        {
            description: "<b>Established in 2018, Atulye Krishi Vana</b>, stands at the forefront of agroforestry innovation, driving sustainable solutions for a better planet. Dedicated to transforming degraded landscapes into thriving, biodiverse ecosystems, we are committed to addressing climate change while fostering economic growth. As a leader in sustainable agriculture, our mission is to redefine land restoration and create long-lasting value for communities and the environment alike."

        },

    ]

    const sliderImages = [
        { img: images1 },
        { img: images2 },
        { img: images3 },
        { img: images4 },
    ];

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <section className=' pt-24 pb-20 lg:pt-32 lg:pb-24 bg-darkg'>
            <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
                <div className='grid gap-12 sm:grid-cols-12'>
                    <div className='p-10 pt-16 text-center rounded-3xl   bg-white md:col-span-5 relative'>
                        <div className="absolute flex items-center left-1/2 -top-12 -translate-x-1/2   bg-teal-900 p-4 rounded-full w-24 h-24">
                            <Image
                                src={icon}
                                alt="shape"
                                className='h-auto w-auto'
                            />
                        </div>
                        <h3 className='mb-4 text-[28px] md:text-3xl lg:text-4xl font-medium mt-2   poppins'>{heading}</h3>
                        {text.map((item, index) => {
                            return (
                                <p
                                    key={index}
                                    className="text-black-400 leading-6 md:leading-7 text-justify letter tracking-[0.5] text-base lg:text-[17px]"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                ></p>
                            )

                        })}
                        <div className='mt-14'>
                            <Link href="/about-us" className='text-[#1B453C] font-medium bg-white border border-[#1B453C] p-3 px-12 lg:px-20 hover:bg-[#1B453C] hover:text-white transition delay-100 duration-100 ease-in-out'>Read More</Link>
                        </div>
                    </div>
                    <div className='md:min-h-28 rounded md:col-span-7'>
                        <div className='grid gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-12'>
                            <div className='md:col-span-8'>
                                <Swiper
                                    style={{
                                        "--swiper-navigation-color": "#fff",
                                        "--swiper-pagination-color": "#fff",
                                    }}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                                    className="mySwiperMain w-full outer_arrow"
                                >
                                    {sliderImages.map((item, index) => (
                                        <SwiperSlide key={index} className='text-center'>
                                            <div className='rounded-2xl overflow-hidden w-auto inline-block mx-auto'>
                                                <Image
                                                    src={item.img}
                                                    alt={`Slide ${index + 1}`}
                                                    className="w-full h-[500px] object-contain rounded-2xl"

                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className='md:col-span-4'>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={20}
                                    slidesPerView={3}
                                    freeMode={true}
                                    watchSlidesProgress={true}

                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiperThumbs w-full  h-auto lg:h-[500px]"
                                    breakpoints={{

                                        640: {
                                            direction: "vertical",
                                            slidesPerView: 3.2,
                                        },
                                        320: {
                                            slidesPerView: 3,

                                        },
                                    }}
                                >
                                    {sliderImages.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={item.img}
                                                width={500}
                                                height={500}
                                                alt={`Slide ${index + 1}`}
                                                className="w-full h-20 md:h-32 object-cover object-top rounded-2xl"

                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo