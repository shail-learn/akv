"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SliderTwoBg({ heading, bgImage, boxslider = [],customclass }) {


    return (
        <>
            <section
                className={`bg-white pt-16 pb-16 lg:pt-20 lg:pb-20 cult_height ${customclass} `}
                style={{
                    background: `url(${bgImage?.src}) center center / cover no-repeat`,
                }}
            >
                <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2">
                    <div className="flex flex-wrap items-center gap-6 px-0 md:px-6 lg:px-2">
                        <div className="w-full lg:w-12/12">
                            <h2 className="lg:leading-snug text-white redhat mb-4 lg:mb-7 text-center text-3xl md:text-4xl font-medium w-full">
                                {heading}
                            </h2>
                        </div>
                        <div className="w-full mx-auto md:w-10/12">
                            <div className="w-full relative">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    navigation={true}
                                    modules={[Autoplay, Navigation, Pagination]}
                                    autoplay={{
                                        delay: 6000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        320: { slidesPerView: 1, spaceBetween: 100 },
                                        640: { slidesPerView: 2, spaceBetween: 40 },
                                        768: { slidesPerView: 2, spaceBetween: 80 },
                                        1024: { slidesPerView: 2, spaceBetween: 100 },
                                    }}
                                    className="mySwiper2 white_arrow outer-arrow1"
                                >
                                    {boxslider.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="w-full flex text-white bg-white backdrop-blur bg-opacity-20 rounded-2xl border border-white p-0 lg:h-[570px] pb-8">
                                                <div className="lg:w-12/12 mx-auto w-full">
                                                    <div className="mb-4">
                                                        <Image
                                                            src={item.image}
                                                            alt="icon"
                                                            className="w-full h-full rounded-2xl"
                                                        />
                                                    </div>
                                                    <div className="md:px-6 px-4">
                                                        <h2
                                                            className="text-base md:text-lg font-normal pb-4"
                                                            dangerouslySetInnerHTML={{ __html: item.heading }}
                                                        />
                                                        <p
                                                            className="text-sm lg:text-[15px] font-light"
                                                            dangerouslySetInnerHTML={{
                                                                __html: item.description,
                                                            }}
                                                        />
                                                        {item.list?.length > 0 && (
                                                            <ul className="list-disc space-y-2 pl-5">
                                                                {item.list.map((point, i) => (
                                                                    <li
                                                                        className="text-sm lg:text-[15px] font-light"
                                                                        key={i}
                                                                    >
                                                                        {point}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default SliderTwoBg