"use client";
import React from "react";
import {
  Bel,
  Jamun,
  MedicinalHerbBanner,
  Tarmarid,
  WhypartnerMedicinalHerb,
} from "@/app/components/medicinalherbs/Banneraboutfruits";
import { FAQs } from "@/app/components/digestive-liver/WhypartnerJoinFAQs";

function Page() {
  return (
    <>
      <MedicinalHerbBanner />
      <Bel />
      <Jamun />
      <Tarmarid />
      <WhypartnerMedicinalHerb />
      <FAQs />
    </>
  );
}

export default Page;
