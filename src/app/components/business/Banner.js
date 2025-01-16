import React from 'react'
import banner from "../../../assets/images/business/banner.webp";
import Link from 'next/link';
// import banner2 from "../../../assets/images/home/bg-img.webp";
// import shape from "../../../assets/images/home/shape.png";
// import icon from "../../../assets/images/logo-icon.svg";

export const Banner = () => {
    const text = {
        heading: 'Revolutionizing Agriculture through Sustainable Forestry.',
        title: "At Atulye Krishi Vana, agroforestry isn't just farming; it's a commitment to nurturing biodiversity, empowering communities, and sustaining the planet."
    }
  return (
    <section
    className="bg-cover bg-center relative  py-16  lg:py-28  flex items-center justify-center"
    style={{ backgroundImage: `url(${banner.src})` }}
>

    <div className="relative text-center z-1 flex flex-wrap items-center justify-center">
        <div className='w-11/12 md:w-8/4 lg:w-7/12   bg-black bg-opacity-50 py-6 pb-8 px-4; lg:py-10 lg:px-12 lg:pt-8 rounded-3xl'>
            <h1 className="text-white text-2xl md:text-4xl lg:leading-tight   redhat  font-normal  w-full">  {text.heading}</h1>

            <p className='w-full text-white text-sm lg:text-[15px] italic mt-4 mb-7 lg:mt-4 lg:mb-10'>
                {text.title}
            </p>
            <Link className='text-white border-2 p-2 px-12 lg:px-20 hover:bg-white hover:text-black transition delay-100 duration-100 ease-in-out' href="#">Read More</Link>

        </div>
    </div>
</section>
  )
}
