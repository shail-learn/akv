"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BannerPage from "../BannerPage";
import banner from "../../../assets/images/tropical/TropicalBanner.webp";
import { Wave } from "../Wave";
import DryFruitImage from "../../../assets/images/dry-fruits/waveImg.webp";
import Image from "next/image";
import Choose1 from "../../../assets/images/dry-fruits/Choose1.webp";
import Choose2 from "../../../assets/images/dry-fruits/Choose2.webp";
import Choose3 from "../../../assets/images/dry-fruits/Choose3.webp";
import Choose4 from "../../../assets/images/dry-fruits/Choose4.webp";
import Choose5 from "../../../assets/images/dry-fruits/Choose5.webp";
import { Gridbox } from "../Gridbox";
import { GrowthSlider } from "../utilities/Cultivationgrowthwhychoose";
import Cultivation1 from "../../../assets/images/dry-fruits/Cultivation1.webp";
import Cultivation2 from "../../../assets/images/dry-fruits/Cultivation2.webp";
import Cultivation3 from "../../../assets/images/dry-fruits/Cultivation3.webp";
import Cultivation4 from "../../../assets/images/dry-fruits/Cultivation4.webp";
import Cultivation5 from "../../../assets/images/dry-fruits/Cultivation5.webp";
export const BannerDryFruits = () => {
  const text = {
    banner: banner,
    heading: `Dry Fruits`,
    subtitle: "The Nutrient-Rich Cash Crops for Indian Farmers",
    title:
      "Dry fruits like almonds, cashews, walnuts, and pistachios are high-value crops known for their rich nutritional profile, long shelf life, and high market demand. Cultivating dry fruits is gaining momentum in India as farmers shift towards sustainable, profitable, and export-friendly agricultural practices.",
    opacity: "opacity-50",
  };
  return (
    <>
      <BannerPage
        heading={text.heading}
        subtitle={text.subtitle}
        title={text.title}
        banner={text.banner}
        opacity={text.opacity}
      />
    </>
  );
};
export const DryFruitsSec = () => {
  const Data = {
    note: `These crops not only offer high returns but also support soil health and long-term land productivity.
Dry fruit trees are suitable for diverse agro-climatic zones and require relatively low maintenance after establishment. With growing awareness around healthy eating, the demand for organic and naturally grown dry fruits continues to rise in domestic and international markets.

`,
    image: DryFruitImage,
  };
  return (
    <>
      <Wave />
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#1B453C]">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col-reverse justify-between lg:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <p
                className="mt-0 md:mt-4 text-white"
                dangerouslySetInnerHTML={{ __html: Data.note }}
              ></p>
            </div>

            <div className="w-full md:w-[40%]">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={Data.image}
                  alt="Basket of fruits and vegetables"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const WhyChooseDryFruits = () => {
  const gridBox = "xl:!grid-cols-5";

  const WhychooseData = [
    {
      image: Choose1,
      title: "High-Value Cash Crop ",
      description: " Premium pricing in local and export markets",
    },
    {
      image: Choose2,
      title: " Long Shelf Life  ",
      description: "Easy to store, transport, and sell over time",
    },
    {
      image: Choose3,
      title: "Health Benefits ",
      description: " Rich in proteins, vitamins, minerals, and healthy fats",
    },
    {
      image: Choose4,
      title: "Sustainable Farming ",
      description: "Low-input and environment-friendly cultivation",
    },
    {
      image: Choose5,
      title: "Export Potential ",
      description: "High demand from the Middle East, Europe, and the US",
    },
  ];
  return (
    <>
      <Gridbox
        heading="Why Choose Dry Fruits Cultivation?"
        data={WhychooseData}
        gridBox={gridBox}
      />
    </>
  );
};
export const SuitableGrowthSec = () => {
  const heading = "Suitable Growth Conditions for Popular Dry Fruits";
  const cardData = [
    {
      title: "Almonds (Prunus dulcis)",
      pointors: [
        {
          title: "✔ Climate",
          des: " Temperate regions with cold winters and dry summers",
        },
        {
          title: "✔ Temperature Range",
          des: " 15°C to 30°C",
        },
        {
          title: " ✔ Rainfall",
          des: "500–800 mm annually",
        },
        {
          title: " ✔ Soil",
          des: "Well-drained sandy loam, pH 6.07.5",
        },
        {
          title: " ✔  Altitude",
          des: " 800–3000 meters",
        },
      ],
    },
    {
      title: " Cashews (Anacardium occidentale)",
      pointors: [
        {
          title: "✔ Climate",
          des: " Tropical with warm, humid summers",
        },
        {
          title: "✔ Temperature Range",
          des: " 20°C to 35°C",
        },
        {
          title: " ✔ Rainfall",
          des: "1000–2000 mm",
        },
        {
          title: " ✔ Soil",
          des: "Sandy loam or red soils, well-drained, pH 5.5–6.5",
        },
        {
          title: " ✔  Altitude",
          des: "  Up to 1000 meters",
        },
      ],
    },
    {
      title: "  Walnuts (Juglans regia)",
      pointors: [
        {
          title: "✔ Climate",
          des: "Cold temperate with chilling winters",
        },
        {
          title: "✔ Temperature Range",
          des: "-5°C to 25°C",
        },
        {
          title: " ✔ Rainfall",
          des: "1000–2000 mm",
        },
        {
          title: " ✔ Soil",
          des: " Deep loamy soils, good drainage, pH 6.0–7.0",
        },
        {
          title: " ✔  Altitude",
          des: "1000–3000 meters",
        },
      ],
    },
    {
      title: "  Pistachios (Pistacia vera)",
      pointors: [
        {
          title: "✔ Climate",
          des: "Hot summers and cold winters, arid to semi-ari",
        },
        {
          title: "✔ Temperature Range",
          des: " -10°C to 40°C",
        },
        {
          title: " ✔ Rainfall",
          des: "400–600 mm",
        },
        {
          title: " ✔ Soil",
          des: "Well-drained calcareous soil, pH 7.0–8.0",
        },
        {
          title: " ✔  Altitude",
          des: "Up to 2500 meters",
        },
      ],
    },
  ];

  return (
    <>
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
                className="mySwiper2 swiper_padd !p-4 middle-upar  light_active white_arrow"
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

                      {/* List of Pointors */}
                      <ul className="text-[12px] text-left  list-none space-y-2 text-black max-w-[280px] mx-auto">
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
export const CultivationSec = () => {
  const CultivationSecHeading = " Cultivation & Agronomic Practices";
  const slides = [
    {
      group: "",
      image: Cultivation1,
      desc: ` <b>Propagation:</b> Mostly through budding, grafting, or seedlings <br/><b>Spacing:</b>  Depends on species – e.g., 6m x 6m for cashew, 7m x 7m for almonds <br/><b>Pit Size:</b> 60 cm x 60 cm x 60 cm filled with organic manure and soil`,
    },
    {
      group: "Planting Techniques",
      image: Cultivation2,

      desc: `<b>Propagation:</b> Mostly through budding, grafting, or seedlings <br/> <b>Spacing:</b> Depends on species – e.g., 6m x 6m for cashew, 7m x 7m for almonds<br/> <b> Pit Size:</b>60 cm x 60 cm x 60 cm filled with organic manure and soil`,
    },
    {
      group: "Irrigation",
      image: Cultivation3,
      desc: ` <b>Drip Irrigation Recommended</b> – Water-efficient and supports tree health<br/> <b>Irrigation Frequency:</b> Weekly in summer, biweekly in cooler months`,
    },
    {
      group: " Pruning & Training",
      image: Cultivation4,
      desc: ` Ensures proper canopy development and airflow <br/>Encourages higher yields and uniform fruit size`,
    },
    {
      group: "Pest & Disease Management",
      image: Cultivation5,
      desc: ` Use of neem oil, pheromone traps, and organic sprays <br/>Regular monitoring for pests like stem borers, aphids, and fungal spots`,
    },
  ];
  return (
    <>
      <GrowthSlider GrowthHeading={CultivationSecHeading} slides={slides} />
    </>
  );
};
