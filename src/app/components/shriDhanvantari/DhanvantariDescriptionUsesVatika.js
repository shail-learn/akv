import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/agriculture/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import image1 from "../../../assets/images/digestive/image1.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import Image from 'next/image';
import { SliderBlur } from '../SliderBlur';
import Titleslider from '../Titleslider';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Dhanvantari = () => {
    const text = {
        banner: banner,
        heading: `Shri. Dhanvantari Vatika – Medicinal Garden`,

        title: 'Shri. Dhanvantari Vatika, located in Kh-102, is a dedicated Medicinal Garden at Atulye Krishi Vana, developed to highlight the healing power of nature. Spread across 1521 square meters and situated 720 meters from the Admin Block, the garden features 108 unique medicinal species, thoughtfully selected for their therapeutic properties and relevance to Ayurvedic tradition. <br/> Planted on 02 December 2021, the garden is irrigated through a drip irrigation system with online laterals, ensuring consistent care and plant health throughout the year.',
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
        Theme Index: Medicinal Garden <br/>
        Location Name: Shri. Dhanvantari Vatika <br/>
        Coordinates: 22°59'41.0"N 77°10'46.0"E <br/>
        Area: 1521 sq m <br/>
        Date of Planting: 02 December 2021 <br/>
        Irrigation Method: Drip Irrigation by online lateral <br/>
        Distance from Admin Block: 720 meters

        `,
        image: info,
    };
    const main_heading = "Description"
    const shortinfo = "Shri. Dhanvantari Vatika is home to 108 medicinal plant species, each selected to address various health concerns and promote overall well-being. This living collection reflects the timeless wisdom of Ayurveda, providing both practical knowledge and spiritual insight. <br/> Named after Shri Dhanvantari, the divine healer and guardian of Ayurveda in Hindu tradition, the garden is a place of peace, prayer, and healing. Devotees often seek his blessings for health and vitality, and this garden offers a physical space to connect with that tradition through the natural world."

    const GrowthHeading = "It's History";
    const GrowthDescription = "The garden is inspired by Lord Dhanvantari, revered in the Puranas as the deity of Ayurveda and health. Shri. Dhanvantari Vatika was established to raise awareness about medicinal plants and the ancient knowledge that surrounds them."


    const slides = [
        {
            group:"The initiative aims to:",
            image: image1,
            desc: "Promote public education about Ayurveda and plant-based health",
        },
        {
            group:"The initiative aims to:",
            image: image1,
            desc: "Encourage the development of similar gardens across the region",
        },
        {
            group:"The initiative aims to:",
            image: image1,
            desc: "Preserve and propagate ancestral wisdom about herbal medicine",
        },
        {
            group:"The initiative aims to:",
            image: image1,
            desc: "Bridge the knowledge gap regarding common but underutilized healing plants",
        },
    ];
   const GrowthDescription1 ="Ayurveda has been practiced for centuries, yet many people remain unaware of the powerful healing properties of the trees and plants around them. Dhanvantari Vatika stands as a living testament to this rich heritage, helping people recognize the healing potential of their natural environment."

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
                GrowthDescription={GrowthDescription}
                GrowthDescription1={GrowthDescription1}
            />


        </>
    )
}


export const Uses = () => {
    const heading = "Uses"
    const boxslider = [
        {
            heading: "Educational Resource",
            description: "Teaches visitors about the benefits and practical uses of medicinal plants through guided tours and informational displays."
        },
        {
            heading: "Health and Wellness Workshops",
            description: "Hosts programs on natural remedies, plant-based healing, and Ayurvedic lifestyle practices."

        },
        {
            heading: "Community Engagement",
            description: "Involves locals in garden tours, volunteer activities, and public health seminars."

        },
        {
            heading: "Product Development",
            description: "Supports the creation of herbal teas, tinctures, skincare items, and other plant-based wellness products."
        },
        {
            heading: "Research Opportunities",
            description: "Offers collaboration potential with researchers and institutions for studying plant properties and discovering new uses."
        },
        {
            heading: "Sustainable Farming Practices",
            description: "Utilizes medicinal plants for organic pest control, soil enrichment, and as companion crops to promote ecological farming"
        },

    ]
    return (
        <>

            <Titleslider heading={heading} boxslider={boxslider} />
        </>
    )
}



export const Vatika = () => {
    const heading = "Shri. Dhanvantari Vatika";
    const description =
      "Shri. Dhanvantari Vatika is more than a medicinal garden—it is a center of natural healing, traditional wisdom, and community learning. By cultivating plants that have been trusted for generations and sharing their benefits with the public, the garden fulfills its mission of bridging nature and wellness.<br/> <br/> This space invites every visitor to experience holistic health in harmony with nature and reconnect with the healing heritage passed down through the science of Ayurveda.";

    return (
      <section
        className="relative bg-no-repeat py-14 !mt-0 lg:py-32 !mb-0 bg-cover w-full my-8 md:my-12  "
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
