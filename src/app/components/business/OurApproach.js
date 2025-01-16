"use client"
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import icon1 from "../../../assets/images/business/eco-friendly.svg";

export const OurApproach = () => {
  const heading=" Our Approach to Agroforestry"
  const shortdescription= "Our mission is built on three core pillars:"
  const text = [" Our goal is to create a legacy of environmental preservation without taking from future generations. Our vision is to foster ‘billionaires’ of natural wealth by ensuring sustainable prosperity and environmental protection."]


  const boxslider = [
    {
      image: icon1,
      heading:"Integrated  Systems",
      description: 'We combine high-value timber crops like sandalwood and teak with intercrops like turmeric and ginger for diversified income streams.',
    },
    {
      image: icon1,
      heading:"Sustainability Practices ",
      description: 'We combine high-value timber crops like sandalwood and teak with intercrops like turmeric and ginger for diversified income streams.',
    },
    {
      image: icon1,
      heading:"Sustainability Practices ",
      description: 'We combine high-value timber crops like sandalwood and teak with intercrops like turmeric and ginger for diversified income streams.',
    },
    {
      image: icon1,
      heading:"Integrated  Systems",
      description: 'We combine high-value timber crops like sandalwood and teak with intercrops like turmeric and ginger for diversified income streams.',
    },
    {
      image: icon1,
      heading:"Sustainability Practices ",
      description: 'We combine high-value timber crops like sandalwood and teak with intercrops like turmeric and ginger for diversified income streams.',
    },
    {
      image: icon1,
      heading:"Sustainability Practices ",
      description: 'We combine high-value timber crops like sandalwood and teak with intercrops like turmeric and ginger for diversified income streams.',
    },
  ]
  return (
    <>
       <section
        className=" bg-white   pt-14 pb-14 lg:pt-14 lg:pb-14 outer-arrow left-outer green_icon_slider outer_hide_slider active_gold" >
        <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>
            <div className='w-full lg:w-3/12 '>
              <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-normal  w-full">
                {heading}
              </h2>
              <p className='italic text-sm text-center md:text-left'>{shortdescription}</p>
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
                        <h2 className='text-xl font-normal pb-6'>{item.heading}</h2>

                        <p className='text-sm lg:text-[16] font-normal'>{item.description}</p>
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
