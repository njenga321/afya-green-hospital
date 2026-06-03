import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Heart, Globe, Rss, Link2, Video, ArrowRight } from 'lucide-react';

const footerLinks = {
  "Quick Links": [
    { label: "About Us", href: "/about" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Services", href: "/services" },
    { label: "Health Packages", href: "/health-packages" },
    { label: "Patient Portal", href: "/patient-portal" },
    { label: "Telemedicine", href: "/telemedicine" },
  ],
  "Services": [
    { label: "General Medicine", href: "/services/general-medicine" },
    { label: "Cardiology", href: "/services/cardiology" },
    { label: "Pediatrics", href: "/services/pediatrics" },
    { label: "Maternity & OB-GYN", href: "/services/maternity" },
    { label: "Surgery", href: "/services/surgery" },
    { label: "Diagnostics & Lab", href: "/services/diagnostics" },
  ],
  "Information": [
    { label: "Blog & Health News", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Emergency Care", href: "/emergency" },
    { label: "Insurance Partners", href: "/#partners" },
    { label: "Contact Us", href: "/contact" },
    { label: "Book Appointment", href: "/appointments" },
  ],
};

const hours = [
  { day: "Monday – Thursday", time: "9:00 AM – 5:00 PM" },
  { day: "Friday", time: "9:00 AM – 4:00 PM" },
  { day: "Saturday", time: "9:00 AM – 1:30 PM" },
  { day: "Sunday", time: "9:30 AM – 12:00 PM" },
  { day: "Emergency", time: "24 Hours / 7 Days" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-900/50 flex items-center justify-center">
                <img src="/agh.png" alt="AGH" className="w-9 h-9 object-contain" />
              </div>
              <div>
                <div className="font-black text-green-400 leading-tight">AFYA GREEN</div>
                <div className="text-xs text-gray-400 tracking-widest uppercase">Hospital</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Afya Green Hospital is a leading private hospital in Voi, Kenya, providing compassionate, world-class healthcare since 2018. Your health is our mission.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+254726990825" className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-green-900/40 flex items-center justify-center group-hover:bg-green-900/70 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-green-400" />
                </div>
                +254 726 990 825
              </a>
              <a href="tel:+254719073000" className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-green-900/40 flex items-center justify-center group-hover:bg-green-900/70 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-green-400" />
                </div>
                Emergency: 0719 073 000
              </a>
              <a href="mailto:info@afyagreenhospital.org" className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-green-900/40 flex items-center justify-center group-hover:bg-green-900/70 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-green-400" />
                </div>
                info@afyagreenhospital.org
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-green-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-green-400" />
                </div>
                Off Mombasa Road, Kaloleni, Voi, Kenya
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2 mt-6">
              {[Globe, Link2, Rss, Video].map((Icon, i) => (
                <button key={i} className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-700 hover:text-white transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="lg:col-span-2">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">{group}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gray-400 hover:text-green-400 text-sm transition-colors flex items-center gap-1.5 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Hours */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">
              <Clock className="inline w-4 h-4 mr-1.5 text-green-400" />
              Opening Hours
            </h4>
            <ul className="space-y-2.5">
              {hours.map((h) => (
                <li key={h.day} className={`text-xs ${h.day === 'Emergency' ? 'text-green-400 font-semibold' : 'text-gray-400'}`}>
                  <div className="font-medium">{h.day}</div>
                  <div className={h.day === 'Emergency' ? 'text-green-300' : 'text-gray-500'}>{h.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-green-600" />
            <span>© {new Date().getFullYear()} Afya Green Hospital. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-green-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
