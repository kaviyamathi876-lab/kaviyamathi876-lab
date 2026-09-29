import React, { useState } from 'react';
import { FileText, ArrowRight, Sparkles, Building2, UploadCloud, GraduationCap, Compass } from 'lucide-react';
import { siteConfig } from '../data/site';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('experiences');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Academic & Innovation Pill Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850/80 border border-slate-700/70 text-xs text-slate-300 shadow-inner">
              <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                <GraduationCap className="w-4 h-4" />
                <span>B.A. Political Science @ KCLAS</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 text-teal-400 font-medium">
                <Compass className="w-4 h-4" />
                <span>ProtoSem @ Forge</span>
              </span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient-gold">{siteConfig.name}</span>
              </h1>
              
              {/* Tagline */}
              <p className="text-xl sm:text-2xl font-display font-medium text-amber-300/90 leading-snug">
                "{siteConfig.tagline}"
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {siteConfig.intro}
            </p>

            {/* Highlight Badges / Focus Areas */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-md bg-navy-800 text-slate-300 border border-slate-700/60">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                Grassroots Governance
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-md bg-navy-800 text-slate-300 border border-slate-700/60">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                Civic Innovation
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-md bg-navy-800 text-slate-300 border border-slate-700/60">
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                Policy &amp; People
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {/* Primary: View ATS Resume */}
              <a
                href={siteConfig.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-navy-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                <span>View ATS Resume</span>
              </a>

              {/* Secondary: Explore My Work */}
              <a
                href="#experiences"
                onClick={handleExploreClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-navy-850 hover:bg-navy-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:text-white"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Professional Profile Picture Placeholder (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Decorative background aura frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/30 via-teal-500/20 to-amber-400/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-navy-900 border-2 border-slate-700/70 p-4 shadow-2xl overflow-hidden">
                
                {/* Image or Clean Explicit Placeholder */}
                {!imageError ? (
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-navy-950 flex items-center justify-center">
                    <img
                      src={siteConfig.profileImagePath}
                      alt="Kaviya M - Political Science Student & Innovator"
                      className="w-full h-full object-cover object-center"
                      onError={() => setImageError(true)}
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/5] rounded-xl bg-gradient-to-b from-navy-850 to-navy-950 border border-dashed border-amber-500/40 p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 rounded-full bg-navy-800 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-inner">
                      <UploadCloud className="w-10 h-10" />
                    </div>
                    <span className="text-base font-display font-semibold text-slate-100">
                      Profile Photo Placeholder
                    </span>
                    <p className="text-xs text-amber-300 font-medium mt-2 bg-amber-500/10 px-3 py-1.5 rounded-md border border-amber-500/20">
                      Upload your photo here:
                    </p>
                    <code className="text-[11px] font-mono text-slate-400 mt-1 break-all bg-navy-950 px-2 py-1 rounded">
                      public/images/profile.jpg
                    </code>
                    <p className="text-[11px] text-slate-400 mt-4 leading-relaxed max-w-[220px]">
                      Drop your professional headshot into the project public folder to automatically replace this.
                    </p>
                  </div>
                )}

                {/* Subtitle bar under picture */}
                <div className="mt-3.5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-300 font-medium">Ready for Impact</span>
                  </div>
                  <span className="text-slate-400">Tamil Nadu, India</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
