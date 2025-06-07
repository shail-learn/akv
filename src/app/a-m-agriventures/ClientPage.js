"use client"
import React from 'react'
import { AmBanner, AmWelcome, Whoam } from '../components/agriventures/bannerWelcome'
import { FeatureGoal, Impact, Project } from '../components/agriventures/ProjectImpactGoal'
import { Change, Explore, Value } from '../components/agriventures/ValueExploreChange'

function ClientPage() {
  return (
    <>
    <AmBanner/>
     <AmWelcome/>
     <Whoam/>
     <Project/>
     <Impact/>
     <FeatureGoal/>
     <Value/>
     <Explore/>
     <Change/>
    </>
  )
}

export default ClientPage