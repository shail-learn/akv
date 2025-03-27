import React from 'react'
import img1 from "../../../assets/images/business/left-img.webp";
import img2 from "../../../assets/images/business/right-img.webp";
import img3 from "../../../assets/images/business/Mulethi.webp";
import img4 from "../../../assets/images/business/Babool.webp";
import img5 from "../../../assets/images/business/Neem.webp";

import { FaCircleArrowRight } from "react-icons/fa6";

import Image from 'next/image';
import Link from 'next/link';

export const OrnamentalPlants = () => {
    const heading = "Ornamental Plants"
    const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
    return (

        <section className='mx-auto py-6 pt-0 md:pt-16'>
            <div className='grid grid-col-1 bg-[#1B453C] items-center md:grid-cols-12 g-0'>
                <div className='w-full md:col-span-4'>
                    <Image src={img1} alt="banner" className='w-full h-full' />
                </div>
                <div className='w-full md:col-span-4 p-10 text-center md:text-left '>
                    <h2 className='text-white text-3xl md:text-4xl mb-4  lg:leading-tight  redhat  font-normal  w-full'>
                        {heading}
                    </h2>
                    <p className='text-white font-light mb-8'>{description}</p>
                    <Link
                        className="text-sm relative bg-[#9A9771] text-white inline-block w-2/3 text-center rounded-full p-3 hover:bg-white hover:text-[#9A9771] group"
                        href="#"
                    >
                        Explore More
                        <span className="text-[#D9D9D9]">
                            <FaCircleArrowRight
                                className="text-5xl absolute top-2/4 right-0 -translate-y-1/2 transition-colors duration-300 group-hover:text-[#9A9771]"
                            />
                        </span>
                    </Link>

                </div>
                <div className='w-full md:col-span-4'>
                    <Image src={img2} alt="banner" className='w-full h-full' />

                </div>
            </div>

        </section>

    )
}



export const CategoryCard = () => {
    const card = [
        {
            title: "Mulethi",
            image: img3,
            link: "/ornamental-plants/mulethi",
        },
        {
            title: "Bamboo",
            image: img4,
            link: "/ornamental-plants/bamboo",
        },
        {
            title: "Neem",
            image: img5,
            link: "/ornamental-plants/neem",
        },

    ]
    return (
        <section className='mx-auto max-w-7xl py-6 pt-12 md:pt-16'>
            <div className='grid grid-col-1  px-4 md:px-0 items-center md:grid-cols-12 gap-6'>
                {card.map((item,index) => {
                       return(
                    <div key={index} className='w-full md:col-span-4'>
                        <Image src={item.image} alt="banner" className='w-full h-full rounded-tl-3xl rounded-tr-3xl' />
                        <div className='flex gap-4 items-center justify-between my-4'>
                            <p className='text-black text-xl'>{item.title}</p> <Link href="#" className='text-sm border-[1px] border-[#646464] w-[150px] text-center rounded-xl p-2 hover:bg-[#1B453C] hover:text-white '>Explore More</Link>
                        </div>
                    </div>
                    )
                })}


            </div>

        </section>
    )
}
