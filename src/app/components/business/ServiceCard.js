import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import icon from "../../../assets/images/business1/arrow.svg";

export const BusinessCard = ({ image, title, info, link }) => {
  return (
    <>


      <div>
        <Image src={image} alt="service img" width="500" height="500" className='w-full h-full rounded-2xl' />
        <h2 className='text-black redhat text-xl mt-4 lg:text-2xl mb-3'>{title}</h2>
        <ul className="mt-2 space-y-2">
          {info.map((point, index) => (
            <li key={index} className="flex items-start text-left">
              <span className="text-[#1B453C] mr-3">●</span>
              <span className='text-[#1B453C] text-sm font-medium redhat'>{point}</span>
            </li>
          ))}
        </ul>
        {link && (
          <Link
            href={link}
            className="inline-flex items-center mt-6 mb-8 justify-center gap-4 py-3 px-4 text-[#1B453C] redhat font-medium border-[#1B453C] border hover:bg-[#f8f8f8] transition-all duration-300"
          >
            Read More
            <Image src={icon} alt="arrow icon" width={20} height={20} className="w-6 h-6" />
          </Link>
        )}

      </div>



    </>
  )
}
