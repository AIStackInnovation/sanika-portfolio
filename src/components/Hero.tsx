import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  FileDown,
  Layers,
  Mail,
  Sparkles,
} from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden"
    >
      {/* Subtle Ambient Glows */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-violet-600/15 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cyan-500/12 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left / Main Identity Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-[#0d1225]/80 text-[11px] sm:text-xs font-mono tracking-wider text-violet-300 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>DATA ANALYTICS × FULL-STACK DEVELOPMENT × AI SOLUTIONS</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-5xl xl:text-6xl tracking-tight text-white leading-[1.1]">
              SANIKA SHAILESH MHATRE
            </h1>

            <p className="mt-3 text-sm sm:text-base font-mono text-cyan-300/90">
              Data Analytics | Full-Stack Development | AI Solutions
            </p>

            <h2 className="mt-5 font-display font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text leading-snug">
              &ldquo;I Analyse Data. I Engineer Solutions.&rdquo;
            </h2>

            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              Turning Data Into Intelligence. Building Ideas Into Products. MSc Data Analytics student &amp; B.Sc. Computer Science graduate with ~5 months of internship experience across full-stack engineering and AI-assisted systems.
            </p>

            {/* Equally Prominent Interactive Pathways */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => scrollTo('data-intelligence')}
                className="text-left p-5 rounded-xl glass-surface border border-violet-500/25 hover:border-violet-400/60 hover:bg-violet-500/10 transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-violet-300 tracking-wider">
                    01 — DATA INTELLIGENCE
                  </span>
                  <BrainCircuit className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Python, SQL, EDA, statistical analysis, data visualization &amp; predictive ML workflows.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-violet-300 group-hover:translate-x-1 transition-transform">
                  <span>Explore Analytics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('full-stack')}
                className="text-left p-5 rounded-xl glass-surface border border-cyan-500/25 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-cyan-300 tracking-wider">
                    02 — FULL-STACK ENGINEERING
                  </span>
                  <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  React, TypeScript, FastAPI, Node.js, MongoDB, PostgreSQL &amp; responsive architectures.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-cyan-300 group-hover:translate-x-1 transition-transform">
                  <span>Explore Engineering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-violet-600/25 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-cyan-400/60 bg-[#0d1225]/70 text-zinc-100 text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>View Projects</span>
              </button>

              <a
                href="/Sanika_Mhatre_Resume.pdf"
                download="Sanika_Mhatre_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-violet-400/60 bg-[#0d1225]/70 text-zinc-100 text-sm font-semibold transition-colors"
              >
                <FileDown className="w-4 h-4 text-violet-400" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 bg-[#0d1225]/70 text-zinc-200 text-sm font-medium transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Data x Engineering Nexus Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl glass-surface border border-violet-500/20 p-5 sm:p-6 glow-violet">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800/90">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
                    Data × Engineering Nexus
                  </span>
                </div>
                <span className="text-[11px] font-mono text-violet-300 px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                  MSc + BSc CS (9.36)
                </span>
              </div>

              {/* Visual Bridge Connecting Data Analytics and Software Engineering */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#0a0e1a]/90 border border-violet-500/25">
                    <div className="flex items-center gap-2 text-violet-300 text-xs font-mono mb-1.5">
                      <Database className="w-4 h-4" />
                      <span>DATA INPUT</span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      CSV, .eml Forensics, OCR Text, MongoDB &amp; SQL
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0a0e1a]/90 border border-cyan-500/25">
                    <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono mb-1.5">
                      <Layers className="w-4 h-4" />
                      <span>UI &amp; APIS</span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      React, TypeScript, FastAPI, Express &amp; Flutter
                    </p>
                  </div>
                </div>

                {/* Connecting SVG Node Graph */}
                <div className="relative py-2 flex items-center justify-center">
                  <svg
                    viewBox="0 0 360 72"
                    className="w-full h-16 overflow-visible"
                    role="img"
                    aria-label="Diagram connecting Data Analytics to Full-Stack Engineering"
                  >
                    <defs>
                      <linearGradient id="nexusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="50%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 40 12 C 110 12, 110 36, 180 36 C 250 36, 250 12, 320 12"
                      fill="none"
                      stroke="url(#nexusGrad)"
                      strokeWidth="1.75"
                      strokeDasharray="5 4"
                    />
                    <path
                      d="M 40 60 C 110 60, 110 36, 180 36 C 250 36, 250 60, 320 60"
                      fill="none"
                      stroke="url(#nexusGrad)"
                      strokeWidth="1.75"
                    />
                    <circle cx="40" cy="12" r="4.5" fill="#8b5cf6" />
                    <circle cx="40" cy="60" r="4.5" fill="#8b5cf6" />
                    <circle cx="180" cy="36" r="14" fill="#131a35" stroke="url(#nexusGrad)" strokeWidth="2" />
                    <circle cx="320" cy="12" r="4.5" fill="#22d3ee" />
                    <circle cx="320" cy="60" r="4.5" fill="#22d3ee" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Verified Snapshot Metrics */}
                <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-zinc-800/80 text-center">
                  <div className="p-2.5 rounded-lg bg-[#0a0e1a]/75 border border-zinc-800">
                    <div className="font-display font-bold text-lg text-white">5</div>
                    <div className="text-[11px] font-mono text-zinc-400">Featured Labs</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0a0e1a]/75 border border-zinc-800">
                    <div className="font-display font-bold text-lg text-violet-300">~5 Mo</div>
                    <div className="text-[11px] font-mono text-zinc-400">Industry Exp.</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0a0e1a]/75 border border-zinc-800">
                    <div className="font-display font-bold text-lg text-cyan-300">9.36</div>
                    <div className="text-[11px] font-mono text-zinc-400">BSc CS CGPA</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 hidden sm:flex justify-center">
          <button
            type="button"
            onClick={() => scrollTo('about')}
            aria-label="Scroll to About section"
            className="p-2 rounded-full text-zinc-400 hover:text-violet-300 transition-colors animate-bounce cursor-pointer"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
