import React, { useEffect, useLayoutEffect, useState } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaRss, FaTwitter } from 'react-icons/fa';
import { CgMenuRightAlt } from 'react-icons/cg';

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

  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowServicesDropdown(false);
  };
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
                <li>
                  <i><FaMapMarkerAlt /></i>
                  Find our Location
                </li>
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
          <Navbar.Brand href="#home" className="brand-logo" onClick={handleLogoClick}>
            <img src="./agh.png" height={60}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <CgMenuRightAlt className="custom-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-space-around" activeKey={activeKey} onSelect={handleSelect}>
              <Nav.Link eventKey="home" href="#about">Who We Are</Nav.Link>
              <Nav.Link eventKey="features" href="#features">Why us</Nav.Link>

              {/* Custom Services Dropdown */}
              <Nav.Link
                eventKey="services"
                href="#services"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="services-nav-link"
              >
                Services
                {showServicesDropdown && (
                  <div className="custom-dropdown-menu">
                    <Nav.Link eventKey="services/inpatient" href="#action/3.1">Inpatient</Nav.Link>
                    <Nav.Link eventKey="services/outpatient" href="#action/3.2">Outpatient</Nav.Link>
                    <Nav.Link eventKey="services/something" href="#action/3.3">Something</Nav.Link>
                    <Nav.Link eventKey="services/separated" href="#action/3.4">Separated link</Nav.Link>
                  </div>
                )}
              </Nav.Link>
              <Nav.Link eventKey="partners" href="#partners">Partners</Nav.Link>
              <Nav.Link eventKey="enquiries" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="cta-btn">
            <a className="item-btn" href="">Make an Appointment</a>
          </div>
        </Container>
      </Navbar>
    </div>
    </>
  );
}

export default Header;
