'use client';
import Image from 'next/image'
import React from 'react'
import image1 from "../../../assets/images/AgroTourism/Sustainability1.webp";
import image2 from "../../../assets/images/AgroTourism/Sustainability2.webp";
import image3 from "../../../assets/images/AgroTourism/Sustainability3.webp";
import image4 from "../../../assets/images/AgroTourism/Sustainability4.webp";
import slider1 from "../../../assets/images/AgroTourism/slider01.webp";
import bgcontact from "../../../assets/images/AgroTourism/contact.webp";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaBed, FaPhoneAlt } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";

import { IconType } from "react-icons";


import BigSlider from '../BigSlider';
import Link from 'next/link';


export const Sustainability = () => {
    const heading = "Agro–Tourism & Sustainability"
    const subtitle = "At Atulye Krishi Vana, agro–tourism is a force for positive change. Your visit directly contributes to:"
    const agroSustainability1 = [
        {
            title: "Climate Action & Carbon Sequestration",
            description: "Our forests absorb CO₂, mitigating climate change and reducing greenhouse gas emissions.",
            image: image1,
        },
        {
            title: "Reviving Traditional Knowledge",
            description: "Promoting organic farming and time-tested agroforestry practices among local farmers.",
            image: image2,
        },

    ]
    const agroSustainability2 = [
        {
            title: "Employment for local communities",
            description: "Creating thousands of direct and indirect jobs in farming, processing, and eco-tourism.",
            image: image3,
        },
        {
            title: "Preservation of biodiversity",
            description: "Protecting indigenous plant species and fostering a balanced ecosystem.",
            image: image4,
        },

    ]
    const footer = "Every visitor plays a role in shaping a sustainable future for both people and the planet."


    return (
        <>
            <section className='py-10 lg:py-16'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>

                    <div className='flex flex-col lg:flex-row justify-between  gap-4 lg:gap-12'>
                        <div className='lg:w-6/12  w-full w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-6'>{heading}</h2>
                            <p className='text-black text-base text-justify redhat pb-8'>{subtitle}</p>
                            {agroSustainability1.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative rounded-br-[50px] mb-6 md:mb-10 overflow-hidden group shadow-lg"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute top-6 rounded-br-[50px] left-6 bg-white bg-opacity-90 md:w-[48%] w-2/3  p-6 flex flex-col">
                                        <h3 className="text-lg md:text-xl text-[#1B453C]">{item.title}</h3>
                                        <p className="text-sm text-[#1B453C] mt-2">{item.description}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className='lg:w-6/12  w-full w-12/12'>
                            {agroSustainability2.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative rounded-br-[50px] mb-6 md:mb-10 overflow-hidden group shadow-lg"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute top-6 rounded-br-[50px] left-6 bg-white bg-opacity-90 md:w-[48%] w-2/3  p-6 flex flex-col">
                                        <h3 className="text-lg md:text-xl text-[#1B453C]">{item.title}</h3>
                                        <p className="text-sm text-[#1B453C] mt-2">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                            <p className='text-black text-base text-justify redhat pb-8'>{footer}</p>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )


}

export const Unique = () => {
    const heading1 = "Unique Attractions & Learning Experiences"
    const attractions = [

        {
            "title": "Shri Tulsidas Ji Panchvati Vatika",
            "description": "A sacred collection of five trees (Pipal, Bargad, Bael, Amla, Ashok) associated with Vedic traditions, believed to have healing and spiritual significance.",
            "image": slider1
        },
        {
            "title": "Shri Tridev Triveni Vatika",
            "description": "A spiritual agroforestry space where Pipal, Banyan, and Neem trees symbolize Lord Brahma, Vishnu, and Mahesh.",
            "image": slider1
        },
        {
            "title": "Medicinal & Ayurvedic Garden",
            "description": "Explore a collection of 108 medicinal plants used in Ayurveda for natural healing.",
            "image": slider1
        },
        {
            "title": "Medicinal & Ayurvedic Garden",
            "description": "Explore a collection of 108 medicinal plants used in Ayurveda for natural healing.",
            "image": slider1
        }
    ]
    return (
        <>

            <section className='bg-[#F4F4F4] pt-12'>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl text-center md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C]">
                        {heading1}
                    </h2>

                    <BigSlider items={attractions} />
                </div>
            </section>
        </>
    )
}

export const Address = () => {
    const visitInfoData = {
        heading: 'Plan Your Visit',
        buttonText: 'Book Your Experience Now!',
        description:
          'Come and be part of a sustainable future. Explore the best of nature, farming, and eco-tourism at Atulye Krishi Vana!',
        info: [
          {
            icon: FaMapMarkerAlt,
            label: 'Location:',
            value: 'Atulye Krishi Vana Mithlesh Nagar, Village, Ramgarh, Sehore, Bhopal, MP',
          },
          {
            icon: FaRegCalendarAlt,
            label: 'Best Time to Visit:',
            value: 'October – March (pleasant weather & active farm operations)',
          },
          {
            icon: MdHomeWork ,
            label: 'Stay Options:',
            value: 'Farm Cottages | Camping | Eco-Stays',
          },
          {
            icon: FaPhoneAlt,
            label: 'Contact Us:',
            value: '+91 9220152225 | info@akv.org.in',
          },
        ],
      };
    return (
      <section
        className="relative pt-16 pb-16 lg:pt-20 lg:pb-20"
        style={{
          background: `url(${bgcontact.src}) center center / cover no-repeat`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="mx-auto max-w-7xl px-4 md:px-8  lg:px-2 relative z-10">
          <div className="flex flex-wrap lg:flex-nowrap gap-6 md:gap-16 justify-between items-end">
            {/* Left Column */}
            <div className="w-full lg:w-6/12">
              <div className="flex flex-col h-full justify-between">
                <h2 className="text-white text-3xl md:text-4xl font-medium redhat mb-4 lg:mb-7 text-center lg:text-left">
                  {visitInfoData.heading}
                </h2>

                <Link
                  href="/contact-us"
                  className="text-sm md:text-base text-center bg-white text-black lg:mt-32 py-4 px-6 w-fit mx-auto lg:mx-0 mb-6"
                >
                  {visitInfoData.buttonText}
                </Link>

                <p className="text-sm md:text-[15px] text-white text-center md:text-left">
                  {visitInfoData.description}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-6/12">
              <div className="bg-[#1B453C] bg-opacity-85 p-6 rounded-2xl">
                <ul className="space-y-4">
                  {visitInfoData.info.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={index}
                        className="text-white text-sm md:text-[15px] flex items-start space-x-3"
                      >
                        <Icon className="text-[#F7C35F] mt-1" size={18} />
                        <p className="redhat">
                          <span className="font-medium">{item.label}</span>{" "}
                          <span className="text-[#F7C35F]">{item.value}</span>
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };



