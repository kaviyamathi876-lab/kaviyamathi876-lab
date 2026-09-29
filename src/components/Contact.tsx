import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { siteConfig } from '../data/site';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormState({
        status: 'error',
        message: 'Please fill out all required fields.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormState({
        status: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setFormState({ status: 'submitting', message: 'Sending message...' });

    // If Formspree endpoint is configured in siteConfig.contactFormActionUrl
    if (siteConfig.contactFormActionUrl && siteConfig.contactFormActionUrl.startsWith('http')) {
      try {
        const response = await fetch(siteConfig.contactFormActionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormState({
            status: 'success',
            message: 'Thank you! Your message has been sent successfully.',
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Formspree returned an error');
        }
      } catch (err) {
        setFormState({
          status: 'error',
          message: 'Failed to send through form endpoint. Opening your email app instead...',
        });
        // Mailto fallback
        window.location.href = `mailto:${siteConfig.email}?subject=Contact from ${encodeURIComponent(
          formData.name
        )}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
      }
    } else {
      // Direct mailto fallback
      setTimeout(() => {
        window.location.href = `mailto:${siteConfig.email}?subject=Message from ${encodeURIComponent(
          formData.name
        )} via Portfolio&body=${encodeURIComponent(
          formData.message + '\n\nSender Email: ' + formData.email
        )}`;
        setFormState({
          status: 'success',
          message: 'Opening your default mail client to deliver your message. Thank you for reaching out!',
        });
        setFormData({ name: '', email: '', message: '' });
      }, 500);
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'mail':
        return <Mail className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'github':
        return <Github className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-navy-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Interested in discussing political analysis, civic innovation, governance projects, or potential collaborations? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card with Quick Copy */}
            <div className="rounded-2xl bg-navy-850 border border-slate-700/80 p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Direct Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-amber-300 bg-navy-900 px-2.5 py-1 rounded-md border border-slate-800 transition-colors"
                  title="Copy email to clipboard"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="text-base sm:text-lg font-medium text-white hover:text-amber-300 transition-colors break-all flex items-center gap-2"
              >
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Click to open email or copy address. (Editable in <code className="text-amber-300/80">src/data/site.ts</code>)
              </p>
            </div>

            {/* Location & Academic Base */}
            <div className="rounded-2xl bg-navy-850 border border-slate-700/80 p-6 shadow-xl">
              <span className="text-xs uppercase tracking-wider text-teal-400 font-semibold block mb-2">
                Base &amp; Institutions
              </span>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-400 mt-1 shrink-0" />
                  <span>{siteConfig.location}</span>
                </div>
                <div className="text-xs text-slate-400 pl-6.5">
                  Kumaraguru College of Liberal Arts and Sciences (KCLAS) &amp; Forge Innovation Center
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl bg-navy-850 border border-slate-700/80 p-6 shadow-xl">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-4">
                Professional &amp; Social Channels
              </span>
              <div className="space-y-3">
                {siteConfig.socialLinks
                  .filter((item) => Boolean(item.url))
                  .map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-navy-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-400/40 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-amber-400 group-hover:scale-110 transition-transform">
                          {getSocialIcon(link.icon)}
                        </span>
                        <div>
                          <span className="text-sm font-medium text-white block">{link.platform}</span>
                          <span className="text-xs text-slate-400">{link.username}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                    </a>
                  ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-navy-850 border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your details below. Uses a configurable action URL with automatic mailto fallback.
              </p>

              {formState.status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message Dispatched!</p>
                    <p className="text-xs mt-0.5 text-emerald-300/90">{formState.message}</p>
                  </div>
                </div>
              )}

              {formState.status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Notice</p>
                    <p className="text-xs mt-0.5 text-rose-300/90">{formState.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Email <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Message <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your note, inquiry, or collaboration idea here..."
                    className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 text-sm transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState.status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {formState.status === 'submitting' ? 'Submitting...' : 'Send Message'}
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
