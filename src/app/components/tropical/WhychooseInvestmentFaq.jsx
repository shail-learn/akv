"use client";

import { FaqSlider } from "../FaqSlider";
import { FaqsLayout } from "../utilities/Cultivationgrowthwhychoose";
import PlantationBg from "../../../assets/images/tropical/PlantationBg.webp";
export const TropicalInvestment = () => {
  const heading = "Investment & Commercial Prospects";
  const className = "slider_height";
  const title1 =
    "Investing in tropical fruit plantations offers multiple revenue streams through fresh fruit sales, processed products, and byproducts like oils, juices, and fiber. With a rising demand for organic and exotic fruits, commercial growers can capitalize on premium pricing in domestic and export markets.";
  const title2 = "";

  const card = [
    {
      title: "Government subsidies and incentives for agroforestry ventures.",
    },
    {
      title: "High demand in retail, hospitality, and health food industries.",
    },
    {
      title: "Continuous yield cycle with steady income generation.",
    },
  ];
  return (
    <>
      <FaqSlider
        classname={className}
        title1={title1}
        title2={title2}
        className="shailendra"
        card={card}
        heading={heading}
      />
    </>
  );
};
export const StartPlantation = () => {
  const heading =
    "Start Your Tropical Fruit Plantation with Atulye Krishi Vana";
  const description =
    "At Atulye Krishi Vana, we provide expert guidance on selecting, cultivating, and marketing tropical fruit trees. Our sustainable farming approach ensures long-term profitability while preserving the environment.";

  const subdes =
    "Get in touch today to learn more about our tropical fruit plantations and investment opportunities!";

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full"
      style={{ backgroundImage: `url(${PlantationBg.src})` }}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex  px-4 md:px-20 max-w-5xl">
        <div className="max-w-7xl text-white text-left pl-3 md:pl-[4rem] mt-2">
          <h2 className="md:w-1/2 w-full text-3xl md:text-4xl leading-snug font-bold mb-8 redhat">
            {heading}
          </h2>
          <p
            className="mb-4 text-sm md:text-base md:w-[50%] w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>

          <p className="text-sm md:text-base md:w-2/3 w-full mt-10 font-bold">
            {subdes}
          </p>
        </div>
      </div>
    </section>
  );
};
export const FaqTropical = () => {
  const Faqheading =
    "What are the benefits of growing tropical fruits in agroforestry?";
  const Faqdescription = `Agroforestry with tropical fruits enhances biodiversity, improves soil health, and offers farmers a steady income. The deep-rooted trees help retain moisture, prevent soil erosion, and create a microclimate conducive to growth. Unlike monoculture farming, agroforestry ensures resilience against pests and climate fluctuations. Additionally, fruit-bearing trees provide shade, benefiting companion crops. These systems also enhance carbon sequestration, contributing to climate change mitigation. Atulye integrates modern farming techniques with agroforestry, ensuring maximum productivity. By choosing sustainable cultivation methods, Atulye promotes responsible farming while delivering high-quality tropical fruits for commercial markets and local consumption.
`;
  const FaqsData = [
    {
      question:
        "How does Atulye ensure the highest quality in tropical fruit production?",
      answer:
        "Atulye follows a stringent quality control process from planting to post-harvest handling. We use premium saplings, carefully selected soil amendments, and precision irrigation to optimize tree health and fruit yield. Regular monitoring ensures proper pest and disease management using organic and sustainable solutions. The fruits undergo sorting, grading, and packaging under hygienic conditions. Atulye also employs modern storage and logistics systems to maintain freshness and quality during transportation. By integrating scientific advancements with traditional wisdom, we consistently deliver premium-quality tropical fruits that meet domestic and international market standards.",
    },
    {
      question: "How does climate impact the yield of tropical fruits?",
      answer:
        "Tropical fruits thrive in warm, humid climates with consistent rainfall. However, extreme temperature fluctuations, droughts, or excessive rainfall can impact fruit yield. Prolonged dry spells may reduce flowering and fruit formation, while excessive humidity can increase susceptibility to fungal diseases. Windstorms and cyclones pose risks to trees, especially young saplings. Atulye mitigates these challenges by implementing protective measures like windbreaks, rainwater harvesting, and climate-resilient farming techniques. We also use micro-irrigation systems to provide optimal hydration and ensure steady production. Our sustainable approach ensures a stable yield despite climate variability.",
    },
    {
      question:
        "What are the challenges of growing tropical fruits, and how does Atulye overcome them?",
      answer:
        "Growing tropical fruits presents challenges such as pest infestations, soil nutrient depletion, and fluctuating weather conditions. Additionally, some fruit species require specific pollinators for optimal yield. Atulye addresses these issues through integrated pest management (IPM), organic fertilizers, and advanced soil health monitoring. We also introduce beneficial pollinators where necessary and implement pruning techniques to promote healthy tree development. Regular scientific assessments help us refine our cultivation strategies. Our commitment to sustainable practices ensures that we overcome these challenges while maintaining high productivity and environmental responsibility.",
    },
    {
      question: "How does soil quality affect tropical fruit production?",
      answer:
        "Soil quality is crucial for tropical fruit production, influencing root development, nutrient absorption, and overall tree health. Well-drained, loamy soil rich in organic matter supports optimal growth. Poor soil structure can lead to waterlogging or nutrient deficiencies, impacting fruit yield and quality. Atulye conducts soil tests before plantation and amends the soil with organic compost, green manure, and natural minerals to optimize fertility. We also use mulching techniques to retain moisture and enhance microbial activity. By maintaining balanced soil health, we ensure vigorous tree growth and abundant, high-quality fruit production.",
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
};
