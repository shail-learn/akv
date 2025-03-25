"use client"
import React from 'react'
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/guava/banner.webp";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Grow High-Quality Guava with Atulye Krishi Vana!`,
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
                className=" bg-[#D9D9D9A6] pt-12 pb-12 lg:pt-20 lg:pb-20 outer-arrow left-outer green_icon_slider outer_hide_slider" >
                <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-4 lg:px-2 '>
                    <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>
                        <div className='w-full md:w-4/12 '>
                            <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-normal  w-full">
                                {heading}
                            </h2>

                            <p className='italic text-sm text-center md:text-left'>{shortdescription}</p>
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



export const Climate = () => {
    return (
        <>Climate</>
    )
}

