import React from "react";
import { Wave } from "../Wave";
import BannerPage from "../BannerPage";
import banner from "../../../assets/images/MedicinalHerbs/MedicinalHerbBanner.webp";
import farmer from "../../../assets/images/stress/farmer.webp";
import Image from "next/image";
import { Gridbox } from "../Gridbox";
import healthBenifit1 from "../../../assets/images/MedicinalHerbs/Bel1.webp";
import healthBenifit2 from "../../../assets/images/MedicinalHerbs/Bel2.webp";
import healthBenifit3 from "../../../assets/images/MedicinalHerbs/Bel3.webp";
import healthBenifit4 from "../../../assets/images/MedicinalHerbs/Bel4.webp";
import choose1 from "../../../assets/images/MedicinalHerbs/WhyImg1.webp";
import choose2 from "../../../assets/images/MedicinalHerbs/WhyImg2.webp";
import choose3 from "../../../assets/images/MedicinalHerbs/WhyImg3.webp";
import choose4 from "../../../assets/images/MedicinalHerbs/WhyImg4.webp";
import {
  FaqsLayout,
  GrowthSlider,
} from "../utilities/Cultivationgrowthwhychoose";
import { Productlist } from "../Productlist";
import jammunhealtbenifit1 from "../../../assets/images/MedicinalHerbs/jammun1.webp";
import jammunhealtbenifit2 from "../../../assets/images/MedicinalHerbs/jammun2.webp";
import jammunhealtbenifit4 from "../../../assets/images/MedicinalHerbs/jammun4.webp";
import tarmaridBenifit2 from "../../../assets/images/MedicinalHerbs/Tarmarid2.webp";
import tarmaridBenifit3 from "../../../assets/images/MedicinalHerbs/Tarmarid3.webp";
import tarmaridBenifit4 from "../../../assets/images/MedicinalHerbs/Tarmarid4.webp";
import bel from "../../../assets/images/MedicinalHerbs/BelImg.webp";
import jammun from "../../../assets/images/MedicinalHerbs/jammunCirlcle.webp";
import tarmarid from "../../../assets/images/MedicinalHerbs/Tarmarid.webp";

export const MedicinalHerbBanner = () => {
  const text = {
    banner: banner,
    heading: `Medicinal Herbs- Nature’s Own Doctor`,
    title:
      "At Athulye Krishi Vana, we specialize in the cultivation and promotion of medicinal and special use fruits, offering farmers and entrepreneurs the opportunity to engage in sustainable farming practices that deliver both economic and health benefits",
    opacity: "opacity-30",
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
      <Wave />
    </>
  );
};

