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

export const PurposeVision = (props) => {
    const text = [props.data.data.data.sec7_content]
    //  const heading1 = "Our Vision - A Vision for a"
    //  const greenheading = "Greener Planet"

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
                    <h2 className="lg:leading-snug text-white redhat mb-7 text-center text-3xl md:text-4xl  font-normal  w-full" dangerouslySetInnerHTML={{ __html: `${props.data.data.data.sec7_title}` }}>
                   </h2>
                    <div className='lg:w-6/12 mx-auto text-center'>
                        <p className='italic text-white text-normal text-sm lg:text-base'>
                            {props.data.data.data.sec7_content}
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
                            <Link href={props.data.data.data.sec7btn_url} className='text-white bg-[#498A8A] rounded-full p-3 px-12 lg:px-20 hover:bg-[#2D6B5E] hover:text-white transition delay-100 duration-100 ease-in-out'>{props.data.data.data.sec7btn_text}</Link>

                            </div>

                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}
