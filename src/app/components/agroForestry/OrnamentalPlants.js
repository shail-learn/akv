import React from 'react'
import img3 from "../../../assets/images/timber/melia-dubia1.webp";
import img4 from "../../../assets/images/business/Babool.webp";

import leftgrass1 from "../../../assets/images/business/grass-left1.webp";
import rightgrass1 from "../../../assets/images/business/grass-right1.webp";

import img01 from "../../../assets/images/agroforestry/flowering-left.webp";
import img02 from "../../../assets/images/agroforestry/flowering-right.webp";

import palmleft from "../../../assets/images/agroforestry/palms-left.webp";
import palmright from "../../../assets/images/agroforestry/palms-right.webp";
import leftmedicine from "../../../assets/images/agroforestry/left-medicine.webp";
import rightmedicine from "../../../assets/images/agroforestry/right-medicine.webp";

import { FaCircleArrowRight } from "react-icons/fa6";

import Image from 'next/image';
import Link from 'next/link';

export const OrnamentalPlants = () => {
    const heading = "Ornamental Plants"
    const description = "Ornamental plants add beauty and vibrance to any space, blending nature’s charm with aesthetic appeal. They enrich landscapes while promoting environmental well-being."

    const heading1 = "Palms & Cycads"
    const description1 = "Provide vertical drama in landscapes Require minimal care and water once established Adapt well to urban, rural, and coastal area Useful in ornamental design "

    const heading2 = "Grass, Fodder and Agricultural Plants"
    const description2 = "At Atulye Krishi Vana, we grow more than just plants — we grow possibilities. Our collection of grass, fodder, and agricultural plants is tailored to support India’s farmers "

    const heading3 = "Wild & Forest Trees"
    const description3 = "India’s forests are more than green covers — they’re living legacies of biodiversity, culture, and healing. At Atulye Krishi Vana, our collection of Wild & Forest Trees honour "

    return (
        <>
            <section className='mx-auto py-6 pt-0 md:pt-16'>
                <div className='grid grid-col-1 bg-[#1B453C] items-center md:grid-cols-12 g-0'>
                    <div className='w-full md:col-span-4'>
                        <Image src={img01} alt="banner" className='w-full h-full' />
                    </div>
                    <div className='w-full md:col-span-4 p-10 text-center md:text-left '>
                        <h2 className='text-white text-3xl md:text-4xl mb-4  lg:leading-tight  redhat  font-semibold  w-full'>
                            {heading}
                        </h2>
                        <p className='text-white font-light md:text-[17px] mb-8'>{description}</p>
                        <Link
                            className="text-[15px] md:text-base relative bg-[#9A9771] text-white inline-block w-2/3 text-center rounded-full p-3 hover:bg-white hover:text-[#9A9771] group"

                            href="agroforestry/flowering-ornamental-plants"

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
                        <Image src={img02} alt="banner" className='w-full h-full' />

                    </div>
                </div>

            </section>

            <section className='mx-auto py-6 pt-0 md:pt-16'>
                <div className='grid grid-col-1 bg-[#1B453C] items-center md:grid-cols-12 g-0'>
                    <div className='w-full md:col-span-4'>
                        <Image src={palmleft} alt="banner" className='w-full h-full' />
                    </div>
                    <div className='w-full md:col-span-4 p-10 text-center md:text-left '>
                        <h2 className='text-white text-3xl md:text-4xl mb-4  lg:leading-tight  redhat  font-semibold  w-full'>
                            {heading1}
                        </h2>
                        <p className='text-white font-light md:text-[17px] mb-8'>{description1}</p>
                        <Link
                            className="text-[15px] md:text-base relative bg-[#9A9771] text-white inline-block w-2/3 text-center rounded-full p-3 hover:bg-white hover:text-[#9A9771] group"

                            href="agroforestry/palms-cycads"

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
                        <Image src={palmright} alt="banner" className='w-full h-full' />

                    </div>
                </div>

            </section>

            <section className='mx-auto py-6 pt-0 md:pt-16'>
                <div className='grid grid-col-1 bg-[#1B453C] items-center md:grid-cols-12 g-0'>
                    <div className='w-full md:col-span-4'>
                        <Image src={leftgrass1} alt="banner" className='w-full h-full' />
                    </div>
                    <div className='w-full md:col-span-4 px-10 py-10 md:py-8 text-center md:text-left '>
                        <h2 className='text-white text-3xl md:text-4xl mb-4  lg:leading-tight  redhat  font-normal  w-full'>
                            {heading2}
                        </h2>
                        <p className='text-white font-light md:text-[17px] mb-8'>{description2}</p>
                        <Link
                            className="text-[15px] md:text-base relative bg-[#9A9771] text-white inline-block w-2/3 text-center rounded-full p-3 hover:bg-white hover:text-[#9A9771] group"

                            href="agroforestry/grass-fodder-and-agricultural-plants"

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
                        <Image src={rightgrass1} alt="banner" className='w-full h-full' />

                    </div>
                </div>

            </section>

            <section className='mx-auto py-6 pt-0 md:pt-16'>
                <div className='grid grid-col-1 bg-[#1B453C] items-center md:grid-cols-12 g-0'>
                    <div className='w-full md:col-span-4'>
                        <Image src={leftmedicine} alt="banner" className='w-full h-full' />
                    </div>
                    <div className='w-full md:col-span-4 p-10 text-center md:text-left '>
                        <h2 className='text-white text-3xl md:text-4xl mb-4  lg:leading-tight  redhat  font-normal  w-full'>
                            {heading3}
                        </h2>
                        <p className='text-white font-light md:text-[17px] mb-8'>{description3}</p>
                        <Link
                            className="text-[15px] md:text-base relative bg-[#9A9771] text-white inline-block w-2/3 text-center rounded-full p-3 hover:bg-white hover:text-[#9A9771] group"

                            href="agroforestry/wild-and-forest-trees"

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
                        <Image src={rightmedicine} alt="banner" className='w-full h-full' />

                    </div>
                </div>

            </section>
        </>
    )
}



export const CategoryCard = () => {
    const card = [
        {
            title: "Melia Dubia",
            image: img3,

            link: "/agroforestry/timber/melia-dubia",

        },
        {
            title: "Bamboo",
            image: img4,

            link: "/agroforestry/bamboo",

        },
        // {
        //     title: "Neem",
        //     image: img5,
        //     link: "#",
        // },

    ]
    return (
        <section className='mx-auto max-w-7xl py-6 pt-12 md:pt-16'>
            <div className='grid grid-col-1  px-4 md:px-0 items-center md:grid-cols-12 gap-6'>
                <div className='w-full md:col-span-1'></div>
                {card.map((item, index) => {
                    return (
                        <div key={index} className='w-full md:col-span-5'>
                            <Image src={item.image} alt="banner" className='w-full h-full rounded-tl-3xl rounded-tr-3xl' />
                            <div className='flex gap-4 items-center justify-between my-4'>
                                <p className='text-black text-xl md:text-[22px]'>{item.title}</p>
                                <Link href={item.link} className=' border-[1px] border-[#646464] w-[150px] text-center rounded-xl p-2 hover:bg-[#1B453C] hover:text-white '>Explore More</Link>
                            </div>
                        </div>
                    )
                })}

                <div className='w-full md:col-span-1'></div>

            </div>

        </section>
    )
}
