"use client"
import React from 'react'
import { Banner } from '../components/agroForestry/Banner'
import { About } from '../components/agroForestry/About'
import { OurCard,TreeBanner } from '../components/agroForestry/OurCard'
import { OurApproach, Plantbanner } from '../components/agroForestry/OurApproach'
import { Story,Testimonial } from '../components/agroForestry/Story'
import { ProductPage } from '../components/agroForestry/ProductPage'
import { OrnamentalPlants, CategoryCard } from '../components/agroForestry/OrnamentalPlants'
import { SliderCard, SliderVarieties } from '../components/agroForestry/SliderCard'
import { PartnerUs } from '../components/agroForestry/PartnerUs'
import { RealVoice } from '../components/business/RealVoice'

function page() {
  return (
    <>
     <Banner/>
     <About/>
     <OurCard/>
     <TreeBanner/>
     <OurApproach/>
     <Plantbanner/>
     <Story/>
     <RealVoice/>
     {/* <Testimonial/> */}
     <ProductPage/>
     <OrnamentalPlants/>
     <CategoryCard/>
     <SliderCard/>
     <SliderVarieties/>
     <PartnerUs/>
    </>
  )
}

export default page