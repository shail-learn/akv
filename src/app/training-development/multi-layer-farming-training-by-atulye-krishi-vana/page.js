import { About, Modules, Multi, Training, What } from '@/app/components/multiLayer/MultiAboutWhatTrainingModules'
import { Benefits, Farming, Program, Support, Who } from '@/app/components/multiLayer/ProgramWhoBenefitsSupportFarming'
import React from 'react'

function page() {
    return (
        <>
            <Multi />
            <About />
            <What />
            <Training />
            <Modules />
            <Program />
            <Who />
            <Benefits />
            <Support />
            <Farming />
        </>
    )
}

export default page