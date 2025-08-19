import Link from "next/link";
import React from "react";

const BannerPage = ({
  video,
  heading,
  title,
  banner,
  button,
  link,
  classname = "",
  subtitle,
  opacity,
}) => {
  // Determine the final image URL
  const bannerUrl =
    typeof banner === "string"
      ? banner // plain string (static or dynamic URL)
      : banner?.src; // object with src property

  return (
    <div
      className={`py-16 lg:h-[550px] flex items-center justify-center relative`}
      style={
        !video
          ? {
              background: bannerUrl
                ? `url(${bannerUrl}) center center / cover no-repeat`
                : "none",
            }
          : {}
      }
    >
      {video && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
          poster={bannerUrl}
        />
      )}

      {/* Overlay */}
      <div
        className={`absolute h-full top-0 bottom-0 w-full bg-black ${
          opacity || "opacity-20"
        }`}
      />

      {/* Content */}
      <div className="relative text-center z-10 flex flex-wrap w-full items-center justify-center">
        <div className="w-11/12 md:w-3/4 lg:w-7/12">
          {heading && (
            <h1
              className="text-white text-3xl md:text-4xl lg:leading-tight lg:text-[44px] font-bold w-full"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          )}
          {subtitle && (
            <p
              className="w-full text-white text-xl md:text-2xl mt-3 mb-7 lg:mt-4 lg:mb-4"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}
          {title && (
            <p
              className="w-full text-white text-[15px] md:text-base mt-5 mb-7 lg:mt-7 lg:mb-10"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
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
  );
};

export default BannerPage;