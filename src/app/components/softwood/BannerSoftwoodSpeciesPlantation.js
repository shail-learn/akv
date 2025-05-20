import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/softwood/banner.webp";
import { Wave } from '../Wave';
import basket from "../../../assets/images/softwood/close-up-wood.webp";

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

            <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{__html: basketData.note}}></p>
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
  return (
    <div>Species</div>
  )
}



export const Plantation = () => {
  return (
    <div>Plantation</div>
  )
}
