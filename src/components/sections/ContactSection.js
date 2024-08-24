import React, { useState } from 'react'
import './ContactSection.css'
import SlideMotion from '../animations/SlideMotion'

function ContactSection() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const validate = () => {
        let formErrors = {};
        if (!formData.firstname.trim()) formErrors.firstname = 'First Name is required';
        if (!formData.lastname.trim()) formErrors.lastname = 'Last Name is required';
        if (!formData.phonenumber.trim()) formErrors.phonenumber = 'Phone Number is required';
        if (!formData.email.trim()) {
          formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          formErrors.email = 'Email is invalid';
        }
        return formErrors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
          // Form is valid, submit the data
          console.log('Form submitted:', formData);
        } else {
          setErrors(formErrors);
        }
      };
  return (
    <section className='ContactSection' id='contact'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-6 col-md-6 col-12'>
        <div className="cta-box">
          <div>
          <SlideMotion delay={0.3} direction='left'>
            <p className="item-sub-title">Need a Doctor for Check-up?</p>
          </SlideMotion>
          <SlideMotion delay={0.4} direction='left'>
            <h2 className="title-h2">Just Make an Appointment &amp; You're Done!</h2>
          </SlideMotion>
          </div>
        </div>
      </div>

      <div className='col-lg-6 col-md-6 col-12'>
      <SlideMotion delay={0.3} direction='right'>
        <div className="contact-form">
        <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="form-item form-item1">
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <span className="error-message">{errors.firstname}</span>}
        </div>
        
        <div className="form-item form-item1">
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <span className="error-message">{errors.lastname}</span>}
        </div>
        
        <div className="form-item form-item2">
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            id="phonenumber"
            type="tel"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <span className="error-message">{errors.phonenumber}</span>}
        </div>

        <div className="form-item form-item2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="btn-container">
          <button id="submit" className="item-btn" type="submit" name="submit" value="contact">
            Submit
          </button>
        </div>
      </div>
    </form>
        </div>
        </SlideMotion>
      </div>
    </div>
  </div>
  </section>

  )
}

export default ContactSection