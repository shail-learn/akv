"use client"
import React from 'react'
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/digestive/choose1.webp";
import choose2 from "../../../assets/images/digestive/choose2.webp";
import choose3 from "../../../assets/images/digestive/choose3.webp";
import choose4 from "../../../assets/images/digestive/choose4.webp";
import Titleslider from '../Titleslider';
import { SliderBlur } from '../SliderBlur';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";
// import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import impact1 from "../../../assets/images/stress/Benefit1.webp";
import bgstay from "../../../assets/images/stress/bg.webp";
import { FaqSlider } from '../FaqSlider';
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';


export const Why = () => {
  const heading = "Why Cultivate Flowering & Ornamental Plants with Atulye Krishi Vana?"
  const fruitData = [
    {
      title: "Enhances Landscape Value",
      image: choose1,
      flip: "These plants beautify public spaces, farms, schools, and urban settlements. Well-maintained landscapes increase property value and public engagement."
    },
    {
      title: "Ecological Benefits",
      image: choose2,
      flip: "Flowering trees and shrubs promote pollination, support wildlife, reduce dust and pollution, and regulate temperature in built environments."
    },
    {
      title: "Low Input, High Output",
      image: choose3,
      flip: "Many ornamental plants require minimal maintenance post-establishment, offering continuous returns through flower harvesting or sapling sales."
    },
    {
      title: "Employment Generation",
      image: choose4,
      flip: "Nurseries, floriculture units, bouquet businesses, and landscaping services provide job opportunities in both rural and peri-urban areas."
    },
    {
      title: "Cultural & Therapeutic Relevance",
      image: choose4,
      flip: "These plants are deeply woven into Indian rituals, festivals, and wellness traditions, offering emotional and cultural value alongside ecological function.      "
    },


  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />

    </>
  )
}



export const Services = () => {
  const heading = "Our Services Include"

  const boxslider = [
    {
      heading: "High-Quality Sapling Supply",
      description: "Certified and disease-free planting material for large and small-scale projects."
    },
    {
      heading: "Soil Testing & Plantation Planning",
      description: "Customized site evaluations and spacing recommendations."

    },
    {
      heading: "Training Modules",
      description: "Workshops on pruning, grafting, organic care, pest control, and flower harvesting."

    },
    {
      heading: "Nursery Development Assistance",
      description: "For FPOs and individuals looking to start their own ornamental plant nurseries."

    },
    {
      heading: "Market Access",
      description: "Linkages with florists, landscapers, religious institutions, exporters, and bulk buyers."

    },
    {
      heading: "Sustainability Support",
      description: "Advice on water-efficient systems, biofertilizers, and eco-friendly pest management."

    },


  ]
  return (
    <>
      <Titleslider heading={heading} boxslider={boxslider} />

    </>
  )
}



export const Cases = () => {
  const heading = "Use Cases Across Sectors"
  const class2 = "blurheight1"

  const boxslider = [
    {
      image: impact1,
      heading: "Urban Greening & Smart Cities",
      description: 'Tree plantation drives, parks, traffic islands, and green corridors.',
    },
    {
      image: impact1,
      heading: "Hospitality & Resorts",
      description: 'Enhancing ambiance through curated ornamental plant landscapes.',
    },
    {
      image: impact1,
      heading: "Religious Sites",
      description: 'Regular requirement of fresh flowers for offerings and decoration.',
    },
    {
      image: impact1,
      heading: "Event Decor & Floristry",
      description: "Roses and ornamental cut flowers for weddings, ceremonies, and gifting."
    },
    {
      image: impact1,
      heading: "Government Schemes",
      description: "Participation in National Mission on Horticulture, MGNREGA nursery schemes, and biodiversity parks."
    },

  ]
  return (
    <>

      <section
        className="relative mt-10 pt-16 pb-16 lg:pt-20 lg:pb-20" style={{ background: `url(${bgstay.src})center center / cover no-repeat` }}>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
        <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
          <div className='flex flex-wrap lg:flex-nowrap justify-between  gap-6 px-0 md:px-6 z-10 relative lg:px-2'>
            <div className='w-full lg:w-3/12 md:mt-10'>
              <div className='flex justify-between   flex-wrap'>
                <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                  {heading}
                </h2>
              </div>
            </div>

            <div className='w-full lg:w-8/12'>
              <SliderBlur boxslider={boxslider} class2={class2} />

            </div>
          </div>

        </div>

      </section>

    </>
  )
}



