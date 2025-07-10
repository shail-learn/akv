import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/agriculture/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import image1 from "../../../assets/images/digestive/image1.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import Image from 'next/image';
import { SliderBlur } from '../SliderBlur';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";
import image2 from "../../../assets/images/projects/project20/key.webp";

import { RiCheckboxCircleFill } from "react-icons/ri";
import Titleslider from '../Titleslider';
import image3 from "../../../assets/images/projects/project20/histroy.webp";
import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project20/use1.webp";
import use2 from "../../../assets/images/projects/project20/use2.webp";
import use3 from "../../../assets/images/projects/project20/use3.webp";
import use4 from "../../../assets/images/projects/project20/use4.webp";
import use5 from "../../../assets/images/projects/project20/use5.webp";
import use6 from "../../../assets/images/projects/project20/use6.webp";

export const Dhanvantari = () => {
    const text = {
        banner: banner,
        heading: `Shri. Dhanvantari Vatika – Medicinal Garden`,

        title: 'Shri. Dhanvantari Vatika, located in Kh-102, is a dedicated Medicinal Garden at Atulye Krishi Vana, developed to highlight the healing power of nature. Spread across 1521 square meters and situated 720 meters from the Admin Block, the garden features 108 unique medicinal species, thoughtfully selected for their therapeutic properties and relevance to Ayurvedic tradition. <br/> Planted on 02 December 2021, the garden is irrigated through a drip irrigation system with online laterals, ensuring consistent care and plant health throughout the year.',
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
            description: "Medicinal Garden",
        },
        {
            title: "Location Name",
            description: "Shri. Dhanvantari Vatika",
        },
        {
            title: "Coordinates",
            description: `22°59'41.0"N 77°10'46.0"E`,
        },
        {
            title: "Area",
            description: "1521 sq m",
        },

        {
            title: "Date of Planting",
            description: "02 December 2021",
        },
        {
            title: "Irrigation Method",
            description: "Drip Irrigation by online lateral",
        },
        {
            title: "Distance from Admin Block",
            description: "720 meters",
        },
    ];


    const main_heading = "Description"
    const shortinfo = "Shri. Dhanvantari Vatika is home to 108 medicinal plant species, each selected to address various health concerns and promote overall well-being. This living collection reflects the timeless wisdom of Ayurveda, providing both practical knowledge and spiritual insight. <br/>  <br/> Named after Shri Dhanvantari, the divine healer and guardian of Ayurveda in Hindu tradition, the garden is a place of peace, prayer, and healing. Devotees often seek his blessings for health and vitality, and this garden offers a physical space to connect with that tradition through the natural world."

    const GrowthHeading = "It's History";
    const GrowthDescription = "The garden is inspired by Lord Dhanvantari, revered in the Puranas as the deity of Ayurveda and health. Shri. Dhanvantari Vatika was established to raise awareness about medicinal plants and the ancient knowledge that surrounds them. Ayurveda has been practiced for centuries, yet many people remain unaware of the powerful healing properties of the trees and plants around them. Dhanvantari Vatika stands as a living testament to this rich heritage, helping people recognize the healing potential of their natural environment.    "


    const slides = [
        {
            heading: "Public Education:",
            description: "Promote public education about Ayurveda and plant-based health",
        },
        {
            heading: "Herbal Medicine:",
            description: "Encourage the development of similar gardens across the region",
        },
        {
            heading: "Knowledge Gap:",
            description: "Preserve and propagate ancestral wisdom about herbal medicine",
        },
        {
            heading: "Preserve and Propogate:",
            description: "Bridge the knowledge gap regarding common but underutilized healing plants",
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
            title: "Educational Resource:",
            description:
                "Teaches visitors about the benefits and practical uses of medicinal plants through guided tours and informational displays.",
        },
        {
            image: use2,
            title: "Health and Wellness Workshops: ",
            description:
                "Hosts programs on natural remedies, plant-based healing, and Ayurvedic lifestyle practices.",
        },
        {
            image: use3,
            title: "Community Engagement:",
            description:
                "Involves locals in garden tours, volunteer activities, and public health seminars.",
        },


    ];

    const whyChooseData1 = [
        {
            image: use1,
            title: "Product Development:",
            description:
                "Supports the creation of herbal teas, tinctures, skincare items, and other plant-based wellness products.",
        },
        {
            image: use2,
            title: "Research Opportunities: ",
            description:
                "Offers collaboration potential with researchers and institutions for studying plant properties and discovering new uses.",
        },
        {
            image: use3,
            title: "Sustainable Farming Practices:",
            description:
                "Utilizes medicinal plants for organic pest control, soil enrichment, and as companion crops to promote ecological farming.",
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



export const Vatika = () => {
    const heading = "Shri. Dhanvantari Vatika";
    const description =
        "Shri. Dhanvantari Vatika is more than a medicinal garden—it is a center of natural healing, traditional wisdom, and community learning. By cultivating plants that have been trusted for generations and sharing their benefits with the public, the garden fulfills its mission of bridging nature and wellness.<br/> <br/> This space invites every visitor to experience holistic health in harmony with nature and reconnect with the healing heritage passed down through the science of Ayurveda.";

    return (
        <section
            className="relative bg-no-repeat py-14   lg:py-32 !mb-0 bg-cover w-full my-8 md:my-12  "
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
