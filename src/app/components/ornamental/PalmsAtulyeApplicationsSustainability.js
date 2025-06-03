import React from 'react'
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/digestive/choose1.webp";
import choose2 from "../../../assets/images/digestive/choose2.webp";
import choose3 from "../../../assets/images/digestive/choose3.webp";
import choose4 from "../../../assets/images/digestive/choose4.webp";
import { FaqSlider } from '../FaqSlider';
import Titleslider from '../Titleslider';
import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image';
import Plant from "../../../assets/images/eco/future.webp";

export const Palms = () => {
  const heading = "Why Palms & Cycads with Atulye Krishi Vana?"
  const fruitData = [
    {
      title: "Timeless Design Value",
      image: choose1,
      flip: "Palms are architectural icons in landscaping, complementing both modern and traditional Indian aesthetics."
    },
    {
      title: "Low Maintenance Landscapes",
      image: choose2,
      flip: "These plants require less frequent pruning, are pest-resistant, and adapt to a variety of soils and climates."
    },
    {
      title: "Ideal for Urban Heat Management",
      image: choose3,
      flip: "Palms provide vertical shading, reduce heat island effect, and are ideal for high-density urban landscapes where ground cover space is limited."
    },
    {
      title: "Ecologically Neutral",
      image: choose4,
      flip: "Palms and cycads do not disrupt native ecosystems when well chosen, especially those that are drought-tolerant or regionally adapted."
    },
    {
      title: "Premium Appeal",
      image: choose4,
      flip: "Used in luxury resorts, event venues, and commercial real estate, these plants signal care, calm, and elegance."
    },


  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />

    </>
  )
}



export const Atulye = () => {
  const heading = "Atulye Krishi Vana’s Support Ecosystem";
  const title= "To make palm and cycad landscaping successful, we provide:  "
  const className = "slider_height height_300";

  const card = [
    {
      title: "Nursery Development",
      description: "Training for community nurseries and garden entrepreneurs."
    },
    {
      title: "Certified Saplings",
      description: "Disease-free, region-suited ornamental palm varieties."
    },
    {
      title: "Site Assessment",
      description: "Guidance on spacing, soil amendments, and irrigation layout."
    },
    {
      title: "Design Support",
      description: "Integration into institutional, civic, and private projects."
    },
    {
      title: "Long-Term Care Modules",
      description: "Seasonal care schedules and pruning workshops."
    },
    {
      title: "Market Access",
      description: "Bulk buyer connections for landscape firms and panchayat programs."
    },



  ];
  return (
    <>
      <FaqSlider
        classname={className}
        className="shailendra"
        card={card}
        heading={heading}
        title1={title}
      />


    </>
  );
}



export const Applications = () => {
  const heading = "Applications Across Sectors"

  const boxslider = [
    {
      heading: "Urban Development",
      description: "Medians, walkways, traffic islands"
    },
    {
      heading: "Hospitality & Tourism",
      description: "Resorts, beach fronts, eco-retreats"

    },
    {
      heading: "Commercial Real Estate",
      description: "Malls, corporate headquarters, IT parks"

    },
    {
      heading: "Public Infrastructure",
      description: "Civic gardens, town squares, monument zones"

    },
    {
      heading: "Private Homes",
      description: "Courtyards, terraces, villa driveways"

    },


  ]
  return (
    <>
      <Titleslider heading={heading} boxslider={boxslider} />

    </>
  )
}



export const Sustainability = () => {
  const heading = `Sustainability Benefits`

  const futurePlans = [
    `<b>Water Efficiency  –</b> Many palms are drought-tolerant once established.`,
    `<b>Minimal Resource Load  –</b> Require less fertilization, mowing, and pest control.`,
    `<b>Visual Cooling –</b> Soften harsh building lines and reflect sunlight.`,
    `<b>Dust Control –</b> Fronds trap dust, improving air quality in high-traffic zones.`,
    `<b>Longevity –</b> Slow-growing species offer decades of use with little change.`,

  ];


  return (
    <>

      <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10">

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-black mb-4 md:mb-20"
             dangerouslySetInnerHTML={{__html : heading}}
            />

            <ul className="mt-6 space-y-4">
              {futurePlans.map((plan, index) => (
                <li key={index} className="flex  text-left space-x-3">
                  <span className="w-6 h-6 text-[#1B453C] flex items-center justify-center rounded-full">
                    <MdCheckCircle className='w-6 h-6' />
                  </span>
                  <p
                    className="text-[#141414] redhat"
                    dangerouslySetInnerHTML={{ __html: plan }}
                  />
                </li>
              ))}
            </ul>


          </div>
          <div className=" w-full md:w-1/2">

            <Image
              src={Plant}
              alt="Planting"
              width={200}
              height={200}
              className="w-full h-full"
            />

          </div>
        </div>
      </section>
    </>
  )
}
