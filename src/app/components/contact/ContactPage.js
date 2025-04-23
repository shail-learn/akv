import React from 'react'
import contactbg from "../../../assets/images/contact/contact-banner.webp";
import contactFooter from "../../../assets/images/contact/contactFooter.svg";
import instagram from "../../../assets/images/contact/instagram.svg";
import linkedin from "../../../assets/images/contact/linkedin.svg";
import facebook from "../../../assets/images/contact/facebook.svg";

import Image from 'next/image';
import contactData from '../../../api/contactData.json'
import { BiSolidPhoneCall } from "react-icons/bi";
import { Map } from '../home/Contact';
import Link from 'next/link';


const ContactPage = () => {
  const banner = contactbg;
  const headingbanner = `Contact Us <br/> Atulye Krishi Vana`
  const subtitle = `Sustaining Ecosystems, Empowering Communities`;
  const { heading, left, right } = contactData;

  const socialLink=[
    { name: 'linkedin', icon: linkedin, link: 'https://www.linkedin.com/company/atulyekrishivana/' },
    { name: 'Instagram', icon: instagram, link: 'https://www.instagram.com/atulyekrishivana/' },
    { name: 'facebook', icon: facebook, link: 'https://www.facebook.com/profile.php?id=61552925864614' },
  ]
  return (
    <>

      <section
        className={`py-16 lg:h-[550px] flex items-center justify-center relative`}
        style={{ background: `url(${banner?.src}) center center / cover no-repeat` }}
      >

        <div className="relative text-center z-10 flex flex-wrap w-full items-center justify-center">
        <div className='absolute z-10 top-2/4 left-2 md:left-10 -translate-y-2/4'>
              <ul>
                {socialLink.map((item, index) => (
                  <li key={index} className='text-white text-2xl mb-2 md:mb-3'>
                    <Link href={item.link} target="_blank">
                       <Image src={item.icon} alt={item.name} width={30} height={30} className='w-8 h-8 md:w-10 md:h-10' />
                    </Link>
                  </li>
                ))}
               </ul>

         </div>
          <div className="w-10/12 md:w-3/4 lg:w-7/12">
            <h1
              className="text-white text-3xl md:text-4xl lg:leading-tight lg:text-[40px] font-bold w-full"
              dangerouslySetInnerHTML={{ __html: headingbanner }}
            ></h1>

            <p className="w-full text-white text-base md:text-lg mt-5 mb-7 lg:mt-7 lg:mb-10">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      <section
        className=" relative text-center md:text-left  flex items-center justify-center py:8 md:py-12"

      >
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 pt-10 md:pt-0'>
          <h2 className="text-3xl text-center md:leading-[1.3] md:text-4xl font-semibold redhat text-[#1B453C] md:mb-6">
            {heading}
          </h2>
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">


            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Section */}
              <div className="md:w-[55%]">
                <h3 className="text-xl font-semibold mb-2">{left.title}</h3>
                <p className="text-sm text-black mb-6 md:mb-8">{left.description}</p>

                <div className="bg-[#D9D9D9E0] rounded-tr-[50px] rounded-tl-[50px]  p-10 md:p-14">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {left.formFields.slice(0, 4).map((field, i) => (
                      <input
                        key={i}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="px-4 py-3 rounded-md border border-none focus:outline-none"
                      />
                    ))}
                  </div>
                  <div className="mt-4">
                    <textarea
                      name={left.formFields[4].name}
                      placeholder={left.formFields[4].placeholder}
                      rows={2}
                      className="w-full px-4 py-3 rounded-md border border-none focus:outline-none"
                    ></textarea>
                  </div>
                  <div className='text-center'>
                    <button className="mt-4 bg-[#234134] text-white px-8 py-2 rounded-[4px] hover:opacity-90 transition">
                      {left.button}
                    </button>
                  </div>
                </div>
              </div>


              <div className="md:w-1/3 border-t md:border-0 pt-6 md:pt-0 md:border-l border-black md:ml-12 md:pl-12">
                <h4 className="font-bold text-lg text-black">{right.officeTitle}</h4>
                <p className="font-semibold text-black mb-2">{right.officeName}</p>
                {right.address.map((line, i) => (
                  <p key={i} className="text-sm md:text-base text-gray-700">{line}</p>
                ))}

                <div className="mt-4 md:mt-8">
                  <h5 className="font-semibold text-lg mb-2 " >Call Us</h5>
                  <p className="text-sm flex gap-2 items-center justify-center md:justify-start"><BiSolidPhoneCall className='text-base' /> {right.callUs}</p>
                </div>

                <div className="mt-4 md:mt-8">
                  <h5 className="font-semibold text-lg mb-2">Website</h5>
                  <a href={`https://${right.website}`} className="text-[#3771C8] text-sm underline">
                    {right.website}
                  </a>
                </div>

                <div className="mt-4 md:mt-8">
                  <h5 className="font-semibold text-lg mb-2">Email Us</h5>
                  <p className="text-sm">{right.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className=" relative text-center md:text-left  flex items-center justify-center pb-20 md:pb-24" >
        <div className='mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-2'>
          <Map />
        </div>
      </section>
      <Image src={contactFooter} alt="contact img" width={600} height={300} className='w-full h-full' />




    </>
  )
}

export default ContactPage