import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { LuClock } from 'react-icons/lu';

function Footer() {
  return (
    <>
    <footer>
    <div class="container">
        <div class="footer-top">
            <div class="row">
                <div class="col-md-6 col-lg-3 about-footer">
                    <h3>Afya Green Hospital</h3>
                    <ul>
                        <li><a href="tel:(010) 1234 4321"><i><FaPhoneAlt /></i>(010) 1234 4321</a></li>
                        <li><i><FaMapMarkerAlt /></i>
                            1 / 105 Bay Lights,
                            <br/>Lorem Ipsum,
                            <br/>LIC 3201
                        </li>
                    </ul>
                    <div className="cta-btn">
              <a className="item-btn" href="">Make an Appointment</a>
            </div>
                </div>
                <div class="col-md-6 col-lg-2 page-more-info">
                    <div class="footer-title">
                        <h4>Page links</h4>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div class="col-md-6 col-lg-3 page-more-info">
                    <div class="footer-title">
                        <h4>More Info</h4>
                    </div>
                    <ul>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Dolor sit amet</a></li>
                        <li><a href="#">Consectetur Adipisicing </a></li>
                        <li><a href="#">Ed do eiusmod tempor incididunt</a></li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-4 open-hours">
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
                                <td>Sturday</td>
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
                                <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" /></td>
                                <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" /></td>
                                <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" /></td>
                                <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" /></td>
                                <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" /></td>
                        </tbody>
                    </table>
                    </div>
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