"use client"
import React, { useEffect, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export const Greenslider = ({ title, subtitle, data }) => {
    return (
        <>

            <section
                className=" bg-[#D9D9D9A6] pt-12 pb-12 lg:pt-20 lg:pb-20 outer-arrow left-outer green_icon_slider outer_hide_slider gray_arrow_fade" >
                <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-4 lg:px-2 '>
                    <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>
                        <div className='w-full md:w-4/12 '>
                            <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                                {title}
                            </h2>
                            <p className='text-sm text-justify'>{subtitle}</p>
                        </div>

                        <div className='w-full md:w-8/12'>

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

                                {data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='w-full  flex text-white bg-[#1A3232] rounded-2xl py-8 px-10 lg:px-8 md:py-8 mb-5 h-48 item_slider'>
                                            <div className='lg:w-12/12 mx-auto'>
                                                <h2 className='text-[20px] font-light pb-6' dangerouslySetInnerHTML={{ __html: item.heading }}></h2>
                                                <p className='text-sm lg:text-[15] font-light' dangerouslySetInnerHTML={{ __html: item.description }}>
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





export const Singleslider = ({ data, background }) => {
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
                className=" bg-white py-24 lg:py-36 " style={{ background: `url(${background.src})center center / cover no-repeat` }}>
                <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-2 '>
                    <div className='w-full relative'>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}

                            slidesPerView={1}
                            spaceBetween={10}
                            navigation={true}
                            pagination={{
                                el: ".custom-pagination4",
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
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
                                    slidesPerView: 1,
                                    spaceBetween: 60,
                                },

                            }}

                            className="mySwiper2 !px-14"
                        >

                            {data.map((item, index) => (
                                <SwiperSlide key={index}>

                                    <div className='flex flex-wrap justify-between lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>

                                        <div className='w-full lg:w-5/12 '>

                                            <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                                                {item.title}
                                            </h2>
                                            <p className='text-sm md:text-[15px] text-center font-light md:text-left text-white '>{item.info}</p>
                                        </div>

                                        <div className='w-full lg:w-6/12'>
                                            <div className='w-full flex text-white bg-white backdrop-blur bg-opacity-20 rounded-xl  p-4 lg:p-6 '>

                                                <div className='lg:w-12/12 mx-auto w-full'>
                                                    <div className='mb-4'>
                                                        <Image src={item.image} alt='icon' className='w-full h-full rounded-xl' />
                                                    </div>
                                                    <h2 className='text-2xl font-normal pb-4' dangerouslySetInnerHTML={{ __html: item.heading }}></h2>

                                                    <ul className="text-sm lg:text-[15px] leading-6 font-extralight list-disc pl-5 text-white">
                                                        {item.description.map((point, idx) => (
                                                            <li key={idx}>{point}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                        <div className="flex justify-between items-center style2_slider mt-16">
                            <div className='flex gap-10 lg:gap-14'>

                            </div>
                            <div>
                                <div className="custom-pagination4 flex justify-start mb-3 space-x-2"></div>

                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}




export const Greenshalfslider = ({data,info,title}) => {
  return (
    <>
    <section
        className=" pt-14 pb-16 lg:pt-16 lg:pb-20 vision-sec bg-[#D9D9D9A6] relative hide_title_slider scale_slider  green-arrow " >
        <div className="absolute bottom-0 left-0 h-1/3  bg-white w-full"> </div>
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
          <h2 className="lg:leading-snug text-[#1B453C] redhat mb-7 text-center text-3xl md:text-4xl  font-medium  w-full">
            {title}</h2>
          <div className='lg:w-7/12 mx-auto text-center'>
            <p
              className="text-[#1B453C] text-sm lg:text-base font-light"
              dangerouslySetInnerHTML={{ __html: info }}
            ></p>
          </div>

        </div>
        <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-10 '>
          <div className='  px-0 md:px-6 lg:px-2 relative z-1 '>
            <div className='mx-auto  w-12/12'>
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
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 80,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 60,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 70,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 90,
                  },
                }}

                className="mySwiper2 outer-arrow"
              >

                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='w-full  item-center flex text-center items-center rounded-[20px] p-12 px-6 !bg-[#8EB558] item_slider' style={{ boxShadow: "4px 4px 4px 0px #0000004A" }}>
                      <div className='lg:w-12/12 mx-auto'>
                        <h3 className='text-md !text-[#1B453C] redhat text-2xl pb-2 font-semibold'>{item.title}</h3>
                        <p className='text-md !text-[#1B453C] font-normal'>{item.description}</p>
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
