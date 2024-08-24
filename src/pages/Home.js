import React from 'react'
import HeroSlider from '../components/sliders/HeroSlider'
import HeroInfoCards from '../components/cards/HeroInfoCards'
import Features from '../components/sections/Features'
import AboutSection from '../components/sections/AboutSection'
import Partners from '../components/sliders/Partners'
import ContactSection from '../components/sections/ContactSection'
import WhyUs from '../components/sections/WhyUs'

function Home() {
  return (
    <>
    
    <HeroSlider />

    <HeroInfoCards />

    <WhyUs />

    <Features />
    
    <AboutSection />

    <ContactSection />

    <Partners />
  

    </>
  )
}

export default Home