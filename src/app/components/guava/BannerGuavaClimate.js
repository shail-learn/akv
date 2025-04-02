"use client"
import React, { useEffect, useState } from 'react';
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/guava/banner.webp";
import { Autoplay, Navigation,Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import impact1 from "../../../assets/images/guava/fresh-green-leaf.webp";
import bgimpact from "../../../assets/images/guava/plant-growing.webp";

export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Grow High-Quality Guava <br/> with Atulye Krishi Vana!`,
        title: "At Atulye Krishi Vana, we are committed to promoting high-quality guava farming using sustainable and innovative agricultural techniques. Guava (Psidium guajava L.) is a high-yielding, climate-resilient fruit crop known for its nutritional value and commercial importance. Our expertise ensures better yield, disease resistance, and high market value for guava farmers.",
        opacity: "opacity-15"
    };
    return (
        <>
            <BannerPage
                heading={text.heading}
                title={text.title}
                opacity={text.opacity}
                banner={text.banner}
                classname={text.className}

            />
        </>
    )

}


export const Guava = () => {
    const heading = "Top Guava Varieties for Commercial Cultivation"
    const shortdescription = "Guava farming requires selecting the right variety to maximize production based on climatic conditions and market demand"
    const boxslider = [
        {
            heading: "Allahabad",
            description: 'Famous for its sweet flavor and smooth texture.',
        },
        {
            heading: "Lucknow 46 & 49",
            description: 'Widely grown for high yield and good disease resistance',
        },
        {
            heading: "Banaras & Baptla",
            description: 'Suitable for table and processing purposes',
        },
        {
            heading: "Allahabad",
            description: 'Famous for its sweet flavor and smooth texture.',
        },
        {
            heading: "Lucknow 46 & 49",
            description: 'Widely grown for high yield and good disease resistance',
        },
    ]
    return (
        <>
            <section
                className=" bg-[#D9D9D9A6] pt-12 pb-12 lg:pt-20 lg:pb-20 outer-arrow left-outer green_icon_slider outer_hide_slider gray_arrow_fade" >
                <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-4 lg:px-2 '>
                    <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>
                        <div className='w-full md:w-4/12 '>
                            <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                                {heading}
                            </h2>
                            <p className='text-sm text-justify'>{shortdescription}</p>
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

                                {boxslider.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='w-full  flex text-white bg-[#1A3232] rounded-md py-8 px-10 lg:px-8 md:py-8 mb-5 h-48 item_slider'>
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



export const Climate = () => {
    const heading = "Ideal Soil & Climate for farming"
    const text = ["Guava is a hardy fruit crop that adapts well to both wet and dry regions. However, for optimum growth and higher yields, specific soil and climatic conditions are preferable."]
    const boxslider = [
      {
        image: impact1,
        heading: "Climate Requirements ",
        description: `Grows well upto 1000m above sea level.<br/>
        Requires moderate temp. with proper irrigation.<br/>
        Tolerates drought but performs best under well managed irrigation.`,
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
        className=" bg-white py-24 lg:py-36 " style={{ background: `url(${bgimpact.src})center center / cover no-repeat` }}>
        <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-2 '>
          <div className='flex flex-wrap justify-between lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>
            <div className='w-full lg:w-3/12 '>
              <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                {heading}
              </h2>
              <p className='text-sm md:text-[15px] text-center font-light md:text-left text-white '>{text}</p>

            </div>

            <div className='w-full lg:w-7/12'>
              <div className='w-full relative'>
                <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}

                  slidesPerView={1}
                  spaceBetween={10}

                  pagination={{
                    el: ".custom-pagination4",
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
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
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView:1,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                  }}

                  className="mySwiper2"
                >

                  {boxslider.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className='w-full flex text-white bg-white backdrop-blur bg-opacity-20 rounded-xl  p-4 lg:p-6 '>
                        <div className='lg:w-12/12 mx-auto w-full'>
                          <div className='mb-4'>
                            <Image src={item.image} alt='icon' className='w-full h-full rounded-xl' />
                          </div>
                          <h2 className='text-2xl font-normal pb-4' dangerouslySetInnerHTML={{ __html: item.heading }}></h2>

                          <p className='text-sm lg:text-[15px] leading-6 font-extralight' dangerouslySetInnerHTML={{ __html: item.description }}>
                          </p>
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
          </div>

        </div>

      </section>

        </>
    )
}

