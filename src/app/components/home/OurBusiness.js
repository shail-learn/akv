"use client"
import React, { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner from "../../../assets/images/home/banner02.webp";
import icon1 from "../../../assets/images/home/icon1.svg";
import icon2 from "../../../assets/images/home/icon2.svg";
import icon3 from "../../../assets/images/home/icon3.svg";
import Image from 'next/image';




export const OurBusiness = () => {
    const boxslider = [
        {
            image: icon1,
            title: 'Afforestation, Reforestation, and Revegetation:',
            description: 'Transforming unused  barren land.',
        },
        {
            image: icon2,
            title: 'Soil Conservation:',
            description: 'Protecting the soil from  degradation, deterioration, and  erosion through best practices  and continuously developing it  as a living ecosystem.',
        },
        {
            image: icon3,
            title: 'Carbon  Sequestration:',
            description: 'Combatting climate  change.',
        },
        {
            image: icon1,
            title: 'Afforestation, Reforestation, and Revegetation:',
            description: 'Transforming unused  barren land.',
        },
        {
            image: icon2,
            title: 'Soil Conservation:',
            description: 'Protecting the soil from  degradation, deterioration, and  erosion through best practices  and continuously developing it  as a living ecosystem.',
        },
        {
            image: icon3,
            title: 'Carbon  Sequestration:',
            description: 'Combatting climate  change.',
        }
    ]
    return (
        <>
            <section
                className=" bg-white   pt-12 pb-16 lg:pt-16 lg:pb-24 long_arrow" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <h2 className="lg:leading-snug text-black redhat mb-8 text-center text-3xl md:text-4xl  font-normal  w-full"> Our Business</h2>
                </div>
                <div className='mx-auto  px-4 md:px-8 lg:px-10 '>
                    <div className='bg-cover rounded-2xl px-4 py-14' style={{ backgroundImage: `url(${banner.src})` }}>
                        <div className='  px-0 md:px-6 lg:px-2 relative z-1 '>
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
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                    }}

                                    className="mySwiper"
                                >

                                    {boxslider.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className='w-[110%] md:w-full h-96 lg:h-80 text-center px-8 lg:px-16 py-8 bg-[#fffafaca] bg-opacity-6'>
                                                <div className='lg:w-12/12 mx-auto'>
                                                    <div className='grid gap-2 items-center justify-center'>
                                                        <Image src={item.image} alt='icon' className='w-16 lg:w-20 lg:h-20 mx-auto' />
                                                        <h3 className='text-xl mt-3 lg:text-[24px] font-normal text-black italic mb-4'>{item.title}</h3>
                                                    </div>
                                                    <p className='text-sm text-black italic font-light'>{item.description}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}


                                </Swiper>



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
