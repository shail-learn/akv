"use client";
import {
  BannerDryFruits,
  DryFruitsSec,
  SuitableGrowthSec,
  WhyChooseDryFruits,
} from "@/app/components/dry-fruits/BannerWasveSection";
import {
  CultivateSource,
  DryFruitsFaqs,
  HarvestAndYeild,
  InvestCultivation,
  MarketDemandExportSec,
  SustainableCultivation,
  UsesApplicationsDryFruits,
} from "@/app/components/dry-fruits/HarvestingMarketInvest";
import React from "react";

const Page = () => {
  return (
    <>
      <BannerDryFruits />
      <DryFruitsSec />
      <WhyChooseDryFruits />
      <SuitableGrowthSec />
      <HarvestAndYeild />
      <MarketDemandExportSec />
      <UsesApplicationsDryFruits />
      <SustainableCultivation />
      <InvestCultivation />
      <CultivateSource />
      <DryFruitsFaqs />
    </>
  );
};

export default Page;
