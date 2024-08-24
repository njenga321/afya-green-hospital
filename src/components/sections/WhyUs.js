import React from 'react'
import './WhyUs.css';
import SlideMotion from '../animations/SlideMotion';

function WhyUs() {
  return (
    <section className='why-us' id='why-us'>
    <div className="container">
      <SlideMotion delay={0.3} direction='left'>
        <div className="contentLeft">
          <div className="row">
              <div className="imgWrapper">
                  <img src="./afya.jpg" alt="" />
              </div>
              <div className="imgWrapper">
                  <img src="https://i.pinimg.com/564x/44/fa/82/44fa8239fdef2c990a46529ab26198a4.jpg" alt="" />
              </div>
              <div className="imgWrapper">
                  <img src="https://i.pinimg.com/736x/d1/72/26/d17226c1c47c996182f406c8e28bef9d.jpg" alt="" />
              </div>
          </div>
        </div>
      </SlideMotion>
    <div className="contentRight">
      <div className="content">
        <SlideMotion delay={0.3} direction='right'>
        <h4>Excellence</h4>
        </SlideMotion>
        <SlideMotion delay={0.4} direction='right'>
        <h2 className='title-h2'>Why Choose Us</h2>
        </SlideMotion>
        <SlideMotion delay={0.5} direction='right'>
        <p>Since 2018, Afya Green Hospital has been dedicated to delivering world-class healthcare. With a focus on human-centered care and innovation, we prioritize the well-being of every patient. Our team of professionals is committed to providing a personalized and compassionate experience.</p>
        <p>At Afya Green Hospital, quality and safety are our top priorities. The results speak for themselves.</p>
        </SlideMotion>
      </div>
    </div>
    </div>
    </section>
  )
}

export default WhyUs