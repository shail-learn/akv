
import React from 'react'
import objectbg from "../../../assets/images/bamboo/Applications-bg.webp";

import img1 from "../../../assets/images/bamboo/img1.png";
import img2 from "../../../assets/images/bamboo/img2.png";
import img3 from "../../../assets/images/bamboo/img3.png";
import img4 from "../../../assets/images/bamboo/img4.png";
import img5 from "../../../assets/images/bamboo/img5.png";

import img6 from "../../../assets/images/bamboo/Cultivation2.webp";
import bambooimg from "../../../assets/images/bamboo/green-bamboo.webp";

import icon1 from "../../../assets/images/bamboo/icon1.png";
import icon2 from "../../../assets/images/bamboo/icon2.png";
import icon3 from "../../../assets/images/bamboo/icon3.png";
import icon4 from "../../../assets/images/bamboo/icon4.png";





import Image from 'next/image';
export const Uses = () => {
  const heading = "Uses & Applications"

  const objectives = [
    {
      id: "01",
      title: "Construction & Infrastructure",
      points: [
        "Used for flooring, scaffolding, and housing structures.",
        "Strong yet lightweight, making it ideal for earthquake-resistant buildings.",
      ],

      image: img1,
    },
    {
      id: "02",
      title: "Furniture & Interior Design",
      points: [
        "Ideal for making lightweight furniture, cabinets, and home decor.",
        "Naturally termite-resistant, increasing product longevity.",
      ],
      image: img2,
    },
    {
      id: "03",
      title: "Paper & Pulp Industry",
      points: [
        "Used in high-quality paper production due to its long fibers.",
        "A preferred raw material for sustainable packaging solutions.",
      ],
      image: img3,
    },
    {
      id: "04",
      title: "Textile & Fashion Industry",
      points: [
        "Used in bamboo fabric production for breathable, antibacterial clothing.",
        "A sustainable alternative to cotton and synthetic fabrics...",
      ],
      image: img4,
    },
    {
      id: "05",
      title: "Culinary & Healthcare",
      points: [
        "Bamboo shoots are consumed as a nutrient-rich food source.",
        "Extracts used in medicinal and cosmetic formulations.",
      ],
      image: img5,
    },
  ];
  return (
    <>

      <section className='relative text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20' style={{ background: `url(${objectbg.src})center center / cover no-repeat` }} >

        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
          <div className='lg:w-12/12  w-full  w-12/12'>
            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-center text-white mb-4'>{heading}</h2>

          </div>

          <div className="mt-10 relative">
            <div className='grid col-span-8 justify-center '>
              <div className="border_number big_border_number relative">
                {objectives.map((obj, index) => (
                  <div key={index} className="flex  gap-4 md:gap-6 items-start mb-4 relative">
                    <div className="md:w-28 md:h-28 w-28 rounded-lg overflow-hidden">
                      <Image src={obj.image} alt={obj.title} width={100} height={100} className="object-cover" />
                    </div>
                    <div className=' '>
                      {/* <div className="absolute lg:left-5 top-0 h-full border-l-2 border-dashed border-white"></div> */}
                      <div
                        className={`left-4 z-10 md:w-10 md:h-10 w-8 h-8 text-sm md:text-base relative flex items-center justify-center text-black font-bold rounded-full bg-white`}
                      >
                        {obj.id}

                      </div>
                    </div>

                    <div className="ml-6 w-3/4 text-left">
                      <h3 className="text-xl lg:text-2xl text-white redhat mt-1 mb-3 font-semibold">{obj.title}:</h3>
                      {obj.description && (
                        <p className="text-gray-300 redhat text-sm mb-3">{obj.description}</p>
                      )}
                      {obj.points && (
                        <ul className="list-disc pl-4">
                          {obj.points.map((point, idx) => (
                            <li key={idx} className="text-gray-300 text-sm redhat">{point}</li>
                          ))}
                        </ul>
                      )}
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




export const Sustainable = () => {
  const heading = "Sustainable Bamboo Cultivation"
  const subtitle = ` with <b>Atulye Krishi Vana’s</b> Agroforestry Solutions`
  const data = [
    {
      img: img6,
      title: 'Scientific Plantation Techniques',
      description: 'High-yield saplings and advanced cultivation practices.',
    },
    {
      img: img6,
      title: 'Eco-Friendly Timber Production',
      description: 'Reducing deforestation and promoting green cover.',
    },
    {
      img: img6,
      title: 'Farmer Training & Support',
      description: 'Helping farmers maximize profits through structured agroforestry models.',
    },
  ];
  return (
    <>

      <section className="py-14 lg:py-16">
        <h2 className='px-4 lg:leading-snug  text-[#1B453C] redhat mb-4  text-center   text-3xl md:text-4xl  font-normal  w-full'>{heading}</h2>
        <div
          className="text-[#1B453C] redhat mb-7 text-xl text-center md:mb-12"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="group rounded-tl-[60px] overflow-hidden">
              <div>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-all md:group-hover:h-80"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg mb-2 font-semibold text-[#1B453C]">{item.title}</h3>
                <p className="text-sm text-black">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}



export const Invest = () => {
  const heading = "Why Invest in Bamboo?"
  const data = [
    { icon: icon1, title: 'Rapid Harvesting Cycle' },
    { icon: icon2, title: 'Eco-Friendly & Renewable' },
    { icon: icon3, title: 'High Market Demand' },
    { icon: icon4, title: 'Multiple Revenue Streams' },
  ];

  return (
    <>
      <section className="py-14 pb-0 lg:py-0 bg-[#ECECEC]">

      <div className="mx-auto max-w-full px-4 md:!px-16 md:!pr-0 lg:px-0 flex   items-center flex-col md:flex-row gap-16 md:gap-8">


        <div className="w-full md:w-3/5 grid grid-cols-1 gap-6">
        <div className="w-full md:w-full grid grid-cols-1 gap-6">
      <h2 className='w-full lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center text-3xl md:text-4xl  font-normal '>{heading}</h2>
      </div>
           <div className='w-full grid grid-cols-2 gap-8 md:gap-12 lg:gap-20'>
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-[#1B453C] text-white p-4 rounded-full text-3xl">
                <Image className='h-10 w-10 object-contain' src={item.icon} alt={item.title} />
              </div>
              <p className="mt-3 text-[#1B453C] text-lg md:text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        </div>



        <div className="w-full md:w-[40%]">
          <Image
            src={bambooimg}
            alt="Bamboo"
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
    </>
  )
}
