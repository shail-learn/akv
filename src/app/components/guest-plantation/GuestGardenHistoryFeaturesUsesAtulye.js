import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project5/banner.webp";
import Image from 'next/image';

import Titleslider from '../Titleslider';
import PartnerBg from "../../../assets/images/projects/project5/bgimg.webp";
import image2 from "../../../assets/images/projects/project5/key.webp";
import { RiCheckboxCircleFill } from "react-icons/ri";
import image3 from "../../../assets/images/projects/project5/guest.webp";
import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project5/key1.webp";
import use2 from "../../../assets/images/projects/project5/key2.webp";
import use3 from "../../../assets/images/projects/project5/key3.webp";
import use4 from "../../../assets/images/projects/project5/key4.webp";


export const Guest = () => {
  const text = {
    banner: banner,
    heading: `Guest Garden at Atulye Krishi Vana`,
    subtitle: "Where Every Visit Blooms into a Lasting Memory ",
    title: 'The Guest Garden, located at Khasra No. 100 and just 160 meters from the Admin Block, is one of the most heartwarming spaces at Atulye Krishi Vana. Spanning 870 square meters, this lush garden is not only a display of natural beauty but also a living symbol of guest honor and connection. Each visitor is invited to plant a tree or plant during their visit — creating a lasting bond with the land, and leaving behind something that grows in their name for years to come. ',
    opacity: 'opacity-50'
  }
  return (
    <>
      <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
      {/* <Wave /> */}
    </>
  )
}



export const Garden = () => {
  const heading = "Key Details"
  const infoData = [
    {
      title: "Theme Index",
      description: "Garden Guest",
    },
    {
      title: "Location Name",
      description: "Guest Garden",
    },
    {
      title: "Coordinates",
      description: `22°59'42.0"N 77°11'05.2"E`,
    },
    {
      title: "Area",
      description: "870 sq m",
    },

    {
      title: "Distance from Admin Block",
      description: "160 meters",
    },
  ];



  const main_heading = "A Garden That Grows With Every Guest"
  const shortinfo = `More than just a landscaped space, the Guest Garden represents a beautiful tradition. Every guest plants a sapling as a part of their visit — an act that symbolizes honor, gratitude, and long-term connection.
   <br><br> Visitors are encouraged to
   <ul class="list-disc list-inside py-3">
    <li>Select a plant of their choice</li>
    <li>Plant it in the garden with guidance</li>
    <li>Return in future years to see how it has grown — or even hug it</li>
   </ul>
  `


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
      {/*
      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
      /> */}

    </>
  )
}


export const History = () => {
  const gridBox = "xl:!grid-cols-4 custom_height1"
  const custom_class = "white_grid grid_padding"
  const main_heading = "History and Vision"
  const shortinfo = `The Guest Garden was envisioned and established by Mr. Mithilesh Aggarwal ji as part of Atulye Krishi Vana’s larger mission to integrate sustainability with cultural traditions.
    `


    const heading = "History and Vision"
    const Description = "The Guest Garden was envisioned and established by Mr. Mithilesh Aggarwal ji as part of Atulye Krishi Vana’s larger mission to integrate sustainability with cultural traditions.    "

    const boxslider = [
      {
        heading: "A green welcome area for visitors",
      },
      {
        heading: "A living archive of guest memories",
      },
      {
        heading: "A model for eco-friendly landscaping and guest engagement",
      },
      {
        heading: "A tranquil space where guests can connect with nature and reflect in peace",
      },

    ]

  return (
    <>
      {/* <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-black" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
        </div>
      </section> */}

      <Titleslider heading={heading} boxslider={boxslider} shortdescription={Description} />

    </>
  )
}


export const Features = () => {
  const gridBox = "xl:!grid-cols-4 grid3";
  const custom_class = "white_grid grid_padding";
  const whyChooseData = [
    {
      image: use1,
      title: "Personalization",
      description:
        "Every visitor gets the chance to leave a mark by planting a tree or shrub.",
    },
    {
      image: use2,
      title: "Education ",
      description:
        "Offers hands-on experience in planting techniques, soil care, and seasonal plant management.",
    },
    {
      image: use3,
      title: "Visitor Engagement",
      description:
        "Turns a tour into an interactive experience, encouraging deeper involvement.",
    },
    {
      image: use4,
      title: "Community Building",
      description:
        "Fosters a sense of shared responsibility and belonging among guests.",
    },


  ];
  return (
    <>

      <Gridbox
        heading="Uses & Benefits"
        data={whyChooseData}
        className={custom_class}
        gridBox={gridBox}
      />

    </>
  )
}


export const Uses = () => {
  const heading = "Garden Features"

  const boxslider = [
    {
      heading: "Ornamental plants and flowering beds",
    },
    {
      heading: "Shaded seating areas for reflection and relaxation",
    },
    {
      heading: "Eco-landscaping that uses native and drought-resistant species",
    },
    {
      heading: "Design inspired by natural harmony and traditional aesthetics",
    },

  ]
  return (
    <>

      <Titleslider heading={heading} boxslider={boxslider} />

    </>
  )
}


export const Atulye = () => {
  const heading = "Guest Garden at Atulye Krishi Vana";
  const description =
    "The Guest Garden at Atulye Krishi Vana is a peaceful, vibrant space where hospitality meets sustainability. It’s not just a garden — it’s a living tradition, a tribute to every guest who visits, and a green bond between humans and nature. <br/><br/> Whether you're a visitor, volunteer, or simply passing by — planting your sapling here means you’ve become a part of something greater, something that grows with time.  ";

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 !mb-0 bg-cover w-full my-8 md:my-12 !mt-0"
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
