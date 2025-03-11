"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageleft from "../../../assets/images/contract-farming/fodder.webp";
import icon1 from "../../../assets/images/contract-farming/eco1.svg";
import icon2 from "../../../assets/images/contract-farming/eco2.svg";
import icon3 from "../../../assets/images/contract-farming/eco3.svg";
import impact1 from "../../../assets/images/contract-farming/impact.webp";


import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination, Navigation, Autoplay } from 'swiper/modules';

import value1 from "../../../assets/images/contract-farming/work1.svg";
import value2 from "../../../assets/images/contract-farming/work2.svg";
import value3 from "../../../assets/images/contract-farming/work3.svg";
import value4 from "../../../assets/images/contract-farming/work4.svg";
import value5 from "../../../assets/images/contract-farming/work5.svg";
import bgimpact from "../../../assets/images/contract-farming/bgImg.webp";

import indicateicon from "../../../assets/images/about/indicate.svg";



export const Fodder = () => {
  const whychoose = [
    {
      image: imageleft,
      title: 'Assured Buyback',
      description: 'Farmers get a guaranteed market for their fodder crops.'
    },
    {
      image: imageleft,
      title: `Napier Grass <br/> (CO-3 & CO-4)`,
      description: 'Fast-growing and highly nutritious.'
    },
    {
      image: imageleft,
      title: `Napier Grass <br/> (CO-3 & CO-4)`,
      description: 'Implementing eco-friendly farming techniques.'
    },
    {
      image: imageleft,
      title: `Napier Grass <br/> (CO-3 & CO-4)`,
      description: 'Access to subsidies and micro-financing options.'
    },
    {
      image: imageleft,
      title: `Napier Grass <br/> (CO-3 & CO-4)`,
      description: 'Enhancing rural livelihoods through job creation.'
    },

  ]
  const heading = "Fodder Crops in Our Contract Farming Program"
  const description = "We cultivate and promote a variety of high-yield fodder crops that offer superior nutrition and sustainability. These include:"

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);

  return (
    <>
      <section className='pt-10 pb-12 lg:pt-14 lg:pb-14'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>

          <div className='flex  md:flex-col lg:flex-row flex-col-reverse justify-between  gap-8 md:gap-10'>
            <div className='md:w-7/12  w-full  w-12/12'>
              <div className="relative w-full">
                <Swiper
                  onSwiper={setSwiperInstance}
                  spaceBetween={30}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{
                    el: ".custom-pagination3",
                    clickable: true,
                  }}
                  modules={[Grid, Pagination, Navigation]}
                  grid={{ rows: 1, fill: "row" }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 1,
                    },
                  }}
                  className="mySwiper style2_slider"
                >
                  {whychoose.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="flex gap-4 md:gap-6 flex-col h-[300px] rounded-2xl p-8 lg:p-12"
                        style={{
                          background: `url(${item.image.src}) center center / cover no-repeat`,
                        }}
                      >
                        <h2
                          className="text-3xl md:leading-[1.3] md:text-4xl h-full font-normal redhat text-white mb-10 md:mb-14"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h2>
                        <p className="text-sm font-medium redhat text-white">
                          {item.description}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="flex justify-between items-center style2_slider mt-16">
                  <div className="flex items-center  gap-10 lg:gap-14">
                    <button
                      className={`swiper-button-prev bg-white rounded-full !relative shadow border border-[#F0F0F0] px-4 py-2 ${isBeginning ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      disabled={isBeginning}
                    >

                    </button>
                    <button
                      className={`swiper-button-next bg-white rounded-full !relative shadow border border-[#F0F0F0] px-4 py-2 ${isEnd ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      disabled={isEnd}
                    >

                    </button>
                  </div>
                  <div>
                    <div className="custom-pagination3 flex justify-start mb-3 space-x-2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:w-5/12  w-full  w-12/12'>
              <h2 className='text-3xl md:leading-[1.3] md:text-4xl  text-center md:text-left font-normal redhat text-[#1B453C] mt-10 mb-4'>{heading}</h2>
              <p className="text-base text-center md:text-left font-medium redhat text-black">
                {description}
              </p>
            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export const Works = () => {
  const heading = 'How It Works?'
  const coreValues = [
    {
      title: "Enrollment & Agreement",
      description: "Farmers sign a contract ensuring assured buyback and support.",
      icon: value1,
    },
    {
      title: "Land Preparation & Seed Supply",
      description: "We assist in land assessment and provide high-quality seeds.",
      icon: value2,
    },
    {
      title: "Training & Technical Assistance",
      description: "Farmers receive training in sustainable farming  and best practices.",
      icon: value3,
    },
    {
      title: "Cultivation &  Monitoring",
      description: " Regular inspections and expert guidance ensure healthy crop growth.",
      icon: value4,
    },
    {
      title: "Harvesting & Procurement",
      description: "We purchase the yield at pre-agreed prices, ensuring  timely payments.",
      icon: value5,
    },
  ];
  return (
    <>
      <section className='relative text-center bg-[#F5F5F5] md:text-left pt-12 pb-12 lg:pt-10 lg:pb-20'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative'>
          <h2 className='text-3xl text-center md:leading-[1.3] md:text-4xl font-normal redhat text-black mt-4 mb-16'>{heading}</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="w-32 h-32 flex items-center justify-center rounded-full outline-dashed outline-[#c4a87c] outline-2 border-4 border-solid border-[#F5F5F5] bg-[#1B453C]">
                  <Image src={value.icon} alt={value.title} width={50} height={50} className="w-16 h-16" />
                </div>
                {index !== coreValues.length - 1 && (
                  <div className="absolute right-[-40px] top-1/2 transform -translate-y-[100px] hidden md:block">
                    <Image src={indicateicon} width={50} height={50} alt="arrow" className="w-14 h-14 " />
                  </div>
                )}
                <div className='w-4/5 '>
                  <h3 className="text-lg lg:text-xl redhat font-semibold text-gray-900 mt-6">{value.title}</h3>
                  <p className="text-[#141414] opacity-75 redhat mt-2 max-w-xs">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}


export const Sustainability = () => {
  const heading = "Sustainability & Environmental Impact"
  const text = ["Our contract farming initiative aligns with climate change mitigation and biodiversity conservation goals:"]
  const boxslider = [
    {
      image: impact1,
      heading: "Employment Opportunities",
      description: 'Direct and indirect job creation through farming, processing, and transportation.',
    },
    {
      image: impact1,
      heading: "Market Linkages",
      description: 'Establishing supply chains for domestic and export markets.',
    },
    {
      image: impact1,
      heading: "Agro-Processing Industries",
      description: 'Value addition through fodder pellet production and silage making.',
    },
    {
      image: impact1,
      heading: "Building <span style='color:#5CA9A9'>Ecosystems</span>",
      description: 'Through Afforestation, Reforestation & Revegatation',
    },

  ]
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);

      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);
  return (
    <>
      <section
        className=" bg-white pt-16 pb-16 lg:pt-20 lg:pb-20 " style={{ background: `url(${bgimpact.src})center center / cover no-repeat` }}>
        <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>
            <div className='w-full lg:w-3/12 '>
              <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-normal  w-full">
                {heading}
              </h2>
              <p className='text-sm text-center md:text-left text-white '>{text}</p>

            </div>

            <div className='w-full lg:w-9/12'>
              <div className='w-full relative'>
                <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}

                  slidesPerView={1}
                  spaceBetween={10}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{
                    el: ".custom-pagination4",
                    clickable: true,
                  }}
                  modules={[Autoplay, Navigation, Pagination]}
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
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                  }}

                  className="mySwiper2"
                >

                  {boxslider.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className='w-full flex text-white bg-white backdrop-blur bg-opacity-20 rounded-xl  p-4 lg:p-6 h-96'>
                        <div className='lg:w-12/12 mx-auto w-full'>
                          <div className='mb-4'>
                            <Image src={item.image} alt='icon' className='w-full h-full rounded-xl' />
                          </div>
                          <h2 className='text-2xl font-light pb-4' dangerouslySetInnerHTML={{ __html: item.heading }}></h2>

                          <p className='text-sm lg:text-[15] font-light italic' dangerouslySetInnerHTML={{ __html: item.description }}>
                          </p>
                        </div>
                      </div>

                    </SwiperSlide>
                  ))}


                </Swiper>
                <div className="flex justify-between items-center style2_slider mt-16">
                  <div className='flex gap-10 lg:gap-14'>
                    <button
                      className={`swiper-button-prev bg-white rounded-full !relative shadow border border-[#F0F0F0] px-4 py-2 ${isBeginning ? "opacity-100 cursor-not-allowed" : ""
                        }`}
                      disabled={isBeginning}
                    >
                    </button>

                    <button
                      className={`swiper-button-next bg-white rounded-full !relative shadow border border-[#F0F0F0] px-4 py-2 ${isEnd ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      disabled={isEnd}
                    >
                      </button>
                  </div>
                  <div>
                    <div className="custom-pagination4 flex justify-start mb-3 space-x-2"></div>

                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>

      </section>

    </>
  )
}



export const Economic = () => {
  const heading = "Economic Impact & Community Development"
  const text = [" Our goal is to create a legacy of environmental preservation without taking from future generations. Our vision is to foster ‘billionaires’ of natural wealth by ensuring sustainable prosperity and environmental protection."]
  const boxslider = [
    {
      image: icon1,
      heading: "Employment Opportunities",
      description: 'Direct and indirect job creation through farming, processing, and transportation.',
    },
    {
      image: icon2,
      heading: "Market Linkages",
      description: 'Establishing supply chains for domestic and export markets.',
    },
    {
      image: icon3,
      heading: "Agro-Processing Industries",
      description: 'Value addition through fodder pellet production and silage making.',
    },
    {
      image: icon1,
      heading: "Building <span style='color:#5CA9A9'>Ecosystems</span>",
      description: 'Through Afforestation, Reforestation & Revegatation',
    },
    {
      image: icon1,
      heading: "Fight <span style='color:#5CA9A9'>Climate Change</span> ",
      description: 'Improving soil health, sequestering carbon, and promoting biodiversity.',
    },
    {
      image: icon1,
      heading: "Preserve the Soil for <span style='color:#5CA9A9'>Future Generations:</span> ",
      description: 'Protecting the soil from degradation, deterioration, and erosion.',
    },
  ]
  return (
    <>
      <section
        className=" bg-white pt-16 pb-8 lg:pt-16 lg:pb-16 outer-arrow left-outer green_icon_slider outer_hide_slider" >
        <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>
            <div className='w-full lg:w-3/12 '>
              <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-normal  w-full">
                {heading}
              </h2>

            </div>

            <div className='w-full lg:w-9/12'>

              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
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
                    <div className='w-full  flex text-white bg-[#1A3232] rounded-xl   py-8  px-10 lg:px-8 md:py-12 mb-5 h-80 item_slider'>
                      <div className='lg:w-12/12 mx-auto'>
                        <div className='mb-4'>
                          <Image src={item.image} alt='icon' className='w-10 lg:w-[35px] lg:h-[35px]' />
                        </div>
                        <h2 className='text-2xl font-light pb-6' dangerouslySetInnerHTML={{ __html: item.heading }}></h2>

                        <p className='text-sm lg:text-[15] font-light italic' dangerouslySetInnerHTML={{ __html: item.description }}>
                        </p>
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
  )
}


