import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, ArrowRight, ChevronRight } from 'lucide-react';
import { StaggerChildren, StaggerItem, FadeIn } from '../animations/FadeIn';
import SectionHeader from '../ui/SectionHeader';
import { doctors } from '../../data/doctors';

const featured = doctors.slice(0, 4);

export default function DoctorsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Our Specialists"
            title="Meet Our Expert Medical Team"
            description="Board-certified physicians and specialists committed to delivering exceptional patient outcomes."
          />
          <Link to="/doctors" className="btn-secondary flex-shrink-0 self-start md:self-end">
            All Doctors
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {featured.map((doctor) => (
            <StaggerItem key={doctor.id}>
              <div className="group card-premium overflow-hidden">
                <div className="relative overflow-hidden h-56 bg-gradient-to-br from-green-100 to-teal-100">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&size=400&background=16a34a&color=fff&bold=true`; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-2.5 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                      {doctor.specialty}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-0.5 group-hover:text-green-700 transition-colors">{doctor.name}</h3>
                  <p className="text-gray-500 text-xs mb-3">{doctor.experience} experience</p>

                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-gray-800">{doctor.rating}</span>
                    <span className="text-xs text-gray-400">({doctor.reviews} reviews)</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {doctor.available.map((day) => (
                      <span key={day} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md font-medium">{day}</span>
                    ))}
                  </div>

                  <Link
                    to={`/appointments?doctor=${doctor.id}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-50 text-green-700 text-sm font-semibold rounded-xl hover:bg-green-600 hover:text-white transition-all duration-200 group/btn"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl px-6 py-4">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900 text-sm">View all 40+ specialists</div>
              <div className="text-xs text-gray-500">Search by specialty, name, or availability</div>
            </div>
            <Link to="/doctors" className="btn-primary text-sm px-5 py-2 ml-2">
              Browse Doctors
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
