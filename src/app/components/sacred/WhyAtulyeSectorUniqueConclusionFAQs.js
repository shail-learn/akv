import React from 'react'
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/digestive/choose1.webp";
import choose2 from "../../../assets/images/digestive/choose2.webp";
import choose3 from "../../../assets/images/digestive/choose3.webp";
import choose4 from "../../../assets/images/digestive/choose4.webp";
import { FaqSlider } from '../FaqSlider';
import Titleslider from '../Titleslider';
import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image';
import Plant from "../../../assets/images/eco/future.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Why = () => {
    const heading = "Why Plant Culturally Revered Trees with Atulye Krishi Vana?"
    const fruitData = [
      {
        title: "Cultural Continuity with Ecological Value",
        image: choose1,
        flip: "These trees preserve centuries-old traditions while contributing to climate action, water conservation, and soil regeneration."
      },
      {
        title: "Women-Centric Livelihoods",
        image: choose2,
        flip: "Mahua and Sindoor processing creates income avenues for rural women, especially through SHGs and artisan collectives."
      },
      {
        title: "Sacred Utility in Everyday Life",
        image: choose3,
        flip: "From puja rituals and community celebrations to everyday health and nourishment, these trees serve spiritual, medicinal, and economic roles."
      },
      {
        title: "Biodiversity Enhancement",
        image: choose4,
        flip: "Kadam and Poovarasu attract pollinators and stabilize fragile landscapes, supporting both farming and local ecosystems."
      },
      {
        title: "Traditional Agroforestry Models",
        image: choose4,
        flip: "Farmers can interplant these trees within millet fields, homesteads, or forest fringes to diversify yield and increase resilience."
      },


    ];
    return (
      <>
        <Productlist heading={heading} fruitData={fruitData} />

      </>
    )
}



export const Atulye = () => {
    const heading = "Atulye Krishi Vana’s Support Services";
    const title= "We guide farmers, forest dwellers, NGOs, and institutions in cultivating these sacred and versatile trees with modern tools and traditional wisdom."
    const subtitle = "Our Services Include: "
    const className = "slider_height height_300";

    const card = [
      {
        title: "Quality Sapling Supply",
        description: "High-yielding, region-adapted plant stock"
      },
      {
        title: "Cultural Planting Modules",
        description: "Design templates for temples, schools, and tribal lands"
      },
      {
        title: "Harvest & Processing Training",
        description: "For flowers, oil seeds, and natural dyes"
      },
      {
        title: "Market Linkages",
        description: "Access to herbal, FPO, and religious markets"
      },
      {
        title: "Women SHG Support",
        description: "Tools and training for value-added product development"
      },
      {
        title: "Eco-Tourism Integration",
        description: "Designing interpretive trails and cultural gardens"
      },


    ];
    return (
      <>
        <FaqSlider
          classname={className}
          className="shailendra"
          card={card}
          heading={heading}
          title1={title}
          subtitle={subtitle}
        />


      </>
    );
}



export const Sector = () => {
    const heading = "Sector-Wise Use Cases "

    const boxslider = [
        {
            heading: "Tribal Communities",
            description: "Mahua-based food and distillation units"
        },
        {
            heading: "Temples & Trusts",
            description: "Sindoor trees for symbolic and ritual use"

        },
        {
            heading: "Urban Planners",
            description: "Kadam in ornamental parks and heritage streets"

        },
        {
            heading: "Coastal Development",
            description: "Paras Peepal for erosion control and wind protection"

        },
        {
            heading: "NGOs & Women SHGs",
            description: "Sindoor and Mahua processing and herbal kits"

        },


    ]
    return (
        <>
            <Titleslider heading={heading} boxslider={boxslider} />

        </>
    )
}


