import React from 'react'
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/forest/choose1.webp";
import choose2 from "../../../assets/images/forest/choose2.webp";
import choose3 from "../../../assets/images/forest/choose3.webp";
import choose4 from "../../../assets/images/forest/choose4.webp";


import { FaqSlider } from '../FaqSlider';
import Titleslider from '../Titleslider';
import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image';
import Plant from "../../../assets/images/eco/future.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Why = () => {
    const heading = "Why Cultivate Wild Forest Giants like Samel?"
    const fruitData = [
      {
        title: "Visual Heritage and Identity",
        image: choose1,
        flip: "These native bloomers carry generational memory—planted in temples, tribal hamlets, and forest fringes. They connect people to place and to nature."
      },
      {
        title: "Low Maintenance, Long-Term Gains",
        image: choose2,
        flip: "Once established, trees like Samel require minimal care. They offer ecological dividends in the form of water retention, pollinator presence, and soil stability."
      },
      {
        title: "Multi-Use Biomass",
        image: choose3,
        flip: "From herbal medicine to craft wood and mattress fiber, forest giants like Samel diversify rural incomes while enhancing ecological value."
      },
      {
        title: "Educational and Research Value",
        image: choose4,
        flip: "Samel serves as a living classroom for botany, forestry, climate education, and traditional knowledge, especially in school or institutional plantations."
      },

    ];
    return (
      <>
        <Productlist heading={heading} fruitData={fruitData} />

      </>
    )
}



export const Atulye = () => {
    const heading = "Atulye Krishi Vana’s Support Model";
    const subtitle = "We Offer:"
    const className = "slider_height height_300";

    const card = [
        {
            title: "Certified Saplings",
            description: "Disease-free, regionally adapted planting material"
        },
        {
            title: "Site Planning",
            description: "Soil testing, plantation layout, and ecological matching"
        },
        {
            title: "Training Modules",
            description: "Tree care, pruning, silk fiber collection, and medicinal use"
        },
        {
            title: "Community Engagement",
            description: "Involving schools, SHGs, and local governance bodies in planting drives"
        },
        {
            title: "Conservation Projects",
            description: "Integration with biodiversity corridors and state afforestation missions"
        },



    ];
    return (
        <>
            <FaqSlider
                classname={className}
                className="shailendra"
                card={card}
                heading={heading}
                subtitle={subtitle}
            />


        </>
    );
}

export const Use = () => {
    const heading = "Use Cases Across Sectors"

    const boxslider = [
        {
            heading: "Forestry Departments",
            description: "Forest enrichment and buffer plantation programs"
        },
        {
            heading: "Schools & Colleges",
            description: "Native tree gardens and botanical study modules"

        },
        {
            heading: "Tourism Boards",
            description: "Eco-tourism zones with seasonal flowering attractions"

        },
        {
            heading: "SHGs & Artisans",
            description: "Crafting, silk stuffing, and herbal processing ventures"

        },
        {
            heading: "CSR Initiatives",
            description: "High-visibility plantation drives in semi-urban and forest-edge zones"

        },


    ]
    return (
        <>
            <Titleslider heading={heading} boxslider={boxslider} />

        </>
    )
}


export const Sustainability = () => {
    const heading = `Sustainability Impact`

    const futurePlans = [
        `<b>Carbon Sequestration  –</b> Captures atmospheric carbon through fast biomass growth`,
        `<b>Pollinator Corridors –</b> Strengthens bird and insect food chains`,
        `<b>Water Table Recharge –</b> Enhances infiltration and reduces runoff`,
        `<b>Native Habitat Restoration –</b> Reclaims degraded lands with indigenous flora`,


    ];


    return (
        <>

            <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-20">
                <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-20">

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-black mb-4 md:mb-20"
                            dangerouslySetInnerHTML={{ __html: heading }}
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



export const Planting = () => {
    const heading = "Planting Majesty, Preserving Heritage";
    const description =
        "Wild forest giants like Samel are not just trees—they are monuments of nature, carriers of culture, and engines of regeneration. <br/><br/> Under the Atulye Krishi Vana initiative, we encourage institutions, local bodies, and farmers to plant these towering icons for a more balanced and biodiverse future. Their flowers tell stories. Their roots bind the land. Their presence ensures ecological harmony. <br/><br/> <b>Stand tall with Samel. Restore forests. Celebrate native beauty.</b>";
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
        "What is unique about the Samel tree compared to other flowering trees?";
    const Faqdescription = `The Samel tree, also known as the Red Silk Cotton Tree, is distinguished by its massive height, thorny bark, and bright red flowers that bloom before new leaves emerge. Unlike many ornamental trees, it serves essential ecological roles in forest ecosystems by attracting pollinators like birds and bats. Its silk-like seed fiber is also harvested for mattress stuffing. With a striking visual presence and ecological value, Samel is both a forest giant and a cultural symbol across India.`;
    const FaqsData = [
        {
            question: "Can Samel be used outside forests, such as in urban or institutional landscapes?",
            answer:
                "Yes, Samel is well-suited for large public spaces, campuses, botanical gardens, and roadsides. Its early spring flowering and towering structure make it a natural focal point. It’s also resilient to urban conditions like air pollution and limited soil nutrition. Urban forestry programs often include Samel for its role in beautification, cooling microclimates, and supporting pollinators. Institutions use it to create seasonal biodiversity awareness. Proper spacing and early maintenance ensure healthy growth in non-forest settings.",
        },
        {
            question:
                "What are the ecological benefits of planting Samel trees?                ",
            answer:
                "Samel trees contribute to biodiversity by providing nectar for birds, bees, and bats. Their leaf litter improves soil fertility and supports microflora. With deep roots, they help stabilize soil, reduce erosion, and recharge groundwater. As large-canopy trees, they also play a role in reducing urban heat and capturing atmospheric carbon. Their blooming period marks seasonal shifts and supports ecological synchronization in forests and agroforestry landscapes, making them critical for habitat restoration.",
        },
        {
            question: "How long does it take for a Samel tree to mature and flower?",
            answer:
                "Samel trees typically begin flowering within 6 to 8 years, though this can vary depending on soil, climate, and care. Full maturity and maximum blooming potential are often seen after 10 to 12 years. Despite the wait, the tree offers long-term ecological and cultural rewards. Once established, it requires minimal maintenance and provides consistent flowering every spring. Its long lifespan and growth potential make it a valuable legacy plantation for communities and institutions. ",
        },
        {
            question: "Can the silk cotton from Samel be commercially used by rural communities?",
            answer:
                " Yes, the cotton-like fiber from Samel seed pods can be harvested and used for stuffing pillows, mattresses, and cushions. While it’s not suitable for spinning like cotton, it holds commercial value in local markets and handicrafts. Women’s Self-Help Groups (SHGs) can collect, clean, and package the fiber for sale. Atulye Krishi Vana can facilitate training and market linkages to support microenterprises based on silk cotton and other tree by-products.",
        },
        {
            question: "Does Samel require any special care or irrigation in the initial years?",
            answer:
                " In the first 1–2 years, Samel needs moderate care including staking, mulching, and watering during dry months. Once roots are well-established, the tree becomes drought-tolerant and requires minimal maintenance. It should be planted in open, sunlit areas with well-drained soil. Early pruning helps in achieving a strong central trunk. After establishment, its rapid vertical growth and broad canopy require very little intervention—making it ideal for long-term plantations with low input cost.",
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
