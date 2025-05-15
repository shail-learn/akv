"use client"
import React, { useState } from 'react'
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
import img01 from "../../../assets/images/guava/asian-farmer.webp";
import leftimg from "../../../assets/images/orange/family-farmer.webp";
import icon01 from "../../../assets/images/orange/icon01.webp";
import icon02 from "../../../assets/images/orange/icon02.webp";
import fruits from "../../../assets/images/orange/orange.webp";
import contactbg from "../../../assets/images/orange/contactbg.webp";



import Image from 'next/image';
export const Pruning = () => {
    const plantingData = {
        title: "Pruning and Maintenance",
        description: "Pruning is essential to maintain the health and productivity of orange trees.",

        steps: [
            "Remove water shoots, weak branches, and diseased parts.",
            "Keep the tree canopy open to allow sunlight penetration.",
            "Avoid excessive pruning, as it may reduce fruit-bearing potential.",
        ],
        shortdesciption: `Pruning should ideally be done after harvesting to encourage new growth for the next season.`,
        imageSrc: img01,
    };

    return (
        <>
            <section className='py-16 md:py-24' >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16'>
                        <div className="md:w-1/2 w-full">
                            <div className='relative'>
                                <Image
                                    src={plantingData.imageSrc}
                                    alt="Planting Techniques"
                                    width={600}
                                    height={400}
                                    className="rounded-[20px]"
                                    style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                                />
                                <div className="absolute inset-0 -z-10 h-[110%] w-[96%] md:w-full translate-x-6 -translate-y-3 md:-translate-y-4 bg-white border border-gray-400 rounded-[20px] shadow-md"></div>

                            </div>

                        </div>
                        <div className='lg:w-6/12  w-12/12'>

                            <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C]">{plantingData.title}</h2>
                            <p className="my-6 text-[15px] redhat font-normal md:text-base text-black">{plantingData.description}</p>

                            <ul className="list-disc pl-5 text-black mb-4">
                                {plantingData.steps.map((step, index) => (
                                    <li key={index} className="text-[15px] md:text-base redhat font-normal text-black">
                                        {step}
                                    </li>
                                ))}
                            </ul>
                            <p
                                className="text-[15px] md:text-base font-normal redhat text-black mb-10 md:mb-14"
                                dangerouslySetInnerHTML={{ __html: plantingData.shortdesciption }}
                            ></p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}


