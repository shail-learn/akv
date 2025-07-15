import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project4/banner.webp";

import Image from 'next/image';

import Titleslider from '../Titleslider';
import PartnerBg from "../../../assets/images/projects/project4/bgimg.webp";
import image2 from "../../../assets/images/projects/project4/key.webp";
import { RiCheckboxCircleFill } from "react-icons/ri";
import image3 from "../../../assets/images/projects/project4/what.webp";
import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project4/key1.webp";
import use2 from "../../../assets/images/projects/project4/key2.webp";
import use3 from "../../../assets/images/projects/project4/key3.webp";
import use4 from "../../../assets/images/projects/project4/key4.webp";
import use5 from "../../../assets/images/projects/project4/key5.webp";
import use6 from "../../../assets/images/projects/project4/key6.webp";



export const Vermi = () => {
  const text = {
    banner: banner,
    heading: `Shri. Rasayanshala – Vermicompost Production Unit`,
    subtitle: "Turning Organic Waste into Living Soil",
    title: 'The Vermicompost Production Unit at Shri. Rasayanshala, located in Kh-112, is a thriving center for sustainable farming. Spanning 530 square meters and just 310 meters from the Admin Block, this unit plays a key role in recycling organic farm waste and producing high-quality vermicompost. The unit produces 300 tons of compost annually and also develops a wide range of organic soil enhancers and insect-control products.',
    opacity: 'opacity-50'
  }
  return (
    <>
      <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
      {/* <Wave /> */}
    </>
  )
}


export const What = () => {
  const heading = "Key Details"
  const infoData = [
    {
      title: "Theme Index",
      description: "Vermicompost Production Unit",
    },
    {
      title: "Location Name",
      description: "Shri. Rasayanshala",
    },
    {
      title: "Coordinates",
      description: `22°59'36.4"N 77°11'01.9"E`,
    },
    {
      title: "Area",
      description: "530 sq m",
    },

    {
      title: "Distance from Admin Block",
      description: "310 meters",
    },
    {
      title: "Annual Production",
      description: "300 tons of vermicompost",
    },
    {
      title: "Other Products",
      description: "20–25 types of organic manure and insect control products",
    },
  ];






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

      {/* <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
        </div>
      </section> */}



    </>
  )
}


export const Historical = () => {
  const main_heading = "What is Vermicomposting?"
  const shortinfo = `Vermicomposting is the process of turning organic waste into rich, black compost using earthworms, especially the species Eisenia fetida (commonly known as red wigglers). These worms break down materials like vegetable scraps, crop residue, and other biodegradable matter into nutrient-rich compost in 45–60 days.
   <br>The resulting vermicompost is full of natural nutrients, improves soil structure, and boosts plant health. At Rasayanshala, this compost is used internally across the farm to maintain soil health and organic integrity.

     <h4 class="text-2xl py-4 font-semibold">Historical Background</h4>

     Though vermicomposting has ancient roots, its modern form has gained popularity in the 21st century due to rising awareness of:
   <ul class="list-disc list-inside py-3">
    <li>Environmental sustainability</li>
    <li>Waste management</li>
    <li>Chemical-free agriculture</li>
   </ul>
   Today, it’s a respected farming practice used in both home gardens and large agricultural systems worldwide. Shri. Rasayanshala combines traditional wisdom with modern best practices to create a zero-waste loop within the Atulye Krishi Vana ecosystem.
  `
  return (
    <>
      <section className='text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20'>
        <div className='mx-auto max-w-7xl  px-6'>
          <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{main_heading}</h2>
        </div>
        <div className='mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10'>
          <div className='w-full md:w-2/3 text-center md:text-left'>

            <div className='w-full p-4 md:p-8 bg-[#1B453C] rounded-2xl'>
              <p className='text-white text-base redhat' dangerouslySetInnerHTML={{ __html: shortinfo }}>
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/3 text-center'>
            <Image className='w-full h-full rounded-xl' src={image3} alt='banner' />
          </div>

        </div>
      </section>
    </>
  )
}



export const Core = () => {
  const gridBox = "xl:!grid-cols-3 grid3";
  const custom_class = "white_grid grid_padding";
  const whyChooseData = [
    {
      image: use1,
      title: "Organic Waste Conversion",
      description:
        "Recycles kitchen scraps, dry leaves, crop residues, and other organic materials",
    },
    {
      image: use2,
      title: "Soil Fertility Improvement ",
      description:
        "Vermicompost enhances soil structure, aeration, and water retention",
    },
    {
      image: use3,
      title: "Plant Health Booster",
      description:
        "The natural compost helps plants grow stronger and healthier",
    },



  ];
  const whyChooseData1 = [
    {
      image: use4,
      title: "Eco-Friendly Waste Management",
      description:
        "Reduces carbon footprint and avoids the use of chemical fertilizers",
    },
    {
      image: use5,
      title: "Low Maintenance, High Return",
      description:
        "Earthworms multiply naturally, reducing input costs",
    },
    {
      image: use6,
      title: "Economic Opportunities",
      description:
        "Vermicompost and worm cultures can be sold to nurseries, gardeners, and farmers",
    },



  ];
  return (
    <>

      <Gridbox
        heading="Core Benefits & Uses"
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


export const Additional = () => {
  const heading = "Additional Organic Products"
  const shortdescription = "In addition to vermicompost, Shri. Rasayanshala develops:"

  const boxslider = [
    {
      heading: "20–25 varieties of organic manure",
    },
    {
      heading: "Natural pest repellents and plant growth boosters",
    },
    {
      heading: "100% chemical-free products, all made from materials sourced within the farm",
    },
    {
      heading: "Natural pest repellents and plant growth boosters",
    },

  ]
  return (
    <>

      <Titleslider heading={heading} boxslider={boxslider} shortdescription={shortdescription} />

    </>
  )
}



export const Conclusion = () => {
  const heading = "Conclusion";
  const description =
    "The Vermicompost Production Unit at Shri. Rasayanshala is an essential part of the Atulye Krishi Vana model, showing how we can grow naturally, waste nothing, and care for the Earth. With its strong focus on internal sustainability, organic output, and education, this unit is a shining example of how farming can be both productive and planet-friendly. ";

  return (
    <section
      className="relative bg-no-repeat py-14 !mb-0 lg:py-32 bg-cover w-full my-8 md:my-12 !mt-0"
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>

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
