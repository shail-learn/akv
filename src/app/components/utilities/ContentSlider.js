"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function SpeciesSlider({ title, speciesData }) {
  // Group items into pairs for SwiperSlide (2 per slide)
  const groupedData = [];
  for (let i = 0; i < speciesData.length; i += 2) {
    groupedData.push(speciesData.slice(i, i + 2));
  }

  return (
    <div className="relative z-20 bg-[#1b453c] text-white  py-10 px-4 md:px-20 GrowthNavigation">
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
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          {groupedData.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-2 gap-10 px-10 ">
                {group.map((item, idx) => (
                  <div
                    key={idx}
                    className={`pl-6 ${
                      idx === 1 ? "md:border-l border-white md:pl-10" : ""
                    }`}
                  >
                    <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                    <ul className="list-disc ml-4 space-y-2 text-sm">
                      <li>
                        <span className="font-semibold">Benefits:</span>{" "}
                        {item.benefits}
                      </li>
                      <li>
                        <span className="font-semibold">
                          Growth Conditions:
                        </span>{" "}
                        {item.conditions}
                      </li>
                      <li>
                        <span className="font-semibold">Spacing:</span>{" "}
                        {item.spacing}
                      </li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <span className="font-semibold">Uses:</span> {item.uses}
                    </p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
