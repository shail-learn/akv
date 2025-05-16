"use client";
import React from "react";
import { FaqsLayout } from "../utilities/Cultivationgrowthwhychoose";
import PartnerBg from "../../../assets/images/IndigenosFruits/PartnerSection.webp";
import Image from "next/image";
export const MarketPotentialSection = () => {
  const heading = "Market Potential & Value Addition";
  const description =
    "Indigenous fruits offer high commercial value in both fresh and processed markets. From health-conscious urban consumers to Ayurvedic wellness brands, the demand is rising. Atulye also explores value addition through dehydration, pulp extraction, and jam production, extending shelf life and improving profitability.";
  return (
    <section className="bg-white py-16 px-4 md:px-20 text-center text-[#1B453C]">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 redhat">
        {heading}
      </h2>
      <div className="bg-[#1B453C] text-white rounded-xl py-6 px-6 md:px-10 max-w-6xl mx-auto text-sm md:text-base">
        <p className="p-7">{description}</p>
      </div>
    </section>
  );
};

export const PartnerSection = () => {
  const heading = "Partner with Atulye Krishi Vana";
  const description =
    " Whether you're an agro-entrepreneur, processor, or conscious consumer, partnering with Atulye means embracing authenticity, quality, and sustainability. Our indigenous fruits offer long-term returns, ecological benefits, and social impact.";
  const subheading = "Connect With Us Today";
  const subdes =
    " Ready to take a step toward sustainable, indigenous fruit farming? Contact our team to learn more, schedule a visit, or explore  investment opportunities.";

  return (
    <section className="relative h-[500px] md:h-[600px] w-full">
      <Image
        src={PartnerBg}
        alt="Forest"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex  px-4 md:px-20 max-w-4xl">
        <div className="max-w-6xl text-white text-left pl-3 md:pl-[4rem] mt-5">
          <h2 className="md:w-1/2 w-full text-2xl md:text-[2.5rem] leading-snug font-bold mb-4 redhat py-6">
            {heading}
          </h2>
          <p className="mb-4 text-sm md:text-base md:w-2/3 w-full">
            {description}
          </p>
          <h3 className="font-bold text-xl text-white mb-2 md:w-2/3 w-full">
            {subheading}
          </h3>
          <p className="text-sm md:text-base md:w-2/3 w-full">{subdes}</p>
        </div>
      </div>
    </section>
  );
};

export const IndigeniousFaqs = () => {
  const Faqheading =
    "What are the benefits of growing tropical fruits in agroforestry?";
  const Faqdescription = `Agroforestry with tropical fruits enhances biodiversity, improves soil health, and offers farmers a steady income. The deep-rooted trees help retain moisture, prevent soil erosion, and create a microclimate conducive to growth. Unlike monoculture farming, agroforestry ensures resilience against pests and climate fluctuations. Additionally, fruit-bearing trees provide shade, benefiting companion crops. These systems also enhance carbon sequestration, contributing to climate change mitigation`;
  const FaqsData = [
    {
      question: " Are indigenous fruit trees resistant to pests and diseases?",
      answer:
        "Yes, most indigenous fruit trees have evolved over centuries to naturally resist local pests and diseases. For example, tamarind and karonda are known for their strong pest resistance, requiring minimal intervention. This makes them a more sustainable choice for farmers, as it reduces the dependency on chemical pesticides. Their resilience also lowers maintenance costs and results in healthier yields. However, like any crop, they can occasionally be affected by environmental stressors, so proper care, such as pruning and soil management, still plays a role in optimizing tree health and productivity over the years.",
    },
    {
      question:
        "Can these fruits be processed or value-added for commercial use?",
      answer:
        " Absolutely. Indigenous fruits lend themselves exceptionally well to value addition. Jamun can be made into vinegar and seed powder; tamarind is used in sauces, concentrates, and candies; guava is processed into jams and juices; ber and ramfal can be dried or turned into preserves. Value-added products increase the shelf life, provide additional income to farmers, and cater to urban and export markets. There’s also a rising interest in traditional and Ayurvedic fruit-based products, which boosts commercial demand. Small-scale processing units near plantations can empower local communities while improving economic returns.",
    },
    {
      question:
        " How do indigenous fruits contribute to biodiversity conservation?",
      answer:
        " Planting indigenous fruit trees helps conserve biodiversity by protecting native plant species, preserving genetic resources, and supporting local ecosystems. These trees provide food and shelter to native birds, bees, and other pollinators, helping maintain ecological balance. Unlike exotic monocultures that can deplete soil nutrients and water, indigenous trees are better suited to the local climate and enrich the soil over time. They also play a role in preserving heirloom varieties, many of which are becoming rare. By encouraging cultivation and consumption of these fruits, we support agro-biodiversity and safeguard our natural heritage.",
    },
    {
      question:
        "What is the cultural importance of indigenous fruits in India?",
      answer:
        " Indigenous fruits are deeply woven into Indian traditions, festivals, and culinary practices. For instance, bel is considered sacred and is used in religious rituals, especially in Shiva worship. Tamarind is central to South Indian cuisine and festive preparations. Jamun trees often line old temple compounds and public parks, symbolizing heritage and community spaces. Guava and custard apple are beloved in local snacks and schoolyard memories. These fruits don’t just offer nourishment—they carry stories, seasonal nostalgia, and regional identity, making them a vital part of India’s cultural and agricultural legacy.",
    },
    {
      question:
        " Are Indian fruit trees suitable for organic farming practices?",
      answer:
        "Yes, indigenous fruit trees are ideal for organic cultivation. Their adaptation to local soil and climate conditions minimizes the need for synthetic inputs. Trees like guava, jamun, and ber require limited external support and can thrive with natural compost, mulching, and organic pest control methods. Their deep-root systems help maintain soil structure and water retention, making them highly suitable for low-impact, sustainable farming. Integrating them into organic practices supports healthy soil microbiomes and fosters a circular ecosystem, especially in agroforestry models where fruit trees are grown alongside herbs, pulses, or vegetables.",
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
