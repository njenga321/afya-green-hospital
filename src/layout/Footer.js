import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Heart, Globe, Rss, Link2, Video,
  ArrowRight, AlertTriangle, Shield, Award, Users
} from 'lucide-react';

const footerLinks = {
  "Quick Links": [
    { label: "About Us", href: "/about" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Services", href: "/services" },
    { label: "Health Packages", href: "/health-packages" },
    { label: "Patient Portal", href: "/patient-portal" },
    { label: "Telemedicine", href: "/telemedicine" },
  ],
  "Medical Services": [
    { label: "General Medicine", href: "/services/general-medicine" },
    { label: "Cardiology", href: "/services/cardiology" },
    { label: "Pediatrics", href: "/services/pediatrics" },
    { label: "Maternity & OB-GYN", href: "/services/maternity" },
    { label: "Surgery", href: "/services/surgery" },
    { label: "Diagnostics & Lab", href: "/services/diagnostics" },
    { label: "Emergency Care", href: "/emergency" },
  ],
  "Information": [
    { label: "Blog & Health News", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Book Appointment", href: "/appointments" },
    { label: "Contact Us", href: "/contact" },
    { label: "Register / Sign In", href: "/register" },
  ],
};

const hours = [
  { day: "Monday – Thursday", time: "9:00 AM – 5:00 PM" },
  { day: "Friday", time: "9:00 AM – 4:00 PM" },
  { day: "Saturday", time: "9:00 AM – 1:30 PM" },
  { day: "Sunday", time: "9:30 AM – 12:00 PM" },
  { day: "Emergency", time: "24 Hours / 7 Days" },
];

const stats = [
  { icon: Users, value: "15,000+", label: "Patients Served" },
  { icon: Award, value: "20+", label: "Specialists" },
  { icon: Shield, value: "Since 2018", label: "Established" },
  { icon: Heart, value: "24/7", label: "Emergency Care" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Emergency Banner */}
      <div className="bg-red-900/40 border-b border-red-900/50">
        <div className="container-custom py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm">
            <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
            <span className="text-gray-300">Medical Emergency?</span>
            <a href="tel:+254719073000" className="text-red-400 font-black hover:text-red-300 transition-colors">
              Call 0719 073 000 — 24/7 Emergency Line
            </a>
          </div>
          <Link to="/emergency" className="text-xs font-semibold text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
            Emergency Info <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-900/50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-lg font-black text-white leading-tight">{value}</div>
                  <div className="text-xs text-gray-400">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-13 h-13 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1">
                <img src="/logo.png" alt="Afya Green Hospital" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <div className="font-black text-green-400 leading-tight tracking-wide">AFYA GREEN</div>
                <div className="text-xs text-gray-500 tracking-widest uppercase">Hospital · Est. 2018</div>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-7 max-w-sm">
              Afya Green Hospital is a leading private hospital in Voi, Kenya, delivering compassionate, world-class healthcare with advanced diagnostics and specialist care under one roof.
            </p>

            {/* Contact Details */}
            <div className="space-y-3.5">
              <a href="tel:+254726990825" className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-gray-800 group-hover:bg-green-900/60 flex items-center justify-center transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Main Line</div>
                  <div className="font-semibold">+254 726 990 825</div>
                </div>
              </a>

              <a href="tel:+254719073000" className="flex items-center gap-3 text-sm text-gray-400 hover:text-red-400 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-gray-800 group-hover:bg-red-900/40 flex items-center justify-center transition-colors flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Emergency 24/7</div>
                  <div className="font-semibold text-red-400">0719 073 000</div>
                </div>
              </a>

              <a href="mailto:info@afyagreenhospital.org" className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-gray-800 group-hover:bg-green-900/60 flex items-center justify-center transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Email</div>
                  <div className="font-semibold">info@afyagreenhospital.org</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Address</div>
                  <div className="font-semibold">Off Mombasa Road, Kaloleni</div>
                  <div>Voi, Taita-Taveta, Kenya</div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-7">
              <span className="text-xs text-gray-500 mr-1">Follow us:</span>
              {[
                { Icon: Globe, label: "Website" },
                { Icon: Link2, label: "LinkedIn" },
                { Icon: Rss, label: "News" },
                { Icon: Video, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-700 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="lg:col-span-2">
              <h4 className="font-black text-white text-xs uppercase tracking-widest mb-5 pb-3 border-b border-gray-800">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-green-400 text-sm transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Opening Hours */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-white text-xs uppercase tracking-widest mb-5 pb-3 border-b border-gray-800">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              {hours.map((h) => (
                <li key={h.day}>
                  <div className={`text-xs font-semibold mb-0.5 ${h.day === 'Emergency' ? 'text-green-400' : 'text-gray-300'}`}>{h.day}</div>
                  <div className={`text-xs ${h.day === 'Emergency' ? 'text-green-300 font-bold' : 'text-gray-500'} flex items-center gap-1`}>
                    {h.day === 'Emergency' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                    {h.time}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-gray-800">
              <Link
                to="/appointments"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-700 hover:bg-green-600 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Heart className="w-3.5 h-3.5 text-green-600 fill-green-600" />
            <span>© {new Date().getFullYear()} Afya Green Hospital. All rights reserved. Serving Voi, Kenya.</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link>
            <Link to="/careers" className="hover:text-green-400 transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
