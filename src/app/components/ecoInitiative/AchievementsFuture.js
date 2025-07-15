import React from 'react'
import achievement from "../../../assets/images/eco/impact1.webp";
import achievement1 from "../../../assets/images/eco/impact2.webp";
import achievement2 from "../../../assets/images/eco/impact3.webp";
import achievement3 from "../../../assets/images/eco/impact4.webp";
import impactbg from "../../../assets/images/eco/impact-bg.webp";
import Plant from "../../../assets/images/eco/future.webp";
import { MdCheckCircle } from "react-icons/md";



import Image from 'next/image';
import Link from 'next/link';


export const Achievements = () => {
  const heading = "Achievements"
  const subtitle = "Impact Created"
  const achievements = [
    {
      title: "50% Women Empowerment",
      description: "Employing and training local women.",
      image: achievement,
    },
    {
      title: "3-5°C Temperature Reduction",
      description: "Achieved through carbon sequestration.",
      image: achievement1,
    },
    {
      title: "Enhanced Soil and Water Quality",
      description: "Preserving natural ecosystems.",
      image: achievement2,
    },
    {
      title: "Community Development",
      description: "Supporting over 200 employees and 400+ laborers.",
      image: achievement3,
    },
  ];
  return (
    <>

      <section className='relative text-center md:text-left mt-10 md:mt-20 pb-16 pt-16 lg:pb-20 lg:pt-20' style={{ background: `url(${impactbg.src})center center / cover no-repeat` }} >
        <div className="lg:w-12/12  w-full  w-12/12">
          <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-center text-white mb-2">{heading}</h2>
          <h5 className="text-xl md:leading-[1.3] md:text-2xl font-medium redhat text-center text-[#F7C35F] mb-3">{subtitle}</h5>
        </div>
        <div className='mx-auto max-w-7xl flex flex-wrap md:flex-nowrap gap-0 md:gap-12'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-10 w-full">
            {achievements.map((item, index) => (
              <div key={index} className="relative  overflow-hidden w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="w-full h-full"
                />

                {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
                <div className="absolute left-5 top-2/4 -translate-y-2/4 bg-white bg-opacity-80 p-4 md:p-6 md:py-10 rounded-md w-[60%] md:w-[40%]">
                  <h3 className="text-xl redhat font-semibold text-[#1B453C]">{item.title}</h3>
                  <p className="text-sm md:text-base redhat text-[#1B453C]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    </>
  )
}




export const Future = () => {
  const heading = "Future Vision"
  const subtitle = "Towards a Greener Tomorrow"
  const title = "Our future plans include:"
  const futurePlans = [
    "Expanding to cover 20,000 acres by 2050.",
    'Launching the "Purnima Project" – an online green market platform.',
    "Developing eco-tourism and wellness centers.",
    "Promoting contract farming and renewable energy.",
  ];


  return (
    <>

      <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10">

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-black mb-2">
              {heading}
            </h2>
            <p className="text-xl md:leading-[1.3] md:text-2xl font-medium redhat text-[#F7C35F] lg:mb-16 mb-10">
              {subtitle}
            </p>
            <p className="text-black mt-4 text-xl">{title}</p>

            {/* List using map() */}
            <ul className="mt-6 space-y-4">
              {futurePlans.map((plan, index) => (
                <li key={index} className="flex   space-x-3">
                  <span className="w-6 h-6 text-[#1B453C] flex items-center justify-center rounded-full">
                    <MdCheckCircle className='w-6 h-6' />
                  </span>
                  <p className="text-[#141414] text-left opacity-80">{plan}</p>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-10 md:mt-20">
              <Link
                href="/contact-us"
                className="bg-[#1B453C] text-white px-10 redhat py-4 rounded-[4px] text-sm font-medium hover:bg-black"
              >
                JOIN THE MOVEMENT
              </Link>
            </div>
          </div>
          <div className=" w-full md:w-1/2">
            <Image
              src={Plant}
              alt="Planting"
              width={200}
              height={200}
              className="w-full h-full"
            />

          </div>
        </div>
      </section>
    </>
  )
}
