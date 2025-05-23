"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Productlist = ({ heading, fruitData }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? fruitData : fruitData.slice(0, 6);
  return (
    <>
      <section className="py-10 px-4 md:px-10 bg-cover">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 ">
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center  text-[#1B453C]  mb-14">
            {heading}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item, index) => {
              const content = (
                <>
                  <div className="w-full h-[270px] relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="w-full object-cover h-full"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                  </div>

                  <div className="p-4 -mt-14 relative z-10 text-base font-semibold text-white flex justify-between items-center">
                    {item.title}
                    <FaLongArrowAltRight />
                  </div>
                </>
              );

              return item.link ? (
                <Link
                  href={item.link}
                  key={index}
                  className="overflow-hidden block"
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={index}
                  className="overflow-hidden block cursor-default"
                >
                  {content}
                </div>
              );
            })}
          </div>

          {/* Show More / Show Less Button */}
          {fruitData.length > 6 && (
            <div className="text-center mt-14 pb-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-16 py-3 text-white bg-[#1B453C] hover:bg-[#13312b] rounded-md transition"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
