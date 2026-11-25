import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, MapPin } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 relative z-10">
      <div className="section-divider mb-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-violet-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
              INDUSTRY EXPERIENCE
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Professional Journey (~5 Months)
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
            Hands-on internship and training experience across software development, web &amp; mobile engineering, and AI-driven workflows.
          </p>
        </motion.div>

        <div className="mt-10 relative space-y-6 md:pl-8">
          {/* Timeline vertical connector on md+ */}
          <div
            className="hidden md:block absolute left-3 top-3 bottom-3 w-px bg-gradient-to-b from-violet-500 via-cyan-400 to-zinc-800"
            aria-hidden="true"
          />

          {experiences.map((exp, idx) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative rounded-2xl glass-surface border border-zinc-800 hover:border-violet-500/35 p-6 sm:p-8 transition-colors"
            >
              {/* Timeline Dot */}
              <div
                className={`hidden md:flex absolute -left-[29px] top-8 w-4 h-4 rounded-full border-2 border-[#0a0e1a] ${
                  idx === 0
                    ? 'bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]'
                    : 'bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]'
                }`}
                aria-hidden="true"
              />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-zinc-800/80">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-300 mb-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.engagementType}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-cyan-300 mt-1">
                    {exp.company}
                    {exp.shortName ? ` (${exp.shortName})` : ''}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col lg:items-end gap-1.5 text-xs font-mono text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 text-zinc-200">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.location}</span>
                  </span>
                  <span className="text-[11px] text-zinc-500">{exp.durationNote}</span>
                </div>
              </div>

              <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{exp.summary}</p>

              <ul className="mt-4 space-y-2">
                {exp.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <ChevronRight className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-zinc-400">
                  <span className="font-mono text-zinc-500 uppercase mr-2">Key Work:</span>
                  <span className="text-zinc-200">{exp.keyProjects.join(' · ')}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
