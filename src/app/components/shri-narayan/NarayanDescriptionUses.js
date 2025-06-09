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
            <Wave />
        </>
    )
}


export const Description = () => {
    const basketData = {
        note: `
        Theme Index: Fruit Garden <br/>
        Location Name: Shri. Narayan Falodyan <br/>
        Coordinates: 22°59'38.9"N 77°10'47.4"E <br/>
        Area: 1550 sq m <br/>
        Distance from Admin Block: 730 meters
        `,
        image: info,
    };

    const GrowthHeading = "Description";
    const GrowthDescription = "Nestled in a serene corner of Atulye Krishi Vana, the fruit garden presents a rich mosaic of more than 40 fruit species. Here, visitors can experience a living landscape where:"
    const slides = [
        {
            image: image1,
            title: "Coconut palms sway gently",
        },
        {
            image: image1,
            title: "Dragonfruit plants add exotic charm",
        },
        {
            image: image1,
            title: "The sweet scent of guava blends with the tang of pomegranate",
        },
        {
            image: image1,
            title: "Trees of ber, papaya, banana, and custard apple flourish side by side",
        },
        {
            image: image1,
            title: "Seasonal fruits like mango, lychee, ramfal, and avocado grow abundantly",
        },
        {
            image: image1,
            title: "Zesty oranges, rich mulberries, almond, tamarind, and palm trees add depth to the collection",
        },

    ];

    const GrowthDescription1 = "Each tree enhances the space with its own taste, aroma, and visual appeal, making the garden a paradise for fruit lovers and nature enthusiasts."

    return (
        <>

            <section className="py-12 md:!pt-0  px-4 md:px-8 lg:px-16 bg-[#1B453C]">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <div className="flex flex-col-reverse justify-between lg:flex-row   gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className='text-white text-2xl md:text-3xl font-medium mb-6'>Key Details</h2>
                            <p className="mt-0 md:mt-4 text-white redhat" dangerouslySetInnerHTML={{ __html: basketData.note }} ></p>
                        </div>
                        <div className="w-full md:w-[40%]">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src={basketData.image}
                                    alt="Basket of fruits and vegetables"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
                GrowthDescription={GrowthDescription}
                GrowthDescription1={GrowthDescription1}
            />

        </>
    )
}




export const Uses = () => {
    const heading = "Uses"
    const class2 = "blurheight"

    const boxslider = [
        {
          image: impact1,
          heading: "Farm-to-Table",
          description: [
            "Fresh fruits can be used in on-site culinary offerings, such as a farm café or special events, showcasing the farm’s produce through a farm-to-table experience.",

          ]
        },
        {
          image: impact1,
          heading: "Educational Purposes",
          description: [
            "Farm Tours: The garden serves as a stop on guided tours, offering insight into fruit cultivation and sustainable farming.",
            "Workshops and Demonstrations: The space is ideal for holding training sessions on seasonal care, propagation techniques, and fruit tree maintenance."
          ]
        },
        {
          image: impact1,
          heading: "Recreational and Aesthetic Value",
          description: [
            "Visitor Enjoyment: The garden enhances the ambiance of the farm, creating a scenic environment that promotes relaxation and leisure."
          ]
        },
        {
          image: impact1,
          heading: "Research and Learning",
          description: [
            "Cultivation Trials: Serves as a testing ground for new fruit varieties and experimental farming methods.",
            "Observation and Data Collection: Offers opportunities for monitoring plant health, fruiting behavior, and growth patterns. "
          ]
        },

      ]
    return (
      <>

        <section
          className="relative mt-10 pt-16 pb-16 !mb-0 lg:pt-20 lg:pb-20" style={{ background: `url(${bgstay.src})center center / cover no-repeat` }}>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
          <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
            <div className='flex flex-wrap lg:flex-nowrap justify-between  gap-6 px-0 md:px-6 z-10 relative lg:px-2'>
              <div className='w-full lg:w-3/12 md:mt-10'>
                <div className='flex justify-between   flex-wrap'>
                  <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                    {heading}
                  </h2>
                </div>
              </div>

              <div className='w-full lg:w-8/12'>
                <SliderBlur boxslider={boxslider} class2={class2} />

              </div>
            </div>

          </div>

        </section>

      </>
    )
}
