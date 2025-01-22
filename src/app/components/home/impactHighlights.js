import React from 'react'
import banner from "../../../assets/images/home/bg-img2.webp";
import icon1 from "../../../assets/images/home/leaf.svg";

import Image from 'next/image';
import Link from 'next/link';
const ImpactHighlights = () => {
    const text = {
        heading: 'We Believe in Making a Real Green Revolution',
        title: 'At Atulye Krishi Van, we are committed to building the world’s most impactful agri-company through sustainable agriculture and agroforestry. Our mission is to address climate change, global warming, and greenhouse gas emissions while fostering environmental resilience. <br> Our journey began in Madhya Pradesh, India, with a flagship project focused on sustainable forestry and organic plantations. By creating ecosystems that balance resource generation with environmental preservation, we aim to secure a prosperous and sustainable future for generations to come.'
    }
    const card = [
        {
            description: 'Over 500 Acres of Forest Planted',
            icon: icon1,

        },
        {
            description: 'Planted Over 1,75,000 Trees',
            icon: icon1,

        },
        {
            description: 'Reduced Carbon Footprinted',
            icon: icon1,

        }
    ]
    return (
        <>
            <section
                className="bg-cover bg-center relative text-center md:text-left  flex items-center justify-center pt-16 pb-16 lg:pt-28 lg:pb-28"
                style={{ backgroundImage: `url(${banner.src})` }}
            >
                <div className="absolute inset-0 bg-[#498A8A] opacity-80"></div>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='mx-auto lg:w-10/12 w-12/12'>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
                            <div className='lg:w-5/12  w-12/12'>
                                <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-white'>{text.heading}</h2>
                            </div>
                            <div className='lg:w-6/12  w-12/12'>
                                <p className='text-white text-sm font-light text-light italic' dangerouslySetInnerHTML={{ __html: text.title }}>

                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col pt-10 lg:pt-20 lg:flex-row justify-between  gap-4 lg:gap-12'>
                            <div className='w-12/12'>
                                <h2 className='text-md  font-medium poppins text-white mb-6'>Impact Highlights</h2>

                            </div>
                        </div>
                        <div className='lg:grid flex flex-wrap gap-4 lg:gap-16 grid-cols-1 lg:grid-cols-12'>
                            {card.map((item, index) => {
                                return (
                                    <div key={index} className='lg:col-span-4 p-4 pl-10 pr-10 pb-8 w-full border w-12/12' >
                                        <div className='grid items-center gap-4 '>
                                            <div className='w-6 h-6'>
                                                <Image src={item.icon} width="50" height="50" alt="icon" />
                                            </div>
                                            <p className='text-base font-light text-white'>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                        <div className='flex flex-col  pt-14 lg:flex-row justify-center items-center gap-4 lg:gap-12'>
                            <div className='w-12/12'>

                                <Link href="#" className='text-white bg-teal-900 rounded-full p-3 px-8 lg:px-20 hover:bg-gray-800 hover:text-white transition delay-100 duration-100 ease-in-out'>Join the Mission</Link>



                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}

export default ImpactHighlights