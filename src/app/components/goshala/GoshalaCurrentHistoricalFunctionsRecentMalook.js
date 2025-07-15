import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project3/banner.webp";
import info from "../../../assets/images/projects/project3/founder.webp";
import Image from 'next/image';
import PartnerBg from "../../../assets/images/projects/project3/bgimg.webp";
import { Gridbox } from '../Gridbox';
import image2 from "../../../assets/images/projects/project3/culture.webp";

import Titleslider from '../Titleslider';
import { RiCheckboxCircleFill } from "react-icons/ri";
import image01 from "../../../assets/images/projects/project3/key-detail.webp";
import use1 from "../../../assets/images/projects/project3/key1.webp";
import use2 from "../../../assets/images/projects/project3/key2.webp";
import use3 from "../../../assets/images/projects/project3/key3.webp";
import use4 from "../../../assets/images/projects/project3/key4.webp";
import use5 from "../../../assets/images/projects/project3/key5.webp";
import use6 from "../../../assets/images/projects/project3/key6.webp";

export const Goshala = () => {
  const text = {
    banner: banner,
    heading: `Shri. Malook Pithadhishwar Swami Shri Rajendra Das ji Maharaj Gaushala`,

    title: 'Located within Kh-112 at a distance of 410 meters from the Admin Block, the Shri. Malook Pithadhishwar Swami Shri Rajendra Das ji Maharaj Gaushala is a sacred and functional space dedicated to the welfare, care, and conservation of Indian desi cows. Spread across 500 square meters, this Gaushala plays a vital role in sustainable agriculture, spiritual living, and biodiversity enhancement at Atulye Krishi Vana.',
    opacity: 'opacity-50'
  }
  return (
    <>
      <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
      {/* <Wave /> */}
    </>
  )
}



export const Current = () => {
  const heading = "Key Details"
  const infoData = [
    {
      title: "Theme Index",
      description: "Gaushala",
    },
    {
      title: "Location Name",
      description: "Shri. Malook Pithadhishwar Swami Shri Rajendra Das ji Maharaj Gaushala",
    },
    {
      title: "Coordinates",
      description: `22°59'41.1"N 77°10'56.0"E`,
    },
    {
      title: "Area",
      description: "500 sq m",
    },

    {
      title: "Distance from Admin Block",
      description: "410 meters",
    },
  ];




  const GrowthHeading = "Current Cattle Inventory";
  const GrowthDescription = "The Gaushala currently shelters: There are future plans to expand the shelter to house up to 50 desi cows of native Indian breeds, promoting preservation and responsible cattle rearing."
  const slides = [
    {

      heading: "3 desi Gomata (Indian cows)",
    },
    {

      heading: "1 Nandi (bull)",
    },
    {

      heading: "2 Oxen",
    },
    {

      heading: "4 Male Calves",
    },
    {

      heading: "1 Female Calf",
    },

  ];


  return (
    <>

      <section className='relative text-center md:text-left   pb-16  pt-20 lg:pb-16 bg-[#f5f5f5]'  >
        <div className='mx-auto max-w-7xl px-4 md:px-6 mx:px-2 relative z-1 '>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-12'>
            <div className='md:w-[40%] w-full  w-12/12'>
              <div className='relative'>
                <Image className='w-full h-full rounded-xl' src={image01} alt='banner' />

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


      <Titleslider heading={GrowthHeading} boxslider={slides} shortdescription={GrowthDescription} />

    </>
  )
}



