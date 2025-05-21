import React from 'react'
import PartnerBg from "../../../assets/images/teak/contact.webp";
import choose1 from "../../../assets/images/teak/choose1.webp";
import choose2 from "../../../assets/images/teak/choose2.webp";
import choose3 from "../../../assets/images/teak/choose3.webp";
import choose4 from "../../../assets/images/teak/choose4.webp";
import { Productlist } from '../Productlist';
import Titleslider from '../Titleslider';
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';

export const Sustainable = () => {
    const heading = "Athulye Krishi Vana: A Step Towards Sustainable Teak Cultivation";
    const description =
        "Athulye Krishi Vana is a agroforestry initiative aimed at promoting sustainable cultivation and economic empowerment of farmers. It integrates:";

    const points = [
        {
            item: "Scientific teak farming methods for higher yields."
        },
        {
            item: "Eco-friendly practices to prevent soil degradation."
        },
        {
            item: "Market linkage support to ensure fair pricing for farmers."
        },
    ]

    return (
        <section
            className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full"
            style={{ backgroundImage: `url(${PartnerBg.src})` }}
        >
            {/* Content */}
            <div className="relative z-10 h-full flex  px-4 md:px-20 max-w-5xl">
                <div className="max-w-7xl text-white text-left pl-3 md:pl-[4rem] mt-5">
                    <h2 className="md:w-10/12 w-full text-3xl md:text-4xl leading-snug font-bold mb-6 md:mb-12 redhat">
                        {heading}
                    </h2>
                    <p
                        className="mb-4 text-sm md:text-base md:w-2/3 w-full"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
                    <ul className='ps-4 list-disc'>
                        {points.map((item, index) => (
                            <li key={index} className="text-sm md:text-base md:w-2/3 w-full">{item.item}</li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    )
}


export const Objectives = () => {
    const heading = "Objectives of Athulye Krishi Vana"
    const fruitData = [
        {
            title: "Encourage responsible teak cultivation",
            image: choose1,
        },
        {
            title: "Improve farmer income",
            image: choose2,
        },
        {
            title: "Enhance forest cover",
            image: choose3,
        },
        {
            title: "Reduce illegal logging",
            image: choose4,
        },



    ];
    return (
        <>
            <Productlist heading={heading} fruitData={fruitData} />

        </>
    )
}


export const Benefits = () => {
    const heading = "Benefits of Athulye Krishi Vana’s Approach"
    const boxslider = [
        {

            heading: "Better yield",
            description: 'Better yield through optimized spacing, pruning, and fertilization techniques. ',
        },
        {

            heading: "Faster growth cycles",
            description: 'Faster growth cycles with improved nursery practices.',
        },
        {

            heading: "Access to certified teak markets",
            description: 'Access to certified teak markets, ensuring premium prices for farmers.',
        },
        {

            heading: "Faster growth cycles",
            description: 'Faster growth cycles with improved nursery practices.',
        },

    ]
    return (
        <>
            <Titleslider heading={heading} boxslider={boxslider} />
        </>
    )
}



export const Faqs = () => {
    const Faqheading =
        "How can I improve the growth rate of teak trees?";
    const Faqdescription = `To boost growth, farmers should prepare the soil well before planting, ensuring proper aeration and good drainage. Regular application of organic compost, nitrogen-based fertilizers, and potassium enhances tree strength and development. Thinning—removing weaker trees—helps reduce competition for sunlight, water, and nutrients. Pruning lower branches allows the tree to focus energy on vertical growth.`;
    const FaqsData = [
        {
            question: "How can I improve the growth rate of teak trees?",
            answer:
                "To boost growth, farmers should prepare the soil well before planting, ensuring proper aeration and good drainage. Regular application of organic compost, nitrogen-based fertilizers, and potassium enhances tree strength and development. Thinning—removing weaker trees—helps reduce competition for sunlight, water, and nutrients. Pruning lower branches allows the tree to focus energy on vertical growth. Avoid excessive fertilizer use, as it can weaken the wood’s natural strength. Rotating between seasonal crops and teak in early years can enrich the soil. With proper care, teak trees can show noticeable height and girth increase within the first 5-7 years.",
        },
        {
            question:
                "What are the signs of unhealthy teak trees?",
            answer:
                "Unhealthy teak trees may show yellowing leaves, stunted growth, bark cracks, or excessive leaf shedding. These symptoms could indicate nutrient deficiency, pest infestation, or improper watering. Fungal infections like leaf blight (Rhizoctonia solani) cause dark patches on leaves, while pests like the teak defoliator caterpillar can weaken trees by eating foliage. Poor drainage leading to waterlogged roots can also cause growth problems. Regular inspection helps detect issues early. Using organic pesticides, balanced fertilizers, and timely pruning helps maintain tree health. Farmers should also avoid planting teak in overly compacted or nutrient-poor soil.",
        },
        {
            question: "Can teak trees be grown in waterlogged areas?",
            answer:
                "No, teak does not grow well in waterlogged or clay-heavy soils. It prefers well-drained, sandy loam or lateritic soil with a pH between 6.0 and 7.5. Excess water in the root zone can cause root rot, fungal infections, and weak trunk formation. If the land is prone to flooding, farmers should create raised beds or trenches to direct water away from the roots. Drainage canals around the plantation help prevent excessive moisture buildup. Regular soil testing and improving aeration by adding organic material like compost or sand can also enhance teak growth in semi-moist areas.",
        },
        {
            question: "What is the ideal method for pruning teak trees?",
            answer:
                "Pruning is essential to produce high-quality, straight teak wood. Farmers should prune low-hanging, dead, or crowded branches from the third to fifth year of growth. The goal is to remove unnecessary side branches while keeping the central trunk strong and upright. Pruning should be done carefully using sharp, clean tools to prevent infections. Avoid cutting the main stem or over-pruning, as this can reduce the tree’s strength. The best time for pruning is during the dry season to allow quick healing. Proper pruning improves timber quality, increases sunlight exposure, and helps trees grow taller and straighter.",
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
