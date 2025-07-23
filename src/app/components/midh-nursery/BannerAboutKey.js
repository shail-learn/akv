import React from 'react'
import banner from "../../../assets/images/midhNursery/banner.webp";
import BannerPage from '../BannerPage';
import icon1 from "../../../assets/images/midhNursery/mssion.svg";
import icon2 from "../../../assets/images/midhNursery/vision.svg";
import key1 from "../../../assets/images/midhNursery/Key1.webp";
import key2 from "../../../assets/images/midhNursery/Key2.webp";
import key3 from "../../../assets/images/midhNursery/Key3.webp";
import key4 from "../../../assets/images/midhNursery/Key4.webp";
import bgbanner from "../../../assets/images/midhNursery/collaboration.webp";

import Image from 'next/image';
import Link from 'next/link';

export const Banner = () => {
  const text = {
    banner: banner,
    heading: `Nursery - Cultivating a Greener Tomorrow <br/>Welcome to Nursery`,
    title: `A hub for sustainable agroforestry and ecological preservation, Nursery under Atulye Krishi Vana is dedicated to fostering biodiversity, promoting afforestation, and empowering rural communities.`,
    opacity: "opacity-55"
  };
  return (
    <>

      <BannerPage
        heading={text.heading}
        title={text.title}
        subtitle={text.subtitle}
        opacity={text.opacity}
        banner={text.banner}
        button={text.button}
        link={text.link}
        classname={text.className}

      />

    </>
  )
}



export const About = () => {
  const aboutData = {
    heading: 'About Us',
    description:
      'Nursery is a pioneering initiative blending modern agricultural practices with traditional agroforestry wisdom. We specialize in cultivating high-quality plant species that contribute to environmental sustainability, economic growth, and food security.',
    cards: [
      {
        icon: icon1,
        title: 'Mission',
        description: 'To create a self-sustaining green ecosystem through afforestation and nursery management.',
      },
      {
        icon: icon2,
        title: 'Vision',
        description: 'A future where trees, crops, and communities thrive together.',
      },
    ],
  };

  const heading = "Our Upcoming Collaborations";
  const description = `
  Atulye Krishi Vana is proud to collaborate with national missions and government agencies to drive innovation in agroforestry, medicinal plant cultivation, and sustainable horticulture.
  `
  return (
    <>
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className='md:pr-8'>
              <h2 className="text-3xl md:text-4xl lg:text-left lg:text-[40px] font-semibold text-center lg:leading-tight redhat text-[#1B453C] mb-4">{aboutData.heading}</h2>
              <p className="text-black opacity-75 text-justify md:text-[17px] text-base redhat leading-relaxed">{aboutData.description}</p>
            </div>
            {aboutData.cards.map((item, index) => (
              <div key={index} className="flex items-start self-center gap-4">
                <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#6D8C54] flex items-center justify-center text-white text-2xl">
                  <Image src={item.icon} className='w-auto h-16 md:h-20' alt='icons' />

                </div>
                <div>
                  <h3 className="text-2xl mb-2 redhat font-semibold text-black">{item.title}</h3>
                  <p className="text-base md:text-[17px] redhat text-[#141414BF]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-cover bg-bottom md:bg-center relative text-center md:text-left pt-16 pb-16 lg:pt-36 lg:pb-36' style={{ background: `url(${bgbanner.src})center / cover no-repeat` }}>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-55'></div>
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
            <div className='lg:w-12/12 md:w-6/12 w-12/12 mx-auto text-center'>
              <h2 className='text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-white mb-6'>{heading}</h2>
              <p className='text-white text-base md:text-[17px]' dangerouslySetInnerHTML={{ __html: description }}>

              </p>
              <div className='mt-10 text-center'>
                <Link href="/nursery/collaboration"
                  className='poppins mx-auto text-center text-[17px] font-medium text-[#344C31] w-[200px] py-3 rounded-[4px] bg-[#fff] inline-block transition-all duration-500  hover:bg-[#344C31] hover:text-[#fff]'>
                  Read More
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>


    </>
  )
}


export const Key = () => {
  const heading = "Key Sections of Nursery"
  const plantationData = [
    {
      id: 1,
      title: "Native & Medicinal Plants Section",
      subtitle: "Preserving Traditional Knowledge",
      points: [
        "Home to indigenous tree species like Neem, Banyan, and Peepal.",
        "Collection of 100+ medicinal plants, including Tulsi, Ashwagandha, and Aloe Vera.",
        "Herbal plantations supporting Ayurvedic and pharmaceutical industries.",
      ],
      image: key1,
    },
    {
      id: 2,
      title: "Commercial Plantation Section",
      subtitle: "Fostering Agro-Economy",
      points: [
        "Cultivation of high-value crops such as Coconut, Pineapple, Arecanut, and Jackfruit.",
        "Intercropping with Turmeric and Ginger for soil enrichment and economic sustainability.",
        "Plantation of timber species like Agarwood, Bamboo, and Teakwood for long-term revenue generation.",
      ],
      image: key2,
    },
    {
      id: 3,
      title: "Climate-Resilient Forestry Zone",
      subtitle: "Fighting Climate Change",
      points: [
        "Dedicated afforestation for carbon sequestration and soil conservation.",
        "Biodiversity corridors supporting pollinators, birds, and wildlife.",
        "Water conservation strategies, including rainwater harvesting and pond management.",
      ],
      image: key3,
    },
    {
      id: 4,
      title: "Nursery Innovation & Research Center",
      subtitle: "Advancing Green Technologies",
      points: [
        "Precision Agriculture: GPS mapping, IoT-based soil monitoring, and automated irrigation.",
        "Drone Technology: UAV surveillance for plant health monitoring and pest control.",
        "Sustainable Practices: Zero-waste management, organic composting, and biofertilizer production.",
      ],
      image: key4,
    },

  ];
  return (

    <section className="py-12 md:py-20 !pb-0 relative">
      <div className='bg-[#F5F5F5] absolute top-0 -z-10 left-0 w-full h-52 md:h-[394px]'></div>
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2">
        <h2 className='text-3xl md:leading-[1.3] md:text-4xl text-center lg:text-[40px] font-semibold redhat text-[#1B453C] mb-14 md:mb-20'>{heading}</h2>
        {plantationData.map((item, index) => (
          <div key={item.id} className="mb-12 md:mb-20">
            {/* Top Section: Image + Green Card */}
            <div
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-0 lg:gap-0`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={500}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>

              {/* Green Card   */}
              <div className="w-full lg:w-1/2">

                <Link href="/agroforestry">

                  <div className={`bg-[#1B453C] text-white p-6 md:p-8 w-[90%] mx-auto md:w-full ${index % 2 === 0 ? "md:rounded-br-[12px] md:rounded-bl-[0px] md:rounded-tr-[12px] rounded-tr-0 rounded-br-[12px] rounded-bl-[12px]" : "md:rounded-bl-[12px] md:rounded-tl-[12px] md:rounded-br-[0]  rounded-tr-0 rounded-br-[12px] rounded-bl-[12px] "}`}>
                    <h2 className="text-xl md:text-2xl font-semibold mb-1">
                      {item.title}
                    </h2>
                    <p className="text-base md:text-[17px] text-[#D9F2EC]">{item.subtitle}</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="mt-6 list-disc redhat text-base md:text-[17px] text-[#141414BF] pl-5 space-y-2">
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* Bottom Border */}
            <div className="mt-8 border-b-[1px] border-[#6D8C54] w-full"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

