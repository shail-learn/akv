"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import bgimpact from "../../../assets/images/bamboo/Cultivation-bg.webp";
import impact1 from "../../../assets/images/bamboo/Cultivation1.webp";
import impact2 from "../../../assets/images/bamboo/Cultivation2.webp";
import harvestimg from "../../../assets/images/bamboo/harvest.webp";
import market1 from "../../../assets/images/bamboo/Market1.webp";
import market2 from "../../../assets/images/bamboo/Market2.webp";






export const Cultivation = () => {
  const heading = "Cultivation & Growth Characteristics"

  const boxslider = [
    {
      image: impact1,
      heading: "Nursery Practices",
      description: 'Efficient nursery management ensures healthy bamboo saplings.',
      list: [
        "Seed Collection: Best harvested between April – June.",
        "Seed Characteristics: Small black seeds with high germination viability.",
        "Germination Process: Seeds are sown in polybags .",

      ]

    },
    {
      image: impact2,
      heading: "Silvicultural Characteristics",
      description: 'Bamboo exhibits unique growth traits that make it ideal for commercial plantations:Rapid Growth Rate – Can grow up to 3 feet per day under ideal conditions',
      list: [
        "Moderate Water Requirement – Requires minimal irrigation once established.",
        "Pest & Disease Resistance – Naturally resistant to major pests and diseases."
      ]
    },
    {
      image: impact1,
      heading: "Nursery Practices",
      description: 'Efficient nursery management ensures healthy bamboo saplings.',
      list: [
        "Seed Collection: Best harvested between April – June.",
        "Seed Characteristics: Small black seeds with high germination viability.",
        "Germination Process: Seeds are sown in polybags .",

      ]

    },
    {
      image: impact2,
      heading: "Silvicultural Characteristics",
      description: 'Bamboo exhibits unique growth traits that make it ideal for commercial plantations:Rapid Growth Rate – Can grow up to 3 feet per day under ideal conditions',
      list: [
        "Moderate Water Requirement – Requires minimal irrigation once established.",
        "Pest & Disease Resistance – Naturally resistant to major pests and diseases."
      ]
    },

  ]
  return (
    <>
      <section
        className=" bg-white pt-16 pb-16 lg:pt-20 lg:pb-20 " style={{ background: `url(${bgimpact.src})center center / cover no-repeat` }}>
        <div className='mx-auto max-w-7xl  px-4 md:px-8 lg:px-2 '>
          <div className='flex flex-wrap  items-center gap-6 px-0 md:px-6  lg:px-2'>
            <div className='w-full lg:w-12/12 '>
              <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center   text-3xl md:text-4xl  font-normal  w-full">
                {heading}
              </h2>
            </div>
            <div className='w-full mx-auto md:w-10/12'>
              <div className='w-full relative'>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  navigation={true}

                  modules={[Autoplay, Navigation, Pagination]}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 100,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 80,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 100,
                    },
                  }}

                  className="mySwiper2 white_arrow outer-arrow1"
                >

                  {boxslider.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className='w-full flex text-white bg-white backdrop-blur bg-opacity-20 rounded-2xl  border border-white p-0 h-[480px] pb-8'>
                        <div className='lg:w-12/12 mx-auto w-full'>
                          <div className='mb-4'>
                            <Image src={item.image} alt='icon' className='w-full h-full rounded-2xl' />
                          </div>
                          <div className='md:px-6 px-4'>
                            <h2 className='text-base font-semibold pb-2' dangerouslySetInnerHTML={{ __html: item.heading }}></h2>
                            <p className='text-sm lg:text-[15] font-light' dangerouslySetInnerHTML={{ __html: item.description }}>
                            </p>
                            <ul className="list-disc pl-5">
                              {item.list?.map((point, index) => (
                                <li className='text-sm lg:text-[15] font-light' key={index}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                    </SwiperSlide>
                  ))}


                </Swiper>

              </div>


            </div>
          </div>

        </div>

      </section>
    </>
  )
}



