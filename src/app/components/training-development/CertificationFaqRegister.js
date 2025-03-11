"use client"
import { React, useState } from 'react'
import icon01 from "../../../assets/images/training-development/Diploma.png";
import icon02 from "../../../assets/images/training-development/Field.png";
import icon03 from "../../../assets/images/training-development/New-Job.png";
import circle1 from "../../../assets/images/training-development/circle1.png";
import circle2 from "../../../assets/images/training-development/circle2.png";
import circle3 from "../../../assets/images/training-development/circle3.png";
import contactbg from "../../../assets/images/training-development/bgcontact.webp";
import { FaCalendarDays } from "react-icons/fa6";


import { FaPlus, FaMinus } from 'react-icons/fa';

import Image from 'next/image';

export const Certification = () => {
  const heading = "Certification & Recognition"
  const subtitle = "Get Certified!"
  const circles = [
    {
      image: icon01,
      description: 'Participants receive government & industry-recognized certificates.',
      bg: circle1
    },
    {
      image: icon02,
      description: 'Specialized certifications in Agroforestry, Smart Farming, Organic Agriculture, and Agribusiness Management.',
      bg: circle2
    },
    {
      image: icon03,
      description: 'Boost career prospects with job placement assistance and internship opportunities.',
      bg: circle3
    },

  ]
  return (
    <>

      <section className='pt-14 pb-14 lg:pt-20 lg:pb-20'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
          <div className='flex md:flex-col flex-col lg:flex-row justify-between items-center gap-8 md:gap-10'>
            <div className='md:w-3/12 w-full'>
              <div className='md:max-w-[100%]'>
                <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-normal text-center md:text-left redhat text-[#1B453C] mb-6'>{heading}</h2>
                <p className='text-[#1B453C] text-normal text-center md:text-left font-light text-base mb-8 lg:mb-10'>{subtitle}</p>
              </div>
            </div>

            <div className='md:w-9/12 w-full'>
              <div className='flex md:flex-col flex-col lg:flex-row justify-between gap-6 md:gap-6'>
                {circles.map((item, index) => (
                  <div className='md:w-4/12 w-full' key={index}>
                    <div
                      className="text-center relative aspect-square rounded-full overflow-hidden border-4 border-[#6D8C54] bg-black bg-opacity-70 flex flex-col p-4 items-center justify-center"
                      style={{ background: `url(${item.bg.src}) center center / cover no-repeat` }}
                    >
                      <div className='absolute inset-0 bg-black opacity-75 rounded-full'></div>
                      <Image
                        src={item.image}
                        className='w-14 h-14 object-contain z-10 relative mx-auto'
                        alt='icon'
                      />
                      <p className='text-normal text-white relative z-10 text-sm lg:text-[13px] pt-4 font-light italic'>
                        {item.description}
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


export const Faq = () => {
  const heading = "Frequently Asked Questions (FAQ)"
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
              <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-normal text-center md:text-left redhat text-[#1B453C] mb-14'>{heading}</h2>
              <div className='border-t border-[#E5C17C]'>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className='border-b border-[#E5C17C]'
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



export const Register = () => {


  return (
    <>

      <section className="pt-14 pb-14 lg:pt-20 lg:pb-20 relative " style={{ background: `url(${contactbg.src}) center center / cover no-repeat` }}>
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-white text-center">
          <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
            <div className='md:w-5/12  w-12/12'>
              <div className="flex flex-col h-full">
                <div className="">
                  <h2 className="text-3xl md:leading-[1.3] md:text-4xl md:text-left font-normal redhat text-white">Join the Movement – <br /> Register Today!</h2>
                </div>
                <div className="md:mt-[50%] mt-14 h-full text-left">
                  <p className="mb-4 text-lg flex gap-4 items-center font-semibold"><FaCalendarDays className='text-[#F7C35F]' /> Upcoming Training Sessions:</p>
                  <ul className="mb-6 text-md">
                    <li>  Agroforestry Essentials – 15th March 2025</li>
                    <li> Smart Farming & AI – 22nd April 2025</li>
                    <li>Eco-Tourism & Farm Entrepreneurship – 5th May 2025</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='md:w-5/12  w-12/12'>
              <p className="text-white font-semibold text-base mb-6 md:text-left">Ready to transform your future? Enroll today!</p>
              <div className="bg-white text-black p-6 rounded-3xl shadow-lg w-full max-w-md">
                <h2 className="text-xl font-medium mb-4 text-center md:text-left">Inquiry Form</h2>
                <form>
                  <div className='flex flex-wrap gap-4 mb-4'>
                    <input type="text" className='outline-none font-normal px-4 p-3 poppins rounded-xl w-full bg-[#F6F6F8]' placeholder='Name: ' />
                    <input type="email" className='outline-none font-normal px-4 p-3 poppins rounded-xl w-full bg-[#F6F6F8]' placeholder='Email:' />
                    <input type="text" className='outline-none font-normal px-4 p-3 poppins rounded-xl w-full bg-[#F6F6F8]' placeholder='Contact Number' />
                    <input type="text" className='outline-none font-normal px-4 p-3 poppins rounded-xl w-full bg-[#F6F6F8]' placeholder='Preferred Training Program' />
                    <textarea className='outline-none px-4 font-normal p-3 poppins rounded-xl w-full bg-[#F6F6F8] ' placeholder='Message:' />
                  </div>

                  <button className='poppins  font-normal text-white w-full py-3 rounded-[10px] bg-[#1B453C]'>Submit</button>
                </form>
              </div>
            </div>
          </div>



        </div>
      </section>
    </>
  )
}



export const GreenRevolution = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap items-center w-full gap-6 md:gap-10 py-6 md:py-20">
        <div className="md:w-2/12">
          <div dir="rtl">
          <div className="w-full h-5 bg-[#6D8C54] rounded-s-md"></div>
          </div>
        </div>
        <div className="md:w-3/12 w-full text-center">
          <button className="bg-[#1B453C] text-white redhat px-6 py-4 rounded-lg shadow-lg w-3/4 mx-auto md:w-full">
            Join the Green Revolution!
          </button>
        </div>
        <div className="md:w-3/12 w-full text-center">
          <p className="text-gray-700 text-center md:text-left text-sm md:text-base">
            Together, we can grow a greener, smarter, and more sustainable world!
          </p>
        </div>
        <div className="md:w-4/12">

          <div className="w-full h-5 bg-[#6D8C54] rounded-s-md"></div>
        </div>
      </div>
    </>
  )
}

