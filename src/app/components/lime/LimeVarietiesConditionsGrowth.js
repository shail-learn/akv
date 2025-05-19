import React from 'react'
import Image from "next/image";
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/lime/banner.webp";
import bgslider from "../../../assets/images/guava/plant-growing.webp";
import slider1 from "../../../assets/images/lime/image4.webp";
import slider2 from "../../../assets/images/lime/image1.webp";
import slider3 from "../../../assets/images/lime/image2.webp";
import slider4 from "../../../assets/images/lime/image3.webp";
import { Greenshalfslider, Greenslider, Singleslider } from '../Greenslider';

export const Lime = () => {
  const text = {
    banner: banner,
    heading: `Acid Lime  <br/> Fresh, Organic, and Sustainably Grown`,
    title: "Atulye Krishi Vana is dedicated to sustainable agriculture and modern farming techniques. Spanning 500 acres of greenfield agricultural projects in Madhya Pradesh, our organic lime plantations aim to set global benchmarks in productivity, technology, and sustainability.",
    opacity: "opacity-50"
  };
  return (
    <>
      <BannerPage
        heading={text.heading}
        title={text.title}
        opacity={text.opacity}
        banner={text.banner}
        classname={text.className}

      />

    </>
  )
}




export const Varieties = () => {
  const heading = "Varieties We Grow"
  const shortdescription = "Our plantation nurtures some of the best lime varieties, known for their rich aroma, vibrant color, and tangy flavor."
  const boxslider = [
    {
      heading: "PKM 1",
      description: 'A high-yielding variety with excellent disease resistance and uniform fruiting.',
    },
    {
      heading: "Local Varieties",
      description: 'Indigenous selections suited to the regional climate, offering a naturally rich taste.',
    },
    {
      heading: "VRM 1",
      description: 'Known for its adaptability and consistent fruit production.',
    },
    {
      heading: "PKM 1",
      description: 'A high-yielding variety with excellent disease resistance and uniform fruiting.',
    },
    {
      heading: "Local Varieties",
      description: 'Indigenous selections suited to the regional climate, offering a naturally rich taste.',
    },

  ]
  return (
    <>
      <Greenslider title={heading} subtitle={shortdescription} data={boxslider} />
    </>
  )
}


export const Conditions = () => {

  const bgimg = bgslider
  const boxslider = [
    {
      title: "Ideal Growing Conditions",
      info: "Lime cultivation requires well-drained loamy soil and thrives in both tropical and subtropical climates. Our plantations are located at an optimal altitude of up to 1000 meters above sea level, ensuring superior fruit quality.",
      image: slider1,
      heading: "Seasonal Planting",
      description: [
        "Best time for planting: December – February and June – September",
        "Spacing: 5 to 6 meters apart",
        "Pit dimensions: 75 cm x 75 cm x 75 cm",
      ],
    },
    {
      title: "Precision Irrigation & Water Management ",
      info: "Water plays a crucial role in lime production. Our drip irrigation systems optimize water usage, preventing stagnation and ensuring deep-root nourishment.",
      image: slider2,
      heading: " ",
      description: [
        "Frequent irrigation: Every 7–10 days",
        "Post-planting: Heavy irrigation for establishment",
        "Water conservation: Advanced rainwater harvesting techniques",

      ],
    },

    {
      title: "Organic Nutrition & Soil Enrichment",
      info: "We emphasize sustainable farming by using organic manure and balanced nutrient application. Our soil enrichment process ensures that every lime tree receives the essential nutrients for maximum yield.",
      image: slider3,
      heading: "Fertilizer and Manure Schedule",
      description: [
        "First Year: 10 kg FYM, 200 g N, 100 g P, 100 g K per plant",
        "Annual Increment: Gradual increase in nutrient supply",
        "From Sixth Year Onward: 30 kg FYM, 600 g N, 200 g P, 300 g K per plant",
      ],
    },
    {
      title: "Pruning and Aftercare",
      info: "Regular pruning helps in maintaining plant structure and increasing fruit yield.",
      image: slider4,
      heading: " ",
      description: [
        "Main stem maintenance: Lower branches (up to 45 cm) are pruned",
        "Organic mulching: Green leaves (30 kg per tree) applied every 3 months",
        "Weed control: Manual weeding and mulching techniques",

      ],
    },


  ];
  return (
    <>
      <Singleslider data={boxslider} background={bgimg} />
    </>
  )
}


export const Growth = () => {
  const heading1 = "Intercropping for Sustainable Growth"
  const text = `To maximize land productivity, legumes and vegetable crops are grown as intercrops during the pre-bearing stage. This enhances soil fertility and provides additional income for farmers.`

  const subheading =`Growth Regulators for Enhanced Yield We utilize plant growth regulators to boost fruit setting and retention. `

  const boxslider = [
    {
      title: "During flowering",
      description: '2,4-D @ 20 ppm',
    },
    {
      title: "After fruit set (marble size)",
      description: '2,4-D @ 20 ppm or NAA @ 30 ppm',
    },
    {
      title: "To reduce premature fruit drop",
      description: 'Application of NAA @ 20 ppm at fortnightly intervals',
    },
    {
      title: "During flowering",
      description: '2,4-D @ 20 ppm',
    },
    {
      title: "After fruit set (marble size)",
      description: '2,4-D @ 20 ppm or NAA @ 30 ppm',
    },

  ]
  return (
    <>
    <Greenshalfslider title={heading1} info={text} data={boxslider} subheading={subheading} />
    </>
  )
}
