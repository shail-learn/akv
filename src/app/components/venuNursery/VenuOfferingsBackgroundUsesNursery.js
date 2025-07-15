import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project8/banner.webp";

import Image from 'next/image';

import PartnerBg from "../../../assets/images/projects/project8/bgimg.webp";
import { RiCheckboxCircleFill } from "react-icons/ri";
import image2 from "../../../assets/images/projects/project8/key.webp";

import first from "../../../assets/images/projects/project8/program-1.webp";
import second from "../../../assets/images/projects/project8/program-3.webp";
import third from "../../../assets/images/projects/project8/program-2.webp";
import fourth from "../../../assets/images/projects/project8/program-4.webp";
import fifth from "../../../assets/images/training/program-5.webp";
import Titleslider from '../Titleslider';
import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project8/key1.webp";
import use2 from "../../../assets/images/projects/project8/key2.webp";
import use3 from "../../../assets/images/projects/project8/key3.webp";
import use4 from "../../../assets/images/projects/project8/key4.webp";


export const Venu = () => {
  const text = {
    banner: banner,
    heading: `Shri. Venu Nursery – Growing Roots for a Greener Future`,

    title: 'Located just 50 meters from the Admin Building, Shri. Venu Nursery is the dedicated nursery unit of Atulye Krishi Vana, developed to promote sustainable agriculture and plant cultivation. Spread across 1000 square meters, the nursery supports the production of fruit, timber, and ornamental plants for internal use and external distribution. Since its establishment in 2021, the nursery has produced over five lakh saplings. It continues to serve individuals, farmers, and institutions, providing high-quality plant material backed by responsible and eco-conscious practices.',
    opacity: 'opacity-50'
  }
  return (
    <>
      <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
      {/* <Wave /> */}
    </>
  )
}


