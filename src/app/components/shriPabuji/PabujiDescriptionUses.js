import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/agriculture/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import image1 from "../../../assets/images/digestive/image1.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import Image from 'next/image';
import Titleslider from '../Titleslider';

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
            <Wave />
        </>
    )
}


export const Description = () => {
    const basketData = {
        note: `
        Theme Index: Untalaya <br/>
        Location Name: Shri. Pabuji Ushtralaya <br/>
        Coordinates: 22°59'41.2"N 77°10'57.3"E <br/>
        Area: 140 sq m <br/>
        Distance from Admin Block: 400 meters

        `,
        image: info,
    };
    const main_heading = "Description"
    const shortinfo = "Three camels are sheltered in the Ushtralaya and trained for farm security duties. The structure is designed to provide them with a safe and healthy living space that supports their physical well-being and readiness for their role in farm protection."

    const GrowthHeading = "History";
    const GrowthDescription = "Shri. Pabuji Ushtralaya, also referred to as the Pabuji Temple, draws its name and inspiration from Pabuji, a legendary folk hero and saint of Rajasthan. Deeply revered among the Rabari community, Pabuji is known for his commitment to the protection of people and livestock in the region."


    const slides = [
        {
            image: image1,
            desc: "Pabuji’s Camel: Folk legends often depict Pabuji riding a camel, symbolizing his nomadic lifestyle and deep connection with the desert ecosystem. Camels hold immense cultural and practical importance among desert communities like the Rabari and Bishnoi.  ",
        },
        {
            image: image1,
            desc: 'Ushtralaya: Meaning "Camel Shelter" in Hindi, the term reflects the cultural tradition of providing care and protection for camels, aligning with the significance of camels in both spiritual and everyday life in desert regions',
        },
        {
            image: image1,
            desc: "Cultural Significance: In Rajasthan, camels are associated with trade, travel, and resilience—values embodied by Pabuji in local folklore. Their role in survival and livelihood across desert terrains highlights their importance in the stories and traditions of the region.",
        },
        {
            image: image1,
            desc: "Folk Narratives and Art: Folk tales and artwork often celebrate the camel as a loyal companion to Pabuji. These depictions reinforce the connection between the legendary protector and his trusted animal, a symbol of endurance and service.",
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
            heading: "Farm Security",
            description: "Provides trained camels for active roles in securing farm premises."
        },
        {
            heading: "Transportation, Milk Production, and Land Management",
            description: "Offers practical benefits in daily agricultural routines."

        },
        {
            heading: "Camel-Assisted Therapy",
            description: "Allows guests to interact with camels to support mental well-being, utilizing their calm nature in therapeutic settings."

        },
        {
            heading: "Farm Tours and Demonstrations",
            description: "Includes camels as part of farm experiences to highlight their role in sustainable farming systems and historical significance."
        },
        {
            heading: "Camel-Assisted Meditation or Yoga",
            description: "Facilitates calming and immersive wellness activities supported by the presence of camels."
        },
        {
            heading: "Camel Meet-and-Greet",
            description: "Offers interactive areas where guests can meet camels, take photographs, and learn more about their background and use on the farm."
        },
        {
            heading: "Camel Rides and Tours",
            description: "Organizes camel rides as a unique way for visitors to explore the farm, guided by trained handlers."
        },

    ]
    return (
        <>
            <Titleslider heading={heading} boxslider={boxslider} />
        </>
    )
}
