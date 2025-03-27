import Link from 'next/link'
import React from 'react'

const BannerPage = ({ heading, title, banner, button, link, classname = "",subtitle,opacity}) => {

  return (
    <>
      <div
        className="py-16 lg:h-[550px] flex items-center justify-center relative" style={{ background: `url(${banner.src})center center / cover no-repeat` }} >
        <div className={`absolute h-full top-0 bottom-0 w-full bg-black ${opacity || 'opacity-20'}`}></div>
        <div className="relative text-center z-1 flex flex-wrap w-full items-center justify-center">
          <div className='w-11/12 md:w-3/4 lg:w-7/12'>

            <h1 className="text-white text-3xl md:text-4xl lg:leading-tight lg:text-[40px] font-medium w-full" dangerouslySetInnerHTML={{ __html: heading }}></h1>
            <p
                className="'w-full text-white text-xl md:text-2xl mt-3 mb-7 lg:mt-4 lg:mb-4'"
              >
                {subtitle}
              </p>

            <p className='w-full text-white italic text-[15px] mt-5 mb-7 lg:mt-7 lg:mb-10'>
              {title}
            </p>



            {/* <Link className='text-white border-2 p-2 px-12 lg:px-20 hover:bg-white hover:text-black transition delay-100 duration-100 ease-in-out' href={link}>{button}</Link> */}
            {/* <Link className={`${classname} text-white border-2 p-2 px-12 lg:px-20 hover:bg-white hover:text-black transition delay-100 duration-100 ease-in-out `} href={link}>{button}</Link> */}

            {button && link && (
              <Link
                className={`${classname} text-white border-2 p-2 px-12 lg:px-20 hover:bg-white hover:text-black transition delay-100 duration-100 ease-in-out`}
                href={link}
              >
                {button}
              </Link>
            )}



          </div>
        </div>
      </div>


    </>
  )
}

export default BannerPage