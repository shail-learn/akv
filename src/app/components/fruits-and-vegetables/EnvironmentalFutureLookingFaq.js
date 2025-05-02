"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import environmentalimg from "../../../assets/images/fruit/environmentalimg.webp";
import futureimg from "../../../assets/images/fruit/future-img.webp";
import faqsbg from "../../../assets/images/fruit/faqbg.webp";
import fruits from "../../../assets/images/fruit/fruits.webp";

import { HiChevronUp, HiChevronDown } from "react-icons/hi2";







export const Environmental = () => {
    const heading = 'Environmental Benefits of Growing Mango Trees'
    return (
        <>
            <section className='relative text-center md:text-left pt-16 pb-16 lg:pt-20 lg:pb-20'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative'>
                    <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-semibold text-center redhat text-[#1B453C] mb-6'>{heading}</h2>
                    <div className='md:w-[70%] mx-auto'>
                        <Image src={environmentalimg} className='w-full h-auto' alt='image' />
                    </div>
                </div>

            </section>
        </>
    )
}



export const Future = () => {
    const heading = 'Future Directions'
    const description = `Our research focuses on developing climate-resilient varieties and improving organic cultivation methods. Water-efficient technologies remain a priority as we face increasing climate uncertainty. Market development efforts aim to strengthen direct farmer-consumer connections while expanding export opportunities. <br/> <br/> Successful mango cultivation requires attention to detail throughout the orchard's life. During establishment, selecting quality planting material and ensuring proper pit preparation lay the foundation for future success. Regular monitoring and maintenance during the growth phase maximize productive potential. <br/><br/> Production management requires understanding flower induction techniques and proper fruit load management. Quality control measures and careful post-harvest handling ensure maximum market value for the crop.`
    return (
        <>
            <section className='relative text-center md:text-left pt-16 pb-16 bg-[#F4F4F4]'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative'>
                    <div className='flex md:flex-col flex-col-reverse lg:flex-row justify-between items-center gap-10 md:gap-4 lg:gap-12'>
                        <div className='lg:w-7/12  w-full w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-semibold text-center md:text-left redhat text-[#1B453C] mb-8'>{heading}</h2>
                            <p className='text-black text-base text-justify redhat my-4' dangerouslySetInnerHTML={{ __html: description }}>
                            </p>
                        </div>
                        <div className='lg:w-5/12  w-full w-12/12'>
                            <Image src={futureimg} className='w-full h-auto rounded-2xl' alt='image' />
                        </div>
                    </div>




                </div>

            </section>
        </>
    )
}




export const Looking = () => {
    const heading = "Looking Forward"
    const description = `Mango cultivation represents more than agriculture – it's an investment in future generations. At Atulye Krishi Vana, we've seen how sustainable mango cultivation generates stable income while preserving biodiversity and building soil health. Employment generation and climate change mitigation further enhance its social value. <br/> Our experience shows that successful mango cultivation requires patience, knowledge, and commitment to sustainability. The principles of sustainable cultivation - soil health, water conservation, and biodiversity promotion - remain key to long-term success.`
    return (
        <>
            <section className='relative text-center bg-cover bg-no-repeat bg-bottom md:text-left pt-16 pb-16 md:pt-20 md:pb-20 bg-[#1B453C] bg-opacity-85' style={{ backgroundImage: `url(${faqsbg.src})` }}>
                <div className='mx-auto max-w-6xl px-4 md:px-6 lg:px-2 relative'>
                    <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-semibold text-center redhat text-white mb-12 md:mb-16'>{heading}</h2>
                    <div className='flex flex-col md:flex-row items-center gap-0'>

                        <div className='w-full md:w-1/2 bg-[#D9D9D9] p-8 md:py-20 rounded-2xl shadow-md'>
                            <p className='text-[#1B453C] text-[15px] text-justify md:text-base leading-7 my-4' dangerouslySetInnerHTML={{ __html: description }}>
                            </p>

                        </div>


                        <div className='w-full md:w-1/2 border border-[#D9D9D9] rounded-tr-2xl rounded-br-2xl md:border-l-0 p-6 py-16 text-white'>
                            <div className='md:w-[80%] w-[90%] mx-auto text-center'>
                                <h3 className='text-xl md:text-2xl font-semibold redhat mb-4'>FOR MORE <br /> INFORMATION</h3>
                                <p className='text-sm mb-6'>
                                    About our mango cultivation programs or to explore partnership opportunities
                                </p>
                                <p className='text-sm mb-8'>
                                    Contact Us At <span className='font-bold'>Info@atulyeKrishivana.com</span>
                                </p>
                                <form>
                                    <input
                                        type='email'
                                        placeholder='Your Email'
                                        className='w-full p-2 mb-4 bg-white text-black placeholder-gray-500 outline-none border-none'
                                    />
                                    <button className='border-2 border-white outline-none text-white py-2 px-10 hover:bg-white hover:text-[#1B453C]'>
                                        SUBMIT
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}



export const Faq = () => {
    const heading = 'How should mangoes be graded for market?'
    const description = `Grade mangoes based on weight: Small (<200g), Medium (201-400g), Large (401-600g), and Extra-large (601-800g). Consider firmness, absence of defects, uniform size and shape, skin color, flesh color, and flavor for quality grading.`
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
                            <Image src={fruits} className='w-4/5 md:w-4/6 h-auto' alt='image' />

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
                      ${openIndex === index ? 'bg-[#345951] text-[#fff] rounded-bl-[0px] rounded-br-[0px] ' : 'bg-[#D9D9D9] text-[#000]'}`}

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
                                        className={`overflow-hidden bg-[#345951] rounded-bl-2xl rounded-br-2xl px-4 text-white transition-[max-height] duration-300 ease-in-out
                                ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className=' pt-0  mb-6 py-4 text-[15px] md:text-base font-light text-[#00] text-opacity-75'>
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

