"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import bgimage1 from "../../../assets/images/guava/refreshment.webp";
import image1 from "../../../assets/images/amla/green.webp";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
import faqimg from "../../../assets/images/amla/faq.webp";


export const Invest = () => {
    const heading = "Why Invest in Amla Cultivation?"
    const plantSearon = [

        {
            img: image1,
            details: [" High Demand Crop – Consistently sought after in multiple industries.", "Long-Term Yield – Provides consistent income for decades.", " Eco-Friendly & Sustainable – Requires minimal inputs and enriches soil health.", " Multiple Revenue Streams – Profits from fresh fruit, processed products, and herbal extracts.", " Low Investment, High Returns – Requires little maintenance with significant profit potential."],
        },


    ];
    return (
        <>
            <section
                className=" bg-white pt-16 pb-16 lg:pt-20 lg:pb-20 relative" style={{ background: `url(${bgimage1.src})center center / cover no-repeat` }}>
                <div className='absolute left-0 top-0 w-full h-full bg-black opacity-50 z-10'></div>
                <div className='mx-auto max-w-7xl  px-4 md:px-8 lg:px-2 relative z-10'>
                    <div className='flex flex-wrap  items-center gap-6 px-0 md:px-6  lg:px-2'>
                        <div className='w-[95%] md:w-5/12 '>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl mb-10 font-medium redhat text-white'>{heading}</h2>
                            <div className='bg-white backdrop-blur bg-opacity-20 rounded-[20px]'>
                                {plantSearon.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="mb-6">
                                        <Image src={section.img} className='w-full rounded-3xl' alt="image" />
                                        <div className='p-8 '>
                                            <ul className="list-disc pl-5 mt-2 space-y-2 text-sm md:text-[15px] text-white font-light redhat">
                                                {section.details.map((detail, index) => (
                                                    <li className="mb-1" key={index}>{detail}</li>
                                                ))}
                                            </ul>
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


export const Looking = () => {
    const heading = `Looking to <span class="text-[#2D6B5E]"> Grow</span> or <span class="text-[#2D6B5E]">Source Amla</span>?`

    const subheading = "Contact Atulye Krishi Vana for:"
    const box = [

        {
            text: "Expert guidance on sustainable agroforestry",
        },
        {
            text: "Premium-quality Amla saplings",
        },
        {
            text: "Ethical and responsible sourcing of Amla products",
        },


    ]

    return (
        <>
            <section
                className="py-12 lg:py-16 bg-[#D9D9D966]" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <h2
                        className="lg:leading-snug text-black redhat mb-6 lg:mb-4 text-center text-3xl md:text-4xl font-semibold w-full"
                        dangerouslySetInnerHTML={{ __html: heading }}
                    ></h2>

                    <p className="lg:leading-snug text-black  text-center text-sm lg:text-[18px]  font-semibold mb-8 mt-4  w-full">{subheading}</p>

                    <div className='mx-auto justify-center flex flex-wrap lg:flex-nowrap gap-12 lg:gap-5'>
                        {box.map((item, index) => (
                            <div className='w-full md:w-[47%] lg:w-3/12' key={index}>
                                <div className=' text-black text-center grid items-center justify-center p-4 h-40 lg:h-32 border-[1px] border-[#1B453C]  rounded-[20px] transition-all  duration-400'>
                                    <h2 className="lg:leading-snug  poppins text-center text-sm lg:text-[15px]  font-normal  w-full">{item.text}</h2>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}


export const Faqs = () => {
    const heading = 'How much yield can I expect per tree, and how does it vary with age?'
    const description = `Amla trees start yielding fruit in the third year, with a gradual increase in production. A mature tree (8–10 years old) can produce 50–70 kg of fruit annually..`
    const faqs = [
        {
            question: 'What is canopy management & why is it essential?',
            answer: 'Canopy management involves removing root stock sprouts and low-lying branches, plus pruning overlapping and diseased branches during August-September. This practice ensures better sunlight penetration and air circulation.',
        },
        {
            question: 'How do growth regulators help in mango cultivation?',
            answer: 'Canopy management involves removing root stock sprouts and low-lying branches, plus pruning overlapping and diseased branches during August-September. This practice ensures better sunlight penetration and air circulation.',
        },
        {
            question: 'What are effective methods to control fruit flies?',
            answer: 'Our training programs are available both online and offline to accommodate your preferences.',
        },
        {
            question: 'What is top working and when should it be performed?',
            answer: 'The fee structure varies depending on the program. Please visit our website for detailed information.',
        },

    ];


    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <section className='relative  text-left py-12 md:py-16'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative'>

                    <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-12'>

                        <div className='lg:w-6/12  w-full w-12/12 md:order-2'>

                            <Image src={faqimg} className='w-full h-auto' alt='image' />

                        </div>
                        <div className='lg:w-6/12  w-full w-12/12'>
                        <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-[#1B453C] mb-2'>FAQs</h2>
                        <h3 className=' text-xl font-light text-[#1B453C] mb-4'>Frequently Asked Questions</h3>
                        <h2 className='text-xl md:leading-[1.3] md:text-2xl font-semibold redhat text-black mb-2'>{heading}</h2>
                            <p className='text-black text-[15px] leading-6 text-justify mb-6 md:mb-8' dangerouslySetInnerHTML={{ __html: description }}>
                            </p>

                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className='mb-4'
                                >

                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className={`w-full text-left flex items-center rounded-2xl  justify-between p-4
                      transition-all duration-300
                      ${openIndex === index ? 'bg-[#D9D9D9] text-black text-2xl rounded-bl-[0px] rounded-br-[0px] ' : 'bg-[#D9D9D9]  text-[#000]'}`}

                                    >

                                        <span className={`font-medium w-[90%]
                      ${openIndex === index ? 'text-lg md:text-lg' : 'text-lg'}`}>
                                            {faq.question}
                                        </span>
                                        {openIndex === index ? (
                                            <HiChevronUp className='text-lg' />
                                        ) : (
                                            <HiChevronDown className='text-lg' />
                                        )}
                                    </button>


                                    <div
                                        className={`overflow-hidden bg-[#D9D9D9] rounded-bl-2xl rounded-br-2xl px-4 text-black transition-[max-height] duration-300 ease-in-out
                                ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className=' pt-0  mb-6 py-4 text-[15px] md:text-base font-normal text-[#00] text-opacity-75'>
                                            {faq.answer}
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

