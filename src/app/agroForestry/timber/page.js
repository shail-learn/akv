import { Banner, Explore, Why } from '@/app/components/timber/BannerWhyExplore'
import { Advantage, Future, Premium, PremiumAdvantage2 } from '@/app/components/timber/PremiumAdvantageFuture'
import React from 'react'

function page() {
    return (
        <>

            <Banner />
            <Why />
            <Explore />
            <Premium />
            <Advantage />
            <PremiumAdvantage2/>
            <Future />

        </>
    )
}

export default page