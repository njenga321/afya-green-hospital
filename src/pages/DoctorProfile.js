import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star, Calendar, Clock, Phone, Award, Languages,
  ChevronDown, ArrowLeft, CheckCircle, Users, Stethoscope,
  BookOpen, MessageSquare, ChevronRight, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/animations/FadeIn';
import { doctors } from '../data/doctors';

const dayFull = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };

function FaqItem({ faq, index, open, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => onToggle(index)}
        className="flex items-center justify-between w-full px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
      >
        <span className="pr-4 text-sm leading-snug">{faq.q}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('about');

  const doctor = doctors.find((d) => d.id === Number(id) || d.slug === id);

  if (!doctor) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">👨‍⚕️</div>
          <h1 className="text-2xl font-black text-gray-900 mb-3">Doctor Not Found</h1>
          <p className="text-gray-500 mb-6">We couldn't find this doctor's profile.</p>
          <Link to="/doctors" className="btn-primary">View All Doctors</Link>
        </div>
      </main>
    );
  }

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'faqs', label: `FAQs (${doctor.faqs?.length || 0})` },
  ];

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-green-700">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/doctors" className="hover:text-green-700">Our Doctors</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-medium">{doctor.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Profile */}
      <section className="bg-gradient-to-br from-green-900 to-teal-800 py-12">
        <div className="container-custom">
          <FadeIn>
            <button
              onClick={() => navigate('/doctors')}
              className="flex items-center gap-2 text-green-200 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all doctors
            </button>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-green-800">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&size=400&background=16a34a&color=fff&bold=true`;
                    }}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full mb-3">
                  {doctor.department}
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-white mb-1">{doctor.name}</h1>
                <p className="text-green-200 font-medium mb-3">{doctor.title} · {doctor.specialty}</p>

                <div className="flex flex-wrap gap-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} className={`w-4 h-4 ${s <= Math.round(doctor.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-500'}`} />
                      ))}
                    </div>
                    <span className="text-white font-bold text-sm">{doctor.rating}</span>
                    <span className="text-green-300 text-sm">({doctor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-green-200 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{doctor.patients} patients</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-green-200 text-sm">
                    <Award className="w-4 h-4" />
                    <span>{doctor.experience} experience</span>
                  </div>
                </div>

                <p className="text-green-100 text-sm leading-relaxed max-w-2xl mb-6">{doctor.bio}</p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/appointments?doctor=${doctor.id}`}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </Link>
                  <a
                    href="tel:+254726990825"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <Phone className="w-4 h-4" />
                    Call Clinic
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-700'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* ABOUT TAB */}
                  {activeTab === 'about' && (
                    <div className="space-y-8">
                      <div className="bg-white rounded-2xl border border-gray-100 p-7">
                        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-green-600" />
                          Biography
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">{doctor.longBio || doctor.bio}</p>
                      </div>

                      <div className="bg-white rounded-2xl border border-gray-100 p-7">
                        <h2 className="text-xl font-black text-gray-900 mb-5 flex items-center gap-2">
                          <Stethoscope className="w-5 h-5 text-green-600" />
                          Areas of Expertise
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {doctor.expertise.map((e) => (
                            <div key={e} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm font-medium text-gray-800">{e}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {doctor.conditions?.length > 0 && (
                        <div className="bg-white rounded-2xl border border-gray-100 p-7">
                          <h2 className="text-xl font-black text-gray-900 mb-5">Conditions Treated</h2>
                          <div className="flex flex-wrap gap-2">
                            {doctor.conditions.map((c) => (
                              <span key={c} className="text-xs font-semibold px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full">{c}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="bg-white rounded-2xl border border-gray-100 p-7">
                        <h2 className="text-xl font-black text-gray-900 mb-5 flex items-center gap-2">
                          <Award className="w-5 h-5 text-green-600" />
                          Qualifications & Certifications
                        </h2>
                        <div className="mb-5">
                          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Academic Qualifications</p>
                          <p className="text-sm font-semibold text-gray-800">{doctor.qualifications}</p>
                        </div>
                        {doctor.certifications?.length > 0 && (
                          <div className="mb-5">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Certifications</p>
                            <div className="space-y-2">
                              {doctor.certifications.map((c) => (
                                <div key={c} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span className="text-sm text-gray-700">{c}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {doctor.memberships?.length > 0 && (
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Professional Memberships</p>
                            <div className="space-y-2">
                              {doctor.memberships.map((m) => (
                                <div key={m} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                                  <span className="text-sm text-gray-700">{m}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {doctor.languages?.length > 0 && (
                        <div className="bg-white rounded-2xl border border-gray-100 p-7">
                          <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                            <Languages className="w-5 h-5 text-green-600" />
                            Languages Spoken
                          </h2>
                          <div className="flex flex-wrap gap-2">
                            {doctor.languages.map((l) => (
                              <span key={l} className="text-sm font-semibold px-4 py-2 bg-green-50 text-green-700 rounded-xl">{l}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* SERVICES TAB */}
                  {activeTab === 'services' && (
                    <div className="bg-white rounded-2xl border border-gray-100 p-7">
                      <h2 className="text-xl font-black text-gray-900 mb-6">Services Offered</h2>
                      <StaggerChildren className="space-y-3" staggerDelay={0.04}>
                        {doctor.services.map((s, i) => (
                          <StaggerItem key={i}>
                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors group">
                              <div className="w-8 h-8 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              </div>
                              <span className="text-sm font-medium text-gray-800 pt-1">{s}</span>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerChildren>
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-sm text-gray-500 mb-4">Ready to book a service with {doctor.name}?</p>
                        <Link to={`/appointments?doctor=${doctor.id}`} className="btn-primary inline-flex">
                          <Calendar className="w-4 h-4" />
                          Book an Appointment
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* SCHEDULE TAB */}
                  {activeTab === 'schedule' && (
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl border border-gray-100 p-7">
                        <h2 className="text-xl font-black text-gray-900 mb-6">Consulting Hours</h2>
                        <div className="space-y-3">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
                            const isAvailable = doctor.available.includes(day);
                            const time = doctor.schedule?.[day];
                            return (
                              <div
                                key={day}
                                className={`flex items-center justify-between p-4 rounded-xl ${isAvailable ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`w-2.5 h-2.5 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-gray-300'}`} />
                                  <span className={`font-semibold text-sm ${isAvailable ? 'text-gray-900' : 'text-gray-400'}`}>
                                    {dayFull[day]}
                                  </span>
                                </div>
                                <span className={`text-sm font-medium ${isAvailable ? 'text-green-700' : 'text-gray-400'}`}>
                                  {isAvailable ? (time || 'Available') : 'Not available'}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                          <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-amber-800">
                            Schedules may vary on public holidays. Please call <strong>+254 726 990 825</strong> or book online to confirm availability.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-gray-100 p-7">
                        <h2 className="text-xl font-black text-gray-900 mb-4">Location</h2>
                        <div className="flex items-start gap-3 text-gray-600 text-sm">
                          <MapPin className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-gray-900">Afya Green Hospital</p>
                            <p>Off Mombasa Road, Kaloleni, Voi</p>
                            <p>Taita-Taveta County, Kenya</p>
                          </div>
                        </div>
                        <div className="mt-4 bg-green-50 rounded-xl overflow-hidden h-40 flex items-center justify-center">
                          <div className="text-center">
                            <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
                            <p className="text-sm text-green-700 font-medium">Off Mombasa Road, Kaloleni, Voi</p>
                            <a
                              href="https://maps.google.com/?q=Afya+Green+Hospital+Voi+Kenya"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-green-600 hover:underline font-semibold"
                            >
                              Open in Google Maps →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FAQS TAB */}
                  {activeTab === 'faqs' && (
                    <div className="space-y-3">
                      <div className="bg-white rounded-2xl border border-gray-100 p-7 mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <MessageSquare className="w-5 h-5 text-green-600" />
                          <h2 className="text-xl font-black text-gray-900">Frequently Asked Questions</h2>
                        </div>
                        <p className="text-gray-500 text-sm">Common questions about {doctor.name}'s practice and services.</p>
                      </div>
                      {doctor.faqs?.map((faq, i) => (
                        <FaqItem
                          key={i}
                          faq={faq}
                          index={i}
                          open={openFaq === i}
                          onToggle={(idx) => setOpenFaq(openFaq === idx ? null : idx)}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Book CTA */}
              <FadeIn>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-36">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-12 h-12 rounded-xl object-cover"
                      onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&size=100&background=16a34a&color=fff&bold=true`; }}
                    />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{doctor.name}</p>
                      <p className="text-xs text-gray-500">{doctor.specialty}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-5">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold">{doctor.rating}</span>
                    <span className="text-xs text-gray-400">({doctor.reviews} reviews)</span>
                  </div>

                  <Link
                    to={`/appointments?doctor=${doctor.id}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors mb-3 text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </Link>
                  <a
                    href="tel:+254726990825"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    +254 726 990 825
                  </a>

                  <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Experience</span>
                      <span className="font-semibold text-gray-900">{doctor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Patients seen</span>
                      <span className="font-semibold text-gray-900">{doctor.patients}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Department</span>
                      <span className="font-semibold text-gray-900 text-right max-w-28">{doctor.department}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Available days</span>
                      <div className="flex gap-1">
                        {doctor.available.map((d) => (
                          <span key={d} className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Emergency */}
              <FadeIn delay={0.1}>
                <div className="bg-gray-900 text-white rounded-2xl p-5">
                  <h3 className="font-bold mb-1 text-sm">Medical Emergency?</h3>
                  <p className="text-gray-400 text-xs mb-3">Our emergency team is available 24 hours a day.</p>
                  <a href="tel:+254719073000" className="flex items-center gap-2 text-red-400 font-bold hover:text-red-300 text-sm">
                    <Phone className="w-4 h-4" /> 0719 073 000
                  </a>
                </div>
              </FadeIn>

              {/* Other Doctors */}
              <FadeIn delay={0.15}>
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm">Other Specialists</h3>
                  <div className="space-y-3">
                    {doctors.filter((d) => d.id !== doctor.id && !d.isLeadership).slice(0, 4).map((d) => (
                      <Link
                        key={d.id}
                        to={`/doctors/${d.id}`}
                        className="flex items-center gap-3 group hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors"
                      >
                        <img
                          src={d.image}
                          alt={d.name}
                          className="w-10 h-10 rounded-xl object-cover flex-shrink-0"
                          onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(d.name)}&size=80&background=16a34a&color=fff&bold=true`; }}
                        />
                        <div>
                          <p className="text-xs font-semibold text-gray-900 group-hover:text-green-700 transition-colors">{d.name}</p>
                          <p className="text-xs text-gray-500">{d.specialty}</p>
                        </div>
                      </Link>
                    ))}
                    <Link to="/doctors" className="flex items-center gap-1 text-xs text-green-600 font-semibold hover:text-green-700 pt-1">
                      View all doctors <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
