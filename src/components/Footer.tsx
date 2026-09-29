import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'mail':
        return <Mail className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'github':
        return <Github className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-800 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1.5">
            <h3 className="text-xl font-serif font-bold text-white tracking-wide">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-amber-300/90 font-display">
              "{siteConfig.footer.tagline}"
            </p>
            <p className="text-xs text-slate-500">
              {siteConfig.degree} • {siteConfig.college}
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            {/* Social Icons (only those with active URLs) */}
            <div className="flex items-center gap-2">
              {siteConfig.socialLinks
                .filter((item) => Boolean(item.url))
                .map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-navy-850 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                    aria-label={`Visit ${item.platform}`}
                  >
                    {getSocialIcon(item.icon)}
                  </a>
                ))}
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-navy-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-navy-750 transition-colors"
              aria-label="Scroll to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Subtext */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>© {siteConfig.footer.copyrightYear} {siteConfig.name}. All rights reserved.</p>
          <p className="text-slate-400">
            {siteConfig.footer.notice}
          </p>
        </div>

      </div>
    </footer>
  );
};
