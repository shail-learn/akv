import React from 'react'
import { InvestLayout } from '../utilities/LookingInvestLayout';
import image1 from "../../../assets/images/red/bgimg.webp";
import bgimg from "../../../assets/images/red/image.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import { Lookingbox } from '../Lookingbox';


export const Why = () => {
  const heading = "Why Invest in Red Sandalwood Cultivation?"
  const InvestHeading = "Why Invest in Mahogany Cultivation?";
  const CustomImage = image1
  const InvestplantSearon = [
    {
      img: bgimg,
      details: [
        "High-Value Timber Crop – Long-term wealth creation.",
        "Eco-Friendly & Sustainable – Supports afforestation and carbon sequestration.",
        "Diverse Revenue Streams – Timber, herbal products, and agroforestry benefits.",
        "Global Demand Growth – Rising need for sustainable and premium wood.",
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
  const heading = "Looking to Grow or Source Red Sandalwood?"
  const subheading="Contact Atulye Krishi Vana for:"
  const box = [
    {
      text: "Women and Youth Environment."
    },
    {
      text: 'Improved groundwater table from 500 feet to 350 feet.'
    },
    {
      text: 'Reduce soil temperature by 5 °C.'
    },

  ]

  return (
    <>
     <Lookingbox heading={heading} box={box} subheading={subheading}  />

    </>
  )
}


export const Faqs = () => {
  const Faqheading =
    "What is the ideal climate for growing Red Sandalwood?";
  const Faqdescription = `Red Sandalwood thrives in tropical and subtropical climates with moderate rainfall and warm temperatures. It prefers temperatures between 15°C and 40°C and annual rainfall of 800 mm to 1500 mm. It can withstand drought conditions once established but requires adequate watering in the initial years. The tree grows well in regions with well-defined dry and wet seasons. Avoid areas prone to extreme frost, as young saplings are sensitive to cold. With proper care and management, Red Sandalwood adapts well to semi-arid regions, making it a viable option for many farmers.`;
  const FaqsData = [

    {
      question:
        "What type of soil is best for Red Sandalwood cultivation?",
      answer:
        "Red Sandalwood prefers well-drained, red loamy, lateritic, or sandy soils with good aeration. The ideal soil pH ranges from 6.5 to 7.5 (neutral to slightly acidic). Deep, fertile soils with good organic content support healthy root growth and faster development. While the tree can tolerate marginal soils, waterlogging should be avoided, as excessive moisture can cause root rot. Farmers should prepare the land by plowing deeply and adding organic compost to enhance fertility before planting saplings. Proper soil management ensures higher growth rates and better wood quality.",
    },
    {
      question: "How long does Red Sandalwood take to mature?",
      answer:
        "Red Sandalwood is a slow-growing tree that takes around 20-25 years to reach full maturity for timber harvesting. However, thinning and selective harvesting can begin as early as 12-15 years, depending on growth conditions. Proper irrigation, soil care, and pest management help accelerate its development. Farmers practicing silvicultural techniques like pruning and intercropping can optimize yield. Although it requires patience, the long-term benefits of Red Sandalwood cultivation are significant due to its high-value timber and sustainability in agroforestry systems.",
    },
    {
      question:
        "How should I irrigate Red Sandalwood plants?",
      answer:
        "Red Sandalwood requires moderate irrigation, particularly in the initial 2-3 years after planting. Drip irrigation or deep watering twice a week helps young saplings establish strong roots. Once matured, the tree becomes highly drought-resistant and needs little additional watering. During dry seasons, farmers should ensure periodic watering, especially in sandy soils that drain quickly. Mulching around the base helps retain moisture and prevent weed growth. Overwatering should be avoided, as waterlogging can harm root development and make trees prone to fungal infections.",
    },
    {
      question: "What pests and diseases affect Red Sandalwood trees?",
      answer:
        "Red Sandalwood is resistant to most major pests and diseases, but certain threats like stem borers, leaf miners, and fungal infections can affect growth. Termites can also attack young plants if proper soil treatment is not done. Regular inspection and organic pest control methods, such as neem-based sprays and biological predators, help prevent infestations. Proper spacing, well-drained soil, and occasional pruning reduce the risk of fungal diseases. Farmers should also avoid excess nitrogen fertilizers, which may promote weak growth susceptible to pest attacks.",
    },
    {
      question: "What are the best propagation methods for Red Sandalwood?",
      answer:
        "Red Sandalwood is propagated through seeds, tissue culture, and grafting. Seed propagation is the most common method but has slower growth. Pre-soaking seeds in water for 24-48 hours enhances germination rates. Tissue culture and vegetative propagation offer faster and more uniform growth. Farmers should source high-quality, disease-free saplings from certified nurseries to ensure optimal yields. Nursery-raised saplings should be hardened before transplantation to improve survival rates in the field. Choosing the right propagation technique significantly impacts tree growth and wood quality. ",
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
