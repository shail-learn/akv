import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project20/banner.webp";
import image2 from "../../../assets/images/projects/project20/key.webp";
import Image from 'next/image';
import { RiCheckboxCircleFill } from "react-icons/ri";
import image3 from "../../../assets/images/projects/project20/histroy.webp";
import Titleslider from '../Titleslider';

import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project20/use1.webp";
import use2 from "../../../assets/images/projects/project20/use2.webp";
import use3 from "../../../assets/images/projects/project20/use3.webp";
import use4 from "../../../assets/images/projects/project20/use4.webp";
import use5 from "../../../assets/images/projects/project20/use5.webp";
import use6 from "../../../assets/images/projects/project20/use6.webp";
import PartnerBg from "../../../assets/images/projects/project20/bg.webp";

export const Mukund = () => {
    const text = {
        banner: banner,
        heading: `Shri. Mukund Mausam Vedhshala <br> Meteorology Unit`,
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
        </>
    )
}


export const Key = () => {
    const description = `Shri. Mukund Mausam Vedhshala, located within the Transit Building at Khasra No. 100, is a specialized meteorology unit at Atulye Krishi Vana, dedicated to monitoring and recording local weather conditions. Covering 100 square feet and situated 240 meters from the Admin Block, this observatory is equipped with advanced instruments that play a vital role in enabling data-driven agricultural practices. <br> <br> The facility supports climate-resilient farming through continuous observation and analysis of climatic variables essential for sustainable land and resource management.`

    const heading = "Key Details"
    const infoData = [
        {
            title: "Theme Index",
            description: "Meteorology Unit",
        },
        {
            title: "Location Name",
            description: "Shri. Mukund Mausam Vedhshala",
        },
        {
            title: "Coordinates",
            description: `22°59'42.2"N 77°11'15.2"E`,
        },
        {
            title: "Area",
            description: "100 sq ft",
        },
        {
            title: "Distance from Admin Block",
            description: "240 meters",
        },
    ];

    return (
        <>
            <section className='py-12 px-4 md:px-8 lg:px-16 bg-white'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <div className='md:w-[90%] mx-auto'>
                        <p className='mt-0 md:mt-4 text-black font-normal text-center'
                            dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>

            </section>

            <section className='relative text-center md:text-left   pb-16  pt-20 lg:pb-16 bg-[#f5f5f5]'  >
                <div className='mx-auto max-w-7xl px-4 md:px-6 mx:px-2 relative z-1 '>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-12'>
                        <div className='md:w-[40%] w-full  w-12/12'>
                            <div className='relative'>
                                <Image className='w-full h-full rounded-xl' src={image2} alt='banner' />

                            </div>
                        </div>
                        <div className='md:w-[60%]  w-full  w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{heading}</h2>

                            <div className='my-6 mb-14'>
                                {infoData.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3 mb-4 py-1">
                                        <RiCheckboxCircleFill className="h-5 w-5 text-green-800 mt-1" />
                                        <div>
                                            <h3 className="font-semibold redhat text-left text-lg">{item.title}</h3>
                                            <p className="text-black redhat text-left">{item.description}</p>
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


export const Des = () => {
    const heading = "Description"
    const description = `The meteorology observatory at Atulye Krishi Vana is a compact yet comprehensive facility designed to monitor essential climatic parameters, including:
    <ul>
    <li>Temperature</li>
    <li>Humidity</li>
    <li>Wind speed</li>
    <li>Rainfall</li>
    </ul>

    <br>  The data collected is used to guide decisions related to farming practices, resource usage, and risk management. The observatory is a valuable asset for enhancing agricultural efficiency and environmental sustainability through the power of real-time weather intelligence. <br> <br> At Shri Mukund Mausam Vedhshala, we have set up a dedicated meteorological observatory to support precision farming across our agroforestry landscape. This facility carefully tracks vital climate indicators such as temperature, humidity, evapotranspiration, wind speed, and rainfall. <br> <br> By consistently monitoring these parameters, the Vedhshala empowers us to make informed choices in crop planning, irrigation scheduling, pest and disease control, and efficient resource use. Access to accurate weather data helps reduce risks, boost yields, and respond to climate variability while upholding sustainable farming practices. <br><br> Through real-time climate insights, we blend scientific precision with traditional farming knowledge to build a resilient and adaptive agroforestry system.`
    return (
        <section className='text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20'>
            <div className='mx-auto max-w-7xl  px-6'>
                <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{heading}</h2>
            </div>
            <div className='mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10'>
                <div className='w-full md:w-2/3 text-center md:text-left'>

                    <div className='w-full p-4 md:p-8 bg-[#1B453C] rounded-2xl'>
                        <p className='text-white text-base redhat ul_list' dangerouslySetInnerHTML={{ __html: description }}>
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/3 text-center'>
                    <Image className='w-full h-full rounded-xl' src={image3} alt='banner' />
                </div>

            </div>
        </section>
    )
}


export const History = () => {
    const heading = "History"
    const shortdescription = "Shri. Mukund Mausam Vedhshala is inspired by the Mukund Observatory, an astronomical institution established in 1942 by Shri Mukund Rajshree in Varanasi, Uttar Pradesh. That observatory has played a key role in advancing astronomy, promoting scientific research, and facilitating educational outreach."

    const boxslider = [
        {
            heading: "Research and Education",
            description: "Focused on astronomical research and education"
        },
        {
            heading: "Public Awareness",
            description: "Enabled public awareness of the connection between weather and observation conditions"

        },
        {
            heading: "Climate-based Research",
            description: "Promoted climate-based research relevant to both agriculture and astronomy"

        },
        {
            heading: "Outreach Activities",
            description: "Encouraged student participation and outreach activities in science education"
        },


    ]
    return (
        <>
            <Titleslider shortdescription={shortdescription} heading={heading} boxslider={boxslider} />
        </>
    )
}


export const Uses = () => {
    const gridBox = "xl:!grid-cols-3 grid3";
    const custom_class = "white_grid grid_padding";
    const whyChooseData = [
      {
        image: use1,
        title: "Weather Monitoring:",
        description:
          "Provides timely forecasts to support day-to-day farm planning.",
      },
      {
        image: use2,
        title: "Climate Data Collection: ",
        description:
          "Gathers and analyzes long-term climate metrics like temperature, rainfall, and humidity.",
      },
      {
        image: use3,
        title: "Irrigation Management:",
        description:
          "Aids in determining efficient irrigation schedules based on real-time data.",
      },


    ];

    const whyChooseData1 = [

      {
        image: use4,
        title: "Risk Management: ",
        description:
          "Helps predict and mitigate the effects of extreme weather events (storms, drought, frost).",
      },
      {
        image: use5,
        title: "Agricultural Planning:",
        description:
          "Supports crop selection, seasonal strategies, and sowing decisions",
      },
      {
        image: use6,
        title: "Data Analysis and R&D: ",
        description:
          "Offers a robust platform for research, experimentation, and the improvement of climate-smart agricultural practices.",
      },
    ]

    return (
      <>

        <Gridbox
          heading="Uses"
          data={whyChooseData}
          className={custom_class}
          gridBox={gridBox}
        />
        <div className='-mt-8'>
        <Gridbox
          data={whyChooseData1}
          className={custom_class}
          gridBox={gridBox}
        />
  </div>



      </>
    );
}



export const Mausam = () => {
    const heading = "Shri. Mukund Mausam Vedhshala";
    const description =
        "Shri. Mukund Mausam Vedhshala stands as a strategic and scientific pillar of Atulye Krishi Vana, enabling smart agriculture through precision weather tracking. By combining historical inspiration with modern technology, the observatory empowers farmers, researchers, and planners with the data they need to adapt, grow, and sustain. <br> <br> This unit is a reminder that observing the sky can help nurture the earth.";
    return (
        <section
            className="relative bg-no-repeat py-14 lg:py-32 bg-cover bg-center w-full my-8 md:my-12 !mb-0"
            style={{ backgroundImage: `url(${PartnerBg.src})` }}
        >

            <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
                <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
                    <h2 className=" w-full  text-3xl md:text-4xl leading-snug font-bold mb-8 md:mb-10 redhat">
                        {heading}
                    </h2>
                    <p
                        className="mb-4 text-sm  md:text-base   w-full"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>


                </div>
            </div>
        </section>
    );
}
