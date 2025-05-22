import React from 'react'
import { InvestLayout } from '../utilities/LookingInvestLayout';
import image1 from "../../../assets/images/sandalwood/bgimg.webp";
import bgimg from "../../../assets/images/sandalwood/image.webp";
import { Lookingbox } from '../Lookingbox';
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';

export const Invest = () => {
    const heading = "Why Invest in Sandalwood Cultivation?"
    const InvestHeading = "Why Invest in Mahogany Cultivation?";
    const CustomImage = image1
    const InvestplantSearon = [
      {
        img: bgimg,
        details: [
          "Premium Market Pricing – High-value essential oil and timber.",
          "Long-Term Investment – Yield improves over decades.",
          "Eco-Friendly Business – A sustainable and lucrative agroforestry model.",

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
  const heading = "Looking to Grow or Source Sandalwood?"
  const subheading="Contact Atulye Krishi Vana for:"
  const box = [
    {
      text: "Ethical and responsible timber sourcing."
    },
    {
      text: 'Premium-grade sandalwood saplings.'
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
  "Why is sandalwood considered valuable?";
const Faqdescription = `Sandalwood is highly valued for its aromatic heartwood, which is used in perfumes, essential oils, and traditional medicines. The wood contains high levels of santalol, which gives it a distinctive fragrance and therapeutic properties. Its slow growth and increasing demand make it one of the most expensive woods in the world. Additionally, it has cultural and religious significance in many traditions, further boosting its value. Due to overharvesting and strict regulations, sustainable plantation-based sandalwood cultivation is encouraged to ensure its availability for future generations while maintaining ecological balance and economic benefits for farmers.`;
const FaqsData = [
  {
    question: "How long does it take for a sandalwood tree to mature?",
    answer:
      "Sandalwood trees take about 15 to 20 years to fully mature and develop commercially valuable heartwood. The quality and yield of the heartwood improve with age, with older trees producing more aromatic oil. While the tree starts forming heartwood around 7 to 10 years, harvesting before maturity reduces oil content and commercial value. Due to its slow growth rate, careful plantation management and sustainable farming practices are essential to maximizing yield. Proper soil, climate, and host plant selection play a crucial role in accelerating growth and ensuring high-quality heartwood for the perfume and pharmaceutical industries.",
  },
  {
    question:
      "Why does sandalwood require host plants for growth?",
    answer:
      "Sandalwood is a semi-parasitic tree, meaning it relies on host plants to obtain essential nutrients. Its roots attach to nearby host plants and extract water and minerals, which help the tree grow efficiently. Suitable host plants include legumes like Pongamia, Casuarina, and Acacia, as they promote rapid growth and enhance soil fertility. The selection of host plants significantly impacts the health and yield of sandalwood trees. Without proper host plants, growth is stunted, and the tree struggles to develop quality heartwood. Regular monitoring and replacing weak hosts ensure a consistent nutrient supply throughout its growing cycle.",
  },
  {
    question: "What are the medicinal benefits of sandalwood?",
    answer:
      "Sandalwood has been used in traditional medicine for centuries due to its antiseptic, anti-inflammatory, and calming properties. Sandalwood oil is commonly used in aromatherapy to reduce stress, anxiety, and insomnia. It is also beneficial for skin care, treating acne, eczema, and rashes due to its cooling and soothing effects. In Ayurveda and traditional Chinese medicine, sandalwood is used to treat digestive issues, urinary infections, and fever. Additionally, it has been known to enhance mental clarity and meditation. Its natural compounds, particularly santalol, contribute to its healing properties, making it an important ingredient in herbal and cosmetic products.",
  },
  {
    question:
      "How is sandalwood oil extracted?",
    answer:
      "Sandalwood oil is extracted through steam distillation of the heartwood and roots. The process involves grinding the wood into fine powder and subjecting it to steam, which helps release the essential oil. This method ensures the highest purity and retention of sandalwood’s signature fragrance. The yield of oil depends on the age and quality of the tree, with mature trees producing a higher concentration of santalol. The distillation process is time-consuming but necessary to extract premium-grade oil. Due to its high demand and limited supply, pure sandalwood oil is expensive and often blended with other fragrances.",
  },
  {
    question: "What are the environmental benefits of growing sandalwood?",
    answer:
      "Sandalwood plantations contribute to environmental conservation by improving soil health, preventing erosion, and supporting biodiversity. As a semi-parasitic species, sandalwood relies on diverse host plants, which promotes afforestation and sustainable agroforestry. The tree also plays a role in carbon sequestration, helping mitigate climate change. Additionally, regulated sandalwood farming reduces pressure on natural forests and curbs illegal logging. Sustainable sandalwood cultivation supports rural livelihoods, offering long-term economic benefits for farmers. With proper management, these plantations can serve as eco-friendly and profitable alternatives to deforestation while ensuring the continued availability of this valuable species.      ",
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
