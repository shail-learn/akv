"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BannerPage from "../BannerPage";
import banner from "../../../assets/images/exotic/Movement.webp";
import { Wave } from "../Wave";
import BerryImage from "../../../assets/images/berryfruits/AboutBerry.webp";
import why1 from "../../../assets/images/berryfruits/whyImg1.webp";
import why2 from "../../../assets/images/berryfruits/whyImg2.webp";
import why3 from "../../../assets/images/berryfruits/whyImg3.webp";
import why4 from "../../../assets/images/berryfruits/whyImg4.webp";
import Passionfruit from "../../../assets/images/berryfruits/Passionfruit.webp";
import Karonda from "../../../assets/images/berryfruits/Karonda.webp";
import Grapes from "../../../assets/images/berryfruits/Grapes.webp";
import Shahtoot from "../../../assets/images/berryfruits/Shahtoot.webp";

import { Gridbox } from "../Gridbox";

export const BerryBanner = () => {
  const text = {
    banner: banner,
    heading: `Berry & Vine Fruits`,
    subtitle: "Cultivating the Bounty of Nature with Atulye",
    title:
      "India is witnessing a quiet revolution in sustainable agriculture and high-value horticulture. Among the most rewarding segments in this transformation is the cultivation of Berry & Vine Fruits, an increasingly popular choice for farmers seeking diversity, profitability, and ecological balance.",
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

export const AboutBerry = () => {
  const Data = {
    note: `Their lightweight yet durable nature makes them ideal for applications requiring flexibility and workability.<br/>
At Atulye Krishi Vana, we specialize in agroforestry solutions that promote sustainable timber cultivation. Our plantations include premium softwood species like Haldu (Haldina cordifolia), Pakad (Ficus virens), and Pipal (Ficus religiosa)—each offering unique properties for commercial and environmental benefits. Whether you are a farmer, investor, or business, we help you establish high-yield plantations that maximize returns while preserving nature.
`,
    image: BerryImage,
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

export const BerryWeCultivate = () => {
  const heading = "Featured Berry & Vine  Fruits We Cultivate";
  const custom_class = "original_img padding_argust";
  const cardData = [
    {
      title: " Karonda (Carissa carandas)",
      icon: Karonda,
      description:
        " Karonda is a thorny, drought-tolerant shrub known for its small, tangy fruits rich in iron and vitamin C",
      pointor: [
        {
          points: "Planting & Spacing",
          content:
            "Karonda is typically propagated through seeds or stem cuttings. Spacing ranges from 1.5 to 2 meters between plants.",
        },
        {
          points: "Soil & Climate",
          content:
            "It thrives in poor, rocky, or sandy soils and tolerates alkaline conditions. Being drought-resistant, it grows well in dry, arid, and semi-arid regions with minimal irrigation.",
        },
        {
          points: "Economic & Ecological Value",
          content:
            "Karonda fruits are used in pickles, jams, and syrups, and fetch premium prices in niche markets.",
        },
      ],
    },
    {
      title: "Grapes (Vitis vinifera)",
      icon: Grapes,
      description:
        "Grapes are one of the most commercially valuable vine fruits globally. Their use spans fresh consumption, winemaking, juices, raisins, and cosmetic industries",
      pointor: [
        {
          points: "Planting & Spacing",
          content:
            "Grapes require well-prepared, loose, and well-drained soil. Plantation involves pit digging (60x60x60 cm) and spacing of 2.5 to 3 meters between rows and plants.",
        },
        {
          points: "Soil & Climate",
          content:
            "Grapes thrive in sandy loam to clay loam soils with pH between 6.5 to 7.5. They prefer warm, dry climates with moderate rainfall.",
        },
        {
          points: "Economic & Ecological Value",
          content:
            "Grapes provide high returns per acre and are ideal for drip irrigation and fertigation. ",
        },
      ],
    },
    {
      title: " Shahtoot (Morusalba) – Mulberry",
      icon: Shahtoot,
      description:
        " Mulberry is a fast-growing, versatile fruit tree known for its nutrient-rich berries and its leaves, which are the primary food for silkworms.",
      pointor: [
        {
          points: "Planting & Spacing",
          content:
            "Saplings are planted in pits of 45x45x45 cm with a spacing of 2.5 to 3 meters between plants. Regular pruning encourages better fruit yield and plant shape.",
        },
        {
          points: "Soil & Climate",
          content:
            "Mulberry adapts well to a range of soils but prefers deep, fertile loams with good drainage. It can tolerate semi-arid conditions and is suited for agroforestry models.",
        },
        {
          points: "Economic & Ecological Value",
          content:
            " Mulberry has diverse applications—from fruits to sericulture. Its berries are rich in antioxidants and highly valued in health markets. ",
        },
      ],
    },
    {
      title: "Passionfruit (Passiflora edulis)",
      icon: Passionfruit,
      description:
        "Passionfruit is an exotic vine fruit known for its aromatic flavor and high vitamin C content. It is gaining popularity in Indian markets due to its commercial value in beverages, desserts, and health supplements.",
      pointor: [
        {
          points: "Planting & Spacing",
          content:
            "Passionfruit vines are grown using support systems like trellises or fences. Spacing is typically 2.5 x 3 meters to ensure sufficient room for spreading vines. Training and pruning are essential for better yield and disease management.",
        },
        {
          points: "Soil & Climate",
          content:
            "It prefers well-drained loamy soils with pH 6.0 to 7.5. The vine requires tropical to subtropical climates with moderate rainfall and thrives in elevations between 800 to 1800 meters.",
        },
        {
          points: "Economic & Ecological Value",
          content:
            " With yields of 10-15 tonnes per hectare under proper care, passionfruit is a high-value crop. The plant’s dense foliage provides shade and habitat for insects and birds, enriching farm biodiversity.",
        },
      ],
    },
  ];

  return (
    <>
      <div
        className={`relative z-20 bg-[#1b453c] text-white pb-20 -mt-20 ${
          custom_class ? custom_class : ""
        } `}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-normal text-center pt-14 pb-10">
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
                className="mySwiper2 swiper_padd !p-4 icon_slider light_active white_arrow"
              >
                {cardData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="lg:col-span-4 bg-white transition-all rounded-[15px] card1 duration-400 text-black p-6 md:p-10 w-full"
                      style={{ boxShadow: "2px 2px 6px 0px #00000033" }}
                    >
                      <div className="grid items-center  text-center justify-center gap-1">
                        <h3
                          className={`text-base md:text-[15px] text-black font-bold `}
                        >
                          {item.title}
                        </h3>
                        <h3
                          className={`text-base md:text-[11px] text-black font-semibold `}
                        >
                          {item.description}
                        </h3>
                        {item.icon && (
                          <Image
                            src={item.icon}
                            alt="Icon"
                            width={200}
                            height={200}
                            className="object-contain h-9 mx-auto"
                          />
                        )}
                        {item.pointor.map((item, index) => (
                          <div key={index}>
                            <h6 className="text-[12px] font-bold text-black">
                              {item.points}
                            </h6>
                            <p className="text-[10px] font-normal text-black">
                              {item.content}
                            </p>
                          </div>
                        ))}
                      </div>
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
export const WhyChooseBerry = () => {
  const whyChooseData = [
    {
      image: why1,
      title: "State-of-the-Art Techniques",
      description:
        " Modern nursery practices, drip irrigation, sensor-based soil monitoring, and pruning schedules are used to ensure high yield and plant health. Atulye’s technical team continuously updates practices to match global standards.",
    },
    {
      image: why2,
      title: " Premium Market Linkages",
      description:
        " Atulye helps farmers access urban, export, and organic markets by offering post-harvest support, cold storage solutions, and direct-to-consumer channels.",
    },
    {
      image: why3,
      title: "Sustainable Agroforestry Expertise",
      description:
        " Atulye integrates berry and vine crops into large-scale agroforestry layouts, ensuring compatibility with other species, soil restoration, and improved water retention. This system supports long-term sustainability and biodiversity.",
    },
    {
      image: why4,
      title: "Farmer-Centric Approach",
      description:
        "Training, consultation, and continuous support empower farmers with knowledge and tools to make informed decisions. Atulye believes in inclusive growth through education and field-level interventions",
    },
  ];
  const heading = "Featured Exotic & Imported Fruits We Cultivate";

  return (
    <>
      <section className={`bg-[#1B453C] py-12 md:py-16 px-4 `}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl font-medium mb-16">
            {heading}
          </h2>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-16 md:gap-8 img_arrow pb-4 `}
          >
            {whyChooseData.map((item, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "md:flex-col-reverse " : "md:flex-col"
                  }   text-center space-y-4 md:gap-10`}
                >
                  {/* Image */}
                  <div className="w-full h-full img_div">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={180}
                      className="w-full h-60 md:h-44 rounded-3xl object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="border-[#295F54] border text-white p-6 py-8 md:p-4 md:py-6 rounded-3xl h-full !mt-0 w-full">
                    <h4 className="text-base font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm font-light">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
