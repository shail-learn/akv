import React, {useEffect , useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination, Navigation, Autoplay } from 'swiper/modules';

export const SliderBlur = ({boxslider=[], font}) => {
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
            <div className='w-full relative'>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}

                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{
                        el: ".custom-pagination4",
                        clickable: true,
                    }}
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
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }}

                    className="mySwiper2"
                >

                    {boxslider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-full flex text-white bg-white backdrop-blur bg-opacity-20 rounded-xl  p-4 lg:p-6 h-96'>
                                <div className='lg:w-12/12 mx-auto w-full'>
                                    <div className='mb-4'>
                                        <Image src={item.image} alt='icon' className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-2xl font-normal pb-4' dangerouslySetInnerHTML={{ __html: item.heading }}></h2>

                                    <p className={`text-sm lg:text-[16px] font-light ${font}`} dangerouslySetInnerHTML={{ __html: item.description }}>
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}


                </Swiper>
                <div className="flex justify-between items-center style2_slider mt-16">
                    <div className='flex gap-10 lg:gap-14'>
                        <button
                            className={`swiper-button-prev bg-white rounded-full !relative shadow border border-[#F0F0F0] px-4 py-2 ${isBeginning ? "opacity-100 cursor-not-allowed" : ""
                                }`}
                            disabled={isBeginning}
                        >
                        </button>

                        <button
                            className={`swiper-button-next bg-white rounded-full !relative shadow border border-[#F0F0F0] px-4 py-2 ${isEnd ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={isEnd}
                        >
                        </button>
                    </div>
                    <div>
                        <div className="custom-pagination4 flex justify-start mb-3 space-x-2"></div>

                    </div>
                </div>
            </div>

        </>
    )
}
