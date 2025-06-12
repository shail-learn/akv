import React from 'react'
import { Gridbox } from '../Gridbox';
import { Iconslider } from '../Iconslider';
import why1 from "../../../assets/images/fast/growth11.webp";
import why2 from "../../../assets/images/fast/growth12.webp";
import why3 from "../../../assets/images/fast/growth13.webp";
import why4 from "../../../assets/images/fast/growth14.webp";
import why5 from "../../../assets/images/fast/growth15.webp";

import image1 from "../../../assets/images/fast/img5.webp";
import image2 from "../../../assets/images/fast/img6.webp";
import image3 from "../../../assets/images/fast/img7.webp";
import image4 from "../../../assets/images/fast/img8.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';

export const Khamer = () => {
  const main_heading = "Khamer (Gamhar) (Gmelina arborea)"
  const shortinfo = "Khamer, also known as Gamhar, is one of the fastest-growing commercial timber trees, maturing in just 5-8 years. It is widely cultivated for furniture, plywood, and construction due to its lightweight yet durable wood."

  const heading = "Key Features";
  const custom_class = "!mt-0 plant_p"
  const cardData = [
    {
      title: "Sustainable Harvesting",
      description: "Can be grown in short rotation cycles.",
    },
    {
      title: "Growth Rate",
      description: "One of the fastest-growing hardwoods, reaching 30-40 feet in 5 years.",
    },
    {
      title: "Wood Quality",
      description: "Light, highly workable, and termite-resistant.",
    },
    {
      title: "Growth Rate",
      description: "One of the fastest-growing hardwoods, reaching 30-40 feet in 5 years.",
    },


  ];

  const whyChooseData = [
    {
      image: why1,
      title: 'Climate ',
      description: 'Prefers warm, humid climates but adapts to semi-arid regions.',
    },
    {
      image: why2,
      title: 'Soil',
      description: 'Grows well in fertile, well-drained sandy loam.',
    },
    {
      image: why3,
      title: 'Spacing',
      description: '3m x 3m for timber production.',
    },
    {
      image: why4,
      title: 'Irrigation ',
      description: ' Moderate water needs, benefits from occasional deep watering.',
    },
    {
      image: why5,
      title: 'Maintenance ',
      description: ' Requires regular pruning for optimal wood quality.',
    },
  ];

  return (
    <>
      <section className="py-12 md:pt-20  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-white">{shortinfo}</p>
        </div>
      </section>

      <Iconslider
        card={cardData}
        heading={heading}
        custom_class={custom_class}
      />


      <Gridbox heading="Plantation & Growth Requirements" data={whyChooseData} />

    </>
  )
}



export const Growth = () => {
  const custom_class1 = "growth_padding"
  const GrowthHeading = "Commercial Uses";
  const slides = [
    {

      image: image1,
      title: "Furniture & Interior Woodwork -",
      desc: "Ideal for making doors, windows, and cabinets.",

    },
    {

      image: image2,
      title: "Plywood Industry –",
      desc: "Used in veneers and laminates.",
    },
    {

      image: image3,
      title: "Musical Instruments –",
      desc: "Valued for crafting guitar bodies and other wooden instruments.",
    },

    {

      image: image4,
      title: "Agroforestry -",
      desc: " Integrated with crops for shade and soil enrichment.",
    },


  ];
  return (
    <>
      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        className={custom_class1}
      />


    </>
  )
}
