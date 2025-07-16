import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project14/banner.webp";
import image2 from "../../../assets/images/projects/project14/key.webp";
import Image from 'next/image';
import { RiCheckboxCircleFill } from "react-icons/ri";
import image3 from "../../../assets/images/projects/project14/desc.webp";
import Titleslider from '../Titleslider';

import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project14/key1.webp";
import use2 from "../../../assets/images/projects/project14/key2.webp";
import use3 from "../../../assets/images/projects/project14/key3.webp";
import use4 from "../../../assets/images/projects/project14/key4.webp";
import use5 from "../../../assets/images/projects/project20/use5.webp";
import use6 from "../../../assets/images/projects/project20/use6.webp";
import PartnerBg from "../../../assets/images/projects/project20/bg.webp";

export const Pampasar = () => {
    const text = {
        banner: banner,
        heading: `Shri. Pampasar Kamal Sarovar <br> Lotus Pond`,
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
        </>
    )
}


export const Keys = () => {
    const description = `Shri. Pampasar Kamal Sarovar, located in Kh-112, is a serene Lotus Pond developed between the hillocks of Panchvati and Triveni. Spanning 460 square meters and situated 780 meters from the Admin Block, this pond is home to a beautiful collection of lotus varieties, water lilies, and aquatic ferns like Azolla. <br><br> Planted on 22 September 2021, the pond is refilled using Ganga borewell water. The design is inspired by Pampa Sarovar, one of the five sacred sarovars of India, renowned for its lotus blooms near Hampi, Karnataka.`

    const heading = "Key Details"
    const infoData = [
        {
            title: "Theme Index",
            description: "Lotus Pond",
        },
        {
            title: "Location Name",
            description: "Shri. Pampasar Kamal Sarovar",
        },
        {
            title: "Coordinates",
            description: `22°59'33.4"N 77°10'51.3"E`,
        },
        {
            title: "Area",
            description: "460 sq m",
        },
        {
            title: "Date of Planting",
            description: "22 September 2021",
        },
        {
            title: "Irrigation Method",
            description: "Refilled using Ganga borewell",
        },
        {
            title: "Responsible Person",
            description: "Mr. Rajkumar Meena",
        },
        {
            title: "Distance from Admin Block",
            description: "780 meters",
        },
    ];

    return (
        <>
            <section className='py-12 px-4 md:px-8 lg:px-16 bg-white'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <div className='md:w-[90%] mx-auto'>
                        <p className='mt-0 md:mt-4 text-black font-medium text-center'
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
                                            <p className="text-black redhat">{item.description}</p>
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


export const Desc = () => {
    const heading = "Description"
    const description = `Nestled between two hillocks, the Lotus Pond creates a vibrant aquatic habitat that reflects natural beauty, spiritual depth, and cultural heritage. The theme draws from Pampa Sarovar, a sacred waterbody associated with the Ramayana, where Shabari waited faithfully for Lord Rama’s arrival. <br> <br> The pond is home to:
    <ul class="list-disc list-inside">
    <li>Lotus flowers (Nelumbo nucifera)</li>
    <li>Water lilies</li>
    <li>Aquatic ferns like Azolla</li>
    </ul>
    <br>
    Its tranquil setting enhances the aesthetic and meditative value of Atulye Krishi Vana, offering a peaceful escape for visitors.
    `
    return (
        <section className='text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20'>
            <div className='mx-auto max-w-7xl  px-6'>
                <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{heading}</h2>
            </div>
            <div className='mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10'>
                <div className='w-full md:w-2/3 text-center md:text-left'>

                    <div className='w-full p-4 md:p-8 bg-[#1B453C] rounded-2xl'>
                        <p className='text-white text-base redhat' dangerouslySetInnerHTML={{ __html: description }}>
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

export const Hist = () => {
    const heading = "History"
    const shortdescription = "The pond is inspired by Pampa Sarovar, a site mentioned in the Ramayana where Shabari, a devotee of Lord Rama, awaited his arrival. According to the epic, she lived at the ashram of Rishi Matanga near Matanga Parvat, Hampi, and guided Rama during his journey to rescue Sita from Ravana.    "
    const boxslider = [
        {
            heading: "Cultural and Religious Significance",
            description: "Hinduism: The lotus symbolizes purity, enlightenment, and rebirth. It is associated with deities like Brahma, Vishnu, and Lakshmi."
        },
        {
            heading: "Historical Context",
            description: "In Ancient Egypt, the lotus, especially the blue lotus (Nymphaea caerulea), symbolized creation and rebirth. "

        },
        {
            heading: "Ecological Role",
            description: "Lotus ponds support aquatic ecosystems, offering habitat for fish, amphibians, and insects."

        },
        {
            heading: "Modern Occurrences ",
            description: "Commonly found in parks, gardens, and urban retreats, lotus ponds continue to represent peace, beauty, and spiritual inspiration."
        },


    ]
    return (
        <>

            <Titleslider heading={heading} boxslider={boxslider} shortdescription={shortdescription} />
        </>
    )
}



export const Uses = () => {
    const gridBox = "xl:!grid-cols-4 custom_height";
    const custom_class = "white_grid grid_padding";
    const whyChooseData = [
      {
        image: use1,
        title: "Aesthetic Value:",
        description:
          "Adds natural beauty with colorful blooms and calming waters.",
      },
      {
        image: use2,
        title: "Spiritual and Cultural Significance: ",
        description:
          "Symbolizes purity and enlightenment across multiple traditions.",
      },
      {
        image: use3,
        title: "Wildlife Habitat:",
        description:
          "Supports aquatic birds, insects, and amphibians.",
      },
      {
        image: use4,
        title: "Water Purification:",
        description:
          "Naturally improves water quality through filtration and oxygenation.",
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
    );
}
