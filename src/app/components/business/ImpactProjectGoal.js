import React from 'react'
import Image from 'next/image';
import impactbg from "../../../assets/images/business1/impactbg.webp";
import icon1 from "../../../assets/images/business1/Icon1.png";
import icon2 from "../../../assets/images/business1/Icon2.png";
import icon3 from "../../../assets/images/business1/Icon3.png";
import icon4 from "../../../assets/images/business1/Icon4.png";
import icon5 from "../../../assets/images/business1/Icon5.png";
import icon6 from "../../../assets/images/business1/Icon6.png";
import icon7 from "../../../assets/images/business1/Icon7.png";
import icon8 from "../../../assets/images/business1/Icon8.png";
import icon9 from "../../../assets/images/business1/Icon9.png";
import image3 from "../../../assets/images/business1/projectimg1.webp";
import explore1 from "../../../assets/images/about/explore1.svg";
import explore2 from "../../../assets/images/about/explore2.svg";
import explore3 from "../../../assets/images/about/explore3.svg";
import explore4 from "../../../assets/images/about/explore4.svg";
import explore5 from "../../../assets/images/about/explore5.svg";

import earth from "../../../assets/images/about/earth.svg";
import line from "../../../assets/images/business1/Line.svg";
import topline from "../../../assets/images/business1/LineTop.svg";





