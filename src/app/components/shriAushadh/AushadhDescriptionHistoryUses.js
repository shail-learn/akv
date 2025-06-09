import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/agriculture/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import image1 from "../../../assets/images/digestive/image1.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import Image from 'next/image';
import { SliderBlur } from '../SliderBlur';
import Titleslider from '../Titleslider';

export const Aushadh = () => {
    const text = {
        banner: banner,
        heading: `Shri. Aushadh Manav – Human Body Organ Garden`,

        title: 'Shri. Aushadh Manav, located in Kh-102, is a dedicated garden space developed to highlight the connection between medicinal plants and human body systems. Spread over 900 square meters and located 802 meters from the Admin Block, the garden offers an immersive experience into the world of traditional healing through nature. <br/> Planted on 15 October 2022, the garden uses drip irrigation via inline lateral to ensure healthy growth of medicinal herbs, each aligned with different parts of the human body.',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}


export const Description = () => {
    const basketData = {
        note: `
        Theme Index: Human Body Organ Garden <br/>
        Location Name: Shri. Aushadh Manav <br/>
        Coordinates: 22°59'40.7"N 77°10'45.9"E <br/>
        Area: 900 sq m <br/>
        Date of Planting: 15 October 2022 <br/>
        Irrigation Method: Drip Irrigation by inline lateral <br/>
        Distance from Admin Block: 802 meters

        `,
        image: info,
    };

    const main_heading = "Description"
    const shortinfo = "A thriving collection of medicinal herbs is being cultivated, each offering unique benefits for different organs of the human body. Discover these natural allies for holistic health and wellness. The garden serves as a living model of how plants support human well-being through targeted healing."

    const GrowthHeading = "It's History";
    const GrowthDescription = "The use of medicinal plants dates back thousands of years, with early humans utilizing them to treat ailments. Ancient civilizations in Egypt, China, India, and Greece recorded their herbal knowledge."

    const slides = [
        {
            image: image1,
            desc: "Sushruta Samhita (c. 600 BCE): An ancient Indian text describing medicinal plants and their use in treatment and surgery.",
        },
        {

            image: image1,
            desc: "Pen Tsao (c. 300 BCE): A Chinese pharmacopoeia by Shen Nong that documented over 300 medicinal plants.",
        },


    ];


    return (
        <>

            <section className="py-12 md:!pt-0  px-4 md:px-8 lg:px-16 bg-[#1B453C]">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <div className="flex flex-col-reverse justify-between lg:flex-row   gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className='text-white text-2xl md:text-3xl font-medium mb-6'>Key Details</h2>
                            <p className="mt-0 md:mt-4 text-white redhat" dangerouslySetInnerHTML={{ __html: basketData.note }} ></p>
                        </div>
                        <div className="w-full md:w-[40%]">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src={basketData.image}
                                    alt="Basket of fruits and vegetables"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
                <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
                    <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
                        {main_heading}
                    </h2>
                    <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
                </div>
            </section>

            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
                GrowthDescription={GrowthDescription}

            />


        </>
    )
}

export const Uses = () => {
    const heading = "Uses"
    const boxslider = [
        {
            heading: "Targeted Healing",
            description: "Provides medicinal plants aligned with specific body parts for focused health benefits."
        },
        {
            heading: "Educational Tool",
            description: "Helps in understanding the relationship between plants and human body systems."

        },
        {
            heading: "Preventive Care",
            description: "Encourages natural remedies for maintaining the health of specific organs or systems."

        },
        {
            heading: "Holistic Wellness",
            description: "Promotes a holistic approach to health by integrating traditional medicinal knowledge with the body's needs."

        },

    ]
    return (
        <>

            <Titleslider heading={heading} boxslider={boxslider} />
        </>
    )
}
