'use client';
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

export const ExploreSlider = ({ heading, subheading, items, background }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="relative py-12 lg:py-16"
      style={{
        background: `url(${background}) center center / cover no-repeat`,
      }}
    >
      <div className="max-w-7xl mx-auto px-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 lg:px-2">
          {(heading || subheading) && (
            <div className="text-center text-white mb-10">
              {heading && (
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold redhat mb-4">
                  {heading}
                </h2>
              )}
              {subheading && (
                <p className="text-lg md:text-xl">{subheading}</p>
              )}
            </div>
          )}

          <div className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20">
              <button
                ref={prevRef}
                className="p-3 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full text-white"
              >
                <IoIosArrowBack size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
              <button
                ref={nextRef}
                className="p-3 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full text-white"
              >
                <IoIosArrowForward size={24} />
              </button>
            </div>

            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                1400: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white w-[90%] mx-auto bg-opacity-20 backdrop-blur text-white rounded-xl overflow-hidden h-full xl:h-[550px]">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.heading || "project"}
                        className="w-full h-[240px] object-cover"
                      />
                    )}

                    <div className="p-6">
                      {item.heading && (
                        <h3
                          className="text-2xl font-semibold mb-3"
                          dangerouslySetInnerHTML={{ __html: item.heading }}
                        />
                      )}

                      {item.description && (
                        <p
                          className="text-base lg:text-[17px] redhat"
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        />
                      )}

                      {item.link && (
                        <div className="my-6 pt-4 text-center  w-full">
                          <Link href={item.link} className="md:absolute bottom-8 top-auto left-2/4 -translate-x-2/4" >
                            <span className="inline-block border text-base md:text-[17px] border-white text-white  px-8 py-3 hover:bg-gray-800 transition ">
                              Learn More
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
