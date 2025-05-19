"use client";

import { FaqSlider } from "../FaqSlider";
import { FaqsLayout } from "../utilities/Cultivationgrowthwhychoose";
import InvestmentBg from "../../../assets/images/CitrusFruits/InvestmentBg.webp";
import Image from "next/image";
export const WhyChooseSec = () => {
  const heading = "Why Choose Atulye Krishi Vana for Citrus Farming?";
  const className = "slider_height";
  const title1 =
    "At Atulye Krishi Vana, we specialize in high-quality, sustainable citrus plantations using advanced agroforestry techniques. Our expertise ensures optimal tree growth, high yields, and maximum profitability for investors and farmers. ";
  const title2 = "";

  const card = [
    {
      title:
        "Support for farmers with training, consultation, and market linkages.",
    },
    {
      title:
        "Use of organic farming practices for chemical-free fruit production.",
    },
    {
      title:
        "Deployment of precision agriculture techniques to optimize yield.",
    },
    {
      title:
        "Adoption of climate-resilient farming methods to ensure sustainable output.",
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
export const InvestmentSec = () => {
  const heading = "A Smart Investment in Citrus Farming!";
  const description =
    "Citrus fruit-bearing trees offer significant benefits, from high profitability and diverse applications to environmental sustainability. Investing in citrus farming through Atulye Krishi Vana ensures access to expert guidance, modern technology, and long-term economic returns. Whether you are a farmer, an investor, or an agribusiness entrepreneur, citrus cultivation presents an opportunity to tap into one of the most lucrative agricultural sectors.";

  const subdes = "Get Started with Citrus Farming Today!";

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full"
      style={{ backgroundImage: `url(${InvestmentBg.src})` }}
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
export const FaqCitrus = () => {
  const Faqheading = "How do citrus trees benefit soil health?";
  const Faqdescription = `Citrus trees enhance soil health by contributing organic matter through leaf litter and root decay. Their roots help prevent soil erosion by stabilizing the ground. When intercropped with nitrogen-fixing plants like legumes, citrus trees improve soil fertility naturally. Mulching with citrus leaves and organic compost boosts microbial activity, enriching soil nutrients. Citrus orchards also promote better water retention, reducing the need for frequent irrigation.`;
  const FaqsData = [
    {
      question: " What is the best method for propagating citrus trees?",
      answer:
        "Citrus trees are propagated through seeds, cuttings, budding, and grafting. While growing from seeds is possible, it often results in genetic variations and delayed fruiting. Grafting is the most preferred method, ensuring uniform fruit quality and faster yields. Budding, a type of grafting, involves attaching a bud from a mature citrus tree onto a disease-resistant rootstock. This technique enhances disease resistance and adaptability to different soil conditions. Cuttings can also be rooted but require controlled humidity and nutrients. Commercial growers rely on grafting and budding to maintain high-quality citrus production with predictable fruit characteristics and faster maturation.",
    },
    {
      question: "How do citrus trees adapt to different climates?",
      answer:
        "Citrus trees are highly adaptable but thrive best in warm, subtropical, and tropical climates. Some varieties, like mandarins and lemons, tolerate mild frost, while others, like limes, require consistently warm conditions. In colder regions, citrus trees can be grown in greenhouses or containers for climate control. Windbreaks protect trees from strong winds, which can damage branches and flowers. Drip irrigation helps manage water stress in arid climates. Shade netting prevents sunburn in excessively hot regions. By selecting suitable varieties and implementing climate-smart farming techniques, citrus growers successfully cultivate trees in diverse environmental conditions worldwide.",
    },
    {
      question: "What are the most common diseases affecting citrus trees?",
      answer:
        "Citrus trees are vulnerable to diseases like citrus greening (HLB), citrus canker, root rot, and powdery mildew. Citrus greening, caused by bacteria spread by psyllids, results in misshapen, bitter fruits and tree decline. Citrus canker creates lesions on leaves and fruit, reducing market value. Root rot, caused by fungal infections, thrives in poorly drained soils and leads to tree dieback. Powdery mildew appears as white fungal growth on leaves. Preventive measures include using resistant varieties, maintaining proper drainage, applying organic fungicides, and practicing good sanitation. Early detection and integrated disease management help maintain tree health and productivity.",
    },
    {
      question: "What is the economic significance of citrus farming?",
      answer:
        "Citrus farming is a major contributor to the global agricultural economy, providing income to millions of farmers. Oranges, lemons, and limes are among the most traded fruits, with significant demand in fresh and processed forms. Citrus-based industries, including juice production, essential oils, and cosmetics, drive economic growth. Citrus export markets create job opportunities in farming, packaging, logistics, and retail. Countries like Brazil, the U.S., India, and Spain dominate global citrus production. Small-scale farmers benefit from citrus as a cash crop due to its consistent market demand. Sustainable farming practices further enhance profitability while ensuring long-term citrus supply.",
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
