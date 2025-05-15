"use client"
import React, { useRef, useState } from 'react';
import { Navigation , Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import BannerPage from '../BannerPage';
import Image from 'next/image';
import banner from "../../../assets/images/orange/banner.webp";
import image1 from "../../../assets/images/orange/split-yellow.webp";
import image2 from "../../../assets/images/orange/white-surface.webp";
import bgimg from "../../../assets/images/orange/ideal-banner.webp";
import icon1 from "../../../assets/images/orange/icon01.svg";
import icon2 from "../../../assets/images/orange/icon02.svg";
import icon3 from "../../../assets/images/orange/icon03.svg";
import icon4 from "../../../assets/images/orange/icon04.png";


import step1 from "../../../assets/images/orange/step1.webp";
import step2 from "../../../assets/images/orange/step2.webp";
import growth1 from "../../../assets/images/amla/growth1.webp";
import growth2 from "../../../assets/images/orange/Dig-Pits.webp";
import growth3 from "../../../assets/images/orange/Spacing.webp";
import growth4 from "../../../assets/images/orange/soil.webp";
import growth5 from "../../../assets/images/orange/irrigation.webp";



export const Orangebanner = () => {
    const text = {
        banner: banner,
        heading: `Cultivate High Yielding Orange`,
        subtitle: `with <br> Atulye Krishi Vana!`,
        opacity: "opacity-40"
    };
    return (
        <>
            <BannerPage
                heading={text.heading}
                subtitle={text.subtitle}
                opacity={text.opacity}
                banner={text.banner}
                classname={text.className}

            />
        </>
    )
}



export const Ideal = () => {
    const description = "Oranges are among the most beloved fruits worldwide, cherished for their refreshing taste, vibrant color, and immense health benefits. Whether eaten fresh, juiced, or used in various culinary creations, oranges are a staple in many households. Their cultivation, however, requires careful planning and proper techniques to ensure a bountiful harvest."
    const heading = "Types of Oranges"
    const product = [
        {
            image: image1,
            name: "Sweet Oranges (Citrus sinensis)"

        },
        {
            image: image2,
            name: "Mandarin Oranges (Citrus reticulata)"

        },
    ]
    return (
        <>
            <section className='bg-[#D9D9D933] py-12 lg:py-16 relative'>
                <div className='mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2'>
                    <div className='w-full text-start relative z-10'>
                        <p className=' text-black '>
                            {description}
                        </p>
                        <h2 className='md:text-2xl text-xl text-black text-center py-8 '>{heading}</h2>
                        <div className='flex flex-wrap md:flex-nowrap gap-4 justify-center'>
                            {product.map((item, index) => (
                                <div className='md:w-[40%] w-full' key={index}>
                                    <Image src={item.image} alt={item.name} className='w-full shadow-md' />
                                    <p className='py-3 text-center'>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='absolute bottom-0 left-0 w-full h-1/2 bg-white'></div>
                </div>


            </section>
        </>
    )
}



export const Planting = () => {
    const heading = "Ideal Climate and Soil Conditions"
    const heading2 = `Planting <span class="text-[#498A8A]">Process</span>`
    const boxslider = [
        {
            image: icon1,
            title: 'Rainfall',
            description: 'Sweet oranges require 50–75 cm of annual rainfall, while mandarins need 150–250 cm',
        },
        {
            image: icon2,
            title: 'Temperature',
            description: 'Oranges thrive in regions with moderate temperature variations. Too much heat can cause sunburn, while extreme cold can damage the fruit.',
        },
        {
            image: icon3,
            title: 'Soil Type',
            description: 'Well-drained loamy soil is ideal. Heavy clay or overly acidic soils should be avoided',
        },
        {
            image: icon4,
            title: 'pH Levels',
            description: 'Sweet oranges prefer a pH of 6.5–7.5, while mandarins grow best at 5.5–6.5',
        },




    ]

    const steps = [
        {
            image: step1,
            text: "Sweet oranges: July to September"
        },
        {
            text: "Best Time to Plant"
        },
        {
            image: step2,
            text: "Mandarin oranges: November to December"
        }
    ]

    return (
        <>
            <section
                className=" bg-white   outer-arrow arrow_black gray_circle inner-arrow" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>


                </div>
                <div className='mx-auto  px-4 md:px-8 lg:px-10 bg-cover bg-center' style={{ backgroundImage: `url(${bgimg.src})` }}>
                    <div className=' rounded-2xl px-4 py-14' >
                        <h2 className="lg:leading-snug text-white redhat mb-10 md:mb-16 text-center text-3xl md:text-4xl  font-medium  w-full">
                            {heading}</h2>
                        <div className='  px-0 md:px-6 lg:px-2 relative z-1 '>
                            <div className='w-full max-w-7xl mx-auto'>
                                <div className='mx-auto w-12/12'>

                                    <Swiper
                                        style={{
                                            '--swiper-navigation-color': '#fff',
                                            '--swiper-pagination-color': '#fff',
                                        }}

                                        slidesPerView={1}
                                        spaceBetween={10}
                                        navigation={true}
                                        modules={[Navigation]}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1,
                                                spaceBetween: 50,
                                            },
                                            640: {
                                                slidesPerView: 2,
                                                spaceBetween: 40,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 50,
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 50,
                                            },
                                        }}

                                        className="mySwiper outer-arrow1"
                                    >

                                        {boxslider.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <div className='w-[100%] grid items-start md:w-full h-96 lg:h-[450px] text-center px-6 lg:px-12 py-8 bg-[#fffafaca] bg-opacity-90 rounded-[20px]'>
                                                    <div className='lg:w-12/12 mx-auto'>
                                                        <div className='grid gap-2 items-start justify-center'>
                                                            <div className='w-14 mt-4 lg:w-16 lg:h-16 mx-auto mb-4 md:mb-8'>
                                                                <Image src={item.image} alt='icon' className='h-full w-full' />
                                                            </div>

                                                        </div>
                                                        <h3 className='text-xl mt-3   lg:text-[22px] font-medium text-black mb-4'>{item.title}</h3>
                                                        <p className='text-base text-black   font-light'>{item.description}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}


                                    </Swiper>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#D9D9D9B2]  py-16 md:py-14'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
                    <h2 className="lg:leading-snug text-black redhat mb-10 md:mb-16 text-center text-3xl md:text-4xl  font-medium  w-full" dangerouslySetInnerHTML={{ __html: heading2 }} />

                    <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6  p-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/3 flex flex-col items-center justify-center"
                            >
                                {step.image ? (
                                    <>
                                        <div className="relative rounded-3xl shadow-md   border-black/20">
                                            <Image
                                                src={step.image}
                                                alt={`Step ${index + 1}`}
                                                className="w-full h-auto object-cover"
                                            />
                                             <div className='absolute inset-0 -z-10 h-[106%] w-[96%] md:w-full -translate-x-4 -translate-y-3 md:-translate-y-4 bg-white border border-black rounded-[20px] shadow-md'>

                                             </div>
                                        </div>
                                        <p className="text-center  mt-2">{step.text}</p>
                                    </>
                                ) : (
                                    <p className="text-xl md:text-2xl py-6 font-normal text-center text-gray-800">
                                        {step.text}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

            </section>
        </>
    )
}



export const Steps = () => {
    const heading = "Steps for Planting"

    const boxslider = [
        {
            iamge: growth1,
            heading: "Prepare the Land",
            description: 'Clear weeds and unwanted vegetation before planting.',
        },
        {
            iamge: growth2,
            heading: "Dig Pits",
            description: 'Each pit should be around 75 cm deep and wide.',
        },
        {
            iamge: growth3,
            heading: "Soil Enrichment",
            description: 'Mix topsoil with well-decomposed farmyard manure before filling the pit.',
        },
        {
            iamge: growth4,
            heading: "Spacing",
            description: 'Maintain a spacing of 7 x 7 meters for sweet oranges and 6 x 6 meters for mandarins.',
        },
        {
            iamge: growth5,
            heading: "Irrigation",
            description: 'Water the saplings immediately after planting to help them establish.',
        },

    ]
    return (
        <>
         <section
                className=" bg-[#D9D9D9B2] pt-0 py-8 md:py-12 md:pt-12 outer-arrow left-outer green_icon_slider outer_hide_slider gray_arrow_fade hide_img_slider" >
                <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-4 lg:px-2 '>
                    <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6  lg:px-2'>
                        <div className='w-full md:w-4/12 '>
                            <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-0 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-semibold  w-full">
                                {heading}
                            </h2>
                        </div>

                        <div className='w-full md:w-8/12'>

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
                                        spaceBetween: 30,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}

                                className="mySwiper2"
                            >

                                {boxslider.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='w-full  flex text-black bg-[#FF9E18CC] rounded-3xl mb-5 item_slider'>
                                            <div className='lg:w-12/12 mx-auto'>
                                                <Image src={item.iamge} alt={item.heading} className='rounded-3xl h-40 w-full object-cover' />
                                                <div className='p-6'>
                                                <h2 className='text-[24px] font-normal pb-2' dangerouslySetInnerHTML={{ __html: item.heading }}></h2>
                                                <p className='text-sm lg:text-[15]  font-light' dangerouslySetInnerHTML={{ __html: item.description }}>
                                                </p>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                ))}


                            </Swiper>


                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
