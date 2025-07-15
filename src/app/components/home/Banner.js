'use client';
import { React, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation';
import banner from "../../../assets/images/home/banner.webp";
import banner2 from "../../../assets/images/home/bg-img.webp";
import shape from "../../../assets/images/home/shape.png";
import icon from "../../../assets/images/logo-icon.svg";



import Image from 'next/image';
import Link from 'next/link';
export const Banner = () => {
    const vedio = "https://www.akv.org.in/admin/homepage/EGQV6iKpO62xGVeJlfgV4hAr8uGTSNrMdiZ9A4xq.mp4"
    const text = {
        heading: 'Forests of Tomorrow, Prosperity  for Generations',
        title: 'Join us in building a greener, more sustainable world through agroforestry and innovation.'
    }
    return (
        <>
            <div
                className="    flex items-center justify-center"

            // style={{ backgroundImage: `url(${banner.src})` }}

            >
                <video className='w-full' src={vedio} autoPlay={true} loop muted></video>

                {/* <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative text-center z-1 flex flex-wrap items-center justify-center">
                    <div className='w-11/12 md:w-3/4 lg:w-8/12'>
                        <h1 className="text-white text-3xl md:text-4xl lg:leading-tight lg:text-5xl font-light w-full">  {text.heading}</h1>

                        <p className='w-full text-white italic mt-7 mb-7 lg:mt-10 lg:mb-10'>
                            {text.title}
                        </p>
                        <Link className='text-white border-2 p-2 px-12 lg:px-20 hover:bg-white hover:text-black transition delay-100 duration-100 ease-in-out' href="#">Read More</Link>
                    </div>
                </div> */}
            </div>

        </>
    )
}
export const Banner2 = () => {
    const text = {
        heading1: 'वृक्षाणां रक्षणं धर्मः, वसुंधरायाः संरक्षणम्।',
        heading2: 'संपदा सृष्टिरक्षायै, प्रजासुखाय संपदः॥',


    }
    return (
        <>
            <div
                className="bg-cover bg-center relative pt-14 pb-20  lg:pt-28 lg:pb-28 flex items-center justify-center"
                style={{ backgroundImage: `url(${banner2.src})` }}
            >
                <div className="absolute  right-0 bottom-0">
                    <Image
                        src={shape}
                        alt="shape"
                        className='lg:h-auto h-24 w-auto'
                    />
                </div>
                <div className="relative text-center z-1 flex flex-wrap items-center justify-center">
                    <div className='flex flex-wrap justify-center gap-8'>
                        <Image
                            src={icon}
                            alt="shape"
                            className='w-20 lg:w-24'
                        />
                        <h2 className="lg:leading-snug cofee poppins text-2xl md:text-4xl  font-light  w-full"> "{text.heading1} <br />  {text.heading2}"</h2>



                    </div>
                </div>
            </div>

        </>
    )
}



export const VedioHome = () => {
  const videoRef = useRef(null);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playWithSound = async () => {
      try {
        // Always start muted so autoplay works
        video.muted = true;
        await video.play();

        // If on homepage, unmute AFTER video is playing
        if (isHomepage) {
          setTimeout(() => {
            try {
              // Try unmuting after 500ms
              video.muted = false;

              // Mute again after 10 seconds
              setTimeout(() => {
                video.muted = true;
              }, 10000);
            } catch (unmuteErr) {
              console.warn("Unmuting failed:", unmuteErr);
            }
          }, 500);
        }
      } catch (err) {
        console.warn("Autoplay with audio failed:", err);
      }
    };

    // Wait for metadata to be loaded
    if (video.readyState >= 2) {
      playWithSound();
    } else {
      video.addEventListener("loadedmetadata", playWithSound, { once: true });
    }
  }, [isHomepage]);

  return (
    <div className="bg-cover bg-center relative">
      <div className="iframe-container">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="https://www.akv.org.in/admin/homepage/LAZqhOZ5kC9qslifM9FT22ZTsgVWN8Yu3MSQuaQm.mp4"
          autoPlay
          loop
          playsInline
        />
      </div>
    </div>
  );
};