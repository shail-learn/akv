import React from 'react'
import { Gridbox } from '../Gridbox';
import why1 from "../../../assets/images/fast/growth6.webp";
import why2 from "../../../assets/images/fast/growth7.webp";
import why3 from "../../../assets/images/fast/growth8.webp";
import why4 from "../../../assets/images/fast/growth9.webp";
import why5 from "../../../assets/images/fast/growth10.webp";
import { Iconslider } from '../Iconslider';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';

import image1 from "../../../assets/images/fast/use1.webp";
import image2 from "../../../assets/images/fast/use2.webp";
import image3 from "../../../assets/images/fast/use3.webp";
import image4 from "../../../assets/images/fast/use4.webp";

export const Rain = () => {
  const custom_class = "!mt-0 plant_p !pt-0 bg-white h2_green"
  const heading = "Key Features";
  const cardData = [
    {
      title: "Soil Improvement",
      description: "Fixes nitrogen in the soil, improving fertility.",
    },
    {
      title: "Growth Rate",
      description: "Grows up to 2m per year, reaching full maturity in 15-20 years.",
    },
    {
      title: "Wood Quality",
      description: "Moderately dense, termite-resistant, and excellent for furniture.",
    },
    {
      title: "Growth Rate",
      description: "Grows up to 2m per year, reaching full maturity in 15-20 years.",
    },


  ];


  const main_heading = "Rain Tree (Samanea saman)"
  const shortinfo = "The Rain Tree is a fast-growing, shade-providing hardwood tree known for its ornamental appeal and commercial timber value. It is widely used in urban forestry, agroforestry, and timber plantations. "


  return (
    <>
      <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-black">{shortinfo}</p>
        </div>
      </section>
      <Iconslider
        card={cardData}
        heading={heading}
        custom_class={custom_class}
      />


    </>
  )
}



export const Requirements = () => {
  const custom_class = "white_grid grid_padding"
  const whyChooseData = [
    {
      image: why1,
      title: 'Climate ',
      description: 'Thrives in tropical and subtropical climates.',
    },
    {
      image: why2,
      title: 'Soil',
      description: 'Prefers loamy, well-drained soils but tolerates clay.',
    },
    {
      image: why3,
      title: 'Spacing ',
      description: '5m x 5m for timber production; wider spacing for shade plantations',
    },
    {
      image: why4,
      title: 'Irrigation ',
      description: 'Requires regular watering in dry seasons.',
    },
    {
      image: why5,
      title: 'Maintenance',
      description: ' Low maintenance; requires pruning to maintain form.',
    },
  ];
  return (
    <>
      <Gridbox heading="Plantation & Growth Requirements" data={whyChooseData} className={custom_class} />
    </>
  )
}



export const Uses = () => {
  const custom_class1 = "growth_white"
  const GrowthHeading = "Commercial Uses";
  const slides = [
    {

      image: image1,
      title: "Furniture & Carpentry – ",
      desc: "Used for making tables, chairs, and cabinets.",

    },
    {

      image: image2,
      title: "Construction Wood -",
      desc: "Employed in rural house building and fencing.",
    },
    {

      image: image3,
      title: "Livestock Fodder – ",
      desc: "Leaves and pods are rich in protein.",
    },

    {

      image: image4,
      title: "Shade & Landscaping –",
      desc: " Popular for parks, roadsides, and agroforestry",
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
