import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/site';
import { certificationsConfig } from '../data/certifications';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Filter links: hide certifications link if disabled in certificationsConfig
  const navLinks = siteConfig.navLinks.filter((link) => {
    if (link.id === 'certifications' && !certificationsConfig.enabled) {
      return false;
    }
    return true;
  });

  // Track scroll position for navbar glass styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy when on home page
      if (location.pathname === '/' || location.pathname === '') {
        const sections = navLinks.map((l) => l.id);
        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, navLinks]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, linkId: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/' && location.pathname !== '') {
      // If we are on a week subpage, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const target = document.getElementById(linkId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    } else {
      const target = document.getElementById(linkId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="group flex items-center space-x-2.5 focus:outline-none"
            aria-label="Kaviya M Homepage"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-display font-bold text-navy-950 text-lg shadow-md group-hover:scale-105 transition-transform">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-wide font-semibold text-slate-100 text-base group-hover:text-amber-300 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[11px] text-slate-400 font-sans tracking-wider uppercase">
                Political Science &amp; Innovation
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id && (location.pathname === '/' || location.pathname === '');
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? 'text-amber-300 bg-amber-500/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </a>
              );
            })}

            {/* Resume Action */}
            <a
              href={siteConfig.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 shadow-md shadow-amber-500/10 hover:shadow-amber-500/25 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <a
              href={siteConfig.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500 text-navy-950"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-navy-850 border border-slate-700/60 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy-950/95 backdrop-blur-xl border-b border-slate-800 px-5 pt-3 pb-6 space-y-1.5 shadow-2xl animate-fade-in">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id && (location.pathname === '/' || location.pathname === '');
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-amber-300 bg-amber-500/10 border-l-2 border-amber-400 font-semibold'
                    : 'text-slate-300 hover:bg-navy-850 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
