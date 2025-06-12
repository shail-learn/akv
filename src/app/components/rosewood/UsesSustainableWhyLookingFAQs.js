import React from 'react'
import { UseSecLayout } from '../utilities/UsesStanadarLayout';
import { FaqSlider } from '../FaqSlider';
import image1 from "../../../assets/images/rosewood/bgimg.webp";
import bgimg from "../../../assets/images/rosewood/image.webp";
import { InvestLayout } from '../utilities/LookingInvestLayout';
import { Lookingbox } from '../Lookingbox';
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';

export const Uses = () => {
  const usesApplicationsData = {
    heading: "Uses & Applications",
    columns: [
      {
        subheading: "Premium Furniture & Home Décor",
        points: [
          "Used in high-end furniture, cabinets, and paneling.",
          "Its rich grain and deep color make it ideal for luxury interiors.",
        ],
      },
      {
        subheading: "Musical Instruments",
        points: [
          "Valued in guitar, violin, and piano manufacturing due to its rich sound properties.",
          "Its density and texture enhance acoustic resonance.",
        ],
      },
      {
        subheading: "Carvings & Handicrafts",
        points: [
          "Intricate art pieces, sculptures, and decorative designs.",
          "Used in luxury home décor and artifacts.",
        ],
      },
      {
        subheading: "Agricultural Implements & Traditional Uses",
        points: [
          "Used for cart wheels, gun carriages, and agricultural tools.",
          "Strong, durable wood that withstands heavy usage.",
        ],
      },


    ],
  };
  return (
    <>
      <UseSecLayout usesApplicationsData={usesApplicationsData} />

    </>
  );
}



export const Sustainable = () => {
  const heading = "Sustainable Rosewood Cultivation  Atulye Krishi Vana"
    const title1 =
    "Atulye Krishi Vana promotes sustainable rosewood plantations through:";
    const className="center_faq slider_height"
    const card = [
        {
            title: 'Scientific Farming Techniques',
            description: 'High-yield saplings and efficient cultivation methods.',

        },
        {
            title: 'Eco-Friendly Forestry',
            description: 'Reducing deforestation and illegal trade.',

        },
        {
            title: 'Farmer Support & Training',
            description: 'Helping farmers grow rosewood for long-term income generation.',
        },
        {
          title: 'Eco-Friendly Forestry',
          description: 'Reducing deforestation and illegal trade.',

      },

    ]

    return (
        <>

       <FaqSlider card={card} heading={heading} title1={title1} classname={className} />

        </>
    )
}


export const Why = () => {
  const heading = "Why Invest in Rosewood Cultivation?"
  const InvestHeading = "Why Invest in Mahogany Cultivation?";
  const CustomImage = image1
  const InvestplantSearon = [
    {
      img: bgimg,
      details: [
        "High Market Value – Premium pricing due to increasing demand.",
        "Long-Term Investment – Valuable yield over decades.",
        " Eco-Friendly Business – A sustainable and profitable timber species.",

      ],
    },
  ];
  return (
    <>
      <InvestLayout
        InvestHeading={InvestHeading}
        plantSearon={InvestplantSearon}
        bgimg={CustomImage}
        heading={heading}
      />

    </>
  );
}


export const Looking = () => {
  const heading = "Looking to Grow or Source Rosewood?"
  const subheading="Contact Atulye Krishi Vana for:"
  const box = [
    {
      text: "Ethical and responsible timber sourcing."
    },
    {
      text: 'Premium-grade rosewood saplings.'
    },
    {
      text: 'Expert guidance on sustainable forestry.'
    },

  ]

  return (
    <>
     <Lookingbox heading={heading} box={box} subheading={subheading}  />

    </>
  )
}



export const FAQs = () => {
  const Faqheading =
  "How long does it take for Rosewood to mature?";
const Faqdescription = `Rosewood is a slow-growing hardwood species and typically takes 60 to 80 years to reach full maturity for timber harvesting. However, depending on the climate, soil quality, and maintenance, some plantation-grown trees can be harvested in 30-40 years for medium-quality wood. Due to its slow growth and high-density wood, Rosewood is valued for its durability, strength, and premium grain pattern. While it requires patience, the long-term economic return is high, making it a valuable investment for forestry businesses and individual growers. Proper management, pruning, and soil maintenance can help maximize growth rates.`;
const FaqsData = [

  {
    question:
      "What are the ideal climate and soil conditions for growing Rosewood?",
    answer:
      "Rosewood thrives in tropical and subtropical climates, requiring a temperature range of 0°C to 50°C and annual rainfall between 750mm to 5000mm. It can grow in a variety of soils but performs best in deep, well-drained loamy soil. While young saplings need adequate shade and moisture, mature trees require full sunlight for optimal growth. The species is drought-sensitive in the early years but becomes more resilient over time. Good drainage, organic matter, and occasional mulching help ensure healthy growth, making it suitable for commercial plantation projects in India, Southeast Asia, and similar regions.  ",
  },
  {
    question: "Is Rosewood cultivation profitable?",
    answer:
      "Yes, Rosewood cultivation is highly profitable due to the premium market price of its timber. The wood is in high demand for luxury furniture, musical instruments, and handicrafts, with prices ranging from ₹8,000 to ₹25,000 per cubic foot, depending on quality. Although it takes decades to mature, it offers long-term financial returns. Sustainable plantation farming ensures consistent yield and environmental conservation. Farmers and investors looking for high-value, long-term forestry investments often choose Rosewood due to its export potential, durability, and demand in the international market.",
  },
  {
    question:
      "How is Rosewood used in furniture and other industries?",
    answer:
      "Rosewood is prized for its rich dark brown color, fine grain, and strength, making it a top choice for luxury furniture, flooring, cabinetry, and decorative panels. It is also widely used in musical instruments like guitars, violins, and pianos due to its excellent acoustic properties. Other applications include carvings, sculptures, gun stocks, and premium wooden artifacts. The high density and resistance to termites and decay make it a durable and long-lasting material. Due to these qualities, export demand is high in markets like Europe, the USA, and China.",
  },
  {
    question: "What are the biggest challenges in growing Rosewood?  ",
    answer:
      "The biggest challenges in growing Rosewood include slow growth rates, high initial investment, and long maturation periods. Pest attacks, fire vulnerability, and illegal logging threats also pose risks. In early growth stages, the tree is susceptible to drought and frost, requiring careful watering and protection. Additionally, due to high demand, Rosewood is a CITES-listed species, meaning its trade and harvesting are regulated to prevent over-exploitation. Farmers need to ensure legal compliance and obtain necessary permits before harvesting and selling Rosewood. However, with proper planning and sustainable forestry practices, these challenges can be effectively managed.",
  },
  {
    question: "Can Rosewood be grown in home gardens or small farms?",
    answer:
      "Yes, Rosewood can be grown in home gardens and small farms, but it requires space and long-term care. As a large, slow-growing tree, it can reach 20-25 meters in height, making it unsuitable for very small spaces. However, if you have a large backyard or farmland, planting Rosewood can be a valuable long-term asset. Ensure proper spacing (at least 2m x 2m per tree) for healthy growth. While it won’t provide immediate returns, it can be a future financial investment for timber or as a shade tree in agroforestry systems. ",
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
