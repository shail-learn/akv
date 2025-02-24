"use client"

import Image from "next/image";
import {Banner,VedioHome} from "./components/home/Banner";
import WhatWeDo from "./components/home/WhatWeDo";
import ImpactHighlights from "./components/home/impactHighlights";
import {useEffect,useState} from 'react';
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

  const [homepagedata,sethomepagedata]=useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function getinfo(){

      console.log('get info test');
        let fet=await fetch('/api/homepage');
        console.log('line new ',fet);
        let resp=await fet.json();

        sethomepagedata(resp);
        console.log(resp);
        setLoading(false);
    }

    getinfo();

    


  },[]);


  return loading?(<p>loading</p>):(<>
    <Banner data={homepagedata}/>
    <VedioHome data={homepagedata}/>
    <WhatWeDo data={homepagedata}/>
    <ImpactHighlights data={homepagedata}/>
    <OurBusiness data={homepagedata}/>
    <OurJourney data={homepagedata}/>
    <PurposeVision data={homepagedata}/>
    <WorkingOn data={homepagedata}/>
    <Technology data={homepagedata}/>
    <Ourteam data={homepagedata}/>
    <PurposeAndValue data={homepagedata}/>
    <EmpoweringBanner data={homepagedata}/>
    <EmpoweringBox data={homepagedata}/>
    <PartOfChange data={homepagedata}/>
    <Contact data={homepagedata}/>
    <Map data={homepagedata}/>
   </>)
    
  ;
}