export const Bel = () => {
  const basketData = {
    note: "Our offerings include three exceptional fruit varieties that have stood the test of time for their nutritional, medicinal, and culinary benefits: Bel (Aegle marmelos), Jamun (Syzygium cumini), and Tamarind (Tamarindus indica). These fruits are not only prized for their taste but also for their medicinal properties that have been embraced in traditional and modern medicine.Our mission is to integrate these special use fruits into agroforestry systems, empowering farmers to grow trees that offer diverse benefits. These fruits provide an additional source of income, contribute to ecological balance, and enhance biodiversity. By adopting these crops, farmers can tap into the expanding demand for natural products in the health, food, and wellness sectors.",
    image: farmer,
  };

  const main_heading =
    "Bel (Aegle marmelos) The Sacred Tree with Healing Powers";
  const shortinfo =
    "Bel, also known as Bael, is a tropical fruit that has long been a part of traditional medicinal practices, particularly in India. It is famous for its high content of vitamins, antioxidants, and other beneficial compounds. This tree is also revered in Hinduism as a sacred plant, often associated with Lord Shiva.";
  const gridBox = "xl:!grid-cols-4";
  const healthBenifitData = [
    {
      image: healthBenifit1,
      title: "Immune System Boost ",
      description:
        " The high vitamin C content strengthens the immune system, helping to fight off infections..",
    },
    {
      image: healthBenifit3,
      title: "Detoxification",
      description:
        "The fruit’s antioxidants help in detoxifying the body, removing harmful free radicals, and promoting overall wellness.",
    },
    {
      image: healthBenifit2,
      title: "Digestive Health",
      description:
        "Bel fruit is excellent for maintaining digestive health. It is used to treat indigestion, constipation, and diarrhea. ",
    },
    {
      image: healthBenifit4,
      title: "Blood Sugar Regulation:",
      description:
        "It has shown promise in regulating blood sugar levels, making it beneficial for people with diabetes",
    },
  ];

  const GrowthHeading = "Agricultural Significance of Bel";
  const slides = [
    {
      image: bel,
      desc: `Bel trees are drought-tolerant and grow well in dry regions, making them ideal for areas with less rainfall. They thrive in well-drained soils and need minimal maintenance once established. The fruit itself is produced once the tree matures, typically around 3 to 5 years after planting, providing farmers with a reliable, low-maintenance crop.`,
    },
  ];

  return (
    <>
      <section className="py-12 md:!pt-0  px-4 md:px-8 lg:px-16 bg-[#1B453C]">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col-reverse justify-between lg:flex-row   gap-8">
            <div className="w-full md:w-1/2">
              <p
                className="mt-0 md:mt-4 text-white"
                dangerouslySetInnerHTML={{ __html: basketData.note }}
              ></p>
            </div>
            <div className="w-full md:w-[40%]">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={basketData.image}
                  alt="Image"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p
            className="mt-0 md:mt-4 text-white"
            dangerouslySetInnerHTML={{ __html: shortinfo }}
          ></p>
        </div>
      </section>
      <Gridbox
        heading="Health Benefits of Bel Fruit"
        data={healthBenifitData}
        gridBox={gridBox}
      />

      <GrowthSlider GrowthHeading={GrowthHeading} slides={slides} />
    </>
  );
};

