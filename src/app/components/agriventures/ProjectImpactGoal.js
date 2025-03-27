"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Grid } from 'swiper/modules';

import 'swiper/css/grid';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import image1 from "../../../assets/images/about/image3.webp";
import image2 from "../../../assets/images/about/image4.webp";
import image3 from "../../../assets/images/about/image5.webp";
import banner from "../../../assets/images/about/tractor.webp";
import bulletpoint from "../../../assets/images/about/point.svg";




import Image from 'next/image';

export const Project = () => {
    const project = [
        {
            subtitle: 'Our Projects',
            heading: 'Agroforestry Initiatives',
            info: "Agroforestry is at the heart of A&M Agriventures. We integrate trees into farmland, creating a harmonious balance between agriculture and forestry.",
            description: `
            <h3>Key Achievements:</h3><ul><li>Planted over 200,000 trees across 400 acres in Sehore District, Madhya Pradesh.
            </li><li>Species include sandalwood, teak, bamboo, rosewood, and medicinal plants.</li><li>Created dedicated spaces like the Shri Tridev Triveni Vatika and Shri Dhanvantri Vatika for spiritual, medicinal, and ecological benefits.</li>
            </ul><h3>Technologies Used:</h3><ul><li>GPS-based mapping, drones for monitoring, and AI robotics for precision agriculture.</li><li>Soil testing labs and real-time monitoring systems for efficient land management.</li>   </ul>
            `,
            image1: image1,
            image2: image2,
        },
        {
            subtitle: 'Our Projects',
            heading: 'Agroforestry Initiatives',
            info: "Agroforestry is at the heart of A&M Agriventures. We integrate trees into farmland, creating a harmonious balance between agriculture and forestry.",
            description: `
            <h3>Key Achievements:</h3><ul><li>Planted over 200,000 trees across 400 acres in Sehore District, Madhya Pradesh.
            </li><li>Species include sandalwood, teak, bamboo, rosewood, and medicinal plants.</li><li>Created dedicated spaces like the Shri Tridev Triveni Vatika and Shri Dhanvantri Vatika for spiritual, medicinal, and ecological benefits.</li>
            </ul><h3>Technologies Used:</h3><ul><li>GPS-based mapping, drones for monitoring, and AI robotics for precision agriculture.</li><li>Soil testing labs and real-time monitoring systems for efficient land management.</li>   </ul>
            `,
            image1: image1,
            image2: image2,
        },
        {
            subtitle: 'Our Projects',
            heading: 'Agroforestry Initiatives',
            info: "Agroforestry is at the heart of A&M Agriventures. We integrate trees into farmland, creating a harmonious balance between agriculture and forestry.",
            description: `
            <h3>Key Achievements:</h3><ul><li>Planted over 200,000 trees across 400 acres in Sehore District, Madhya Pradesh.
            </li><li>Species include sandalwood, teak, bamboo, rosewood, and medicinal plants.</li><li>Created dedicated spaces like the Shri Tridev Triveni Vatika and Shri Dhanvantri Vatika for spiritual, medicinal, and ecological benefits.</li>
            </ul><h3>Technologies Used:</h3><ul><li>GPS-based mapping, drones for monitoring, and AI robotics for precision agriculture.</li><li>Soil testing labs and real-time monitoring systems for efficient land management.</li>   </ul>
            `,
            image1: image1,
            image2: image2,
        },
    ]

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };


    return (
        <>
            <section className='relative text-center md:text-left pb-10'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='flex md:flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
                        <Swiper
                            pagination={pagination}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper bullet_number"
                        >
                            {project.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='flex md:flex-col flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12 pb-14 lg:pb-32'>
                                        <div className='lg:w-6/12  w-full  w-12/12 relative'>
                                            <Image className='w-full h-full rounded-xl' src={item.image1} alt='banner' />
                                            <Image className='absolute -bottom-[100px] left-0 rounded-full border-[8px] border-white' width={200} height={200} src={item.image2} alt='banner' />
                                        </div>

                                        <div className='lg:w-6/12 mt-32 md:mt-4 w-full  w-12/12'>
                                            <h3 className='text-xl font-medium'>{item.subtitle}</h3>
                                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-black mt-4 mb-6'>{item.heading}</h2>
                                            <p className='text-black text-base text-justify redhat mb-10' dangerouslySetInnerHTML={{ __html: item.info }}>
                                            </p>
                                            <div className='description_project redhat mb-10' dangerouslySetInnerHTML={{ __html: item.description }}>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>



                    </div>
                </div>
            </section>

        </>
    )
}




