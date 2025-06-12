import React from 'react'
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/fast/choose1.webp";
import choose2 from "../../../assets/images/fast/choose2.webp";
import choose3 from "../../../assets/images/fast/choose3.webp";
import choose4 from "../../../assets/images/fast/choose4.webp";
import choose5 from "../../../assets/images/fast/choose5.webp";
import choose6 from "../../../assets/images/fast/choose6.webp";
import PartnerBg from "../../../assets/images/fast/bgimg.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';

export const Why = () => {
  const heading = "Why Choose Atulye Krishi Vana for Timber Tree Plantations?"
  const fruitData = [
      {
          title: "High-Yield Timber Varieties",
          image: choose1,
          flip:"Carefully selected fast-growing species."
      },
      {
          title: "Scientific Agroforestry Practices",
          image: choose2,
          flip:"Advanced spacing, pruning, and soil management techniques."

      },
      {
          title: "Sustainable Land Use",
          image: choose3,
          flip:" Improving biodiversity while maximizing commercial output."

      },
      {
          title: "Market-Ready Wood",
          image: choose4,
          flip:" Timber cultivated with premium quality standards."

      },
      {
          title: "Support for Farmers & Investors",
          image: choose5,
          flip:" End-to-end guidance on plantation setup and management."

      },


  ];
  return (
      <>
          <Productlist heading={heading} fruitData={fruitData} />

      </>
  )
}



export const Start = () => {
  const heading = "Start Your Timber Plantation Today!";
  const description =
      "Whether you are an investor, landowner, or agroforestry enthusiast, Atulye Krishi Vana can help you establish a profitable and sustainable timber plantation.";


  return (
      <section
          className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full my-8 md:my-12"
          style={{ backgroundImage: `url(${PartnerBg.src})` }}
      >
          {/* Content */}
          <div className="relative z-10 h-full flex mx-auto px-4 md:px-20 max-w-5xl">
              <div className="max-w-7xl text-white text-center pl-3 md:pl-[4rem] mt-5">
                  <h2 className="  w-full text-3xl md:text-4xl leading-snug font-bold mb-10 md:mb-20 redhat">
                      {heading}
                  </h2>
                  <p
                      className="mb-4 text-sm md:text-base   w-full"
                      dangerouslySetInnerHTML={{ __html: description }}
                  ></p>


              </div>
          </div>
      </section>
  );
}


export const FAQs = () => {
  const Faqheading =
  "How do fast-growing timber trees compare to slow-growing hardwoods in terms of wood quality?";
const Faqdescription = `Fast-growing timber trees provide commercially viable wood in a shorter time, but their density and durability are often lower than slow-growing hardwoods like teak or mahogany. However, species like Eucalyptus and Rain Tree are widely used in furniture, construction, and plywood due to their workability, lightweight nature, and moderate durability. Modern treatment methods, including seasoning and pressure treatments, enhance their longevity and strength, making them suitable alternatives to slow-growing species.`;
const FaqsData = [
  {
    question: "What is the best season to plant fast-growing timber trees?",
    answer:
      "The ideal planting time depends on the climate, but most fast-growing timber trees thrive when planted at the beginning of the monsoon season (June–July) in tropical regions. This ensures sufficient moisture for root establishment. In areas with distinct winter seasons, planting during early spring (February–March) is preferable. Proper timing reduces transplant shock, maximizes survival rates, and ensures strong early growth. Farmers should also prepare the soil in advance by incorporating organic matter and essential nutrients.",
  },
  {
    question:
      "Are fast-growing timber plantations environmentally sustainable?",
    answer:
      "Yes, when managed properly, fast-growing timber plantations support reforestation efforts, improve carbon sequestration, and prevent soil erosion. These trees absorb large amounts of CO₂, contributing to climate change mitigation. Additionally, integrating sustainable forestry practices—such as selective harvesting, crop rotation, and soil restoration techniques—ensures long-term environmental benefits. Many fast-growing species, like Rain Tree and Gamhar, also enrich the soil with nitrogen, supporting biodiversity and agroforestry systems.",
  },
  {
    question: "What pests and diseases commonly affect fast-growing timber trees?",
    answer:
      "Fast-growing timber species may face challenges from borer insects, termites, fungal infections, and leaf spot diseases. For example, Eucalyptus is susceptible to gall wasp infestations and fungal root rot, while Gamhar may be affected by stem borers. Effective pest control includes biological treatments, such as introducing natural predators, and using neem-based organic pesticides. Proper spacing, regular pruning, and ensuring adequate soil drainage further reduce disease risks and enhance tree health.",
  },
  {
    question: "What kind of market demand exists for fast-growing timber?",
    answer:
      "Fast-growing timber has strong demand across multiple industries, including construction, furniture, paper, biomass energy, and plywood manufacturing. The rising cost of slow-growing hardwoods has increased reliance on fast-growing species. Additionally, industries like renewable energy use Eucalyptus for biomass fuel, and plywood manufacturers prefer Gamhar for veneer production. The increasing emphasis on sustainable wood sourcing has also boosted demand for responsibly managed plantation timber.",
  },
  {
      question: "Can fast-growing timber trees be integrated into agroforestry systems?",
      answer:
        "Yes, fast-growing timber species are well-suited for agroforestry, where they are planted alongside crops or livestock. Species like Rain Tree improve soil fertility by fixing nitrogen, while Gamhar and Eucalyptus provide shade and wind protection for cash crops. This approach enhances land productivity, diversifies farmer income, and improves soil health. Timber trees also act as carbon sinks, reducing the overall environmental footprint of agricultural activities.",
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
