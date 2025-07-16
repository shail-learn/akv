import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project19/banner.webp";
import image2 from "../../../assets/images/projects/project19/key.webp";
import Image from 'next/image';
import { RiCheckboxCircleFill } from "react-icons/ri";
import image3 from "../../../assets/images/projects/project19/desc.webp";
import Titleslider from '../Titleslider';




export const Shringi = () => {
    const text = {
        banner: banner,
        heading: `Shri. Shringi Yagyashala <br> Spiritual Heart of Atulye Krishi Vana`,
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
        </>
    )
}


export const Key = () => {
    const description = " Located at Khasra No. 112, Shri. Shringi Yagyashala is a serene and sacred space constructed amidst five spiritually significant plants. With a dimension of 350 sq mtr, it accommodates up to 30 people, serving as a venue for traditional Yagyas (fire rituals) that blend ecological awareness with spiritual practice. It is situated 750 meters from the Admin Block."

    const heading = "Key Details"
    const infoData = [
        {
            title: "Theme Index",
            description: "Yagyashala",
        },
        {
            title: "Location Name",
            description: "Shri. Shringi Yagyashala",
        },
        {
            title: "Coordinates",
            description: `22°59'32.5"N 77°10'53.0"E`,
        },
        {
            title: "Area",
            description: "350 sq mtr",
        },
        {
            title: "Distance from Admin Block",
            description: "750 m",
        },
    ];

    return (
        <>
            <section className='py-12 px-4 md:px-8 lg:px-16 bg-white'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <div className='md:w-[90%] mx-auto'>
                        <p className='mt-0 md:mt-4 text-black font-medium text-center'>
                            {description}
                        </p>
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


export const Description = () => {
    const heading = "Description"
    const description = `Nestled in the heart of Atulye Krishi Vana, Shri. Shringi Yagyashala stands as a symbol of unity between nature, culture, and spirituality. Constructed amidst five sacred plant species, it is a designated space for performing Yagyas (Vedic fire rituals) and community gatherings. Its thoughtful design allows participants to connect with tradition while emphasizing environmental harmony. <br> <br> This is where we follow the ancient Indian practice of Yajna—a ritual of fire offerings that brings people, nature and the divine together. Surrounded by native trees and medicinal plants, the Yagyashala is made entirely with natural materials, staying true to the land it stands on. <br> <br> Every havan performed here uses desi cow dung, ghee and healing herbs. These are not only pure and meaningful in tradition but also help clean the air, support soil life and keep the surroundings healthy. <br> <br> Shri Shringi Yagyashala reminds us that caring for nature is a spiritual act. It shows that ancient practices can guide modern ways of healing the Earth, not just through science but through connection and respect.`
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
    const shortdescription = "Named in honor of Sage Shringi, a revered figure in Hindu mythology, this Yagyashala recalls the sage’s role in the Putreshti Yagna, a pivotal ritual in both the Ramayana and Mahabharata epics."

    const boxslider = [
        {
            heading: "Sage Shringi",
            description: "Sage Shringi is known for conducting sacred rituals that fulfilled divine purposes."
        },
        {
            heading: "Yagyashalas",
            description: "In ancient India, Yagyashalas held central significance in Vedic tradition and societal customs."

        },
        {
            heading: "Spiritual space",
            description: "These ritual spaces were integral to public and private ceremonies, governance practices, and spiritual education."

        },
        {
            heading: "Vedic mantras ",
            description: "The chanting of Vedic mantras, sacrificial offerings, and community participation made Yagyashalas not just religious hubs, but also centers of social cohesion and cultural transmission."

        },


    ]
    return (
        <>
            <Titleslider shortdescription={shortdescription} heading={heading} boxslider={boxslider} />


        </>
    )
}

