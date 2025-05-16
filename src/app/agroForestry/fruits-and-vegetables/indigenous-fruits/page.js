"use client";
import {
  IndigenousBanner,
  IndigenousPlantation,
  IndigenousTechMeet,
  KeySpcies,
  WhychoooseIndigenous,
} from "@/app/components/indigenous-fruits/BannerWhyChooseSpecies";
import {
  IndigeniousFaqs,
  MarketPotentialSection,
  PartnerSection,
} from "@/app/components/indigenous-fruits/MarketPartnerFaqs";
import React from "react";

const Page = () => {
  return (
    <>
      <IndigenousBanner />
      <WhychoooseIndigenous />
      <KeySpcies />
      <IndigenousPlantation />
      <IndigenousTechMeet />
      <MarketPotentialSection />
      <PartnerSection />
      <IndigeniousFaqs />
    </>
  );
};

export default Page;
