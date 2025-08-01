"use client";
import React from "react";
import {
  InvestLayout,
  LookingLayout,
  WhyChoose,
} from "@/app/components/utilities/LookingInvestLayout";
import {
  Banner,
  Harvest,
  Invest,
  Looking,
  Market,
  Sustainable,
  Uses,
} from "@/app/components/mahagony/HeroHarvesting";
import {
  Faqs,
  Growth,
  WhyChooseSec,
} from "@/app/components/mahagony/WhychooseGrowth";
const Page = () => {
  // /Cultivation

  return (
    <>
      <Banner />
      <WhyChooseSec />
      <Growth />
      <Harvest />
      <Market />
      <Uses />
      <Sustainable />
      <Invest />
      <Looking />
      <Faqs />
    </>
  );
};

export default Page;
