"use client";
import React from "react";
import {
  FaqsLayout,
  GrowthSlider,
} from "../utilities/Cultivationgrowthwhychoose";
import Silvicultural1 from "../../../assets/images/mahagony/Silvicultural1.webp";
import Silvicultural2 from "../../../assets/images/mahagony/Silvicultural2.webp";
import Silvicultural3 from "../../../assets/images/mahagony/Silvicultural3.webp";
import Silvicultural4 from "../../../assets/images/mahagony/Silvicultural4.webp";
import Silvicultural5 from "../../../assets/images/mahagony/Silvicultural5.webp";
import Nursery1 from "../../../assets/images/mahagony/Nursery1.webp";
import Nursery2 from "../../../assets/images/mahagony/Nursery2.webp";
import Nursery3 from "../../../assets/images/mahagony/Nursery3.webp";
import Nursery4 from "../../../assets/images/mahagony/Nursery4.webp";
import Nursery5 from "../../../assets/images/mahagony/Nursery5.webp";
import Planting1 from "../../../assets/images/mahagony/Planting1.webp";
import Planting2 from "../../../assets/images/mahagony/Planting2.webp";
import Planting3 from "../../../assets/images/mahagony/Planting3.webp";
import { WhyChooseLayout } from "../utilities/LookingInvestLayout";

