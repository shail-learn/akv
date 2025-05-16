"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Iconslider = ({ heading, card}) => {
    return (
        <>

            <div className="relative z-20 bg-[#1b453c] text-white pb-20 -mt-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-medium text-center pt-14 pb-10">
                        {heading}
                    </h2>

                    <div className="w-full mx-auto relative whychose">
                        <div className="mx-auto w-[90%]">
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
                                    320: { slidesPerView: 1, spaceBetween: 30 },
                                    640: { slidesPerView: 2, spaceBetween: 30 },
                                    768: { slidesPerView: 3, spaceBetween: 30 },
                                    1024: { slidesPerView: 3, spaceBetween: 30 },
                                }}
                                className="mySwiper2 swiper_padd !p-4 light_active white_arrow"
                            >
                                {card.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="lg:col-span-4 bg-white transition-all rounded-3xl card1 duration-400 text-black p-8 w-full"
                                            style={{ boxShadow: "2px 2px 6px 0px #00000033" }}
                                        >
                                            <div className="grid items-center md:text-left justify-center gap-6">
                                                <h3 className="text-base md:text-[16] text-black font-bold">
                                                    {item.title}
                                                </h3>
                                                {item.icon && (
                                                    <Image
                                                        src={item.icon}
                                                        alt="Icon"
                                                        width={40}
                                                        height={40}
                                                        className="object-contain"
                                                    />
                                                )}
                                                <p className="text-[13px] font-light text-black">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="black-arrow">
                                <button className="swiper-button-prev text-2xl !left-0 px-4 py-2"></button>
                                <button className="swiper-button-next !right-0 px-4 py-2"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
