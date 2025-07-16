"use client"
import Image from 'next/image'
import React from 'react'
import icon1 from "../../../assets/images/business/eco-friendly.svg";
import icon2 from "../../../assets/images/business/icons/icon02.svg";
import icon3 from "../../../assets/images/business/icons/icon03.svg";
import icon4 from "../../../assets/images/business/icons/icon4.svg";
import icon5 from "../../../assets/images/business/icons/icon5.svg";
import icon6 from "../../../assets/images/business/icons/icon6.svg";






import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export const Guide = () => {
  const heading = "Our Guiding Light"
  const description = "Our vision is to bring forth a thriving ecosystem that safeguards crucial resources for the coming generations. On leading the charge in eco-friendly farming and forestry techniques, we aim to stimulate massive economic influence by growing a lucrative venture worth multiple billion—a venture intertwining environmental care with wealth creation for communities scattered across India."
  const imgroup = [
    {
      img: 'https://www.akv.org.in/admin/rmimages/imagess1.webp',
    },
    {
      img: 'https://www.akv.org.in/admin/rmimages/imagess2.webp',
    },
    {
      img: 'https://www.akv.org.in/admin/rmimages/imagess3.webp',
    }
  ]
  const myStyle = {
    background: "linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 70%)"
  };

  return (
    <>
      <section
        className="py-14 lg:py-16 bg-[#4B8B8B] overflow-hidden " >


        <div className='mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-4'>
          <div className='w-full text-center'>
            <div className='mx-auto w-full lg:w-7/12'>
              <h2 className="text-white text-3xl md:text-4xl mb-6 lg:leading-tight  redhat  font-medium  w-full">{heading}</h2>
              <p className='text-[15px] text-white text-center font-light mb-10 md:mb-16'>{description}</p>
            </div>
          </div>
        </div>
        <div className='w-full px-6'>
          <div className='lg:grid flex flex-wrap gap-4 [min-width:1240px]:gap-1 grid-cols-1 lg:grid-cols-3'>
            {imgroup.map((item, index) => {
              return (

                <div key={index} className='grid items-center mb-4 md:mb-0 justify-center gap-2 '>
                  <div className='w-full text-center'>
                    <Image src={item.img} className='!w-full h-full' width="1400" height="1200" alt="icon" />
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section>
    </>
  )
}



export const Mission = () => {
  const heading = " Our Mission: Growing Sustainability, Together"
  const shortdescription = "Our mission is built on six core pillars:"
  const text = [" Our goal is to create a legacy of environmental preservation without taking from future generations. Our vision is to foster ‘billionaires’ of natural wealth by ensuring sustainable prosperity and environmental protection."]
  const boxslider = [
    {
      image: icon1,
      heading: "Building <span style='color:#5CA9A9'>Ecosystems</span>",
      description: 'Through Afforestation, Reforestation & Revegatation',
    },
    {
      image: icon2,
      heading: "Fight <span style='color:#5CA9A9'>Climate Change</span> ",
      description: 'Improving soil health, sequestering carbon, and promoting biodiversity.',
    },
    {
      image: icon3,
      heading: "Preserve the Soil for <span style='color:#5CA9A9'>Future Generations:</span> ",
      description: 'Protecting the soil from degradation, deterioration, and erosion.',
    },
    {
      image: icon4,
      heading: "Empowering  <span style='color:#5CA9A9'>Rural Communities  </span>",
      description: 'Through education, training, and sustainable livelihood opportunities, we uplift farmers and foster self-reliance.      ',
    },
    {
      image: icon5,
      heading: "Promoting  <span style='color:#5CA9A9'>Regenerative Agriculture      </span> ",
      description: 'We champion farming practices that restore natural cycles, enrich the land, and reduce chemical dependency.      ',
    },
    {
      image: icon6,
      heading: "Conserving  <span style='color:#5CA9A9'>Water Resources      </span> ",
      description: 'We prioritize efficient water use, rainwater harvesting, and watershed development to ensure long-term water security.',
    },
  ]
  return (
    <>
      <section
        className=" bg-white pt-0 pb-8 lg:pt-20 lg:pb-20 outer-arrow left-outer green_icon_slider outer_hide_slider" >
        <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>
            <div className='w-full lg:w-3/12 '>
              <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                {heading}
              </h2>

              <p className='text-base text-center md:text-left'>{shortdescription}</p>
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
                    <div className='w-full  flex text-white bg-[#1A3232] rounded-xl   py-8  px-10 lg:px-8 md:py-12 mb-5 h-96 item_slider'>
                      <div className='lg:w-12/12 mx-auto'>
                        <div className='mb-4'>
                          <Image src={item.image} alt='icon' className='w-10 lg:w-[35px] lg:h-[35px]' />
                        </div>
                        <h2 className='text-2xl font-medium pb-6' dangerouslySetInnerHTML={{ __html: item.heading }}></h2>

                        <p className='text-sm lg:text-base font-light' dangerouslySetInnerHTML={{ __html: item.description }}>
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
