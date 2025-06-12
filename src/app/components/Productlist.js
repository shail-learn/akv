"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Productlist = ({ heading, fruitData, bgimg }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? fruitData : fruitData.slice(0, 6);
  return (
    <>
      <section
        className="py-10 px-4 md:px-10"
        style={{
          backgroundImage: bgimg ? `url(${bgimg.src})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2">
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#1B453C] mb-14">
            {heading}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item, index) => {
              const hasFlip = !!item.flip;
              const hasLink = !!item.link;
              const showIcon = hasFlip || hasLink;

              const cardContent = (
                <div className={`relative w-full h-[270px] ${hasFlip ? "group" : ""}`}>
                  {/* Front side */}
                  <div className={`w-full h-full relative z-10 transition duration-500 ${hasFlip ? "group-hover:opacity-0" : ""}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 text-white font-semibold text-base bg-opacity-80 flex justify-between items-center">
                      <span>{item.title}</span>
                      {showIcon && <FaLongArrowAltRight />}
                    </div>
                  </div>

                  {/* Back side for flip */}
                  {hasFlip && (
                    <div className="absolute inset-0 bg-[#1b453c] font-light text-[15px] text-white flex items-center justify-center px-6 py-4 text-center opacity-0 group-hover:opacity-100 transition duration-500 z-20">
                      <p>{item.flip}</p>
                    </div>
                  )}
                </div>
              );

              return hasLink ? (
                <Link key={index} href={item.link} className="block overflow-hidden">
                  {cardContent}
                </Link>
              ) : (
                <div key={index} className="block overflow-hidden cursor-default">
                  {cardContent}
                </div>
              );
            })}
          </div>

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
