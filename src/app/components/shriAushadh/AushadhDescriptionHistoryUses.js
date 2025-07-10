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
import { RiCheckboxCircleFill } from "react-icons/ri";
import image3 from "../../../assets/images/projects/project20/histroy.webp";
import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project20/use1.webp";
import use2 from "../../../assets/images/projects/project20/use2.webp";
import use3 from "../../../assets/images/projects/project20/use3.webp";
import use4 from "../../../assets/images/projects/project20/use4.webp";
import use5 from "../../../assets/images/projects/project20/use5.webp";
import use6 from "../../../assets/images/projects/project20/use6.webp";
import image2 from "../../../assets/images/projects/project20/key.webp";

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
            {/* <Wave /> */}
        </>
    )
}


export const Description = () => {
    const heading = "Key Details"
    const infoData = [
        {
            title: "Theme Index",
            description: "Human Body Organ Garden",
        },
        {
            title: "Location Name",
            description: "Shri. Aushadh Manav",
        },
        {
            title: "Coordinates",
            description: `22°59'40.7"N 77°10'45.9"E`,
        },
        {
            title: "Area",
            description: "900 sq m",
        },

        {
            title: "Date of Planting",
            description: "15 October 2022",
        },

        {
            title: "Irrigation Method",
            description: "Drip Irrigation by inline lateral",
        },

        {
            title: "Distance from Admin Block",
            description: "802 meters",
        },
    ];



    const main_heading = "Description"
    const shortinfo = "A thriving collection of medicinal herbs is being cultivated, each offering unique benefits for different organs of the human body. Discover these natural allies for holistic health and wellness. The garden serves as a living model of how plants support human well-being through targeted healing."

    const GrowthHeading = "It's History";
    const GrowthDescription = "The use of medicinal plants dates back thousands of years, with early humans utilizing them to treat ailments. Ancient civilizations in Egypt, China, India, and Greece recorded their herbal knowledge."

    const slides = [
        {
            heading: "Sushruta Samhita (c. 600 BCE):",
            description: "An ancient Indian text describing medicinal plants and their use in treatment and surgery.",
        },
        {

            heading: "Pen Tsao (c. 300 BCE):",
            description: "A Chinese pharmacopoeia by Shen Nong that documented over 300 medicinal plants.",
        },
        {

            heading: "De Materia Medica (c. 50–70 CE):",
            description: "Compiled by Greek physician Pedanius Dioscorides, this work systematically described around 600 plants and their therapeutic uses.",
        },
        {

            heading: "The Canon of Medicine (1025 CE):",
            description: "Written by Persian polymath Ibn Sina (Avicenna), it became a foundational text in both the Islamic world and Europe, detailing hundreds of plant-based remedies and their applications.",
        },


    ];


    return (
        <>

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

            <section className='text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20'>
                <div className='mx-auto max-w-7xl  px-6'>
                    <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{main_heading}</h2>
                </div>
                <div className='mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10'>
                    <div className='w-full md:w-2/3 text-center md:text-left'>

                        <div className='w-full p-4 md:p-8 bg-[#1B453C] rounded-2xl'>
                            <p className='text-white text-base redhat' dangerouslySetInnerHTML={{ __html: shortinfo }}>
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 text-center'>
                        <Image className='w-full h-full rounded-xl' src={image3} alt='banner' />
                    </div>

                </div>
            </section>

            <Titleslider heading={GrowthHeading} boxslider={slides} shortdescription={GrowthDescription} />



        </>
    )
}

export const Uses = () => {
    const gridBox = "xl:!grid-cols-4 grid3";
    const custom_class = "white_grid grid_padding";
    const whyChooseData = [
        {
            image: use1,
            title: "Targeted Healing:",
            description:
                "Provides medicinal plants aligned with specific body parts for focused health benefits.",
        },
        {
            image: use2,
            title: "Educational Tool: ",
            description:
                "Helps in understanding the relationship between plants and human body systems.",
        },
        {
            image: use3,
            title: "Preventive Care:",
            description:
                "Encourages natural remedies for maintaining the health of specific organs or systems.",
        },
        {
            image: use3,
            title: "Holistic Wellness:",
            description:
                "Promotes a holistic approach to health by integrating traditional medicinal knowledge with the body's needs.",
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
