import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Partners.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import SlideMotion from '../animations/SlideMotion';

function Partners() {
  return (
    <>
    <section className="partners">
        <div className="container">
            <SlideMotion delay={0.3} direction='right'>
                <div className="partners-title">
                    <h2 className='title-h2'>Our Partners</h2>
                </div>
            </SlideMotion>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
            // Breakpoints for responsive design
            320: { // Mobile devices
              slidesPerView: 2,
            },
            768: { // Tablets
              slidesPerView: 2,
            },
            1024: { // Desktop
              slidesPerView: 5,
            },
          }}
      >
        <SwiperSlide>
            <div class="partners-box">
                <a href="http://www.mua.co.ke/" target="_blank">
                <img loading="lazy" decoding="async" width="300" height="180" 
                src="./partners/mua.jpg" alt="" />
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="partners-box">
                <a href="https://www.madison.co.ke/" target="_blank">
                <img loading="lazy" decoding="async" width="300" height="180" 
                src="./partners/madison-insurance.jpg" alt="" />
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="partners-box">
                <a href="https://ke.britam.com/" target="_blank">
                <img loading="lazy" decoding="async" width="300" height="180" 
                src="./partners/britam.jpg" alt="" />
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="partners-box">
                <a href="https://www.apainsurance.org/" target="_blank">
                <img loading="lazy" decoding="async" width="300" height="180" 
                src="./partners/apa.jpg" alt="" />
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="partners-box">
                <a href="https://www.nhif.or.ke/" target="_blank">
                <img loading="lazy" decoding="async" width="300" height="180" 
                src="./partners/nhif.jpg" alt="" />
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="partners-box">
                <a href="https://ke.cicinsurancegroup.com/" target="_blank">
                <img loading="lazy" decoding="async" width="300" height="180" 
                src="./partners/cic.jpg" alt="" />
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="partners-box">
                <a href="https://www.liaisongroup.net/" target="_blank">
                <img loading="lazy" decoding="async" width="300" height="180" 
                src="./partners/liason.jpg" alt="" />
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="partners-box">
                <a href="https://aar-insurance.com/" target="_blank">
                <img loading="lazy" decoding="async" width="300" height="180" 
                src="./partners/AAR.jpg" alt="" />
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="partners-box">
                <a href="https://www.oldmutual.co.ke/" target="_blank">
                <img loading="lazy" decoding="async" width="300" height="180" 
                src="./partners/uap.jpg" alt="" />
                </a>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </section>
    </>
  )
}

export default Partners