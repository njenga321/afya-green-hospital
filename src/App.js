import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Doctors = lazy(() => import('./pages/Doctors'));
const DoctorProfile = lazy(() => import('./pages/DoctorProfile'));
const Appointments = lazy(() => import('./pages/Appointments'));
const Emergency = lazy(() => import('./pages/Emergency'));
const Contact = lazy(() => import('./pages/Contact'));
const HealthPackages = lazy(() => import('./pages/HealthPackages'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PatientPortal = lazy(() => import('./pages/PatientPortal'));
const Telemedicine = lazy(() => import('./pages/Telemedicine'));
const Careers = lazy(() => import('./pages/Careers'));
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" />
        <p className="text-green-700 font-semibold text-sm">Loading...</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function AppLayout() {
  const { pathname } = useLocation();
  const authPaths = ['/login', '/register', '/forgot-password'];
  const isAuthPage = authPaths.includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <Header />}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorProfile />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/health-packages" element={<HealthPackages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/telemedicine" element={<Telemedicine />} />
          <Route path="/careers" element={<Careers />} />

          {/* Auth pages (no header/footer) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected pages */}
          <Route
            path="/patient-portal"
            element={
              <ProtectedRoute>
                <PatientPortal />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <AppLayout />
      </AuthProvider>
    </Router>
  );
}

export default App;
