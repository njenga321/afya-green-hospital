import React from 'react'
import './ContactSection.css'

function ContactSection() {
  return (
    <section className='ContactSection'>
        <div className='container'>
            <div className='row'>
                <div class="cta-box">
                    <p class="item-sub-title">Need a Doctor for Check-up?</p>
                    <h2 class="title-h2">Just Make an Appointment 
                        &amp; You're Done!</h2>
                    <div class="cta-btn">
                        <a class="item-btn" href="">Make an Appointment</a>                                  
                    </div>

                </div>
            </div>
        </div>
        <img src="https://i.pinimg.com/564x/2f/ea/ed/2feaeddf8fde2c2855d9d0dbc3796cee.jpg" alt="Contact Section Background" />

    </section>
  )
}

export default ContactSection