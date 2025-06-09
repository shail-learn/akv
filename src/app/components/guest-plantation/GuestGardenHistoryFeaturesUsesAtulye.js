import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/agriculture/banner.webp";

import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import info from "../../../assets/images/digestive/info.webp";
import Image from 'next/image';
import image1 from "../../../assets/images/digestive/image1.webp";
import circle2 from "../../../assets/images/digestive/circle2.webp";

import bgstay from "../../../assets/images/stress/bg.webp";
import { SliderBlur } from '../SliderBlur';
import impact1 from "../../../assets/images/stress/Benefit1.webp";
import Titleslider from '../Titleslider';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Guest = () => {
    const text = {
        banner: banner,
        heading: `Guest Garden at Atulye Krishi Vana`,
        subtitle:"Where Every Visit Blooms into a Lasting Memory ",
        title: 'The Guest Garden, located at Khasra No. 100 and just 160 meters from the Admin Block, is one of the most heartwarming spaces at Atulye Krishi Vana. Spanning 870 square meters, this lush garden is not only a display of natural beauty but also a living symbol of guest honor and connection. Each visitor is invited to plant a tree or plant during their visit — creating a lasting bond with the land, and leaving behind something that grows in their name for years to come. ',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}



export const Garden = () => {
    const basketData = {
        note: `
        Theme Index: Garden Guest <br/>
        Location Name: Guest Garden <br/>
        Coordinates: 22°59'42.0"N 77°11'05.2"E<br/>
        Area: 870 sq m<br/>
        Distance from Admin Block: 160 meters <br/>

        `,
        image: info,
    };

    const main_heading = "A Garden That Grows With Every Guest"
    const shortinfo = "More than just a landscaped space, the Guest Garden represents a beautiful tradition. Every guest plants a sapling as a part of their visit — an act that symbolizes honor, gratitude, and long-term connection."


    const GrowthHeading = "Visitors are encouraged to";
    const slides = [
        {
            image: image1,
            title: `Select a plant of their choice`,

        },
        {
            image: image1,
            title: `Plant it in the garden with guidance`,
        },
        {
            image: image1,
            title: `Return in future years to see how it has grown — or even hug it`,
        },


    ];

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

            <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
                <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
                    <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
                        {main_heading}
                    </h2>
                    <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
                </div>
            </section>

            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
            />

        </>
    )
}


export const History = () => {
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const custom_class = "white_grid grid_padding"
    const main_heading = "History and Vision"
    const shortinfo = `The Guest Garden was envisioned and established by Mr. Mithilesh Aggarwal ji as part of Atulye Krishi Vana’s larger mission to integrate sustainability with cultural traditions.
    `


    const custom_class1 = "growth_white"
    const GrowthHeading = "It was developed as:";
    const slides = [
      {

        image: circle2,
        desc: `Over time, it has flourished into a signature feature of the property — blending the values of Indian hospitality (Atithi Devo Bhava) with environmental consciousness.`,
      },



    ];

    return (
      <>
        <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
          <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
            <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
              {main_heading}
            </h2>
            <p className="mt-0 md:mt-4 text-black" dangerouslySetInnerHTML={{__html:shortinfo}}></p>
          </div>
        </section>

        <GrowthSlider
          GrowthHeading={GrowthHeading}
          slides={slides}
          className={custom_class1}
          applicationsData={[
            "A green welcome area for visitors",
            "A living archive of guest memories  ",
            "A model for eco-friendly landscaping and guest engagement",
        ]}
        />

      </>
    )
}


export const Features = () => {
    const heading = "Uses & Benefits"
    const class2 = "blurheight"

    const boxslider = [
      {
        image: impact1,
        heading: "Personalization",
        description: 'Every visitor gets the chance to leave a mark by planting a tree or shrub. <br/> Reduces iAdds a sentimental and personal touch to their journey.',
      },
      {
        image: impact1,
        heading: "Education",
        description: 'Offers hands-on experience in planting techniques, soil care, and seasonal plant management. <br/>A great learning space for children, students, and nature lovers.',
      },
      {
        image: impact1,
        heading: "Visitor Engagement",
        description: 'Turns a tour into an interactive experience, encouraging deeper involvement. <br/> Guests often return to check on their plant, reinforcing emotional ties to the site.',
      },
      {
        image: impact1,
        heading: "Community Building",
        description: 'Fosters a sense of shared responsibility and belonging among guests. <br/> Serves as a collective green diary filled with stories and memories.',
      },



    ]
    return (
      <>

        <section
          className="relative mt-10 pt-16 pb-16 lg:pt-20 lg:pb-20" style={{ background: `url(${bgstay.src})center center / cover no-repeat` }}>
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


export const Uses = () => {
    const heading = "Garden Features"

    const boxslider = [
      {
        heading: "Ornamental plants and flowering beds",
      },
      {
        heading: "Shaded seating areas for reflection and relaxation",
      },
      {
        heading: "Eco-landscaping that uses native and drought-resistant species",
      },
      {
        heading: "Design inspired by natural harmony and traditional aesthetics",
      },

    ]
    return (
        <>

    <Titleslider heading={heading} boxslider={boxslider} />

        </>
    )
}


export const Atulye = () => {
    const heading = "Guest Garden at Atulye Krishi Vana";
    const description =
      "The Guest Garden at Atulye Krishi Vana is a peaceful, vibrant space where hospitality meets sustainability. It’s not just a garden — it’s a living tradition, a tribute to every guest who visits, and a green bond between humans and nature. <br/><br/> Whether you're a visitor, volunteer, or simply passing by — planting your sapling here means you’ve become a part of something greater, something that grows with time.  ";

    return (
      <section
        className="relative bg-no-repeat py-14 lg:py-32 !mb-0 bg-cover w-full my-8 md:my-12 !mt-0"
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
