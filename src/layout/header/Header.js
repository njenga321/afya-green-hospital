import React, { useEffect, useLayoutEffect, useState } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaRss, FaTwitter } from 'react-icons/fa';
import { CgMenuRightAlt } from 'react-icons/cg';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';


function Header() {
  const [activeKey, setActiveKey] = useState('');

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
  };

  const handleLogoClick = () => {
    setActiveKey(''); // Reset active key
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky state based on scroll position
      if (window.scrollY > window.innerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="header-top-bar">
        <div className="container">
          <div className="topbar">
            <div className="topbar-left-content">
              <ul className="top-contact">
                <li>
                  <i><FaPhoneAlt /></i>
                  24hr Contact Centre Line: <strong>+254 726 990 825</strong>
                </li>
                <li>
                  <i><FaEnvelope /></i>
                  info@afyagreenhospital.org
                </li>
                <Link to='https://maps.app.goo.gl/wyHdrt2gEgzJ2z6BA'>
                <li>
                  <i><FaMapMarkerAlt /></i>
                  Find our Location
                </li>
                </Link>
              </ul>
            </div>
            <div className="topbar-right-content">
                <ul className="social-icons">
                  <li className="twitter">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href=""
                      className="hint--bottom"
                      data-hint="Twitter"
                    >
                      <i><FaTwitter /></i>
                    </a>
                  </li>
                  <li className="facebook">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href=""
                      className="hint--bottom"
                      data-hint="Facebook"
                    >
                      <i><FaFacebookF /></i>
                    </a>
                  </li>
                  <li className="linkedin">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href=""
                      className="hint--bottom"
                      data-hint="LinkedIn"
                    >
                      <i><FaLinkedinIn /></i>
                    </a>
                  </li>
                  <li className="rss">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href=""
                      className="hint--bottom"
                      data-hint="RSS"
                    >
                      <i><FaRss /></i>
                    </a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>

    
      <div className="header-nav">
      <Navbar expand="lg" className={`navbar-custom ${isSticky ? 'nav-sticky' : ''}`} activeKey={activeKey} onSelect={handleSelect}>
        <Container>
        <div className="trapezium-wrapper">
        <Navbar.Brand href="#home" className="brand-logo" onClick={handleLogoClick}>
          <img src="./agh.png" alt="Logo" className="logo" />
        </Navbar.Brand>
      </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <CgMenuRightAlt className="custom-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-space-around" activeKey={activeKey} onSelect={handleSelect}>
              <Nav.Link><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></Nav.Link>
              <Nav.Link><ScrollLink to="why-us" smooth={true} duration={500}>Why Us</ScrollLink></Nav.Link>
              <Nav.Link><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></Nav.Link>
              <Nav.Link ><ScrollLink to="partners" smooth={true} duration={500}>Partners</ScrollLink></Nav.Link>
              <Nav.Link ><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="cta-btn">
            <a className="item-btn" href="#contact">Make an Appointment</a>
          </div>
        </Container>
      </Navbar>
    </div>
    </>
  );
}

export default Header;
