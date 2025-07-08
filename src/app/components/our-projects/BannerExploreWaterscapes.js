"use client"
import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/banner.webp";
import bgstay from "../../../assets/images/projects/bg-project.webp";
import impact1 from "../../../assets/images/projects/project1.webp";
import impact2 from "../../../assets/images/projects/project2.webp";
import image1 from "../../../assets/images/projects/image1.webp";
import image2 from "../../../assets/images/projects/image2.webp";
import image3 from "../../../assets/images/projects/image3.webp";
import project20 from "../../../assets/images/projects/project-20.webp";


import { IoIosArrowRoundForward } from "react-icons/io";


import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import Link from 'next/link';
import { ExploreSlider } from '../ExploreSlider';

export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Where Nature Heals, Culture <br/> Thrives, & Communities Grow`,
        title: "Explore 21 iconic projects by Atulye Krishi Vana, designed to restore ecosystems, celebrate heritage, and nurture sustainable livelihoods. ",
        // buttonText:"Read More",
        // buttonLink:"/",
        opacity: 'opacity-50'
    }
    const heading = "What Makes AKV Projects Unique?"
    const description = "From spiritual forests to scientific innovations, each project under AKV revives not just the land—but life itself. We blend agroforestry, Ayurveda, biodiversity, and traditional wisdom into spaces that educate, nourish, and inspire."
    return (
        <>
            <BannerPage heading={text.heading} title={text.title} banner={text.banner} button={text.buttonText} link={text.buttonLink} opacity={text.opacity} />

            <section className='py-12  lg:py-16'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>

                    <div className='w-full md:w-3/4 text-center mx-auto'>
                        <h1 className='text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat mb-4 md:mb-6 text-[#1B453C]'>{heading}</h1>
                        <div className='bg-[#1B453C]  p-6 rounded-3xl'>
                            <p className='w-full text-white text-base redhat tracking-wide py-2'>{description}</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export const Explore = () => {
    const heading = "Explore Our Projects"
    const text1 = "Spiritual & Heritage Gardens"
    const boxslider = [
        {
            image: impact1,
            heading: "Shri Tulsi das ji Panchvati vatika",
            description: `Lush woodland inspired by Panchavati's sacred heritage    A spiritual grove echoing the Ramayan, fostering reverence and biodiversity.`
            ,
            link: "/our-projects/shri-tulsi-das-ji-panchvati-vatika"
        },
        {
            image: impact2,
            heading: "Shri Ram Setu",
            description: `Stone pathway bridging natural elements
             A symbolic tribute to Lord Ram’s legendary bridge, blending mythology and ecology.`,
            link: "/our-projects/shri-ram-setu"

        },
        {
            image: impact1,
            heading: "Goshala",
            description: `Sheltered pastures for native cattle
             A sanctuary promoting ethical cattle care and rural livelihoods.`
            ,
            link: "/our-projects/goshala"
        },
        {
            image: impact1,
            heading: "Vermicompost Unit",
            description: `Compost beds and soil lab
              A hub for organic waste conversion and farmer education.`
            ,
            link: "/our-projects/vermicompost-unit"
        },
        {
            image: impact1,
            heading: "Guest Plantation",
            description: `Welcome garden with curated plant displays
              A beautifully maintained space for guests and dignitaries to reflect and relax.`
            ,
            link: "/our-projects/guest-plantation"
        },
        {
            image: impact1,
            heading: "Shri. Narayan Falodyan (Fruit Garden)",
            description: `Mixed orchard featuring tropical fruits.
              Encouraging nutrition, self-reliance, and biodiversity preservation.`
            ,
            link: "/our-projects/shri-narayan-falodyan"
        },
        {
            image: impact1,
            heading: "Shri. Mansarovar",
            description: `Lotus-filled lake with serene walkways.
              A peaceful pond inspired by the mythical lake of purity and reflection.`
            ,
            link: "/our-projects/shri-mansarovar"
        },
        {
            image: impact1,
            heading: "Shri. Venu Nursery",
            description: `Rows of saplings and shaded greenhouses.
            A vital source for plant propagation and afforestation efforts.
            `
            ,
            link: "/our-projects/shri-venu-nursery"
        },
        {
            image: impact1,
            heading: "Shri. Bhrigu Van",
            description: `Tranquil forest zone inspired by Sage Bhrigu.
             A contemplative green space rooted in Vedic wisdom and ecological care.`
            ,
            link: "/our-projects/shri-bhrigu-van"
        },
        {
            image: impact1,
            heading: "Shri. Aushadh Manav (Human Body Garden)",
            description: `Herb layout shaped like a human anatomy.
              Each organ-shaped patch features a corresponding medicinal plant.`
            ,
            link: "/our-projects/shri-aushadh-manav"
        },
        {
            image: impact1,
            heading: "Shri. Dhanvantari Vatika",
            description: `Medicinal garden with rare healing herbs.
            Honoring Ayurveda's deity, this vatika preserves ancient healing flora.`,
            link: "/our-projects/shri-dhanvantari-vatika"
        },
        {
            image: impact1,
            heading: "Shri. Pabuji Ushtralaya (Camel Shade)",
            description: `Sandstone shelter honoring Rajasthan’s heritage animal.
             A resting abode for camels, reflecting desert culture and care.`,
            link: "/our-projects/shri-pabuji-ushtralaya"
        },
        {
            image: project20,
            heading: "Shri. Bhairav Sadan – Dog House",
            description: `Compassionate haven for canines. A clean, safe space dedicated to stray and abandoned dogs.`,
            link: "/our-projects/shri-bhairav-sadan"
        },
        {
            image: project20,
            heading: "Shri. Tridev Triveni Vatika",
            description: `Garden triad dedicated to Brahma, Vishnu, and Mahesh. A symbolic union of the divine trinity through sacred plantings.`,
            link: "/our-projects/shri-tridev-triveni-vatika"
        },
        {
            image: project20,
            heading: "Shri. Mukund Mausam Vedhshala (AgroMet Station)",
            description: `Climate monitoring tower with sensors. Facilitates precision farming with real-time agro-weather insights.`,
            link: "/our-projects/shri-mukund-mausam-vedhshala"
        },
        {
            image: project20,
            heading: "Naimish Kund",
            description: `Historically inspired holy pond. A site of spiritual significance, rooted in ancient forest traditions.`,
            link: "/our-projects/naimish-kund"
        },
        {
            image: project20,
            heading: "Shri. Shringi Yagyashala",
            description: `Ritual altar in open pavilion style. A spiritual zone for yajnas and Vedic fire ceremonies in community setting.`,
            link: "/our-projects/shri-shringi-yagyashala"
        },


    ]
    return (
        <>

            <ExploreSlider
                heading="Explore Our Projects"
                subheading="Spiritual & Heritage Gardens"
                items={boxslider}
                background={bgstay.src}
            />


            {/* <section
                className="relative  py-12 lg:py-16" style={{ background: `url(${bgstay.src})center center / cover no-repeat` }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
                <div className='mx-auto max-w-[1400px]  px-4 md:px-8 lg:px-2 '>
                    <div className='flex flex-wrap justify-center  gap-6 px-0 md:px-6 z-10 relative'>
                        <div className='w-full lg:w-12/12 '>
                            <div className='flex justify-between h-full flex-wrap'>
                                <h2 className="lg:leading-snug  text-white redhat mb-4 text-center text-3xl md:text-4xl  font-medium  w-full">
                                    {heading}
                                </h2>
                                <p className='text-base md:text-[20px] text-center w-full mb-6 md:mb-10 text-white '>{text1}</p>
                            </div>
                        </div>

                        <div className=' flex flex-wrap justify-center gap-6'>

                            {boxslider.map((item, index) => (
                                <div className='lg:w-2/5 mx-auto w-[95%]' key={index}>
                                    <div className='w-full flex text-white bg-white backdrop-blur bg-opacity-20 rounded-xl  h-full'>
                                        <div className=' '>
                                            <div className='mb-4'>
                                                <Image src={item.image} alt='icon' className='w-full h-full rounded-xl' />

                                            </div>
                                            <div className='p-4 px-6 pb-8'>
                                                <h2 className='text-xl font-normal pb-4' dangerouslySetInnerHTML={{ __html: item.heading }}></h2>

                                                <p className={`text-sm lg:text-[16px] font-light`} dangerouslySetInnerHTML={{ __html: item.description }}>
                                                </p>
                                                <div className="my-3 pt-4 text-center">
                                                    <Link href={item.link}><span className="inline-block border border-white text-white text-sm px-6 py-3 hover:bg-gray-800 hover:text-white transition">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </section> */}

        </>
    )
}



