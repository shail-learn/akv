"use client";
import {
  AgromicSec,
  CitrusBanner,
  EconomicalSec,
  VarietiesCitrus,
} from "@/app/components/citrusFruits/BannerWhychooseKeyspecies";
import {
  FaqCitrus,
  InvestmentSec,
  WhyChooseSec,
} from "@/app/components/citrusFruits/WhyChooseInvestmentFaq";
import React from "react";

const Page = () => {
  return (
    <>
      <CitrusBanner />
      <VarietiesCitrus />
      <AgromicSec />
      <EconomicalSec />
      <WhyChooseSec />
      <InvestmentSec />
      <FaqCitrus />
    </>
  );
};

export default Page;
