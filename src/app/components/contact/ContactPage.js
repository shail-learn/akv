'use client'
import React from 'react'
import { useState, useEffect } from 'react';
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
  //zc
  const [successMsg, setSuccessMsg] = useState('');
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => setSuccessMsg(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  function contactfrm(e) {
    e.preventDefault();



    const form = e.target;
    const data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      city: form.city.value.trim(),
      message: form.message.value.trim(),
    };

    for (const [key, value] of Object.entries(data)) {
      if (!value) {
        alert(`${key} is required`);
        return;
      }
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(data.email)) {
      alert("Invalid email format");
      return;
    }

    fetch('/data/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log('api reponse', result);
        if (result.success) {
          setSuccessMsg('Form submitted successfully!');
          form.reset();
        } else {
          alert('Error: ' + result.message);
        }
      })
      .catch(err => {
        console.error(err);
        alert('Something went wrong.');
      });
  }

  //zc var
  const headingbanner = `Contact Us <br/> Atulye Krishi Vana`
  const subtitle = `Sustaining Ecosystems, Empowering Communities`;
  const { heading, left, right } = contactData;



  const socialLink = [
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
          <h2 className="text-3xl text-center md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-[#1B453C] md:mb-6">
            {heading}
          </h2>
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">


            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Section */}
              <div className="md:w-[55%]">

                <form onSubmit={contactfrm}>
                  <h3 className="text-2xl font-semibold mb-2">{left.title}</h3>
                  <p className="text-base md:text-[17px] text-black mb-6 md:mb-8">{left.description}</p>


                  <div className="bg-[#D9D9D9E0] rounded-tr-[50px] rounded-tl-[50px]   p-10 md:p-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {left.formFields.slice(0, 4).map((field, i) => (
                        <input
                          key={i}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="px-4 py-3 rounded-md border border-none focus:outline-none"
                          required
                          maxLength={field.name === 'phone' ? 10 : undefined} // Set maxLength for phone field only
                          onInput={(e) => {
                            if (field.name === 'phone') {
                              e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10); // Enforce 10 digits
                            }
                          }}
                        />
                      ))}
                    </div>
                    <div className="mt-4">
                      <textarea
                        name={left.formFields[4].name}
                        placeholder={left.formFields[4].placeholder}
                        rows={2}
                        className="w-full px-4 py-3 rounded-md border border-none focus:outline-none"
                        required></textarea>
                    </div>
                    <div className='text-center'>
                      <button className="mt-4 bg-[#234134] text-white px-8 py-2 rounded-[4px] hover:opacity-90 transition">
                        {left.button}
                      </button>
                    </div>


                    {successMsg && (
                      <div className="mb-4 pt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow text-sm transition-all duration-300">
                        <strong className="font-semibold">Success!</strong> {successMsg}
                      </div>
                    )}
                  </div>
                </form>
              </div>


              <div className="md:w-1/3 border-t md:border-0 pt-6 md:pt-0 md:border-l border-black md:ml-12 md:pl-12">
                <h4 className="font-bold text-2xl mb-4 text-black">{right.officeTitle}</h4>
                <p className="font-semibold text-black mb-2 text-lg">{right.officeName}</p>
                {right.address.map((line, i) => (
                  <p key={i} className="text-base md:text-[17px] text-gray-700">{line}</p>
                ))}

                <div className="mt-4 md:mt-8">
                  <h5 className="font-semibold text-xl mb-2 " >Call Us</h5>
                  <p className="text-base md:text-[17px] flex gap-2 items-center justify-center md:justify-start"><BiSolidPhoneCall className='text-base' /> {right.callUs}</p>
                </div>

                <div className="mt-4 md:mt-8">
                  <h5 className="font-semibold text-xl mb-2">Website</h5>
                  <Link href={`https://${right.website}`} className="text-[#3771C8] text-base md:text-[17px] underline">
                    {right.website}
                  </Link>
                </div>

                <div className="mt-4 md:mt-8">
                  <h5 className="font-semibold text-xl mb-2">Email Us</h5>
                  <p className="text-base md:text-[17px]">{right.email}</p>
                </div>
                <div className="mt-4 md:mt-8">
                  <h5 className="font-semibold text-xl mb-2">Be a Part of Change</h5>
                  <Link href="https://atulye-foundation.org" target='_blank' className="text-[#3771C8] text-base md:text-[17px] underline">
                    Atulye Foundation
                  </Link>
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