export const Impact = () => {
    const heading = 'Our Impact';
    const impactData = [
        {
            title: "Groundwater levels",
            description: "We have measured the change in groundwater levels.",
            icon: icon1
        },
        {
            title: "Temperature",
            description: "Maximum (47.8°C to 36.2°C), Minimum (20.4°C to 18.2°C).",
            icon: icon2,
        },
        {
            title: "Micros population in soil",
            description: "We have measured the change in Micros population in soil.",
            icon: icon3,
        },
        {
            title: "Available Phosphorus",
            description: "In Kgs per Hectare (26.5 Kg/Ha to 27.5 Kg/Ha).",
            icon: icon4,
        },
        {
            title: "Organic matter",
            description: "In Percentage (0.66 % to 0.90 %).",
            icon: icon5,
        },
        {
            title: "Rainfall",
            description:
                "Analyse rainfall data before and after our initiatives (700 MM to 1100 MM).",
            icon: icon6,
        },
        {
            title: "Available Nitrogen",
            description: "In Kgs per Hectare (255 Kg/Ha to 270 Kg/Ha).",
            icon: icon7,
        },
        {
            title: "Available Potassium",
            description: "In Kgs per Hectare (385 Kg/Ha to 398 Kg/Ha).",
            icon: icon8,
        },
        {
            title: "Sustainable Agroforestry Models",
            description:
                "Cleaning aDeveloping and implementing sustainable agroforestry models was a changeling work. It's essential to measure the carbon sequestration potential of these models and the positive impact on biodiversity.nd shampooing your pet to keep their coat fresh and free of",
            icon: icon9,
        },
    ];
    return (
        <>
            <section className='relative text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20' style={{ background: `url(${impactbg.src})center center / cover no-repeat` }} >
                <div className="absolute h-full top-0 bottom-0 w-full bg-[#1B453C] opacity-1 mix-blend-multiply"></div>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='lg:w-12/12  w-full  w-12/12'>
                        <h2 className='text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-center text-white mb-16'>{heading}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {impactData.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-start p-2 lg:p-6"
                            >
                                <div className='rounded w-16 h-16 shrink-0' >
                                    <Image src={item.icon} alt="icon" className='w-full h-full' />
                                </div>
                                <div className='pl-4 text-white text-left'>
                                    <h3 className="text-lg md:text-2xl  font-medium">{item.title}</h3>
                                    <p className="mt-2 font-extralight text-base md:text-[17px]" >{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}




export const Project = () => {
    const heading = "PROJECTS & INITIATIVES"
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
        {
            title: "Automated Green Zone & Carbon Credit Marketplace",
            description: "• Star-gazing zones.\n• Agro-wellness centers.",
            icon: explore5,
        },
    ];
    return (
        <>
            <section
                className=" bg-[#9A9771] pt-0 pb-14 lg:pt-0 lg:pb-0 mt-0">
                <div className='mx-auto max-full justify-between flex flex-wrap md:flex-nowrap gap-0 md:gap-12'>
                    <div className='w-full md:w-5/12'>
                        <Image className='h-auto w-full xl:h-[900px] object-cover' src={image3} alt="banner" />

                    </div>
                    <div className='w-full md:w-6/12'>
                        <h2 className="lg:leading-snug text-white redhat mb-14 pt-16 text-center md:text-left text-3xl md:text-4xl  lg:text-[40px] font-semibold w-full"> {heading}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 px-4 lg:pr-8">
                            {initiatives.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 border-b border-white pb-6 border-opacity-40 ">

                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-[#344C31] p-4" >
                                            <Image src={item.icon} alt={item.title} width={50} height={50} className="w-full h-full" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl md:text-2xl mb-1 redhat font-medium text-white">{item.title}</h3>
                                        <p className="text-white  redhat text-base md:text-[17px] whitespace-pre-line">{item.description}</p>
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


export const Goal = () => {
    const vedio = "https://www.akv.org.in/admin/rmimages/makingadiffimage.mp4"
    const heading = 'Making a Difference on the Ground'
    const heading1 = "Carbon Sequestration in INDIA"
    const info1 = `Plantation of <b>100,000</b> trees, reducing carbon emissions by <b>10,000</b> tons over five years.`

    const heading2 = "Carbon Sequestration in INDIA"
    const info2 = `Plantation of 100,000 trees, reducing carbon emissions by 10,000 tons over five years.`

    const heading3 = "Carbon Sequestration in INDIA"
    const info3 = `Plantation of 100,000 trees, reducing carbon emissions by 10,000 tons over five years.`

    const heading4 = "Carbon Sequestration in INDIA"
    const info4 = `Plantation of 100,000 trees, reducing carbon emissions by 10,000 tons over five years.`

    return (
        <section className='relative text-center md:text-left py-14 pt-10'>

            <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                <div
                    className="bg-cover bg-center relative " >
                    <div className="iframe-container">
                        <video

                            className="w-full h-full object-cover md:scale-100 scale-110"
                            src={vedio}
                            autoPlay
                            loop
                            muted
                        />

                    </div>
                </div>
                {/* <div className='lg:w-12/12  w-full  w-12/12'>
                    <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-center text-[#1B453C] mb-16'>{heading}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <div className='flex flex-wrap h-full w-full'>
                            <div className='self-start w-full mb-10'>
                                <h3 className='text-black redhat lg:text-2xl text-xl text-center'>{heading1}</h3>
                                <p className="text-center redhat lg:mt-6 mt-4 text-[#1B453C]" dangerouslySetInnerHTML={{ __html: info1 }}></p>

                            </div>
                            <div className='self-end w-full'>
                                <h3 className='text-black redhat lg:text-2xl text-xl text-center'>{heading2}</h3>
                                <p className="text-center redhat lg:mt-6 mt-4 text-[#1B453C]" dangerouslySetInnerHTML={{ __html: info2 }}></p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6 ">
                        <div className='relative'>
                        <Image src={topline} alt="icon" className='w-28 absolute rotate-[270deg] hidden md:block -left-0 top-10 -z-10' />
                             <Image src={line} alt="icon" className='w-28 absolute rotate-[124deg] hidden md:block -left-16 top-[55%] -z-10' />

                            <Image src={earth} alt='earth' className='w-full h-full' />

                            <Image src={topline} alt="icon" className='w-28 absolute hidden md:block -right-0 top-10 -z-10' />
                             <Image src={line} alt="icon" className='w-28 absolute hidden md:block -right-16 top-[55%] -z-10' />
                        </div>
                    </div>
                    <div className="md:col-span-3 ">
                        <div className='flex flex-wrap h-full w-full'>
                            <div className='self-start w-full mb-10'>
                                <h3 className='text-black redhat lg:text-2xl text-xl text-center'>{heading3}</h3>
                                <p className="text-center redhat lg:mt-6 mt-4 text-[#1B453C]" dangerouslySetInnerHTML={{ __html: info3 }}></p>
                            </div>
                            <div className='self-end w-full'>
                                <h3 className='text-black redhat lg:text-2xl text-xl text-center'>{heading4}</h3>
                                <p className="text-center redhat lg:mt-6 mt-4 text-[#1B453C]" dangerouslySetInnerHTML={{ __html: info4 }}></p>
                            </div>
                        </div>

                    </div>
                </div> */}


            </div>
        </section>
    )
}