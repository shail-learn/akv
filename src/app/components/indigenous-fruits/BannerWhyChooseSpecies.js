"use client";
import React from "react";
import BannerPage from "../BannerPage";
import banner from "../../../assets/images/IndigenosFruits/indigenousfruitsBanner.webp";
import whychooose from "../../../assets/images/kulu/wavy.svg";
import Image from "next/image";
import Silvicultural1 from "../../../assets/images/IndigenosFruits/Plantation.webp";
import { GrowthSlider } from "../utilities/Cultivationgrowthwhychoose";
import img01 from "../../../assets/images/IndigenosFruits/IndigenousTech.webp";
import BelImg from "../../../assets/images/IndigenosFruits/Bel.webp";
import JamunImg from "../../../assets/images/IndigenosFruits/jammun.webp";
import TamarindImg from "../../../assets/images/IndigenosFruits/Tamarid.webp";
import ShahtootImg from "../../../assets/images/IndigenosFruits/Shahtoot.webp";
import BerImg from "../../../assets/images/IndigenosFruits/Ber.webp";
import KarondaImg from "../../../assets/images/IndigenosFruits/Karonda.webp";
import RamfalImg from "../../../assets/images/IndigenosFruits/Ramfal.webp";
import GuavaImg from "../../../assets/images/IndigenosFruits/guava.webp";
import CustardAppleImg from "../../../assets/images/IndigenosFruits/CusturdApple.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export const IndigenousBanner = () => {
  const text = {
    banner: banner,
    heading: `Indian & Indigenous Fruits`,
    subtitle: " A Treasure Trove of Taste and Tradition",
    title:
      "India is home to a rich variety of native and indigenous fruit species that have been cultivated for generations. These fruits are more than just sources of nutrition—they are steeped in cultural, medicinal, and ecological significance. At Atulye Krishi Vana, we celebrate and preserve this bounty through thoughtfully designed agroforestry systems. Located in the green expanses of Madhya Pradesh near Bhopal, our agroforestry initiative is spread across 500 acres of fertile land and committed to sustainable, organic, and productive farming practices.",
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
export const WhychoooseIndigenous = () => {
  const heading = "Why Indigenous Fruits Matter?";
  const items = [
    "Atulye integrates these species into its agroforestry model to promote environmental sustainability, community health, and long-term agricultural productivity.",
    "These fruits are uniquely adapted to Indian soil and climate, making them more resilient and sustainable to grow.",
    "They require minimal inputs, are naturally pest-resistant, and hold deep roots in Ayurveda and traditional wellness practices. Indigenous fruits support biodiversity, improve soil fertility, and are loaded with nutrients.",
  ];

  return (
    <>
      {/* Background Image Section */}
      <section className="relative">
        <div className="relative w-full md:-mt-28 z-10 devided-line">
          <Image
            src={whychooose}
            alt="Divider"
            width={1920}
            height={700}
            className="w-full object-cover h-full"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 bg-[#1b453c] text-white pb-20 -mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center pt-14 pb-10">
              {heading}
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 text-center md:text-left mt-10">
              {items.map((text, idx) => (
                <div
                  key={idx}
                  className={`flex-1 relative px-4 md:px-6 ${
                    idx !== 0 ? "md:border-l md:border-gray-400" : ""
                  }`}
                >
                  <p className="text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const KeySpecies = () => {
  const heading = "Key Species We Grow at Atulye Krishi Vana";

  const cardData = [
    {
      title: "Bel (Aegle marmelos)",
      Img: BelImg,
      description: "Uses: Medicinal drinks, chutneys, religious rituals.",
      pointors: [
        {
          title: "Benefits",
          des: "Revered in Ayurveda, Bel is known for its digestive and detoxifying properties. It strengthens immunity and is often used in juices and herbal formulations.",
        },
        {
          title: "Growth Conditions",
          des: "Thrives in dry regions and well-drained loamy soils. Requires full sunlight.",
        },
        { title: "Spacing", des: "8 x 8 meters" },
      ],
    },
    {
      title: "Jamun (Syzygium cumini)",
      Img: JamunImg,
      description: "Uses: Fresh fruit, juices, vinegar, and medicinal powders.",
      pointors: [
        {
          title: "Benefits",
          des: "Rich in iron and antioxidants, Jamun is excellent for managing diabetes and improving digestion.",
        },
        {
          title: "Growth Conditions",
          des: "Prefers tropical to subtropical climates. Grows well in deep, loamy, and alluvial soils.",
        },
        { title: "Spacing", des: "10 x 10 meters" },
      ],
    },
    {
      title: "Tamarind (Tamarindus indica)",
      Img: TamarindImg,
      description: "Uses: Pulp for food and beverages, traditional medicine.",
      pointors: [
        {
          title: "Benefits",
          des: "A culinary staple, tamarind is rich in Vitamin C, aids digestion, and has antibacterial properties.",
        },
        {
          title: "Growth Conditions",
          des: "Grows best in red loamy and alluvial soils. Highly drought-tolerant.",
        },
        { title: "Spacing", des: "10 x 10 meters" },
      ],
    },
    {
      title: "Shahtoot (Morus alba)",
      Img: ShahtootImg,
      description:
        "Uses: Fresh consumption, jams, wines, and sericulture (silkworm farming).",
      pointors: [
        {
          title: "Benefits",
          des: "High in antioxidants, supports heart health, and boosts immunity.",
        },
        {
          title: "Growth Conditions",
          des: "Prefers well-drained soils and tolerates a wide range of climatic conditions.",
        },
        { title: "Spacing", des: "6 x 6 meters" },
      ],
    },
    {
      title: "Ber (Ziziphus mauritiana)",
      Img: BerImg,
      description: "Uses: Fresh consumption, pickles, and medicinal use.",
      pointors: [
        {
          title: "Benefits",
          des: "Known as Indian jujube, it is rich in Vitamin C and helps in skin care and immunity.",
        },
        {
          title: "Growth Conditions",
          des: "Grows well in arid and semi-arid climates; drought-resistant.",
        },
        { title: "Spacing", des: "6 x 6 meters" },
      ],
    },
    {
      title: "Karonda (Carissa carandas)",
      Img: KarondaImg,
      description: "Uses: Pickles, jams, chutneys, and traditional medicine.",
      pointors: [
        {
          title: "Benefits",
          des: "High in iron and Vitamin C. Supports digestion and heart health.",
        },
        {
          title: "Growth Conditions",
          des: "Grows in a variety of soils, including saline and rocky terrain.",
        },
        { title: "Spacing", des: "4 x 4 meters" },
      ],
    },
    {
      title: "Ramfal (Annona reticulata)",
      Img: RamfalImg,
      description: "Uses: Fresh fruit consumption, smoothies, and desserts.",
      pointors: [
        {
          title: "Benefits",
          des: "Known as Bullock's Heart, it aids digestion and is a good source of Vitamin C and B6.",
        },
        {
          title: "Growth Conditions",
          des: "Requires warm climate and well-drained loamy soils.",
        },
        { title: "Spacing", des: "6 x 6 meters" },
      ],
    },
    {
      title: "Guava (Psidium guajava)",
      Img: GuavaImg,
      description: "Uses: Juices, jams, and fresh eating.",
      pointors: [
        {
          title: "Benefits",
          des: "Loaded with Vitamin C, fiber, and antioxidants. Supports weight loss and improves heart health.",
        },
        {
          title: "Growth Conditions",
          des: "Requires warm climate and well-drained loamy soils.",
        },
        { title: "Spacing", des: "6 x 6 meters" },
      ],
    },
    {
      title: "Custard Apple (Annona squamosa)",
      Img: CustardAppleImg,
      description: "Uses: Ice creams, shakes, and desserts.",
      pointors: [
        {
          title: "Benefits",
          des: "Excellent for brain health, digestion, and immunity.",
        },
        {
          title: "Growth Conditions",
          des: "Prefers light soils, well-drained, and thrives in dry and hot climates.",
        },
        { title: "Spacing", des: "5 x 5 meters" },
      ],
    },
  ];

  return (
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
              className="mySwiper2 swiper_padd !p-4 middle-upar light_active white_arrow"
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
  );
};

export const IndigenousPlantation = () => {
  const GrowthHeading = "Our Plantation Practices";
  const GrowthDescription =
    "At Atulye, our fruit-bearing trees are planted using scientific spacing and pit preparation to ensure healthy growth";
  const slides = [
    {
      group: "",
      image: Silvicultural1,
      title: "",
      desc: "We use only organic compost and biofertilizers to enrich the soil. Our water-efficient irrigation systems, such as drip irrigation, help conserve water while delivering precise nutrients. Mulching and intercropping techniques are used to prevent weed growth and maintain soil temperature.",
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

export const IndigenousTechMeet = () => {
  const marketData = {
    imageSrc: img01,
    title: "Technology Meets Tradition",
    description:
      "While we embrace organic and traditional methods, Atulye is also at the forefront of agricultural innovation. Our blend of ancient wisdom and modern technology ensures not just productivity but also traceability and transparency in the supply chain.",
  };
  return (
    <>
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-2">
          <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-[#1B453C] text-center mb-[3rem]">
            {marketData.title}
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
            <div className="md:w-1/2 w-full">
              <div className="relative">
                <div className="absolute inset-0 -z-10 h-[106%] w-[96%] md:w-full translate-x-[-2rem] -translate-y-3 md:-translate-y-4 bg-white border border-gray-400 rounded-[20px] shadow-md"></div>
                <Image
                  src={marketData.imageSrc}
                  alt="Market Demand"
                  width={800}
                  height={500}
                  className="rounded-[20px]"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                />
              </div>
            </div>

            <div className="md:w-4/12 w-12/12 ">
              <p className="my-6 text-[18px]  font-normal md:text-base text-black">
                {marketData.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
