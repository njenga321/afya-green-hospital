import React from 'react'
import './HeroInfoCards.css'
import { GiAmbulance } from "react-icons/gi";
import { IoMdCall } from 'react-icons/io';
import { TbClock } from 'react-icons/tb';
import { BsArrowRight } from 'react-icons/bs';


function HeroInfoCards() {
  return (
   <section className='schedule'>
    <div className='container'>
      <div className='schedule-inner'>
        <div class="row">
        <div class="col-lg-4 col-md-6 col-12 ">
            <div class="single-schedule first">
                <div class="inner">
                    <div class="icon">
                        <i><GiAmbulance/></i>
                    </div>
                    <div class="single-content">
                        <span></span>
                        <h4>Emergency Cases</h4>
                        <p>Call Centre on 0719073000 / 0732163000 / Our Accidents and Emergency Department on 0719073051</p>
                        <a href="https://www.materkenya.com/accident-emergency">LEARN MORE<i><BsArrowRight /></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
            <div class="single-schedule middle">
                <div class="inner">
                    <div class="icon">
                        <i><IoMdCall /></i>
                    </div>
                    <div class="single-content">
                        <span></span>
                        <h4>Book Appointment</h4>
                        <p>Book your next appointment at our specialty clinics with ease. We are ready to serve you and your family.</p>
                        <a href="https://www.materkenya.com/consultant">LEARN MORE<i><BsArrowRight /></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
            <div class="single-schedule last">
                <div class="inner">
                    <div class="icon">
                        <i><TbClock /></i>
                    </div>
                    <div class="single-content">
                        <span></span>
                        <h4>Opening Hours</h4>
                        <ul class="time-sidual">
                            <li class="day">Monday - Saturday <span>Open</span></li>
                            <li class="day">Sundays <span>Open</span></li>
                            <li class="day">Public Holidays <span>Open</span></li>
                        </ul>
                        <a href="#">LEARN MORE<i><BsArrowRight /></i></a>
                    </div>
                </div>
            </div>
        </div>
        </div>

      </div>
    </div>
    </section> 


   
  )
}

export default HeroInfoCards