export const Climate = () => {
  const heading = "Sustainability & Climate Impact";
  const className = "slider_height height_300";

  const card = [
    {
      title: "Carbon Sequestration",
      description: "Trees like Gulmohar and Amaltas absorb CO₂ and release oxygen, helping combat urban heat islands."
    },
    {
      title: "Rainwater Harvesting",
      description: "Proper plantation improves infiltration and reduces surface runoff."
    },
    {
      title: "Pollinator Corridors",
      description: "Flowering species act as magnets for bees, butterflies, and birds—critical for biodiversity."
    },
    {
      title: "Soil Regeneration",
      description: "Nitrogen-fixing species like Gulmohar restore degraded soils and prevent erosion."

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



export const Grow = () => {
  const heading = "Grow Beauty, Balance, and Biodiversity";
  const description =
    "Atulye Krishi Vana invites communities, institutions, farmers, and planners to embrace flowering and ornamental plants not only for their visual charm but for their ecological, cultural, and economic contributions. These plants restore harmony between people and nature—turning every field, roadside, and courtyard into a sanctuary of color and life. <br/> Whether you aim to run a nursery, start a commercial rose farm, or green your township with Gulmohar avenues, we are here to partner with you. <br/><br/> <b>Connect with Atulye Krishi Vana today.  Beautify the land. Enrich the air.Celebrate nature. </b>";

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full my-8 md:my-12 !mt-0"
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >

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


export const FAQs = () => {
  const Faqheading =
    "What are the most profitable flowering plants to grow commercially?";
  const Faqdescription = `Marigold, rose, jasmine, gerbera, and tuberose are among the most profitable flowering plants for Indian farmers. These plants have steady demand in the floral market, temples, events, and garland-making industries. They grow well in different climates and can be cultivated year-round with proper irrigation. Choose varieties with high yield, disease resistance, and long vase life. Market access, post-harvest handling, and transport are equally important. Intercropping with vegetables or herbs can increase profitability. Profit margins vary by region and scale, but with good planning, flower cultivation can offer significantly higher returns than many staple crops.`;
  const FaqsData = [
    {
      question: "How much land and investment is required to start flower farming?",
      answer:
        "Starting flower farming requires at least half to one acre of land for meaningful income. Investment depends on the crop: open field farming costs less, but polyhouse farming for crops like gerbera or rose may cost ₹8–12 lakhs per 1000 sq. m. Expenses include land preparation, seedlings, irrigation, fertilizers, labor, and post-harvest handling. You can start small with marigold or jasmine in open fields using drip irrigation and natural inputs. Gradual expansion based on market response is ideal. ",
    },
    {
      question:
        "What climate is best for growing ornamental and flowering plants?",
      answer:
        "Flowering plants vary in their climate needs. For example, marigold, zinnia, and sunflower thrive in warm temperatures, while petunia, pansy, and dianthus prefer cooler weather. Roses and jasmine grow in tropical to subtropical climates. High humidity may lead to fungal diseases, so good air circulation is important. Most plants require 5–6 hours of sunlight daily. Polyhouse cultivation allows farmers to grow climate-sensitive flowers year-round. Before planting, it’s essential to match the flower variety to local conditions. Knowing temperature tolerance, rainfall needs, and light preference helps ensure better flowering and yield.",
    },
    {
      question: "How often should flowering plants be watered?",
      answer:
        "Flowering plants need regular watering but not waterlogging. Overwatering can cause root rot and reduce flowering. Most flowering plants require watering once every 2–3 days during dry months and less frequently during rainy seasons. In summer, early morning or evening watering is best to reduce evaporation. Drip irrigation is ideal for ornamental plants as it delivers water directly to the roots while saving water and labor. Soil type, plant age, and weather should guide your watering schedule. Always allow the topsoil to dry slightly before the next watering to maintain healthy growth and blooming.",
    },
    {
      question: "How can farmers protect ornamental plants from pests and diseases?",
      answer:
        "Common pests include aphids, mealybugs, whiteflies, and thrips, while fungal diseases like powdery mildew and rust can affect blooms. Regular field inspections and good air circulation help prevent infestations. Neem oil, garlic-chili sprays, and bio-insecticides are effective organic options. Crop rotation and removing infected plant parts reduce the risk of disease spread. Avoid overwatering and overcrowding. Select disease-resistant varieties and use certified seeds or saplings. Integrated Pest Management (IPM) combines cultural, biological, and chemical methods to reduce reliance on pesticides, ensuring safe, sustainable cultivation. Farmers should consult agri-experts for region-specific treatments and dosage.",
    },

  ];

  return (
    <>
      <FaqsLayout
        heading={Faqheading}
        description={Faqdescription}
        faqs={FaqsData}
      />



    </>
  );
}
