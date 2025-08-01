import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/sangam/banner.webp";
import image2 from "../../../assets/images/projects/sangam/key.webp";
import Image from 'next/image';
import { RiCheckboxCircleFill } from "react-icons/ri";
import image3 from "../../../assets/images/projects/sangam/histroy.webp";
import Titleslider from '../Titleslider';

import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project20/use1.webp";
import use2 from "../../../assets/images/projects/project20/use2.webp";
import use3 from "../../../assets/images/projects/sangam/use3.webp";
import use4 from "../../../assets/images/projects/sangam/use4.webp";
import use5 from "../../../assets/images/projects/sangam/use5.webp";
import use6 from "../../../assets/images/projects/sangam/use6.webp";
import PartnerBg from "../../../assets/images/projects/project20/bg.webp";

export const Sangam = () => {
    const text = {
        banner: banner,
        heading: `Sangam Kund <br> Water Harvesting Pond`,
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
        </>
    )
}



export const Key = () => {
    const description = ` Located at Khasra No. 99, Sangam Kund is a thoughtfully designed pond with a storage capacity of 3.5 crore liters, developed to support sustainable irrigation and water conservation practices at Atulye Krishi Vana. Spread across 7750 sq m, the pond is situated 550 meters from the Admin Block.`

    const heading = "Key Details"
    const infoData = [
        {
            title: "Theme Index",
            description: "Pond",
        },
        {
            title: "Location Name",
            description: "Sangam Kund",
        },
        {
            title: "Coordinates",
            description: `22°59'48.2"N 77°11'01.3"E`,
        },
        {
            title: "Area",
            description: "7750 sq m",
        },
        {
            title: "Water Capacity",
            description: "3.5 crore liters",
        },
        {
            title: "Distance from Admin Block",
            description: "550 m",
        },
    ];

    return (
        <>
            <section className='py-12 px-4 md:px-8 lg:px-16 bg-white'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <div className='md:w-[90%] mx-auto'>
                        <p className='mt-0 md:mt-4 text-black font-medium text-center'
                            dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>

            </section>

            <section className='relative text-center md:text-left   pb-16  pt-20 lg:pb-16 bg-[#f5f5f5]'  >
                <div className='mx-auto max-w-7xl px-4 md:px-6 mx:px-2 relative z-1 '>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-12'>
                        <div className='md:w-[40%] w-full  w-12/12'>
                            <div className='relative'>
                                <Image className='w-full h-full rounded-xl' src={image2} alt='banner' />

                            </div>
                        </div>
                        <div className='md:w-[60%]  w-full  w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{heading}</h2>

                            <div className='my-6 mb-14'>
                                {infoData.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3 mb-4 py-1">
                                        <RiCheckboxCircleFill className="h-5 w-5 text-green-800 mt-1" />
                                        <div>
                                            <h3 className="font-semibold redhat text-left text-lg">{item.title}</h3>
                                            <p className="text-black redhat">{item.description}</p>
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



export const Des = () => {
    const heading = "Description"
    const description = `Sangam Kund is the spiritual and ecological heart of our agroforestry landscape, spread across one acre of thoughtfully nurtured land. Deeply rooted in Indian tradition and shaped through natural design, it embodies the sacred idea of ‘Sangam’—the meeting point of water, biodiversity, and community. <br> <br> This beautifully constructed Kund has a natural water harvesting capacity of two crore litres. It is more than just a conservation structure. It sustains the surrounding vegetation, recharges groundwater, and stands as a peaceful space for reflection, rural rituals, and community renewal. <br> <br> Encircling the Kund are native trees, medicinal herbs, and flowering plants that attract pollinators and wildlife, turning the space into a thriving ecological zone. Sangam Kund plays a crucial role in our water management system by supporting agriculture, enhancing soil health, and maintaining balance within the ecosystem. <br> <br> More than a water body, Sangam Kund represents the timeless connection between nature and human values. It reflects the ancient Indian understanding that true harmony comes from living closely with the environment, with respect and intention.`
    return (
        <section className='text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20'>
            <div className='mx-auto max-w-7xl  px-6'>
                <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{heading}</h2>
            </div>
            <div className='mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10'>
                <div className='w-full md:w-2/3 text-center md:text-left'>

                    <div className='w-full p-4 md:p-8 bg-[#1B453C] rounded-2xl'>
                        <p className='text-white text-base redhat' dangerouslySetInnerHTML={{ __html: description }}>
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/3 text-center'>
                    <Image className='w-full h-full rounded-xl' src={image3} alt='banner' />
                </div>

            </div>
        </section>
    )
}


export const Histroy = () => {
    const heading = "History"
    const description = `The conception of Sangam Kund was rooted in the urgent need for sustainable water management to combat agricultural water scarcity. Envisioned as a rainwater harvesting and storage structure, its development signified a major leap toward eco-friendly farming. <br> <br> Since its construction, the pond has served as a cornerstone of irrigation infrastructure at Atulye Krishi Vana, reflecting the project's long-term commitment to environmental responsibility, resilience, and self-sufficiency.`
    return (
        <section className='relative py-12 mb-8 md:mb-10 md:py-16 bg-[#f5f5f5]'>
            <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                <h2 className='text-3xl md:leading-[1.3] md:text-4xl text-center font-medium redhat text-[#1B453C] mb-8'>{heading}</h2>
                <div className='md:w-[90%] mx-auto'>
                    <p className='mt-0 md:mt-4 text-black font-normal text-center'
                        dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>

        </section>
    )
}


export const Uses = () => {
    const gridBox = "xl:!grid-cols-3 grid3";
    const custom_class = "white_grid grid_padding";
    const whyChooseData = [
        {
            image: use1,
            title: "Irrigation:",
            description:
                "Supplies water to crops and plants, especially vital during dry seasons.",
        },
        {
            image: use2,
            title: "Water Storage: ",
            description:
                "Collects rainwater and runoff, ensuring availability during times of shortage.",
        },
        {
            image: use3,
            title: "Cost Savings:",
            description:
                "Reduces dependency on external water sources, saving on irrigation costs.",
        },


    ];

    const whyChooseData1 = [

        {
            image: use4,
            title: "Sustainable Farming: ",
            description:
                "Encourages groundwater conservation by prioritizing harvested rainwater.",
        },
        {
            image: use5,
            title: "Flood Management:",
            description:
                "Helps absorb excess rainwater, mitigating flood risks on the property.",
        },
        {
            image: use6,
            title: "Ecosystem Support: ",
            description:
                "Enhances biodiversity by offering a habitat for aquatic and nearby wildlife.",
        },
    ]

    return (
        <>

            <Gridbox
                heading="Uses"
                data={whyChooseData}
                className={custom_class}
                gridBox={gridBox}
            />
            <div className='-mt-8'>
                <Gridbox
                    data={whyChooseData1}
                    className={custom_class}
                    gridBox={gridBox}
                />
            </div>



        </>
    );
}


export const Kund = () => {
    const heading = "Sangam Kund";
    const description =
        "Sangam Kund is more than just a water body; it is an integral part of Atulye Krishi Vana’s sustainability framework. With its large capacity, strategic design, and ecological significance, the pond plays a key role in conserving resources, supporting biodiversity, and promoting resilience in farming operations.";
    return (
        <section
            className="relative bg-no-repeat py-14 lg:py-32 bg-cover bg-center w-full my-8 md:my-12 !mb-0"
            style={{ backgroundImage: `url(${PartnerBg.src})` }}
        >

            <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
                <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
                    <h2 className=" w-full  text-3xl md:text-4xl leading-snug font-bold mb-8 md:mb-10 redhat">
                        {heading}
                    </h2>
                    <p
                        className="mb-4 text-sm  md:text-base   w-full"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>


                </div>
            </div>
        </section>
    );
}
