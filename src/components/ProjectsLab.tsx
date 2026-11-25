import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Image as ImageIcon, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectCategories, projects } from '../data/projects';

export default function ProjectsLab() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'data-analytics' | 'full-stack' | 'ai-solutions'>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.filterTags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 sm:py-24 relative z-10">
      <div className="section-divider mb-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-gradient-to-r from-violet-500 to-cyan-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-violet-300">
                PROJECT LAB
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Featured Projects &amp; Case Studies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
              Five verified projects spanning Digital Forensics, Database Intelligence, Machine Learning Analytics, Computer Vision, and Full-Stack Scheduling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project category filters">
            {projectCategories.map((cat) => {
              const isSelected = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-600/20'
                      : 'bg-[#0d1225]/80 text-zinc-300 border border-zinc-800 hover:border-violet-500/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Cards */}
        <motion.div layout className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const cover = project.screenshots[0];
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl glass-surface border border-zinc-800 hover:border-violet-500/40 overflow-hidden flex flex-col justify-between transition-colors ${
                    project.id === 'mailtrace' ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className={project.id === 'mailtrace' ? 'grid grid-cols-1 lg:grid-cols-12' : ''}>
                    {/* Media / Authentic Screenshot Preview */}
                    <div
                      className={`relative bg-[#0a0e1a] border-b lg:border-b-0 ${
                        project.id === 'mailtrace'
                          ? 'lg:col-span-5 lg:border-r border-zinc-800/80 min-h-[220px]'
                          : 'border-zinc-800/80 h-52 sm:h-56'
                      } overflow-hidden`}
                    >
                      {cover ? (
                        <>
                          <img
                            src={cover.src}
                            alt={`${project.title} — ${cover.caption}`}
                            loading="lazy"
                            className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all duration-300"
                          />
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-[#0a0e1a]/85 backdrop-blur-md border border-zinc-700/70">
                            <span className="text-[11px] font-mono text-zinc-200 truncate">
                              {cover.caption}
                            </span>
                            <span className="text-[10px] font-mono text-cyan-300 shrink-0">
                              {project.screenshots.length} screens
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0d1225] to-[#0a0e1a]">
                          <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-300 mb-3">
                            {project.id === 'ai-shop-verification' ? (
                              <Layers className="w-5 h-5" />
                            ) : (
                              <ImageIcon className="w-5 h-5" />
                            )}
                          </div>
                          <span className="text-xs font-mono text-zinc-300">
                            {project.domain}
                          </span>
                          <p className="mt-1.5 text-[11px] text-zinc-500 max-w-xs">
                            Authentic screenshots unavailable in local archive — documented honestly without synthetic mockups.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Text Body */}
                    <div
                      className={`p-5 sm:p-6 flex flex-col justify-between ${
                        project.id === 'mailtrace' ? 'lg:col-span-7' : ''
                      }`}
                    >
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                          <span className="text-xs font-mono font-bold text-violet-400">
                            PROJECT {project.number}
                          </span>
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            {project.domain}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm font-medium text-violet-300">
                          {project.subtitle}
                        </p>

                        <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                          {project.objective}
                        </p>

                        {/* Highlights */}
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          {project.highlights.map((h) => (
                            <div
                              key={h.label}
                              className="p-2 rounded-lg bg-[#0a0e1a]/80 border border-zinc-800/80"
                            >
                              <div className="text-[10px] font-mono text-zinc-500 uppercase truncate">
                                {h.label}
                              </div>
                              <div className="text-xs font-semibold text-zinc-100 truncate mt-0.5">
                                {h.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Preview */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 6).map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 6 && (
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/60 text-zinc-400 border border-zinc-800/60">
                              +{project.technologies.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-5 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                        <Link
                          to={`/project/${project.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-semibold transition-colors"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-cyan-300 transition-colors py-2 px-2"
                        >
                          <span>GitHub Profile</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