export const Unique = () => {
    const heading = `Unique Cultural Significance`

    const futurePlans = [
      `<b>Mahua  –</b> Spirit tree of tribal India; celebrated in songs, rituals, and seasonal dances`,
      `<b>Kadam –</b> Tree of Krishna Leela and poetic imagery in Indian folklore`,
      `<b>Sindoor –</b> Rooted in the identity of Indian married women and temple rituals`,
      `<b>Poovarasu –</b> Known as the 'Ocean Peepal'; symbolizes resilience and sanctuary`,

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



export const Conclusion = () => {
    const heading = "Conclusion: Grow Trees That Tell India’s Story";
    const description =
      "India’s sacred and culturally revered trees offer more than just environmental services—they represent centuries of wisdom, faith, and resilience. Through Atulye Krishi Vana, these species can find new life in modern landscapes—be it in a school, a coastal temple, a tribal hamlet, or an urban park. <br/><br/> Let these trees be storytellers and guardians of land, life, and legacy. <br/><br/> <b>Plant reverence. Grow resilience. Nurture tradition.</b>";
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
    "Why is Mahua considered sacred in tribal communities?";
  const Faqdescription = `Mahua (Madhuca longifolia) is revered by tribal groups for its deep cultural, nutritional, and spiritual relevance. The flowers are collected during seasonal festivals like Sarhul and Karma, fermented into traditional brews, and offered in rituals. Its shade is used for gatherings, and elders pass down oral history under its canopy. Tribes view Mahua as a “kalpavriksha” (wish-fulfilling tree) because it sustains food, medicine, and income year-round. Its presence in sacred groves protects biodiversity while also sustaining community identity. Planting Mahua helps preserve indigenous knowledge systems while offering high ecological and economic returns.`;
  const FaqsData = [
    {
      question: "Can Kadam trees be integrated into spiritual landscapes and public parks?",
      answer:
        " Yes, Kadam (Neolamarckia cadamba) is a perfect fit for temple gardens, school courtyards, and public parks. With its fragrant, ball-shaped yellow flowers and fast growth, it provides shade, aesthetic beauty, and pollinator support. Kadam is tied to Lord Krishna’s leelas, making it popular during Janmashtami festivals. Urban planners use it in spiritual trails, meditation gardens, and cultural walkways. The tree’s ornamental charm and cultural legacy attract devotees and tourists alike. Its soft wood also makes it useful for lightweight crafts. Kadam serves both visual appeal and cultural storytelling in modern landscapes.",
    },
    {
      question:
        "How is Sindoor tree cultivation relevant to rural women and SHGs?",
      answer:
        " Sindoor (Bixa orellana) trees produce seeds that yield annatto, a natural dye used in traditional sindoor and tilak powders. For rural women and Self-Help Groups (SHGs), cultivating Sindoor offers a unique opportunity to engage in natural cosmetic and ritual product markets. Women can process and package the dye for use in temples, beauty products, and even food coloring. It creates value-added livelihood opportunities rooted in cultural traditions. With minimal inputs and high cultural demand, this tree empowers local women, preserves heritage, and promotes sustainable enterprise in both tribal and peri-urban regions.",
    },
    {
      question: "What role does Paras Peepal play in coastal plantation programs?",
      answer:
        "Paras Peepal (Thespesia populnea), also known as Poovarasu, thrives in coastal zones and is traditionally planted near temples and seashores. Its salt tolerance and wind resistance make it ideal for erosion control, cyclone mitigation, and shoreline stabilization. It creates shelterbelts that protect farmland and infrastructure from saline winds. The tree also supports coastal biodiversity by attracting pollinators and providing shade. Its wood and bark are used in Ayurveda, adding medicinal value. Paras Peepal’s spiritual status ensures community engagement in its care, making it a culturally sensitive solution to ecological challenges in coastal India.",
    },
    {
      question: "Are these culturally revered trees suitable for agroforestry systems?",
      answer:
        "Yes. Trees like Mahua, Sindoor, and Kadam can be seamlessly integrated into agroforestry systems. Mahua thrives in mixed cropping with millets or pulses, providing seasonal income and organic mulch. Sindoor, being a shrub-sized tree, fits along field boundaries or as intercrops. Kadam offers shade for understorey herbs or fodder plants. These species improve soil structure, enhance water retention, and support biodiversity. Additionally, their cultural significance ensures community care, reducing tree mortality. Farmers benefit not only from timber or non-timber produce but also from spiritual and social cohesion that strengthens stewardship of the land.",
    },
    {
        question: "How long does it take for Mahua or Sindoor trees to start yielding?",
        answer:
          "Mahua trees typically begin flowering by their 7th or 8th year and reach full maturity by 15 years. Their productive lifespan extends for decades, offering consistent yields of flowers and seeds every year. Sindoor trees mature faster—usually within 3 to 4 years—and begin seed production by the 5th year. Proper soil preparation, mulching, and pruning can improve both yield and quality. With the right guidance, these species offer long-term returns with minimal input, making them ideal for low-resource farmers and community forestry projects under the Atulye Krishi Vana model.",
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
