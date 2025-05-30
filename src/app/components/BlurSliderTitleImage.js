"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const BlurSliderTitleImage = ({ data, title,height }) => {
    return (
        <>
            <section className="bg-[#1B453C] py-12 md:py-20 px-4 relative">

                <div className="max-w-7xl mx-auto">
                    <h2 className='text-3xl md:text-4xl text-white font-medium pb-8 md:pb-12 text-center'>{title}</h2>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className='whychose '
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#D9D9D966] rounded-xl p-4 text-center shadow-md h-full">
                                    <h2 className="text-xl md:text-2xl font-bold text-white">{item.title}</h2>
                                    <p className={`text-base text-white mt-1 ${height}`}>{item.subtitle}</p>
                                    <div className="mt-3">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full md:h-48 object-cover rounded shadow-sm"
                                        />
                                    </div>
                                    {item.scientific &&
                                        <p className="text-base font-light text-white mt-3">
                                            ({item.scientific})
                                        </p>
                                    }
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Custom white arrows */}
                        <div className="swiper-button-prev text-white absolute top-1/2 left-0 z-10 transform -translate-y-1/2 p-2">
                            <FaChevronLeft className='text-white' size={24} />
                        </div>
                        <div className="swiper-button-next text-white absolute top-1/2 right-0 z-10 transform -translate-y-1/2 p-2">
                            <FaChevronRight size={24} />
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
