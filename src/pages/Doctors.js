import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Calendar, Filter, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../components/animations/FadeIn';
import { doctors, specialties } from '../data/doctors';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Doctors() {
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('All');
  const [availableDay, setAvailableDay] = useState('All');

  const filtered = doctors.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialty.toLowerCase().includes(search.toLowerCase());
    const matchSpecialty = specialty === 'All' || d.specialty === specialty;
    const matchDay = availableDay === 'All' || d.available.includes(availableDay);
    return matchSearch && matchSpecialty && matchDay;
  });

  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-green-900 to-teal-800">
        <div className="container-custom">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full mb-5">Our Specialists</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 max-w-3xl leading-tight">Meet Our Expert Medical Team</h1>
            <p className="text-green-100 text-lg max-w-2xl">Board-certified physicians dedicated to your health and wellbeing. Book directly with any specialist today.</p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Specialty */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="pl-11 pr-8 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none cursor-pointer"
              >
                <option value="All">All Specialties</option>
                {specialties.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Day */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 whitespace-nowrap font-medium">Available:</span>
              <div className="flex gap-1.5">
                {['All', ...days].map((day) => (
                  <button
                    key={day}
                    onClick={() => setAvailableDay(day)}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${availableDay === day ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500 text-sm">
              Showing <span className="font-semibold text-gray-900">{filtered.length}</span> of {doctors.length} doctors
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={search + specialty + availableDay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.length === 0 ? (
                <div className="col-span-full text-center py-20">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="font-bold text-gray-900 mb-2">No doctors found</h3>
                  <p className="text-gray-500">Try adjusting your filters or search term.</p>
                </div>
              ) : (
                filtered.map((doctor, i) => (
                  <motion.div
                    key={doctor.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="group card-premium overflow-hidden h-full flex flex-col">
                      <div className="relative overflow-hidden h-56 bg-gradient-to-br from-green-100 to-teal-100">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&size=400&background=16a34a&color=fff&bold=true`; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                        <div className="absolute bottom-3 left-3">
                          <span className="px-2.5 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">{doctor.specialty}</span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="font-bold text-gray-900 mb-0.5">{doctor.name}</h3>
                        <p className="text-gray-500 text-xs mb-2">{doctor.experience} experience · {doctor.qualifications.split(',')[0]}</p>
                        <div className="flex items-center gap-1 mb-3">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="text-sm font-semibold">{doctor.rating}</span>
                          <span className="text-xs text-gray-400">({doctor.reviews} reviews)</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {doctor.available.map((day) => (
                            <span key={day} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md font-medium">{day}</span>
                          ))}
                        </div>
                        <div className="mt-auto flex gap-2">
                          <Link
                            to={`/appointments?doctor=${doctor.id}`}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <Calendar className="w-3.5 h-3.5" /> Book
                          </Link>
                          <Link
                            to={`/doctors/${doctor.id}`}
                            className="flex items-center justify-center gap-1 px-3 py-2.5 border border-gray-200 text-gray-600 text-xs rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Profile <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
