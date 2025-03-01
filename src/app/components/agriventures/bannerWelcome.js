import React from 'react'
import banner from "../../../assets/images/about/banner.webp";
import image1 from "../../../assets/images/about/image1.webp";
import image2 from "../../../assets/images/about/image2.webp";
import icon1 from "../../../assets/images/about/mssion.svg";
import icon2 from "../../../assets/images/about/vision.svg";

import BannerPage from '../BannerPage';
import Image from 'next/image';
import Link from 'next/link';

export const AmBanner = () => {
    const text = {
        banner: banner,
        heading: `Welcome to <br/> <span style="color:#48A490">A&M Agriventures Pvt. Ltd.</span>`,
        title: 'At A&M Agriventures, we are redefining the future of sustainable agriculture by harmonizing innovation, traditional practices, and environmental stewardship. Through our agroforestry, contract farming, eco-tourism, and more, we aim to combat climate change, restore ecosystems, and empower communities.',
        buttonText:"Read More",
        buttonLink:"/"

    }
    return (
        <>
            <BannerPage heading={text.heading} title={text.title} banner={text.banner} button={text.buttonText} link={text.buttonLink} />

        </>
    )
}



export const AmWelcome = () => {
    const heading = "Welcome to A&M Agriventures Pvt. Ltd."
    const subtitle = "Building a Greener, Prosperous Tomorrow"
    const description = "At A&M Agriventures, we are redefining the future of sustainable agriculture by harmonizing innovation, traditional practices, and environmental stewardship. Through our agroforestry, contract farming, eco-tourism, and more, we aim to combat climate change, restore ecosystems, and empower communities."

    return (
        <>
            <section className='relative text-center md:text-left pt-16 pb-12 lg:pt-20 lg:pb-16'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
                        <div className='lg:w-6/12  w-full w-12/12'>
                            <Image className='w-full h-full rounded-xl' src={image1} alt='banner' />
                        </div>
                        <div className='lg:w-6/12  w-full w-12/12'>
                            <div className='border-l-[8px] lg:border-l-[14px] rounded-tl-lg rounded-bl-lg border-[#F7C35F] ps-4'>
                                <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-black mt-4 mb-6'>{heading}</h2>
                                <h3 className='text-xl md:leading-[1.3] md:text-2xl font-semibold redhat text-[#2D6B5E] mb-6'>{subtitle}</h3>
                                <p className='text-black text-base redhat' dangerouslySetInnerHTML={{ __html: description }}>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export const Whoam = () => {
    const heading = "Who We Are"
    const description = "A&M Agriventures Pvt. Ltd. is a pioneering initiative in sustainable farming and agroforestry. Established in 2018, we focus on transforming barren lands into vibrant ecosystems, promoting agro-tourism, and empowering rural communities through innovative agricultural practices."
    const vision = [
        {
            icon : icon1,
            title: 'Mission',
            description: 'To nurture sustainable farming practices, restore degraded lands, and create socio-economic opportunities for farmers and rural communities.'
        },
        {
            icon : icon2,
            title: 'Vision',
            description: 'To become the leading name in sustainable agriculture and agroforestry, creating prosperity for people and the planet.'
        },

    ]
    return (
        <>
          <section className='relative text-center md:text-left   pb-16   lg:pb-24'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='flex md:flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12 flex-col-reverse'>
                        <div className='lg:w-6/12  w-full  w-12/12'>
                                <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-black mt-4 mb-6'>{heading}</h2>
                                <p className='text-black text-base redhat mb-10' dangerouslySetInnerHTML={{ __html: description }}>
                                </p>
                                <Link href="#" className='bg-[#1B453C] text-white py-4 px-16 inline-block text-center text-base hover:bg-black transition-all  duration-500 '>More About Us</Link>
                        </div>
                        <div className='lg:w-6/12  w-full  w-12/12'>
                            <Image className='w-full h-full rounded-xl' src={image2} alt='banner' />
                        </div>
                    </div>
                    <hr className='mt-14 mb-14' />
                    <div className='flex flex-wrap md:flex-nowrap md:flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
                       {vision.map((item,index)=>(

                            <div key={index} className='lg:w-6/12  w-full  w-12/12'>
                             <div className='flex flex-col md:flex-row gap-10'>
                                <div className='w-20 text-center mx-auto lg:w-52'>
                                    <Image src={item.icon} className='w-full' alt="icon" />
                                </div>
                                <div>
                                 <h3 className='text-xl md:leading-[1.3] md:text-2xl font-semibold redhat text-black mb-4'>{item.title}</h3>
                                 <p className='text-[#141414] opacity-75 text-base redhat mb-6' dangerouslySetInnerHTML={{ __html: item.description }}>
                                 </p>
                                 </div>
                             </div>
                             </div>
                       ))}

                    </div>
                </div>
            </section>
        </>
    )
}

