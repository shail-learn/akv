import React from 'react'
import { Banner } from '../components/business/Banner'
import { About } from '../components/business/About'
import { OurCard,TreeBanner } from '../components/business/OurCard'
import { OurApproach, Plantbanner } from '../components/business/OurApproach'
import { Story,Testimonial } from '../components/business/Story'
import { ProductPage } from '../components/business/ProductPage'
import { OrnamentalPlants, CategoryCard } from '../components/business/OrnamentalPlants'
import { SliderCard, SliderVarieties } from '../components/business/SliderCard'
import { PartnerUs } from '../components/business/PartnerUs'



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