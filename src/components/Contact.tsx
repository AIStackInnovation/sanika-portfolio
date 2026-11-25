import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  Check,
  Copy,
  ExternalLink,
  FileDown,
  Mail,
  Phone,
  Send,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

const EMAIL = 'mhatresanika799@gmail.com';
const PHONE = '9152785776';
const GITHUB_URL = 'https://github.com/AIStackInnovation';
const LINKEDIN_URL = 'https://www.linkedin.com/in/sanika-shailesh-mhatre-b8a843397/';

export default function Contact() {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [prepared, setPrepared] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setPrepared(false);

    if (!name.trim() || !senderEmail.trim() || !subject.trim() || !message.trim()) {
      setError('Please complete all fields before preparing your message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (message.trim().length < 10) {
      setError('Please include a brief message (at least 10 characters).');
      return;
    }

    const mailBody = `From: ${name.trim()} (${senderEmail.trim()})\n\n${message.trim()}`;
    const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(mailBody)}`;
    setPrepared(true);
    window.location.href = mailtoHref;
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative z-10">
      <div className="section-divider mb-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              CONTACT
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
            Open to opportunities in Data Analytics, Full-Stack Development, and AI Solutions. Reach out directly via email, phone, LinkedIn, or GitHub.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* Phone */}
            <a
              href={`tel:+91${PHONE}`}
              className="flex items-center gap-4 p-4 rounded-xl glass-surface border border-zinc-800 hover:border-violet-500/40 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-300 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">Phone</div>
                <div className="text-sm sm:text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
                  +91 {PHONE}
                </div>
              </div>
            </a>

            {/* Email + Copy */}
            <div className="flex items-center justify-between gap-3 p-4 rounded-xl glass-surface border border-zinc-800 hover:border-cyan-500/40 transition-colors">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 min-w-0 flex-1 group">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase">Email</div>
                  <div className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {EMAIL}
                  </div>
                </div>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy email address"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0a0e1a] border border-zinc-700 hover:border-cyan-400/50 text-xs font-mono text-zinc-300 shrink-0 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 p-4 rounded-xl glass-surface border border-zinc-800 hover:border-violet-500/40 transition-colors group"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-300 shrink-0">
                  <GitHubIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase">GitHub</div>
                  <div className="text-sm sm:text-base font-semibold text-white group-hover:text-violet-300 transition-colors truncate">
                    github.com/AIStackInnovation
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-violet-300 shrink-0" />
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 p-4 rounded-xl glass-surface border border-zinc-800 hover:border-cyan-500/40 transition-colors group"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-300 shrink-0">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase">LinkedIn</div>
                  <div className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                    Sanika Shailesh Mhatre
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-300 shrink-0" />
            </a>

            {/* Resume Download */}
            <a
              href="/Sanika_Mhatre_Resume.pdf"
              download="Sanika_Mhatre_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-violet-600/20 transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>

          {/* Right: Validated Contact Form (opens mailto client honestly) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl glass-surface border border-zinc-800 p-6 sm:p-8 space-y-4"
            >
              <div className="pb-3 border-b border-zinc-800/80">
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  Compose Direct Email
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Validates your message locally and opens your default email client addressed to {EMAIL}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0e1a]/90 border border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:border-violet-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0e1a]/90 border border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:border-violet-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Data Analytics / Full-Stack Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0e1a]/90 border border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:border-violet-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello Sanika, I reviewed your portfolio..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0e1a]/90 border border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:border-violet-500 focus:outline-none resize-y"
                />
              </div>

              {error && (
                <div
                  role="alert"
                  className="flex items-center gap-2 text-xs text-rose-300 bg-rose-500/10 border border-rose-500/25 rounded-lg px-3.5 py-2.5"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {prepared && (
                <div
                  role="status"
                  className="flex items-center gap-2 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 rounded-lg px-3.5 py-2.5"
                >
                  <Check className="w-4 h-4 shrink-0" />
                  <span>
                    Email draft prepared in your mail client. If no client opened, please use {EMAIL} or +91 {PHONE}.
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Open in Email Client</span>
              </button>

              <p className="flex items-start gap-2 text-[11px] text-zinc-400 leading-relaxed pt-1">
                <AlertCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Static portfolio notice: This form does not submit to a backend server; submitting validates your input and launches your local email application.
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
