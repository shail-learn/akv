"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import icon1 from "../../../assets/images/about/icon01.webp";
import icon2 from "../../../assets/images/about/icon02.webp";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export const Looking = () => {
    const box = [
        {
            text: "Expert guidance on sustainable agroforestry"
        },
        {
            text: 'Premium-quality BAMBOO saplings'
        },
        {
            text: 'Ethical and responsible sourcing of bamboo products'
        },

    ]
    const heading = `Looking to <span style="color:#2D6B5E">Grow</span> or <span style="color:#2D6B5E">Source Bamboo?</span>`
    const subtitle = "Contact Atulye Krishi Vana for:"
    return (
        <>

            <section
                className="py-12 lg:py-16 bg-white" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <h2
                        className="lg:leading-snug  text-black redhat mb-2 text-center text-3xl md:text-4xl  font-normal "
                        dangerouslySetInnerHTML={{ __html: heading }}
                    />
                    <p className='text-center text-black font-semibold mb-8 md:mb-12'>{subtitle}</p>


                    <div className='mx-auto justify-center flex flex-wrap lg:flex-nowrap gap-5 lg:gap-5'>
                        {box.map((item, index) => (
                            <div key={index} className='w-full md:w-3/12 text-black text-center grid items-center justify-center p-4 h-28 lg:h-32 border-[1px] border-[#1B453C] hover:bg-[#1B453C] hover:text-white  rounded-[30px] transition-all  duration-400'>
                                <h2 className="lg:leading-snug  poppins text-center text-sm lg:text-[15px]  font-normal  w-full">{item.text}</h2>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}



export const Faq = () => {
    const heading = "FAQs"


    const card = [
        {
            title: 'Does bamboo require a lot of water to grow?',
            description: 'Bamboo requires water for optimal growth, especially during the initial establishment phase, but it is not a water-intensive crop. Once mature, bamboo is highly drought-resistant due to its deep root system',

        },
        {
            title: 'How does bamboo compare to traditional timber trees in terms of profitability?',
            description: 'Bamboo is significantly more profitable than traditional timber trees due to its rapid growth and continuous harvest cycle. While hardwood trees like teak take 20-30 years to mature, bamboo can be harvested within 3-5 years',

        },
        {
            title: 'How can I protect my bamboo plantation from pests and diseases?',
            description: 'Bamboo is naturally resistant to most pests and diseases, but occasional issues may arise. Common pests include bamboo borers, mealybugs, and aphids, which can damage shoots and leaves.',
        },
        {
            title: 'Does bamboo require a lot of water to grow?',
            description: 'Bamboo requires water for optimal growth, especially during the initial establishment phase, but it is not a water-intensive crop. Once mature, bamboo is highly drought-resistant due to its deep root system',

        },
        {
            title: 'How does bamboo compare to traditional timber trees in terms of profitability?',
            description: 'Bamboo is significantly more profitable than traditional timber trees due to its rapid growth and continuous harvest cycle. While hardwood trees like teak take 20-30 years to mature, bamboo can be harvested within 3-5 years',

        },
    ]
    const myStyle = {
        background: "linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 70%)"
    };
    return (
        <>
            <section className='overflow-hidden'>
                <section
                    className="py-14 lg:py-16 pt-24 lg:pb-40" style={myStyle} >
                    <div className='mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2 relative'>
                        <div className='w-full text-center'>
                            <h2 className="text-[#1B453C] text-3xl md:text-4xl mb-16 lg:leading-tight  redhat  font-normal  w-full">{heading}</h2>

                            <div className='w-full mx-auto '>
                                <div className='w-full relative'>

                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={10}
                                        navigation={true}
                                        loop={true}
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
                                                slidesPerView: 3,
                                                spaceBetween: 40,
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 50,
                                            },
                                        }}

                                        className="mySwiper2 swiper_padd dark_active white_arrow black-arrow outer-arrow1"
                                    >

                                        {card.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <div
                                                    className={`lg:col-span-4 bg-white transition-all card1 duration-400 text-black p-8 w-full w-12/12    `}
                                                    style={{
                                                        boxShadow: '6px 6px 15px 0px #00000033',
                                                    }}
                                                >
                                                    <div className='grid items-center md:text-left justify-center gap-6'>
                                                        <h3 className='text-base md:text-lg text-[#1B453C]'>{item.title}</h3>
                                                        <p className='text-[15px] font-light text-black'>{item.description}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}


                                    </Swiper>

                                </div>

                            </div>
                        </div>

                        <div>
                            <Image src={icon1} alt="Banner Tree" className='lg:w-60 w-32 h-auto object-contain -bottom-16 lg:-bottom-28 absolute lg:-left-24 left-0 z-10' />
                            <Image src={icon2} alt="Banner Tree" className='lg:w-64 w-36 h-full object-contain lg:top-8 absolute left-auto  lg:-right-28 -right-4 -top-32' />
                        </div>



                    </div>
                </section>

            </section>

        </>
    )
}
