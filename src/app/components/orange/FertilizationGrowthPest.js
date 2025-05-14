import React from 'react'
import fertilizerImg from "../../../assets/images/orange/Fertilization.webp";
import impactbg from "../../../assets/images/orange/petbg.webp";
import Image from 'next/image';
import { FaqSlider } from '../FaqSlider';



export const Fertilization = () => {
    const fertilizationData = {
        heading: "Fertilization & Nutrient Management",
        description:
            "Oranges require proper fertilization to grow healthy and productive. The key nutrients include:",
        nutrients: ["Nitrogen", "Phosphorous", "Potassium"],
        subHeading: "Fertilizer Application Tips",
        tips: [
            "Apply organic manure twice a year—once before the rainy season and again after fruiting.",
            "Micronutrients like zinc, manganese, and iron should be sprayed during the growing season.",
            "Avoid over-fertilization, as it can lead to excessive vegetative growth at the cost of fruit production.",
        ],
    };

    return (
        <>
            <section className="flex flex-wrap md:flex-nowrap bg-[#1B453C]">

                <div className="w-full md:w-6/12">

                    <Image
                        src={fertilizerImg}
                        alt="Fertilizer"
                        className="w-full md:h-[800px] min-h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-6/12 p-6 md:p-12 text-white flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl redhat font-semibold mb-4">
                        {fertilizationData.heading}
                    </h2>
                    <div className=' mr-6  p-4'>


                        <p className="text-sm font-light redhat md:text-base mb-4 text-gray-200">
                            {fertilizationData.description}
                        </p>

                        <ul className="list-disc font-light redhat ml-6 mb-6 text-base md:text-lg">
                            {fertilizationData.nutrients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <h3 className="text-xl md:text-2xl redhat  font-normal mb-2">
                            {fertilizationData.subHeading}
                        </h3>

                        <ul className="list-disc redhat ml-6 space-y-2 text-gray-200 text-sm md:text-base">
                            {fertilizationData.tips.map((tip, index) => (
                                <li key={index}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}



export const Growth = () => {
    const heading = "Growth Regulators for Better Yield"
    const className = `slider_height orange_div`
    const title1 = "To prevent premature fruit drop and improve fruit retention, plant growth regulators are used:"

    const card = [
        {
            title: 'NAA (30 ppm): Helps in reducing early fruit drop.',
        },
        {
            title: 'These should be sprayed as per the tree’s growth cycle for the best results.',
        },
        {
            title: '2,4-D (20 ppm): Applied at flowering to enhance fruit set.',
        },
        {
            title: 'NAA (30 ppm): Helps in reducing early fruit drop.',
        },
        {
            title: 'These should be sprayed as per the tree’s growth cycle for the best results.',
        },
    ]
    return (
        <>
            <FaqSlider classname={className} title1={title1}   card={card} heading={heading} />


        </>
    )
}



export const Pest = () => {
    const heading = 'Pest and Disease Control';
    const impactData = [
        {
            title: "Powdery  Mildew",
            description: "White fungal patches appear on leaves. Treat with sulfur-based fungicides.",

        },
        {
            title: "Leaf Miners",
            description: "Cause curled leaves and stunted growth. Spray neem oil or an organic insecticide",

        },
        {
            title: "Sooty Mold",
            description: "Affects leaves and stems, caused by honeydew-secreting insects. Managing aphids and whiteflies can prevent it",

        },
        {
            title: "Whiteflies",
            description: "Suck sap from leaves, leading to yellowing. Use insecticidal soap or neem-based sprays",

        },
        {
            title: "Fruitflies",
            description: "Damage fruit by laying eggs inside. Use pheromone traps to monitor and reduce their population.",

        },
        {
            title: "Aphides",
            description:
                "Can spread viral diseases. Regular pruning and neem oil application help control them",

        },
        {
            title: "Citrus Canker",
            description:
                "Creates lesions on leaves and fruits. Copper-based sprays are effective in controlling this disease. Regular monitoring and early intervention are key to managing these issues effectively.",



        },

    ];
    return (
        <>
            <section className='relative text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20' style={{ background: `url(${impactbg.src})center center / cover no-repeat` }} >
                <div className="absolute h-full top-0 bottom-0 w-full bg-[#1B453C] opacity-1 mix-blend-multiply"></div>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='lg:w-12/12  w-full  w-12/12'>
                        <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-center text-white mb-20'>{heading}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                        {impactData.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-start p-2 lg:p-6"
                            >
                                <div className='w-14 h-14 rounded-lg shrink-0 bg-[#FAE084]' >

                                </div>
                                <div className='pl-4 text-white text-left'>
                                    <h3 className="text-lg md:text-xl font-medium">{item.title}</h3>
                                    <p className="mt-2 font-extralight text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}
