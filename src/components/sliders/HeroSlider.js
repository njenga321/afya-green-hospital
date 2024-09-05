import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './HeroSlider.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const slidesData = [
  {
    image:'https://images.unsplash.com/photo-1638598124048-10c5b3f2f964?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    title: 'A Legacy of Care',
    description: 'Building on years of experience, we offer compassionate and comprehensive healthcare for every generation.',
    button: 'Learn More',
    buttonLink: '#who-we-are',
  },
  {
    image:'https://images.unsplash.com/photo-1599045118108-bf9954418b76?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    title: 'Advanced Medicine',
    description: 'Where cutting-edge technology meets personalized attention. Healing with empathy, expertise, and excellence.',
    button: 'Learn More',
    buttonLink: '#who-we-are',
  },
  {
    image:'./afya2.jpg', 
    title: 'Clinical Excellence',
    description: 'Our experienced medical team is dedicated to providing the highest level of care, tailored to your individual needs.',
    button: 'Learn More',
    buttonLink: '#who-we-are',
  },
  {
    image:'./afya.jpg', 
    title: 'Healing with Integrity',
    description: 'We are committed to delivering compassionate care with a focus on safety, dignity, and respect for every patient.',
    button: 'Learn More',
    buttonLink: '#who-we-are',
  },
  
];

export default function Carousel() {

  const swiperRef = useRef(null);

 

  return (
    <>
      <Swiper
        direction={'horizontal'}
        pagination={false}
        parallax={true}
        loop={true}
        modules={[Pagination, Autoplay]} // Include Autoplay module
        className="mySwiper"
        id='home'
        autoplay={{
          delay: 4000, // Change slide every 3 seconds
          disableOnInteraction: false, // Keep playing after user interaction
        }}
      >
        
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="slide-content" style={{ backgroundImage: `url(${slide.image})`}}>
              <div className="blur-overlay"></div>
                <div className='container'>
                  <div className='slide-description'>
                    <h2 className='animate-title title-h2' data-swiper-parallax="-100">{slide.title}</h2>
                    <p className='animate-text' data-swiper-parallax="-100">{slide.description}</p>
                    <button className='animate-button item-btn' data-swiper-parallax="-200" href={slide.buttonLink} target="_blank" rel="noopener noreferrer">
                      {slide.button}
                    </button>
                  </div>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
