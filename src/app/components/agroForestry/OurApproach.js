"use client"
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import icon1 from "../../../assets/images/business/icons/eco-friendly.svg";
import icon2 from "../../../assets/images/business/icons/community.svg";
import icon3 from "../../../assets/images/business/icons/renewable.svg";
import icon4 from "../../../assets/images/business/icons/icon4.svg";
import icon5 from "../../../assets/images/business/icons/icon5.svg";
import icon6 from "../../../assets/images/business/icons/icon6.svg";

import banner from "../../../assets/images/business/Banner-Agroforestry.webp";


export const OurApproach = () => {
  const heading = " Our Approach to Agroforestry"
  const shortdescription = "Our mission is built on six core pillars:"
  const text = [" Our goal is to create a legacy of environmental preservation without taking from future generations. Our vision is to foster ‘billionaires’ of natural wealth by ensuring sustainable prosperity and environmental protection."]


  const boxslider = [
    {
      image: icon1,
      heading: "Building  Ecosystem",
      description: 'Through Afforestation, Reforestation & Revegatation',
    },
    {
      image: icon2,
      heading: "Fight  Climate Change",
      description: 'Improving soil health, sequestering carbon, and promoting biodiversity.',
    },
    {
      image: icon3,
      heading: "Preserve the Soil for  Future Generations:",
      description: 'Protecting the soil from degradation, deterioration, and erosion.',
    },
    {
      image: icon4,
      heading: "Empowering   Rural Communities ",
      description: 'Through education, training, and sustainable livelihood opportunities, we uplift farmers and foster self-reliance.      ',
    },
    {
      image: icon5,
      heading: "Promoting   Regenerative Agriculture      ",
      description: 'We champion farming practices that restore natural cycles, enrich the land, and reduce chemical dependency.      ',
    },
    {
      image: icon6,
      heading: "Conserving   Water Resources      ",
      description: 'We prioritize efficient water use, rainwater harvesting, and watershed development to ensure long-term water security.',
    },

  ]
  return (
    <>
      <section
        className=" bg-white   pt-10 pb-8 lg:pt-14 lg:pb-14 outer-arrow left-outer green_icon_slider outer_hide_slider active_gold" >
        <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>
            <div className='w-full lg:w-3/12 '>
              <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  lg:text-[40px] font-semibold  w-full">
                {heading}
              </h2>
              <p className='text-base md:text-[17px] text-center md:text-left'>{shortdescription}</p>
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
                    <div className='w-full item-center flex text-white bg-[#1A3232] rounded-3xl items-center py-8  px-10 lg:px-8 md:py-10 mb-5 item_slider'>
                      <div className='lg:w-12/12 mx-auto'>
                        <div className='mb-6'>
                          <Image src={item.image} alt='icon' className='w-14 lg:w-[50px] lg:h-[50px]' />
                        </div>
                        <h2 className='text-2xl md:text-[26px] font-medium pb-6'>{item.heading}</h2>

                        <p className='text-base text-justify lg:text-[17px] font-normal'>{item.description}</p>
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



export const Plantbanner = () => {

  return (
    <>
      <section>
        <Image className='w-full h-full' alt="plant banner" src={banner} />
      </section>
    </>
  )

}