export const Offerings = () => {
  const heading = "Key Details"
  const infoData = [
    {
      title: "Theme Index",
      description: "Nursery",
    },
    {
      title: "Location Name",
      description: "Shri. Venu Nursery",
    },
    {
      title: "Coordinates",
      description: `22°59'41.7"N 77°11'06.5"E`,
    },
    {
      title: "Area",
      description: "1000 square meters",
    },

    {
      title: "Distance from Admin Block",
      description: "50 meters",
    },
  ];



  const heading1 = "Our Offerings";

  const textoneData = {
    title: "Plant Categories",
    listData: `<li>Fruit-bearing plants for home gardens and orchards.</li>
    <li>Timber saplings for agroforestry and long-term cultivation.</li>
    <li>Ornamental and flowering plants for beautification and landscaping.</li>`,
  };

  const texttwoData = {
    title: "Propagation Methods",
    listData: `<li>Seedling production using selected seeds in controlled conditions.</li>
    <li>Clonal propagation using a maintained mother block to ensure plant uniformity.</li>
    <li>Grafting and budding techniques applied to enhance quality and plant resilience.</li>`,
  };

  const textthirdData = {
    title: "Nursery Services",
    listData: `
    <p>Support systems to ensure healthy plant growth and education:</p>
    <li>Plant Health Advice – Tips on disease control and care.</li>
    <li>Seasonal Planning – What to plant based on time and region.</li>
    <li>On-Ground Support – Help with transplantation and setup.</li>`,
  };

  const textfourthData = {
    title: "Sustainable Practices",
    listData: `<p>Eco-conscious methods embedded in daily nursery work:</p>
    <li>Organic Compost – Nutrient-rich, chemical-free mix.</li>
    <li>Water Conservation – Efficient drip and sprinkler systems.</li>
    <li>Eco Pots – Use of biodegradable and recycled containers.</li>`,
  };


  return (
    <>

      <section className='relative text-center md:text-left   pb-16  pt-20 lg:pb-16 bg-[#f5f5f5]'  >
        <div className='mx-auto max-w-7xl px-4 md:px-6 mx:px-2 relative z-1 '>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-12'>
            <div className='md:w-[40%] w-full  w-12/12'>
              <div className='relative'>
                <Image className='w-full h-full rounded-xl' src={image2} alt='banner' />

              </div>
            </div>
            <div className='md:w-[60%]  w-full  w-12/12'>
              <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{heading}</h2>

              <div className='my-6 mb-14'>
                {infoData.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 mb-4 py-1">
                    <RiCheckboxCircleFill className="h-5 w-5 text-green-800 mt-1" />
                    <div>
                      <h3 className="font-semibold redhat text-left text-lg">{item.title}</h3>
                      <p className="text-black redhat">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-14   md:py-20 !pt-14 technology-sec">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 ">
          <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-black mt-4 text-center">
            {heading1}
          </h2>
        </div>
        <div className="mx-auto max-w-full  pt-10">
          <div className="grid gap-0 grid-cols-1  lg:grid-cols-12 items-center justify-center">
            <div className="md:col-span-3 col-span-12   h-full">
              <Image
                src={first}
                alt="icon"
                className="w-full mx-auto  h-full"
                quality={90}
              />
            </div>
            <div className="md:col-span-3 col-span-12  h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 text-md font-medium">
                  {textoneData.title}
                </p>
                <ul
                  className="w-2/2 text-[14px] !list-disc pl-5 py-4"
                  dangerouslySetInnerHTML={{ __html: textoneData.listData }}
                ></ul>
              </div>
            </div>

            <div className="md:col-span-3 col-span-12  h-full">
              <Image
                src={second}
                alt="icon"
                className="w-full mx-auto h-full"
                quality={90}

              />
            </div>
            <div className="md:col-span-3 col-span-12  h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 text-md font-medium">
                  {texttwoData.title}
                </p>
                <ul
                  className="w-2/2 text-[14px] !list-disc pl-5 py-4"
                  dangerouslySetInnerHTML={{ __html: texttwoData.listData }}
                ></ul>
              </div>
            </div>

            <div className="md:col-span-3 col-span-12 order-6 lg:order-none  h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 text-md font-medium">
                  {textthirdData.title}
                </p>
                <ul
                  className="w-2/2 text-[14px] !list-disc pl-5 py-4"
                  dangerouslySetInnerHTML={{ __html: textthirdData.listData }}
                ></ul>
              </div>
            </div>
            <div className="md:col-span-3 col-span-12  order-5 lg:order-none    h-full">

              <Image src={third} alt="icon" className="w-full mx-auto h-full"  quality={90}/>
            </div>
            <div className="md:col-span-3 col-span-12 order-8 lg:order-none  h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 text-md font-medium">
                  {textfourthData.title}
                </p>
                <ul
                  className="w-2/2 text-[14px] !list-disc pl-5 py-4"
                  dangerouslySetInnerHTML={{ __html: textfourthData.listData }}
                ></ul>
              </div>
            </div>
            <div className="md:col-span-3 col-span-12  order-7  lg:order-none  h-full">
              <Image
                src={fourth}
                alt="icon"
                className="w-full mx-auto h-full"
                quality={90}
              />
            </div>


          </div>
        </div>
      </section>

    </>
  )
}



export const Background = () => {
  const heading = "Background and Growth";
  const title = "Shri. Venu Nursery was founded with the vision of supporting Atulye Krishi Vana’s agroforestry goals by producing reliable planting material in-house. From a focused beginning in 2021, it has grown into a professional nursery serving a wide range of stakeholders."
  const subtitle = "It now supports:"
  const className = "slider_height";

  const slides = [
    {
      heading: "Agroforestry projects",
    },
    {
      heading: "Horticultural developments",
    },
    {
      heading: "Demonstration and training activities",
    },
    {
      heading: "Regional biodiversity efforts",
    },

  ];
  return (
    <>
      {/* <FaqSlider
        classname={className}
        className="shailendra"
        card={card}
        heading={heading}
        title1={title}
        subtitle={subtitle}
      /> */}

      <Titleslider heading={heading} boxslider={slides} shortdescription={title} />

    </>
  );
}



export const Uses = () => {
  const gridBox = "xl:!grid-cols-4 grid3";
  const custom_class = "white_grid grid_padding";
  const whyChooseData = [
    {
      image: use1,
      title: "Propagation and Cultivation",
      description:
        "Seedling Production: Reliable supply of young plants for various planting cycles",
    },
    {
      image: use2,
      title: "Varietal Development and Plant Health ",
      description:
        "Selective breeding and hybridization through the mother block",
    },
    {
      image: use3,
      title: "Educational and Demonstration Role",
      description:
        "Serves as a live training site for budding and grafting methods",
    },
    {
      image: use4,
      title: "Specialization and Sustainability",
      description:
        "Contributes to long-term sustainability by reducing external dependence on saplings",
    },


  ];
  return (
    <>

      <Gridbox
        heading="Uses and Benefits"
        data={whyChooseData}
        className={custom_class}
        gridBox={gridBox}
      />

    </>
  )
}


export const Nursery = () => {
  const heading = "Shri. Venu Nursery";
  const description =
    "Shri. Venu Nursery is a vital part of Atulye Krishi Vana's vision. It represents a commitment to sustainability, agricultural advancement, and environmental stewardship. With consistent production, plant diversity, and educational outreach, the nursery continues to grow both plants and purpose.<br/> <br/> This is where propagation meets preservation, and learning turns into legacy.      ";

  return (
    <section
      className="relative bg-no-repeat py-14 !mb-0 mt-10 lg:py-32 bg-cover w-full my-8 md:my-12  "
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>

      <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
        <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
          <h2 className=" w-full  text-3xl md:text-4xl leading-snug font-bold mb-8 md:mb-10 redhat">
            {heading}
          </h2>
          <p
            className="mb-4 text-sm  md:text-base   w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </section>
  );
}
