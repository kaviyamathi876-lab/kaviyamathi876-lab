import React, { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Building, 
  CheckCircle2, 
  Award,
  Layers
} from 'lucide-react';
import { experiencesData } from '../data/experiences';

export const Experiences: React.FC = () => {
  // State for expandable internship details
  const [expandedInternships, setExpandedInternships] = useState<Record<string, boolean>>({
    'mla-internship': true, // Expanded by default or toggled
  });

  const toggleInternship = (id: string) => {
    setExpandedInternships((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experiences" className="py-24 relative bg-navy-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Exposure &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Experiences
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Real-world governance exposure, constituency observations, and collegiate club leadership.
          </p>
        </div>

        {/* SUBSECTION 1: Internship Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Internship Experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Grassroots legislative exposure and public administration immersion.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {experiencesData.internships.map((internship) => {
              const isExpanded = expandedInternships[internship.id] ?? false;

              return (
                <div
                  key={internship.id}
                  className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 transition-all duration-300"
                >
                  {/* Top Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          {internship.badge}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          {internship.duration}
                        </span>
                      </div>
                      <h4 className="text-2xl font-serif font-bold text-white mb-1">
                        {internship.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300">
                        <span className="font-medium text-amber-200">{internship.office}</span>
                        <span className="inline-flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {internship.location}
                        </span>
                      </div>
                    </div>

                    {/* View Details / Hide Details Button */}
                    <button
                      type="button"
                      onClick={() => toggleInternship(internship.id)}
                      className="self-start sm:self-center inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-navy-800 hover:bg-navy-700 text-slate-200 border border-slate-700/80 hover:border-amber-400/50 transition-colors shadow-sm"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-amber-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-amber-400" />
                      )}
                    </button>
                  </div>

                  {/* Summary Text (always visible) */}
                  <div className="pt-6">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {internship.summary}
                    </p>
                  </div>

                  {/* Expandable Details Container */}
                  {isExpanded && (
                    <div className="pt-8 mt-6 border-t border-slate-800/80 grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
                      
                      {/* Activities Column */}
                      <div className="rounded-xl bg-navy-900/80 p-5 sm:p-6 border border-slate-800">
                        <div className="flex items-center gap-2 mb-4 text-amber-300">
                          <Layers className="w-4 h-4" />
                          <h5 className="text-sm font-semibold tracking-wide uppercase">
                            Activities &amp; Responsibilities
                          </h5>
                        </div>
                        <ul className="space-y-3">
                          {internship.activities.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Learnings Column */}
                      <div className="rounded-xl bg-navy-900/80 p-5 sm:p-6 border border-slate-800">
                        <div className="flex items-center gap-2 mb-4 text-teal-300">
                          <Award className="w-4 h-4" />
                          <h5 className="text-sm font-semibold tracking-wide uppercase">
                            Key Learnings &amp; Insights
                          </h5>
                        </div>
                        <ul className="space-y-3">
                          {internship.keyLearnings.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

        {/* SUBSECTION 2: Club & Leadership Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Club &amp; Leadership Experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Campus engagement, peer leadership, and committee coordination.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {experiencesData.clubExperiences.map((club) => (
              <div
                key={club.id}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                        {club.organization}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        {club.duration}
                      </span>
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-white">
                      Position: {club.role}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      Team / Vertical: <span className="text-slate-300">{club.teamVertical}</span>
                    </p>
                  </div>
                </div>

                {/* Short Summary */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-5 mb-6">
                  {club.shortSummary}
                </p>

                {/* Editable 3-column breakdown for Club card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800/80">
                  {/* Activities */}
                  <div className="p-4 rounded-xl bg-navy-900/60 border border-slate-800">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2.5">
                      Activities
                    </span>
                    <ul className="space-y-2">
                      {club.activities.map((act, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contributions */}
                  <div className="p-4 rounded-xl bg-navy-900/60 border border-slate-800">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-2.5">
                      Contributions
                    </span>
                    <ul className="space-y-2">
                      {club.contributions.map((con, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learnings */}
                  <div className="p-4 rounded-xl bg-navy-900/60 border border-slate-800">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-2.5">
                      Learnings
                    </span>
                    <ul className="space-y-2">
                      {club.learnings.map((lrn, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{lrn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
