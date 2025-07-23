"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import objectbg from "../../../assets/images/eco/WhyChoose.webp";

export const HarvestingLayout = ({
  Harvestingheading,
  Harvestingtext,
  objectives,
}) => {
  return (
    <>
      <section
        className="relative text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20"
        style={{
          background: `url(${objectbg.src})center center / cover no-repeat`,
        }}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 ">
          <div className="lg:w-12/12  w-full  w-12/12">
            <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-center text-white mb-4">
              {Harvestingheading}
            </h2>

            <p className="text-base md:leading-[1.3] font-normal redhat text-center text-white mb-12 mb:20 lg:mb-24">
              {Harvestingtext}
            </p>
          </div>

          <div className="mt-10 relative">
            <div className="grid col-span-8 justify-center ">
              <div className="border_number relative">
                {objectives.map((obj, index) => (
                  <div
                    key={index}
                    className="flex  gap-4 md:gap-6 items-center mb-10 relative"
                  >
                    <div className="md:w-28 md:h-28 min-w-28 rounded-lg overflow-hidden">
                      <Image
                        src={obj.image}
                        alt={obj.title}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div className="md:min-w-16">
                      {/* <div className="absolute lg:left-5 top-0 h-full border-l-2 border-dashed border-white"></div> */}
                      <div
                        className={`left-4 z-10 md:w-10 md:h-10 w-8 h-8 text-sm md:text-base relative flex items-center justify-center text-black font-bold rounded-full bg-white`}
                      >
                        {obj.id}
                      </div>
                    </div>

                    <div className="ml-6 min-w-3/4 text-left">
                      <h3 className="text-xl lg:text-2xl text-white redhat mt-6 mb-3 font-semibold">
                        {obj.title}:
                      </h3>
                      <p className="text-gray-300 redhat text-sm">
                        {obj.description}
                      </p>
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

export const MarketLayout = ({ marketData, contentClass }) => {
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
            <div className="md:w-1/2 w-full">
              <div className="relative">
                <Image
                  src={marketData.imageSrc}
                  alt="Market Demand"
                  width={600}
                  height={400}
                  className="rounded-[20px]"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                />
                <div className="absolute inset-0 -z-10 h-[106%] w-[96%] md:w-full translate-x-6 -translate-y-3 md:-translate-y-4 bg-white border border-gray-400 rounded-[20px] shadow-md"></div>
              </div>
            </div>

            <div className={`md:w-6/12 w-12/12 ${contentClass}`}>
              <h2 className="text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-[#1B453C]">
                {marketData.title}
              </h2>
              <p className="my-6 text-base md:text-[17px]  font-normal md:text-base text-black"
                dangerouslySetInnerHTML={{ __html: marketData.description }} />


              <p className="text-base md:text-[17px] mb-2  font-semibold md:text-base text-black">
                {marketData.steptitle}
              </p>
              <ul className="list-disc pl-5 text-black mb-4">
                {marketData.steps.map((step, index) => (
                  <li
                    key={index}
                    className="text-[16px] md:text-[17px] font-normal text-black"
                  >
                    {step}
                  </li>
                ))}
              </ul>
              <div
                className="text-[14px] md:text-[15px]  font-normal  text-black mb-10 md:mb-14"
                dangerouslySetInnerHTML={{ __html: marketData.shortdesciption }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const UseSecLayout = ({ usesApplicationsData }) => {
  return (
    <>
      <section className="py-14 lg:py-16 bg-[#6D8C544D] relative outer-arrow green_icon_slider ">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
          <h2 className="text-3xl md:text-4xl font-medium text-center text-[#1B453C] mb-8 md:mb-12">
            {usesApplicationsData.heading}
          </h2>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="outer-arrow1"
          >
            {usesApplicationsData.columns.map((column, index) => (
              <SwiperSlide key={index}>
                <div className="border border-black rounded-tl-[50px] p-6 md:p-10 shadow-lg h-full md:h-56">
                  <h3 className="text-base font-semibold mb-4">
                    {column.subheading}
                  </h3>
                  <ul className="list-disc pl-5 text-sm text-black">
                    {column.points.map((point, i) => (
                      <li key={i} className="mb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};