export const Jamun = () => {
  const gridBox = "xl:!grid-cols-4 ";
  const custom_class = "white_grid grid_padding";
  const main_heading = "Jamun (Syzygium cumini)  The Fruit of Health";
  const shortinfo = `Jamun, or Black Plum, is a seasonal fruit native to the Indian subcontinent and is widely grown in tropical and subtropical regions. The Jamun tree is known for its resilience and adaptability to various climates.`;
  const whyChooseData = [
    {
      image: jammunhealtbenifit1,
      title: "Blood Sugar Management",
      description:
        "Jamun is one of the most widely used natural remedies for controlling blood sugar levels.",
    },
    {
      image: jammunhealtbenifit2,
      title: "Heart Health",
      description:
        " The antioxidants in Jamun help reduce cholesterol levels and prevent the buildup of plaque in the arteries, promoting better cardiovascular health.",
    },
    {
      image: healthBenifit3,
      title: "Digestive Health",
      description:
        " Jamun is a natural remedy for digestive issues, including indigestion and bloating. Its astringent properties help improve bowel movements .",
    },
    {
      image: jammunhealtbenifit4,
      title: "Skin Health",
      description:
        " Jamun is rich in vitamin C, which is known to help in the production of collagen, keeping the skin youthful ",
    },
  ];

  const custom_class1 = "growth_white";
  const GrowthHeading = "Agricultural Significance of Jamun";
  const slides = [
    {
      image: jammun,
      desc: `Jamun trees are robust and can thrive in a wide range of soil types. They prefer well-drained, sandy soils and moderate rainfall. Once planted, these trees are relatively low-maintenance and resilient to pests, which makes them an ideal choice for organic farming.`,
    },
  ];

  return (
    <>
      <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p
            className="mt-0 md:mt-4 text-black"
            dangerouslySetInnerHTML={{ __html: shortinfo }}
          ></p>
        </div>
      </section>
      <Gridbox
        heading="Health Benefits of Jamun Fruit"
        data={whyChooseData}
        className={custom_class}
        gridBox={gridBox}
      />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        className={custom_class1}
      />
    </>
  );
};
export const Tarmarid = () => {
  const main_heading =
    " Tamarind (Tamarindus indica) The Sour Fruit with Versatility";
  const shortinfo =
    "Tamarind is a tropical tree native to Africa but widely grown in India, Southeast Asia, and the Caribbean. Its fruit is a pod-like structure that contains a sticky, sour pulp used in various culinary and medicinal applications.Tamarind is an essential ingredient in many cuisines worldwide and is known for its distinct tangy flavor.";
  const gridBox = "xl:!grid-cols-4";
  const whyChooseData = [
    {
      image: healthBenifit1,
      title: "Digestive Health",
      description:
        "  Tamarind is well-known for its ability to relieve constipation and promote healthy digestion. It acts as a natural laxative and aids in detoxifying the digestive system.",
    },
    {
      image: tarmaridBenifit2,
      title: "Anti-Inflammatory Properties",
      description:
        " The fruit has natural anti-inflammatory properties and is used to reduce swelling and pain associated with conditions like arthritis.",
    },
    {
      image: tarmaridBenifit3,
      title: "Antioxidant Rich",
      description:
        " Tamarind is rich in polyphenols, which act as antioxidants, protecting the body from oxidative stress and reducing the risk of chronic diseases.",
    },
    {
      image: tarmaridBenifit4,
      title: "Heart Health",
      description:
        " Tamarind is rich in polyphenols, which act as antioxidants, protecting the body from oxidative stress and reducing the risk of chronic diseases.",
    },
  ];

  const GrowthHeading = "Agricultural Significance of Tamarind";
  const slides = [
    {
      image: tarmarid,
      desc: `Tamarind trees are hardy and can grow in a variety of soil conditions, although they prefer well-drained, loamy soils. The trees are drought-tolerant and can withstand periods of dry weather, making them a good choice for areas with inconsistent rainfall.
<br/>Tamarind provides a significant economic return for farmers. The fruit’s pulp is used in cooking, while its seeds are processed for oil extraction, and its leaves have various medicinal uses.
`,
    },
  ];

  return (
    <>
      <section className="py-12 pt-16 md:pt-20  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p
            className="mt-0 md:mt-4 text-white"
            dangerouslySetInnerHTML={{ __html: shortinfo }}
          ></p>
        </div>
      </section>
      <Gridbox
        heading="Health Benefits of Tamarind Fruit"
        data={whyChooseData}
        gridBox={gridBox}
      />

      <GrowthSlider GrowthHeading={GrowthHeading} slides={slides} />
    </>
  );
};
export const WhypartnerMedicinalHerb = () => {
  const heading = "Why Choose Medicinal & Special Use Fruits from AKV";
  const fruitData = [
    {
      title: "Sustainability",
      image: choose1,
      flip: "At Athulye Krishi Vana, we believe in promoting sustainable agricultural practices. Our medicinal and special-use fruits like Bel, Jamun, and Tamarind are integral to agroforestry systems that protect the environment while ensuring long-term profitability for farmers. These trees not only provide food but also enrich the soil and support biodiversity, making them a valuable part of a sustainable farming ecosystem.",
    },
    {
      title: "Economic Benefits",
      image: choose2,
      flip: "Medicinal fruits are a rapidly growing market, with increasing global demand for natural remedies, organic products, and health-conscious ingredients. By growing Bel, Jamun, and Tamarind, farmers can diversify their income sources, creating new revenue streams from fruit, leaves, seeds, and even processed products like juice, powder, and jam.",
    },
    {
      title: "Expert Support and Training",
      image: choose3,
      flip: "Athulye Krishi Vana provides comprehensive support to farmers who wish to cultivate medicinal and special-use fruits. We offer expert advice, high-quality saplings, and continuous guidance on best practices for planting, nurturing, and harvesting these trees. We ensure that our farmers are equipped with the knowledge and tools they need to succeed in this growing and profitable sector.",
    },
    {
      title: "Market Access",
      image: choose4,
      flip: "We help connect farmers to local and international markets for medicinal fruits. With our extensive network, we enable farmers to sell their produce at competitive prices, ensuring that their hard work translates into significant profits.",
    },
  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />
    </>
  );
};
export const HerbalFAQs = () => {
  const Faqheading =
    " What are the key medicinal benefits of Bel (Aegle marmelos)?";
  const Faqdescription = `Bel, also known as Bael, is widely regarded in traditional medicine for its digestive benefits. It can help manage constipation, indigestion, and diarrhea. Rich in antioxidants, it helps detoxify the body and enhance immunity.Bel, also known as Bael, is widely regarded in traditional medicine for its digestive benefits. It can help manage constipation, indigestion, and diarrhea. Rich in antioxidants, it helps detoxify the body and enhance immunity.`;
  const FaqsData = [
    {
      question:
        " How can Jamun (Syzygium cumini) help control blood sugar levels?",
      answer:
        "Jamun is highly beneficial for people with diabetes as it helps regulate blood sugar levels. The fruit contains compounds that help improve insulin secretion and sensitivity. Jamun seeds, in particular, are used in powdered form for their anti-diabetic effects. This fruit helps prevent the rapid spikes in blood sugar levels, making it an ideal food for diabetic patients. Furthermore, Jamun’s rich antioxidants help combat oxidative stress, which can worsen diabetes-related complications. Regular consumption can significantly contribute to blood sugar control.",
    },
    {
      question:
        "What makes Tamarind (Tamarindus indica) a versatile fruit in cooking?",
      answer:
        "Tamarind is known for its unique sour and tangy flavor, making it a popular ingredient in various cuisines worldwide. It adds a complex, citrusy taste to dishes, making it a key component in sauces, chutneys, curries, and beverages. In addition to its flavor profile, tamarind is used as a natural preservative and thickening agent. It enhances the flavor of both savory and sweet dishes and is often used in making traditional drinks like tamarind juice and candies. Its versatility in the kitchen makes it an indispensable fruit.",
    },
    {
      question:
        " Are there any specific environmental conditions needed to grow Bel trees?",
      answer:
        "Bel trees thrive in tropical and subtropical climates. They are adaptable and can grow in various soil types but prefer well-drained, sandy or loamy soils. They are highly drought-tolerant and require minimal water once established, making them ideal for arid regions. The trees need plenty of sunlight and can tolerate high temperatures. To ensure optimal growth, farmers should avoid planting Bel trees in waterlogged or clayey soils, as these can hinder root development. Bel trees also require minimal care, making them an excellent choice for low-maintenance farming.",
    },
    {
      question: "How long does it take for a Jamun tree to bear fruit?",
      answer:
        "A Jamun tree typically begins to bear fruit 3 to 5 years after planting, depending on the variety and growing conditions. The tree thrives in tropical climates and prefers well-drained soil. Once established, the tree requires minimal maintenance. The fruit is usually harvested during the summer months, with the peak season varying depending on the region. Jamun trees are highly resistant to pests and diseases, ensuring consistent fruit production. The fruit itself is known for its deep purple hue, rich flavor, and numerous health benefits.",
    },
    {
      question: "What are the post-harvest processing options for these herbs?",
      answer:
        "Post-harvest, these herbs can be processed into a variety of forms for added value. Aloe Vera can be extracted into gel or juice, dried into powder, or processed into cosmetic products. Mulethi roots are typically dried and powdered or cut into small pieces for tea and syrup production. Chitrak roots can be dried and ground into fine powder for use in digestive supplements. Jimikand tubers are boiled, dried, and sliced for use in snacks or dried powder. Proper drying and storage techniques are essential for maintaining potency and quality.",
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
