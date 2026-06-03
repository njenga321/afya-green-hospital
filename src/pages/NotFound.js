import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container-custom max-w-xl text-center py-20">
        <FadeIn>
          <div className="text-8xl font-black gradient-text mb-6">404</div>
          <h1 className="text-3xl font-black text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
