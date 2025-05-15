"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import GrowthBg from "../../../assets/images/mahagony/growthbg.svg";
export const GrowthSlider = ({ GrowthHeading, GrowthDescription, slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getCurrentHeading = () => {
    return slides[activeIndex]?.group || "";
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#1B453C] z-0" />
      <Image
        src={GrowthBg}
        alt="Forest Background"
        fill
        className="object-cover object-center z-0 opacity-50"
      />

      <div className="relative my-2 z-10 text-white text-center px-4 max-w-4xl mx-auto GrowthNavigation">
        <h2 className="redhat  text-3xl md:text-[40px] font-medium mb-3">
          {GrowthHeading}
        </h2>
        <p className="text-sm md:text-base mb-10">{GrowthDescription}</p>

        <h3 className="text-2xl font-bold mb-6 transition-all duration-300">
          {getCurrentHeading()}
        </h3>

        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="max-w-md mx-auto"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm font-normal">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
