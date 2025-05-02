"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import objectbg from "../../../assets/images/eco/WhyChoose.webp";

import img1 from "../../../assets/images/eco/img1.png";
import img2 from "../../../assets/images/mango/img2.png";
import img3 from "../../../assets/images/eco/img3.png";
import img4 from "../../../assets/images/eco/img4.png";
import img5 from "../../../assets/images/mango/img5.png";
import img6 from "../../../assets/images/mango/img6.png";

import slider1 from "../../../assets/images/mango/climate.webp";
import slider2 from "../../../assets/images/mango/soil.webp";
import slider3 from "../../../assets/images/mango/Biodiversity.webp";

import economicbg from "../../../assets/images/fruit/economicbg.webp";



import Image from 'next/image';
import Link from 'next/link';

export const Points = () => {

    const objectives = [
        {
            id: "01",
            title: "Soil and Planting Essentials for Mango",
            description: "Success in mango cultivation begins with understanding soil requirements.",
            image: img1,
        },
        {
            id: "02",
            title: "Smart Spacing Strategies for Maximum Yield of Mango",
            description: "Modern mango cultivation offers several approaches to orchard layout.",
            image: img2,
        },
        {
            id: "03",
            title: "Water Management of Mango Trees",
            description: "Water forms the lifeblood of any mango orchard, but efficient use proves crucial",
            image: img3,
        },
        {
            id: "04",
            title: "Nourishing the Mango Trees for Success",
            description: "Mango trees require carefully planned nutrition throughout their lives.",
            image: img4,
        },
        {
            id: "05",
            title: "Protecting Your Investment",
            description: "Successful mango cultivation requires vigilant pest and disease management.",
            image: img5,
        },
        {
            id: "06",
            title: "Harvest and Yield of Mango",
            description: "A well-maintained orchard rewards growers with substantial yields",
            image: img6,
        },
    ];
    return (
        <>

            <section className='relative text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20' style={{ background: `url(${objectbg.src})center center / cover no-repeat` }} >

                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>

                    <div className="mt-10 relative">
                        <div className='grid col-span-8 justify-center '>
                            <div className="border_number big_border_number relative point_border">
                                {objectives.map((obj, index) => (
                                    <div key={index} className="flex  gap-4 md:gap-6 items-start mb-4 relative">
                                        <div className="md:w-28 md:h-28 w-28 rounded-lg overflow-hidden">
                                            <Image src={obj.image} alt={obj.title} width={100} height={100} className="object-cover" />
                                        </div>
                                        <div className=''>
                                            {/* <div className="absolute lg:left-5 top-0 h-full border-l-2 border-dashed border-white"></div> */}
                                            <div
                                                className={`left-4 z-10 md:w-10 md:h-10 w-8 h-8 text-sm md:text-base relative flex items-center justify-center text-black font-bold rounded-full bg-white`}
                                            >
                                                {obj.id}

                                            </div>
                                        </div>

                                        <div className="ml-6 w-3/4 text-left">
                                            <h3 className="text-xl lg:text-2xl text-white redhat mt-1 mb-3 font-semibold">{obj.title}:</h3>
                                            {obj.description && (
                                                <p className="text-gray-300 redhat text-sm mb-3">{obj.description}</p>
                                            )}
                                            {obj.points && (
                                                <ul className="list-disc pl-4">
                                                    {obj.points.map((point, idx) => (
                                                        <li key={idx} className="text-gray-300 text-sm redhat">{point}</li>
                                                    ))}
                                                </ul>
                                            )}
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




export const Approach = () => {
    const heading = "The Atulye Krishi Vana Approach"
    const sliderData = [
        {
            image: slider1,
            title: 'Climate Requirements ',
            points: [
                'Grows well upto 1000m above sea level.',
                'Requires moderate temp. with proper irrigation.',
                'Tolerates drought but performs best under well managed irrigation.',
            ],
        },
        {
            image: slider2,
            title: 'Soil Health',
            points: [
                'Focus on building soil organic matter',
                'Encourage beneficial microorganisms',
                'Practice minimal tillage',
            ],
        },
        {
            image: slider3,
            title: 'Biodiversity',
            points: [
                'Plant multiple varieties of mangoes',
                'Integrate other fruit trees and crops',
                'Create habitats for beneficial insects and birds',
            ],
        },
        {
            image: slider1,
            title: 'Climate Requirements ',
            points: [
                'Grows well upto 1000m above sea level.',
                'Requires moderate temp. with proper irrigation.',
                'Tolerates drought but performs best under well managed irrigation.',
            ],
        },
    ];
    const gradient = "linear-gradient(180deg, rgb(255 255 255 / 0%) 0%, rgba(0, 0, 0, 1) 100%)"
    return (
        <>
            <section
                className="py-14 lg:py-16 pt-12 lg:pb-24 bg-[#F4F4F4] expant_slider ">
                <div className='mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2 relative'>
                    <h2 className="lg:leading-snug text-[#1B453C] font-semibold redhat text-center text-3xl md:text-4xl w-full mb-8">
                        {heading}
                    </h2>
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
                        // autoplay={{
                        //     delay: 6000,
                        //     disableOnInteraction: false,
                        // }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}

                        className="mySwiper2 outer-arrow1 black-arrow bigger_expand"
                    >

                        {sliderData.map((item, index) => (
                            <SwiperSlide
                                key={index}
                            >
                                <div className="  text-black w-full bg-[#FFFFFF26] rounded-2xl overflow-hidden border border-[#B0B0B080]">
                                    <div className='relative'>
                                        {/* <div className='absolute top-0 left-0 w-full h-full opacity-80' style={{ background: gradient }}></div> */}
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full  object-cover"
                                        />

                                    </div>
                                    <div className='p-4 h-44'>
                                    <h3 className="font-medium mb-4  text-black ">{item.title}:</h3>
                                        <ul className="text-xs list-disc font-light px-6">
                                            {item.points.map((point, i) => (
                                                <li className='mb-2' key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>
            </section >
        </>

    )
}



export const Economic = () => {
    const heading = "Economic Potential of Mango"
    const description = "Mango cultivation offers diverse revenue opportunities beyond simple fruit sales. Fresh fruit marketing provides immediate returns, while export markets offer premium prices for quality produce. Processing contracts provide stable income streams, reducing market uncertainties."
    return (
        <>
            <section className='pt-24 pb-24 lg:pt-64 lg:pb-64' style={{ background: `url(${economicbg.src})center center / cover no-repeat` }}>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
                    <div className='flex md:flex-col flex-col lg:flex-row justify-between items-center gap-8 md:gap-10'>
                        <div className='md:w-5/12 bg-[#D9D9D9] rounded-2xl bg-opacity-85 p-8  w-full  w-12/12'>

                            <h2 className='text-2xl md:leading-[1.3] md:text-3xl font-semibold text-center md:text-left redhat text-[#1B453C] mb-6'>{heading}</h2>
                            <p className='text-[#1B453C] text-normal font-normal text-[15px] lg:text-base mb-8 lg:mb-10 text-justify'>{description}</p>
                            <div className='text-center md:text-left'>
                            <Link href="#" className='bg-transparent border border-[#1B453C] text-[#1B453C] shadow-lg py-2 px-8 inline-block text-center text-base hover:bg-[#1B453C] hover:text-white transition-all duration-500 '>Read more</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
