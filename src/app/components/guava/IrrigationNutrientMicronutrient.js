import React from 'react'
import Image from 'next/image';
import bgimage1 from "../../../assets/images/guava/refreshment.webp";
import img02 from "../../../assets/images/guava/biocirculargreen.webp";
import icon1 from "../../../assets/images/guava/icon.svg";
import icon01 from "../../../assets/images/guava/zinc.png";
import icon02 from "../../../assets/images/guava/magnesium.png";
import icon03 from "../../../assets/images/guava/copper.png";
import icon04 from "../../../assets/images/guava/iron.png";
import icon05 from "../../../assets/images/guava/manganese.png";






export const Irrigation = () => {
    const heading = "Irrigation Strategies for Guava Farming"
    const plantSearon = [
        {
            heading: "Watering Schedule",
            details: [" Immediately after planting to reduce transplant shock.", "On the third day, followed by irrigation every 10 days.", " Adjust frequency based on rainfall and soil moisture levels."],
        },
        {
            heading: "Efficient Water Management",
            details: ["Drip irrigation is recommended for water conservation and uniform moisture distribution.", "Mulching around plants helps retain soil moisture and prevents weed growth."],
        },
    ];
    return (
        <>
            <section
                className=" bg-white pt-16 pb-16 lg:pt-20 lg:pb-20 relative" style={{ background: `url(${bgimage1.src})center center / cover no-repeat` }}>
                <div className='absolute left-0 top-0 w-full h-full bg-black opacity-30 z-10'></div>
                <div className='mx-auto max-w-7xl  px-4 md:px-8 lg:px-2 relative z-10'>
                    <div className='flex flex-wrap  items-center gap-6 px-0 md:px-6  lg:px-2'>
                        <div className='w-[95%] md:w-5/12 '>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl mb-10 font-medium redhat text-white'>{heading}</h2>
                            <div className='bg-[#D9D9D9C9] p-8 rounded-[20px]'>
                                {plantSearon.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="mb-6">
                                        <p className="text-black font-medium text-lg mb-2">
                                            {section.heading}
                                        </p>


                                        <ul className="list-disc pl-5 mt-2 text-sm md:text-[15px] text-black redhat">
                                            {section.details.map((detail, index) => (
                                                <li className="mb-1" key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export const Nutrient = () => {
    const icon = icon1
    const data = {
        title: "Optimal Planting Season Guidelines",
        imageSrc: img02,
        sections: [
            {
                heading: "Fertilizer Application Schedule",
                details: [
                    "Organic manure: 50 kg of FYM per tree in two split doses during March and October.",
                    "Chemical fertilizers: 1 kg each of Nitrogen (N), Phosphorus (P), and Potassium (K) per tree.",

                ],
            },
            {
                heading: "Foliar Sprays for Improved Growth",
                details: [
                    "To increase fruit set and size: Spray Urea (1%) + Zinc Sulphate (0.5%) twice a year (March & October).",
                    "To prevent boron deficiency: Spray 0.3% Borax during flowering and fruit set stage.",
                ],
            },
        ],
    };

    return (
        <>
            <section className='py-8 lg:py-12 overflow-hidden relative'>
                <Image
                    src={icon}
                    alt="Planting Season"
                    width={200}
                    height={200}
                    className="opacity-10 absolute md:-left-16 -left-12 md:-top-16 -top-12 w-36 md:w-44"
                />
                <Image
                    src={icon}
                    alt="Planting Season"
                    width={200}
                    height={200}
                    className="opacity-10 absolute -right-16 -bottom-16"
                />
                <div className='mx-auto max-w-7xl  px-4 md:px-8 lg:px-2 '>
                    <div className="flex flex-col items-center  px-6 md:px-16 py-10 bg-white">
                        <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center   text-3xl md:text-4xl  font-medium  w-full">
                            {data.title}
                        </h2>

                        <div className="relative overflow-hidden rounded-[20px]">
                            <div className=' lg:w-4/5 mx-auto  w-12/12'>
                                <div className=' relative'>
                                    <Image
                                        src={data.imageSrc}
                                        alt="Planting Season"
                                        width={900}
                                        height={500}
                                        className="rounded-[20px] min-w-full h-full mb-6 relative z-10 "
                                    />
                                    <Image
                                        src={icon}
                                        alt="Planting Season"
                                        width={200}
                                        height={200}
                                        className="opacity-10 absolute -left-24 bottom-8"
                                    />
                                    <Image
                                        src={icon}
                                        alt="Planting Season"
                                        width={200}
                                        height={200}
                                        className="opacity-10 absolute -right-24 top-8"
                                    />
                                </div>

                                <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8'>
                                    {data.sections.map((section, index) => (
                                        <div key={index} className="lg:w-5/12  w-12/12">
                                            <h3 className="font-semibold text-base text-[#1B453C] mb-2">
                                                {section.heading}
                                            </h3>
                                            <ul className="list-disc pl-5 space-y-2 text-[#1B453C] ">
                                                {section.details.map((item, i) => (
                                                    <li className='text-sm md:text-[14px]' key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                </div >
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export const Micronutrient = () => {
    const heading = `Micronutrient Spray for <br/> Controlling Leaf Bronzing`;
    const subtile = "A combined foliar spray ensures healthy leaves and better photosynthesis."
    const micronutrients = [
        { id: 1, name: 'Zinc Sulfate', formula: 'ZnSO₄', percentage: '0.5%', icon: icon01 },
        { id: 2, name: 'Copper Sulphate', formula: 'CuSO₄', percentage: '0.25%', icon: icon02 },
        { id: 3, name: 'Magnesium Sulphate', formula: 'MgSO₄', percentage: '0.5%', icon: icon03 },
        { id: 4, name: 'Iron Sulphate', formula: 'FeSO₄', percentage: '0.25%', icon: icon04 },
        { id: 5, name: 'Manganese Sulphate', formula: 'MnSO₄', percentage: '0.5%', icon: icon05 },
    ];
    return (
        <>

            <section className='py-12 lg:py-16 bg-[#D9D9D9A6] overflow-hidden'>
                <div className='mx-auto max-w-7xl  px-4 md:px-8 lg:px-2 '>
                    <h2
                        className="lg:leading-snug text-[#1B453C] redhat mb-2 text-center text-3xl md:text-4xl font-medium w-full"
                        dangerouslySetInnerHTML={{ __html: heading }}
                    />
                    <p className='font-normal text-[#1B453C] text-center mb-12 md:mb-16'>{subtile}</p>
                    <div className='h-full'>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                        {micronutrients.map((item, index) => (
                            <div
                                key={item.id}
                                className={`flex flex-col items-center ${index % 2 === 0 ? 'md:mb-10' : 'md:mt-32'}`}
                            >
                                <div className=" p-4 rounded-lg inline-block text-center">
                                    <Image src={item.icon} width={100} className='w-20 h-20 md:w-28 md:h-28' alt='icons' />

                                </div>
                                <h3 className="text-base md:text-lg text-center font-medium text-[#1F1E17]">{item.name}</h3>
                                <p className="text-black text-[15px]">({item.formula}) – {item.percentage}</p>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
