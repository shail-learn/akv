"use client";
import React from "react";
import {
  InvestLayout,
  LookingLayout,
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
import { Growth } from "@/app/components/mahagony/WhychooseGrowth";
const Page = () => {
  // /Cultivation

  return (
    <>
      <Banner />
      {/* <WhyChose /> */}
      <Growth />
      <Harvest />
      <Market />
      <Uses />
      <Sustainable />
      <Invest />
      <Looking />
    </>
  );
};

export default Page;
