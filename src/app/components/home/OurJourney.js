"use client"
import React, { useEffect, useState } from 'react';
import banner from "../../../assets/images/home/img.webp";
import banner1 from "../../../assets/images/home/journey.svg";
import branch from "../../../assets/images/home/branch.svg";




import Image from 'next/image';
import Link from 'next/link';
export const OurJourney = () => {

    const journey = [


        {
            year: "2024",
            title: "Expansion and Revenue Models",
            description: [
                {
                    item: 1,
                    content: "Expanded greenery coverage to over 500 acres.",
                },
                {
                    item: 2,
                    content: "Implemented innovative revenue-generating models.",
                },
                {
                    item: 3,
                    content: "Strengthened the agro-eco-tourism initiative with sustainable practices and local engagement.",
                },

            ]
        },
        {
            year: "2023",
            title: "Growth and Innovation",
            description: [
                {
                    item: 1,
                    content: "Developed a lotus pond, Miyawaki forest, and endangered species garden.",
                },
                {
                    item: 2,
                    content: "Constructed a guest house and employee quarters.",
                },
                {
                    item: 3,
                    content: "Established a soil testing laboratory for internal use and support for local farmers.",
                },
                {
                    item: 4,
                    content: "Enhanced agro-eco-tourism with solar energy, stargazing, drone technology, planetary astronomy, and AI robotics, while promoting empowerment through local material procurement and handicraft production.",
                },
            ]

        },
        {
            year: "2021-2022",
            title: "Pandemic Resilience",
            description: [
                {
                    item: 1,
                    content: "Prioritized maintenance and sustainability during the pandemic and lockdown periods.",
                },
            ]

        },
        {
            year: "2020",
            title: "Sustainable Practices",
            description: [
                {
                    item: 1,
                    content: "Established composting and organic bio-production units.",
                },
                {
                    item: 2,
                    content: "Acquired an additional 150 acres to make a green zone.",
                },
                {
                    item: 3,
                    content: "Began animal husbandry with cows, camels, and horses, while initiating agro-eco-tourism efforts.",
                },
                {
                    item: 4,
                    content: "Focused on youth and women empowerment, biodiversity conservation, soil and water resource management, natural resource preservation, and carbon sequestration.",
                },
            ]
        },
        {
            year: "2019",
            title: "Infrastructure and Irrigation",
            description: [
                {
                    item: 1,
                    content: "Developed irrigation systems and constructed a 800-million-litre reservoir.",
                },
                {
                    item: 2,
                    content: "nstalled solar fencing and introduced deep irrigation techniques.",
                }
            ]
        },

        {
            year: "2018",
            title: "Inception and Early Challenges",
            description: [
                {
                    item: 1,
                    content: "Acquired 500 acres of barren land.",
                },
                {
                    item: 2,
                    content: "Launched land development and plantation enhancing.",
                },
                {
                    item: 3,
                    content: "Overcame challenges in water harvesting, biological processes in soil, and the establishment of efficient water, electricity, and labor management systems.",
                },
            ]

        },

    ]
    const [activeIndex, setActiveIndex] = useState(journey.length - 1);
    const [isHovered, setIsHovered] = useState(false);
    const [isManual, setIsManual] = useState(false); // Track manual selection

    useEffect(() => {
        if (isHovered || isManual) return; // Stop interval if hovered or manually selected

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === 0 ? journey.length - 1 : prevIndex - 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [isHovered, isManual, journey.length]);

    const handleLeafClick = (index) => {
        setActiveIndex(index);
        setIsManual(true); // Stop the interval on manual click
    };
    return (
        <>
            <section
                className=" bg-[#ECF7F3]   pt-0 pb-14 lg:pt-0 lg:pb-0">
                <div className='mx-auto max-full flex flex-wrap md:flex-nowrap gap-0 md:gap-12'>
                    <div className='w-full md:w-6/12'>
                        <Image src={banner} alt="banner" />

                    </div>
                    <div className='w-full md:w-6/12' onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <h2 className="lg:leading-snug text-black redhat mb-2 pt-10 text-center text-3xl md:text-4xl  font-normal  w-full">
                            Our <span className='text-[#498A8A]'>Journey</span></h2>
                        <p className='text-center mb-8'>Steps Towards a Thriving Tomorrow
                        </p>
                        <div className='flex gap-4'>
                            <div className='flex gap-4 md:gap-12'>
                                {/* <Image src={banner1} alt="banner" /> */}
                                <div>
                                    <ul className="flex journey-line  w-[80px] flex-col gap-1 ml-2 md:ml-0">
                                        {journey.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`li-${index + 1}`}
                                            >
                                                <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleLeafClick(index);
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
                                                <ul className="list-disc pl-5 text-gray-600">
                                                    {Array.isArray(item.description) ? (
                                                        item.description.map((desc) => (
                                                            <li className='italic  text-sm mb-1   md:leading-7' key={desc.item}>{desc.content}</li>
                                                        ))
                                                    ) : (
                                                        <li className='italic  text-sm mb-1 md:leading-7'>{item.description}</li>
                                                    )}
                                                </ul>

                                                {/* <div className="italic  text-sm mb-3 md:mb-5 md:leading-7" dangerouslySetInnerHTML={{ __html: item.description.content }}></div> */}
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
