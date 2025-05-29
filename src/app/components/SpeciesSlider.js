"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function SpeciesSlider({ data = [] }) {
    return (
        <section className="py-14 !pt-0 lg:py-20">
        <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            navigation

            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <Image className="w-full" src={item.image} alt={item.name} />
                  <h2 className="text-lg text-[#1B453C] py-3 font-semibold">
                    {item.name}
                  </h2>
                  <Link
                  href={item.link}
                  className="inline-flex gap-2 items-center text-sm"
                >
                  {item.linkText || "Explore "}{" "}

                </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }