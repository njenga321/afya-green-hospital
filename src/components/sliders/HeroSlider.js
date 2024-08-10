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
    title: 'DISCOVER',
    description: 'This is the first slide',
    button: 'Button 1',
    buttonLink: 'https://example.com/button1',
  },
  {
    image:'https://images.unsplash.com/photo-1599045118108-bf9954418b76?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    title: 'DISCOVER',
    description: 'This is the second slide',
    button: 'Button 1',
    buttonLink: 'https://example.com/button1',
  },
  {
    image:'./afya2.jpg', 
    title: 'DISCOVER',
    description: 'This is the third slide',
    button: 'Button 1',
    buttonLink: 'https://example.com/button1',
  },
  {
    image:'./afya.jpg', 
    title: 'DISCOVER',
    description: 'This is the fourth slide',
    button: 'Button 1',
    buttonLink: 'https://example.com/button1',
  },
  
];

export default function Carousel() {

  const swiperRef = useRef(null);

 

  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        parallax={true}
        loop={true}
        modules={[Pagination, Autoplay]} // Include Autoplay module
        className="mySwiper"
        autoplay={{
          delay: 4000, // Change slide every 3 seconds
          disableOnInteraction: false, // Keep playing after user interaction
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
          <div className="slide-content" style={{ backgroundImage: `url(${slide.image})`}}>
          <div className="blur-overlay"></div>
            <div className='slide-description'>
              <p className='animate-text'>{slide.description}</p>
              <button className='animate-button' href={slide.buttonLink} target="_blank" rel="noopener noreferrer">
                {slide.button}
              </button>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