export const Impact = () => {
    const heading = "Our Impact"
    const impactData = [
        {
            title: "Environmental Contributions",
            description: `<h3>Carbon Sequestration:</h3> <p>Reduced temperatures by 3–5°C in project areas
            through large-scale afforestation</p> <h3>Biodiversity Conservation:</h3> <p>Reintroduced native species and restored
            degraded lands.</p>`,

        },
        {
            title: "Community Empowerment",
            description: `<h3>Created over 200 direct jobs, with 50%
            participation from women.</h3>  <h3>Conducted agricultural training programs
            and health awareness workshops for rural
            communities.</h3>`,
        },
        {
            title: "Socio-Economic Growth",
            description: `<h3>Provided sustainable income sources for
            farmers through contract farming.</h3>  <h3>Promoted local arts and crafts through
            agro-tourism initiatives.</h3>`,
        },
        {
            title: "Environmental Contributions",
            description: `<h3>Carbon Sequestration:</h3> <p>Reduced temperatures by 3–5°C in project areas
            through large-scale afforestation</p> <h3>Biodiversity Conservation:</h3> <p>Reintroduced native species and restored
            degraded lands.</p>`,

        },
        {
            title: "Community Empowerment",
            description: `<h3>Created over 200 direct jobs, with 50%
            participation from women.</h3>  <h3>Conducted agricultural training programs
            and health awareness workshops for rural
            communities.</h3>`,
        },
        {
            title: "Socio-Economic Growth",
            description: `<h3>Provided sustainable income sources for
            farmers through contract farming.</h3>  <h3>Promoted local arts and crafts through
            agro-tourism initiatives.</h3>`,
        },


    ];
    const containerRef = useRef(null);
    return (
        <>

            <section
                className=" bg-[#1B453C] pt-0 pb-14 lg:pt-0 lg:pb-0">
                <div className='mx-auto max-full flex flex-wrap md:flex-nowrap gap-0 md:gap-12'>
                    <div className='w-full md:w-6/12'>
                        <Image className='h-full w-full' src={image3} alt="banner" />

                    </div>
                    <div className='w-full md:w-6/12'>
                        <h2 className="lg:leading-snug text-white redhat mb-4 pt-10 text-center md:text-left text-3xl md:text-4xl  font-medium  w-full"> {heading}</h2>

                        <div ref={containerRef} className='custom_left_scroll mr-6
          overflow-y-scroll   h-[800px]' >
                            {impactData.map((impact, index) => (
                                <div key={index} className="p-4">
                                    <div className=" flex gap-4 lg:gap-8">
                                        <div className='text-white mt-1'>
                                            <span className='text-sm redhat opacity-70'>{(index + 1).toString().padStart(2, "0")}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl lg:text-2xl redhat text-white font-semibold">
                                                {impact.title}</h3>
                                            {/* <p className="mt-2 text-gray-300">{impact.description}</p> */}

                                            <div className='text-white opacity-70 impact_d text-base redhat' dangerouslySetInnerHTML={{ __html: impact.description }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}



export const FeatureGoal = () => {
    const heading = "Future Goals"
    const goal = [
        {
            year: "2024–2030",
            title: "Short-Term Plans",
            description: `<ul><li>Expand agroforestry projects to cover 5,000+ acres.</li><li>Launch the "Purnima Project" – an online platform for sustainable trade of farm produce.</li><li>Establish eco-tourism centers with wellness facilities.</li></ul>`
        },
        {
            year: "2030–2050",
            title: " Long-Term Vision",
            description: `<ul><li>Green 20,000 acres of land.</li><li>Introduce carbon credit programs to incentivize sustainable farming.</li><li>Develop automated green zones and smart farming clusters across India</li></ul>`
        },
        {
            year: "2024–2030",
            title: "Short-Term Plans",
            description: `<ul><li>Expand agroforestry projects to cover 5,000+ acres.</li><li>Launch the "Purnima Project" – an online platform for sustainable trade of farm produce.</li></ul>`
        },
    ]
    return (
        <>
            <section className='relative text-center md:text-left pt-12 pb-12 overflow-hidden lg:pt-20 lg:pb-24' style={{ background: `url(${banner.src})center center / cover no-repeat` }}>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative'>
                    <h2 className='text-3xl text-center md:leading-[1.3] md:text-4xl font-medium redhat text-black mt-4 mb-12 lg:mb-16'>{heading}</h2>
                    <div className='border-full'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                            }}
                            className="mySwiper"
                        >
                            {goal.map((item, index) => (
                                <SwiperSlide key={index} className='bullet_point arrow_circle'>
                                    <div className='lg:inline-block text-center'>
                                        <Image className='mx-auto mb-4' src={bulletpoint} alt='icon' />
                                        <h3 className='text-2xl lg:text-3xl font-medium mb-2 text-[#1F4E3D]'>({item.year})</h3>
                                    </div>
                                    <h4 className='text-lg lg:text-xl redhat font-semibold mb-4 text-[#1F4E3D]'>{item.title}</h4>
                                    <div className='text-black opacity-75 redhat' dangerouslySetInnerHTML={{ __html: item.description }} />
                                </SwiperSlide>
                            ))}


                        </Swiper>
                    </div>
                </div>

            </section>

        </>
    )
}
