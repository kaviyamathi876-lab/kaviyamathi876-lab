import React from 'react';
import { 
  GraduationCap, 
  Target, 
  HeartHandshake, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Compass as CompassIcon,
  Quote
} from 'lucide-react';
import { aboutData } from '../data/about';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-navy-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest">
            <CompassIcon className="w-3.5 h-3.5" />
            <span>Foundations &amp; Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {aboutData.bioSummary}
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          
          {/* Degree & College */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Degree &amp; College</span>
            <h3 className="text-lg font-serif font-bold text-white mt-1 mb-2">
              {aboutData.degree}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {aboutData.college}
            </p>
          </div>

          {/* Innovation Fellowship */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-teal-400 font-semibold">Innovation Journey</span>
            <h3 className="text-lg font-serif font-bold text-white mt-1 mb-2">
              ProtoSem Fellow
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Exploring innovation, technology, rapid prototyping, and social entrepreneurship at Forge.
            </p>
          </div>

          {/* Career Goal */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group md:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Strategic Direction</span>
            <h3 className="text-lg font-serif font-bold text-white mt-1 mb-2">
              Career Goal
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To combine political knowledge with innovation &amp; tech to solve real-world problems.
            </p>
          </div>

          {/* Core Motivation */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group md:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold">Driving Force</span>
            <h3 className="text-lg font-serif font-bold text-white mt-1 mb-2">
              Motivation
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Understanding people's problems, practical solutions, and societal impact.
            </p>
          </div>

        </div>

        {/* Detailed Career Goal & Motivation Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-amber-500/25 p-7 shadow-xl relative">
            <Quote className="w-8 h-8 text-amber-500/20 absolute top-5 right-5" />
            <h4 className="text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
              My Career Goal
            </h4>
            <p className="text-base sm:text-lg text-slate-100 font-serif italic leading-relaxed">
              "{aboutData.careerGoal}"
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-teal-500/25 p-7 shadow-xl relative">
            <Quote className="w-8 h-8 text-teal-500/20 absolute top-5 right-5" />
            <h4 className="text-sm font-semibold tracking-wider uppercase text-teal-400 mb-2">
              What Motivates Me
            </h4>
            <p className="text-base sm:text-lg text-slate-100 font-serif italic leading-relaxed">
              "{aboutData.motivation}"
            </p>
          </div>
        </div>

        {/* Interests & Strengths Chips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Interests */}
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h3 className="text-xl font-serif font-bold text-white">
                Core Interests
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-5">
              The thematic domains that ignite my curiosity and drive my ongoing studies.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {aboutData.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-navy-800 text-slate-200 border border-slate-700/80 hover:border-amber-400/50 hover:text-amber-200 transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              <h3 className="text-xl font-serif font-bold text-white">
                Key Strengths
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-5">
              Personal competencies that enable effective teamwork, leadership, and analytical execution.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {aboutData.strengths.map((strength, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-navy-800 text-slate-200 border border-slate-700/80 hover:border-teal-400/50 hover:text-teal-200 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  {strength}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
