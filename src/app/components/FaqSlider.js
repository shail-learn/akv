"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import icon1 from "../../assets/images/about/icon01.webp";
import icon2 from "../../assets/images/about/icon02.webp";

export const FaqSlider = ({card,heading}) => {
  return (
    <>

    <section className='overflow-hidden'>
                <section
                    className="py-14 lg:py-16 pt-16 lg:pb-24 relative bg-[#F5F5F5]" >
                    <div className='absolute bottom-0 left-0 h-[40%]  bg-white w-full'></div>
                    <div className='mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2 relative'>
                        <div className='w-full text-center'>
                            <h2 className="text-[#1B453C] text-3xl md:text-4xl mb-16 lg:leading-tight  redhat  font-medium  w-full">{heading}</h2>

                            <div className='w-full mx-auto relative'>
                                <div className='mx-auto  w-[90%]'>

                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        navigation={{
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }}
                                        loop={true}
                                        modules={[Autoplay, Navigation, Pagination]}
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
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                            },
                                        }}

                                        className="mySwiper2 swiper_padd !p-4 dark_active white_arrow"
                                    >

                                        {card.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <div
                                                    className={`lg:col-span-4 bg-white transition-all rounded-3xl card1 duration-400 text-black p-8 w-full`}
                                                    style={{
                                                        boxShadow: '2px 2px 6px 0px #00000033',

                                                    }}
                                                >
                                                    <div className='grid items-center md:text-left justify-center gap-6'>
                                                        <h3 className='text-base md:text-lg text-[#1B453C]'>{item.title}</h3>
                                                        <p className='text-[15px] font-light text-black'>{item.description}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}


                                    </Swiper>
                                    <div className='black-arrow'>
                                    <button className="swiper-button-prev text-2xl !left-0 px-4 py-2">  </button>
                                        <button className="swiper-button-next !right-0 px-4 py-2 ">  </button>
                                    </div>


                                </div>

                            </div>
                        </div>

                        <div>
                            <Image src={icon1} alt="Banner Tree" className='lg:w-60 w-32 h-auto object-contain -bottom-16 lg:-bottom-28 absolute lg:-left-24 left-0 z-10' />
                            <Image src={icon2} alt="Banner Tree" className='lg:w-64 w-36 h-full object-contain lg:top-8 absolute left-auto  lg:-right-28 -right-4 -top-32' />
                        </div>



                    </div>
                </section>

            </section>

    </>
  )
}
