import Image from 'next/image'
import React from 'react'

function Applicationcircle({ title, data }) {
  return (
    <>
   <section className="py-12 md:pb-24 pb-20 px-4 md:px-8 bg-white">

      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#1B453C] mb-12">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[30%] xl:w-[25%] flex justify-center"
          >
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-[4px] border-[#6D8C54] group">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 p-5 flex flex-col justify-center text-center text-white transition-opacity duration-300 group-hover:bg-opacity-70">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Applicationcircle