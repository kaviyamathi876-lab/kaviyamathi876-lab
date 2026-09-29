import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { certificationsConfig } from '../data/certifications';

export const Certifications: React.FC = () => {
  // If disabled in data/certifications.ts, do not render this section
  if (!certificationsConfig.enabled) {
    return null;
  }

  return (
    <section id="certifications" className="py-24 relative bg-navy-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {certificationsConfig.heading}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {certificationsConfig.subheading}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationsConfig.items.map((cert) => (
            <div
              key={cert.id}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-200 font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cert.date}</span>
                  </p>
                </div>
              </div>

              {/* View Certificate CTA */}
              <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Verified Credential Placeholder
                </span>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-navy-950 transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/40"
                    title="Upload credential link in src/data/certifications.ts"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
