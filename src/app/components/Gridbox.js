import Image from 'next/image'
import React from 'react'

export const Gridbox = ({ heading, data }) => {
    return (
        <>
            <section className="bg-[#1B453C] py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-16">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 gap-16 md:gap-8 img_arrow">
          {data.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? 'md:flex-col-reverse ' : 'md:flex-col'
                }   text-center space-y-4 md:gap-10`}
              >
                {/* Image */}
                <div className="w-full h-full img_div">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={180}
                    className="w-full h-60 md:h-44 rounded-3xl object-cover"
                  />
                </div>

                {/* Content */}
                <div className="border-[#295F54] border text-white p-4 rounded-3xl h-full !mt-0 w-full">
                  <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm font-light">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
        </>
    )
}
