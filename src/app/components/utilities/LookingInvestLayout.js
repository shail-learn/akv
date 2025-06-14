"use client";
import React from "react";
import bgimage1 from "../../../assets/images/guava/refreshment.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import whychooose from "../../../assets/images/mahagony/whychooose.svg";
export const InvestLayout = ({ plantSearon, heading, bgimg }) => {
  return (
    <>
      <section
        className=" bg-white pt-16 pb-16 lg:pt-20 lg:pb-20 relative"
        style={{
          background: `url(${bgimg?.src || bgimage1.src}) center center / cover no-repeat`,
        }}
      >
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-50 z-10"></div>
        <div className="mx-auto max-w-7xl  px-4 md:px-8 lg:px-2 relative z-10">
          <div className="flex flex-wrap  items-center gap-6 px-0 md:px-6  lg:px-2">
          <div className="w-[95%] md:w-12/12 ">
              <h2 className="text-3xl md:leading-[1.3] text-center md:text-4xl mb-10 font-medium redhat text-white">
                {heading}
              </h2>
              </div>
              <div className="w-[95%] md:w-5/12 ">
              <div className="bg-white backdrop-blur bg-opacity-20 rounded-[20px]">
                {plantSearon.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-6">
                    <Image
                      src={section.img}
                      className="w-full rounded-3xl"
                      alt="image"
                    />
                    <div className="p-8 ">
                      <ul className="list-disc pl-5 mt-2 space-y-2 text-sm md:text-[15px] text-white font-light redhat">
                        {section.details.map((detail, index) => (
                          <li className="mb-1" key={index}>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const LookingLayout = ({ heading, subheading, box }) => {
  return (
    <>
      <section className="py-12 lg:py-16 bg-[#D9D9D966]">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 ">
          <h2
            className="lg:leading-snug text-black redhat mb-6 lg:mb-4 text-center text-3xl md:text-4xl font-semibold w-full"
            dangerouslySetInnerHTML={{ __html: heading }}
          ></h2>

          <p className="lg:leading-snug text-black  text-center text-sm lg:text-[18px]  font-semibold mb-8 mt-4  w-full">
            {subheading}
          </p>

          <div className="mx-auto justify-center flex flex-wrap lg:flex-nowrap gap-12 lg:gap-5">
            {box.map((item, index) => (
              <div className="w-full md:w-[47%] lg:w-3/12" key={index}>
                <div className=" text-black text-center grid items-center justify-center p-4 h-40 lg:h-32 border-[1px] border-[#1B453C]  rounded-[20px] transition-all  duration-400">
                  <h2 className="lg:leading-snug  poppins text-center text-sm lg:text-[15px]  font-normal  w-full">
                    {item.text}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const WhyChooseLayout = ({
  heading,
  card,
  GrowthHeading,
  leftTitle,
  rightTitle,
  leftContent,
  rightContent,
  icon,
  custom_class,
  img
}) => {
  return (
    <>
      <section className="relative">
        <div className="relative w-full md:-mt-28 z-10 devided-line">
          <Image
            src={whychooose}
            alt="Divider"
            width={1920}
            height={700}
            className="w-full object-cover h-full"
          />
        </div>

        {/* Content */}
        <div className={`relative z-20 bg-[#1b453c] text-white pb-20 -mt-20 ${custom_class ? custom_class : ""}`}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center pt-14 pb-10">
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
                           {item.img && (
                          <Image
                            src={item.img}
                            alt="Icon"
                            width={200}
                            height={200}
                            className="object-contain h-9 mx-auto"
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

            {/* Next Section Heading */}
            <h3 className="text-2xl md:text-3xl font-semibold text-center mt-20">
              {GrowthHeading}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-[3rem] py-5 px-2 relative">
              {/* Left Column */}
              <div>
                <h3 className="font-bold mb-2">{leftTitle}</h3>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                  {leftContent.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div className="md:border-l border-white md:pl-10">
                <h3 className="font-bold mb-2">{rightTitle}</h3>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                  {rightContent.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
