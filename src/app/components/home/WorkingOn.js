"use client"
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import icon1 from "../../../assets/images/home/logo2.png";
import icon2 from "../../../assets/images/home/logo/brigu.svg";
import icon3 from "../../../assets/images/home/logo/sushma-sang..svg";
import icon4 from "../../../assets/images/home/logo/aushadh-manav.svg";
import icon5 from "../../../assets/images/home/logo/yagyashala.svg";
import icon6 from "../../../assets/images/home/logo/panchvatika.svg";


export const WorkingOn = () => {
  const text = [" Our goal is to create a legacy of environmental preservation without taking from future generations. Our vision is to foster ‘billionaires’ of natural wealth by ensuring sustainable prosperity and environmental protection."]


  const boxslider = [
    {
      image: icon2,
      description: `<b>Shri Bhrigu Vana ,Navagraha, Rashi, Nakshatra Vatika :</b> <br/> These trees are of high medicinal, social, aesthetic, and economic value.`,
    },
    {
      image: icon3,
      description: `<b>Sushma Sangrahalaya :</b><br/> This is an endangered species garden preserving several tree species in a natural way.`,
    },
    {
      image: icon4,
      description: `<b>Aushadh Manav :</b><br/> A human body organ garden, that has herbs used for the treatment of various diseases of different body organs.`,
    },
    {
      image: icon5,

      description: `<b>Shringi Yagyashala :</b><br/> Yagyashala is a unique place for gathering around five plants. Yagyashala is located around these plants and can accommodate 30 persons.`,
    },
    {
      image: icon6,
      description: `<b>Shri Tulsidas Ji Panchvati Vatika :</b><br/> A combination of 5 trees Pipal, Bargad, Bael, Aonla, Ashok. Brahma is at the root, Vishnu is in the bark and Sankara is in the branches.`,
    },

  ]
  return (
    <>
      <section
        className=" bg-[#ECF7F3]   pt-12 pb-12 lg:pt-16 lg:pb-18 working-sec" >
        <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-2 '>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6 lg:px-2'>
            <div className='w-full lg:w-3/12 '>
              <h2 className="lg:leading-snug text-black redhat lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                What We’re <br /> <span className='text-[#4C9E8C]'>Working</span> On</h2>
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
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 60,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}

                className="mySwiper2 color-logo"
              >

                {boxslider.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='w-full h-64 lg:h-60 item-center flex text-center items-center rounded-3xl px-8 lg:px-4 md:pt-5 mb-5 border-black border-[1px] item_slider relative'>
                      <div className='lg:w-12/12 mx-auto'>
                        <div className='absolute left-1/2 -translate-x-1/2 -top-8'>
                          <div className='rounded-full bg-white p-3 shadow-md'>
                          <Image src={item.image} alt='icon' className='w-12 lg:w-[40px] lg:h-[40px] mx-auto object-contain  ' />
                          </div>
                        </div>
                        <p
                          className='text-sm lg:text-[16] text-black text-justify font-normal b-600'
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></p>
                      </div>
                    </div>
                    {/* <div className='text-center mt-10'>
                      <Link href="#" className='text-[#1B453C] border border-[#1B453C] p-2 px-10 lg:px-12 hover:bg-[#2D6B5E] hover:text-white transition delay-100 duration-100 ease-in-out'>View Project</Link>
                    </div> */}
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
