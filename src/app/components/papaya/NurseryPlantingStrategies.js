"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FaCircle } from "react-icons/fa";

import impact1 from "../../../assets/images/papaya/Ideal1.webp";
import impact2 from "../../../assets/images/papaya/Ideal2.webp";

import bgimpact from "../../../assets/images/papaya/bgimg.webp";
import image3 from "../../../assets/images/papaya/smart-agriculture.webp";
export const Nursery = () => {
  const heading = "Sowing and Nursery Management"

  const boxslider = [
    {
      image: impact1,
      heading: "Seed Requirements",
      "point": [
        "500 grams of seeds per hectare is needed for commercial cultivation.",
        "Best planting season: June-September (Avoid rainy season for better root establishment)."
      ],
    },
    {
      image: impact2,
      heading: "Nursery Preparation",
      "point": [
        "Seed Treatment: Treat seeds with Captan @ 2g/kg to prevent fungal infections.",
        "Sowing Method: Dibble four seeds per polythene bag at 1 cm depth and place them in partial shade."
      ],
    },


  ]
  return (
    <>
      <section
        className=" bg-white py-16 lg:py-18 " style={{ background: `url(${bgimpact.src})center center / cover no-repeat` }}>
        <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-2 '>

          <div className='w-full lg:w-12/12 text-center '>
            <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7  text-3xl md:text-4xl  font-medium  w-full">
              {heading}
            </h2>

          </div>

          <div className='flex flex-wrap justify-between md:flex-nowrap gap-6 '>

            {boxslider.map((item, index) => (
              <div className='md:w-1/2 w-full' key={index}>
                <div className='w-full flex text-white bg-white backdrop-blur bg-opacity-20 rounded-xl h-full p-4 lg:p-6 '>
                  <div className='lg:w-12/12 mx-auto w-full'>
                    <div className='mb-4'>
                      <Image src={item.image} alt='icon' className='w-full h-full rounded-2xl' />
                    </div>
                    <h2 className='text-2xl redhat font-normal pb-4' dangerouslySetInnerHTML={{ __html: item.heading }}></h2>

                    <ul className=" redhat font-light space-y-1">
                      {item.point.map((item, idx) => (
                        <li className='flex gap-2 md:gap-3' key={idx}><span className='text-[6px] mt-[10px]'><FaCircle /></span> {item}</li>
                      ))}
                    </ul>

                    {/* <p className='text-sm lg:text-[15px] leading-6 font-extralight' dangerouslySetInnerHTML={{ __html: item.description }}>
                          </p> */}
                  </div>
                </div>

              </div>
            ))}


          </div>


        </div>

      </section>
    </>
  )
}

export const Planting = () => {

  const plantingData = {
    "heading": "Papaya Planting & Spacing Guidelines",
    "columns": [
      {
        "subheading": "Spacing: Maintain a 1.8m x 1.8m distance between plants to ensure healthy growth.",

      },
      {
        "subheading": "Pit Size: Prepare 45 cm x 45 cm x 45 cm pits to accommodate root development.",

      },
      {
        "subheading": "Planting Depth: Keep the graft union above soil level to avoid root rot.",

      }
    ]
  }
  return (
    <>
      <section className="py-14 lg:py-16 bg-[#DB936933] relative">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
          <h2 className="text-3xl md:text-4xl font-medium text-center text-[#1B453C] mb-8 md:mb-12">
            {plantingData.heading}
          </h2>

          <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 lg:gap-24 relative z-10">
            {plantingData.columns.map((column, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 border border-black rounded-tl-2xl p-6 md:p-10 "
              >
                <h3 className="text-base mb-4">{column.subheading}</h3>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


export const Strategies = () => {
  const heading = "Smart Irrigation Strategies for Maximum Yield"
  const impactData = [
    {
      title: "Regular Irrigation Practices",
      description: `<ul class="list-disc font-light mt-3 space-y-1">
          <li>Water copiously immediately after planting</li>
          <li>Weekly irrigation is required for the first three months to help root establishment.</li>
          </ul>`,

    },
    {
      title: "Drip Irrigation for Efficiency",
      description: `<ul class="list-disc font-light mt-3 space-y-1">
          <li>Recommended daily water application: 10 liters per plant.</li>
          <li>Weekly fertigation via drip irrigation:
          <ul class="list-disc font-light ps-4 space-y-1">
                 <li>13.5g urea</li>
                 <li>10.5g muriate of potash</li>
          </ul>
          </li>
          <li>Super phosphate application: 300g per plant every two months for strong growth.</li>
          </ul>`,
    },


  ];
  const containerRef = useRef(null);
  return (
    <>
      <section
        className=" bg-[#1B453C] pt-0 pb-14 lg:pt-0 lg:pb-0">
        <div className='mx-auto max-full flex flex-wrap md:flex-nowrap gap-0 md:gap-12'>
          <div className='w-full md:w-6/12'>
            <Image className='h-full w-full' src={image3} alt="banner" />

          </div>
          <div className='w-full md:w-6/12'>
            <h2 className="lg:leading-snug text-white redhat mb-4 pt-10 text-center md:text-left text-3xl md:text-4xl  font-medium md:w-[80%] "> {heading}</h2>

            <div ref={containerRef} className='custom_left_scroll mr-6
          overflow-y-scroll   h-[700px]' >
              {impactData.map((impact, index) => (
                <div key={index} className="p-4">
                  <div className=" flex gap-4 lg:gap-8">
                    <div className='text-white mt-1'>
                      <span className='text-sm redhat '>{(index + 1).toString().padStart(2, "0")}</span>
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl redhat text-white font-semibold">
                        {impact.title}</h3>
                      {/* <p className="mt-2 text-gray-300">{impact.description}</p> */}

                      <div className='text-white  mpact_d text-base redhat' dangerouslySetInnerHTML={{ __html: impact.description }}>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

