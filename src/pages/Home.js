import React from 'react'
import './Home.css'
import HeroSlider from '../components/sliders/HeroSlider'
import HeroInfoCards from '../components/cards/HeroInfoCards'
import Features from '../components/sections/Features'
import AboutSection from '../components/sections/AboutSection'
import Partners from '../components/sliders/Partners'
import ContactSection from '../components/sections/ContactSection'
import WhyUs from '../components/sections/WhyUs'
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';

function Home() {
  return (
    <>
    <div className='whatsapp-float'>
      <FloatingWhatsApp
        phoneNumber='+254726990825' 
        accountName='Afya Green Hospital'
        avatar='/agh.png' 
        initialMessageByServer='Hi there! How can I assist you?' 
        statusMessage='Online' 
        notificationClassName='floating-whatsapp-notification'
        notificationDelay='30'
        placeholder='Write here...' 
        chatboxStyle={{ fontSize: '16px', color: '#000000' }}
        buttonClassName="custom-whatsapp-button"
        buttonStyle={{backgroundColor: '#066940', color: 'green', border: 'none',}}
        notificationStyle={{ backgroundColor: 'green' }}
        allowEsc={true} 
        allowClickAway={true}
      />
    </div>
    
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