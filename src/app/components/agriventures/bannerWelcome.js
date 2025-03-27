import React from 'react'

import image1 from "../../../assets/images/about/image1.webp";
import image2 from "../../../assets/images/about/image2.webp";
import icon1 from "../../../assets/images/about/mssion.svg";
import icon2 from "../../../assets/images/about/vision.svg";

// import BannerPage from '../BannerPage';
import Image from 'next/image';
import Link from 'next/link';

export const AmBanner = () => {

    const text = {
        vedio : "https://cruxcreativedemo2.com/web-image/about-vedio.mp4",
        heading: `Welcome to <br/> <span style="color:#48A490">A&M Agriventures Pvt. Ltd.</span>`,
        title: 'At A&M Agriventures, we are redefining the future of sustainable agriculture by harmonizing innovation, traditional practices, and environmental stewardship. Through our agroforestry, contract farming, eco-tourism, and more, we aim to combat climate change, restore ecosystems, and empower communities.',
        buttonText: "Read More",
        buttonLink: "/"

    }
    return (
        <>
            <div
                className="py-16 lg:h-[550px] flex items-center justify-center relative">
                     <video className='absolute top-0 left-0 w-full h-full object-cover' src={text.vedio} autoPlay={true} loop muted></video>

                {/* <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={vedio}
                    autoPlay
                    loop
                    muted
                    playsInline
                /> */}
                <div className="absolute h-full top-0 bottom-0 w-full bg-black opacity-40"></div>
                <div className="relative text-center z-1 flex flex-wrap w-full items-center justify-center">
                    <div className='w-11/12 md:w-3/4 lg:w-7/12'>

                        <h1 className="text-white text-3xl md:text-4xl lg:leading-tight lg:text-[40px] font-normal w-full" dangerouslySetInnerHTML={{ __html: text.heading }}></h1>
                        <p
                            className="'w-full text-white text-xl md:text-2xl mt-3 mb-7 lg:mt-4 lg:mb-4'"
                        >
                            {text.subtitle}
                        </p>

                        <p className='w-full text-white italic text-[15px] mt-5 mb-7 lg:mt-7 lg:mb-10'>
                            {text.title}
                        </p>

                        <Link
                            className="text-white border-2 p-2 px-12 lg:px-20 hover:bg-white hover:text-black transition delay-100 duration-100 ease-in-out"
                            href={text.buttonLink}
                        >
                            {text.buttonText}
                        </Link>



                    </div>
                </div>
            </div>

            {/* <BannerPage heading={text.heading} title={text.title} banner={text.banner} button={text.buttonText} link={text.buttonLink} /> */}

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
                                <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-black mt-4 mb-6'>{heading}</h2>
                                <h3 className='text-xl md:leading-[1.3] md:text-2xl font-semibold redhat text-[#2D6B5E] mb-6'>{subtitle}</h3>
                                <p className='text-black text-base text-justify redhat' dangerouslySetInnerHTML={{ __html: description }}>
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
            icon: icon1,
            title: 'Mission',
            description: 'To nurture sustainable farming practices, restore degraded lands, and create socio-economic opportunities for farmers and rural communities.'
        },
        {
            icon: icon2,
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
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-black mt-4 mb-6'>{heading}</h2>
                            <p className='text-black text-base redhat text-justify mb-10' dangerouslySetInnerHTML={{ __html: description }}>
                            </p>
                            <Link href="#" className='bg-[#1B453C] text-white py-4 px-16 inline-block text-center text-base hover:bg-black transition-all  duration-500 '>More About Us</Link>
                        </div>
                        <div className='lg:w-6/12  w-full  w-12/12'>
                            <Image className='w-full h-full rounded-xl' src={image2} alt='banner' />
                        </div>
                    </div>
                    <hr className='mt-14 mb-14' />
                    <div className='flex flex-wrap md:flex-nowrap md:flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
                        {vision.map((item, index) => (

                            <div key={index} className='lg:w-6/12  w-full  w-12/12'>
                                <div className='flex flex-col md:flex-row gap-10'>
                                    <div className='w-20 text-center mx-auto lg:w-52'>
                                        <Image src={item.icon} className='w-full' alt="icon" />
                                    </div>
                                    <div>
                                        <h3 className='text-xl md:leading-[1.3] md:text-2xl font-semibold redhat text-black mb-4'>{item.title}</h3>
                                        <p className='text-[#141414] text-justify opacity-75 text-base redhat mb-6' dangerouslySetInnerHTML={{ __html: item.description }}>
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

