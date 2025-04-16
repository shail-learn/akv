import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/blog/banner.webp";
import img01 from "../../../assets/images/blog/blog1.webp";
import img2 from "../../../assets/images/blog/blog2.webp";
import img3 from "../../../assets/images/blog/blog3.webp";
import img4 from "../../../assets/images/blog/blog4.webp";
import contactbg from "../../../assets/images/blog/contact.webp";


import Image from 'next/image';
import Link from 'next/link';


export const Banner = () => {
  const text = {
    banner: banner,
    heading: `Stories of Impact <br/>  Innovation & Infrastructure`,
    opacity: "opacity-15"
  };
  return (
    <>
      <BannerPage heading={text.heading}
        title={text.title}
        opacity={text.opacity}
        banner={text.banner}
        classname={text.className} />
    </>
  )
}



export const Bigcard = () => {
  const plantingData = {
    title: "The Miraculous Benefits of Seesham (Rose Sandalwood) – A Natural Healer",
    shortdesciption: `Discover how AKV is transforming urban India through cutting-edge technology and smart infrastructure solutions.`,
    imageSrc: img01,
  };
  const shadow = "0px 4px 4px 0px #00000052";

  return (
    <>

      <section className='py-14  lg:py-20' >
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16'>
            <div className="md:w-1/2 w-full">
              <div className='relative'>

                <Image
                  src={plantingData.imageSrc}
                  alt="Planting Techniques"
                  width={600}
                  height={400}
                  className="rounded-[20px]"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                />
                <div className="absolute inset-0 -z-10 h-[110%] w-[96%] md:w-full translate-x-6 -translate-y-3 md:-translate-y-4 bg-white border border-gray-400 rounded-[20px] shadow-md"></div>

              </div>

            </div>
            <div className='lg:w-6/12  w-12/12'>

              <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat mb-4 md:mb-6 text-[#1B453C]">{plantingData.title}</h2>
              <p
                className="text-base md:text-[17px] font-normal redhat text-black mb-10 md:mb-14"
                dangerouslySetInnerHTML={{ __html: plantingData.shortdesciption }}
              ></p>
              <div className='text-center mt-10 md:mt-14'>
                <Link href="/blogs/the-miraculous-benefits-of-seesham-rose-sandalwood-a-natural-healer" className='border border-black py-4 px-12 hover:bg-[#1B453C] hover:text-white' style={{ boxShadow: shadow }}>READ MORE</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}



export const Blogitem = () => {

  const shadow = "0px 4px 4px 0px #00000052";

  const blogs = [
    {
      title: "UNDERSTANDING THE COSTS OF BUYING THE HOUSE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: img2,
      link: "#",
    },
    {
      title: "UNDERSTANDING THE COSTS OF BUYING THE HOUSE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: img3,
      link: "#",
    },
    {
      title: "UNDERSTANDING THE COSTS OF BUYING THE HOUSE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: img4,
      link: "#",
    },
  ];

  return (
    <>
      <section className="py-14 md:py-20 !pt-14 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl text-center md:leading-[1.3] md:text-4xl font-semibold redhat mb-6 md:mb-10 text-[#1B453C]">
            Latest Blogs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="h-56 relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-md font-semibold text-black mb-4 md:mb-6 uppercase">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">{blog.description}</p>
                  <div className='my-3 pt-4 text-center'>
                    <Link href={blog.link}>
                      <span className="inline-block border border-gray-800 text-gray-800 text-sm px-6 py-3 hover:bg-gray-800 hover:text-white transition" style={{ boxShadow: shadow }}>
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section
        className="py-20 md:py-32 bg-cover bg-center flex items-center justify-center px-4"
        style={{
          background: `url(${contactbg.src}) center center / cover no-repeat`,
        }}

      >
        <div className="border p-10 md:p-14 max-w-xl w-full text-center text-white bg-black/10">
          <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat mb-4 md:mb-6 text-white">NEWSLETTER</h2>

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 text-black mb-6 mt-8 md:mt-12"
          />

          <p className="text-sm py-4 font-light leading-relaxed mb-6">
            Follow Us On Social Media For Real-Time Updates, Project Sneak Peeks, And More.
            Stay In The Know And See What’s Happening Behind The Scenes! CONTACT US THROUGH
            EMAILS AND CHAT WITH US!!!
          </p>

          <button className="border border-white text-white py-3 px-10 hover:bg-white hover:text-black transition-all">
            SUBMIT
          </button>
        </div>
      </section>




    </>
  )
}
