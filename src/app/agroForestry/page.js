import React from 'react'
import { Banner } from '../components/agroforestry/Banner'
import { About } from '../components/agroforestry/About'
import { OurCard,TreeBanner } from '../components/agroforestry/OurCard'
import { OurApproach, Plantbanner } from '../components/agroforestry/OurApproach'
import { Story,Testimonial } from '../components/agroforestry/Story'
import { ProductPage } from '../components/agroforestry/ProductPage'
import { OrnamentalPlants, CategoryCard } from '../components/agroforestry/OrnamentalPlants'
import { SliderCard, SliderVarieties } from '../components/agroforestry/SliderCard'
import { PartnerUs } from '../components/agroforestry/PartnerUs'



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
     <Testimonial/>
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