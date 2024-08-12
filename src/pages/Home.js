import React from 'react'
import HeroSlider from '../components/sliders/HeroSlider'
import HeroInfoCards from '../components/cards/HeroInfoCards'
import Features from '../components/Features'
import AboutSection from '../components/AboutSection'
import Partners from '../components/sliders/Partners'

function Home() {
  return (
    <>
    
    <HeroSlider />

    <HeroInfoCards />

    <Features />
    
    <AboutSection />

    <Partners />

    </>
  )
}

export default Home