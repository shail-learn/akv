
import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project1/banner.webp";
import { Gridbox } from '../Gridbox';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import info from "../../../assets/images/digestive/info.webp";
import Image from 'next/image';
import key1 from "../../../assets/images/projects/project1/key1.webp";
import key2 from "../../../assets/images/projects/project1/key2.webp";
import key3 from "../../../assets/images/projects/project1/key3.webp";
import key4 from "../../../assets/images/projects/project1/key4.webp";
import key5 from "../../../assets/images/projects/project1/key5.webp";
import key6 from "../../../assets/images/projects/project1/key6.webp";
import key7 from "../../../assets/images/projects/project1/key7.webp";
import key8 from "../../../assets/images/projects/project1/key8.webp";
import key9 from "../../../assets/images/projects/project1/key9.webp";
import key10 from "../../../assets/images/projects/project1/key10.webp";


import image1 from "../../../assets/images/digestive/image1.webp";
import { Info } from '../Info';
import bgstay from "../../../assets/images/stress/bg.webp";
import { SliderBlur } from '../SliderBlur';
import impact1 from "../../../assets/images/stress/Benefit1.webp";
import Titleslider from '../Titleslider';
import PartnerBg from "../../../assets/images/projects/project1/footer.webp";
import { RiCheckboxCircleFill } from "react-icons/ri";
import image2 from "../../../assets/images/projects/project1/key-details.webp";
import image3 from "../../../assets/images/projects/project1/history.webp";


export const Tulsi = () => {
  const text = {
    banner: banner,
    heading: `Shri Tulsidasji Panchavati Vatika: A Sacred Green Legacy`,

    title: 'Located at Kh-112, the Shri Tulsidasji Panchavati Vatika is a sacred plantation that blends spiritual heritage, ecological wisdom, and traditional healing. Planted on 25th December 2021, this site brings together five holy trees in a layout known as Panchvati, meaning “the grove of five”. This plantation reflects not only devotion to nature but also deep cultural and religious significance tied to Saint Tulsidas and the epic Ramayana.',
    opacity: 'opacity-50'
  }
  return (
    <>
      <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
      {/* <Wave /> */}
    </>
  )
}



