"use client";
import React from "react";
import {
  Bel,
  HerbalFAQs,
  Jamun,
  MedicinalHerbBanner,
  Tarmarid,
  WhypartnerMedicinalHerb,
} from "@/app/components/medicinalherbs/Banneraboutfruits";

function Page() {
  return (
    <>
      <MedicinalHerbBanner />
      <Bel />
      <Jamun />
      <Tarmarid />
      <WhypartnerMedicinalHerb />
      <HerbalFAQs />
    </>
  );
}

export default Page;
