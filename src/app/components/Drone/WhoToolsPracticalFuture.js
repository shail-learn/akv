import React from 'react'
import { Iconslider } from '../Iconslider';
import why1 from "../../../assets/images/sandalwood/why1.webp";
import why2 from "../../../assets/images/sandalwood/why2.webp";
import why3 from "../../../assets/images/sandalwood/why3.webp";
import why4 from "../../../assets/images/sandalwood/why4.webp";
import why5 from "../../../assets/images/sandalwood/why5.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import image1 from "../../../assets/images/digestive/image1.webp";
import image2 from "../../../assets/images/forest/circle02.webp";
import image3 from "../../../assets/images/forest/circle03.webp";
import Plant from "../../../assets/images/training-development/multi/future.svg";
import PartnerBg from "../../../assets/images/training-development/multi/bgimg.webp";

import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image';

export const Who = () => {
    const heading = "Who Should Attend This Training?";
    const custom_class = "original_img padding_argust desktop-p-0 pt-10 mt-0"
    const cardData = [
        {
            icon: why1,
            description: "Small and marginal farmers wanting to upgrade their practices",
        },
        {
            icon: why2,
            description: "Youth interested in agri-tech careers or drone-as-a-service businesses",

        },
        {
            icon: why3,
            description: "Farmer Producer Organisations (FPOs)",

        },
        {
            icon: why4,
            description: "Members of SHGs involved in input distribution",

        },
        {
            icon: why5,
            description: "Agronomists and field extension workers",

        },
        {
            icon: why5,
            description: "Rural entrepreneurs who want to provide spraying and mapping services",

        },

    ];

    return (
        <>
        <div className='py-14'>
            <Iconslider
                card={cardData}
                heading={heading}
                custom_class={custom_class}
            />
</div>

        </>
    );
}


export const Tools = () => {
    const custom_class1 = "growth_padding growth_white growth_space"
    const GrowthHeading = "What Makes This Program Unique?";
    const slides = [
        {

            image: image1,
            title: "Join the Atulye Krishi Vana network for peer support",

        },
        {

            image: image2,
            title: "Access periodic updates on drone policies and innovations",

        },
        {

            image: image3,
            title: "Attend refresher workshops or advanced mapping modules",
        },
        {

            image: image3,
            title: "Seek mentorship for starting drone service units",
        },
        {

            image: image3,
            title: "Get connected with leasing partners and cooperatives",
        },


    ];
    return (
        <>
            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
                className={custom_class1}
            />

        </>
    )
}


export const Practical = () => {
    const heading = "Practical Sessions"

    const title = "Every day includes field flying practice, spraying simulations, and data review exercises. Participants get to operate different drone models under instructor supervision and learn how to adjust settings based on crop type and field size."
    const futurePlans = [
        "Printed guides and crop calendars for reference",
        'Help in identifying buyers and markets',
        "Assistance in forming collectives for input purchase and produce sales",
        "Seasonal reminders and updates from the Atulye Krishi Vana team",
    ];


    return (
        <>

            <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-20">
                <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse justify-between md:flex-row items-center gap-10">

                    <div className="w-full md:w-[45%] text-center md:text-left">
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-black mb-2">
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
                                    <p className="text-[#141414] text-left opacity-80">{plan}</p>
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
                            quality={100}
                        />

                    </div>
                </div>
            </section>
        </>
    )
}


export const Future = () => {
    const heading = "The Future of Farming is in the Air";
    const description =
        "With climate patterns shifting, input prices rising, and precision becoming a necessity, drones offer a vital tool to make agriculture smarter, safer, and more scalable. Atulye Krishi Vana’s training program ensures that even farmers in remote or marginal areas are not left behind in this transformation. <br><br> The drone is not a replacement for the farmer—it is an extension of the farmer’s vision, offering a bird’s-eye view to make better decisions from the ground.";


    return (
        <section
            className="relative bg-no-repeat !mb-0 py-12 lg:py-20 bg-cover w-full my-8 md:my-12 !mt-0"
            style={{ backgroundImage: `url(${PartnerBg.src})` }}
        >

            <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
                <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
                    <h2 className=" w-full  text-3xl md:text-4xl leading-snug font-bold mb-8 md:mb-10 redhat">
                        {heading}
                    </h2>
                    <p
                        className="mb-6 text-sm  md:text-base   w-full"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>



                </div>
            </div>
        </section>
    );
}
