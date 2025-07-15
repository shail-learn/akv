import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project18/banner.webp";
import image2 from "../../../assets/images/projects/project18/key.webp";
import Image from 'next/image';
import { RiCheckboxCircleFill } from "react-icons/ri";
import image3 from "../../../assets/images/projects/project18/desc.webp";
import Titleslider from '../Titleslider';

import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project18/key1.webp";
import use2 from "../../../assets/images/projects/project18/key2.webp";
import use3 from "../../../assets/images/projects/project18/key3.webp";
import use4 from "../../../assets/images/projects/project20/use4.webp";
import use5 from "../../../assets/images/projects/project20/use5.webp";
import use6 from "../../../assets/images/projects/project20/use6.webp";
import PartnerBg from "../../../assets/images/projects/project20/bg.webp";

export const Naimish = () => {
    const text = {
        banner: banner,
        heading: `Naimish Kund <br> Sacred Water Body`,
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
        </>
    )
}



export const Key = () => {
    const description = ` Situated at <b>Khasra No. 100, Naimish Kund</b> is a tranquil and ecologically vital pond at Atulye Krishi Vana. Spread across <b>2400 sq m</b>, this water body was meticulously carved by stone excavation and now supports sustainable water use and biodiversity. Located <b>720 meters</b> from the Admin Block.`

    const heading = "Key Details"
    const infoData = [
        {
            title: "Theme Index",
            description: "Pond",
        },
        {
            title: "Location Name",
            description: "Naimish Kund",
        },
        {
            title: "Coordinates",
            description: `22°59'55.2"N 77°11'11.2"E`,
        },
        {
            title: "Area",
            description: "2400 sq m",
        },
        {
            title: "Distance from Admin Block",
            description: "720 m",
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
    const description = `Naimish Kund is a serene and sacred water body nestled within our agroforestry landscape. Inspired by the legendary Naimisharanya forest, celebrated in Indian scriptures as a place of deep meditation and divine knowledge, this reservoir brings together ancient spiritual values and sustainable ecological practices. <br> <br> Created as a peaceful ecological haven, Naimish Kund functions as a natural rainwater harvesting system. It plays a vital role in recharging groundwater, nurturing surrounding plantations, and supporting a microhabitat for birds and aquatic life. Surrounded by native flora and thoughtfully designed agroforestry zones, it becomes a vibrant part of the living landscape. <br> <br> More than just an ecological feature, Naimish Kund is also a quiet retreat for reflection. It invites visitors to slow down, reconnect with the earth, and experience nature's calming rhythm in a space that honors spiritual presence and environmental balance. <br> <br> Naimish Kund is a symbol of purity, wisdom, and the continuous flow of life. It reminds us that sacred ecology can heal both the land and the spirit.`
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
    const shortdescription = "Inspired by the sacred site of Naimish Kund in Sitapur district, Uttar Pradesh, the pond at Atulye Krishi Vana pays homage to an ancient place of spiritual significance."

    const boxslider = [
        {
            heading: "Naimish Kund",
            description: "Naimish Kund in Uttar Pradesh is part of Naimisharanya, a revered pilgrimage destination mentioned in the Mahabharata and Puranas."
        },
        {
            heading: "Yagnas",
            description: "This sacred pond is believed to possess purifying qualities, and the forest surrounding it was once a hub for sages performing yagnas and penance."

        },
        {
            heading: "Spiritual Heritage",
            description: "The spiritual heritage and mythological associations of Naimish Kund, including its connection to sages like Dattatreya, inspired the creation of its namesake pond at Atulye Krishi Vana to integrate cultural reverence with sustainable ecology."

        },
        {
            heading: "Naimish Kund",
            description: "Naimish Kund in Uttar Pradesh is part of Naimisharanya, a revered pilgrimage destination mentioned in the Mahabharata and Puranas."
        },


    ]
    return (
        <>
            <Titleslider shortdescription={shortdescription} heading={heading} boxslider={boxslider} />
        </>
    )
}


export const Uses = () => {
    const gridBox = "xl:!grid-cols-3 grid3";
    const custom_class = "white_grid grid_padding";
    const whyChooseData = [
        {
            image: use1,
            title: "Sustainable Management:",
            description:
                " Captures and stores rainwater to support groundwater recharge and reduce environmental stress.",
        },
        {
            image: use2,
            title: "Emergency Supply: ",
            description:
                " Acts as a backup water source for irrigation and other purposes during water shortages.",
        },
        {
            image: use3,
            title: "Redistribution:",
            description:
                "Functions as a feeder pond, transferring water to Sangam Kund and Mansarovar Pond as required for optimal usage across the farm.",
        },

    ];


    return (
        <>

            <Gridbox
                heading="Uses"
                data={whyChooseData}
                className={custom_class}
                gridBox={gridBox}
            />
        </>
    );
}



export const Kund = () => {
    const heading = "Naimish Kund";
    const description =
        "Naimish Kund serves not only as a practical irrigation reservoir but also as a symbol of spiritual inspiration and ecological mindfulness. Rooted in mythology and realized through thoughtful design, it supports Atulye Krishi Vana’s mission to harmonize tradition with sustainability.";
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
