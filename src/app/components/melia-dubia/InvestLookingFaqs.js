import React from 'react'
import PartnerBg from "../../../assets/images/teak/contact.webp";
import { Lookingbox } from '../Lookingbox';
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';

export const Invest = () => {
  const heading = "Why Invest in Melia Dubia Cultivation?";

  const points = [
    {
      item: "Rapid Timber Production – Harvest within 6-8 years, unlike traditional hardwoods. "
    },
    {
      item: "High Market Demand – Consistently sought after in plywood and paper industries. "
    },
    {
      item: "Eco-Friendly & Renewable – Contributes to sustainable forestry. "
    },
    {
      item: "Multiple Revenue Streams – Generates income from timber, biomass, and intercropping. "
    },
    {
      item: "Low Investment, High Returns – Minimal maintenance with significant profit potential."
    },
  ]

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-24 bg-cover w-full"
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex  px-4 md:px-20 max-w-5xl">
        <div className="max-w-7xl text-white text-left pl-3 md:pl-[4rem] mt-5">
          <h2 className="md:w-10/12 w-full text-3xl md:text-4xl leading-snug font-bold mb-6 md:mb-12 redhat">
            {heading}
          </h2>

          <ul className='ps-4 list-disc space-y-2'>
            {points.map((item, index) => (
              <li key={index} className="text-sm md:text-base md:w-2/3 w-full">{item.item}</li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}



export const Looking = () => {
  const heading = "Looking to Grow or Source Melia Dubia?"
  const subheading = "Contact Atulye Krishi Vana for:"
  const box = [
    {
      text: "Expert guidance on sustainable agroforestry"
    },
    {
      text: 'Premium-quality Melia Dubia saplings'
    },
    {
      text: 'Ethical and responsible timber sourcing.'
    },

  ]

  return (
    <>
      <Lookingbox heading={heading} box={box} subheading={subheading} />

    </>
  )
}


export const Faqs = () => {
  const Faqheading =
    "What makes Melia Dubia different from other fast-growing timber trees?";
  const Faqdescription = `Melia Dubia stands out due to its rapid growth rate, superior wood quality, and resistance to pests. Unlike eucalyptus and poplar, it matures in just 6-8 years while providing high-density wood suitable for plywood, furniture, and biomass. Additionally, it requires minimal maintenance and adapts well to different climatic conditions. Its ability to regenerate from coppicing makes it a cost-effective option for farmers and agroforestry projects`;
  const FaqsData = [
    {
      question: "Is Melia Dubia suitable for agroforestry and intercropping?",
      answer:
        "Yes, Melia Dubia is highly suitable for agroforestry and intercropping due to its deep root system and fast growth. It does not compete aggressively for nutrients, allowing crops like turmeric, ginger, pulses, and medicinal plants to grow alongside it. Additionally, it provides partial shade, which benefits shade-loving crops. Farmers can maximize land productivity by combining Melia Dubia with agricultural crops, ensuring a continuous income stream while waiting for the timber harvest. Its ability to fix nitrogen and improve soil quality makes it an eco-friendly choice for sustainable farming systems.",
    },
    {
      question:
        "How does Melia Dubia contribute to carbon sequestration and climate change mitigation?",
      answer:
        "Melia Dubia is an excellent carbon sink, absorbing high levels of carbon dioxide due to its fast growth and dense foliage. A single mature tree can sequester significant amounts of carbon annually, reducing greenhouse gas emissions. Large-scale plantations help combat deforestation, restore degraded lands, and promote biodiversity. Additionally, its sustainable harvesting cycle ensures that timber production does not contribute to carbon emissions, making it a preferred choice for eco-conscious industries. The tree’s role in producing renewable biomass for energy further supports climate-friendly initiatives, replacing fossil fuels with sustainable alternatives.",
    },
    {
      question: "What are the challenges in growing Melia Dubia commercially?",
      answer:
        "While Melia Dubia is relatively easy to cultivate, a few challenges include ensuring proper irrigation in arid regions, preventing overcrowding for optimal growth, and selecting high-quality saplings for maximum yield. Poor soil drainage can lead to root rot, and while the tree is resistant to pests, occasional infestations may require monitoring. Additionally, market fluctuations in timber pricing can impact profitability. However, with proper planning, scientific planting techniques, and market linkage strategies, these challenges can be minimized, making it a profitable agroforestry venture.",
    },
    {
      question: "How does Melia Dubia compare to teak in terms of wood quality and profitability?",
      answer:
        "Melia Dubia and teak serve different markets. While teak is known for its extreme durability and high oil content, it requires 20-25 years to mature, making it a long-term investment. Melia Dubia, on the other hand, matures in just 6-8 years and provides lightweight, durable wood with a smooth grain, ideal for plywood and furniture industries. Its fast harvest cycle offers quicker returns, making it a lucrative choice for commercial plantations. Although teak commands a higher price per cubic foot, Melia Dubia provides higher overall profitability due to its rapid turnover.",
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

