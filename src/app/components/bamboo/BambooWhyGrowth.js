"use client";
import { useState } from "react";
import Image from "next/image";
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/bamboo/banner.webp";
import bamboo1 from "../../../assets/images/bamboo/bamboo.webp";


export const BannerBamboo = () => {
    const text = {
        banner: banner,
        heading: `Bamboo`,
        subtitle: `The Versatile Green Gold of Sustainable Forestry`,
        title: `Bamboo, often referred to as the "Green Gold," is a highly sustainable, fast-growing grass that has revolutionized various industries. Known for its strength, durability, and eco-friendly properties, bamboo is widely used in construction, furniture, paper, textiles, and biofuel industries. Its ability to regenerate quickly without replanting makes it a preferred choice for sustainable agroforestry and commercial plantations.`,
        opacity: "opacity-55"
    };
    return (
        <>

            <BannerPage
                heading={text.heading}
                title={text.title}
                subtitle={text.subtitle}
                opacity={text.opacity}
                banner={text.banner}
                button={text.button}
                link={text.link}
                classname={text.className}

            />

        </>
    )
}



export const WhyBamboo = () => {
    const content = [
        {
            title: "High Demand Material",
            description: "Used in construction, furniture, textiles, paper, and biofuel industries.",
            img: bamboo1,
        },
        {
            title: "Low Maintenance",
            description: "Requires minimal care and grows naturally in diverse conditions.",
            img: bamboo1,
        },
        {
            title: "Eco-Friendly Cultivation",
            description: "Absorbs high amounts of CO₂ and prevents soil erosion.",
            img: bamboo1,
        },
        {
            title: "Fast Growth Rate",
            description: "Bamboo grows faster than most plants, making it highly renewable.",
            img: bamboo1,
        },
    ];
    const [showMore, setShowMore] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    return (
        <>
            <section className=" py-14 lg:py-16">
                <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
                    <h2 className="text-3xl md:leading-[1.3] md:text-left text-center md:text-4xl font-medium redhat text-[#1B453C] mb-8">Why Choose <span className="border-[#6D8C54] border-b-4">Bamboo?</span></h2>
                    {content.slice(0, showMore ? content.length : 2).map((item, index) => (
                        <div key={index} className="grid grid-cols-3 gap-4 items-center border-t border-[#000000] py-6">
                            <div className="md:col-span-1 col-span-12">
                                <h2 className="font-medium text-xl md:text-2xl text-black mb-3">{index + 1}. {item.title}</h2>
                                <p className="text-black text-[14px] md:text-[15px]">{item.description}</p>
                            </div>
                            <div className="md:col-span-1 col-span-12 md:order-none order-3">
                                <div className="flex items-center justify-center gap-4">
                                    <button
                                        className="px-4 py-2 transition delay-100 duration-100 ease-in-out border border-black rounded-xl hover:bg-[#1B453C] hover:text-white"
                                        onClick={() => setModalContent(item)}
                                    >
                                        View Picture
                                    </button>
                                </div>
                            </div>
                            <div className="md:col-span-1 col-span-12 md:text-end">
                                <Image src={item.img} alt={item.title} width={250} className="rounded-lg object-contain mx-auto md:ml-auto md:mr-0" />
                            </div>
                        </div>
                    ))}
                    {!showMore && (
                        <div className="md:w-60 w-72 text-center mt-8 mx-auto md:text-end">
                            <button
                                className="bg-[#1B453C] text-white redhat px-6 py-4 rounded-lg shadow-lg w-3/4 mx-auto md:w-full"
                                onClick={() => setShowMore(true)}
                            >
                                Show More
                            </button>
                        </div>
                    )}

                    {/* Modal */}
                    {modalContent && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-lg max-w-[550px] relative">
                                <button
                                    className="absolute top-2 right-2 text-3xl"
                                    onClick={() => setModalContent(null)}
                                >
                                    &times;
                                </button>
                                <h2 className="font-medium text-xl md:text-left text-center md:text-2xl text-black mb-3">{modalContent.title}</h2>
                                <p className="text-black text-[15px] mb-6">{modalContent.description}</p>
                                <Image src={modalContent.img} alt={modalContent.title} className="rounded-lg w-full h-full" />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}


export const GrowthBamboo = () => {
    const heading = "Growth Conditions of Bamboo"
    const info1heading = "Climate Requirements"
    const info1 = [
        { item: "Maximum Temperature: 45°C" },
        { item: "Minimum Temperature: -5°C" },
        { item: "Annual Rainfall Requirement: 700 mm – 3000 mm" },

    ];

    const info2heading = "Soil Preferences"
    const info2 = [
        { item: "Soil Depth: Prefers deep soil for strong root establishment." },
        { item: "Soil Drainage: Requires well-drained soil to prevent root rot.." },

    ]

    return (
        <>
            <section className=" py-14 lg:py-16 bg-[#6D8C54] bg-opacity-30 relative">
                <div className="absolute bottom-0 left-0 h-1/3  bg-white w-full"> </div>
                <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
                    <h2 className="text-3xl md:leading-[1.3] text-center md:text-4xl font-medium redhat text-[#1B453C] mb-8">{heading}</h2>
                    <div className=" flex-wrap flex  justify-center gap-16 relative z-10">
                        <div className="md:w-1/2 lg:w-1/3 p-4 pl-10 pr-10 pb-8 w-full border border-black rounded-tl-2xl w-12/12">
                            <h3 className="font-semibold">{info1heading}</h3>
                            <ul className="list-disc">
                                {info1.map((item, index) => (
                                    <li className="text-sm mt-2 font-light" key={index}>{item.item}</li>
                                ))}
                            </ul>

                        </div>
                        <div className="md:w-1/2 lg:w-1/3 p-4 pl-10 pr-10 border-black rounded-tr-2xl  pb-8 w-full border w-12/12">
                        <h3 className="font-semibold">{info2heading}</h3>
                            <ul className="list-disc">
                                {info2.map((item, index) => (
                                    <li className="text-sm mt-2 font-light" key={index}>{item.item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
