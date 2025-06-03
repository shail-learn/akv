import { Agricultural, Atulye, Dhaniya, Lashun, Pyaj, Why } from '@/app/components/agricultural/AgriculturalDhaniyaPyajLashunWhyAtulye'
import { Application, FAQs, Grow, Health } from '@/app/components/agricultural/ApplicationHealthGrowFAQs'
import React from 'react'

function page() {
    return (
        <>
            <Agricultural />
            <Dhaniya />
            <Pyaj />
            <Lashun />
            <Why />
            <Atulye />
            <Application />
            <Health />
            <Grow />
            <FAQs />
        </>
    )
}

export default page