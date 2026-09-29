import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Footer } from '../components/Footer';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col justify-between pt-32">
      <div className="max-w-md mx-auto px-4 text-center my-auto">
        <span className="text-6xl font-serif font-bold text-amber-400 block mb-2">
          404
        </span>
        <h1 className="text-2xl font-serif font-bold text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          The requested page does not exist or has been relocated.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 font-semibold text-sm shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
};
