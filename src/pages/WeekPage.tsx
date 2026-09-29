import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Image as ImageIcon, 
  Compass, 
  Heart,
  Home
} from 'lucide-react';
import { protoSemWeeks } from '../data/protosem';
import { Footer } from '../components/Footer';

export const WeekPage: React.FC = () => {
  const { weekSlug } = useParams<{ weekSlug: string }>();
  const navigate = useNavigate();

  // Scroll to top upon opening week page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [weekSlug]);

  const currentIndex = protoSemWeeks.findIndex((w) => w.slug === weekSlug);
  const week = protoSemWeeks[currentIndex];

  const handleBackToProtoSem = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('protosem');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // Friendly Not Found State for invalid week slug
  if (!week) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col justify-between bg-navy-950 text-slate-100">
        <div className="max-w-xl mx-auto px-4 text-center my-auto">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-6">
            <Compass className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-white mb-3">
            Milestone Not Found
          </h1>
          <p className="text-sm text-slate-300 mb-8 leading-relaxed">
            The ProtoSem week log you are looking for (<code className="text-amber-400 font-mono">{weekSlug}</code>) does not exist or has not been created. Valid entries range from <code className="text-slate-200">week-00</code> to <code className="text-slate-200">week-19</code>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleBackToProtoSem}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to ProtoSem Log</span>
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-850 hover:bg-navy-800 text-slate-300 border border-slate-700 font-medium text-sm transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Portfolio Home</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const prevWeek = currentIndex > 0 ? protoSemWeeks[currentIndex - 1] : null;
  const nextWeek = currentIndex < protoSemWeeks.length - 1 ? protoSemWeeks[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col justify-between pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Navigation Breadcrumb & Back to ProtoSem button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <button
            type="button"
            onClick={handleBackToProtoSem}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to ProtoSem</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-slate-200">Home</Link>
            <span>/</span>
            <button onClick={handleBackToProtoSem} className="hover:text-slate-200">ProtoSem</button>
            <span>/</span>
            <span className="text-amber-300 font-mono">{week.weekNumber}</span>
          </div>
        </div>

        {/* Week Header Banner */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 mb-10 border border-slate-700/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {week.weekNumber}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{week.date}</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-navy-850 text-slate-400 border border-slate-700">
                {week.isPublished ? 'Published' : 'Editable Milestone Log'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              {week.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl pt-2">
              {week.introduction}
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">

          {/* Section 1: What I Learned */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
            <div className="flex items-center gap-2.5 mb-5 text-amber-400">
              <BookOpen className="w-5 h-5" />
              <h2 className="text-xl font-serif font-bold text-white">
                What I Learned
              </h2>
            </div>
            <ul className="space-y-3">
              {week.whatILearned.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Activities & Exercises */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
            <div className="flex items-center gap-2.5 mb-5 text-teal-400">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-xl font-serif font-bold text-white">
                Activities &amp; Practical Exercises
              </h2>
            </div>
            <ul className="space-y-3">
              {week.activities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Challenges & Navigation */}
          <div className="rounded-2xl bg-navy-900 border border-slate-800 p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-3 text-rose-400">
              <AlertTriangle className="w-5 h-5" />
              <h2 className="text-lg font-serif font-bold text-white">
                Challenges Encountered
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {week.challenges}
            </p>
          </div>

          {/* Section 4: Key Takeaway */}
          <div className="rounded-2xl bg-gradient-to-r from-amber-500/15 via-navy-900 to-navy-900 border border-amber-500/40 p-6 sm:p-8">
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 block mb-2">
              Key Takeaway
            </span>
            <p className="text-base sm:text-lg font-serif italic text-slate-100 leading-relaxed">
              "{week.keyTakeaway}"
            </p>
          </div>

          {/* Section 5: Photos / Media Placeholder */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
            <div className="flex items-center gap-2.5 mb-4 text-blue-400">
              <ImageIcon className="w-5 h-5" />
              <h2 className="text-lg font-serif font-bold text-white">
                Photos &amp; Media Documentation
              </h2>
            </div>
            <div className="rounded-xl border-2 border-dashed border-slate-700/80 bg-navy-950 p-8 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-xl bg-navy-850 flex items-center justify-center text-slate-400 mb-3 border border-slate-700">
                <ImageIcon className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-slate-200 mb-1">
                Visual Documentation Placeholder
              </p>
              <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                Add photos, whiteboarding snapshots, or presentation slides for this week inside <code className="text-amber-300 font-mono">src/data/protosem.ts</code> under the <code className="text-slate-300">media</code> array.
              </p>
            </div>
          </div>

          {/* Section 6: Personal Reflection */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-rose-400">
              <Heart className="w-5 h-5" />
              <h2 className="text-lg font-serif font-bold text-white">
                Personal Reflection
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {week.reflection}
            </p>
          </div>

        </div>

        {/* Previous / Next Week Navigation */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex items-center justify-between gap-4">
          {prevWeek ? (
            <Link
              to={`/protosem/${prevWeek.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-850 hover:bg-navy-800 border border-slate-700 text-xs sm:text-sm text-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>{prevWeek.weekNumber}</span>
            </Link>
          ) : (
            <div />
          )}

          <button
            onClick={handleBackToProtoSem}
            className="text-xs text-slate-400 hover:text-amber-300 transition-colors underline"
          >
            Back to ProtoSem Grid
          </button>

          {nextWeek ? (
            <Link
              to={`/protosem/${nextWeek.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-850 hover:bg-navy-800 border border-slate-700 text-xs sm:text-sm text-slate-200 transition-colors"
            >
              <span>{nextWeek.weekNumber}</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          ) : (
            <div />
          )}
        </div>

      </div>

      <Footer />
    </div>
  );
};
