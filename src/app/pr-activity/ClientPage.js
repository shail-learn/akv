"use client"
import React from 'react'
import banner from "../../assets/images/blog/pr-banner.webp";
import BannerPage from '../components/BannerPage';
import img1 from "../../assets/images/blog/news1.webp";
import img2 from "../../assets/images/blog/news2.webp";
import img3 from "../../assets/images/blog/news3.webp";
import img4 from "../../assets/images/blog/news4.webp";
import img5 from "../../assets/images/blog/news5.webp";
import img6 from "../../assets/images/blog/news6.webp";


import img01 from "../../assets/images/blog/gallery1.jpg";
import img02 from "../../assets/images/blog/gallery2.jpg";
import img03 from "../../assets/images/blog/gallery3.jpg";

import Image from 'next/image';
import Link from 'next/link';

function ClientPage() {
  const text = {
    banner: banner,
    heading: `PR Activity`,
    opacity: "opacity-30"
  };

  const blogs = [
    {
      title: "Harnessing Technology for a Sustainable Future: IoT and AI in Organic Farming",

      image: img1,
      link: "https://timestech.in/harnessing-technology-for-a-sustainable-future-iot-and-ai-in-organic-farming/",
    },
    {
      title: "UNDERSTANDING THE COSTS OF BUYING THE HOUSE",

      image: img2,
      link: "https://www.youtube.com/watch?v=8tiSc3ZbwJQ",
    },
    {
      title: "UNDERSTANDING THE COSTS OF BUYING THE HOUSE",
      image: img3,
      link: "https://www.thehealthsite.com/fitness/diet/can-choosing-organic-transform-your-health-journey-the-truth-revealed-1142094/",
    },
    {
      title: "Atulye Krishi Vana: Pioneering Sustainable Agribusiness in India",
      image: img4,
      link: "https://businessnewsthisweek.com/business/atulye-krishi-vana-pioneering-sustainable-agribusiness-in-india/",
    },
    {
      title: "Agroforestry इकोनॉमी का कमाल, बंजर जमीन से ऐसे खड़ा किया 1000 करोड़ का कारोबार",
      image: img5,
      link: "https://www.tv9hindi.com/business/how-agroforestry-industry-and-atulye-krishi-vana-help-to-boost-local-economy-2889030.html",
    },


  ];
  const gallery = [
    {

      image: img01,
    },
    {

      image: img02,
    },
    {
      image: img03,
    },

  ];
  const shadow = "0px 4px 4px 0px #00000052";
  return (
    <>

      <BannerPage
        heading={text.heading}
        title={text.title}
        opacity={text.opacity}
        banner={text.banner}
        classname={text.className}

      />
      <section className="py-14 md:py-20 !pt-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl text-center md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat mb-6 md:mb-10 text-[#1B453C]">
            PR Activity
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white shadow-sm hover:shadow-md border border-gray-300 transition duration-300"
              >
                <div className="h-56 relative">

                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4 mt-2">
                  <h3 className="text-[15px] text-black mb-4 md:mb-6 uppercase">
                    {blog.title}
                  </h3>
                  <div className='my-3 pt-4 text-center'>
                    <Link href={blog.link} target='_blank'>
                      <span className="inline-block border border-gray-800 text-gray-800 text-sm px-6 py-3 hover:bg-gray-800 hover:text-white transition" style={{ boxShadow: shadow }}>
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-20'>
            <h2 className="text-3xl text-center md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat mb-6 md:mb-10 text-[#1B453C]">
              PR Gallery
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {gallery.map((blog, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm hover:shadow-md border border-gray-300 transition duration-300"
                >
                  <div className="relative">

                    <Image
                      src={blog.image}
                      alt="gallery"
                      className="  w-full h-full"
                    />
                  </div>

                </div>
              ))}
            </div>

          </div>




        </div>
      </section>






    </>
  )
}

export default ClientPage