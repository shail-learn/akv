import React from 'react'
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Shape = () => {
  const heading = "Shape Your Space with Living Sculpture";
  const description =
    "Palms and cycads are more than landscape plants—they are statements of elegance, serenity, and thoughtful planning. At Atulye Krishi Vana, we enable farmers, designers, civic bodies, and homeowners to integrate these plants meaningfully and sustainably. <br/> Whether you're designing a resort promenade or refreshing a courtyard with timeless accents, palms like Foxtail, Fishtail, and Bottle can transform any space into a visual sanctuary.  <br/><br/> <b>Let your spaces rise with grace.Partner with Atulye Krishi Vana to make ornamental palms a part of your green story. </b>";
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
  "Can palms be used in water-scarce areas or drought-prone landscapes?";
const Faqdescription = `Yes, once established, many palms like Foxtail and Bottle Palm are drought-tolerant. Their deep-rooted systems tap into groundwater, making them ideal for xeriscaping and low-maintenance public landscapes. During the first year, regular watering is crucial, but afterward, they require minimal moisture. Mulching around the base conserves water and keeps roots cool. These palms thrive in places with irregular rainfall, provided there’s good drainage. By replacing thirsty lawns or seasonal flowers with palms, property owners can reduce water bills, save time, and support climate-resilient green zones without compromising on visual appeal.`;
const FaqsData = [
  {
    question: "Do palms have any pest or disease issues in Indian conditions?",
    answer:
      "While generally hardy, ornamental palms can face issues like scale insects, mealybugs, or fungal infections, especially in humid or overcrowded conditions. Foxtail Palms may occasionally show yellowing if soil lacks magnesium. Fishtail Palms are more sensitive to overwatering, which can lead to root rot. Good spacing, proper drainage, and sunlight exposure prevent most issues. Organic pest control options like neem oil sprays and beneficial insect releases can manage infestations. Regular health checks—looking at frond color and trunk condition—ensure early intervention. Overall, palms are far less pest-prone than many broadleaf ornamental plants. ",
  },
  {
    question:
      "How do Bottle Palms perform in pots or containers for indoor or terrace use?",
    answer:
      "Bottle Palms are excellent for container gardening due to their slow growth and compact size. Choose large, sturdy pots with drainage holes and fill them with sandy, well-aerated soil. They prefer outdoor exposure but can tolerate semi-shaded verandas and bright indoor atriums. Regular but moderate watering, along with monthly feeding using balanced liquid fertilizer, maintains their appearance. In colder climates or during winter, move potted Bottle Palms indoors or to protected spaces, as they’re frost-sensitive. Re-potting every 2–3 years helps avoid root binding. With care, they serve as long-lasting living sculptures in small spaces.",
  },
  {
    question: "Can palms be interplanted with flowering shrubs or ground covers?",
    answer:
      "Yes, palms pair beautifully with flowering plants and ground covers. Since they grow upright and don’t spread widely, their base area can be creatively used. Fishtail Palms, with their clustered growth, work well with ferns or shade-tolerant species. Foxtail and Bottle Palms, being more upright and clean-trunked, can be surrounded by low-growing options like Alternanthera, Wedelia, or seasonal flowers. These combinations enhance aesthetics while stabilizing soil and preventing weed growth. When designing mixed beds, ensure companion plants don’t compete for nutrients or water during the palms’ early growth stage. Layered planting enriches texture and biodiversity.",
  },
  {
    question: " Are these palms safe to plant near walls, buildings, or pipelines?",
    answer:
      "Yes, most ornamental palms have non-invasive root systems, making them safe for planting near structures. Unlike large trees with spreading roots, Foxtail, Bottle, and Fishtail Palms have fibrous root balls that grow downward, not outward. They rarely cause damage to foundations, plumbing, or pavements when planted at a safe distance (typically 2–3 feet from walls). This makes them ideal for narrow boulevards, courtyards, or paved environments. However, in confined planter boxes or poorly drained soils, root stress can occur. Providing ample space and drainage ensures structural safety and long-term plant health.",
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
