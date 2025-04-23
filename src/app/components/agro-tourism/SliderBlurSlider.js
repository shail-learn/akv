'use client'
import React, { useState } from 'react';
import Image from "next/image";
import story1 from "../../../assets/images/AgroTourism/coconut.webp";
import story2 from "../../../assets/images/AgroTourism/story2.webp";
import story3 from "../../../assets/images/AgroTourism/story3.webp";
import story4 from "../../../assets/images/AgroTourism/spary.webp";
import image2 from "../../../assets/images/AgroTourism/hand.webp";
import bgstay from "../../../assets/images/AgroTourism/stay-bg.webp";
import impact1 from "../../../assets/images/AgroTourism/Farm-Cottages.webp";
import impact2 from "../../../assets/images/AgroTourism/Camping.webp";
import impact3 from "../../../assets/images/AgroTourism/Farm.webp";
import impact4 from "../../../assets/images/AgroTourism/Relax.webp";




import { IoMdCheckmarkCircle } from "react-icons/io";



import { SliderThree } from '../SliderThree';
import { SliderBlur } from '../SliderBlur';
export const Slider = () => {
    const heading = "What Awaits You at Atulye Krishi Vana?"
    const subheading = "Immersive Agroforestry Tours"
    const content = "Discover how we have transformed barren lands into a lush, productive agroforestry ecosystem through innovative farming techniques. Walk through our plantations featuring:"
    const stories = [
        {
            image: story1,
            title: "Coconut, Pineapple, Arecanut, Orange, and Jackfruit",
            description:
                "Learn about intercropping, carbon sequestration, and soil enrichment.",
        },
        {
            image: story2,
            title: "Bamboo & Timber Crops",
            description:
                "See how sustainable forestry contributes to environmental restoration and economic sustainability.",
        },
        {
            image: story3,
            title: "Medicinal & Spice Gardens",

            description:
                "Explore Ayurveda in action with turmeric, ginger, and other healing plants cultivated organically.",
        },
        {
            image: story4,
            title: "Agroforestry & Climate Action",

            description:
                "Understand how trees reduce carbon emissions, improve soil health, and restore biodiversity.",
        },
    ];

    const title2 = `Our guided tours provide deep insights into agroforestry and sustainable agriculture, making them <b>perfect for students, researchers, and eco-enthusiasts.</b>`

    const heading2 = "Hands-On Farming Activities"
    const points = [
        {
            title: `<b>Tree Planting Drives –</b> Contribute to reforestation efforts and plant a tree with your name tag.`,
        },
        {
            title: `<b>Organic Composting & Waste Management –</b> Learn how we convert farm waste into
            valuable bio-products.`,
        },
        {
            title: `<b>Crop Cultivation & Harvesting –</b> Experience growing seasonal crops, picking fresh fruits, and understanding regenerative farming.`,
        },
        {
            title: `<b>Bee-Keeping & Honey Production –</b> Discover the importance of bees in agriculture and taste freshly harvested organic honey.`,
        },
        {
            title: `<b>Livestock & Dairy Farming –</b> Visit our Goshala (Cow Shelter), Poultry, and Camel Farm to learn about animal husbandry in a sustainable ecosystem.`,
        },
    ]
    return (
        <>
            <section className='py-10 lg:py-16'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
                    <div className='flex flex-col lg:flex-row justify-between  gap-4 lg:gap-12'>
                        <div className='lg:w-6/12  w-full w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-6'>{heading}</h2>

                        </div>
                        <div className='lg:w-6/12  w-full w-12/12'>
                            <h3 className='text-[#2D6B5E] md:text-2xl text-xl font-medium mb-4 text-justify redhat' dangerouslySetInnerHTML={{ __html: subheading }}></h3>
                            <p className='text-black text-base text-justify redhat' dangerouslySetInnerHTML={{ __html: content }}></p>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-16'>

                        <SliderThree stories={stories} />
                    </div>

                    <div className='pt-10'>
                        <div className='w-full md:w-2/4'>
                            <p className='text-black text-base text-justify redhat' dangerouslySetInnerHTML={{ __html: title2 }} />
                        </div>
                        <hr className='my-6 md:my-8' />
                        <div className='flex flex-col lg:flex-row justify-between  gap-4 lg:gap-12'>
                            <div className='lg:w-6/12  w-full w-12/12'>
                                <Image src={image2} alt='images' className='w-full rounded-xl' />

                            </div>
                            <div className='lg:w-6/12  w-full w-12/12'>
                                <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-black mb-4'>{heading2}</h2>
                                <p className='text-black text-base text-justify redhat' dangerouslySetInnerHTML={{ __html: content }}></p>

                                <ul className='mt-6 md:mt-8'>
                                    {points.map((point, index) => (
                                        <li key={index} className="text-black text-base text-justify redhat mb-3 list-none flex items-start gap-2">
                                            <IoMdCheckmarkCircle className="mt-1 text-xl min-w-6 text-[#2D6B5E]" />
                                            <span dangerouslySetInnerHTML={{ __html: point.title }} />
                                        </li>
                                    ))}

                                </ul>
                                <p className='text-black text-base text-justify mt-8 redhat'>Our farm activities are perfect for families, school trips, and corporate teams looking for an eco-friendly retreat.</p>

                            </div>
                        </div>
                    </div>




                </div>
            </section>

        </>
    )
}



export const BlurSlider = () => {
    const heading = "Stay in the Heart of Nature"
    const text1 = "At Atulye Krishi Vana, our eco-friendly accommodations let you stay amidst lush greenery while supporting sustainable tourism."
    const text2 = "Reconnect with nature while enjoying modern comforts in a responsible and eco-conscious way."
    const boxslider = [
        {
            image: impact1,
            heading: "Farm Cottages & Eco-Stays",
            description: 'Traditional cottages built using local materials, offering a rustic yet comfortable experience. ',
        },
        {
            image: impact2,
            heading: "Camping & Bonfire Nights",
            description: 'Sleep under the stars, surrounded by the soothing sounds of nature.',
        },
        {
            image: impact3,
            heading: "Farm-to-Table Dining",
            description: 'Enjoy wholesome organic meals made from fresh farm produce, cooked with local flavors. ',
        },
        {
            image: impact4,
            heading: "Relax by the Water Ponds",
            description: 'Unwind near our 6-crore-liter water storage ponds, supporting irrigation, wildlife, and agro-tourism activities.',
        },

    ]
    return (
        <>

            <section
                className="relative  pt-16 pb-16 lg:pt-20 lg:pb-20" style={{ background: `url(${bgstay.src})center center / cover no-repeat` }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
                <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
                    <div className='flex flex-wrap lg:flex-nowrap justify-between  gap-6 px-0 md:px-6 z-10 relative lg:px-2'>
                        <div className='w-full lg:w-3/12 '>
                            <div className='flex justify-between h-full flex-wrap'>

                                <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                                    {heading}
                                </h2>
                                <p className='text-sm md:text-[15px] text-center md:text-left text-white '>{text1}</p>


                                <p className='text-sm md:text-[15px] h-full   text-center md:text-left text-white mt-6 md:mt-20 lg:mt-32'>{text2}</p>

                            </div>
                        </div>

                        <div className='w-full lg:w-8/12'>
                            <SliderBlur boxslider={boxslider} />

                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}
