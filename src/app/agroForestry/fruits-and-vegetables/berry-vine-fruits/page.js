"use client";
import React from "react";
import {
  AboutBerry,
  BerryBanner,
  BerryWeCultivate,
  WhyChooseBerry,
} from "@/app/components/berry-vine-fruits/HerosecAbout";
import {
  BerryAndVineFaqs,
  GettingStart,
  PartnerSec,
} from "./GettingStartPartnerFaq";

const Page = () => {
  return (
    <>
      <BerryBanner />
      <AboutBerry />
      <BerryWeCultivate />
      <WhyChooseBerry />
      <GettingStart />
      <PartnerSec />
      <BerryAndVineFaqs />
    </>
  );
};

export default Page;
