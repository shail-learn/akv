import { Features, Hardwood, Info, Plantation, Products } from '@/app/components/hardwood-trees/HardwoodProductsInfoFeaturesPlantation'
import { Guardian, Precious, Requirements } from '@/app/components/hardwood-trees/PreciousRequirementsGuardian'
import { Faqs, Investments, Involved, Sustainable } from '@/app/components/hardwood-trees/SustainableInvestmentsInvolvedFaqs'
import React from 'react'

function page() {
    return (
        <>
            <Hardwood />
            <Products />
            <Info />
            <Features />
            <Plantation />
            <Precious />
            <Requirements />
            <Guardian />
            <Sustainable />
            <Investments />
            <Involved />
            <Faqs />
        </>
    )
}

export default page