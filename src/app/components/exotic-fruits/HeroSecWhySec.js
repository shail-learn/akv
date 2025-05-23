import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BannerPage from "../BannerPage";
import banner from "../../../assets/images/exotic/ExoticBanner.webp";
import { Wave } from "../Wave";
import ExoticImage from "../../../assets/images/exotic/exotic.webp";
import why1 from "../../../assets/images/exotic/approach1.webp";
import why2 from "../../../assets/images/exotic/approach2.webp";
import why3 from "../../../assets/images/exotic/approach3.webp";
import why4 from "../../../assets/images/exotic/approach4.webp";
import Passionfruit from "../../../assets/images/exotic/Passionfruit.webp";
import Litchi from "../../../assets/images/exotic/Litchi.webp";
import Dragon from "../../../assets/images/exotic/Dragon.webp";
import Date from "../../../assets/images/exotic/Date.webp";
import Pear from "../../../assets/images/exotic/Pear.webp";
import Apple from "../../../assets/images/exotic/Apple.webp";

import { Gridbox } from "../Gridbox";

export const ExoticBanner = () => {
  const text = {
    banner: banner,
    heading: `Exotic & Imported Fruits`,
    subtitle: "Cultivating High-Value Global Varieties in Indian Soil",
    title:
      "At Atulye Krishi Vana, we are not just rooted in tradition but are also constantly evolving with the global agricultural landscape. Our efforts in sustainable agroforestry now include the cultivation of exotic and imported fruit species that hold immense commercial and nutritional value.     ",
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

export const Exotic = () => {
  const Data = {
    note: `The demand for exotic fruits is rapidly rising due to increasing health awareness, urban lifestyle choices, and exposure to global cuisines. These fruits are known not only for their unique taste and texture but also for their nutritional benefits. At Atulye, we cultivate exotic species that are climate-compatible, resilient, and commercially viable.
`,
    image: ExoticImage,
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

export const WeCultivate = () => {
  const heading = "Featured Exotic & Imported Fruits We Cultivate";
  const custom_class = "original_img padding_argust";
  const cardData = [
    {
      title: " Passionfruit (Passiflora edulis)",
      icon: Passionfruit,
      description:
        " Known for its aromatic flavor, passionfruit is a vigorous climber producing round or oval fruit with a tough rind and juicy, seed-filled interior.",
      pointor: [
        {
          points: "Planting & Spacing",
          content:
            "Litchi trees are spaced 8-10 meters apart to accommodate their wide canopy. Best planted at the onset of monsoon, they thrive in well-drained, slightly acidic soils.",
        },
        {
          points: "Soil & Climate",
          content:
            "Litchis prefer deep loamy soil rich in organic matter. A subtropical climate with dry winters and humid summers supports optimal flowering and fruiting.",
        },
        {
          points: "Commercial Value",
          content:
            "Litchi has high market demand in both fresh and processed forms like juice, pulp, and jams. With proper management, each tree can yield up to 100–150 kg of fruit annually.",
        },
      ],
    },
    {
      title: "Litchi (Litchi chinensis)",
      icon: Litchi,
      description:
        "A summer favorite, litchi is a tropical fruit known for its sweet, aromatic pulp encased in a red, bumpy shell. Originally from China, it has adapted well to Indian agro-climatic conditions.",
      pointor: [
        {
          points: "Planting & Spacing",
          content:
            "This crop is typically grown on trellises with spacing of 2x2 meters. Vertical growth structures are essential to support the climbing stems",
        },
        {
          points: "Soil & Climate",
          content:
            "It thrives in sandy loam soil with good drainage and a pH of 6–7. Dragon fruit needs a warm, arid climate and performs well with minimal rainfall.",
        },
        {
          points: "Commercial Value",
          content:
            "Highly profitable due to its short gestation period, dragon fruit begins yielding within 1.5–2 years. It has growing demand in urban markets for fresh consumption and smoothie preparations.",
        },
      ],
    },
    {
      title: " Dragon Fruit (Selenicereus undatus)",
      icon: Dragon,
      description:
        "Dragon fruit, also known as pitaya, is a cactus species that produces striking pink-skinned fruit with white or red flesh and tiny black seeds.",
      pointor: [
        {
          points: "Planting & Spacing",
          content:
            "Grown on trellises, passionfruit vines are spaced 2–3 meters apart. Support systems are essential for optimal air circulation and sunlight exposure.",
        },
        {
          points: "Soil & Climate",
          content:
            "Prefers sandy or loamy soil with high organic content and good drainage. It thrives in tropical to subtropical climates with moderate rainfall.",
        },
        {
          points: "Commercial Value",
          content:
            "Used in juices, desserts, and concentrates, passionfruit has export potential and strong domestic demand. A single vine can produce 15–20 kg of fruit per season.",
        },
      ],
    },
    {
      title: " Date Palm (Phoenix dactylifera)",
      icon: Date,
      description:
        "Date palms are iconic desert plants known for their sweet, chewy fruit with a long shelf life. They are native to the Middle East but adapt well to arid regions in India.",
      pointor: [
        {
          points: "Planting & Spacing",
          content:
            "Planted at a spacing of 8x8 meters, date palms need full sun and good airflow. Proper male-to-female plant ratio is necessary for pollination.",
        },
        {
          points: "Soil & Climate",
          content:
            "They grow best in deep, well-drained sandy loam soils with high sunlight and minimal rainfall. Saline soils are also tolerated to an extent.",
        },
        {
          points: "Commercial Value",
          content:
            "A highly profitable tree, especially for dry fruit markets. Mature trees can produce 50–100 kg annually and are in high demand for processed and fresh consumption.",
        },
      ],
    },
    {
      title: " Pear (Pyrus communis)",
      icon: Pear,
      description:
        "Pear trees bear sweet, crunchy fruits and are widely appreciated for fresh consumption and culinary uses. Originally from Europe, they are now cultivated in several parts of northern India.",
      pointor: [
        {
          points: "Planting & Spacing",
          content:
            "Trees are planted at a spacing of 5x5 meters. Pruning is necessary to shape the canopy and ensure good air circulation.",
        },
        {
          points: "Soil & Climate",
          content:
            "Pear trees prefer well-drained loamy soil and temperate climates. They need cold hours during winter to break dormancy and trigger flowering.",
        },
        {
          points: "Commercial Value",
          content:
            "Pears fetch premium prices in retail and wholesale markets. They also store well under cold storage, making them suitable for extended supply chains.",
        },
      ],
    },
    {
      title: "Apple (Malus pumila)",
      icon: Apple,
      description:
        "One of the most popular fruits globally, apples are now grown in select areas across India outside of traditional Himalayan regions, thanks to improved rootstock varieties.",
      pointor: [
        {
          points: "Planting & Spacing",
          content:
            "Spacing of 4x4 or 5x5 meters is followed. High-density planting systems using dwarf rootstocks are gaining popularity for increased yield.",
        },
        {
          points: "Soil & Climate",
          content:
            "Well-drained, slightly acidic loamy soils and cold temperate climates are ideal. Apples require chilling hours for proper bud development.",
        },
        {
          points: "Commercial Value",
          content:
            "Apples are a premium fruit with strong demand in all seasons. With value-added products like cider, juice, and dried snacks, their profitability increases manifold.",
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
export const ExoticApproach = () => {
  const whyChooseData = [
    {
      image: why1,
      title: "Farmer Integration Training",
      description:
        "Our operations are designed to involve and uplift local farmers. We offer training in the cultivation of exotic varieties, providing them with high-value crops that ensure better returns and market exposure.",
    },
    {
      image: why2,
      title: "Market Linkage and Processing",
      description:
        " Our partnerships with food processing units, supermarkets, and exporters ensure a ready market for produce. We also facilitate cold storage and transportation logistics for perishable fruits.",
    },
    {
      image: why3,
      title: "Soil Enrichment & Organic Practices",
      description:
        "We use composting, vermiculture, and natural pest control methods to maintain soil health and plant vitality. Every exotic plant is given customized care suited to its origin and soil compatibility.",
    },
    {
      image: why4,
      title: "Sustainability & Biodiversity",
      description:
        "We interplant exotic species with native ones to create a balanced ecosystem. This not only supports biodiversity but also mitigates the risk of monoculture failures.",
    },
  ];
  const heading = "Atulye's Approach to Exotic Fruit Cultivation";
  return (
    <>
      <section className={`bg-[#1B453C] py-12 md:py-16 px-4  `}>
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
