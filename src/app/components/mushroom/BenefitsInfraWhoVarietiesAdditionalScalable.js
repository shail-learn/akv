import React from 'react'
import impact1 from "../../../assets/images/training-development/mushroom/module1.webp";
import impact2 from "../../../assets/images/training-development/mushroom/module2.webp";

import bgstay from "../../../assets/images/stress/bg.webp";

import { SliderBlur } from '../SliderBlur';
import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/training-development/mushroom/key1.webp";
import use2 from "../../../assets/images/training-development/multi/key2.webp";
import use3 from "../../../assets/images/training-development/mushroom/key3.webp";
import use4 from "../../../assets/images/training-development/mushroom/key4.webp";
import { Iconslider } from '../Iconslider';
import why1 from "../../../assets/images/training-development/mushroom/why1.webp";
import why2 from "../../../assets/images/training-development/mushroom/why2.webp";
import why3 from "../../../assets/images/training-development/mushroom/why3.webp";
import why4 from "../../../assets/images/training-development/mushroom/why4.webp";
import why5 from "../../../assets/images/sandalwood/why5.webp";
import Titleslider from '../Titleslider';
import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image';
import Plant from "../../../assets/images/training-development/multi/future.svg";
import PartnerBg from "../../../assets/images/training-development/multi/bgimg.webp";



