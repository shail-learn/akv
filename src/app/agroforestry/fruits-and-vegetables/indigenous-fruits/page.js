"use client";
import {
  IndigenousBanner,
  IndigenousPlantation,
  IndigenousTechMeet,
  KeySpcies,
  KeySpecies,
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
      <KeySpecies />
      <IndigenousPlantation />
      <IndigenousTechMeet />
      <MarketPotentialSection />
      <PartnerSection />
      <IndigeniousFaqs />
    </>
  );
};

export default Page;
