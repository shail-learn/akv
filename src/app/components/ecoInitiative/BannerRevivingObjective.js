import React from 'react'
import BannerPage from '../BannerPage';
import { RiCheckboxCircleFill } from "react-icons/ri";

import banner from "../../../assets/images/eco/banner.webp";
import image2 from "../../../assets/images/eco/image2.webp";
import currency from "../../../assets/images/eco/icon.svg";
import objectbg from "../../../assets/images/eco/WhyChoose.webp";

import img1 from "../../../assets/images/eco/img1.png";
import img2 from "../../../assets/images/eco/img2.png";
import img3 from "../../../assets/images/eco/img3.png";
import img4 from "../../../assets/images/eco/img4.png";
import img5 from "../../../assets/images/eco/img5.png";





import Link from 'next/link';
import Image from 'next/image';
export const Banner = () => {
    const text = {
        banner: banner,
        heading: `A Journey Towards Prosperous <br> Sustainability`,
        // buttonText: "Join Our Mission",
        // buttonLink: "/",
        opacity :"opacity-0"
    }
    return (
        <>
            <BannerPage className="white_btn_banner" opacity={text.opacity} heading={text.heading} title={text.title} banner={text.banner} button={text.buttonText} link={text.buttonLink} classname='py-3 mt-6 !lg:px-10 !px-10 bg-white !text-[#203008] inline-block' />
        </>
    )
}




export const Reviving = () => {
    const heading = "Reviving Ecosystems, Empowering Communities"
    const description = `Atulye Krishi Vana, an initiative by A&M Agri Ventures, is dedicated to re-greening degraded lands, combating climate change, and empowering communities through sustainable agroforestry practices. Located in the serene Sehore District of Madhya Pradesh, we aim to transform barren lands into thriving ecosystems and foster
    socio-economic development.
    `
    const infoData = [
        {
            title: "Location",
            description: "Ramgarh, Sehore District, Madhya Pradesh",
        },
        {
            title: "Area Covered",
            description: "Over 500 acres (and expanding)",
        },
        {
            title: "Impact",
            description: "2 lakh trees planted since 2018",
        },
    ];
    const value = "86,700"

    return (
        <>
            <section className='relative text-center md:text-left   pb-16  pt-20 lg:pb-16 bg-[#f5f5f5]'  >
                <div className='mx-auto max-w-7xl px-4 md:px-6 mx:px-2 relative z-1 '>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-12'>
                        <div className='md:w-6/12  w-full  w-12/12'>
                            <div className='relative'>
                                <Image className='w-full h-full rounded-xl' src={image2} alt='banner' />
                                <div className="w-3/4 lg:w-[70%] mx-auto bg-[#6D8C54] -mt-16 z-1 relative text-white p-4 flex items-center rounded-xl">

                                    <div className="p-2   mr-4 border-r border-white border-opacity-20">
                                        <Image className='w-full h-full rounded-xl' src={currency} alt='banner' />
                                    </div>

                                    <div className='text-left'>
                                        <h3 className="text-2xl lg:text-3xl redhat font-normal">{value}</h3>
                                        <p className="text-sm mt-2 md:mt-3">Successfully Project Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-6/12  w-full  w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-[#1B453C] mb-6'>{heading}</h2>
                            <p className='text-black text-base redhat mb-10' dangerouslySetInnerHTML={{ __html: description }}>
                            </p>
                            <div className='my-6 mb-14'>
                                {infoData.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3 mb-4">
                                        <RiCheckboxCircleFill className="h-5 w-5 text-green-800 mt-1" />
                                        <div>
                                            <h3 className="font-semibold redhat text-left text-lg">{item.title}</h3>
                                            <p className="text-black redhat">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link href="/agroForestry" className='bg-[#1B453C] text-white   py-3 px-12 inline-block text-center text-base hover:bg-black hover:text-[#fff] transition-all  duration-500 '>Learn More About Us</Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export const Objective = () => {
    const heading = "Objectives"
    const heading2 = "Our Core Pillars of Change"
    const text = "We focus on enhancing ecological variety and improving community welfare through initiatives such as:"

    const objectives = [
        {
            id: "01",
            title: "Afforestation and Reforestation",
            description: "Transforming barren lands into thriving green zones.",
            image: img1,
        },
        {
            id: "02",
            title: "Carbon Sequestration",
            description: "Reducing climate impact through innovative practices.",
            image: img2,
        },
        {
            id: "03",
            title: "Water Conservation",
            description: "Rainwater harvesting and groundwater recharging.",
            image: img3,
        },
        {
            id: "04",
            title: "Soil Regeneration",
            description: "Reviving soil health for sustainable farming.",
            image: img4,
        },
        {
            id: "05",
            title: "Community Empowerment",
            description: "Skill development, employment, and health awareness programs.",
            image: img5,
        },
    ];
    return (
        <>

            <section className='relative text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20' style={{ background: `url(${objectbg.src})center center / cover no-repeat` }} >

                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='lg:w-12/12  w-full  w-12/12'>
                        <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-center text-white mb-4'>{heading}</h2>
                        <h5 className='text-xl md:leading-[1.3] md:text-2xl font-normal redhat text-center text-[#F7C35F] mb-3'>{heading2}</h5>
                        <p className='text-base md:leading-[1.3] font-normal redhat text-center text-white mb-12 mb:20 lg:mb-24'>{text}</p>
                    </div>

                    <div className="mt-10 relative">
                        <div className='grid col-span-8 justify-center '>
                            <div className="border_number relative">
                                {objectives.map((obj, index) => (
                                    <div key={index} className="flex  gap-4 md:gap-6 items-center mb-10 relative">


                                        <div className="md:min-w-28 md:h-28 w-28 rounded-lg overflow-hidden">
                                            <Image src={obj.image} alt={obj.title} width={100} height={100} className="object-cover" />
                                        </div>
                                        <div className=' '>
                                            {/* <div className="absolute lg:left-5 top-0 h-full border-l-2 border-dashed border-white"></div> */}
                                            <div
                                                className={`left-4 z-10 md:w-10 md:h-10 w-8 h-8 text-sm md:text-base relative flex items-center justify-center text-black font-bold rounded-full bg-white`}
                                            >
                                                {obj.id}

                                            </div>
                                        </div>

                                        <div className="ml-6 w-3/4 text-left">
                                            <h3 className="text-xl lg:text-2xl text-white redhat mt-6 mb-3 font-semibold">{obj.title}:</h3>
                                            <p className="text-gray-300 redhat text-sm">{obj.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
