import Image from "next/image";
import {Banner,Banner2} from "./components/home/Banner";
import WhatWeDo from "./components/home/WhatWeDo";
import ImpactHighlights from "./components/home/impactHighlights";
import { OurBusiness } from "./components/home/OurBusiness";
import { OurJourney } from "./components/home/OurJourney";
import { PurposeVision } from "./components/home/PurposeVision";
import { WorkingOn } from "./components/home/WorkingOn";
import { Technology } from "./components/home/Technology";
import { Ourteam } from "./components/home/Ourteam";
import { PurposeAndValue } from "./components/home/PurposeAndValue";
import { EmpoweringBanner,EmpoweringBox } from "./components/home/Empowering";
import { PartOfChange } from "./components/home/PartOfChange";
import { Contact, Map } from "./components/home/Contact";



export default function Home() {
  return (
    <>
     <Banner/>
     <Banner2/>
     <WhatWeDo/>
     <ImpactHighlights/>
     <OurBusiness/>
     <OurJourney/>
     <PurposeVision/>
     <WorkingOn/>
     <Technology/>
     <Ourteam/>
     <PurposeAndValue/>
     <EmpoweringBanner/>
     <EmpoweringBox/>
     <PartOfChange/>
     <Contact/>
     <Map/>
    </>
  );
}
