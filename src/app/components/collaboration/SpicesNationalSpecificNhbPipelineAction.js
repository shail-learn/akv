import React from 'react'
import { MarketLayout } from '../utilities/UsesStanadarLayout';
import img01 from "../../../assets/images/collab/farmer.webp";
import bgbanner from "../../../assets/images/about/bgbanner.webp";
import PartnerBg from "../../../assets/images/training-development/multi/bgimg.webp";
import Plant from "../../../assets/images/training-development/multi/future.svg";
import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image';
import value1 from "../../../assets/images/collab/icon1.svg";
import value2 from "../../../assets/images/collab/icon2.svg";
import value3 from "../../../assets/images/collab/icon3.svg";



export const Spices = () => {
    const marketData = {
        imageSrc: img01,
        title: "Spices Board India   Value Chain Enhancement",
        description: `<b>Ministry:</b> Ministry of Commerce & Industry <br>
        <b>Objective:</b> Promotion of Indian spices through sustainable cultivation, processing, and export readiness. `,
        steptitle : `Proposed Areas of Collaboration:        `,

        steps: [
            "Expansion of indigenous spice cultivation (like turmeric, black pepper, lemongrass)",
            "Support for spice nurseries and micro-processing units",
            "Capacity building for farmers in grading, branding, and traceability",

        ],

    };
    return (
        <>
        <div className='-mt-8'>
            <MarketLayout marketData={marketData} />
            </div>


        </>
    );
}


