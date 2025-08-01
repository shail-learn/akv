"use client"
import React from 'react'
import csr1 from "../../../assets/images/eco/csr1.webp";
import csr2 from "../../../assets/images/eco/csr2.webp";
import csr3 from "../../../assets/images/eco/csr3.webp";
import csr4 from "../../../assets/images/eco/csr4.webp";
import aboutSlider from '../../../api/ecoSlider.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import explore1 from "../../../assets/images/eco/icon03.svg";
import explore2 from "../../../assets/images/eco/icon02.svg";
import explore3 from "../../../assets/images/eco/icon01.svg";

import image3 from "../../../assets/images/eco/image3.webp";
import Link from 'next/link';

export const CsrProject = () => {
    const heading = "CSR Projects"
    const heading2 = "Our Impactful CSR Activities"
    const text = "Atulye Krishi Vana has successfully implemented numerous CSR activities to support the local community:"
    const initiatives = [
        {
            title: "Free Eye Check-Up Camps",
            description: "Accessible healthcare is a right, not a privilege. We regularly organize eye camps to provide early diagnosis and treatment to rural residents.            ",
            image: csr1,
        },
        {
            title: "Clothing and Stationery Distribution",
            description: "Every child deserves the tools to learn. Our distribution drives ensure children in nearby villages receive essential school supplies and warm clothing.",
            image: csr2,
        },
        {
            title: "Plantation Drives",
            description: "Alongside our agroforestry mission, we involve schools and local groups in plantation activities—nurturing both trees and environmental awareness.",
            image: csr3,
        },
        {
            title: "Cultural Activities",
            description: "Celebrating tradition and togetherness, we host events that preserve local culture, empower women, and encourage creative expression.",
            image: csr4,
        },
    ];

    const heading01 = "CSR activities"
    return (
        <>

            <section className='relative text-center md:text-left   pb-12 pt-16  lg:pt-20 lg:pb-16'  >
                <div className='mx-auto max-w-7xl px-4 md:px-6 mx:px-2 relative z-1 '>
                    <div className='lg:w-12/12  w-full  w-12/12'>
                        <h2 className='text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-center text-[#1B453C] mb-4'>{heading}</h2>
                        <h5 className='text-[22px] md:leading-[1.3] md:text-[26px] font-medium redhat text-center text-[#F7C35F] mb-3'>{heading2}</h5>
                        <p className='text-base md:text-[17px] md:leading-[1.3] font-normal redhat text-center text-black mb-16'>{text}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-6">
                        {initiatives.map((item, index) => (
                            <div key={index} className="text-center md:text-left">
                                <div className="overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-60 object-cover rounded-2xl"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold redhat mt-6 lg:h-[4rem] line-clamp-2 overflow-hidden mb-4 md:mb-1">{item.title}</h3>
                                <p className="text-black redhat text-base md:text-[17px]">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className='pt-16 md:pt-20'>
                        <h2 className='text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-center text-[#1B453C] mb-10'>{heading01}</h2>


                        <Swiper

                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            className="mySwiper2 pagination_long !pb-8 "
                        >
                            {aboutSlider.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='w-full  relative'>
                                        <Image src={item.image} alt="banner" width="600" height="600"
                                            className='rounded-2xl h-80 object-cover w-full object-center border-1 border-[#1B453C]' />
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




export const Agroforestry = () => {
    const heading = "Agroforestry & Sustainability"
    const heading2 = "Leading the Agroforestry Movement"
    const text = "We cultivate high-value timber, medicinal plants, and organic produce to generate sustainable livelihoods. Some highlights include:"
    const agroforestry = [
        {
            title: "Fruit Plants",
            description: "Oranges, papayas, and lemons.",
            icon: explore1,
        },
        {
            title: "Timber Crops",
            description: "Sandalwood, teak, and rosewood.",
            icon: explore2,
        },
        {
            title: "Medicinal Plants",
            description: "Amla, tulsi, and aloe vera.",
            icon: explore3,
        },

    ];
    return (
        <>

            <section
                className=" bg-[#F5F5F5] pt-0 pb-14 lg:pt-0 lg:pb-0 mt-6">
                <div className='mx-auto max-w-7xl flex flex-wrap md:flex-nowrap gap-0 md:gap-12'>
                    <div className='w-full md:w-6/12'>
                        <Image className='h-full w-full' src={image3} alt="banner" />

                    </div>
                    <div className='w-full md:w-6/12'>
                        <h2 className="lg:leading-snug text-[#1F1E17] redhat mb-2   pt-10 text-center md:text-left text-3xl md:text-4xl  lg:text-[40px] font-semibold  w-full"> {heading}</h2>
                        <h5 className='text-[22px] md:leading-[1.3] md:text-[26px] font-medium redhat text-center md:text-left text-[#F7C35F] mb-3'>{heading2}</h5>
                        <p className='text-base md:text-[17px] md:leading-[1.3] font-normal redhat text-center md:text-left text-black mb-16'>{text}</p>

                        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 px-4 lg:px-0">
                            {agroforestry.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 border-b border-white pb-6 border-opacity-40 ">

                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 p-2" >
                                            <Image src={item.icon} alt={item.title} width={50} height={50} className="w-full h-full" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl md:text-2xl mb-1 redhat font-semibold text-[#1F1E17]">{item.title}</h3>
                                        <p className="text-[#878680] redhat text-base md:text-[17px] whitespace-pre-line">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                            <div className='mt-6'>
                                <Link href="/our-projects" className='bg-[#1B453C] text-white   py-3 px-12 inline-block text-center text-base hover:bg-black hover:text-[#fff] transition-all  duration-500 '>Explore Our Agroforestry Projects</Link>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}
