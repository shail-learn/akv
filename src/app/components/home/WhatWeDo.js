"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import icon from "../../../assets/images/logo-icon.svg";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Link from 'next/link';


function WhatWeDo() {

    const heading = ["What We Do"]
    const text = [

        {
            description: "<b>Atulye Krishi Vana</b>, incorporated in September 2018, is an agriventure based in New Delhi, India. Our first project, covering 400 acres in Madhya Pradesh, includes over 175,000 trees across multiple species. With state-of-the-art farming techniques, we promote agroforestry that provides fresh air, clean water, and a sustainable livelihood. </br></br> Our dedication to protecting life and resources continues to expand across different states as we finalize regulatory formalities for future projects."

        },

    ]

    const sliderImages = [
        { img: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95" },
        { img: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95" },
        { img: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95" },
        { img: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95" },
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
                        <h3 className='mb-4 text-[28px] md:text-3xl mt-2 font-normal poppins'>{heading}</h3>
                        {text.map((item, index) => {
                            return (
                                <p
                                    key={index}
                                    className="text-black-400 poppins text-sm lg:text-[15px]"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                ></p>
                            )

                        })}
                        <div className='mt-8'>
                         <Link href="#" className='text-white bg-teal-900 rounded-full p-3 px-12 lg:px-20 hover:bg-gray-800 hover:text-white transition delay-100 duration-100 ease-in-out'>Read More</Link>
                         </div>
                    </div>
                    <div className='md:min-h-28 rounded md:col-span-7'>
                         <div className='grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-12'>
                            <div className='md:col-span-9 '>
                            <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiperMain w-full outer_arrow"
                        >
                            {sliderImages.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={item.img}
                                        width={500}
                                        height={500}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-auto object-cover rounded-md"
                                        style={{
                                            width: '100% !important',
                                            height: 'auto',
                                          }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                            </div>
                            <div className='md:col-span-3'>
                            <Swiper
                            onSwiper={setThumbsSwiper}

                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiperThumbs w-full h-auto lg:h-96"
                            breakpoints={{

                                640: {
                                    direction:"vertical",
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
                                        className="w-full h-auto object-cover rounded-md"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                          }}
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