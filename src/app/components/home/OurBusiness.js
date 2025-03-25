"use client"
import React, { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner from "../../../assets/images/home/banner02.webp";
import icon1 from "../../../assets/images/home/icon01.svg";
import icon2 from "../../../assets/images/home/icon02.svg";
import icon3 from "../../../assets/images/home/icon03.svg";
import Image from 'next/image';




export const OurBusiness = () => {
    const heading = "Our Commitment to a Sustainable Tomorrow"
    const boxslider = [
        {
            image: icon3,
            title: 'Carbon Sequestration and Climate Change Mitigation',
            description: 'Reducing atmospheric carbon through sustainable practices.',
        },
        {
            image: icon2,
            title: 'Soil Conservation and Water Management',
            description: 'Protecting and reclamation of degraded soil',
        },
        {
            image: icon1,
            title: 'Biodiversity Preservation and Habitat Restoration',
            description: 'Enhancing ecosystems and safeguarding diverse species.',
        },

        {
            image: icon1,
            title: 'Agroforestry',
            description: 'Implementing sustainable agroforestry practices, enhancing biodiversity.',
        },
        {
            image: icon2,
            title: 'Education and Training',
            description: 'Comprehensive training programs to empower communities with sustainable farming knowledge and skills.',
        },
        {
            image: icon3,
            title: 'Water Conservation and Harvesting',
            description: 'Focus on innovative water conservation techniques and efficient use and harvesting.',
        },
        {
            image: icon1,
            title: 'Animal Husbandry',
            description: 'Promote ethical animal husbandry practices and enhance livestock productivity.',
        },
        {
            image: icon3,
            title: 'Renewable Energy Integration',
            description: 'Reducing carbon footprints and promoting sustainable farming operations.',
        },
        {
            image: icon1,
            title: 'Agro Eco - tourism',
            description: 'Connecting visitors with sustainable practices while supporting local economies.',
        },
    ]
    return (
        <>
            <section
                className=" bg-white   pt-12 pb-16 lg:pt-16 lg:pb-24 outer-arrow arrow_black gray_circle inner-arrow" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <h2 className="lg:leading-snug text-black redhat mb-8 text-center text-3xl md:text-4xl  font-medium  w-full">
                         {heading}</h2>

                </div>
                <div className='mx-auto  px-4 md:px-8 lg:px-10 '>
                    <div className='bg-cover rounded-2xl px-4 py-14' style={{ backgroundImage: `url(${banner.src})` }}>
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
                                                        <div className='w-16 mt-4 lg:w-20 lg:h-20 mx-auto mb-4 md:mb-8'>
                                                        <Image src={item.image} alt='icon' className='h-full w-full' />
                                                        </div>

                                                    </div>
                                                    <h3 className='text-xl mt-3 md:text-left lg:text-[22px] font-medium text-black mb-4'>{item.title}</h3>
                                                    <p className='text-base text-black md:text-left font-light'>{item.description}</p>
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
        </>
    )
}
