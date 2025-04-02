"use client"
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import harvestimg from "../../../assets/images/bamboo/harvest.webp";
import img01 from "../../../assets/images/guava/asian-farmer.webp";




export const PlantingMaterial = () => {
  const heading1 = "Planting Material & Propagation Methods"
  const text = `Propagation Using Air Layering <br/> Guava is propagated using air layering to develop strong root systems before planting.`

  const boxslider = [
    {
      title: "Benefits of air layering",
      description: 'Shortens the juvenile phase, leading to early fruiting',
    },
    {
      title: "Benefits of air layering",
      description: 'Ensures higher survival rate after transplantation.',
    },
    {
      title: "Benefits of air layering",
      description: ' Produces uniform and disease-free plants',
    },
    {
      title: "Benefits of air layering",
      description: 'Shortens the juvenile phase, leading to early fruiting',
    },
    {
      title: "Benefits of air layering",
      description: 'Ensures higher survival rate after transplantation.',
    },
    {
      title: "Benefits of air layering",
      description: ' Produces uniform and disease-free plants',
    },

  ]
  return (
    <>

      <section
        className=" pt-14 pb-16 lg:pt-16 lg:pb-20 vision-sec bg-[#D9D9D9A6] relative hide_title_slider scale_slider  green-arrow " >
        <div className="absolute bottom-0 left-0 h-1/3  bg-white w-full"> </div>
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
          <h2 className="lg:leading-snug text-[#1B453C] redhat mb-7 text-center text-3xl md:text-4xl  font-medium  w-full">
            {heading1}</h2>
          <div className='lg:w-7/12 mx-auto text-center'>
            <p
              className="text-[#1B453C] text-sm lg:text-base font-light"
              dangerouslySetInnerHTML={{ __html: text }}
            ></p>
          </div>

        </div>
        <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-10 '>
          <div className='  px-0 md:px-6 lg:px-2 relative z-1 '>
            <div className='mx-auto  w-12/12'>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}

                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 80,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 60,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 70,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 90,
                  },
                }}

                className="mySwiper2 outer-arrow"
              >

                {boxslider.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='w-full  item-center flex text-center items-center rounded-[20px] p-12 px-6 !bg-[#8EB558] item_slider' style={{ boxShadow: "4px 4px 4px 0px #0000004A" }}>
                      <div className='lg:w-12/12 mx-auto'>
                        <h3 className='text-md !text-[#1B453C] redhat text-2xl pb-2 font-semibold'>{item.title}</h3>
                        <p className='text-md !text-[#1B453C] font-normal'>{item.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}


export const PlantingSeason = () => {
  const heading = "Season of Planting and Spacing"
  const plantSearon = [
    {
      heading: "Best Planting Season",
      details: ["Guava planting is done between June and December.", "Avoid extreme cold and heavy monsoons for better root establishment."],
    },
    {
      heading: "Benefits of Bamboo Furniture",
      details: ["5 – 6 meters spacing is ideal for better aeration and sunlight penetration.", "Proper spacing helps in reducing disease incidence and improving fruit quality."],
    },
  ];

  return (
    <>
      <section className="py-14 !pt-0 lg:py-16">
        <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
          <div className='w-[95%] md:w-[92%] mx-auto'>
            <div className="relative rounded-lg">
              <Image
                src={harvestimg}
                alt="Forest Image"
                className="w-full md:h-full object-cover h-60 rounded-2xl"
              />
              <div className="absolute redhat w-3/5 md:w-1/3 h-28 flex items-center top-8 -left-3 md:-left-8 bg-[#8EB558] text-white py-3 px-6 rounded-md  ">
                <h2 className='lg:leading-snug  text-white redhat text-left border-l border-white border-opacity-20 ps-3 text-2xl md:text-4xl  font-normal'>
                  {heading}
                </h2>

              </div>
              <div className="absolute top-8 md:-right-8 -right-3  bg-[#8EB558] md:w-16 w-10 h-28 rounded-md"></div>
            </div>

            <div className="mt-6 text-gray-700">
              {plantSearon.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-6">
                  <p className="text-black font-medium text-lg mb-4">
                    {section.heading}
                  </p>


                  <ul className="list-disc pl-5 mt-2 text-sm md:text-[15px] text-black redhat">
                    {section.details.map((detail, index) => (
                      <li className="mb-2" key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export const PlantingTechniques = () => {
  const plantingData = {
    title: "Planting Techniques for Healthy Growth",
    description: "Dig pits of 45 cm x 45 cm x 45 cm before planting.",
    steptitle: "Fill pits with:",
    steps: [
      "10 kg of farmyard manure (FYM).",
      "1 kg of neem cake for pest control.",
      "Topsoil mixture for better root development.",
      "Transplant layers with the ball of earth intact in the center of the pit.",
      "Proper planting techniques ensure strong root establishment and faster fruiting.",
    ],
    shortdesciption: `Transplant layers with the ball of earth intact in the center of the pit. <br/>
    Proper planting techniques ensure strong root establishment and faster fruiting`,
    imageSrc: img01,
  };

  return (
    <>
      <section className='pt-0 pb-16 lg:pt-0 lg:pb-14' >
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16'>
            <div className="md:w-1/2 w-full">
              <div className='relative'>
                <Image
                  src={plantingData.imageSrc}
                  alt="Planting Techniques"
                  width={600}
                  height={400}
                  className="rounded-[20px]"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                />
                <div className="absolute inset-0 -z-10 h-[110%] w-[96%] md:w-full translate-x-6 -translate-y-3 md:-translate-y-4 bg-white border border-gray-400 rounded-[20px] shadow-md"></div>

              </div>

            </div>
            <div className='lg:w-6/12  w-12/12'>

              <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C]">{plantingData.title}</h2>
              <p className="my-6 text-[15px] redhat font-normal md:text-base text-black">{plantingData.description}</p>
              <p className='text-[15px] redhat font-normal md:text-base text-black'>{plantingData.steptitle}</p>
              <ul className="list-disc pl-5 text-black mb-4">
                {plantingData.steps.map((step, index) => (
                  <li key={index} className="text-[15px] md:text-base redhat font-normal text-black">
                    {step}
                  </li>
                ))}
              </ul>
              <p
                className="text-[15px] md:text-base font-normal redhat text-black mb-10 md:mb-14"
                dangerouslySetInnerHTML={{ __html: plantingData.shortdesciption }}
              ></p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

