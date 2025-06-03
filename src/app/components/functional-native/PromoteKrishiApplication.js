import React from 'react'
import { Productlist } from '../Productlist';
import why1 from "../../../assets/images/functional/why1.webp";
import why2 from "../../../assets/images/functional/why2.webp";
import why3 from "../../../assets/images/functional/why3.webp";
import why4 from "../../../assets/images/functional/why4.webp";
import why5 from "../../../assets/images/functional/why5.webp";
import { FaqSlider } from '../FaqSlider';
import Titleslider from '../Titleslider';


export const Promote = () => {
  const heading = "Why Palms & Cycads with Atulye Krishi Vana?"
  const fruitData = [
    {
      title: "Cultural Continuity and Identity",
      image: why1,
      flip: "These palms preserve regional traditions and spiritual practices, linking modern landscapes to heritage values."
    },
    {
      title: "Climate Resilience",
      image: why2,
      flip: "Native and adapted palms are water-wise, heat-tolerant, and long-lived—ideal for climate-smart farming and greening."
    },
    {
      title: "Multi-Purpose Utility",
      image: why3,
      flip: "From food to fiber, these palms offer diverse outputs. They support livelihoods through leaf crafts, fruit sales, and tourism appeal."
    },
    {
      title: "Ecosystem Restoration",
      image: why4,
      flip: "Large palms like Talipot create shade, support biodiversity, and anchor ecological networks in degraded or fragmented zones."
    },

    {
      title: "Sustainable Landscaping",
      image: why5,
      flip: "They require minimal chemical inputs, are pest-resistant, and need less maintenance once established, reducing landscape costs."
    },


  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />

    </>
  )
}



export const Krishi = () => {
  const heading = "Atulye Krishi Vana’s Support Ecosystem";
  const title= "We help communities, farmers, municipalities, and temple trusts integrate functional palms into their land plans, combining ecology with economy. "
  const className = "slider_height height_300";

  const card = [
    {
      title: "Region-Specific Saplings",
      description: "Healthy plants suited for local soil and climate."
    },
    {
      title: "Training Modules",
      description: "Workshops on propagation, plantation, fruit harvesting, and craft processing."
    },
    {
      title: "Design Support",
      description: "Landscape and plantation layout for public, religious, and arid spaces."
    },
    {
      title: "Nursery Assistance",
      description: "For SHGs and eco-entrepreneurs to grow Talipot and Date Palms."
    },
    {
      title: "Market Access",
      description: "Connections to buyers of dates, leaf handicrafts, and palm nursery stock."
    },
    {
      title: "Ecological Planning",
      description: "Guidance for integrating palms into biodiversity, agroforestry, or green corridor programs."
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



export const Application = () => {
  const heading = "Applications Across Sectors"

  const boxslider = [
    {
      heading: "Agroforestry",
      description: "Date palms with pulses, oilseeds, or dryland vegetables"
    },
    {
      heading: "Temples & Monasteries",
      description: "Sacred groves and ceremonial palm rows"

    },
    {
      heading: "Heritage Parks",
      description: "Palms for cultural ambiance and native tree diversity"

    },
    {
      heading: "Desert Greening Projects",
      description: "Windbreaks, food production, and shade providers"

    },
    {
      heading: "Craft & Cottage Industries",
      description: "Talipot leaf use in artisanal umbrellas, mats, and souvenirs"

    },


  ]
  return (
    <>
      <Titleslider heading={heading} boxslider={boxslider} />

    </>
  )
}
