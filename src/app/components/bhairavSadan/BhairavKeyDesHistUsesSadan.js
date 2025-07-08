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


export const Bhairav = () => {
  const text = {
    banner: banner,
    heading: `Shri. Bhairav Sadan – Dog House`,
    opacity: 'opacity-50'
}
return (
    <>
        <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
    </>
)
}



export const Key = () => {
  const description = `Shri. Bhairav Sadan, located in Khasra No. 112, is a dedicated dog house designed to ensure the safety, health, and functionality of farm security dogs at Atulye Krishi Vana. Spanning 40 square meters and situated 400 meters from the Admin Block, the facility houses four German Shepherd dogs. <br> <br> This well-constructed shelter is equipped with all necessary materials, ample space, and protective features to provide the dogs with a comfortable and secure environment, enabling them to fulfill their duties in maintaining farm security.`

  const heading = "Key Details"
  const infoData = [
      {
          title: "Theme Index",
          description: "Dog House",
      },
      {
          title: "Location Name",
          description: "Shri. Bhairav Sadan",
      },
      {
          title: "Coordinates",
          description: `22°59'40.7"N 77°10'56.8"E`,
      },
      {
          title: "Area",
          description: "40 sq m",
      },
      {
          title: "Distance from Admin Block",
          description: "400 meters",
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
  const description = `Four German Shepherd dogs are stationed at the farm and reside in Shri. Bhairav Sadan. These dogs play an essential role in farm security, offering protection against intruders, guarding livestock, and providing constant vigilance throughout the premises. <br> <br> The shelter provides:
   <ul>
   <li>Secure enclosures for rest and safety</li>
   <li>Feeding and watering provisions</li>
   <li>Ventilated and clean surroundings for comfort</li>
   <li>Designated exercise space for health and training</li>
   </ul>

  `
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


export const Hist = () => {
  const heading = "History"
  const shortdescription = "The name Bhairav Sadan draws from Bhairav, a fierce and protective manifestation of Lord Shiva in Hindu tradition. Bhairav is often depicted with a dog as his vehicle (vahana), symbolizing vigilance, loyalty, and protection."

  const boxslider = [
      {
          heading: "Bhairav and Dogs",
          description: "In temples dedicated to Bhairav, especially across northern India and Nepal, dogs are commonly found and are even fed by devotees as part of the worship process. The dog represents Bhairav’s divine guardian spirit, known for loyalty and watchfulness."
      },
      {
          heading: "Cultural Belief",
          description: "In many regions, dogs are revered in association with Bhairav and symbolize his qualities as a protector of devotees and a guardian of sacred spaces."

      },
      {
          heading: "Mythological Narratives",
          description: "Stories in Hindu mythology highlight Bhairav’s role in protecting the righteous and punishing evil. Dogs, as loyal companions, are naturally integrated into this imagery, symbolizing security and guardianship."

      },
      {
        heading: "Cultural Belief",
        description: "In many regions, dogs are revered in association with Bhairav and symbolize his qualities as a protector of devotees and a guardian of sacred spaces."

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
      title: "Guarding and Protection :",
      description:
        "Act as first responders against intruders, predators, and unauthorized access on the farm.",
    },
    {
      image: use2,
      title: "Herding :",
      description:
        "Assist with livestock management, helping guide and control animals.",
    },
    {
      image: use3,
      title: "Search and Rescue :",
      description:
        "Can be trained for locating lost or injured individuals, enhancing safety operations.",
    },


  ];

  const whyChooseData1 = [
    {
      image: use3,
      title: "Companionship :",
      description:
        "Offer emotional support and build positive human-animal bonds on the farm.",
    },
    {
      image: use4,
      title: "Training and Work : ",
      description:
        "Participate in activities such as obedience training, agility exercises, and specialized tasks.",
    },
    {
      image: use5,
      title: "Security Enhancement :",
      description:
        "Serve as a visual and practical deterrent against theft or other security breaches.",
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
      <div className='-mt-6'>
      <Gridbox

        data={whyChooseData1}
        className={custom_class}
        gridBox={gridBox}
      />
</div>




    </>
  );
}


export const Sadan = () => {
  const heading = "Conclusion";
  const description =
      "Shri. Bhairav Sadan stands as a dedicated space that reflects the values of security, devotion, and respect for animal companions. Rooted in spiritual tradition and built with practical care, it ensures that the farm’s guardian dogs are supported in their role as protectors of Atulye Krishi Vana.";
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
