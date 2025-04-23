'use client'
import React, {useEffect , useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const BigSlider = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0)

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
    <div className="relative px-4 py-10 expant_slider img_big_slide items-end-slider" >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop
        centeredSlides={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}

        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{
            el: ".custom-pagination3",
            clickable: true,
        }}
        className="pb-16"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`rounded-xl shadow-md overflow-hidden bg-white flex flex-col h-full transition-all duration-300
                ${
                  index === activeIndex
                    ? 'lg:scale-100 md:scale-100'
                    : 'scale-100'
                }`}
            >
              <div className="relative h-[180px] md:h-[200px] lg:h-[230px] w-full black_fade">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 py-8">
                <h3 className="text-lg absolute -mt-20 font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base redhat text-black mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="style2_slider flex items-center justify-between flex-row-reverse pt-4">

        <div className="flex items-center gap-6">
          <button className="prev-btn bg-white shadow-md rounded-full p-2 hover:bg-gray-200 z-10">
            <BsChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button className="next-btn bg-white shadow-md rounded-full p-2 hover:bg-gray-200 z-10">
            <BsChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <div className="custom-pagination3 flex justify-start mt-4 space-x-2"></div>
      </div>
    </div>
  )
}

export default BigSlider
