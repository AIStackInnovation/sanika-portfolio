import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Layout,
  Server,
  Smartphone,
  Wrench,
} from 'lucide-react';
import { fullstackSkills } from '../data/skills';

const iconMap: Record<string, typeof Layout> = {
  Layout,
  Server,
  Database,
  Smartphone,
  Wrench,
};

const architectureTiers = [
  {
    id: 'frontend',
    layer: '01 · Presentation Layer',
    title: 'Frontend & Cross-Platform UI',
    stack: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flutter'],
    example:
      'Used in MailTrace (React 18 + TS + Tailwind), DataVault (React + Framer Motion + Recharts), and EduMeet (React + Flutter).',
  },
  {
    id: 'api',
    layer: '02 · API & Application Logic',
    title: 'REST APIs, Validation & Auth',
    stack: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'Pydantic', 'JWT'],
    example:
      'Used in MailTrace (FastAPI + Pydantic forensic services), DataVault (Express + Zod + bcrypt/JWT), and AI Shop Verification (FastAPI).',
  },
  {
    id: 'database',
    layer: '03 · Persistence & Storage',
    title: 'Databases & Binary Streams',
    stack: ['MongoDB', 'MongoDB GridFS', 'PostgreSQL', 'Firebase Firestore'],
    example:
      '6 collections in MailTrace (with in-memory fallback), GridFS + aggregation pipelines in DataVault, PostgreSQL + Firebase in EduMeet.',
  },
  {
    id: 'testing',
    layer: '04 · Verification & Tooling',
    title: 'Testing, Debugging & Version Control',
    stack: ['Testing and Debugging', 'Pytest', 'Git', 'GitHub', 'Vite'],
    example:
      '7 Pytest tests (0.97s) in MailTrace, 49 test assertions (2.44s) in DataVault, and Git workflow practices during internship.',
  },
];

export default function FullStack() {
  const [selectedTier, setSelectedTier] = useState('frontend');

  return (
    <section id="full-stack" className="py-20 sm:py-24 relative z-10">
      <div className="section-divider mb-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-cyan-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                02 — FULL-STACK ENGINEERING
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Architecture. Implementation. Validation.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
              Equally dedicated to full-stack application engineering—across Frontend Development, Backend Development, REST APIs, Database Management, Application Design, and Testing &amp; Debugging.
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 self-start lg:self-auto">
            B.Sc. Computer Science + Internships
          </span>
        </motion.div>

        {/* Full-Stack Skill Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {fullstackSkills.map((group, idx) => {
            const Icon = iconMap[group.icon] ?? Layout;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-xl glass-surface border border-cyan-500/15 hover:border-cyan-400/40 p-5 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-white">{group.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 mb-4 leading-relaxed">{group.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-200 border border-cyan-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Interactive Architecture Stack Explorer */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: 0.25 }}
            className="sm:col-span-2 lg:col-span-1 rounded-xl glass-surface border border-cyan-500/25 p-5 glow-cyan flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 block mb-1">
                Interactive System Blueprint
              </span>
              <h3 className="font-display font-semibold text-sm text-white mb-3">
                Select a Tier to Inspect Real Usage
              </h3>

              <div className="space-y-2">
                {architectureTiers.map((tier) => {
                  const active = selectedTier === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTier(tier.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-xs transition-all cursor-pointer ${
                        active
                          ? 'bg-cyan-500/15 border-cyan-400/60 text-white'
                          : 'bg-[#0a0e1a]/75 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <div className="font-mono text-[10px] text-cyan-300">{tier.layer}</div>
                      <div className="font-medium mt-0.5">{tier.title}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {(() => {
              const current = architectureTiers.find((t) => t.id === selectedTier) ?? architectureTiers[0];
              return (
                <div className="mt-4 pt-3 border-t border-zinc-800/80">
                  <p className="text-xs text-zinc-300 leading-relaxed">{current.example}</p>
                </div>
              );
            })()}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