export const Growth = () => {
  const GrowthHeading = " Cultivation & Growth Characteristics";
  const GrowthDescription =
    "Mahogany has excellent growth traits that make it ideal for commercial plantations.";
  const slides = [
    {
      group: "Silvicultural Characteristics",
      image: Silvicultural1,
      title: "Rapid Growth Rate",
      desc: "Reaches A Height Of 6-8 Meters In 5 Years",
    },
    {
      group: "Silvicultural Characteristics",
      image: Silvicultural4,
      title: "Moderate Water Requirement",
      desc: " Needs regular irrigation in early years",
    },
    {
      group: "Silvicultural Characteristics",
      image: Silvicultural3,
      title: " Pest & Disease Resistance",
      desc: "Generally resistant to major pests and diseases",
    },
    {
      group: "Silvicultural Characteristics",
      image: Silvicultural2,
      title: "Drought Tolerance",
      desc: " Can endure dry periods once established",
    },
    {
      group: "Silvicultural Characteristics",
      image: Silvicultural5,
      title: "Longevity",
      desc: "Stays productive for over 40 years with proper management",
    },
    {
      group: "Nursery Practices",
      image: Nursery1,
      title: "Efficient nursery techniques ",
      desc: " ensure robust Mahogany saplings for plantation",
    },
    {
      group: "Nursery Practices",
      image: Nursery2,
      title: " Seed Propagation",
      desc: " Propagated via seeds and tissue culture",
    },
    {
      group: "Nursery Practices",
      image: Nursery4,
      title: "Germination Process",
      desc: " Seeds germinate within 3-4 weeks under optimal conditions",
    },
    {
      group: "Nursery Practices",
      image: Nursery3,
      title: "Shading & Watering",
      desc: "Requires partial shade and frequent watering during early growth",
    },
    {
      group: "Nursery Practices",
      image: Nursery5,
      title: "Transplantation",
      desc: "Ideal for field planting once saplings reach 40-60 cm in height",
    },
    {
      group: "Planting & Spacing",
      image: Planting1,
      title: "Pit Size",
      desc: "60 cm x 60 cm x 60 cm for strong root establishment",
    },
    {
      group: "Planting & Spacing",
      image: Planting2,
      title: "Ideal Spacing",
      desc: " 4m x 4m for optimal timber yield",
    },
    {
      group: "Planting & Spacing",
      image: Planting3,
      title: " Intercropping Compatibility",
      desc: "Compatible with spices, medicinal plants, and pulses Adhering to these best practices ensures high-quality timber and faster growth.",
    },
  ];
  return (
    <>
      <GrowthSlider
        GrowthHeading={GrowthHeading}
        GrowthDescription={GrowthDescription}
        slides={slides}
      />
    </>
  );
};
export const Faqs = () => {
  const Faqheading =
    "Can Mahogany trees survive in dry or drought-prone areas?";
  const Faqdescription = `Yes, Mahogany trees are moderately drought-tolerant once established. While they require regular watering during the first few years, they can survive dry conditions due to their deep root system. However, prolonged drought may slow growth and reduce timber quality. In arid regions, mulching around the base helps retain soil moisture, and drip irrigation can be used to ensure consistent growth. Planting Mahogany near water sources, such as farm ponds or canals, further enhances its resilience. While it can tolerate dry spells, optimal growth occurs in areas with an annual rainfall of 1000-2000 mm.`;
  const FaqsData = [
    {
      question: "What is the best time to plant Mahogany saplings?",
      answer:
        "The ideal planting season for Mahogany is before the onset of monsoon or in the early rainy season (June to August). This allows young saplings to establish strong roots with natural rainfall support. If irrigation facilities are available, planting can also be done in the post-monsoon period (September to November).",
    },
    {
      question:
        "How does Mahogany compare to Teak in terms of timber quality and market demand?",
      answer:
        "Mahogany and Teak are both premium hardwoods, but Mahogany has a faster growth rate, maturing in 12-15 years, whereas Teak takes 20-25 years. Mahogany timber is less oily than Teak, making it easier to polish and stain, which is preferred in luxury furniture and wood paneling. Though Teak has superior durability, Mahogany is more affordable and in high demand for indoor furniture, musical instruments, and decorative woodwork. Additionally, Mahogany plantations require lower maintenance and investment, making it a profitable alternative for farmers looking for high-value timber crops.",
    },
    {
      question: " Does Mahogany grow well in high-altitude regions?",
      answer:
        "Mahogany grows best at altitudes below 1000 meters above sea level. It thrives in tropical and subtropical regions with warm temperatures and humidity. In high-altitude regions with cold winters, Mahogany may experience slower growth and a higher risk of frost damage. If planting in hilly areas, selecting south-facing slopes ensures better sun exposure and warmth. Some farmers in mid-altitude zones successfully grow Mahogany in terraced farms to improve soil retention and drainage. However, frost-prone areas are not ideal for commercial-scale Mahogany plantations.",
    },
    {
      question:
        "How does pruning affect Mahogany tree growth and timber quality?",
      answer:
        "Pruning is essential for Mahogany plantations to promote straight trunk formation and uniform wood grain, which enhances timber value. Early pruning, starting after the first year, removes unwanted side branches and encourages upward growth. This should be done annually until the trees reach 5-7 meters in height. Overcrowded branches should be thinned to improve air circulation and sunlight penetration. However, excessive pruning can stress the tree and slow growth. Farmers should use sharp tools and prune only during the dormant season (post-monsoon or early winter) to minimize sap loss and fungal infections.",
    },
    {
      question: "What are the common challenges faced in Mahogany cultivation?",
      answer:
        "One challenge is initial slow growth, as Mahogany takes 2-3 years to establish before rapid development begins. Young saplings are vulnerable to livestock grazing, so fencing is necessary. In humid regions, Mahogany may face fungal infections like powdery mildew, which require preventive spraying with neem oil or organic fungicides. Weed competition can affect early growth, so periodic removal is needed. In regions with strong winds, Mahogany trees may develop weak branch attachments, making them susceptible to breakage. Proper staking in the early years helps ensure straight growth and wind resistance.",
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
export const WhyChooseSec = () => {
  const whychooseHeading = " Why Choose Mahogany?";
  const GrowthHeading = "Growth Conditions of Mahogany";
  const cardData = [
    {
      title: " Medicinal Properties",
      description: "Used in traditional medicine for various health benefits.",
    },
    {
      title: " Premium-Quality Timber",
      description: "Highly valued for furniture, veneer, and construction.",
    },
    {
      title: " Fast Growth",
      description: "Matures within 10-15 years, providing substantial yields.",
    },
    {
      title: "Medicinal Properties",
      description: " Used in traditional medicine for various health benefits.",
    },
    {
      title: "High Economic Returns",
      description:
        "Profitable due to its valuable timber and diverse applications.",
    },
  ];
  const leftTitle = "Climate Requirements";
  const leftContent = [
    "Mahogany is highly adaptable and thrives in tropical and subtropical climates.",
    "Maximum Temperature: 45°C",
    "Minimum Temperature: 10°C",
    "Annual Rainfall Requirement: 1000 mm – 2500 mm",
    "Mahogany prefers regions with well-distributed rainfall but can also tolerate dry conditions once established.",
  ];

  const rightTitle = "Soil Preferences";
  const rightContent = [
    "Mahogany grows well in various soil types but thrives best in deep, well-drained soils.",
    "Best Suited Soil: Loamy, alluvial, and lateritic soils",
    "Soil Depth: Deep soils encourage strong root development",
    "Soil Drainage: Well-drained soil is essential to prevent water logging",
    "PH Range: 5.5 – 7.5 (slightly acidic to neutral)",
    "Due to its adaptability, Mahogany is ideal for agroforestry systems.",
  ];
  return (
    <>
      <WhyChooseLayout
        card={cardData}
        heading={whychooseHeading}
        GrowthHeading={GrowthHeading}
        leftTitle={leftTitle}
        rightTitle={rightTitle}
        leftContent={leftContent}
        rightContent={rightContent}
      />
    </>
  );
};
