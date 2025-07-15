import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project12/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import image1 from "../../../assets/images/digestive/image1.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import image2 from "../../../assets/images/projects/project12/key.webp";
import Image from 'next/image';
import { RiCheckboxCircleFill } from "react-icons/ri";
import Titleslider from '../Titleslider';
import image3 from "../../../assets/images/projects/project12/desc.webp";
import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project12/key1.webp";
import use2 from "../../../assets/images/projects/project12/key2.webp";
import use3 from "../../../assets/images/projects/project12/key3.webp";
import use4 from "../../../assets/images/projects/project12/key4.webp";
import use5 from "../../../assets/images/projects/project12/key5.webp";
import use6 from "../../../assets/images/projects/project12/key6.webp";


export const Pabuji = () => {
    const text = {
        banner: banner,
        heading: `Shri. Pabuji Ushtralaya – Camel Shelter`,

        title: 'Shri. Pabuji Ushtralaya, located in Khasra No. 112, is a dedicated camel house built to support farm security at Atulye Krishi Vana. Spread across 140 square meters and located 400 meters from the Admin Block, this facility ensures a comfortable, safe, and well-maintained environment for three camels. <br/> The shelter is equipped with feeding zones, resting areas, and ample ventilation, supporting the overall health and alertness of camels engaged in security duties across the farm.',
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
            description: "Untalaya",
        },
        {
            title: "Location Name",
            description: "Shri. Pabuji Ushtralaya",
        },
        {
            title: "Coordinates",
            description: `22°59'41.2"N 77°10'57.3"E`,
        },
        {
            title: "Area",
            description: "140 sq m",
        },

        {
            title: "Distance from Admin Block",
            description: "400 meters",
        },
    ];



    const main_heading = "Description"
    const shortinfo = "Three camels are sheltered in the Ushtralaya and trained for farm security duties. The structure is designed to provide them with a safe and healthy living space that supports their physical well-being and readiness for their role in farm protection."

    const GrowthHeading = "History";
    const GrowthDescription = "Shri. Pabuji Ushtralaya, also referred to as the Pabuji Temple, draws its name and inspiration from Pabuji, a legendary folk hero and saint of Rajasthan. Deeply revered among the Rabari community, Pabuji is known for his commitment to the protection of people and livestock in the region."


    const slides = [
        {
            heading: "Pabuji’s Camel:",
            description: " Folk legends often depict Pabuji riding a camel, symbolizing his nomadic lifestyle and deep connection with the desert ecosystem. Camels hold immense cultural and practical importance among desert communities like the Rabari and Bishnoi.  ",
        },
        {
            heading: "Ushtralaya:",
            description: ' Meaning "Camel Shelter" in Hindi, the term reflects the cultural tradition of providing care and protection for camels, aligning with the significance of camels in both spiritual and everyday life in desert regions',
        },
        {
            heading: "Cultural Significance:",
            description: " In Rajasthan, camels are associated with trade, travel, and resilience—values embodied by Pabuji in local folklore. Their role in survival and livelihood across desert terrains highlights their importance in the stories and traditions of the region.",
        },
        {
            heading: "Folk Narratives and Art:",
            description: " Folk tales and artwork often celebrate the camel as a loyal companion to Pabuji. These depictions reinforce the connection between the legendary protector and his trusted animal, a symbol of endurance and service.",
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
    const gridBox = "xl:!grid-cols-3 grid3";
    const custom_class = "white_grid grid_padding";
    const whyChooseData = [
        {
            image: use1,
            title: "Farm Security:",
            description:
                "Provides trained camels for active roles in securing farm premises.",
        },
        {
            image: use2,
            title: "Transportation, Milk Production, and Land Management: ",
            description:
                "Offers practical benefits in daily agricultural routines.",
        },
        {
            image: use3,
            title: "Camel-Assisted Therapy:",
            description:
                "Allows guests to interact with camels to support mental well-being, utilizing their calm nature in therapeutic settings.",
        },


    ];

    const whyChooseData1 = [
        {
            image: use4,
            title: "Farm Tours and Demonstrations:",
            description:
                "Includes camels as part of farm experiences to highlight their role in sustainable farming systems and historical significance.",
        },
        {
            image: use5,
            title: "Camel-Assisted Meditation or Yoga: ",
            description:
                "Facilitates calming and immersive wellness activities supported by the presence of camels.",
        },
        {
            image: use6,
            title: "Camel Meet-and-Greet:",
            description:
                "Offers interactive areas where guests can meet camels, take photographs, and learn more about their background and use on the farm.",
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
