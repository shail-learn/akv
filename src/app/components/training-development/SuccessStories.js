"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight} from "react-icons/bs";

import story1 from "../../../assets/images/training-development/story1.webp";
import story2 from "../../../assets/images/training-development/story2.webp";
import story3 from "../../../assets/images/training-development/story3.webp";
import Image from "next/image";


export const SuccessStories = () => {
    const stories = [
        {
            image: story1,
            title: "From Learner to Agripreneur",
            name: "Rajesh Sharma",
            description:
                "Before joining, I struggled with low crop yields. Now, using precision agriculture, my farm’s output has increased by 40%!",
        },
        {
            image: story2,
            title: "Women in Farming",
            name: "Priya Verma",
            description:
                "I attended the eco-tourism workshop, and today I run a profitable organic farm stay, attracting nature lovers from all over!",
        },
        {
            image: story3,
            title: "Future of Farming",
            name: "Drone Pilot Anil Kumar",
            description:
                "I never imagined using drones in agriculture! The training helped me specialize in farm surveillance and irrigation planning.",
        },
        {
            image: story1,
            title: "From Learner to Agripreneur",
            name: "Rajesh Sharma",
            description:
                "Before joining, I struggled with low crop yields. Now, using precision agriculture, my farm’s output has increased by 40%!",
        },
    ];
    return (
        <>
            <section className='pt-8 pb-6 lg:pt-12 lg:pb-8'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
                    <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium text-center redhat text-[#1F1E17] mb-6">Success Stories</h2>

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
                                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                                        <Image
                                            src={story.image}
                                            alt={story.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/70 flex flex-col justify-end p-6 text-white">
                                            <h3 className="text-xl md:text-2xl font-light my-4">{story.title}</h3>
                                            <p className="text-xl md:text-2xl font-medium">{story.name}</p>
                                            <p className="text-[15px] my-4 redhat font-normal">{story.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="style2_slider flex items-center justify-between flex-row-reverse pt-4">
                            <div className="flex items-center gap-6">
                                <button className="prev-btn bg-white shadow-md rounded-full p-2 hover:bg-gray-200 z-10">
                                    <BsChevronLeft  className="w-6 h-6 text-gray-700" />
                                </button>
                                <button className="next-btn  bg-white shadow-md rounded-full p-2 hover:bg-gray-200 z-10">
                                    <BsChevronRight  className="w-6 h-6 text-gray-700" />
                                </button>
                            </div>
                            <div className="custom-pagination flex justify-start mt-4 space-x-2"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
