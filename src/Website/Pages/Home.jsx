import React from 'react'
import HomeHero from './HomeSactions/HomeHero'
import Kid1 from './HomeSactions/Kid1'
import Educators2 from './HomeSactions/Educators2'
import LearnAbout3 from './HomeSactions/LearnAbout3'

export default function Home() {
    return (
        <div className="w-screen mx-auto overflow-x-hidden">
            <HomeHero />
            <Kid1 />
            <Educators2 />
            <LearnAbout3 />
        </div>
    )
}
