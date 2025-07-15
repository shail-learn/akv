"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ModuleSlider = ({ heading = "Success Stories", stories = [] }) => {
  if (!stories.length) return null;

  return (
    <section className='py-8 md:py-10'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium text-center redhat text-[#1F1E17] mb-12">
          {heading}
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            className="pb-10"
          >
            {stories.map((story, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover rounded-2xl"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/35 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-medium my-4">{story.title}</h3>
                    <p className="text-[15px] my-4 redhat font-normal" dangerouslySetInnerHTML={{__html: story.description}} />
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
            <div className="custom-pagination flex justify-start mt-4 space-x-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleSlider;
