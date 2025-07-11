import React from "react";
import Image from "next/image";

const CardAlternate = ({ image, title, listData, orderClass }) => {
  if (!image && !title && !listData) return null;

  return (
    <>
      {image && (
        <div className={`md:col-span-3 col-span-12 ${orderClass?.image || ""} h-full`}>
          <Image src={image} alt="icon" className="w-full mx-auto h-full" />
        </div>
      )}
      {(title || listData) && (
        <div className={`md:col-span-3 col-span-12 ${orderClass?.text || ""} h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400 hover:bg-[#EFEFEF] hover:text-[#000]`}>
          <div className="p-5">
            <p className="w-3/4 pl-5 py-3 text-md font-medium">{title}</p>
            <ul
              className="w-full text-[14px] list-disc pl-5 py-4"
              dangerouslySetInnerHTML={{ __html: listData }}
            ></ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CardAlternate;
