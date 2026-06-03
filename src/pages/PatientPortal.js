import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar, FileText, Pill, FlaskConical, CreditCard, User,
  Bell, Clock, CheckCircle, AlertCircle, TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/animations/FadeIn';

const navItems = [
  { icon: TrendingUp, label: 'Dashboard', id: 'dashboard' },
  { icon: Calendar, label: 'Appointments', id: 'appointments' },
  { icon: FileText, label: 'Medical Records', id: 'records' },
  { icon: Pill, label: 'Prescriptions', id: 'prescriptions' },
  { icon: FlaskConical, label: 'Lab Results', id: 'labs' },
  { icon: CreditCard, label: 'Billing', id: 'billing' },
  { icon: User, label: 'Profile', id: 'profile' },
];

const upcomingAppointments = [
  { doctor: 'Dr. Fatima Njeri', specialty: 'Pediatrics', date: 'Tue, Jun 10, 2025', time: '10:00 AM', status: 'confirmed' },
  { doctor: 'Dr. Kenneth Mwangi', specialty: 'Surgery Follow-up', date: 'Thu, Jun 19, 2025', time: '2:30 PM', status: 'pending' },
];

const recentActivity = [
  { icon: CheckCircle, text: 'Lab results available: Full Blood Count', time: '2 hours ago', color: 'text-green-600' },
  { icon: Bell, text: 'Appointment reminder: Dr. Njeri tomorrow', time: '5 hours ago', color: 'text-blue-600' },
  { icon: Pill, text: 'Prescription ready for collection', time: '1 day ago', color: 'text-purple-600' },
  { icon: AlertCircle, text: 'Insurance claim submitted', time: '2 days ago', color: 'text-amber-600' },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 text-white">
        <h2 className="text-xl font-black mb-1">Good morning, John 👋</h2>
        <p className="text-green-100 text-sm">You have 2 upcoming appointments this month.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Appointments', value: '2', sub: 'upcoming', color: 'bg-blue-50 text-blue-600' },
          { label: 'Prescriptions', value: '3', sub: 'active', color: 'bg-purple-50 text-purple-600' },
          { label: 'Lab Results', value: '1', sub: 'new', color: 'bg-green-50 text-green-600' },
          { label: 'Invoices', value: '0', sub: 'pending', color: 'bg-amber-50 text-amber-600' },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-2xl ${stat.color.split(' ')[0]} p-5`}>
            <div className={`text-3xl font-black ${stat.color.split(' ')[1]} mb-1`}>{stat.value}</div>
            <div className="text-xs font-semibold text-gray-700">{stat.label}</div>
            <div className="text-xs text-gray-400">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-green-600" />Upcoming Appointments</h3>
        <div className="space-y-3">
          {upcomingAppointments.map((appt, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{appt.doctor}</div>
                  <div className="text-gray-500 text-xs">{appt.specialty}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">{appt.date}</div>
                <div className="flex items-center gap-1 justify-end">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-500">{appt.time}</span>
                  <span className={`ml-1 text-xs font-bold px-2 py-0.5 rounded-full ${appt.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{appt.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Bell className="w-5 h-5 text-green-600" />Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((item, i) => (
            <div key={i} className="flex items-start gap-3 py-2">
              <item.icon className={`w-4 h-4 ${item.color} flex-shrink-0 mt-0.5`} />
              <div className="flex-1">
                <div className="text-sm text-gray-700">{item.text}</div>
                <div className="text-xs text-gray-400">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const tabContent = {
  dashboard: <Dashboard />,
  appointments: (
    <div className="bg-white rounded-2xl border border-gray-100 p-8">
      <h3 className="text-xl font-bold mb-6">My Appointments</h3>
      <div className="space-y-4">
        {upcomingAppointments.map((a, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <div className="font-semibold text-gray-900">{a.doctor}</div>
              <div className="text-sm text-gray-500">{a.specialty} · {a.date} at {a.time}</div>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${a.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{a.status}</span>
          </div>
        ))}
        <Link to="/appointments" className="btn-primary mt-4 inline-flex">
          <Calendar className="w-4 h-4" /> Book New Appointment
        </Link>
      </div>
    </div>
  ),
  records: (
    <div className="bg-white rounded-2xl border border-gray-100 p-8">
      <h3 className="text-xl font-bold mb-6">Medical Records</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead><tr className="border-b border-gray-100"><th className="pb-3 text-left text-xs font-bold text-gray-500 uppercase">Date</th><th className="pb-3 text-left text-xs font-bold text-gray-500 uppercase">Type</th><th className="pb-3 text-left text-xs font-bold text-gray-500 uppercase">Doctor</th><th className="pb-3 text-left text-xs font-bold text-gray-500 uppercase">Action</th></tr></thead>
          <tbody>
            {[
              { date: 'May 12, 2025', type: 'Consultation', doctor: 'Dr. Osei' },
              { date: 'Apr 5, 2025', type: 'Lab Results', doctor: 'Lab Dept.' },
              { date: 'Mar 18, 2025', type: 'Prescription', doctor: 'Dr. Achieng' },
            ].map((r, i) => (
              <tr key={i} className="border-b border-gray-50">
                <td className="py-3 text-sm text-gray-700">{r.date}</td>
                <td className="py-3 text-sm text-gray-700">{r.type}</td>
                <td className="py-3 text-sm text-gray-700">{r.doctor}</td>
                <td className="py-3"><button className="text-xs text-green-600 font-semibold hover:text-green-700">Download PDF</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
  prescriptions: (
    <div className="bg-white rounded-2xl border border-gray-100 p-8">
      <h3 className="text-xl font-bold mb-6">Active Prescriptions</h3>
      <div className="space-y-4">
        {[
          { drug: 'Amoxicillin 500mg', dosage: '3x daily for 7 days', prescribed: 'Dr. Achieng', refills: 0 },
          { drug: 'Metformin 850mg', dosage: '2x daily with meals', prescribed: 'Dr. Osei', refills: 2 },
          { drug: 'Vitamin D3 2000 IU', dosage: '1x daily', prescribed: 'Dr. Njeri', refills: 5 },
        ].map((p, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
            <div>
              <div className="font-semibold text-gray-900">{p.drug}</div>
              <div className="text-sm text-gray-500">{p.dosage} · Prescribed by {p.prescribed}</div>
            </div>
            <span className="text-xs bg-purple-100 text-purple-700 font-bold px-2 py-1 rounded-full">{p.refills} refills left</span>
          </div>
        ))}
      </div>
    </div>
  ),
  labs: (
    <div className="bg-white rounded-2xl border border-gray-100 p-8">
      <h3 className="text-xl font-bold mb-6">Lab Results</h3>
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4 flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-green-600" />
        <span className="text-sm text-green-800 font-medium">New result available: Full Blood Count (Jun 3, 2025)</span>
      </div>
      <p className="text-gray-500 text-sm">Contact your doctor to review your lab results or request a teleconsultation.</p>
    </div>
  ),
  billing: (
    <div className="bg-white rounded-2xl border border-gray-100 p-8">
      <h3 className="text-xl font-bold mb-2">Billing & Invoices</h3>
      <p className="text-gray-500 text-sm mb-6">No outstanding invoices. All previous payments are settled.</p>
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-green-600" />
        <span className="text-sm text-green-800 font-medium">Account is up to date</span>
      </div>
    </div>
  ),
  profile: (
    <div className="bg-white rounded-2xl border border-gray-100 p-8">
      <h3 className="text-xl font-bold mb-6">My Profile</h3>
      <div className="flex items-center gap-5 mb-8">
        <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black">JD</div>
        <div>
          <div className="font-bold text-gray-900 text-xl">John Doe</div>
          <div className="text-gray-500 text-sm">Patient ID: AGH-2025-0042</div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { label: 'Date of Birth', value: 'March 15, 1985' },
          { label: 'Blood Group', value: 'O+' },
          { label: 'Phone', value: '+254 726 990 825' },
          { label: 'Email', value: 'john.doe@example.com' },
          { label: 'Insurance', value: 'NHIF + UAP' },
          { label: 'Allergies', value: 'Penicillin' },
        ].map((f) => (
          <div key={f.label} className="p-4 bg-gray-50 rounded-xl">
            <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">{f.label}</div>
            <div className="font-semibold text-gray-900 text-sm">{f.value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export default function PatientPortal() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-green-900 to-teal-800">
        <div className="container-custom">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full mb-4">Patient Portal</span>
            <h1 className="text-4xl font-black text-white mb-3">Your Health Dashboard</h1>
            <p className="text-green-100">Manage appointments, view records, and track your health — all in one place.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar nav */}
            <nav className="md:w-56 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-3 w-full px-5 py-4 text-sm font-semibold transition-all border-b border-gray-50 last:border-0 ${activeTab === item.id ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Content */}
            <div className="flex-1">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                {tabContent[activeTab]}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
