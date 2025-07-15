import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project16/banner.webp";
import image2 from "../../../assets/images/projects/project16/key.webp";
import Image from 'next/image';
import { RiCheckboxCircleFill } from "react-icons/ri";
import image3 from "../../../assets/images/projects/project16/desc.webp";
import Titleslider from '../Titleslider';

import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project16/key1.webp";
import use2 from "../../../assets/images/projects/project16/key2.webp";
import use3 from "../../../assets/images/projects/project16/key3.webp";
import use4 from "../../../assets/images/projects/project16/key4.webp";
import use5 from "../../../assets/images/projects/project16/key5.webp";
import use6 from "../../../assets/images/projects/project16/key6.webp";
import use7 from "../../../assets/images/projects/project16/key7.webp";
import use8 from "../../../assets/images/projects/project16/key8.webp";
import use9 from "../../../assets/images/projects/project16/key9.webp";
import use10 from "../../../assets/images/projects/project16/key10.webp";
import use11 from "../../../assets/images/projects/project16/key11.webp";
import use12 from "../../../assets/images/projects/project16/key12.webp";


import PartnerBg from "../../../assets/images/projects/project20/bg.webp";

export const Tridev = () => {
    const text = {
        banner: banner,
        heading: `Shri. Tridev Triveni Vatika – Triveni`,
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
        </>
    )
}


export const Key = () => {
    const description = `Shri. Tridev Triveni Vatika, located at Khasra No. 112, is a sacred grove centered around the Triveni combination of Peepal, Banyan, and Neem trees. Spread across 770 sq mtr and situated 771 meters from the Admin Block, the site embodies a spiritual triad believed to represent the divine presence of Brahma, Vishnu, and Mahesh. <br> <br> The plantation was established on 25 December 2021 and is maintained using drip irrigation by an online lateral.`

    const heading = "Key Details"
    const infoData = [
        {
            title: "Theme Index",
            description: "Triveni",
        },
        {
            title: "Location Name",
            description: "Shri. Tridev Triveni Vatika",
        },
        {
            title: "Coordinates",
            description: `22°59'32.9"N 77°10'50.6"E`,
        },
        {
            title: "Area",
            description: "770 sq mtr",
        },
        {
            title: "Crops",
            description: "Neem, Bargad, Peepal",
        },
        {
            title: "Irrigation Method",
            description: "Drip Irrigation by online lateral",
        },
        {
            title: "Date of Planting",
            description: "25 Dec 2021",
        },
        {
            title: "Distance from Admin Block",
            description: "771 m",
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
    const description = `The combination of Peepal (Ficus religiosa), Banyan (Ficus benghalensis), and Neem (Azadirachta indica) trees is traditionally known as Triveni. This sacred trio is believed to be the abode of the divine trinity – Brahma, Vishnu, and Mahesh – and holds great significance in Indian spirituality. <br> <br> By honoring or planting a Triveni, devotees pay tribute to all gods and ancestral spirits, seeking blessings, protection, and guidance. Developed alongside Triveni Ghati, this site reflects the intertwining of spiritual symbolism with ecological reverence.
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
    const description = `In the Mahabharata, particularly in the Vana Parva (Book of the Forest), a divine tree is mentioned as playing a significant role in the lives of the Pandavas during their exile. This tree, situated near the Triveni Sangam (the confluence of the Ganga, Yamuna, and mythical Saraswati rivers), is revered for its power to fulfill wishes and provide essential life resources. <br> <br> According to the story, three special plants—Neem, Bargad, and Peepal—were part of this divine tree. Each was believed to possess magical properties, aiding the Pandavas during difficult times. <br><br> This narrative underlines the sacred status of the Triveni combination and its deep roots in spiritual tradition, healing, and divine symbolism.`
    return (
        <section className='relative py-12 mb-8 md:mb-10 md:py-16 bg-[#f5f5f5]'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                <h2 className='text-3xl md:leading-[1.3] md:text-4xl text-center font-medium redhat text-[#1B453C] mb-8'>{heading}</h2>
                    <div className='md:w-[90%] mx-auto'>
                        <p className='mt-0 md:mt-4 text-black font-normal text-center'
                            dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>

            </section>
    )
}


export const Uses = () => {
    const gridBox = "xl:!grid-cols-4 custom_height";
    const custom_class = "white_grid grid_padding";
    const whyChooseData = [
      {
        image: use1,
        title: "Respiratory Health :",
        description:
          "Treats asthma",
      },
      {
        image: use2,
        title: "Digestive Health :",
        description:
          "Relieves constipation and indigestion",
      },
      {
        image: use3,
        title: "Diabetes Support :",
        description:
          "Helps manage blood sugar levels",
      },
      {
        image: use4,
        title: "Wound Healing :",
        description:
          "Used for skin infections and wounds",
      },

    ];

    const whyChooseData1 = [

      {
        image: use5,
        title: "Dental Care : ",
        description:
          "Strengthens gums; used as a natural toothbrush",
      },
      {
        image: use6,
        title: "Diabetes Management :",
        description:
          "Lowers blood sugar",
      },
      {
        image: use7,
        title: "Anti-inflammatory : ",
        description:
          "Treats skin inflammations",
      },
      {
        image: use8,
        title: "Reproductive Health : ",
        description:
          "Supports fertility",
      },
    ]

    const whyChooseData2 = [

        {
          image: use9,
          title: "Skin Care : ",
          description:
            "Treats acne and eczema",
        },
        {
          image: use10,
          title: "Oral Health :",
          description:
            "Prevents gum disease",
        },
        {
          image: use11,
          title: "Blood Purification : ",
          description:
            "Clears skin and improves health",
        },
        {
          image: use12,
          title: "Antimalarial Properties : ",
          description:
            "Fights malaria and viral infections",
        },
      ]

    return (
      <>

        <Gridbox
          heading="Peepal – Ficus religiosa"
          data={whyChooseData}
          className={custom_class}
          gridBox={gridBox}
        />
        <div className='-mt-6'>
        <Gridbox
         heading="Banyan – Ficus benghalensis"
          data={whyChooseData1}
          className={custom_class}
          gridBox={gridBox}
        />
  </div>
  <div className='-mt-6'>
        <Gridbox
         heading="Neem – Azadirachta indica"
          data={whyChooseData2}
          className={custom_class}
          gridBox={gridBox}
        />
  </div>



      </>
    );
}


export const Triveni = () => {
    const heading = "Conclusion";
    const description =
        "Shri. Tridev Triveni Vatika stands as a spiritual and ecological tribute to ancient Indian wisdom. The sacred blend of Peepal, Banyan, and Neem offers not just mythological depth, but also practical benefits for health and the environment. It is a symbol of natural harmony, ancestral respect, and spiritual unity.";
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
