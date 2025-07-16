import React from 'react'
import harvestimg from "../../../assets/images/timber/Premium.webp";
import image1 from "../../../assets/images/timber/image1.webp";
import image2 from "../../../assets/images/timber/image2.webp";
import image3 from "../../../assets/images/timber/image3.webp";
import Plant from "../../../assets/images/timber/future.webp";
import { MdCheckCircle } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import grow from "../../../assets/images/fruits-vegetables/grow.png";



import Image from 'next/image';
import Link from 'next/link';




export const Premium = () => {
  const heading = "Premium Timber Species"
  const subtitle = "Rare. Resilient. High in demand"
  return (
    <>

      <section className="py-14   lg:py-20">
        <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
          <div className='w-[95%] md:w-[92%] mx-auto'>
            <div className="relative rounded-lg">
              <Image
                src={harvestimg}
                alt="Forest Image"
                className="w-full md:h-full object-cover h-60 rounded-2xl"
              />
              <div className="absolute redhat w-3/5 md:w-1/3 h-28 flex items-center top-8 -left-3 md:-left-8 bg-[#EDA809] text-white py-3 px-6 rounded-md  ">
                <h2 className='lg:leading-snug  text-black redhat text-left border-l border-white border-opacity-20 ps-3 text-2xl md:text-4xl  font-normal'>
                  {heading}
                </h2>

              </div>
              <div className="absolute top-8 md:-right-8 -right-3  bg-[#EDA809] md:w-16 w-10 h-28 rounded-md"></div>
            </div>

            <p className="text-xl redhat font-semibold text-center text-[#1B453C] my-4">{subtitle}</p>
          </div>
        </div>
      </section>
    </>
  )
}



export const Advantage = () => {
  const data = [
    {
      "image": image1,
      "name": "Mahogony",
      "link": "/agroForestry/mahagony"
    },
    {
      "image": image2,
      "name": "Red Sandal",
      "link": "/agroForestry/timber/red-sandalwood"
    },
    {
      "image": image3,
      "name": "Gamhar",
      "link": "/agroForestry/gamhar"
    },
  ]
  return (
    <>

      <section className="py-14 !pt-0  lg:py-20">
        <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
          <div className='grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-16'>
            {data.map((item, index) => (
              <div key={index}>
                <Image className='w-full' src={item.image} alt={item.name} />
                <h2 className='text-lg text-[#1B453C] py-3 font-semibold'>{item.name}</h2>
                <Link href={item.link} className='inline-flex gap-2 items-center text-sm'> Explore Species <IoIosArrowRoundForward className='text-xl' /> </Link>

              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  )
}



export const PremiumAdvantage2 = () => {
  const heading = `Advantages <br> of Timber`

  const futurePlans = [
    `<b>Sustainable Forestry Model –</b> Grown under organic, eco-regenerative practices.`,
    `<b>High Commercial Potential –</b> Species chosen for furniture, infrastructure, and export markets.`,
    `<b>Soil & Climate Compatible –</b> Ideal for multi-regional cultivation including Tripura, MP & Jharkhand.`,
    `<b>Supports Rural Livelihoods –</b> Timber plantations generate long-term employment and training.`,
  ];


  return (
    <>

      <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10">

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-black mb-4 md:mb-20"
             dangerouslySetInnerHTML={{__html : heading}}
            />
            {/* List using map() */}
            <ul className="mt-6 space-y-4">
              {futurePlans.map((plan, index) => (
                <li key={index} className="flex  text-left space-x-3">
                  <span className="w-6 h-6 text-[#1B453C] flex items-center justify-center rounded-full">
                    <MdCheckCircle className='w-6 h-6' />
                  </span>
                  <p
                    className="text-[#141414] redhat"
                    dangerouslySetInnerHTML={{ __html: plan }}
                  />
                </li>
              ))}
            </ul>

            {/* Button */}

          </div>
          <div className=" w-full md:w-1/2">
            <Image
              src={Plant}
              alt="Planting"
              width={600}
              height={600}
              className="w-full h-full"
              quality={90}
            />

          </div>
        </div>
      </section>
    </>
  )
}



export const Future = () => {
  const growData = {
    "heading": "Grow Trees That Grow Futures",
    "paragraphs": [
        "Join us in cultivating timber that restores the land, supports livelihoods, and builds long-term ecological wealth.",

    ],

    "image": grow
}
return (
    <>
        <section className="bg-[#f1f1f1] py-10 px-4">
            <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 flex flex-col-reverse md:flex-row items-center gap-8">
                {/* Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl redhat font-semibold text-center md:text-left text-[#1B453C]  mb-8 md:mb-20">
                        {growData.heading}
                    </h2>
                    {growData.paragraphs.map((p, index) => (
                        <p key={index} className="text-black mb-2">
                            {p}
                        </p>
                    ))}
                    <div className='mt-12'>
                    <Link href="https://atulye-foundation.org/" target='_blank'
                     className="text-lg text-[#1B453C] font-normal px-4 py-2 border border-[#1B453C]">
                    Start a Plantation
                    </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="overflow-hidden  w-[250px] h-[350px] relative mx-auto md:mx-0 md:ml-auto">
                        <Image
                            src={growData.image}
                            alt="Grow with us"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-[50%] shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    </>
)
}
