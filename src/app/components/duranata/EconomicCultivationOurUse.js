"use client"
import React, { useEffect, useState } from 'react';
import bgstay from "../../../assets/images/stress/bg.webp";
import impact1 from "../../../assets/images/stress/Benefit1.webp";
import impact2 from "../../../assets/images/stress/Benefit2.jpg";
import impact3 from "../../../assets/images/stress/Benefit3.webp";
import impact4 from "../../../assets/images/stress/Benefit4.webp";
import { SliderBlur } from '../SliderBlur';
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/digestive/choose1.webp";
import choose2 from "../../../assets/images/digestive/choose2.webp";
import choose3 from "../../../assets/images/digestive/choose3.webp";
import choose4 from "../../../assets/images/digestive/choose4.webp";
import Titleslider from '../Titleslider';
import { FaqSlider } from '../FaqSlider';

export const Economic = () => {
  const heading = "Economic Potential"
  const desc = "Duranta is a cost-effective hedge option with wide applicability in both rural and urban landscaping. Its economic benefits include:  "


  const boxslider = [
    {
      image: impact1,
      heading: "Nursery Business",
      description: 'Easily propagated through cuttings, Duranta is an ideal candidate for local nurseries and SHGs. Saplings are in constant demand from landscapers and civic bodies.',
    },
    {
      image: impact2,
      heading: "Bulk Sales",
      description: 'Large orders from government schemes like Smart Cities, MGNREGA nurseries, or NHAI green corridors ensure steady income for commercial growers.',
    },
    {
      image: impact3,
      heading: "Intercropping Buffer",
      description: ' On farms, it doubles as a protective buffer for high-value horticultural crops and supports organic pest management through ecological balance.',
    },
    {
      image: impact4,
      heading: "Women-inclusive",
      description: "Many herbs are suitable for small-scale kitchen gardens and home-based drying units, supporting women' participation in agribusiness"
    },

  ]
  return (
    <>

      <section
        className="relative  pt-16 pb-16 lg:pt-20 lg:pb-20 mt-16" style={{ background: `url(${bgstay.src})center center / cover no-repeat` }}>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
        <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
          <div className='flex flex-wrap lg:flex-nowrap justify-between  gap-6 px-0 md:px-6 z-10 relative lg:px-2'>
            <div className='w-full lg:w-3/12 md:mt-10'>
              <div className='flex justify-between   flex-wrap'>
                <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                  {heading}
                </h2>
                <p className="text-sm md:text-[15px] text-center font-light md:text-left text-white ">{desc}</p>
              </div>
            </div>

            <div className='w-full lg:w-8/12'>
              <SliderBlur boxslider={boxslider} />


            </div>
          </div>

        </div>

      </section>

    </>
  )
}



export const Cultivation = () => {
  const heading = "Cultivation & Management Guide"
  const fruitData = [
    {
      title: "Propagation",
      image: choose1,
      flip: "Duranta is typically propagated via stem cuttings. Semi-woody cuttings 6–8 inches long are dipped in rooting hormone and planted in polythene bags or nursery trays. Rooting occurs within 3–4 weeks.      "
    },
    {
      title: "Spacing",
      image: choose2,
      flip: "For hedging purposes, saplings should be planted at a distance of 30–45 cm apart. In high-security zones or where a thicker hedge is needed, double rows can be planted in a zigzag pattern."
    },
    {
      title: "Planting Season",
      image: choose3,
      flip: "Best planted during the monsoon or early spring for optimal root establishment. Can also be planted year-round with assured irrigation."
    },
    {
      title: "Irrigation",
      image: choose4,
      flip: "Regular watering is needed during the first two months. Once rooted, the plant is drought-tolerant and can survive with occasional watering, depending on soil and climate."
    },
    {
      title: "Pruning",
      image: choose4,
      flip: "Initial tip pruning promotes bushier growth. Regular trimming maintains shape and height. Twice-a-year pruning is generally sufficient, although it may be done more often in manicured settings."
    },
    {
      title: "Pest & Disease Resistance",
      image: choose3,
      flip: "Duranta is generally pest-resistant. Minor issues like aphids or caterpillars may appear, which can be managed using neem oil or soap sprays. Fungal root rot can occur if overwatered."
    },


  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />

    </>
  )
}


export const Our = () => {
  const heading = "Our Services Include"

  const boxslider = [
    {
      heading: "Sapling Supply",
      description: "Ready-to-plant, disease-free cuttings and rooted saplings"
    },
    {
      heading: "Site Evaluation",
      description: "Soil testing, sunlight analysis, and plantation planning"

    },
    {
      heading: "Training Programs",
      description: "Pruning methods, organic maintenance, and pest control workshops"

    },
    {
      heading: "Nursery Setup",
      description: "For SHGs, schools, or entrepreneurs looking to produce Duranta commercially"

    },
    {
      heading: "Market Linkages",
      description: "Connect with municipal greening programs, real estate developers, and bulk buyers"

    },
    {
      heading: "Eco-Advisory",
      description: "Integration into biodiversity parks, erosion control planning, and water-efficient systems"

    },


  ]
  return (
    <>
      <Titleslider heading={heading} boxslider={boxslider} />

    </>
  )
}



export const Use = () => {
  const heading = "Use Cases Across Sectors";
    const className = "slider_height height_300";

    const card = [
      {
        title: "Public Institutions",
        description: "School compounds, hospitals, community centerst"
      },
      {
        title: "Agriculture",
        description: "Farm boundary fencing, protection from grazing animals"
      },
      {
        title: "Urban Landscaping",
        description: "Housing societies, roadside borders, traffic medians"
      },
      {
        title: "Hotels & Resorts",
        description: "Garden edging, natural privacy screens"

      },
      {
        title: "Eco-restoration",
        description: "Soil retention, pollinator gardens, degraded land rehab"

      },



    ];
    return (
      <>
        <FaqSlider
          classname={className}
          className="shailendra"
          card={card}
          heading={heading}
        />
      </>
    );
}
