import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { certifications, education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 relative z-10">
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
              EDUCATION &amp; CERTIFICATIONS
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Academic Foundation &amp; Credentials
          </h2>
        </motion.div>

        {/* Education Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((edu, idx) => (
            <motion.article
              key={edu.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className={`rounded-2xl glass-surface p-6 border ${
                edu.isCurrent ? 'border-violet-500/35 glow-violet' : 'border-zinc-800'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-300 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">{edu.institution}</p>
                  </div>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full shrink-0 ${
                    edu.isCurrent
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                  }`}
                >
                  {edu.isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                  <span>{edu.score}</span>
                </span>
              </div>

              {edu.breakdown && edu.breakdown.length > 0 && (
                <div className="mt-4 pt-4 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {edu.breakdown.map((b) => (
                    <div
                      key={b.label}
                      className="p-2.5 rounded-lg bg-[#0a0e1a]/75 border border-zinc-800/80"
                    >
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">{b.label}</div>
                      <div className="text-xs font-medium text-zinc-200 mt-0.5">{b.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-14">
          <h3 className="font-display font-semibold text-xl sm:text-2xl text-white mb-5">
            Verified Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="rounded-xl bg-[#0d1225]/70 border border-zinc-800 hover:border-cyan-500/35 p-4 transition-colors flex flex-col justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">{cert.issuer}</p>
                  </div>
                </div>
                <span className="self-start text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  {cert.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
