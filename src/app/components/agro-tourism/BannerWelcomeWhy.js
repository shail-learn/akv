import React from 'react'
import banner from "../../../assets/images/AgroTourism/banner.webp";
import image1 from "../../../assets/images/AgroTourism/garden-img.webp";
import bgwhy from "../../../assets/images/AgroTourism/whybg.webp";
import Img1 from "../../../assets/images/AgroTourism/icon1.svg";
import Img2 from "../../../assets/images/AgroTourism/icon2.svg";
import Img3 from "../../../assets/images/AgroTourism/icon3.svg";
import Img4 from "../../../assets/images/AgroTourism/icon4.svg";
import Img5 from "../../../assets/images/AgroTourism/icon5.svg";
import Img6 from "../../../assets/images/AgroTourism/icon6.svg";


import BannerPage from '../BannerPage';
import Image from 'next/image';

export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Agro-Tourism`,
        subtitle: `Where Nature Meets Sustainability – A Journey into <br/> Agroforestry & Rural Life`,
        opacity: "opacity-55"
    };
    return (
        <>

            <BannerPage
                heading={text.heading}
                title={text.title}
                subtitle={text.subtitle}
                opacity={text.opacity}
                banner={text.banner}
                button={text.button}
                link={text.link}
                classname={text.className}

            />
        </>
    )
}


export const Welcome = () => {
    const heading = "Experience the Essence of Sustainable Living"
    const content = `Welcome to Atulye Krishi Vana, where we redefine travel by blending nature, agriculture, and sustainability into an unforgettable agro-tourism experience.
    Our agroforestry project is not just about farming—it’s about restoring ecosystems, preserving biodiversity, and creating a thriving, self-sustaining rural economy. <br/><br/>

    Whether you're an eco-conscious traveler, nature enthusiast, farmer, student, or someone looking for a peaceful retreat, our agro-tourism experience
    offers a unique opportunity to immerse yourself in the beauty of nature, learn traditional farming practices, and witness sustainable innovations in action.
    `
    return (
        <>
            <section className='relative text-center md:text-left pt-16 pb-0 lg:pt-20 lg:pb-0'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='flex flex-col lg:flex-row justify-between  gap-4 lg:gap-12'>
                        <div className='lg:w-6/12  w-full w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-[#1B453C] mb-6'>{heading}</h2>

                        </div>
                        <div className='lg:w-6/12  w-full w-12/12'>
                            <p className='text-black text-base md:text-[17px] text-justify redhat' dangerouslySetInnerHTML={{ __html: content }}></p>
                        </div>

                    </div>

                </div>
                <Image src={image1} alt='banner img' className='w-full h-full' />

            </section>

        </>
    )
}


export const Why = () => {
    const heading = `<span class="text-[#D2AE6D]">Why Visit</span> Atulye Krishi Vana?`;
    const features = [
        {
            image: Img1,
            title: 'Reconnect with Nature',
            description: 'Escape the urban hustle and breathe in the fresh air of a thriving agroforestry ecosystem.',
        },
        {
            image: Img2,
            title: 'Hands-On Farming Experience',
            description: 'Get involved in organic farming, tree planting, and sustainable agroforestry techniques.',
        },
        {
            image: Img3,
            title: 'Sustainable Living & Learning',
            description: 'Understand how regenerative farming benefits the environment and future generations.',
        },
        {
            image: Img4,
            title: 'Community & Cultural Immersion',
            description: 'Experience local traditions, rural crafts, and farm-to-table culinary delights.',
        },
        {
            image: Img5,
            title: 'Biodiversity & Wildlife Conservation',
            description: 'Walk through forest trails and discover a thriving ecosystem of birds, insects, and flora.',
        },
        {
            image: Img6,
            title: 'Eco-Friendly Farm Stay',
            description: 'Live in traditional farm cottages, surrounded by nature, and enjoy organic, homegrown meals.',
        },
    ];
    return (
        <section
            className="bg-cover bg-center relative text-center px-4 md:text-left  pt-16 pb-16 lg:pt-20 lg:pb-20"
            style={{ backgroundImage: `url(${bgwhy.src})` }}
        >
            {/* <div className="absolute inset-0 bg-[#1B453C] opacity-80"></div> */}
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 ">
                <h2 className="text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold text-center redhat text-white mb-12" dangerouslySetInnerHTML={{ __html: heading }}>

                </h2>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 md:gap-y-6">
                {features.map((feature, index) => (
                    <div key={index} className="grid items-center text-center gap-4 pt-4 md:pt-8">
                        <div className="min-w-14 min-h-14 p-1 mx-auto bg-[#D9D9D9] relative rounded-full overflow-hidden flex items-center justify-center">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                className="cover rounded-full h-10 w-10 object-contain"
                            />
                        </div>
                        <div className='text-center'>
                            <h3 className="text-[#D2AE6D] py-2 text-xl md:text-2xl redhat relative font-medium">{feature.title}</h3>
                            <p className="text-white mt-2 font-light w-11/12 md:w-3/4 mx-auto  relative redhat md:text-[17px]">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
