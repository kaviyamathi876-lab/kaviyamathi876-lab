import React from 'react';
import { Users, Search, Lightbulb, Cpu, CheckCircle } from 'lucide-react';
import { skillCategories, SkillCategory } from '../data/skills';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: SkillCategory['icon']) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-6 h-6 text-amber-400" />;
      case 'search':
        return <Search className="w-6 h-6 text-blue-400" />;
      case 'lightbulb':
        return <Lightbulb className="w-6 h-6 text-emerald-400" />;
      case 'cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      default:
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-navy-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Competencies &amp; Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Skills &amp; Capabilities
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Synthesizing civic analysis, interpersonal leadership, problem-solving, and digital aptitude.
          </p>
        </div>

        {/* 4 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-card glass-card-hover rounded-2xl p-7 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-850 border border-slate-700/80 flex items-center justify-center shadow-inner">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-navy-900 px-2.5 py-1 rounded-full border border-slate-800">
                    Category
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  {cat.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Skills Tag Cloud */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-navy-900 text-slate-100 border border-slate-700/70 hover:border-amber-400/40 transition-colors shadow-sm"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
