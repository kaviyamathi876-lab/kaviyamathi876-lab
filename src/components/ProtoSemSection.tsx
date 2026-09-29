import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { protoSemWeeks } from '../data/protosem';

export const ProtoSemSection: React.FC = () => {
  return (
    <section id="protosem" className="py-24 relative bg-navy-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Forge Fellowship Learning Log</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            ProtoSem Journal
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A 20-week reflective learning log capturing innovation milestones, prototyping sessions, problem discoveries, and design thinking journeys at Forge.
          </p>
        </div>

        {/* 20-Week Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {protoSemWeeks.map((week) => (
            <Link
              key={week.slug}
              to={`/protosem/${week.slug}`}
              className="group glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between border border-slate-800 hover:border-amber-400/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/15 transition-all" />

              <div>
                {/* Header: Week number + Status badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-md">
                    {week.weekNumber.toUpperCase()}
                  </span>
                  
                  {/* Status Badge */}
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-navy-850 px-2 py-0.5 rounded-full border border-slate-700/60">
                    <Clock className="w-3 h-3 text-amber-400/80" />
                    <span>Coming Soon</span>
                  </span>
                </div>

                {/* Week Title */}
                <h3 className="text-base font-serif font-semibold text-white group-hover:text-amber-200 transition-colors line-clamp-2 mb-2">
                  {week.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {week.introduction}
                </p>
              </div>

              {/* Action Bottom Link */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-amber-400 group-hover:text-amber-300">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Week</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
