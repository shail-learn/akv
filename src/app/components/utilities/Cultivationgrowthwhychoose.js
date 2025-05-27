"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
import GrowthBg from "../../../assets/images/mahagony/growthbg.svg";
export const GrowthSlider = ({
  GrowthHeading,
  GrowthDescription,
  slides,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getCurrentHeading = () => {
    return slides[activeIndex]?.group || "";
  };

  return (
    <section
      className={`relative py-13 overflow-hidden ${className ? className : ""}`}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#1B453C] z-0" />
      <Image
        src={GrowthBg}
        alt="Forest Background"
        fill
        className="object-cover object-center z-0 opacity-50"
      />

      <div className="relative my-2 z-10 text-white text-center px-4 max-w-4xl mx-auto GrowthNavigation">
        <h2 className="redhat  text-3xl md:text-[43px] font-medium mb-3 pb-4 px-4 leading-tight">
          {GrowthHeading}
        </h2>
        {GrowthDescription && (
          <p className="text-sm md:text-base mb-10">{GrowthDescription}</p>
        )}

        <h3 className="text-2xl font-medium mb-6 transition-all duration-300">
          {getCurrentHeading()}
        </h3>

        <Swiper
          modules={[Navigation]}
          navigation={slides.length > 1} // enable navigation only if more than one slide
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className={`max-w-md mx-auto ${
            slides.length === 1 ? "hide-arrows" : ""
          }`}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg  mb-6">
                  <Image
                    src={item.image}
                    alt="image"
                    width={180}
                    height={180}
                    className="object-cover w-full h-full"
                  />
                </div>
                {item.title && (
                  <h4 className="text-lg font-medium py-2">{item.title}</h4>
                )}
                <p
                  className="text-sm font-normal"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export const FaqsLayout = ({ heading, description, faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="relative text-center md:text-left py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative">
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-12">
            <div className="lg:w-5/12  w-full w-12/12">
              <h2 className="text-xl md:leading-[1.3] md:text-2xl font-semibold text-center md:text-left redhat text-[#1B453C] mb-8">
                FAQs
              </h2>
              <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold text-center md:text-left redhat text-black mb-8">
                {heading}
              </h2>
              <p
                className="text-[#1B453C] text-[15px] leading-6 text-justify my-4"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </div>
            <div className="lg:w-6/12  w-full w-12/12">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full text-left flex items-center rounded-2xl justify-between p-4
                      transition-all duration-300
                      ${
                        openIndex === index
                          ? "bg-[#1B453CE3] text-white rounded-bl-[0px] rounded-br-[0px] "
                          : "bg-[#D9D9D9] text-[#000]"
                      }`}
                  >
                    <span
                      className={`font-medium w-[90%]
                      ${openIndex === index ? "text-lg" : "text-lg"}`}
                    >
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <HiChevronUp className="text-lg" />
                    ) : (
                      <HiChevronDown className="text-lg" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden bg-[#1B453CE3] rounded-bl-2xl rounded-br-2xl px-4 text-white transition-[max-height] duration-300 ease-in-out
                                ${
                                  openIndex === index
                                    ? "max-h-[500px] opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                  >
                    <p
                      className=" pt-0  mb-6 py-4 text-[15px] md:text-base font-light text-[#00] text-opacity-75"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
