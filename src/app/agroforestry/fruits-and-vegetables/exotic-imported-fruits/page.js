"use client";
import {
  ExoticFaqs,
  GlobalFruitMovement,
  WhyChoose,
} from "@/app/components/exotic-fruits/ChoosePlantationFaq";
import {
  Exotic,
  ExoticApproach,
  ExoticBanner,
  WeCultivate,
} from "@/app/components/exotic-fruits/HeroSecWhySec";
import React from "react";

const Page = () => {
  return (
    <>
      <ExoticBanner />
      <Exotic />
      <WeCultivate />
      <ExoticApproach />
      <WhyChoose />
      <GlobalFruitMovement />
      <ExoticFaqs />
    </>
  );
};

export default Page;
