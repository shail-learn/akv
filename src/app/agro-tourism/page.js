import React from 'react'
import { Banner, Welcome, Why } from '../components/agro-tourism/BannerWelcomeWhy'
import { BlurSlider, Slider } from '../components/agro-tourism/SliderBlurSlider'
import { Address, Sustainability, Unique } from '../components/agro-tourism/SustainabilityUniqueAddress'

function page() {
  return (
    <>
     <Banner/>
     <Welcome/>
     <Why/>
     <Slider/>
     <BlurSlider/>
     <Sustainability/>
     <Unique/>
     <Address/>
    </>
  )
}

export default page