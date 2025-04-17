"use client"
import { useState } from 'react';
import banner from "../../../assets/images/business1/banner-business.webp";
import image2 from "../../../assets/images/business1/imgge1.webp";
import service from './../../../api/service.json'
import BannerPage from '../BannerPage';
import Link from 'next/link';
import Image from 'next/image';
import { BusinessCard } from './ServiceCard';
export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Our Business: <br/>  Transforming Agriculture and Sustainability `,
        title: 'Harnessing innovation and tradition for a sustainable future',
        // buttonText: "Discover Our Impact",
        // buttonLink: "/",
    }
    return (
        <>
            <BannerPage className="white_btn_banner" heading={text.heading} title={text.title} banner={text.banner} button={text.buttonText} link={text.buttonLink} classname='py-3 !lg:px-10 !px-10 bg-white !text-[#203008] inline-block' />

        </>
    )
}



export const WhoAre = () => {
    const heading = "Who We Are"
    const description = `<span class="text-[#1B453C] font-bold">Atulye Krishi Vanna</span> is committed to creating a sustainable future through innovative agricultural practices and environmental stewardship. Our services combine modern solutions with traditional wisdom to empower communities, conserve resources, and enhance biodiversity. Together, we’re building a resilient and sustainable ecosystem.`

    return (
        <>
            <section className='relative text-center md:text-left   pb-16  pt-20 lg:pb-16' style={{ background: "linear-gradient(186deg, rgba(255,255,255,1) 0%, rgba(225,225,225,1) 100%)" }}>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='flex md:flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12 flex-col-reverse'>
                        <div className='lg:w-6/12  w-full  w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-black mb-6'>{heading}</h2>
                            <p className='text-black text-base redhat mb-10' dangerouslySetInnerHTML={{ __html: description }}>
                            </p>
                            <Link href="/about-us" className='bg-[#e9e9e9] text-black border-black border py-3 px-16 inline-block text-center text-base hover:bg-white transition-all  duration-500 '>About Us</Link>

                        </div>
                        <div className='lg:w-6/12  w-full  w-12/12'>
                            <Image className='w-full h-full rounded-xl' src={image2} alt='banner' />
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}


export const OurService = () => {
    const heading = "Our Services"
    const [showAll, setShowAll] = useState(false);

  // Show only 6 items initially
  const visibleServices = showAll ? service : service.slice(0, 6);
    return (
        <>
            <section className='relative text-center md:text-left   pb-16  pt-20 lg:pb-12' >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='lg:w-12/12  w-full  w-12/12'>
                        <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-black mb-6'>{heading}</h2>
                    </div>
                    <div className='lg:grid flex flex-wrap gap-4 lg:gap-4 grid-cols-1 lg:grid-cols-12'>
                    {visibleServices.map((item, index) => (
            <div key={index} className="lg:col-span-4 md:col-span-3 sm:col-span-2">
              <BusinessCard
                image={item.image}
                title={item.title}
                info={item.designation}
                link={item.link}
              />
            </div>
          ))}

                    </div>
                    {!showAll && service.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center mt-6 mb-8 justify-center gap-4 py-3 px-12 shadow-lg text-white bg-[#1B453C] redhat font-medium border-[#1B453C] border hover:bg-white hover:text-[#1B453C] transition-all duration-300"
            >
              See All Services
            </button>
          </div>
        )}
                </div>
            </section>
        </>
    )
}