export const Harvesting = () => {
    const harvestHandlingData = {
        image: leftimg,
        sections: [
            {
                title: "Harvesting Handling",
                icon: icon01,
                points: [
                    "Use sharp scissors or clippers to cut the fruit, leaving a small portion of the stem attached.",
                    "Avoid pulling the fruit, as this can damage the tree.",
                    "Harvest in the morning when temperatures are cooler to prevent dehydration.",
                ],
            },
            {
                title: "Post Harvesting Handling",
                icon: icon02,
                points: [
                    "Sort fruits based on size and quality.",
                    "Store at cool temperatures (5–10°C) to extend shelf life.",
                    "Avoid stacking heavy loads, as oranges bruise easily.",
                ],
            },
        ],
    };

    return (
        <>

            <section className="flex flex-col md:flex-row gap-6 md:gap-10 bg-[#F4A940]">
                {/* Left Image */}
                <div className="w-full md:w-5/12">
                    <Image
                        src={harvestHandlingData.image}
                        alt="Farmer Family"
                        width={800}
                        height={500}
                        className="w-full h-full md:h-[630px] object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-7/12 bg-[#F4A940] p-6 md:p-12 space-y-10">
                    {harvestHandlingData.sections.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="text-3xl md:text-4xl mt-6 redhat font-medium mb-8 pb-5 border-b border-black border-opacity-50">
                                {section.title}
                            </h2>
                            <div className="flex items-start gap-4 md:w-[80%]">
                                {/* Icon */}
                                <div className="min-w-[30px] mt-1 mr-6">
                                    <Image
                                        src={section.icon}
                                        alt={`${section.title} icon`}
                                        width={100}
                                        height={100}
                                        className='object-contain w-28 md:w-28 h-auto'
                                    />
                                </div>
                                {/* Points */}
                                <ul className="list-disc space-y-2 text-black/80 ml-4">
                                    {section.points.map((point, i) => (
                                        <li key={i} className="text-base">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}


export const FAQs = () => {
    const heading = 'How should ornages be graded for market?'
    const description = `Oranges thrive in a subtropical to tropical climate with temperatures ranging from 13°C to 37°C. They require warm days and cool nights for optimal growth. While they can tolerate short periods of cold, prolonged frost can damage the trees and reduce fruit yield.`
    const faqs = [
        {
            question: 'What is the ideal climate for growing oranges?',
            answer: 'Oranges thrive in a <b>subtropical to tropical climate</b> with temperatures ranging from 13°C to 37°C. They require warm days and cool nights for optimal growth. While they can tolerate short periods of cold, prolonged frost can damage the trees and reduce fruit yield. Areas with moderate humidity and well-distributed rainfall are ideal. However, excessive moisture can lead to fungal diseases. If growing in drier regions, <b>proper irrigation</b> is essential. Strong winds can also damage flowers and fruits, so planting windbreaks is advisable. Selecting a suitable location ensures <b>healthy tree growth and high fruit production</b>.',
        },
        {
            question: 'How long does it take for an orange tree to bear fruit?',
            answer: 'The time an orange tree takes to bear fruit depends on the variety and growing conditions. Generally, a tree grown from seed takes <b>6 to 8 years</b>, while those grown from grafted saplings bear fruit within <b>3 to 5 years</b>. Proper care, including <b>regular watering, fertilization, and pest control</b>, accelerates fruiting. Pruning helps direct energy to fruit development. Some early-bearing varieties, like Valencia and Navel oranges, may produce fruit within <b>2 to 3 years</b> under ideal conditions. However, the first few years may yield smaller harvests before reaching full production.',
        },
        {
            question: 'Which type of soil is best for orange farming?',
            answer: 'Oranges grow best in well-drained sandy loam soil rich in organic matter. The ideal soil pH ranges between 5.5 and 7.5, allowing efficient nutrient absorption. Heavy clay soils retain too much water, causing root rot, while excessively sandy soils drain too fast, requiring frequent irrigation. To improve soil health, farmers should add organic compost and mulch to retain moisture. Regular soil testing ensures proper nutrient balance, preventing deficiencies. Avoid waterlogging by planting on raised beds or using drainage channels. Well-prepared soil contributes to strong root development, disease resistance, and higher yields.',
        },
        {
            question: 'How often should orange trees be watered?',
            answer: 'Watering frequency depends on the tree’s age, soil type, and climate. Young orange trees need water 2-3 times per week to establish strong roots. Mature trees require deep watering once a week, ensuring water reaches the root zone (up to 2 feet deep). Overwatering can lead to root rot, while under-watering affects fruit size and taste. During the flowering stage, consistent moisture is crucial, but reducing water before harvest enhances sweetness. In dry regions, drip irrigation is recommended for efficient water use. Mulching around the base helps retain soil moisture and reduces evaporation.',
        },
        {
            question: 'What are the common nutrient deficiencies in orange trees?',
            answer: 'Oranges often suffer from deficiencies in nitrogen, potassium, zinc, magnesium, and iron. Symptoms include yellowing leaves, poor fruit development, and weak tree growth. Nitrogen deficiency causes pale green leaves, while potassium deficiency results in small fruits with thin peels. Zinc and iron deficiencies lead to chlorosis (yellowing between leaf veins). Regular soil testing helps diagnose and correct imbalances. Applying balanced fertilizers, organic compost, and foliar sprays prevents nutrient-related issues. Farmers should avoid excessive nitrogen during fruiting, as it encourages leaf growth instead of fruit production. Healthy nutrient levels ensure high-quality, juicy oranges.',
        },
        {
            question: 'How can I improve the fruit size and sweetness of my oranges?',
            answer: 'To increase fruit size and sweetness, ensure trees receive balanced nutrients, adequate sunlight, and proper irrigation. Applying potassium-rich fertilizers before fruiting improves sugar content. Pruning excess branches allows better sunlight penetration, enhancing fruit quality. Controlled irrigation is key—reducing water before harvest boosts sweetness. Avoid excessive nitrogen, as it promotes leaves over fruit. Maintaining optimal soil moisture and applying organic mulch also helps. If trees produce excessive small fruits, thinning out some early-stage fruits directs nutrients to fewer, larger oranges. Well-managed trees yield bigger, sweeter, and juicier oranges, maximizing market value.',
        },

    ];


    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <section className='relative text-center md:text-left pt-12 pb-12 md:pt-16 md:pb-2'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative'>
                    <div className=' w-full w-12/12'>
                        <h2 className='text-xl md:leading-[1.3] md:text-2xl font-semibold text-center md:text-left redhat text-[#1B453C] mb-8'>FAQs</h2>

                    </div>
                    <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-12'>

                        <div className='lg:w-6/12  w-full w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-semibold text-center md:text-left redhat text-black mb-8'>{heading}</h2>
                            <p className='text-[#1B453C] text-[15px] leading-6 text-justify my-4' dangerouslySetInnerHTML={{ __html: description }}>
                            </p>
                            <Image src={fruits} className='w-2/3 mx-auto md:w-full h-auto' alt='image' />

                        </div>
                        <div className='lg:w-6/12  w-full w-12/12'>

                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className='mb-4'
                                >

                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className={`w-full text-left flex items-center rounded-2xl justify-between p-4
                      transition-all duration-300
                      ${openIndex === index ? 'bg-[#E9A343] text-black rounded-bl-[0px] rounded-br-[0px] ' : 'bg-[#D9D9D9] text-[#000]'}`}

                                    >

                                        <span className={`font-medium w-[90%]
                      ${openIndex === index ? 'text-lg' : 'text-lg'}`}>
                                            {faq.question}
                                        </span>
                                        {openIndex === index ? (
                                            <HiChevronUp className='text-lg' />
                                        ) : (
                                            <HiChevronDown className='text-lg' />
                                        )}
                                    </button>


                                    <div
                                        className={`overflow-hidden bg-[#E9A343] rounded-bl-2xl rounded-br-2xl px-4 text-black transition-[max-height] duration-300 ease-in-out
                                ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className=' pt-0  mb-6 py-4 text-[15px] md:text-base font-light text-[#00] text-opacity-75' dangerouslySetInnerHTML={{__html: faq.answer}}>

                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}


export const Join = () => {
    return (
        <>

            <section className="pt-14 pb-14 lg:pt-20 lg:pb-20 relative " style={{ background: `url(${contactbg.src}) center center / cover no-repeat` }}>
                <div className="absolute inset-0 bg-black bg-opacity-35"></div>
                <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-white text-center">
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
                        <div className='md:w-5/12  w-12/12'>
                            <div className="flex flex-col h-full">
                                <div className="">
                                    <h2 className="text-4xl md:leading-[1.3] md:text-5xl md:text-left font-bold redhat text-white">
                                    Join Hands with <br/> Atulye Today!
                                    </h2>
                                </div>
                                <div className="mt-6 h-full text-left">

                                    <ul className="mb-6 text-md">
                                        <li>
If you’re planning to grow oranges and want expert guidance, premium resources, and market support, Athulya is your perfect partner. Let’s cultivate success together!
</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-5/12  w-12/12'>

                            <div className="bg-white text-black p-6 rounded-3xl shadow-lg w-full max-w-md">
                                <h2 className="text-xl font-medium mb-4 text-center md:text-left">Book a Visit</h2>
                                <form>
                                    <div className='flex flex-wrap gap-4 mb-4'>
                                        <input type="text" className='outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]' placeholder='Location: ' />
                                        <input type="email" className='outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]' placeholder='Email:' />
                                        <input type="text" className='outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]' placeholder='Phone Number' />
                                    </div>

                                    <button className='poppins mt-10  font-normal text-white w-full py-3 rounded-[10px] bg-[#1B453C]'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}
