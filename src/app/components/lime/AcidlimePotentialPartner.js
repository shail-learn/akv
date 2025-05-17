"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import slider1 from "../../../assets/images/lime/slider1.webp";
import slider2 from "../../../assets/images/lime/slider2.webp";
import slider3 from "../../../assets/images/lime/slider3.webp";
import slider4 from "../../../assets/images/lime/slider4.webp";
import business from "../../../assets/images/guava/business-new.webp";
import contactbg from "../../../assets/images/training/join-bg.webp";

export const Acidlime = () => {
  const heading = `Why Choose Athulye Krishi Vana’s Acid Lime?`
  const data = [
    {
      id: 1,
      img: slider1,
      title: 'Premium Organic Quality',
      points: [
        'Grown using sustainable and organic farming practices',
        'Free from harmful pesticides and chemicals',
        'Retains natural taste, aroma, and nutrient value',
      ],
    },
    {
      id: 2,
      img: slider2,
      title: 'State-of-the-Art Farming Techniques',
      points: [
        'Precision irrigation and rainwater harvesting for optimal water usage',
        'Use of modern agronomy techniques for higher yields',
        'Focus on agroforestry and biodiversity conservation',
      ],
    },
    {
      id: 3,
      img: slider3,
      title: 'Empowering Farmers & Communities',
      points: [
        'Directly benefiting local farmers through knowledge-sharing and training',
        'Generating employment and economic upliftment in rural areas',
        'Strengthening supply chains for long-term sustainability',
      ],
    },
    {
      id: 4,
      img: slider4,
      title: 'Global Standards, Local Impact',
      points: [
        'Competing on global scales of productivity and quality',
        'Committed to sustainable agriculture and environmental responsibility',
        'Focus on reducing carbon footprint through eco-friendly practices',
      ],
    },
  ];

  return (
    <>
     <section className='py-14 lg:py-20'>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className='lg:leading-snug text-[#1B453C] redhat text-center md:text-left text-3xl md:text-4xl font-medium w-full'>
          Our Sustainable Farming Pillars
        </h2>

        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={true}

          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 100 },
            640: { slidesPerView: 2, spaceBetween: 60 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper2 swiper_padd !p-4  black_arrow !px-12"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="transition-all duration-500 ease-in-out overflow-hidden rounded-lg">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="mt-6">
                  <h3 className="text-lg md:text-xl font-semibold text-[#1B453C] mb-2">
                    {item.title}
                  </h3>
                  <ul className="list-disc pl-5 text-sm text-black space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="black-arrow text-black">
          <button className="swiper-button-prev   text-2xl !left-0 px-4 py-2" />
          <button className="swiper-button-next  !right-0 px-4 py-2" />
        </div>
      </div>
    </section>
    </>
  )
}



export const Potential = () => {
  const heading = "Market and Export Potential"
    const text = "With rising demand for organic citrus fruits, our acid limes have strong market potential in both domestic and international markets"
    const info = `Used in: Culinary, beverages, pharmaceuticals, cosmetics, and essential oils
    Export quality: Meets global food safety standards
    High demand: In Middle Eastern, European, and North American markets`
    return (
        <>
            <div className="px-4 md:px-6 ">
                <h2 className="lg:leading-snug text-[#1B453C] redhat p-6 text-center text-3xl md:text-4xl font-medium w-full" > {heading}</h2>
            </div>
            <section className='py-14 lg:py-40 relative' style={{ background: `url(${business.src}) center center/ cover no-repeat` }}>
                <div className='absolute top-0 left-0 w-full h-full opacity-50 bg-black'></div>
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <p className='relative text-white text-center text-xl md:text-2xl font-normal leading-8 md:leading-10 redhat z-10'>{text}</p>
                    <p className="lg:leading-snug relative text-white redhat text-xl md:text-2xl font-medium w-full"
                        dangerouslySetInnerHTML={{ __html: info }}
                    ></p>
                </div>
            </section>


        </>
    )
}



export const Partner = () => {
  return (
    <>

        <section className="pt-14 pb-14 lg:pt-20 lg:pb-20 mt-16 relative " style={{ background: `url(${contactbg.src}) center center / cover no-repeat` }}>
            <div className="absolute inset-0 bg-black bg-opacity-35"></div>
            <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-white text-center">
                <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
                    <div className='md:w-5/12  w-12/12'>
                        <div className="flex flex-col h-full">
                            <div className="">
                                <h2 className="text-4xl md:leading-[1.3] md:text-5xl md:text-left font-bold redhat text-white">
                                Partner with Us
                                </h2>
                            </div>
                            <div className="mt-6 h-full text-left">

                                <ul className="mb-6 text-md space-y-2">
                                    <li>
                                    Athulye Krishi Vana invites retailers, wholesalers, and businesses to partner with us in delivering premium, organic, and sustainably grown acid lime.</li>

                                    <li>
                                    Together, we can build a healthier, greener, and more prosperous agricultural future!

</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-5/12  w-12/12'>

                        <div className="bg-white text-black p-6 rounded-3xl shadow-lg w-full max-w-md">
                            <h2 className="text-xl font-medium mb-4 text-center md:text-left">Contact Us Today!</h2>
                            <form>
                                <div className='flex flex-wrap gap-4 mb-4'>
                                    <input type="text" className='outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]' placeholder='Location: ' />
                                    <input type="email" className='outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]' placeholder='Email:' />
                                    <input type="text" className='outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]' placeholder='Phone Number' />
                                </div>

                                <button className='poppins mt-10  font-normal text-white w-full py-3 rounded-[10px] bg-[#1B453C]'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    </>
)
}
