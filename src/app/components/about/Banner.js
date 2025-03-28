"use client"
import React from 'react'
import banner from "../../../assets/images/about/banner.webp";
import bgbanner from "../../../assets/images/about/bgbanner.webp";

import Link from 'next/link';
import aboutSlider from '../../../api/aboutSlider.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import BannerPage from '../BannerPage';
export const Banner = () => {
    const text = {
        vedio : "https://cruxcreativedemo2.com/web-image/about-vedio.mp4",
        heading: `Our Essence: <span style="color:#48A490">Who We Are</span>`,
        title: 'Atulye Krishi Vana is a pioneering initiative dedicated to reshaping the future of agroforestry. By combining innovative, sustainable practices with a strong focus on community empowerment, we aim to restore ecosystems, uplift rural livelihoods, and foster long-term prosperity. Our work goes beyond agriculture – it’s a movement to create a greener, more resilient world.',

         link : "/contact",
         button:"Read More"
    }
    return (
        <>
           <BannerPage heading={text.heading}  title={text.title} video={text.vedio} button={text.button} link={text.link} />
        </>
    )
}
export const AboutSlider = () => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                slidesPerView={1}
                spaceBetween={0}
                // navigation={true}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                }}
                className="mySwiper2"
            >
                {aboutSlider.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-full  relative'>
                            <Image src={item.image} alt="banner" width="600" height="600" className='w-full h-full' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}



export const UnderBanner = () => {
    const heading = "Cultivating Sustainable Future";
    const description = "Founded in 2018,our mission is to revolutionize forestry and farming by creating the world’s most sustainable and impactful forest systems. Through innovative techniques and unwavering dedication, we proudly protect life and vital resources. Our ultimate promise is to nurture an environment that breathes fresh air, flows with crystal-clear water, and sustains life for generations to come. <br><br> Inspired by the primordial sound of the universe, often considered the original vibration from which all creation arose, we believe in creating lasting contributions to Earth and its communities. Just as sound needs a medium to travel and leave its mark, we aim to build tangible models of sustainability that resonate with nature, fostering harmony and well-being for all."
    const pageUrl = "/";
    return (
        <>
            <section className='bg-cover bg-bottom md:bg-center relative text-center md:text-left -mt-10 pt-16 pb-16 lg:pt-36 lg:pb-36' style={{ background: `url(${bgbanner.src})center / cover no-repeat` }}>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
                        <div className='lg:w-5/12  w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-white mb-6'>{heading}</h2>
                            <p className='text-white text-sm font-light text-light text-justify italic' dangerouslySetInnerHTML={{ __html: description }}>

                            </p>
                            <div className='pt-12 md:pt-16'>
                                <Link href={pageUrl} className='text-white bg-transparent border border-white rounded-full p-3 px-20 hover:bg-white hover:text-teal-900 transition delay-100 duration-100 ease-in-out'>Read More</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
