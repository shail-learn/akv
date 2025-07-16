'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { SliderBlur } from '../SliderBlur';
import bgstay from "../../../assets/images/midhNursery/impact.webp";
import impact1 from "../../../assets/images/midhNursery/slider1.webp";
import impact2 from "../../../assets/images/midhNursery/Training.webp";
import impact3 from "../../../assets/images/midhNursery/Partnering.webp";
import icon1 from "../../../assets/images/midhNursery/icon1.svg";
import icon2 from "../../../assets/images/midhNursery/icon2.svg";
import icon3 from "../../../assets/images/midhNursery/icon3.svg";

import bgcontact from "../../../assets/images/midhNursery/contact.webp";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaBed, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail  } from "react-icons/io";
import Link from 'next/link';


export const Impact = () => {
    const heading = "Impact & Community Engagement"

    const text2 = "Empowering Farmers & Rural Livelihoods"
    const font = "md:!text-xl !text-base redhat"
    const boxslider = [
        {
            image: impact1,
            // heading: "Farm Cottages & Eco-Stays",
            description: 'Providing employment opportunities for over 10,000 individuals annually.',
        },
        {
            image: impact2,
            // heading: "Market Linkages",
            description: 'Training programs on sustainable farming, agro-processing, and handicrafts.',
        },
        {
            image: impact3,
            // heading: "Agro-Processing Industries",
            description: 'Partnering with government bodies and environmental organizations for large-scale impact.',
        },


    ]
    return (
        <>
            <section
                className="relative  pt-16 pb-16 lg:pt-20 lg:pb-20" style={{ background: `url(${bgstay.src})center center / cover no-repeat` }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
                <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
                    <div className='flex flex-wrap lg:flex-nowrap justify-between  gap-6 px-0 md:px-6 z-10 relative lg:px-2'>
                        <div className='w-full lg:w-3/12 '>
                            <div className='flex justify-between h-full flex-wrap'>

                                <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                                    {heading}
                                </h2>
                                <p className='text-sm md:text-[15px] h-full   text-center md:text-left text-white mt-6 md:mt-20 lg:mt-32'>{text2}</p>

                            </div>
                        </div>

                        <div className='w-full lg:w-8/12'>

                            <SliderBlur font={font} boxslider={boxslider} />



                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}



export const Future = () => {
    const growthData = {
        heading: "Future Growth\n& Expansion",
        description:
            "Nursery is set to expand into more regions, integrating advanced agroforestry models that balance economic viability with environmental conservation. Upcoming projects include:",
        items: [
            {
                icon: icon1,
                text: "Establishment of food processing units for value-added products.",
            },
            {
                icon: icon2,
                text: "Export partnerships for premium organic produce.",
            },
            {
                icon: icon3,
                text: "Large-scale plantation initiatives to combat deforestation.",
            },
        ],
    };
    return (
        <>
            <section className="w-full bg-[#1B453C] pt-16 pb-10 relative">
                <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 relative z-10">

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-14">
                        <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                            {growthData.heading}
                        </h2>
                        <p className="text-white redhat text-sm md:text-base max-w-3xl">
                            {growthData.description}
                        </p>
                    </div>

                    <div className='w-4/5 mx-auto'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                            {growthData.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl text-center p-10 border-[#6D8C54] border hover:shadow-md transition-all"
                                >
                                    <div className="flex justify-center mb-6">
                                        <Image src={item.icon} alt="icon" className='object-contain' width={100} height={100} />
                                    </div>
                                    <p className="text-sm md:text-base mt-10 text-black ">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className=" absolute bottom-0 left-0  h-[30%] w-full bg-white mt-16"></div>
            </section>


        </>
    )
}



export const Join = () => {
    const visitInfoData = {
        heading: `Join Our <br/> Green Mission!`,
        description:
          'Come and be part of a sustainable future. Explore the best of nature, farming, and eco-tourism at Atulye Krishi Vana!',
        info: [
          {
            icon: FaMapMarkerAlt,
            label: 'Visit Us:',
            value: 'Atulye Krishi Vana Mithlesh Nagar, Village, Ramgarh, Sehore, Bhopal, MP',
          },
          {
            icon: FaPhoneAlt,
            label: 'Contact Us:',
            value: '+91 9220152225',
          },
          {
            icon: IoIosMail,
            label: 'Email:',
            value: 'info@akv.org.in',
          },


        ],
      };
    return (
      <section
        className="relative !pt-24 pb-16 lg:py-16 lg:!pt-72 mt-10"
        style={{
          background: `url(${bgcontact.src}) center center / cover no-repeat`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        <div className="mx-auto max-w-7xl px-4 md:px-8  lg:px-2 relative z-10">
          <div className="flex flex-wrap lg:flex-nowrap gap-6 md:gap-16 justify-between items-end">
            {/* Left Column */}
            <div className="w-full lg:w-6/12">
              <div className="flex flex-col h-full justify-between">
                <h2 className="text-white text-3xl md:text-4xl font-medium redhat mb-4 lg:mb-7 text-center lg:text-left" dangerouslySetInnerHTML={{__html: visitInfoData.heading}} />





              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-6/12">
              <div className="bg-[#1B453C] bg-opacity-85 p-6 rounded-2xl">
                <ul className="space-y-4">
                  {visitInfoData.info.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={index}
                        className="text-white text-sm md:text-[15px] flex items-start space-x-3"
                      >
                        <Icon className="text-[#F7C35F] mt-1" size={18} />
                        <p className="redhat">
                          <span className="font-medium">{item.label}</span>{" "}
                          <span className="text-[#F7C35F]">{item.value}</span>
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
