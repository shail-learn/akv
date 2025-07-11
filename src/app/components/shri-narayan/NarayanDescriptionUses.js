import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/agriculture/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import image1 from "../../../assets/images/digestive/image1.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import Image from 'next/image';
import { SliderBlur } from '../SliderBlur';
import impact1 from "../../../assets/images/stress/Benefit1.webp";
import bgstay from "../../../assets/images/stress/bg.webp";
import image2 from "../../../assets/images/projects/project20/key.webp";
import { RiCheckboxCircleFill } from "react-icons/ri";
import image3 from "../../../assets/images/projects/project20/histroy.webp";
import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project20/use1.webp";
import use2 from "../../../assets/images/projects/project20/use2.webp";
import use3 from "../../../assets/images/projects/project20/use3.webp";
import use4 from "../../../assets/images/projects/project20/use4.webp";

export const Narayan = () => {
  const text = {
    banner: banner,
    heading: `Shri. Narayan Falodyan – Fruit Garden`,

    title: 'Shri. Narayan Falodyan, located at Khasra No. 102, is a vibrant Fruit Garden at Atulye Krishi Vana, offering a delightful collection of over 40 different fruit plant varieties. Spanning 1550 square meters and situated 730 meters from the Admin Block, the garden is a sensory experience of color, fragrance, and taste. The garden serves as a model for sustainable fruit cultivation while providing educational, recreational, and research value to visitors and learners.',
    opacity: 'opacity-50'
  }
  return (
    <>
      <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
      {/* <Wave /> */}
    </>
  )
}


export const Description = () => {
  const heading = "Key Details"
  const infoData = [
    {
      title: "Theme Index",
      description: "Fruit Garden",
    },
    {
      title: "Location Name",
      description: "Shri. Narayan Falodyan",
    },
    {
      title: "Coordinates",
      description: `22°59'38.9"N 77°10'47.4"E`,
    },
    {
      title: "Area",
      description: "1550 sq m",
    },

    {
      title: "Distance from Admin Block",
      description: "730 meters",
    },
  ];


  const main_heading = "Description"
  const shortinfo = `Nestled in a serene corner of Atulye Krishi Vana, the fruit garden presents a rich mosaic of more than 40 fruit species. Here, visitors can experience a living landscape where:
   <ul class="list-disc list-inside py-3">
   <li>Coconut palms sway gently</li>
   <li>Dragonfruit plants add exotic charm</li>
   <li>The sweet scent of guava blends with the tang of pomegranate</li>
   <li>Trees of ber, papaya, banana, and custard apple flourish side by side</li>
   <li>Seasonal fruits like mango, lychee, ramfal, and avocado grow abundantly</li>
   <li>Zesty oranges, rich mulberries, almond, tamarind, and palm trees add depth to the collection</li>

   </ul>
   Each tree enhances the space with its own taste, aroma, and visual appeal, making the garden a paradise for fruit lovers and nature enthusiasts.
  `


  return (
    <>

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
                      <p className="text-black redhat">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className='text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20'>
        <div className='mx-auto max-w-7xl  px-6'>
          <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{main_heading}</h2>
        </div>
        <div className='mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10'>
          <div className='w-full md:w-2/3 text-center md:text-left'>

            <div className='w-full p-4 md:p-8 bg-[#1B453C] rounded-2xl'>
              <p className='text-white text-base redhat' dangerouslySetInnerHTML={{ __html: shortinfo }}>
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/3 text-center'>
            <Image className='w-full h-full rounded-xl' src={image3} alt='banner' />
          </div>

        </div>
      </section>

    </>
  )
}




export const Uses = () => {
  const gridBox = "xl:!grid-cols-4 grid3";
  const custom_class = "white_grid grid_padding";
  const whyChooseData = [
    {
      image: use1,
      title: "Farm-to-Table",
      description:
        "Fresh fruits can be used in on-site culinary offerings, such as a farm café or special events, showcasing the farm’s produce through a farm-to-table experience.",
    },
    {
      image: use2,
      title: "Educational Purposes ",
      description:
        "Farm Tours: The garden serves as a stop on guided tours, offering insight into fruit cultivation and sustainable farming.",
    },
    {
      image: use3,
      title: "Recreational and Aesthetic Value",
      description:
        "Visitor Enjoyment: The garden enhances the ambiance of the farm, creating a scenic environment that promotes relaxation and leisure.",
    },
    {
      image: use3,
      title: "Research and Learning",
      description:
        "Cultivation Trials: Serves as a testing ground for new fruit varieties and experimental farming methods.",
    },

  ];
  return (
    <>

      <Gridbox
        heading="Uses"
        data={whyChooseData}
        className={custom_class}
        gridBox={gridBox}
      />

    </>
  )
}
