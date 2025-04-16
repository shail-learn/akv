"use client"
import Link from 'next/link'
import React from 'react'
import { Autoplay,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import icon1 from "../../../assets/images/home/icon1.png";
import icon2 from "../../../assets/images/home/icon2.png";
import icon3 from "../../../assets/images/home/icon3.png";

export const PurposeVision = () => {
    const text = ["Our vision is to create the largest sustainable forest in the country, and eventually, the world."]
     const heading1 = "Our Vision - A Vision for a"
     const greenheading = "Greener Planet"

    const boxslider = [
        {
            image: icon1,

            description: 'Transparency, Diversity & Accountability',
        },
        {
            image: icon2,

            description: 'Kind towards the Planet',
        },
        {
            image: icon3,

            description: 'Innovation in Agroforestry and Sustainability',
        },
        {
            image: icon1,

            description: 'Kind towards biodiversity',
        },
        {
            image: icon2,

            description: 'Committed towards people and built shelters during pandemic',
        },
        {
            image: icon3,

            description: 'Green zone development',
        },
    ]


    return (
        <>
            <section
                className=" bg-[#1A3232]   pt-14 pb-16 lg:pt-16 lg:pb-20 vision-sec" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <h2 className="lg:leading-snug text-white redhat mb-7 text-center text-3xl md:text-4xl  font-medium  w-full">
                    {heading1} <span className='text-[#4C9E8C]'>{greenheading}</span></h2>
                    <div className='lg:w-6/12 mx-auto text-center'>
                        <p className=' text-white text-normal text-sm lg:text-base'>
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
                                        <div className='w-full h-60 lg:h-72 item-center flex text-center items-center rounded-[20px] px-8 lg:px-12 py-8 bg-white item_slider'>
                                            <div className='lg:w-12/12 mx-auto'>
                                                <div className='grid gap-2 items-center justify-center mb-8'>
                                                    <Image src={item.image} alt='icon' className='w-16 lg:w-[80px] lg:h-[80px] mx-auto' />

                                                </div>
                                                <p className='text-md text-black font-normal'>{item.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}


                            </Swiper>
                                {/* <div className='text-center pt-6 md:pt-12'>
                            <Link href="#" className='text-white bg-transparent border border-white p-3 px-12 lg:px-20 hover:bg-white hover:text-[#1B453C] transition delay-100 duration-100 ease-in-out'>Join the Mission</Link>

                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
