"use client";
import React from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import BannerPage from "../BannerPage";
import banner from "../../../assets/images/CitrusFruits/CitrusBanner.webp";
import whychooose from "../../../assets/images/kulu/wavy.svg";
import Silvicultural1 from "../../../assets/images/mahagony/Silvicultural1.webp";
import { GrowthSlider } from "../utilities/Cultivationgrowthwhychoose";
import Starfruit from "../../../assets/images/CitrusFruits/starfruit.webp";
import Lemon from "../../../assets/images/CitrusFruits/Lemon.webp";
import Orang from "../../../assets/images/CitrusFruits/Orange.webp";
import Mosami from "../../../assets/images/CitrusFruits/Mosami.webp";
import Economical1 from "../../../assets/images/CitrusFruits/Economical1.webp";
import Economical2 from "../../../assets/images/CitrusFruits/Economical2.webp";
import Economical3 from "../../../assets/images/CitrusFruits/Economical3.webp";
import Economical4 from "../../../assets/images/CitrusFruits/Economical4.webp";
export const CitrusBanner = () => {
  const text = {
    banner: banner,
    heading: `Citrus Fruit-Bearing Trees`,
    subtitle: " A Profitable and Sustainable Choice for Agriculture",
    title:
      "At Atulye Krishi Vana, we focus on sustainable agroforestry, employing modern agricultural techniques and organic farming methods to maximize productivity. Our citrus plantations are designed to meet global standards in productivity and sustainability, ensuring long-term benefits for both the environment and local farming communities.",
    opacity: "opacity-50",
  };
  return (
    <>
      <BannerPage
        heading={text.heading}
        title={text.title}
        subtitle={text.subtitle}
        opacity={text.opacity}
        banner={text.banner}
        classname={text.className}
      />
    </>
  );
};
export const VarietiesCitrus = () => {
  const heading = "Varieties of Citrus Fruit Trees";
  const cardData = [
    {
      title: "Lemon (Citrus limon) ",
      Img: Lemon,
      description:
        "Lemon is a versatile citrus fruit valued for its high citric acid content, refreshing flavor, and medicinal properties.",
      pointors: [
        {
          title: "Uses",
          des: " Popular for making juices, syrups, and herbal remedies.",
        },
        {
          title: "Climate Suitability",
          des: " Prefers warm climates with well-drained soil.",
        },
        {
          title: "Economic Potential",
          des: " Offers high returns due to its consistent demand in juice markets and traditional medicine industries.",
        },
      ],
    },
    {
      title: "Orange (Citrus reticulata)",
      Img: Orang,
      description:
        "Oranges are one of the most popular citrus fruits worldwide, known for their sweet and tangy taste. This fruit is rich in Vitamin C and antioxidants, making it an essential component of a healthy diet.",
      pointors: [
        {
          title: "Uses",
          des: "Consumed fresh, juiced, or used in food products such as jams and marmalades. It also finds applications in pharmaceuticals and cosmetics.",
        },
        {
          title: "Climate Suitability",
          des: " Thrives in tropical and subtropical climates with moderate rainfall.",
        },
        {
          title: "Economic Potential",
          des: "Oranges have a high market demand both domestically and internationally, making them a lucrative crop for farmers.",
        },
      ],
    },
    {
      title: " Mosambi (Citrus sinensis)",
      Img: Mosami,
      description:
        "Mosambi, commonly known as sweet lime, is a milder citrus fruit with a unique sweetness and high water content. ",
      pointors: [
        {
          title: "Uses",
          des: "Popular for making juices, syrups, and herbal remedies.",
        },
        {
          title: "Climate Suitability",
          des: " Prefers warm climates with well-drained soil.",
        },
        {
          title: "Economic Potential",
          des: " Offers high returns due to its consistent demand in juice markets and traditional medicine industries.",
        },
      ],
    },
    {
      title: "Kamrak (Averrhoa carambola) – Starfruit",
      Img: Starfruit,
      description:
        "Kamrak, commonly known as starfruit, is an exotic citrus-related fruit with a distinctive star shape and a blend of sweet and tart flavors.",
      pointors: [
        {
          title: "Uses",
          des: "Consumed fresh, juiced, or incorporated into desserts and salads.",
        },
        {
          title: "Climate Suitability",
          des: "Grows best in humid tropical conditions.",
        },
        {
          title: "Economic Potential",
          des: " Considered a high-value crop in gourmet markets and health-conscious consumer segments.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="relative w-full md:-mt-28 z-10 devided-line">
        <Image
          src={whychooose}
          alt="Divider"
          width={1920}
          height={700}
          className="w-full object-cover h-full"
        />
      </div>

      <div className="relative z-20 bg-[#1b453c] text-white pb-20 -mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center pt-14 pb-10">
            {heading}
          </h2>

          <div className="w-full mx-auto relative whychose">
            <div className="mx-auto w-[95%]">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 30 },
                  640: { slidesPerView: 2, spaceBetween: 30 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
                className="mySwiper2 swiper_padd !p-4  light_active white_arrow"
              >
                {cardData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="bg-white text-black rounded-[20px] p-6 md:p-8 w-full h-full flex flex-col items-center text-center shadow-md"
                      style={{ boxShadow: "2px 2px 6px 0px #00000033" }}
                    >
                      {/* Title */}
                      <h3 className="text-md md:text-md font-bold mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[10px] md:text-[13px] font-normal text-black mb-4">
                        {item.description}
                      </p>

                      {/* Image */}
                      <div className="w-[150px] h-[120px] md:w-[150px] md:h-[150px] overflow-hidden mb-4">
                        <Image
                          src={item.Img}
                          alt={item.title}
                          className="object-contain w-full h-full"
                        />
                      </div>

                      {/* List of Pointors */}
                      <ul className="text-[12px] text-left list-disc list-inside space-y-2 text-black max-w-[280px] mx-auto">
                        {item.pointors.map((pointer, idx) => (
                          <li key={idx}>
                            <strong>{pointer.title}:</strong> {pointer.des}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="black-arrow">
                <button className="swiper-button-prev text-2xl !left-0 px-4 py-2"></button>
                <button className="swiper-button-next !right-0 px-4 py-2"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const AgromicSec = () => {
  const AgromicSecHeading = "Agronomic Practices for Citrus Cultivation";
  const speciesData = [
    {
      name: "Pest and Disease Control",
      description:
        "Common citrus pests include aphids, citrus leaf miners, and fruit flies. Preventive measures like neem oil application and pheromone traps help control infestations. Diseases like citrus canker and root rot require proper fungicidal treatments and hygienic practices.",
    },
    {
      name: "Climate Conditions",
      description:
        "Citrus trees require warm, sunny conditions with moderate rainfall. They thrive in regions with temperatures ranging between 13°C and 38°C. Extended frost periods can damage fruit-bearing trees, so protection measures like greenhouse cultivation or mulching may be necessary in cooler regions.",
    },
    {
      name: "Planting Techniques",
      description: `Spacing: Proper spacing ensures healthy root development and sufficient air circulation. Generally, citrus trees are spaced 5 to 6 meters apart.<br/>
      Depth: Trees should be planted at the same depth as in the nursery, ensuring the graft union is above the soil level to prevent fungal infections.`,
    },
    {
      name: "Irrigation Requirements",
      description:
        "Citrus trees need regular but controlled watering. Over-irrigation can cause root rot, while under-watering can lead to poor fruit development. Drip irrigation is the most efficient method to maintain optimal soil moisture.",
    },
    {
      name: "Fertilization and Nutrient Management",
      description:
        "Balanced fertilization is essential for healthy tree growth and fruit production. Key nutrients include nitrogen, phosphorus, and potassium (NPK), along with micronutrients like zinc and magnesium. Organic compost or farmyard manure enhances soil fertility.",
    },
    {
      name: "Pest and Disease Control",
      description:
        "Common citrus pests include aphids, citrus leaf miners, and fruit flies. Preventive measures like neem oil application and pheromone traps help control infestations. Diseases like citrus canker and root rot require proper fungicidal treatments and hygienic practices.",
    },
  ];

  // Group items into pairs for SwiperSlide (2 per slide)
  const groupedData = [];
  for (let i = 0; i < speciesData.length; i += 2) {
    groupedData.push(speciesData.slice(i, i + 2));
  }

  return (
    <div className="relative z-20 bg-[#1b453c] text-white  py-10 px-4 md:px-20 GrowthNavigation">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl redhat md:text-3xl font-semibold text-center mb-10">
          {AgromicSecHeading}
        </h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          loop
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          {groupedData.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-2 gap-10 px-10">
                {group.map((item, idx) => (
                  <div
                    key={idx}
                    className={`pl-6 ${
                      idx === 1 ? "md:border-l border-white md:pl-10" : ""
                    }`}
                  >
                    <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                    <div
                      className="text-md"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export const EconomicalSec = () => {
  const EconomicalSecHeading =
    " Economic and Environmental Benefits of Citrus Cultivation";
  //   const GrowthDescription =
  //     "Mahogany has excellent growth traits that make it ideal for commercial plantations.";
  const slides = [
    {
      group: "High Market Demand and Profitability",
      image: Economical1,
      desc: "Citrus fruits have a strong market presence globally. They are in high demand for their nutritional and medicinal value. The citrus industry supports multiple revenue streams, including fresh fruit sales, processed juice production, and essential oil extraction.",
    },
    {
      group: "Agroforestry and Sustainable Farming",
      image: Economical2,

      desc: "soil quality and supporting biodiversity. Their deep root systems help prevent soil erosion, making them an ideal choice for sustainable farming.",
    },
    {
      group: "Employment and Rural Development",
      image: Economical3,
      desc: "Large-scale citrus cultivation creates job opportunities for local farmers, laborers, and agricultural technicians. It supports rural economies through direct employment and allied industries such as transportation and food processing",
    },
    {
      group: " Environmental Benefits",
      image: Economical4,
      title: "Drought Tolerance",
      desc: "Citrus trees play a vital role in carbon sequestration by absorbing carbon dioxide and releasing oxygen. They contribute to improving air quality and enhancing the ecological balance of agricultural landscapes.",
    },
  ];
  return (
    <>
      <GrowthSlider
        GrowthHeading={EconomicalSecHeading}
        // GrowthDescription={GrowthDescription}
        slides={slides}
      />
    </>
  );
};