export const Panchvati = () => {
  const heading = "Key Details"
  const infoData = [
    {
      title: "Location Name",
      description: "Shri. Tulsidasji Panchavati Vatika",
    },
    {
      title: "Coordinates",
      description: `22°59'33.4"N 77°10'52.9"E`,
    },
    {
      title: "Area/Dimension",
      description: "3539 square meters",
    },

    {
      title: "Distance from Admin Block",
      description: "723 meters",
    },
    {
      title: "Irrigation Method",
      description: "Drip Irrigation (Online Lateral)",
    },
    {
      title: "Date of Planting",
      description: "25th December 2021",
    },
  ];


  const main_heading = "What is Panchvati?"
  const shortinfo = "Panchvati refers to a sacred combination of five trees, each known for its divine symbolism and healing properties. These trees are considered sacred in Hinduism, Buddhism, and Jainism."
  const gridBox = "custom_height1"
  const whyChooseData = [

    {
      image: key1,
      title: 'Peepal',
      description: "(Ficus religiosa)"

    },
    {
      image: key2,
      title: 'Bargad / Banyan',
      description: "(Ficus benghalensis)"

    },
    {
      image: key3,
      title: 'Bael ',
      description: "(Aegle marmelos)"

    },
    {
      image: key4,
      title: 'Aonla / Indian Gooseberry',
      description: "(Phyllanthus emblica)"

    },
    {
      image: key5,
      title: 'Ashok',
      description: "(Saraca asoca)"

    },

  ];

  const GrowthHeading = "Historical and Religious Significance";
  const History_inf = `This Vatika is named after Sant Tulsidasji, the revered 16th-century poet-saint known for composing the Ramcharitmanas, a devotional retelling of the Ramayana.
  <ul class="list-disc ms-4 py-3 space-y-2">
    <li>Tulsidas is believed to have spent time in Panchavati, meditating and composing verses in devotion to Lord Rama.</li>
    <li>Panchavati itself holds mythological importance—it is where Lord Rama, Sita, and Lakshmana spent part of their exile.</li>
    <li>The area is said to be blessed by Rama’s presence and also marks the location where Sita was abducted by Ravana.</li>
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

      <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
        </div>
      </section>
      <Gridbox heading="Tree Combination (Index: Panchvati)" data={whyChooseData} gridBox={gridBox} />

      {/* <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
      /> */}

      <section className='text-center md:text-left pb-10 pt-16 lg:pb-10 lg:pt-20'>
        <div className='mx-auto max-w-7xl  px-6'>
          <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{GrowthHeading}</h2>
        </div>
        <div className='mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10'>
          <div className='w-full md:w-2/3 text-center md:text-left'>

            <div className='w-full p-4 md:p-8 bg-[#1B453C] rounded-2xl'>
              <p className='text-white text-base redhat' dangerouslySetInnerHTML={{ __html: History_inf }}>
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


export const Vatika = () => {
  return (
    <>
      <Info
        title="What is a Vatika?"
        description="Vatika means garden or grove. Shri Tulsidasji Panchavati Vatika is not just a plantation—it is a living tribute to devotion, harmony with nature, and the poetic legacy of Tulsidas. Over the years, this area has developed into a spiritual retreat for devotees and nature lovers alike."
      />
    </>
  )
}



export const Medicinal = () => {
  // const gridBox = "xl:!grid-cols-3 grid3";
  const custom_class = "white_grid grid_padding";
  const whyChooseData = [
    {
      image: key6,
      title: "Bargad (Banyan – Ficus benghalensis)",
      description:
        "Strengthens gums and supports oral health",
    },
    {
      image: key7,
      title: "Peepal (Ficus religiosa)",
      description:
        "Supports asthma relief and respiratory function",
    },
    {
      image: key8,
      title: "Bael (Aegle marmelos)",
      description:
        "Used as a digestive aid and in treating diarrhea",
    },
    {
      image: key9,
      title: "Aonla (Indian Gooseberry – Phyllanthus emblica)",
      description:
        "Rich in Vitamin C, boosts immunity",
    },
    {
      image: key10,
      title: "Ashok (Saraca asoca)",
      description:
        "Used in supporting women’s reproductive health",
    },


  ];
  return (
    <>

      <Gridbox
        heading="Medicinal Benefits of the Panchvati Trees"
        data={whyChooseData}
        className={custom_class}
        // gridBox={gridBox}
      />

    </>
  )
}


export const Layout = () => {
  const heading = "Why It Matters"
  const short ="Shri Tulsidasji Panchavati Vatika is not just a botanical site - it is a living spiritual ecosystem. It offers:"

  const boxslider = [
    {
      heading: "Cultural Connection",
      description: "Linking modern life with ancient traditions"
    },
    {
      heading: "Health and Healing",
      description: "Home to trees that promote wellness"

    },
    {
      heading: "Environmental Awareness",
      description: "An example of sacred conservation"

    },
    {
      heading: "Pilgrimage Value",
      description: "A place of quiet prayer and connection for believers"

    },

  ]
  return (
    <>
      <Info
        title="Layout and Maintenance"
        description="While the layout diagram is maintained onsite, a current snapshot of the plantation shows lush and healthy trees growing under proper care. The entire area is supported by drip irrigation using online lateral systems, ensuring water efficiency and plant well-being."
      />
      <Titleslider heading={heading} boxslider={boxslider} shortdescription={short} />

    </>
  )
}



export const Tulsidasji = () => {
  const heading = "Shri Tulsidasji Panchavati Vatika";
  const description =
    "The Shri Tulsidasji Panchavati Vatika is a perfect example of how nature, faith, and tradition come together. Located peacefully away from the busy areas, this sacred grove offers healing, spiritual calm, and cultural value to every visitor. <br/><br/> Whether you’re looking to meditate, learn about traditional trees, or reconnect with history, the Vatika welcomes you with its deep roots in faith and nature.";

  return (
    <section
      className="relative bg-no-repeat !mb-0 py-14 lg:py-32 bg-cover w-full my-8 md:my-12 !mt-0"
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40'></div>
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
