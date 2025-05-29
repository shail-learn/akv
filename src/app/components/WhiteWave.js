import React from "react";
import Image from "next/image";
import whychooose from "../../assets/images/Whitewavy.svg";
export const WhiteWave = () => {
  return (
    <>
      <div className="relative w-full md:-mt-28 z-10 devided-line">
        <Image
          src={whychooose}
          alt="Divider"
          width={1920}
          height={700}
          className="w-full object-cover h-full"
        />
      </div>
    </>
  );
};
