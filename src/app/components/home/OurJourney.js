"use client"
import React, { useState } from 'react';
import banner from "../../../assets/images/home/img.webp";
import banner1 from "../../../assets/images/home/journey.svg";
import branch from "../../../assets/images/home/branch.svg";




import Image from 'next/image';
import Link from 'next/link';
export const OurJourney = () => {

    const journey = [

        {
            year: "2025",
            title: "Inception and Early Challenges",
            description: "Acquired 400 acres of barren land. ꟷ Initiated land development and plantation efforts.             Overcame hurdles in water harvesting, biological processes, and  creating efficient water, electricity, and labor management  systems."
        },
        {
            year: "2024",
            title: "Inception and Early Challenges",
            description: "Acquired 400 acres of barren land. ꟷ Initiated land development and plantation efforts.             Overcame hurdles in water harvesting, biological processes, and  creating efficient water, electricity, and labor management  systems."
        },
        {
            year: "2023",
            title: "Inception and Early Challenges",
            description: "Acquired 400 acres of barren land. ꟷ Initiated land development and plantation efforts.             Overcame hurdles in water harvesting, biological processes, and  creating efficient water, electricity, and labor management  systems."
        },
        {
            year: "2022",
            title: "Inception and Early Challenges",
            description: "Acquired 400 acres of barren land. ꟷ Initiated land development and plantation efforts.             Overcame hurdles in water harvesting, biological processes, and  creating efficient water, electricity, and labor management  systems."
        },
        {
            year: "2021",
            title: "Inception and Early Challenges",
            description: "Acquired 400 acres of barren land. ꟷ Initiated land development and plantation efforts.             Overcame hurdles in water harvesting, biological processes, and  creating efficient water, electricity, and labor management  systems."
        },
        {
            year: "2020",
            title: "Inception and Early Challenges",
            description: "Acquired 400 acres of barren land. ꟷ Initiated land development and plantation efforts.             Overcame hurdles in water harvesting, biological processes, and  creating efficient water, electricity, and labor management  systems."
        },
        {
            year: "2019",
            title: "Inception and Early Challenges",
            description: "Acquired 400 acres of barren land. ꟷ Initiated land development and plantation efforts.             Overcame hurdles in water harvesting, biological processes, and  creating efficient water, electricity, and labor management  systems."
        },
        {
            year: "2018",
            title: "Inception and Early Challenges",
            description: "Acquired 400 acres of barren land. ꟷ Initiated land development and plantation efforts.             Overcame hurdles in water harvesting, biological processes, and  creating efficient water, electricity, and labor management  systems."
        },

    ]

    const [activeIndex, setActiveIndex] = useState(journey.length - 1);
    return (
        <>
            <section
                className=" bg-[#ECF7F3]   pt-0 pb-14 lg:pt-0 lg:pb-0" >
                <div className='mx-auto max-full flex flex-wrap md:flex-nowrap gap-0 md:gap-12'>
                    <div className='w-full md:w-6/12'>
                        <Image src={banner} alt="banner" />

                    </div>
                    <div className='w-full md:w-6/12'>
                        <h2 className="lg:leading-snug text-black redhat mb-8 pt-10 text-center text-3xl md:text-4xl  font-normal  w-full">
                            Our <span className='text-[#498A8A]'>Journey</span></h2>
                        <div className='flex gap-4'>
                            <div className='flex gap-4 md:gap-12'>
                                {/* <Image src={banner1} alt="banner" /> */}
                                <div>
                                    <ul className="flex journey-line flex-col gap-1 ml-2 md:ml-0">
                                        {journey.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`li-${index + 1}`}
                                            >
                                                <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setActiveIndex(index);
                                                    }}
                                                    className={`text-base font-medium ${activeIndex === index
                                                            ? "text-[#1B453C] underline opacity-100"
                                                            : "text-[#C6C6C6] opacity-20"
                                                        } hover:text-[#1B453C]`}
                                                >
                                                  <Image src={branch} className='relative z-0' alt="banner" width="40px" height="40px" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {journey.map((item, index) => (
                                    <div
                                    style={{
                                        marginTop: `${3 * (index + 1)}%`,
                                      }}
                                        key={index}
                                        className={`div-${index + 1}  ${activeIndex === index ? "block fade-in transition delay-150 duration-300 ease-in-out" : "hidden"
                                            }`}
                                    >
                                        <div className='flex items-center gap-4'>
                                        <h3 className="text-[#1B453C] text-xl md:text-3xl font-bold">
                                            {item.year}
                                        </h3>
                                        <div className="p-4 border-2 border-[#1B453C] rounded-xl w-[78%] md:w-2/3">
                                            <h4 className="text-black font-semibold text-lg md:text-xl mb-2">
                                                {item.title}
                                            </h4>
                                            <p className="italic text-sm mb-3 md:mb-5 md:leading-7">{item.description}</p>
                                            <a
                                                className="text-[#C6C6C6] text-[12px] hover:text-[#1B453C]"
                                                href="#"
                                            >
                                                *Read More
                                            </a>
                                        </div>
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
