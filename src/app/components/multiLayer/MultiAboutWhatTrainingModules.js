import React from 'react'
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/training-development/multi/banner.webp";
import IntroImg from "../../../assets/images/training-development/multi/info.webp";

import Img1 from "../../../assets/images/training-development/multi/choose1.webp";
import Img2 from "../../../assets/images/training-development/multi/choose2.webp";
import Img3 from "../../../assets/images/training-development/multi/choose3.webp";
import Img4 from "../../../assets/images/training-development/multi/choose4.webp";

import story1 from "../../../assets/images/training-development/multi/module1.webp";
import story2 from "../../../assets/images/training-development/multi/module2.webp";
import story3 from "../../../assets/images/training-development/multi/module3.webp";


import Image from 'next/image';
import Titleslider from '../Titleslider';
import ModuleSlider from '../ModuleSlider';



export const Multi = () => {
    const text = {
        banner: banner,
        heading: `Multi-Layer Farming  <br/> Training by Atulye Krishi Vana`,
        title:
            "Helping Farmers Cultivate More from Less",
        // link: "/contact",
        // button: "Explore Training Programs",
        opacity: "opacity-40"
    };
    return (
        <>
            <BannerPage
                heading={text.heading}
                title={text.title}
                banner={text.banner}
                button={text.button}
                link={text.link}
                classname={text.className}
                opacity={text.opacity}
            />
        </>
    )
}


export const About = () => {
    const IntroData = {
        heading: "Helping farmers cultivate more from less",
        info: "In many parts of India, owning large farmlands is a privilege few can afford. Most farmers work with small or marginal plots, struggling to make a sustainable income. Atulye Krishi Vana offers a practical and impactful solution—Multi-Layer Farming, a method that turns even a small piece of land into a productive and organic source of livelihood. Our 15-day residential training program is specially designed for marginal farmers, landless labourers, women farmers, and rural youth. This training empowers participants to grow multiple crops organically in the same space, generate steady income, and reduce dependence on chemicals and external inputs.  ",
        image: IntroImg,
    };

    return (
        <>
            <section className="relative text-center md:text-left  my-20 md:my-[4rem] mb-0">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 ">
                    <div className="flex md:flex-col flex-col lg:flex-row justify-between gap-4 lg:gap-12  ">
                        <div className="lg:w-6/12  w-full  w-12/12 ">
                            <Image
                                className="w-full h-full rounded-xl"
                                src={IntroData.image}
                                alt="banner"
                            />
                        </div>
                        <div className="lg:w-6/12 mt-2 md:mt-4 w-full  w-12/12">
                            <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-black mt-4 mb-8 ">
                                {IntroData.heading}
                            </h2>

                            <p
                                className="text-black text-base md:text-lg   redhat mb-10"
                                dangerouslySetInnerHTML={{ __html: IntroData.info }}
                            ></p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export const What = () => {
    const heading = "Why Choose Us?";
    const info = "Multi-layer farming is an integrated farming method where different crops are grown at different heights and root levels on the same plot of land. By combining crops such as fruit trees, vegetables, creepers, and root vegetables, the system utilizes sunlight, water, and soil nutrients effectively, leading to higher productivity from the same area."
    const features = [
        {
            image: Img1,
            title: `Farmers with <b>less than one acre of land</b>`,
        },
        {
            image: Img2,
            title: `<b>Barren or degraded lands</b> in need of revival`,
        },
        {
            image: Img3,
            title: `<b>Labour-constrained families</b>`,
        },
        {
            image: Img4,
            title: `Those looking to <b>transition into organic farming</b>`,
        },

    ];
    return (
        <>
            <section className="relative text-center px-4  bg-[#1B453C] py-14 lg:py-20">

                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 ">
                    <div className='md:max-w-[70%] mx-auto'>
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium text-center redhat text-white mb-12">
                            {heading}
                        </h2>
                        <p className='text-base text-white mb-12 md:mb-16'>{info}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 md:gap-10">
                                    <div className="min-w-32 min-h-32 relative rounded-full overflow-hidden">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            layout="fill"
                                            objectFit="cover rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-white opacity-75 text-[17px] text-left redhat relative"
                                            dangerouslySetInnerHTML={{ __html: feature.title }}
                                        />

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


export const Training = () => {
    const heading = "Training Overview";
    const slides = [
        {
            heading: "Duration: 15 Days",
            description: " This program is designed as a hands-on, immersive experience. Every day includes both classroom instruction and practical, on-field application. Farmers receive step-by-step guidance to start and manage their own multi-layer farm.",
        },
        {
            heading: "Batch Size",
            description: 'Limited to ensure personalized mentoring and interactive sessions.',
        },
        {
            heading: "Duration: 15 Days",
            description: " This program is designed as a hands-on, immersive experience. Every day includes both classroom instruction and practical, on-field application. Farmers receive step-by-step guidance to start and manage their own multi-layer farm.",
        },
        {
            heading: "Batch Size",
            description: 'Limited to ensure personalized mentoring and interactive sessions.',
        },
    ];

    return (
        <>
            <div className='mt-6 md:mt-10'>
                <Titleslider heading={heading} boxslider={slides} />
            </div>
        </>
    )
}


export const Modules = () => {
    const stories = [
        {
            image: story1,
            title: "Understanding the Concept",
            description: `
             <ul>
                <li>Basics of multi-layer cropping</li>
                <li>Science behind plant compatibility</li>
                <li>How this system boosts soil and income health</li>
             </ul>
            ` ,
        },
        {
            image: story2,
            title: "Plot Design and Crop Layering",
            description:  `
            <ul>
                <li>How to map and divide a small plot</li>
                <li>Selection of crops based on height, light needs, and harvest time</li>
                <li>Building a year-round cropping plan using four to five crop layers</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Organic Soil Enrichment",
            description:`
            <ul>
                <li>Making compost, Jeevamrut, and vermiwash</li>
                <li>Techniques to improve soil fertility using natural inputs</li>
                <li>Mulching and microbial health management</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Integrated Crop Selection",
            description: `
            <ul>
                <li>Common crop combinations: papaya + turmeric + spinach + cowpea</li>
                <li>Seasonal planning</li>
                <li>Introducing medicinal or culinary herbs for added income</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Water Management",
            description: `
            <ul>
                <li>Drip irrigation for low water use</li>
                <li>Rainwater harvesting and storage</li>
                <li>Moisture retention practices for dryland regions</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Pest and Disease Control Without Chemicals",
            description: `
            <ul>
                <li>Natural deterrents like neem extract, cow urine, and ash</li>
                <li>Companion planting to reduce pest incidence</li>
                <li>Promoting beneficial insects and soil fauna</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Harvest Planning and Storage",
            description: `
            <ul>
                <li>How to stagger harvests for regular income</li>
                <li>Safe handling of organic produce</li>
                <li>Basic storage techniques for perishables</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Market Linkages and Income Planning",
            description: `
            <ul>
                <li>Identifying local and niche markets</li>
                <li>Pricing organic produce</li>
                <li>Introduction to farmers’ producer organizations (FPOs) and co-operatives</li>
             </ul>
            `,
        },
    ];

    return (
        <>
        <div className='-mt-8'>
            <ModuleSlider heading="Training Modules" stories={stories} />
            </div>
        </>
    )
}
