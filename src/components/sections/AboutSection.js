import React from 'react'
import './AboutSection.css'
import SlideMotion from '../animations/SlideMotion'

function AboutSection() {
  return (
    <section className='about-section' id='about'>
        <div className='container'>
            <div className='about-section-content'>
                <div className='col-lg-6 col-12'>
                        <div className='about-section-inner'>
                            <SlideMotion delay={0.8} direction = "right">
                              <div>
                                <h2 className='title-h2'>Taking Pride in Saving Life</h2>
                              </div>
                            </SlideMotion>
                            <SlideMotion delay={0.5} direction = "right">
                              <div>
                                <p>Located in the heart of the Kaloleni Area in Voi, Afya Green Hospital stands as a beacon of modern healthcare excellence. Our facility is equipped with state-of-the-art medical technology and staffed by a team of highly skilled and experienced specialists, alongside dedicated professional medical personnel. For generations, Afya Green Hospital has been consistently ranked among the leading private hospitals in Kenya, renowned for our unwavering commitment to delivering exceptional standards of care, quality services, and personalized patient attention.</p><br/>
                                <p>As pioneers in the healthcare sector, we are driven by our core value of compassion and a steadfast commitment to the dignity and well-being of our patients. Our vision is to evolve into a premier one-stop healthcare provider across East and Central Africa, offering comprehensive medical solutions to diverse communities.</p>
                              </div>
                            </SlideMotion>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection