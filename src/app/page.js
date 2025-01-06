import Image from "next/image";
import {Banner,Banner2} from "./components/home/Banner";
import WhatWeDo from "./components/home/WhatWeDo";

export default function Home() {
  return (
    <>
     <Banner/>
     <Banner2/>
     <WhatWeDo/>
    </>
  );
}
