import React from 'react'
import Image from "next/image";
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/fruit/banner.webp";
import whoimg from "../../../assets/images/fruit/who.webp";
import mangos from "../../../assets/images/fruit/mango.webp";
import image3 from "../../../assets/images/fruit/mango-still.webp";


import Link from 'next/link';

export const Banner = () => {
  const text = {
    banner: banner,
    heading: `Better Mango Farming Starts Here <br/>  Growing Success Together!`,
    opacity: "opacity-15"
  };
  return (
    <>
      <BannerPage
        heading={text.heading}
        title={text.title}
        opacity={text.opacity}
        banner={text.banner}
        classname={text.className}

      />
    </>
  )
}


export const Who = () => {
  const heading = "Who we are"
  const description = `Join thousands of successful mango farmers who have partnered with
    <b class="text-[#455050]">Atulye Krishi Vana</b>.
    Our complete support system - from soil testing to market linkage - ensures your mango farming venture thrives.
    Let's grow together with scientific methods and traditional wisdom. `
  return (
    <>
      <section className='relative text-center md:text-left pt-10 pb-12 lg:pt-12 lg:pb-12 bg-[#F4F4F4]'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
            <div className='lg:w-6/12  w-full w-12/12'>

              <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#488540] mt-4  mb-6'>{heading}</h2>
              <p className='text-[#7b7b7b] text-justify text-base md:text-[17px] redhat mt-6 mb-10 md:my-12' dangerouslySetInnerHTML={{ __html: description }}>
              </p>
              <Link href="#" className='bg-transparent border border-[#488540] text-[#488540] shadow-lg py-3 px-12 inline-block text-center text-base hover:bg-[#488540] hover:text-white transition-all  duration-500 '>Read more</Link>


            </div>
            <div className='lg:w-6/12  w-full w-12/12'>
              <Image className='w-full h-full rounded-xl' src={whoimg} alt='banner' />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}



export const Know = () => {
  const heading = "Knowing the Top Mango Varieties"
  const description = `India's rich mango diversity offers something for every taste and purpose. The Alphonso stands as royalty among mangoes, cherished for its rich flavor and golden hue. Its flesh carries a distinct aroma and sweetness that makes it perfect for both fresh consumption and processing.`
  const mangoes = [
    {
      icon: mangos,
      title: "Banganapalli",
    },
    {
      icon: mangos,
      title: "Mulgo",
    },
    {
      icon: mangos,
      title: "PKM series",
    },
    {
      icon: mangos,
      title: "Totapuri",
    },
    {
      icon: mangos,
      title: "Rumani",
    },
  ];
  return (
    <>
      <section
        className=" bg-[#fcf9f4] pt-0 pb-14 lg:pt-0 lg:pb-0">
        <div className='mx-auto max-full flex flex-wrap md:flex-nowrap gap-0 md:gap-12'>
          <div className='w-full md:w-6/12'>
            <Image className='h-full w-full' src={image3} alt="banner" />
          </div>
          <div className='w-full md:w-6/12 px-3'>
            <h2 className="lg:leading-snug text-[#1B453C] font-semibold redhat pt-10 md:pt-16 text-center md:text-left text-3xl md:text-4xl w-full"> {heading}</h2>
            <p className='text-[#455050] text-base text-justify redhat my-8' dangerouslySetInnerHTML={{ __html: description }}>
            </p>
            <div className='py-6 mb-12 text-center md:text-left'>
              <Link href="#" className='bg-transparent border border-[#1B453C] text-[#1B453C] shadow-lg py-2 px-8 inline-block text-center text-base hover:bg-[#1B453C] hover:text-white transition-all duration-500 '>Know more</Link>
            </div>
            <div className="flex flex-wrap justify-center px-4 md:mt-24 lg:px-0">
              {mangoes.map((item, index) => (
                <div
                  key={index}
                  className="items-center text-center gap-3 p-2 w-full md:w-1/3 border-b border-white pb-6 border-opacity-40"
                >
                  <div className="w-full h-auto mb-2">
                    <Image src={item.icon} alt={item.title} className="w-full h-auto" />
                  </div>

                  <div>
                    <h3 className="text-base mb-1 redhat font-medium text-[#1B453C]">
                      {item.title}
                    </h3>
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
