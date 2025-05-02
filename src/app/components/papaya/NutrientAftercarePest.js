import React from 'react'
import market1 from "../../../assets/images/papaya/image1.webp";
import market2 from "../../../assets/images/papaya/image2.webp";
import img01 from "../../../assets/images/papaya/cropped-view.webp";
import Pest1 from "../../../assets/images/guava/Pest1.webp";
import Pest2 from "../../../assets/images/guava/Pest2.webp";
import Pest3 from "../../../assets/images/guava/Pest3.webp";
import tree from "../../../assets/images/guava/tree.svg";
import ImageCard from '../ImageCard';

import Image from 'next/image';
export const Nutrient = () => {
  const heading = "Market Demand & Supply"
  const fertilizerData = {
    "heading": "Organic and Chemical Fertilization",
    "content": [
      {
        "title": "At Planting:",
        "items": [
          "FYM (Farmyard Manure) – 10 kg per plant",
          "Azospirillum & Phosphobacterium – 20g per plant"
        ]
      },
      {
        "title": "From the 3rd Month Onwards:",
        "items": [
          "Nitrogen, Phosphorus, Potassium (NPK) @ 50g per plant at bi-monthly intervals"
        ]
      }
    ]
  }

  const fertilizerData2 = {
    "heading": "Micronutrient Application for Maximum Yield",
    "content": [
      {
        "title": "Foliar Spray (4th & 8th month):",
        "items": [
          "0.5% Zinc Sulfate (ZnSO₄) + 0.1% Boric Acid (H₂BO₃) for better fruit development."
        ]
      },

    ]
  }
  return (
    <>
      <section className="py-14 lg:py-16 pt-10 lg:pt-16 relative overflow-hidden">
        <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
          <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-6 lg:mb-12 text-center text-3xl md:text-4xl font-semibold  w-full">
            {heading}
          </h2>
          <div className='flex flex-wrap'>
            <div className='md:w-10/12 w-full justify-center mx-auto'>
              <div className="flex flex-col-reverse md:grid grid-cols-1 items-center md:grid-cols-2 gap-6 relative">
                <div className='md:pr-12'>
                  <h2 className="text-xl  text-[#1B453C] mb-6">
                    {fertilizerData.heading}
                  </h2>
                  <ul className="list-disc pl-5 text-sm md:text-[15px] text-black font-light space-y-4">
                    {fertilizerData.content.map((section, index) => (
                      <li key={index}>
                        <span className="font-medium">{section.title}</span>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                          {section.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative w-full mt-10 md:mt-0">

                  <Image
                    src={market1}
                    alt="Hand planting seeds"
                    className="w-full h-full rounded-br-[100px] md:-ml-12 z-10 relative"
                  />
                  <div className="absolute -top-4 -z-10 -right-0 w-20 h-20 bg-[#DB936933] rounded-full"></div>

                </div>
              </div>

              <div className="grid grid-cols-1 items-center order-2  md:grid-cols-2 gap-6 relative mt-6 md:-mt-8">
                <div className="relative">
                  <Image
                    src={market2}
                    alt="Bamboo Products"
                    className="w-full h-full rounded-bl-[100px]"

                  />

                </div>
                <div>
                  <h2 className="text-xl  text-[#1B453C] mb-6">
                    {fertilizerData2.heading}
                  </h2>
                  <ul className="list-disc pl-5 text-sm md:text-[15px] text-black font-light space-y-4">
                    {fertilizerData2.content.map((section, index) => (
                      <li key={index}>
                        <span className="font-medium">{section.title}</span>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                          {section.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="absolute -z-10  -left-16 -bottom-12 w-60 h-60 md:w-96 md:h-96 bg-[#DB936933] rounded-full"></div>
      </section>

    </>
  )
}



export const Aftercare = () => {
  const plantingData = {
    title: "Aftercare and Maintenance",
    steptitle: "Thinning and Male Plant Removal",
    steps: [
      "Maintain one male tree per 20 female trees for proper pollination.",
      "Remove weak and unproductive plants to ensure strong trees.",
      "For gynodioecious varieties (CO 3 & CO 7), keep one hermaphrodite plant per pit and remove female trees.",
    ],

    imageSrc: img01,
  };

  return (
    <>
      <section className='py-10 lg:py-14 bg-[#D9D9D966]' >
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
          <div className='flex flex-col  justify-between items-center gap-12 lg:gap-16'>
            <div className="md:w-1/2 w-full">
            <h2 className="text-3xl md:leading-[1.3] md:text-4xl mb-10 text-center font-semibold redhat text-[#1B453C]">{plantingData.title}</h2>
              <div className='relative'>
                <Image
                  src={plantingData.imageSrc}
                  alt="Planting Techniques"
                  width={600}
                  height={400}
                  className="rounded-[20px]"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                />
                <div className="absolute inset-0 -z-10 h-[110%] w-[90%] md:w-[95%]   translate-x-6 -translate-y-3 md:-translate-y-4 bg-white border border-black rounded-[20px] shadow-md"></div>

              </div>

            </div>
            <div className='lg:w-6/12  w-12/12'>
              <p className='text-[15px] redhat font-normal md:text-base text-black'>{plantingData.steptitle}</p>
              <ul className="list-disc pl-5 text-black mb-4">
                {plantingData.steps.map((step, index) => (
                  <li key={index} className="text-[15px] md:text-base redhat font-normal text-black">
                    {step}
                  </li>
                ))}
              </ul>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}


export const Pest = () => {
  const heading = "Pest and Disease Management"
  const bugs = [
      {
          title: "Common Pests",
          description: "Nematodes – Controlled using Carbofuran 3G @ 1g per polythene bag in the nursery.",
          image: Pest1,
      },
      {
          title: "Major Diseases",
          description: "Papaya Ring Spot Virus (PRSV)",
          image: Pest2,
      },
      {
          title: "Major Diseases",
          description: "Root Rot and Wilt",
          image: Pest3,
      },

  ];

  return (
      <>

          <section className='py-14 lg:py-20 bg-[#1B453C] bg-no-repeat bg-contain bg-center' style={{ backgroundImage: `url(${tree.src})` }}>
              <div className="mx-auto max-w-7xl px-4 md:px-6">
                  <h2 className="lg:leading-snug text-white redhat mb-6  md:mb-10 text-center text-3xl md:text-4xl font-semibold w-full" > {heading}</h2>
                  <ImageCard data={bugs} />
              </div>
          </section>

      </>
  )
}
