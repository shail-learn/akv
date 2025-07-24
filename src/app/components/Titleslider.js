"use client";
import React, { useRef, useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function Titleslider({ heading, boxslider, shortdescription }) {
  return (
    <>
      <section className=" bg-white   pt-10 pb-8 lg:pt-14 lg:pb-14 outer-arrow left-outer green_icon_slider outer_hide_slider active_gold">
        <div className="mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 ">
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2">
            <div className="w-full lg:w-3/12 ">
              <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  lg:text-[40px] font-semibold  w-full">
                {heading}
              </h2>
              {shortdescription && (
                <p className="text-base md:text-[17px] text-center md:text-left">
                  {shortdescription}
                </p>
              )}
            </div>

            <div className="w-full lg:w-9/12">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
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
                    <div className="w-full item-center flex text-white bg-[#1A3232] rounded-3xl items-center py-8  px-10 lg:px-8 md:py-10 mb-5 item_slider">
                      <div className="lg:w-12/12 mx-auto">
                        <div className="mb-6">
                          {item.image && (
                            <Image
                              src={item.image}
                              alt="icon"
                              className="w-14 lg:w-[50px] lg:h-[50px]"
                            />
                          )}
                        </div>
                        <h2 className="text-2xl  font-normal pb-6">
                          {item.heading}
                        </h2>

                        <p
                          className="text-base text-justify font-normal"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></p>
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
  );
}

export default Titleslider;
