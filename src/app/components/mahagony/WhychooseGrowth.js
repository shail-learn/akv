"use client";
import React from "react";
import { GrowthSlider } from "../utilities/Cultivationgrowthwhychoose";
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

export const Growth = () => {
  const GrowthHeading = " Cultivation & Growth Characteristics";
  const GrowthDescription =
    "TMahogany has excellent growth traits that make it ideal for commercial plantations.";
  const slides = [
    {
      group: "Silvicultural Characteristics",
      image: Silvicultural1,
      title: "Rapid Growth Rate",
      desc: "Reaches A Height Of 6-8 Meters In 5 Years",
    },
    {
      group: "Silvicultural Characteristics",
      image: Silvicultural2,
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
      image: Silvicultural4,
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
      image: Nursery3,
      title: "Germination Process",
      desc: " Seeds germinate within 3-4 weeks under optimal conditions",
    },
    {
      group: "Nursery Practices",
      image: Nursery4,
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
      group: " Ideal Spacing",
      image: Planting2,
      title: "Pit Size",
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
