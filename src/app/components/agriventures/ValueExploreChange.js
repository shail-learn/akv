import React from 'react'
import value1 from "../../../assets/images/about/value1.svg";
import value2 from "../../../assets/images/about/value2.svg";
import value3 from "../../../assets/images/about/value3.svg";
import value4 from "../../../assets/images/about/value4.svg";

import indicateicon from "../../../assets/images/about/indicate.svg";
import image3 from "../../../assets/images/about/exploreimg.webp";
import explore1 from "../../../assets/images/about/explore1.svg";
import explore2 from "../../../assets/images/about/explore2.svg";
import explore3 from "../../../assets/images/about/explore3.svg";
import explore4 from "../../../assets/images/about/explore4.svg";

import change1 from "../../../assets/images/about/location.svg";
import change2 from "../../../assets/images/about/mail.svg";
import change3 from "../../../assets/images/about/web.svg";



import Image from 'next/image';
import Link from 'next/link';

export const Value = () => {
    const heading = 'Our Core Values'
    const coreValues = [
        {
            title: "Sustainability",
            description: "Every project is designed with the planet’s future in mind.",
            icon: value1,
        },
        {
            title: "Innovation",
            description: "Leveraging cutting-edge technologies to enhance productivity.",
            icon: value2,
        },
        {
            title: "Empowerment",
            description: "Supporting communities with knowledge, skills, and opportunities.",
            icon: value3,
        },
        {
            title: "Transparency",
            description: "Building trust through ethical practices and accountability.",
            icon: value4,
        },
    ];
    return (
        <>
            <section className='relative text-center bg-[#F5F5F5] md:text-left pt-12 pb-12 lg:pt-10 lg:pb-20'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative'>
                    <h2 className='text-3xl text-center md:leading-[1.3] md:text-4xl font-medium redhat text-black mt-4 mb-16'>{heading}</h2>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center">

                                <div className="w-32 h-32 flex items-center justify-center rounded-full outline-dashed outline-[#c4a87c]  outline-2  border-4 border-solid border-[#F5F5F5] bg-[#1B453C]">
                                    <Image src={value.icon} alt={value.title} width={50} height={50} className="w-20 h-20" />
                                </div>


                                {index !== coreValues.length - 1 && (
                                    <div className="absolute right-[-50px] top-1/2 transform -translate-y-[100px] hidden md:block">
                                        <Image src={indicateicon} width={50} height={50} alt="arrow" className="w-14 h-14 " />
                                    </div>
                                )}


                                <h3 className="text-lg lg:text-xl redhat font-semibold text-gray-900 mt-6">{value.title}</h3>
                                <p className="text-[#141414] opacity-75 redhat mt-2 max-w-xs">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}


export const Explore = () => {
    const heading = "Explore Our Initiatives"
    const initiatives = [
        {
            title: "Krishivana Agroforestry",
            description: "A sustainable agroforestry project transforming barren land into vibrant ecosystems.",
            icon: explore1,
        },
        {
            title: "Surabhi – Fodder Farming",
            description: "Focused on large-scale fodder farming in Rajasthan and Uttar Pradesh to support livestock.",
            icon: explore2,
        },
        {
            title: "Purnima – Contract Farming Hub",
            description: "Developing clusters for high-value crops and timber production.",
            icon: explore3,
        },
        {
            title: "Eco-Tourism Highlights:",
            description: "• Star-gazing zones.\n• Agro-wellness centers.\n• Cultural experiences with local communities.",
            icon: explore4,
        },
    ];
    return (
        <>

            <section
                className=" bg-[#9A9771] pt-0 pb-14 lg:pt-0 lg:pb-0">
                <div className='mx-auto max-full flex flex-wrap md:flex-nowrap gap-0 md:gap-12'>
                    <div className='w-full md:w-6/12'>
                        <Image className='h-full w-full' src={image3} alt="banner" />

                    </div>
                    <div className='w-full md:w-6/12'>
                        <h2 className="lg:leading-snug text-white redhat mb-14 pt-16 text-center md:text-left text-3xl md:text-4xl  font-medium  w-full"> {heading}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 px-4 lg:px-0">
                            {initiatives.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 border-b border-white pb-6 border-opacity-40 ">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-[#344C31] p-4" >
                                            <Image src={item.icon} alt={item.title} width={40} height={40} className="w-full h-full" />
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div>
                                        <h3 className="text-xl mb-1 redhat font-medium text-white">{item.title}</h3>
                                        <p className="text-white redhat text-sm whitespace-pre-line">{item.description}</p>
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



export const Change = () => {
    const heading = "Be A Part Of Change",
        description = "In creating a sustainable future. Whether you are a farmer, investor, or nature enthusiast, A&M Agriventures welcomes you to contribute to our journey."
    const info = [
        {
            icon: change1,
            title: "Village: Atulye Krishi Vana Mithlesh Nagar, Village, Ramgarh, Sehore, Madhya Pradesh, India."
        },
        {
            icon: change2,
            title: "info@akv.org.in"
        },
        {
            icon: change3,
            title: "www.akv.org.in"
        },
    ]
    return (
        <>

            <section
                className=" bg-[#9A9771] px-4 pt-14 pb-14 lg:pt-16 lg:pb-16" style={{ background: "linear-gradient(131deg, rgba(248, 204, 119, 1) 0%, rgb(248 204 119 / 52%) 70%)" }}>
                <div className='mx-auto max-w-7xl w-full'>
                    <div className='mx-auto max-full flex flex-wrap md:flex-nowrap gap-0 md:gap-12 '>
                        <div className='w-full md:w-6/12 text-center md:text-left'>
                            <h2 className="lg:leading-snug text-[#344C31] redhat text-center mb-6 md:text-left text-3xl md:text-4xl  font-medium  w-full"> {heading}</h2>
                            <Link href="https://atulye-foundation.org" target='_blank' className="poppins mx-auto text-center  font-normal text-white w-[200px] py-3 rounded-[4px] bg-[#344C31] inline-block transition-all duration-500  hover:bg-white hover:text-[#344C31]">JOIN US</Link>
                            <p className='mt-6 text-black text-justify opacity-80'>{description}</p>

                        </div>
                        <div className='w-full md:w-6/12 '>
                            <div className='h-[4px] w-[150px] mt-8 mb-6 rounded-[8px] bg-[#1B453C]'></div>
                            <ul>
                                {info.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 mb-6">
                                        <div className="flex-shrink-0">
                                            <Image src={item.icon} alt={item.title} width={40} height={40} className="w-6" />
                                        </div>
                                        <p className="text-black redhat text-lg whitespace-pre-line">{item.title}</p>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
