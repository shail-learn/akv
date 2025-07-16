import React from 'react'
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import image1 from "../../../assets/images/training-development/multi/circle1.webp";
import image2 from "../../../assets/images/training-development/multi/circle2.webp";
import image3 from "../../../assets/images/training-development/multi/circle3.webp";
import image4 from "../../../assets/images/training-development/multi/circle4.webp";



import why1 from "../../../assets/images/training-development/multi/why1.webp";
import why2 from "../../../assets/images/training-development/multi/why2.webp";
import why3 from "../../../assets/images/training-development/multi/why3.webp";
import why4 from "../../../assets/images/training-development/multi/why4.webp";
import why5 from "../../../assets/images/training-development/multi/why5.webp";
import { Iconslider } from '../Iconslider';
import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/training-development/multi/key1.webp";
import use2 from "../../../assets/images/training-development/multi/key2.webp";
import use3 from "../../../assets/images/training-development/multi/key3.webp";
import use4 from "../../../assets/images/training-development/multi/key4.webp";
import Plant from "../../../assets/images/training-development/multi/future.svg";
import PartnerBg from "../../../assets/images/training-development/multi/bgimg.webp";

import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image';



export const Program = () => {
    const custom_class1 = "growth_padding growth_white growth_space"
    const GrowthHeading = "What Makes This Program Unique?";
    const slides = [
        {

            image: image1,
            title: "Practical Focus",
            desc: "All modules are delivered with an emphasis on field learning. Participants work directly on demonstration farms, preparing beds, sowing seeds, applying compost, managing water, and harvesting real crops during the training period.            ",

        },
        {

            image: image2,
            title: "Minimal Labour Requirement",
            desc: "The techniques taught reduce the need for daily intensive labour. This makes the method ideal for families where only one or two people can work the land.",
        },
        {

            image: image3,
            title: "Organic, Chemical-Free Approach",
            desc: "No chemical fertilizers or pesticides are used. Farmers learn to rely on indigenous, cost-effective alternatives that improve soil and crop health over time.",
        },
        {

            image: image4,
            title: "Long-Term Sustainability",
            desc: "The training emphasizes the creation of a self-sustaining system. Farmers are taught how to prepare their own seeds, inputs, and natural solutions, reducing dependence on the market.",
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


export const Who = () => {
    const heading = "Who Should Enroll?";
    const custom_class = "original_img padding_argust desktop-p-0 pt-10 mt-0"
    const cardData = [
        {
            icon: why1,
            description: "Farmers with marginal or fragmented land",
        },
        {
            icon: why2,
            description: "Landless labourers with access to leased land",

        },
        {
            icon: why3,
            description: "Women’s Self-Help Groups (SHGs)",

        },
        {
            icon: why4,
            description: "Rural youth seeking alternative livelihood options",

        },
        {
            icon: why5,
            description: "Smallholder families aiming for nutritional security and regular income",

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


export const Benefits = () => {
    const gridBox = "md:!grid-cols-4 grid3";
    const custom_class = "white_grid grid_padding";
    const whyChooseData = [
        {
            image: use1,
            title: "Increased Yield from Small Areas",
            description:
                "Multi-layer farming ensures that sunlight, space, and soil nutrients are fully utilized. One plot can yield vegetables, fruits, legumes, and herbs simultaneously.",
        },
        {
            image: use2,
            title: "Regular Income ",
            description:
                "With different crops growing and maturing at different intervals, farmers can harvest something every few weeks. This provides year-round income instead of depending on a single harvest.",
        },
        {
            image: use3,
            title: "Improved Soil Health",
            description:
                "Organic inputs, cover crops, and multi-cropping methods regenerate the land. After a few months, the soil becomes richer and more productive.",
        },
        {
            image: use4,
            title: "Food Security at Home",
            description:
                "The diversity of crops allows families to meet their own nutritional needs while selling the surplus in the market.",
        },


    ];
    return (
        <>
            <div className='pt-10'>
                <Gridbox
                    heading="Benefits for Farmers"
                    data={whyChooseData}
                    className={custom_class}
                    gridBox={gridBox}
                />
            </div>
        </>
    )
}


export const Support = () => {
    const heading = "Post-Training Support"

    const title = "Our role doesn’t end with training. Every participant receives:"
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
                            quality={90}
                        />

                    </div>
                </div>
            </section>
        </>
    )
}


export const Farming = () => {
    const heading = "A Step Toward Regenerative, Respectful Farming";
    const description =
        "Atulye Krishi Vana’s Multi-Layer Farming Training is more than just an educational program. It is a pathway to economic dignity, ecological restoration, and food sovereignty. For farmers with limited land and resources, this training opens new doors to a life where farming is not a burden, but a source of pride and prosperity. <br> If you believe that even small land can lead to big change, this program is for you. ";
        const tagline = " Learn. Grow. Thrive. <br>  With Atulye Krishi Vana."

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
                    <p
                        className="mb-4 text-lg  md:text-xl font-medium  w-full"
                        dangerouslySetInnerHTML={{ __html: tagline }}
                    ></p>


                </div>
            </div>
        </section>
    );
}
