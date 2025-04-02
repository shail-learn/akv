"use client"
import React from 'react'
import img1 from "../../../assets/images/business/slider-img.webp";
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

import banner from "../../../assets/images/business/reforest-banner.webp";

export const SliderCard = () => {
  const heading1 = "High-yield Varieties"
  const card = [
    {
        title: "Seeds",
        image: img1,
        link: "/agroForestry/mulethi",
    },
    {
        title: "Bamboo",
        image: img1,
        link: "/agroForestry/bamboo",
    },
    {
        title: "Neem",
        image: img1,
        link: "/agroForestry/neem",
    },
    {
      title: "Seeds",
      image: img1,
      link: "/agroForestry/neem",
  },
  {
    title: "Neem",
    image: img1,
    link: "/agroForestry/neem",
},
{
  title: "Neem",
  image: img1,
  link: "/agroForestry/neem",
},

]
  return (
    <section
    className=" py-8 lg:py-10  outer-arrow arrow_black expant_slider gray_circle" >

    <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-2 max-ful'>

        <div className='w-full lg:w-12/12 relative'>
        <h2 className="text-black left-2/4 top-[30px] text-center md:absolute md:text-left text-2xl  md:mb-4  lg:leading-tight  redhat  font-normal">
            {heading1}
        </h2>
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
                // autoplay={{
                //     delay: 6000,
                //     disableOnInteraction: false,
                // }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}

                className="mySwiper2"
            >

                {card.map((item, index) => (
                    <SwiperSlide key={index}>

                    <div key={index} className='w-full md:col-span-4 relative'>
                        <Image src={item.image} alt="banner" className='w-full h-full rounded-tl-3xl rounded-tr-3xl' />
                        <div className='  hidden gap-4 items-center justify-between absolute bottom-0 left-0 bg-[#719A8E] w-full md:p-4 py-2 px-4'>
                            <p className='text-white text-xl md:text-2xl'>{item.title}</p>
                             <Link href={item.link} className='text-sm border-[1px] border-[#646464] w-[150px] text-center rounded-xl p-2 hover:bg-[#1B453C] hover:text-white '>Explore More</Link>
                        </div>
                    </div>



                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='text-center mt-0 md:mt-4'>
            <Link href="#" className='text-lg font-normal text-white inline-block transition delay-100 duration-100 ease-in-out  bg-[#1B453C] w-3/4 md:w-1/3 text-center rounded-full p-3 hover:bg-[#1f2937] hover:text-white '>Visit Our Plantations</Link>
            </div>
        </div>
    </div>
</section>
  )
}


export const SliderVarieties = () => {
  const heading1 = "Community and Environmental Impact"
  const heading=" Empowering Communities:"

  const boxslider = [
    {

      description: 'Jobs Created: Over 10,000 direct and indirect employment opportunities.',
    },
    {

      description: 'Training Programs: Teaching sustainable farming practices.',
    },
    {

      description: 'Jobs Created: Over 10,000 direct and indirect employment opportunities.',
    },
    {

      description: 'Training Programs: Teaching sustainable farming practices.',
    },

  ]
    return (
      <>
         <section
      className=" pt-10 pb-6 lg:py-12 lg:pb-6 outer-arrow left-outer slider_pb0 arrow_black  " >
      <div className='mx-auto max-w-[1400px]  px-4 md:px-8 lg:px-2 '>
        <div className='flex flex-wrap lg:flex-nowrap items-center gap-0 md:gap-6 px-0 md:px-6    lg:px-2'>
          <div className='w-full  '>
            <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-0 md:mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
              {heading1}
            </h2>

          </div>
          </div>
          </div>
          </section>

      <section
      className=" bg-[#F2F2F2]   pt-10 pb-6 lg:py-12 lg:pb-6 outer-arrow left-outer slider_pb0 arrow_black active_green" >
      <div className='mx-auto max-w-[1400px]  px-4 md:px-8 lg:px-2 '>
        <div className='flex flex-wrap lg:flex-nowrap items-center gap-0 md:gap-6 px-0 md:px-6    lg:px-2'>
          <div className='w-full lg:w-3/12 '>
            <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-0 md:mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
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
                  spaceBetween: 40,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}

              className="mySwiper2"
            >

              {boxslider.map((item, index) => (
                <SwiperSlide key={index} >
                  <div className='w-full item-center flex text-[#1B453C] bg-[#E5E5E5] rounded-[38px] items-center py-8  px-10 lg:px-10 md:py-10 mb-5 item_slider h-56 md:h-72'>
                    <div className='lg:w-12/12 mx-auto'>
                      {/* <div className='mb-6'>
                        <Image src={item.image} alt='icon' className='w-14 lg:w-[50px] lg:h-[50px]' />
                      </div> */}
                      {/* <h2 className='text-xl font-normal pb-6'>{item.heading}</h2> */}

                      <p className='text-lg lg:text-[22px] font-normal'>{item.description}</p>
                    </div>
                  </div>

                </SwiperSlide>
              ))}


            </Swiper>


          </div>
        </div>

      </div>

    </section>
    <section>
      <Image src={banner} alt="images" className='w-full h-full'/>
    </section>
    </>
    )
  }
