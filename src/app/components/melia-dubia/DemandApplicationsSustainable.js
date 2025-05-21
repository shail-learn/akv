import Image from 'next/image';
import React from 'react'
import img01 from "../../../assets/images/melia/farmer.webp";
import choose1 from "../../../assets/images/melia/choose1.webp";
import choose2 from "../../../assets/images/melia/choose2.webp";
import choose3 from "../../../assets/images/melia/choose3.webp";
import choose4 from "../../../assets/images/melia/choose4.webp";
import choose5 from "../../../assets/images/melia/choose5.webp";

import { Productlist } from '../Productlist';
import Titleslider from '../Titleslider';

export const Demand = () => {
  const marketData = {
    imageSrc: img01,
    title: "Market Demand & Pricing",
    steptitle: "Market Demand",
    description: "Melia Dubia is in high demand across various industries due to its versatility and sustainable supply. ",
    steps: [
      "Plywood & Furniture Industry – Used for making lightweight, durable furniture and wood panels. ",
      "Paper & Pulp Industry – Provides high-quality fiber for paper production. ",
      "Biomass & Renewable Energy – Used for pellet fuel and power generation. ",
      "Packaging & Construction – Ideal for making crates, pallets, and building materials. ",
      "Export Market – Demand is increasing in Southeast Asia and the Middle East."
    ],
    shortdesciption: `<strong>Market Supply</strong><ul class='list-disc pl-5 mt-2'>
      <li>Rising Market Prices – Due to its fast growth and high-quality wood. </li>
      <li>Increasing Agroforestry Adoption – Farmers and investors are shifting towards Melia Dubia plantations. </li>
      <li>Sustainable Supply Chain – Plantation-based timber ensures continuous market availability.</li>
    </ul>`
  };
  return (
    <>
      <section className='py-12 lg:py-16'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
          <div className='flex flex-col lg:flex-row justify-between   items-center gap-12 lg:gap-16'>

            <div className="md:w-1/2 w-full md:order-2">
              <div className='relative'>

                <Image
                  src={marketData.imageSrc}
                  alt="Market Demand"
                  width={600}
                  height={400}
                  className="rounded-[20px]"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                />
                <div className="absolute inset-0 -z-10 h-[106%] w-[96%] md:w-full translate-x-6 -translate-y-3 md:-translate-y-4 bg-white border border-gray-400 rounded-[20px] shadow-md"></div>
              </div>
            </div>

            <div className='md:w-6/12 w-12/12'>
              <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-[#1B453C]">
                {marketData.title}
              </h2>

              <p className='text-[15px] pt-6  font-semibold md:text-base text-black'>
                {marketData.steptitle}
              </p>
              <p className="mb-6 text-[15px]  font-normal md:text-base text-black">
                {marketData.description}
              </p>
              <ul className="list-disc pl-5 text-black mb-4">
                {marketData.steps.map((step, index) => (
                  <li key={index} className="text-[14px] md:text-[15px] font-normal text-black">
                    {step}
                  </li>
                ))}
              </ul>
              <div
                className="text-[14px] md:text-[15px]  font-normal  text-black mb-10 md:mb-14"
                dangerouslySetInnerHTML={{ __html: marketData.shortdesciption }}
              ></div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}



export const Applications = () => {
  const heading = "Uses & Applications"
  const fruitData = [
    {
      title: "Plywood & Veneer Production",
      image: choose1,
    },
    {
      title: "Furniture & Handicrafts",
      image: choose2,
    },
    {
      title: "Paper & Pulp Industry",
      image: choose3,
    },
    {
      title: "Biomass & Renewable Energy",
      image: choose4,
    },
    {
      title: "Construction & Packaging",
      image: choose5,
    },

  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />

    </>
  )
}


export const Sustainable = () => {
  const heading = "Sustainable Melia Dubia Cultivation with Agroforestry Solutions"

  const boxslider = [
    {

      heading: "Scientific Plantation Techniques",
      description: 'High-yield saplings and advanced cultivation practices. ',
    },
    {

      heading: "Eco-Friendly Timber Production",
      description: 'Reducing deforestation and promoting green cover.',
    },
    {

      heading: "Farmer Training & Support",
      description: 'Helping farmers maximize profits through structured agroforestry models.',
    },
    {

      heading: "Eco-Friendly Timber Production",
      description: 'Reducing deforestation and promoting green cover.',
    },


  ]
  return (
    <>
      <Titleslider heading={heading} boxslider={boxslider} />
    </>
  )
}