export const Harvesting = () => {
  const heading = "Harvesting & Yield of Bamboo"
  const info = "Bamboo is among the highest-yielding agroforestry species, offering sustainable and recurring harvests."
  const bambooDetails = [
    "Harvesting Age: 3-5 years for optimal yield.",
    "Growth Rate: Can reach up to 100 feet in height within 5 years.",
    "Annual Yield: 10-20 tons per acre depending on species and plantation density.",
    "Multiple Harvesting Cycles: Regenerates naturally after cutting, eliminating replantation costs."
  ];
  return (
    <>
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
          <div className="relative rounded-lg">
            <Image
              src={harvestimg}
              alt="Forest Image"
              className="w-full md:h-full object-cover h-60 rounded-2xl"
            />
            <div className="absolute redhat w-3/5 md:w-1/3 h-28 flex items-center top-8 -left-3 md:-left-8 bg-[#6D8C54] text-white py-3 px-6 rounded-md  ">
              <h2 className='lg:leading-snug  text-white redhat text-left border-l border-white border-opacity-20 ps-3 text-2xl md:text-4xl  font-normal'>
              {heading}
              </h2>

            </div>
            <div className="absolute top-8 md:-right-8 -right-3  bg-[#6D8C54] md:w-16 w-10 h-28 rounded-md"></div>
          </div>

          <div className="mt-6 text-gray-700">
            <p className="text-[#1B453C] font-normal mb-4">
              {info}
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm md:text-[15px] text-black redhat">
              {bambooDetails.map((detail, index) => (
                <li className='mb-2' key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}




export const Market = () => {
  const heading = "Market Demand & Supply"
  const demandDetails = [
    "Rising Market Prices – Due to high sustainability and diverse applications.",
    "Increasing Agroforestry Adoption – Farmers and investors are shifting towards bamboo plantations.",
    "Sustainable Supply Chain – Plantation-based bamboo ensures continuous market availability."
  ];

  const industryDetails = [
    "Construction Industry – Used for flooring, scaffolding, and structural elements.",
    "Furniture & Interior Design – Preferred for eco-friendly furniture, decor, and paneling.",
    "Paper & Pulp Industry – Provides high-quality fiber for paper production.",
    "Textile & Fashion – Used in the production of soft, breathable bamboo fabrics.",
    "Biofuel & Renewable Energy – Processed into biomass pellets for clean energy solutions."
  ];
  return (
    <>

<section className="py-14 lg:py-16 pt-0 lg:pt-2 relative overflow-hidden">
      <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
        <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center   text-3xl md:text-4xl  font-normal  w-full">
          {heading}
        </h2>
          <div className='flex flex-wrap'>
            <div className='md:w-10/12 w-full justify-center mx-auto'>
        <div className="flex flex-col-reverse md:grid grid-cols-1 items-center md:grid-cols-2 gap-6 relative">
          <div className='md:pr-12'>
            <ul className="list-disc pl-5 mt-2 text-sm md:text-[15px] text-black font-light">
              {demandDetails.map((detail, index) => (
                <li className='mb-2' key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="relative w-full mt-10 md:mt-0">
            <Image
              src={market1}
              alt="Hand planting seeds"
              className="w-full h-full rounded-tr-[100px] md:-ml-12 z-10 relative"
            />
            <div className="absolute -top-4 -z-10 -right-0 w-20 h-20 bg-[#6D8C54] rounded-full"></div>

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
            <ul className="list-disc pl-5 mt-2 text-sm md:text-[15px] text-black font-light">
              {industryDetails.map((detail, index) => (
                <li className='mb-2' key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>

          </div>
      <div className="absolute -z-10  -left-16 -bottom-12 w-60 h-60 md:w-96 md:h-96 bg-[#6D8C54] rounded-full"></div>
    </section>

    </>
  )
}
