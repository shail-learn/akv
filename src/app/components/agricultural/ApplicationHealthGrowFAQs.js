import React from 'react'
import Titleslider from '../Titleslider'
import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image';
import Plant from "../../../assets/images/eco/future.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Application = () => {
    const heading = "Application Use Cases Across Sectors "

    const boxslider = [
        {
            heading: "Households",
            description: "Backyard vegetable gardens, self-reliant kitchens"
        },
        {
            heading: "Urban Agriculture",
            description: "Terrace gardens, kitchen herb pots"

        },
        {
            heading: "SHGs & Women Farmers",
            description: "Seedling trays, garlic oil/paste production"

        },
        {
            heading: "Educational Institutions",
            description: "School nutrition gardens, learning modules"

        },
        {
            heading: "Ayurvedic & Organic Brands",
            description: "Herbal raw material sourcing"

        },


    ]
    return (
        <>
            <Titleslider heading={heading} boxslider={boxslider} />

        </>
    )
}



export const Health = () => {
    const heading = `Health, Nutrition, and Culinary Benefits`

    const futurePlans = [
      `<b>Dhaniya  –</b> Aids digestion, rich in antioxidants, and supports liver function.`,
      `<b>Pyaj –</b> Contains flavonoids, reduces inflammation, and boosts immunity.`,
      `<b>Lashun –</b> Lowers cholesterol, improves gut health, and acts as a natural antibiotic.`,


    ];


    return (
      <>

        <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-20">
          <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-20">

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-black mb-4 md:mb-20"
               dangerouslySetInnerHTML={{__html : heading}}
              />

              <ul className="mt-6 space-y-4">
                {futurePlans.map((plan, index) => (
                  <li key={index} className="flex  text-left space-x-3">
                    <span className="w-6 h-6 text-[#1B453C] flex items-center justify-center rounded-full">
                      <MdCheckCircle className='w-6 h-6' />
                    </span>
                    <p
                      className="text-[#141414] redhat"
                      dangerouslySetInnerHTML={{ __html: plan }}
                    />
                  </li>
                ))}
              </ul>
              <p className='mt-6 md:mt-10'>Together, these crops not only flavor the food but fortify health—forming a perfect triad of nutrition, taste, and sustainability.</p>


            </div>
            <div className=" w-full md:w-1/2">

              <Image
                src={Plant}
                alt="Planting"
                width={200}
                height={200}
                className="w-full h-full"
              />

            </div>
          </div>
        </section>
      </>
    )
}

export const Grow = () => {
    const heading = "Grow What You Eat, Sell What You Don’t";
    const description =
      "Crops like coriander, onion, and garlic represent the power of small-scale, high-value agriculture. Whether you’re feeding your family, supplying a local vendor, or selling through farmer markets, these crops offer quick turnaround, cultural relevance, and steady demand. <br/><br/> At Atulye Krishi Vana, we believe kitchen crops are gateways to food security, income stability, and ecological health. With proper planning and our support, even the smallest piece of land can yield flavor, healing, and economic opportunity.";
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
    "Can these kitchen crops be grown in small balcony gardens or pots?";
  const Faqdescription = `Yes, Dhaniya, Pyaj, and Lashun can be successfully grown in containers or balcony gardens with minimal space. Use 8–12 inch deep pots with well-draining soil. Dhaniya prefers shallow wide pots and frequent light watering. Onion and garlic grow well in recycled buckets or grow bags with loose soil. Ensure 5–6 hours of sunlight daily. You can use organic compost and kitchen waste as fertilizer. These crops make excellent additions to urban gardening efforts, providing both nutrition and freshness right at home.`;
  const FaqsData = [
    {
      question: "How often should Dhaniya, Pyaj, and Lashun be watered during their growth?",
      answer:
        "Dhaniya requires frequent but light watering—every 2–3 days—especially during early growth. Pyaj needs moderate watering every 4–5 days, ensuring bulbs are not waterlogged. Lashun prefers a slightly drier soil profile, needing watering once a week in cool climates and every 4–5 days in warmer weather. Overwatering should be avoided in all three cases to prevent fungal rot and disease. Drip irrigation or a watering can with a narrow spout helps regulate moisture for these crops, especially in kitchen gardens or raised beds.",
    },
    {
      question:
        "What are the best organic fertilizers for these kitchen crops?",
      answer:
        "Organic options like compost, vermicompost, and aged cow dung are excellent for all three crops. Dhaniya responds well to foliar sprays of diluted panchagavya or seaweed extract. Onion and garlic benefit from neem cake or bone meal, which supports bulb formation and disease resistance. For leafy growth, adding a handful of wood ash or crushed eggshells once a month is effective. Avoid heavy nitrogen-based inputs, especially for garlic, as they can lead to excess foliage and smaller bulbs. Crop rotation and organic mulching also support nutrient cycling.",
    },
    {
      question: "How long does it take to harvest Dhaniya, Pyaj, and Lashun?",
      answer:
        "Dhaniya leaves can be harvested within 30–35 days of sowing, and seeds are ready in about 90–110 days. Pyaj typically takes 100–120 days to form mature bulbs, depending on the variety. Lashun has a longer cycle, needing 130–150 days for full bulb development. However, green garlic leaves can be harvested much earlier (within 60 days). For all crops, harvesting at the right stage is key to retaining flavor, aroma, and nutritional value. Staggered sowing ensures continuous supply throughout the season.",
    },
    {
      question: "Are these crops prone to pests or diseases, and how can they be managed naturally?",
      answer:
        "Yes, but natural remedies are effective. Dhaniya may attract aphids or mildew, which can be controlled using neem oil spray or diluted soap solution. Onion and garlic can face thrips and fungal rot. Ensure good spacing, avoid overhead watering, and use garlic-chili sprays as deterrents. Crop rotation and intercropping with marigold or tulsi help prevent pest buildup. Regular inspection and hand-removal of affected leaves or insects is an effective first step in kitchen gardens. Avoid chemical pesticides, especially if harvesting for home use.",
    },
    {
        question: "Can kitchen crops like these be cultivated all year round in India?",
        answer:
          "With proper planning and regional adjustments, yes. Dhaniya can be grown in rabi, summer, and early kharif seasons in most parts of India. Onion has three crop seasons—kharif (June–July), late kharif (August–September), and rabi (October–November). Garlic is mostly grown in rabi season but can also adapt to early kharif in cooler areas. Microclimatic factors like rainfall, sunlight hours, and soil moisture should be considered. Using protective nets, mulching, or even shade cloth allows flexibility in year-round cultivation, especially in home gardens or polyhouses.",
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
