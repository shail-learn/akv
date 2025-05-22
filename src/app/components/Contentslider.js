"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Contentslider = ({ title, speciesData }) => {


    return (
        <div className="relative z-20 bg-[#1b453c] text-white py-0 px-4 md:px-20 GrowthNavigation">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl redhat md:text-3xl font-semibold text-center mb-10">
                    {title}
                </h2>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation
                    loop
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                    className="middle_border"
                >
                    {speciesData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="pl-6  h-full  md:pl-10 mx-auto w-[90%]">
                                <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                                {item.info && (
                                    <p className="mb-3 font-light text-sm">{item.info}</p>
                                )}

                                {Array.isArray(item.points) && (
                                    <ul className="list-disc font-light ml-6 space-y-2 text-sm">
                                        {item.points.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                {item.uses && (
                                    <p className="mt-2 font-light py-3 text-sm">{item.uses}</p>
                                )}
                                 {item.info2 && (
                                    <p className="mb-3 mt-3 font-light text-sm">{item.info2}</p>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
