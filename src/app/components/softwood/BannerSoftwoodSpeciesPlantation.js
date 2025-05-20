import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/softwood/banner.webp";
import { Wave } from '../Wave';
import basket from "../../../assets/images/softwood/close-up-wood.webp";
import why1 from "../../../assets/images/softwood/why1.webp";
import why2 from "../../../assets/images/softwood/why2.webp";
import why3 from "../../../assets/images/softwood/why3.webp";
import why4 from "../../../assets/images/softwood/why4.webp";
import why5 from "../../../assets/images/softwood/why5.webp";
import img1 from "../../../assets/images/softwood/image1.webp";
import img2 from "../../../assets/images/softwood/image2.webp";
import img3 from "../../../assets/images/softwood/image3.webp";



import { Gridbox } from '../Gridbox';
import { Iconslider } from '../Iconslider';

export const Banner = () => {
  const text = {
    banner: banner,
    heading: `Softwood & Light Timber Trees  `,
    subtitle: "Sustainable, Versatile, and Eco-Friendly Wood Solutions",
    title: "Softwood and light timber trees offer a sustainable and versatile alternative to dense hardwoods. Known for their fast growth, ease of processing, and adaptability, these species are valuable for furniture, construction, handicrafts, and ecological conservation",
    opacity: 'opacity-50'
  }
  return (
    <>
      <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />

    </>

  )
}



export const Softwood = () => {
  const basketData = {

    note: `Their lightweight yet durable nature makes them ideal for applications requiring flexibility and workability. <br/>
    At Atulye Krishi Vana, we specialize in agroforestry solutions that promote sustainable timber cultivation. Our plantations include premium softwood species like Haldu (Haldina cordifolia), Pakad (Ficus virens), and Pipal (Ficus religiosa)—each offering unique properties for commercial and environmental benefits. Whether you are a farmer, investor, or business, we help you establish high-yield plantations that maximize returns while preserving nature. `,
    image: basket,
  };
  return (
    <>
      <Wave />
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#1B453C]">
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
          <div className="flex flex-col-reverse justify-between lg:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">

              <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: basketData.note }}></p>
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
    </>
  )
}



export const Species = () => {
  const whyChooseData = [
    {
      image: why1,
      title: 'Workability & Flexibility',
      description: 'Light timber is easier to saw, carve, and polish, making it highly desirable for furniture, musical instruments, and interior decorations.',
    },
    {
      image: why2,
      title: 'Multipurpose Utility',
      description: 'These species provide fodder, medicinal benefits, and ecosystem services. Pakad wood is widely used in plywood and packing industries.',
    },
    {
      image: why3,
      title: 'Fast Growth & High Yield',
      description: 'Softwood species mature faster than hardwoods, allowing for quicker harvesting cycles. Haldu and Pakad trees can be ready for timber within 10–15 years.',
    },
    {
      image: why4,
      title: 'Sustainable & Eco-Friendly',
      description: 'These trees contribute to carbon sequestration, improve air quality, and support biodiversity by preventing soil erosion.',
    },
    {
      image: why5,
      title: 'Low Maintenance & High Adaptability',
      description: 'These species thrive in diverse climates and soil types, requiring minimal care once established.',
    },
  ];

  return (
    <>
      <Gridbox heading="Why Choose Softwood & Light Timber Trees?" data={whyChooseData} />
    </>
  )
}



export const Plantation = () => {
  const heading = "Species Overview";
  const custom_class = "original_img padding_argust"
  const cardData = [
    {
      title: "Pipal (Ficus religiosa)",
      icon: img1,
      description: "Uses: Religious structures, decorative carving, and medicinal applications",
    },
    {
      title: "Haldu (Haldina cordifolia)",
      icon: img2,

      description: "Uses:Furniture, plywood, sports goods, handicrafts, and interior paneling",
    },
    {
      title: "Pakad (Ficus virens)",
      icon: img3,

      description: "Uses: Plywood, crates, agricultural implements, and tool handles",
    },
    {
      title: "Pipal (Ficus religiosa)",
      icon: img1,
      description: "Uses: Religious structures, decorative carving, and medicinal applications",
    },
    {
      title: "Haldu (Haldina cordifolia)",
      icon: img2,

      description: "Uses:Furniture, plywood, sports goods, handicrafts, and interior paneling",
    },

  ];



  return (
    <>
      <Iconslider
        card={cardData}
        heading={heading}
        custom_class={custom_class}
      />
    </>
  );
}
