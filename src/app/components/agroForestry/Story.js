"use client"
import React from 'react'
import icon1 from "../../../assets/images/business/plant.svg";
import icon2 from "../../../assets/images/business/co2.svg";
import icon3 from "../../../assets/images/business/job-offer.svg";
import client1 from "../../../assets/images/business/image.webp";
import client2 from "../../../assets/images/business/image2.webp";

import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


export const Story = () => {
    const card = [
        {
            quote: 'Soil fertility improvement.',
            icon: icon1
        },
        {
            quote: 'Carbon capture equivalent to X tons annually.',
            icon: icon2
        },
        {
            quote: 'Economic upliftment through job creation.',
            icon: icon3
        }
    ]
    return (
        <>
            <section
                className=" py-20 lg:py-20" >

                <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-2 max-full bg-white'>
                    <div className='grid items-center grid-col-1  md:grid-cols-12 justify-center gap-6'>
                        {card.map((item, index) => (
                            <div key={index} className='w-full text-white h-full rounded-2xl px-10 py-10 md:p-8 md:py-14 md:col-span-4  bg-[#729A71] hover:bg-[#8DBAAD]'>
                                <div className='flex gap-4 lg:gap-8 items-center'>
                                    <Image src={item.icon} className='w-14 md:w-auto md:h-auto' alt="icon" />
                                    <p className='text-base md:w-2/4 md:text-left  font-normal'> {item.quote}   </p>
                                </div>
                            </div>

                        ))}

                    </div>

                </div>
            </section>

        </>
    )
}



export const Testimonial = () => {
    const heading1 = "Real voices, real impact: "
    const heading = "Stories from farmers, employees, and partners."
    const testimonial = [
        {
            image: client1,
            quote: `<span style="color:#1B453C;font-weight:800;">Atulye Krishi Vanna</span> helped transform our barren land into a thriving farm. Their agroforestry solutions are
life-changing!" `,
            position: "Rajesh Patel, Farmer, Gujarat"

        },
        {
            image: client2,
            quote: `Thanks to their training programs, I’ve adopted sustainable farming practices and doubled my yields.`,
            position: "Meena Kumari, Farmer, Rajasthan"

        },
        {
            image: client1,
            quote: `<span style="color:#1B453C;font-weight:800;">Atulye Krishi Vanna</span> helped transform our barren land into a thriving farm. Their agroforestry solutions are
            life-changing!" `,
            position: "Rajesh Patel, Farmer, Gujarat"

        },
        {
            image: client2,
            quote: `Thanks to their training programs, I’ve adopted sustainable farming practices and doubled my yields.`,
            position: "Meena Kumari, Farmer, Rajasthan"

        },
        {
            image: client1,
            quote: ` <span style="color:#1B453C;font-weight:800;">Atulye Krishi Vanna</span> helped transform our barren land into a thriving farm. Their agroforestry solutions are
            life-changing!"`,
            position: "Rajesh Patel, Farmer, Gujarat"

        },
    ]
    return (
        <>
            <section
                className=" py-14 lg:py-20 bg-[#F2F2F2] outer-arrow arrow_black" >

                <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-2 max-ful'>
                    <h2 className="text-black text-center  md:text-left text-3xl md:text-4xl mb-4 lg:mb-8 lg:leading-tight  redhat  font-medium  w-full">
                        {heading1} <br /> <span className='text-[#1B453C]'>{heading}</span>
                    </h2>


                    <div className='w-full lg:w-12/12'>

                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}

                            slidesPerView={1}
                            spaceBetween={10}
                            navigation={true}
                            loop={true}
                            modules={[Autoplay, Navigation]}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 50,
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
                                    slidesPerView: 2,
                                    spaceBetween: 80,
                                },
                            }}

                            className="mySwiper2"
                        >

                            {testimonial.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='w-full grid h-full  text-black bg-[#E9E9E9] rounded-3xl overflow-hidden  item_slider'
                                        style={{
                                            boxShadow: "5px 5px 4px 0px #00000033",

                                        }}
                                    >
                                        <div className='lg:w-12/ 12 mx-auto'>
                                            <div className='gap-6 flex items-center h-full '>
                                                <div className='w-w-3/6 lg:w-3/6 min-w-[40%]'>
                                                    <Image src={item.image} alt='client' className='w-full h-full ' />
                                                </div>
                                                <div className='w-full'>
                                                    <p className=' pl-0 p-4 text-sm lg:text-[16] font-normal' dangerouslySetInnerHTML={{ __html: item.quote }}></p>

                                                    <p className='text-black font-semibold text-sm lg:text-[16] '>– {item.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>

    )
}