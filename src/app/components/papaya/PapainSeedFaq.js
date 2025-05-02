"use client"
import { React, useState } from 'react'
import Link from 'next/link'
import { FaPlus, FaMinus } from 'react-icons/fa';
import harvestimg from "../../../assets/images/papaya/futuristic-technology.webp";
import bgimage1 from "../../../assets/images/papaya/beautiful-trees-lake.webp";
import Image from 'next/image';

export const Papain = () => {
    const heading = "Papain Extraction – A Profitable By-Product"
    const text = "Papain is a valuable enzyme extracted from papaya latex, widely used in the food, pharmaceutical, and textile industries."
    const subheading = "Extraction Process"
    const box = [

        {
            text: "Select immature papaya fruits (75-90 days old). Make four shallow cuts (0.3 cm deep) on each fruit.  ",
        },
        {
            text: "Collect latex every three days (four extractions per fruit). Shade-dry the latex in aluminum trays. ",
        },
        {
            text: "Vacuum-seal the dried papain for longer shelf life. Yield of Crude Papain per Hectare CO 2 – 600 kg",
        },


    ]

    return (
        <>
            <section
                className="py-12 lg:py-16 bg-[#D9D9D966]" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-6 lg:mb-4 text-center text-3xl md:text-4xl font-semibold  w-full">
                        {heading}
                    </h2>
                    <p className="lg:leading-snug  poppins text-center text-sm lg:text-[15px]  font-normal  w-full">{text}</p>
                    <p className="lg:leading-snug text-[#1B453C]  text-center text-sm lg:text-[18px]  font-medium mb-8 mt-4  w-full">{subheading}</p>

                    <div className='mx-auto justify-center flex flex-wrap lg:flex-nowrap gap-12 lg:gap-5'>
                        {box.map((item, index) => (
                            <div className='w-full md:w-[47%] lg:w-3/12' key={index}>
                                <div className=' text-black text-center grid items-center justify-center p-4 h-40 lg:h-32 border-[1px] border-[#1B453C]  rounded-[20px] transition-all  duration-400'>
                                    <h2 className="lg:leading-snug  poppins text-center text-sm lg:text-[15px]  font-normal  w-full">{item.text}</h2>

                                </div>
                                <div className='text-center mt-8'>
                                    <Link href="/gallery" className="text-[#1B453C] hover:bg-black hover:text-white py-3 px-8 bg-[#1B453C] text-white rounded-[10px] transition-all duration-400">View Picture</Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}


export const Seed = () => {
    const heading = "Seed Technology for high germination"

    const bambooDetails = [
        "Store seeds in airtight containers to preserve viability.",
        {
            title: "Pre-treatment for better germination:",
            items: [
                "Soak seeds in 100ppm GA3 (Gibberellic Acid) for 16 hours.",
                "OR Use 2% fresh leaf extract of Arappu or 1% Pungam leaf extract."
            ]
        },
        "Optimal Sowing Depth: 1 cm deep for better emergence.",
        "Storage Tip: Dry seeds to 8–10% moisture and treat with a halogen mixture for a 5-month shelf life."
    ];

    const plantSearon = [
        {
            heading: "",
            details: [
                "<strong>Expert Guidance</strong> – End-to-end support from soil testing to market linkage.",
                "<strong>Sustainable Practices</strong> – Organic fertilizers, water conservation, and eco-friendly farming.",
                "<strong>High-Yielding Varieties</strong> – Improved disease resistance and superior fruit quality.",
                "<strong>Community Empowerment</strong> – Training programs and employment opportunities for farmers.",
            ],
        },
        {
            heading: "",
            details: [
                "<strong>Partner with us today!For consultation, bulk seed orders, or farm visits, contact </strong> <br/>" +
                '<strong><a href="mailto:info@atulyekrishivana.com" class="text-[#5F5FFF] font-medium">info@atulyekrishivana.com</a> or visit our farm in Sehore, Madhya Pradesh.</strong>',
            ],
        },
    ];

    return (
        <>


            <section className="py-14 lg:py-16">
                <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
                    <div className='w-[95%] md:w-[92%] mx-auto'>
                        <div className="relative rounded-lg">

                            <Image
                                src={harvestimg}
                                alt="Forest Image"
                                className="w-full md:h-full object-cover h-60 rounded-2xl"
                            />
                            <div className="absolute redhat w-3/5 md:w-1/3 h-28 flex items-center top-8 -left-3 md:-left-8 bg-[#8EB558] text-white py-3 px-2 md:px-6 rounded-md  ">
                                <h2 className='lg:leading-snug  text-white redhat text-left border-l border-white border-opacity-20 ps-3 text-xl md:text-4xl  font-normal'>
                                    {heading}
                                </h2>

                            </div>
                            <div className="absolute top-8 md:-right-8 -right-3  bg-[#8EB558] md:w-16 w-10 h-28 rounded-md"></div>
                        </div>
                    </div>
                    <div className='w-[95%] md:w-[92%] mx-auto'>
                        <div className="mt-6 text-gray-700">

                            <ul className="list-disc pl-5 mt-2 text-sm md:text-[15px] text-black redhat space-y-2">
                                {bambooDetails.map((detail, index) =>
                                    typeof detail === "string" ? (
                                        <li key={index}>{detail}</li>
                                    ) : (
                                        <li key={index}>
                                            <span className="font-medium">{detail.title}</span>
                                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                                {detail.items.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <section
                className="bg-white pt-16 pb-16 lg:pt-20 lg:pb-20 relative"
                style={{
                    background: `url(${bgimage1.src}) center center / cover no-repeat`,
                }}
            >
                {/* <div className="absolute left-0 top-0 w-full h-full bg-black opacity-30 z-10"></div> */}

                <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 relative z-10">
                    <div className="flex flex-wrap items-center gap-6 px-0 md:px-6 lg:px-2">
                        <div className="w-[95%]  text-center mx-auto">
                            <h2 className="text-3xl md:leading-[1.3] md:text-4xl mb-10 font-semibold redhat text-white">
                                Why Choose Atulye Krishi Vana for Papaya Farming?
                            </h2>
                            </div>
                            <div className="w-[95%] md:w-5/12 mx-auto">
                            <div className="bg-[#F2F2F2DE] p-8 rounded-[20px]">
                                {plantSearon.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="mb-6">
                                        {section.heading && (
                                            <p className="text-black font-medium text-lg mb-2">
                                                {section.heading}
                                            </p>
                                        )}

                                        <ul className="space-y-2 md:pl-5 mt-2 text-sm md:text-[16px] text-black redhat ">
                                            {section.details.map((detail, index) => (
                                                <li
                                                    className="mb-1  leading-6  text-black"
                                                    key={index}
                                                    dangerouslySetInnerHTML={{ __html: detail }}
                                                ></li>
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



export const Faq = () => {
    const heading = "FAQ"
    const faqs = [
        {
            question: 'Who can apply for these training programs?',
            answer: 'Anyone passionate about agriculture, sustainable development, and agroforestry. We welcome farmers, students, agripreneurs, and professionals.',
        },
        {
            question: 'Do I need prior experience?',
            answer: 'No, our training programs are designed for both beginners and experienced individuals.',
        },
        {
            question: 'Is the training online or offline?',
            answer: 'Our training programs are available both online and offline to accommodate your preferences.',
        },
        {
            question: 'Is there any fee for the program?',
            answer: 'The fee structure varies depending on the program. Please visit our website for detailed information.',
        },
        {
            question: 'What after completing the training?',
            answer: 'Upon successful completion, participants receive a certificate and are provided with job placement assistance and internship opportunities.',
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <section className='pt-8 pb-14 lg:pt-12 lg:pb-20'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
                    <div className='flex md:flex-col flex-col lg:flex-row justify-between items-center gap-8 md:gap-10'>
                        <div className='md:w-12/12 w-full'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-semibold text-center md:text-left redhat text-[#1B453C] mb-14'>{heading}</h2>
                            <div className='border-t border-[#1B453C]'>
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className='border-b border-[#1B453C]'
                                    >

                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className='w-full text-left flex items-center justify-between py-4 transition-all duration-300'
                                        >
                                            <span className='mdtext-2xl text-xl text-[#000] redhat font-medium'>
                                                {faq.question}
                                            </span>
                                            {openIndex === index ? (
                                                <FaMinus className='text-[#000]' />
                                            ) : (
                                                <FaPlus className='text-[#000]' />
                                            )}
                                        </button>


                                        <div
                                            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out
                                  ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <p className=' pt-0  mb-6  py-4 text-sm text-[#00] text-opacity-75'>
                                                {faq.answer}
                                            </p>
                                        </div>
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