export const Historical = () => {
  const heading = "Historical and Cultural Background"
  const subtitle = "About the Founder"
  const description = "This Gaushala was established under the spiritual guidance of Swami Shri Rajendra Das ji Maharaj, a respected spiritual leader known for his lifelong commitment to cow protection (Gau Raksha) and Dharma (righteous living). He envisioned the Gaushala as more than a shelter — a place where reverence for cows meets practical agricultural benefits."

  const heading1 = "Cultural Importance"
  const description1 = `Cows hold a sacred place in Hindu tradition, symbolizing motherhood, abundance, and purity. The Gaushala is not only a functional dairy space but also a spiritual center where visitors can learn about traditional values and sustainable practices.`

  return (
    <>
      <section className='relative text-center md:text-left py-10  md:py-16'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
          <h2 className='text-3xl text-center md:leading-[1.3] md:text-4xl font-medium redhat text-black mb-10'>{heading}</h2>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
            <div className='lg:w-6/12  w-full w-12/12'>
              <Image className='w-full h-full rounded-xl' src={info} alt='banner' />
            </div>
            <div className='lg:w-6/12  w-full w-12/12'>

              <h3 className='text-xl md:leading-[1.3] md:text-2xl font-semibold redhat text-[#2D6B5E] mb-6'>{subtitle}</h3>
              <p className='text-black text-base text-justify redhat' dangerouslySetInnerHTML={{ __html: description }}>
              </p>


            </div>
          </div>
        </div>
      </section>

      <section className='relative text-center md:text-left   pb-16   lg:pb-24'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
          <div className='flex md:flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12 flex-col-reverse'>
            <div className='lg:w-6/12  w-full  w-12/12'>
              <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-black mt-4 mb-6'>{heading1}</h2>
              <p className='text-black text-base redhat text-justify mb-10' dangerouslySetInnerHTML={{ __html: description1 }}>
              </p>

            </div>
            <div className='lg:w-6/12  w-full  w-12/12'>
              <Image className='w-full h-full rounded-xl' src={image2} alt='banner' />
            </div>
          </div>


        </div>
      </section>
    </>
  )
}



export const Functions = () => {
  const gridBox = "xl:!grid-cols-3 grid3";
  const custom_class = "white_grid grid_padding";
  const whyChooseData = [
    {
      image: use1,
      title: "Animal Welfare:",
      description:
        "Ensures safe housing, regular feeding, and veterinary care for all cows",
    },
    {
      image: use2,
      title: "Dairy Production: ",
      description:
        "Supplies fresh milk and dairy products, supporting local consumption and reducing dependency on external sources",
    },
    {
      image: use3,
      title: "Organic Farming Support:",
      description:
        "Produces natural manure from cow dung, used in the fields of Atulye Krishi Vana",
    },


  ];

  const whyChooseData1 = [
    {
      image: use4,
      title: "Sustainability and Resource Recycling:",
      description:
        "Integrates livestock into farming cycles for nutrient cycling and reduced waste",
    },
    {
      image: use5,
      title: "Educational and Cultural Value: ",
      description:
        "Educates the community and visiting groups about ethical animal husbandry, desi breed conservation, and the role of cows in agroecology",
    },
    {
      image: use6,
      title: "Economic Contributions:",
      description:
        "Milk sales and composted dung can provide additional income to sustain Gaushala operations and benefit local farmers",
    },


  ];


  return (
    <>

      <Gridbox
        heading="Functions and Benefits"
        data={whyChooseData}
        className={custom_class}
        gridBox={gridBox}
      />
      <div className='-mt-8'>
        <Gridbox
          data={whyChooseData1}
          className={custom_class}
          gridBox={gridBox}
        />
      </div>

    </>

  )
}



export const Recent = () => {
  const heading = "Recent Developments"
  const shortdescription = "The Gaushala is actively aligning with modern sustainable practices, addressing:"

  const boxslider = [
    {
      heading: "Animal rights and ethical care",
    },
    {
      heading: "Reduced environmental impact",
    },
    {
      heading: "Natural resource management",
    },
    {
      heading: "Community participation and awareness",
    },

  ]
  return (
    <>

      <Titleslider heading={heading} boxslider={boxslider} shortdescription={shortdescription} />
    </>
  )
}



export const Malook = () => {
  const heading = "Shri. Malook Pithadhishwar Swami Shri Rajendra Das ji Maharaj Gaushala";
  const description =
    "The Shri. Malook Pithadhishwar Swami Shri Rajendra Das ji Maharaj Gaushala stands as a proud example of how sacred values, sustainable farming, and community welfare can come together in one space. With its rooted spiritual purpose and forward-looking agricultural model, the Gaushala is a cornerstone of Atulye Krishi Vana’s mission to preserve India’s rich farming traditions while embracing responsible and regenerative practices.";

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 !mb-0 bg-cover w-full my-8 md:my-12 !mt-0"
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
