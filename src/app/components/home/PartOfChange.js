import React from 'react'
import img1 from "../../../assets/images/home/hand-group.png";
import img2 from "../../../assets/images/home/tree.png";
import img3 from "../../../assets/images/home/business.png";
import Link from 'next/link';
import Image from 'next/image';


export const PartOfChange = () => {
    const box1 = [
        {
            title: "Be a Part of Change",
            description: "Join us for a Greener and Sustainable tomorrow. Become a part of this initiative as a partner, volunteer, or a sponsor to shape the future of sustainable forestry."
        }
    ];
    const card = [
        {
            number: "01",
            title: "Become a Volunteer",
            bgimg: "https://cruxcreativedemo2.com/web-image/hand-group.png"
        },
        {
            number: "02",
            title: "Sponsor a Tree or Project",
            bgimg: "https://cruxcreativedemo2.com/web-image/tree.png"
        },
        {
            number: "03",
            title: "Corporate Partnerships",
            bgimg: "https://cruxcreativedemo2.com/web-image/business.png"
        }
    ]
    return (
        <>
            <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-2  py-16'>
                <div className='flex gap-4  flex-wrap  lg:flex-nowrap items-center justify-center'>
                    <div className='w-full lg:w-5/12 bg-[#BBA167] grid items-center justify-center lg:h-[504px]  p-12'>
                        <div>
                            <h2 className='text-white poppins text-center md:text-left leading-relaxed text-3xl md:text-4xl  mb-5'>{box1[0].title}</h2>
                            <p className='poppins text-justify  md:text-left font-normal text-[15px] text-white'>{box1[0].description}</p>
                        </div>
                    </div>
                    {card.map((item, index) => (
                        <div
                            key={index}
                            className="group w-full  p-10 lg:w-3/12 h-96 lg:h-[504px] text-black grid items-center justify-center relative transition-all duration-400"
                            style={{
                                backgroundImage: `url(${item.bgimg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Absolute overlay */}
                            <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-50 transition-all duration-400 group-hover:bg-[rgba(187,160,103,0.58)]"></div>

                            {/* Content */}
                            <div className="z-10 text-black transition-all duration-400 group-hover:text-white">
                                <h3 className='poppins text-5xl mb-6'>{item.number}</h3>
                                <p className='poppins text-lg mb-10'>{item.title}</p>
                                <Link className='bg-white text-black rounded-3xl py-3 px-12'
                                style={{
                                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                                }}
                                href="#">Learn More</Link>
                            </div>
                        </div>
                    ))}




                </div>
            </div>
        </>
    )
}
