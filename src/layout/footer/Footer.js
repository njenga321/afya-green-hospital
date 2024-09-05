import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { LuClock } from 'react-icons/lu';
import SlideMotion from '../../components/animations/SlideMotion';

function Footer() {
  return (
    <>
    <footer>
    <div class="container">
        <div class="footer-top">
            <div class="row">
                <div class="col-md-6 col-lg-3 about-footer">
                <SlideMotion delay={0.3} direction = "left">
                    <a href='/'>
                        <div className='footer-brand'>
                            <img src='./agh.png' />
                        </div>
                    </a>
                    
                    <ul>
                        <li><a href="tel:(010) 1234 4321"><i><FaPhoneAlt /></i>(010) 1234 4321</a></li>
                        <li><i><FaMapMarkerAlt /></i>
                            Off Mombasa Road,
                            <br/>Kaloleni,
                            <br/>Voi
                        </li> 
                    </ul>
                    <div className="cta-btn">
                        <a className="item-btn" href="#contact">Make an Appointment</a>
                    </div>
                </SlideMotion>
                </div>

                <div class="col-md-6 col-lg-2 page-more-info">
                    <SlideMotion delay={0.5} direction = "left">
                        <div class="footer-title">
                            <h4>Page links</h4>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </SlideMotion>
                </div>

                <div class="col-md-6 col-lg-3 page-more-info">
                    <SlideMotion delay={0.7} direction = "right">
                        <div class="footer-title">
                            <h4>More Info</h4>
                        </div>
                        <ul>
                            <li><a href="#services">Who We Are</a></li>
                            <li><a href="#">Message From CEO</a></li>
                            <li><a href="#">Specialist Clinics</a></li>
                            <li><a href="#">Book Appointment</a></li>
                        </ul>
                    </SlideMotion>
                </div>
                <div class="col-md-6 col-lg-4 open-hours">
                    <SlideMotion delay={0.9} direction = "right">
                    <div class="footer-title">
                        <h4>Open hours</h4>
                        <ul class="footer-social">
                            <li><a href="" target="_blank"><i><FaFacebookF /></i></a></li>
                            <li><a href="" target="_blank"><i><FaInstagram /></i></a></li>
                            <li><a href="" target="_blank"><i><FaLinkedinIn /></i></a></li>

                        </ul>
                    </div>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Monday - Thursday</td>
                                <td>9:00am - 5:00pm</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>9:00am - 4:00pm</td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td>9:00am - 1:30pm</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>9:30am - 12:00pm</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <div class="footer-logo">

                    <table>
                        <tbody>
                            <tr />
                                <td><img src="./partners/nhif.jpg" /></td>
                                <td><img src="./partners/madison-insurance.jpg" /></td>
                                <td><img src="./partners/cic.jpg" /></td>
                                <td><img src="./partners/liason.jpg" /></td>
                                <td><img src="./partners/care-services.jpg" /></td>
                        </tbody>
                    </table>
                    </div>
                    </SlideMotion>

                </div>
            </div>
        </div>
        <hr />
        <div class="footer-bottom">
            <div class="row">
                <div class="col-sm-4">
                    <a href="">Privacy policy</a>
                </div>
                <div class="col-sm-8">
                    <p>Peter Njenga @ 2024 All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
</footer>
</>
  );
}

export default Footer