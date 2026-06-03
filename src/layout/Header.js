import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MapPin, Menu, X, ChevronDown, AlertTriangle,
  Calendar, Clock, Heart
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About', href: '/about',
  },
  {
    label: 'Services', href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Cardiology', href: '/services/cardiology' },
      { label: 'Pediatrics', href: '/services/pediatrics' },
      { label: 'Maternity & OB-GYN', href: '/services/maternity' },
      { label: 'Surgery', href: '/services/surgery' },
      { label: 'Diagnostics & Lab', href: '/services/diagnostics' },
      { label: 'General Medicine', href: '/services/general-medicine' },
    ],
  },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Health Packages', href: '/health-packages' },
  {
    label: 'More',
    children: [
      { label: 'Patient Portal', href: '/patient-portal' },
      { label: 'Telemedicine', href: '/telemedicine' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

function DropdownMenu({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
    >
      {items.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href) => href && location.pathname === href;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-800 text-white text-xs py-2 hidden md:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+254726990825" className="flex items-center gap-1.5 hover:text-green-200 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+254 726 990 825</span>
            </a>
            <a href="mailto:info@afyagreenhospital.org" className="flex items-center gap-1.5 hover:text-green-200 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@afyagreenhospital.org</span>
            </a>
            <span className="flex items-center gap-1.5 text-green-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Off Mombasa Road, Kaloleni, Voi</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-green-300">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon–Sat: 9am–5pm | Emergency: 24/7</span>
            </span>
            <Link to="/emergency" className="flex items-center gap-1 bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full font-bold transition-colors">
              <AlertTriangle className="w-3 h-3" />
              Emergency
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden bg-green-50 flex items-center justify-center">
                <img src="/agh.png" alt="AGH Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-black text-green-700 leading-tight">AFYA GREEN</div>
                <div className="text-xs text-gray-500 font-medium tracking-widest uppercase">Hospital</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.href ? (
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                        ${isActive(link.href) ? 'text-green-700 bg-green-50' : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'}`}
                    >
                      {link.label}
                      {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                    </Link>
                  ) : (
                    <button
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50 transition-all duration-200"
                    >
                      {link.label}
                      {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  )}
                  <AnimatePresence>
                    {link.children && openDropdown === link.label && (
                      <DropdownMenu items={link.children} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/emergency" className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <AlertTriangle className="w-4 h-4" />
                Emergency
              </Link>
              <Link to="/appointments" className="btn-primary text-sm px-5 py-2.5">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-80 bg-white z-50 flex flex-col shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <Link to="/" className="flex items-center gap-2">
                  <img src="/agh.png" alt="AGH" className="w-8 h-8 object-contain" />
                  <span className="font-black text-green-700 text-sm">AFYA GREEN HOSPITAL</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                          className="flex items-center justify-between w-full px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                        >
                          {link.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === link.label ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === link.label && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden bg-gray-50"
                            >
                              {link.children.map((child) => (
                                <Link key={child.label} to={child.href} className="block px-8 py-2.5 text-sm text-gray-600 hover:text-green-700">
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        className={`block px-5 py-3 text-sm font-semibold ${isActive(link.href) ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:bg-gray-50'}`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-5 border-t border-gray-100 space-y-3">
                <Link to="/emergency" className="flex items-center justify-center gap-2 w-full py-3 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 transition-colors">
                  <AlertTriangle className="w-4 h-4" />
                  Emergency: Call Now
                </Link>
                <Link to="/appointments" className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors">
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-1">
                  <Heart className="w-3 h-3 text-green-500" />
                  <span>Compassionate Healthcare Since 2018</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
