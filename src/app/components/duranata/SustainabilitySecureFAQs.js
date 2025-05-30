import React from 'react'
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";
import circle2 from "../../../assets/images/digestive/circle2.webp";
import { FaqsLayout, GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';

export const Sustainability = () => {

    const custom_class1 = "growth_white"
    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle2,
        desc: `Kaner is highly adaptable to poor soils, saline conditions, and high heat. It can be cultivated in tropical, subtropical, and even arid zones, thriving in full sun and tolerating partial shade. <br> <br> Popular in landscaping, housing developments, and municipal beautification projects. Its high survival rate and low input cost make it attractive for mass plantation drives. Kaner saplings and cuttings are in consistent demand across urban and rural nurseries.`,
      },

    ];

    return (
      <>

        <GrowthSlider
          GrowthHeading={GrowthHeading}
          slides={slides}
          className={custom_class1}
        />

      </>
    )
}


export const Secure = () => {
  const heading = "Grow Beauty, Balance, and Biodiversity";
  const description =
    "Atulye Krishi Vana invites communities, institutions, farmers, and planners to embrace flowering and ornamental plants not only for their visual charm but for their ecological, cultural, and economic contributions. These plants restore harmony between people and nature—turning every field, roadside, and courtyard into a sanctuary of color and life. <br/> Whether you aim to run a nursery, start a commercial rose farm, or green your township with Gulmohar avenues, we are here to partner with you. <br/><br/> <b>Connect with Atulye Krishi Vana today.  Beautify the land. Enrich the air.Celebrate nature. </b>";

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full my-8 md:my-12 !mt-0"
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >
      <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
        <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
          <h2 className=" w-full  text-3xl md:text-4xl leading-snug font-bold mb-8 md:mb-10 redhat">
            {heading}
          </h2>
          <p
            className="mb-4 text-sm  md:text-base   w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>

        </div>
      </div>
    </section>
  );
}


export const FAQs = () => {
  const Faqheading =
  "What are the most profitable flowering plants to grow commercially?";
const Faqdescription = `Marigold, rose, jasmine, gerbera, and tuberose are among the most profitable flowering plants for Indian farmers. These plants have steady demand in the floral market, temples, events, and garland-making industries. They grow well in different climates and can be cultivated year-round with proper irrigation. Choose varieties with high yield, disease resistance, and long vase life. Market access, post-harvest handling, and transport are equally important. Intercropping with vegetables or herbs can increase profitability. Profit margins vary by region and scale, but with good planning, flower cultivation can offer significantly higher returns than many staple crops.`;
const FaqsData = [
  {
    question: "How much land and investment is required to start flower farming?",
    answer:
      "Starting flower farming requires at least half to one acre of land for meaningful income. Investment depends on the crop: open field farming costs less, but polyhouse farming for crops like gerbera or rose may cost ₹8–12 lakhs per 1000 sq. m. Expenses include land preparation, seedlings, irrigation, fertilizers, labor, and post-harvest handling. You can start small with marigold or jasmine in open fields using drip irrigation and natural inputs. Gradual expansion based on market response is ideal. ",
  },
  {
    question:
      "What climate is best for growing ornamental and flowering plants?",
    answer:
      "Flowering plants vary in their climate needs. For example, marigold, zinnia, and sunflower thrive in warm temperatures, while petunia, pansy, and dianthus prefer cooler weather. Roses and jasmine grow in tropical to subtropical climates. High humidity may lead to fungal diseases, so good air circulation is important. Most plants require 5–6 hours of sunlight daily. Polyhouse cultivation allows farmers to grow climate-sensitive flowers year-round. Before planting, it’s essential to match the flower variety to local conditions. Knowing temperature tolerance, rainfall needs, and light preference helps ensure better flowering and yield.",
  },
  {
    question: "How often should flowering plants be watered?",
    answer:
      "Flowering plants need regular watering but not waterlogging. Overwatering can cause root rot and reduce flowering. Most flowering plants require watering once every 2–3 days during dry months and less frequently during rainy seasons. In summer, early morning or evening watering is best to reduce evaporation. Drip irrigation is ideal for ornamental plants as it delivers water directly to the roots while saving water and labor. Soil type, plant age, and weather should guide your watering schedule. Always allow the topsoil to dry slightly before the next watering to maintain healthy growth and blooming.",
  },
  {
    question: "How can farmers protect ornamental plants from pests and diseases?",
    answer:
      "Common pests include aphids, mealybugs, whiteflies, and thrips, while fungal diseases like powdery mildew and rust can affect blooms. Regular field inspections and good air circulation help prevent infestations. Neem oil, garlic-chili sprays, and bio-insecticides are effective organic options. Crop rotation and removing infected plant parts reduce the risk of disease spread. Avoid overwatering and overcrowding. Select disease-resistant varieties and use certified seeds or saplings. Integrated Pest Management (IPM) combines cultural, biological, and chemical methods to reduce reliance on pesticides, ensuring safe, sustainable cultivation. Farmers should consult agri-experts for region-specific treatments and dosage.",
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