export const National = () => {
  const heading = "National Medicinal Plants Board (NMPB)";
  const description = `
  <b>Ministry:</b> Ministry of AYUSH <br>
  <b>Project:</b> Medicinal Plant Cultivation and Value Addition
  <br><br>
  <b>Mission Highlights:</b>
  <br><br>
  <ul class="list-disc ms-6">
     <li>Financial assistance for cultivation of 140+ medicinal plant species</li>
     <li>Promotion of AYUSH-based farming systems</li>
     <li>Infrastructure support like drying sheds, storage, and distillation units</li>
  </ul>

  `

  return (
      <>
          <section className='bg-cover bg-bottom md:bg-center relative  text-center md:text-left   pt-16 pb-16 lg:pt-36 lg:pb-36' style={{ background: `url(${bgbanner.src})center / cover no-repeat` }}>
              <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                  <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
                      <div className='lg:w-4/12 md:w-6/12 w-12/12'>
                          <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-white mb-10'>{heading}</h2>
                          <p className='text-white text-base  text-justify' dangerouslySetInnerHTML={{ __html: description }}>

                          </p>

                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}


export const Specific = () => {
  const heading = "Specific Proposal with Atulye Krishi Vana"

  const textitem = [
      {
          title: 'Hydrochloric Extraction Unit Setup:',
          description:" Govt to support up to 50% of the cost under 50:50 model (govt:private)"
      },
      {
          title: 'Promotion of rare species cultivation within Vrikshayurveda Garden zones',
      },

  ]

  return (
      <>
          <section
              className="py-14 lg:py-16 bg-[#295F54] overflow-hidden " >


              <div className='mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-4'>
                  <div className='w-full text-center'>
                      <div className='mx-auto w-full lg:w-7/12'>
                          <h2 className="text-white text-3xl md:text-4xl mb-10 md:mb-16 lg:leading-tight  redhat  font-medium  w-full">{heading}</h2>

                      </div>
                  </div>

                  <div className='w-full px-6'>
                      <div className=' flex flex-wrap md:flex-nowrap gap-6 md:gap-16 justify-center'>

                          {textitem.map((item, index) => {
                              return (

                                  <div key={index} className=' md:w-[30%] grid items-center mb-4 md:mb-0 justify-center gap-8 '>
                                      <div className='w-full text-center border-2 border-white h-full p-10 py-12 md:py-16 rounded-xl' style={{ boxShadow: "5px 4px 5px 0px #FFFFFF40" }}>
                                          <h2 className='text-white text-lg md:text-xl'> {item.title}</h2>
                                          <h2 className='text-white text-[15px] font-light'> {item.description}</h2>
                                      </div>
                                  </div>
                              )
                          })}


                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}



export const Nhb = () => {
  const heading = " National Horticulture Board (NHB)"

    const info = `<b>Ministry:</b> Ministry of Agriculture & Farmers Welfare <br>
    <b>Scheme Support:</b><br>
    High-tech horticulture projects<br>
    Cold chain and value addition infrastructure<br>
    Institutional strengthening and market linkages <br>`
    const futurePlans = [
        "Funding for climate-controlled polyhouses and vertical farming pilots",
        'Development of demonstration plots for horticulture education',
        "Support for organic certification and quality control labs",
    ];


    return (
        <>

            <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-20">
                <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse justify-between md:flex-row items-center gap-10">

                    <div className="w-full md:w-[45%] text-center md:text-left">
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-black mb-2">
                            {heading}
                        </h2>

                        <p className="text-black py-4 md:py-6 text-base" dangerouslySetInnerHTML={{__html:info}}></p>

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

                    </div>
                    <div className=" w-full md:w-[45%]">
                        <Image
                            src={Plant}
                            alt="Planting"
                            width={600}
                            height={600}
                            className="w-full h-full"
                            quality={100}
                        />

                    </div>
                </div>
            </section>
        </>
    )
}



export const Pipeline = () => {
  const heading = 'In the Pipeline – Future Collaborations'
  const coreValues = [
      {
          title: "ICAR and CSIR institutions for varietal development",

          icon: value1,
      },
      {
          title: "KVIC for aromatic crop value chains",

          icon: value2,
      },
      {
          title: "NABARD for rural entrepreneurship through agri-clusters",

          icon: value3,
      },

  ];
  return (
      <>
          <section className='relative text-center bg-[#F5F5F5] md:text-left pt-12 pb-12 lg:pt-10 lg:pb-20'>
              <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative'>
                  <h2 className='text-3xl text-center md:leading-[1.3] md:text-4xl font-medium redhat text-black mt-4 mb-16'>{heading}</h2>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                      {coreValues.map((value, index) => (
                          <div key={index} className="relative flex flex-col items-center text-center  lg:w-[30%] xl:w-[28%]">

                              <div className="w-32 h-32 flex items-center justify-center rounded-full outline-dashed outline-[#c4a87c]  outline-2  border-4 border-solid border-[#F5F5F5] bg-[#1B453C]">
                                  <Image src={value.icon} alt={value.title} width={50} height={50} className="w-16 h-16" />
                              </div>

                              <h3 className="text-base lg:text-lg redhat font-semibold text-gray-900 mt-6">{value.title}</h3>
                              {/* <p className="text-[#141414] opacity-75 redhat mt-2 max-w-xs">{value.description}</p> */}
                          </div>
                      ))}
                  </div>
              </div>
          </section>


      </>
  )
}


export const Action = () => {
  const heading = " Call to Action";
  const description =
      `<b>Interested in partnering with us?</b> <br>
      We welcome research institutions, government departments, and private organizations to collaborate in building a self-reliant, sustainable agri-ecosystem.
       <br><br> <b>📩 Connect with us at [email/contact form]</b>
      `


  return (
      <section
          className="relative bg-no-repeat !mb-0 py-12 lg:py-20 bg-cover w-full my-8 md:my-12 !mt-0"
          style={{ backgroundImage: `url(${PartnerBg.src})` }}
      >

          <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
              <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
                  <h2 className=" w-full  text-3xl md:text-4xl leading-snug font-bold mb-8 md:mb-10 redhat">
                      {heading}
                  </h2>
                  <p
                      className="mb-6 text-sm  md:text-base   w-full"
                      dangerouslySetInnerHTML={{ __html: description }}
                  ></p>



              </div>
          </div>
      </section>
  );
}
