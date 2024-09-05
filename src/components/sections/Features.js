import React from 'react';
import './Features.css';
import { GiHeartBeats } from 'react-icons/gi';
import { FaFirstAid } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';
import SlideMotion from '../animations/SlideMotion';

function Features() {
  return (
    <section className='features' id='services'>
      <div className='container'>
        <div className='row'>
          <div className='features-title'>
            <h2 className='title-h2'>What We Offer</h2>
          </div>
          <div className='col-lg-4 col-md-6 col-12'>
            <SlideMotion delay={0.3} direction = "left">
              <div className="feature-card feature-transition">
                <div className='feature-inner'>
                  <div className='feature-info feature-transition'>
                    <i className='feature-icon'><GiHeartBeats /></i>
                    <h2 className='title-h2'>Specialised Therapy & Support</h2>
                    <p>While friends and family offer important support, consulting a professional for specialized therapy and support is vital.</p>
                  </div>
                </div>
                <div className="card_bg_image feature-transition">
                  <div className='card_blur'></div>
                  <div className='card_bg'></div>
                </div>
              </div>
            </SlideMotion>
          </div>

          <div className='col-lg-4 col-md-6 col-12'>
            <SlideMotion delay={0.6} direction = "bottom">
              <div className="feature-card feature-transition">
                <div className='feature-inner'>
                  <div className='feature-info feature-transition'>
                    <i className='feature-icon'><FaFirstAid /></i>
                    <h2 className='title-h2'>Diagnosis & Clinical Assessment</h2>
                    <p>No matter your condition, we can accurately diagnose it using a wide range of advanced technologies.</p>
                  </div>
                </div>
                <div className="card_bg_image feature-transition">
                  <div className='card_blur'></div>
                  <div className='card_bg'></div>
                </div>
              </div>
            </SlideMotion>
          </div>

          <div className='col-lg-4 col-md-6 col-12'>
            <SlideMotion delay={0.9} direction = "right">
              <div className="feature-card feature-transition">
                <div className='feature-inner'>
                  <div className='feature-info feature-transition'>
                    <i className='feature-icon'><FaUserDoctor /></i>
                    <h2 className='title-h2'>Medical Treatment & Surgery</h2>
                    <p>There is a wide range of treatments available for medical and surgical conditions, including medications, physical therapies and surgical procedures.</p>
                  </div>
                </div>
                <div className="card_bg_image feature-transition">
                  <div className='card_blur'></div>
                  <div className='card_bg'></div>
                </div>
              </div>
            </SlideMotion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
