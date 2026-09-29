import React from 'react';
import { FolderGit2, ExternalLink, Github, Layers, Target, CheckCircle2, UserCheck } from 'lucide-react';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-navy-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Initiatives &amp; Innovation Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Explorations at the nexus of civic systems, public impact, and entrepreneurial innovation.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-700/80 relative group"
            >
              {/* Card Image or Clean Visual Placeholder */}
              <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-navy-900 via-navy-850 to-navy-900 border-b border-slate-800 overflow-hidden flex items-center justify-center p-6 text-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 border border-slate-700 flex items-center justify-center text-amber-400">
                      <Layers className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-slate-500">Project Media Placeholder</span>
                  </div>
                )}
                
                {/* Category Floating Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-navy-950/80 text-amber-300 border border-slate-700/80 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Problem & Solution Callouts */}
                  <div className="space-y-3 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                    <div className="p-3 rounded-lg bg-navy-900/60 border border-slate-800">
                      <div className="flex items-center gap-1.5 font-semibold text-amber-400 mb-1">
                        <Target className="w-3.5 h-3.5" />
                        <span>Problem Addressed:</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{project.problemAddressed}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-navy-900/60 border border-slate-800">
                      <div className="flex items-center gap-1.5 font-semibold text-teal-400 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Solution:</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{project.solution}</p>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-400 pt-1">
                      <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                      <span>Role: <strong className="text-slate-300 font-medium">{project.role}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 pb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-navy-850 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: gracefully handle empty links */}
                  <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                    {project.projectUrl ? (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-navy-950 transition-colors"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/40"
                        title="Link will be activated when project is published"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                      </button>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-navy-850 hover:bg-navy-800 text-slate-300 border border-slate-700 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    ) : null}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
