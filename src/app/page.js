"use client"

import Image from "next/image";
import axios from 'axios';

import {Banner,VedioHome} from "./components/home/Banner";
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
import {useEffect,useState} from 'react';

// test comment




export default function Home() {


  




  return ( <>
  <Banner  />
  <VedioHome  />
  <WhatWeDo  />
  <ImpactHighlights  />
  <OurBusiness  />
  <OurJourney  />
  <PurposeVision  />
  <WorkingOn  />
  <Technology  />
  <Ourteam  />
  <PurposeAndValue  />
  <EmpoweringBanner  />
  <EmpoweringBox  />
  <PartOfChange  />
  <Contact  />
  <Map  />
 </>)
    
  ;
}
