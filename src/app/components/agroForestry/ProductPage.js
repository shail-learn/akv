"use client";
import Image from "next/image";
import React from "react";
import img1 from "../../../assets/images/business/product-left.webp";
import img2 from "../../../assets/images/business/product01.webp";
import img3 from "../../../assets/images/business/product002.webp";
import img4 from "../../../assets/images/business/product03.webp";
import img5 from "../../../assets/images/business/product04.webp";
import img6 from "../../../assets/images/business/product-right.webp";
import img7 from "../../../assets/images/business/product06.webp";
import img8 from "../../../assets/images/business/product07.webp";
import img9 from "../../../assets/images/business/product08.webp";
import img10 from "../../../assets/images/business/product09.webp";

import img01 from "../../../assets/images/agroforestry/product-left.webp";
import img02 from "../../../assets/images/agroforestry/product1.webp";
import img03 from "../../../assets/images/agroforestry/product2.webp";
import img04 from "../../../assets/images/agroforestry/product3.webp";
import img05 from "../../../assets/images/agroforestry/product4.webp";



import Link from "next/link";

export const ProductPage = () => {
  const heading = "Key Crops and Plantations";
  const category1 = "Timber";
  const category2 = "Fruits and Vegetables";
  const category3 = "Medicinal & Herbal Plants";

  const bigimg = img1;
  const bigimg2 = img6;

  const productlist = [
    {
      img: img2,

      link: "agroforestry/timber/rosewood",
    },
    {
      img: img3,
      link: "agroforestry/gamhar",
    },
    {
      img: img4,
      link: "agroforestry/timber/teak",
    },
    {
      img: img5,
      link: "agroforestry/mahagony",

    },
  ];
  const productlist2 = [
    {
      img: img7,

      link: "agroforestry/guava",
    },
    {
      img: img8,
      link: "/agroforestry/papaya",
    },
    {
      img: img9,
      link: "/agroforestry/amla",
    },
    {
      img: img10,
      link: "/agroforestry/orange",

    },
  ];
  const productlist3 = [
    {
      img: img02,

      link: "agroforestry/medicinal-herbal-plants/stress-relief-and-cognitive-wellness",
    },
    {
      img: img03,
      link: "agroforestry/medicinal-herbal-plants/immunity-and-infection-control",
    },
    {
      img: img04,
      link: "agroforestry/medicinal-herbal-plants/digestive-liver-and-metabolism",
    },
    {
      img: img05,
      link: "agroforestry/medicinal-herbal-plants/respirtaory-inflammatory-relief",

    },
  ];
  return (
    <>
      <section className="py-6 pt-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 max-full bg-white">
          <h2 className="text-black text-center md:text-left text-3xl md:text-4xl mb-4 lg:mb-8 lg:leading-tight  redhat  lg:text-[40px] font-semibold  w-full">
            {heading}
          </h2>
        </div>
      </section>

      <section className="py-16 bg-[#F0F0F0]">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 max-ful">
          <div className="grid  grid-col-1  md:grid-cols-12 justify-center gap-4">
            <div className="w-full md:col-span-6">

              <Image
                src={bigimg}
                alt="product"
                className="w-full h-auto rounded-tl-3xl rounded-tr-3xl"
              />

              <Link

                href="agroforestry/timber" className="bg-[#9A9771] text-center md:text-left font-medium text-2xl text-white px-6 block w-full lg:px-8 p-4 lg:p-5">

                {category1}
              </Link>
            </div>
            <div className="w-full md:col-span-6">
              <div className="grid items-center grid-col-1  md:grid-cols-12 justify-center gap-4">
                {productlist.map((item, index) => (
                  <div key={index} className="w-full h-full md:col-span-6">
                    <div className="grid gap-2 items-center">
                      <Image
                        src={item.img}
                        alt="product"
                        className="rounded-3xl  h-full"
                      />
                      <Link
                        href={item.link}
                        className="text-[15px] font-medium border-[1px] border-[#646464] w-full text-center rounded-full p-2 hover:bg-[#1B453C] hover:text-white "
                      >
                        Explore More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 max-ful">
          <div className="grid  grid-col-1  md:grid-cols-12 justify-center gap-4">
            <div className="w-full md:col-span-6">
              <Image
                src={bigimg2}
                alt="product"
                className="w-full h-auto rounded-tl-3xl rounded-tr-3xl"
              />
              <Link

                href="agroforestry/fruits-and-vegetables"

                className="bg-[#719A8E] font-medium text-center md:text-left text-2xl text-white px-6 block w-full lg:px-8 p-4 lg:p-5"
              >
                {category2}
              </Link>
            </div>
            <div className="w-full md:col-span-6">
              <div className="grid items-center grid-col-1  md:grid-cols-12 justify-center gap-4">
                {productlist2.map((item, index) => (
                  <div key={index} className="w-full h-full md:col-span-6">
                    <div className="grid gap-2 items-center">
                      <Image src={item.img} alt="product" className="rounded-3xl h-full" />
                      <Link
                        href={item.link}
                        className="text-[15px] font-medium border-[1px] border-[#646464] w-full text-center rounded-full p-2 hover:bg-[#1B453C] hover:text-white "
                      >
                        Explore More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F0F0F0]">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 max-ful">
          <div className="grid  grid-col-1  md:grid-cols-12 justify-center gap-4">
            <div className="w-full md:col-span-6">

              <Image
                src={img01}
                alt="product"
                className="w-full h-auto rounded-tl-3xl rounded-tr-3xl"
              />

              <Link

                href="agroforestry/medicinal-herbal-plants" className="bg-[#337049] font-medium text-center md:text-left text-2xl text-white px-6 block w-full lg:px-8 p-4 lg:p-5">

                {category3}
              </Link>
            </div>
            <div className="w-full md:col-span-6">
              <div className="grid items-center grid-col-1  md:grid-cols-12 justify-center gap-4">
                {productlist3.map((item, index) => (
                  <div key={index} className="w-full h-full md:col-span-6">
                    <div className="grid gap-2 items-center">
                      <Image
                        src={item.img}
                        alt="product"
                        className=" rounded-3xl  h-full"
                      />
                      <Link
                        href={item.link}
                        className="text-[15px] font-medium border-[1px] border-[#646464] w-full text-center rounded-full p-2 hover:bg-[#1B453C] hover:text-white "
                      >
                        Explore More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};
