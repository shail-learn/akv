import Image from "next/image";
import React from "react";

export const Gridbox = ({ heading, data, className, gridBox }) => {
  return (
    <>
      <section
        className={`bg-[#1B453C] py-12 md:py-16 px-4 ${className ? className : ""
          } `}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[40px]  font-semibold mb-16">
            {heading}
          </h2>

          <div
            className={`grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-16 md:gap-8 img_arrow pb-4 ${gridBox}`}
          >
            {data.map((item, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? "md:flex-col-reverse " : "md:flex-col"
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
                  <div className="border-[#295F54] border text-white p-6 py-8 md:p-4 md:py-6 rounded-3xl h-full !mt-0 w-full">
                    <h4 className="text-[17px] md:text-lg font-semibold mb-2 w-full text-center">
                      {item.title}
                    </h4>
                    <p className="text-[15px] md:text-base font-light text-center w-full">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