export const Benefits = () => {
    const heading = "Training Modules Overview"
    const class2 = "blurheight big_height desktop_hide"

    const boxslider = [
        {
            image: impact1,
            heading: "Mushroom Spawn Preparation (25 Days)",
            description: [
                "Fundamentals of mushroom biology and fungal life cycles",
                "Selection of mushroom species based on region and demand",
                "Introduction to pure culture, mother culture, and spawn types",
            ]
        },
        {
            image: impact2,
            heading: "Mushroom Cultivation (5–7 Days)",
            description: [
                "Mushroom species suitable for different regions (Oyster, Milky, Button)",
                "Substrate selection: paddy straw, wheat straw, sugarcane bagasse",
                "Straw treatment methods: boiling, fermentation, lime soaking",
                "Bagging and layering techniques"

            ]
        },


    ]
    return (
        <>

            <section
                className="relative mt-10 pt-16 pb-16 lg:pt-20 lg:pb-20" style={{ background: `url(${bgstay.src})center center / cover no-repeat` }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
                <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
                    <div className='flex flex-wrap lg:flex-nowrap justify-between  gap-6 px-0 md:px-6 z-10 relative lg:px-2'>
                        <div className='w-full lg:w-3/12 md:mt-10'>
                            <div className='flex justify-between   flex-wrap'>
                                <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  lg:text-[40px] font-semibold  w-full">
                                    {heading}
                                </h2>
                            </div>
                        </div>

                        <div className='w-full lg:w-8/12'>
                            <SliderBlur boxslider={boxslider} class2={class2} />

                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}


export const Infra = () => {
    const gridBox = "md:!grid-cols-4 grid3";
    const custom_class = "white_grid grid_padding";
    const whyChooseData = [
        {
            image: use1,
            title: "Complete Value Chain Coverage",
            description:
                "Unlike programs that focus only on cultivation, this training offers control over the full production cycle—from culture to market-ready product.",
        },
        {
            image: use2,
            title: "Low-Cost and Rural-Adapted Techniques",
            description:
                "Every method taught is suited for rural, low-resource environments. Expensive tools are replaced with innovative alternatives using everyday materials.",
        },
        {
            image: use3,
            title: "Practical Skill Emphasis",
            description:
                "Participants prepare real spawn batches, work with lab tools, and cultivate mushrooms under supervision—ensuring they are fully prepared to replicate the process independently.",
        },
        {
            image: use4,
            title: "Organic and Sustainable Approach",
            description:
                "The course discourages the use of chemicals or synthetic fungicides. Emphasis is placed on clean production practices, hygiene, and natural pest control techniques.",
        },


    ];
    return (
        <>
            <div className='pt-10 md:mb-0 mb-10'>
                <Gridbox
                    heading="Benefits of the Training Program"
                    data={whyChooseData}
                    className={custom_class}
                    gridBox={gridBox}
                />
            </div>
        </>
    )
}


export const Who = () => {
    const heading = "Infrastructure Guidance for Participants";
    const custom_class = "original_img padding_argust desktop-p-0 pt-10  mt-8"
    const cardData = [
        {
            icon: why1,
            description: "A basic spawn lab with sterilization, inoculation, and incubation zones",
        },
        {
            icon: why2,
            description: "A cultivation chamber or mushroom room using local materials like bamboo, plastic sheets, and iron racks",

        },
        {
            icon: why3,
            description: "Tools for measuring humidity and temperature using low-cost alternatives",

        },
        {
            icon: why4,
            description: "Storage and drying areas for post-harvest mushrooms",

        },


    ];

    return (
        <>

            <Iconslider
                card={cardData}
                heading={heading}
                custom_class={custom_class}
            />


        </>
    );
}


export const Varieties = () => {
    const heading = "Mushroom Varieties Included";
    const short = "The training focuses on mushrooms that are in regular demand and can be cultivated in Indian agro-climatic zones:"
    const slides = [
        {
            heading: "Oyster Mushrooms (Pleurotus species)",
            description: " Easy to grow and highly nutritious",
        },
        {
            heading: "Milky Mushrooms (Calocybe indica) ",
            description: 'Suitable for warmer climates',
        },
        {
            heading: "Button Mushrooms (Agaricus bisporus)",
            description: " Widely consumed, cooler climate crop",
        },
        {
            heading: "Ganoderma (Reishi Mushroom)",
            description: 'Introduced in a simplified format as a future extension for advanced learners',
        },
    ];

    return (
        <>
            <div className='mt-6 md:mt-10'>
                <Titleslider heading={heading} boxslider={slides} shortdescription={short} />
            </div>
        </>
    )
}


export const Additional = () => {
    const heading = "Who Should Attend?"

    const title = "This training is ideal for:"
    const futurePlans = [
        "Farmers with limited land or those seeking allied income sources",
        'Women-led self-help groups exploring community-level enterprises',
        "Unemployed youth interested in agri-business",
        "Agri-preneurs looking to build micro-enterprises",
        "Individuals seeking to supply spawn to other mushroom growers",

    ];


    return (
        <>

            <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-16">
                <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse justify-between md:flex-row items-center gap-10">

                    <div className="w-full md:w-[45%] text-center md:text-left">
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-black mb-2">
                            {heading}
                        </h2>

                        <p className="text-black py-4 md:py-6 text-xl">{title}</p>

                        {/* List using map() */}
                        <ul className="mt-6 space-y-4">
                            {futurePlans.map((plan, index) => (
                                <li key={index} className="flex   space-x-3">
                                    <span className="w-6 h-6 text-[#1B453C] flex items-center justify-center rounded-full">
                                        <MdCheckCircle className='w-6 h-6' />
                                    </span>
                                    <p className="text-[#141414] md:text-[17px] text-left opacity-80">{plan}</p>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className=" w-full md:w-[45%]">
                        <Image
                            src={Plant}
                            alt="Planting"
                            width={600}
                            height={600}
                            className="w-full h-full"
                            quality={90}
                        />

                    </div>
                </div>
            </section>
        </>
    )
}



export const Scalable = () => {
    const heading = "A Scalable and Sustainable Enterprise";
    const description =
        "The demand for safe, fresh, and nutritious food is only increasing. Mushrooms meet all these needs and offer farmers, households, and entrepreneurs an opportunity to build income without the need for land, synthetic chemicals, or large labour forces. Learning to prepare spawn in-house allows producers to save costs, expand production, and even become suppliers to others in the ecosystem. <br><br> Atulye Krishi Vana’s training creates not only skilled individuals but also independent producers who can bring high-value food production into their homes, villages, and local markets. ";


    return (
        <section
            className="relative bg-no-repeat !mb-0 py-12 lg:py-20 bg-cover w-full my-8 md:my-12 !mt-0"
            style={{ backgroundImage: `url(${PartnerBg.src})` }}
        >

            <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
                <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
                    <h2 className=" w-full  text-3xl md:text-4xl leading-snug lg:text-[40px] font-semibold mb-8 md:mb-10 redhat">
                        {heading}
                    </h2>
                    <p
                        className="mb-6 text-base  md:text-[17px]   w-full"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>


                </div>
            </div>
        </section>
    );
}
