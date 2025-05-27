"use client";
import {
  BannerTropical,
  CultivationTropical,
  OurTropicalOffering,
  WhyChooseTropical,
} from "@/app/components/tropical/BannerWhychose";
import {
  FaqTropical,
  StartPlantation,
  TropicalInvestment,
} from "@/app/components/tropical/WhychooseInvestmentFaq";
import React from "react";

const Page = () => {
  return (
    <>
      <BannerTropical />
      <WhyChooseTropical />
      <OurTropicalOffering />
      <CultivationTropical />
      <TropicalInvestment />
      <StartPlantation />
      <FaqTropical />
    </>
  );
};

export default Page;