export const Waterscapes = () => {
    const heading1 = "Waterscapes & Kunds"

    const boxslider = [
        {
            image: image1,
            description: 'Shri Mansarovar',
            link: "#"
        },
        {
            image: image2,
            description: 'Shri Ram Setu',
            link: "#"

        },
        {
            image: image3,
            description: 'Sangam Kund',
            link: "/our-projects/sangam-kund"

        },
        {
            image: image1,
            description: 'Shri Mansarovar',
            link: "#"
        },

    ]
    return (
        <>
            <section
                className=" pt-14 pb-16 lg:pt-16 lg:pb-20" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <h2 className="lg:leading-snug text-[#1B453C] redhat mb-7 text-center text-3xl md:text-4xl  font-medium  w-full">
                        {heading1}  </h2>


                </div>
                <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-10 '>
                    <div className='  px-0 md:px-6 lg:px-2 relative z-1 '>
                        <div className='mx-auto  w-12/12'>
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}

                                slidesPerView={1}
                                spaceBetween={10}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 80,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 50,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 50,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }}

                                className="mySwiper2 outer-arrow1 black-arrow small_arrow"
                            >

                                {boxslider.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='w-full item-center flex text-center items-center rounded-[20px]   item_slider'>
                                            <div className='lg:w-12/12 mx-auto'>
                                                <div className='grid gap-2 items-center justify-center mb-8 relative'>
                                                    <Image src={item.image} alt='icon' className='w-full h-full mx-auto' />

                                                    <Link href={item.link} className='text-md text-white font-normal flex justify-between gap-1 absolute bottom-3 w-[90%] left-[5%] right-[5%] '>{item.description}  <IoIosArrowRoundForward className='text-3xl' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}


                            </Swiper>
                            {/* <div className='text-center pt-6 md:pt-12'>
                            <Link href="#" className='text-white bg-transparent border border-white p-3 px-12 lg:px-20 hover:bg-white hover:text-[#1B453C] transition delay-100 duration-100 ease-in-out'>Join the Mission</Link>

                            </div> */}
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
