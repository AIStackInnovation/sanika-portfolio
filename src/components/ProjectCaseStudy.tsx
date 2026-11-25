import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  ExternalLink,
  Layers,
  Lightbulb,
  Target,
  TestTube2,
  User,
  Wrench,
  X,
} from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectCaseStudy() {
  const { id } = useParams<{ id: string }>();
  const [lightboxSrc, setLightboxSrc] = useState<{ src: string; caption: string } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const index = projects.findIndex((p) => p.id === id);
  const project = index >= 0 ? projects[index] : undefined;

  if (!project) {
    return (
      <main className="min-h-screen pt-28 pb-20 px-4 max-w-4xl mx-auto relative z-10">
        <div className="rounded-2xl glass-surface border border-zinc-800 p-8 text-center">
          <h1 className="font-display font-bold text-2xl text-white">Case Study Not Found</h1>
          <p className="mt-2 text-sm text-zinc-400">
            The requested project case study does not exist.
          </p>
          <Link
            to="/#projects"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </main>
    );
  }

  const prevProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <main className="min-h-screen pt-24 pb-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-300 hover:text-violet-300 transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Project Lab</span>
          </Link>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 hover:border-cyan-400/50 bg-[#0d1225]/80 text-xs font-mono text-zinc-200 transition-colors"
          >
            <span>GitHub Profile (AIStackInnovation)</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

        {/* 1. Project Introduction Hero Banner */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl glass-surface border border-violet-500/25 p-6 sm:p-8 lg:p-10 glow-violet"
        >
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-cyan-300">{project.domain}</span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
            {project.fullTitle}
          </h1>
          <p className="mt-2 text-sm sm:text-base font-medium text-violet-300">{project.subtitle}</p>
          <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            {project.introduction}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.highlights.map((h) => (
              <div
                key={h.label}
                className="p-3.5 rounded-xl bg-[#0a0e1a]/80 border border-zinc-800/90"
              >
                <div className="text-[11px] font-mono text-zinc-400 uppercase">{h.label}</div>
                <div className="text-sm font-semibold text-white mt-0.5">{h.value}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 2 & 3. Problem Statement + Objective */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="rounded-2xl bg-[#0d1225]/70 border border-zinc-800 p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h2 className="font-display font-semibold text-lg text-white">Problem Statement</h2>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.problemStatement}</p>
          </section>

          <section className="rounded-2xl bg-[#0d1225]/70 border border-zinc-800 p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <Target className="w-4 h-4 text-cyan-400" />
              <h2 className="font-display font-semibold text-lg text-white">Objective</h2>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.objective}</p>
          </section>
        </div>

        {/* 4. Main Features */}
        <section className="mt-8 rounded-2xl bg-[#0d1225]/70 border border-zinc-800 p-6 sm:p-8">
          <h2 className="font-display font-semibold text-xl text-white mb-4">Main Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Technology Stack */}
        <section className="mt-8 rounded-2xl bg-[#0d1225]/70 border border-zinc-800 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-4">
            <Wrench className="w-4 h-4 text-violet-400" />
            <h2 className="font-display font-semibold text-xl text-white">Verified Technology Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs sm:text-sm font-mono px-3 py-1.5 rounded-lg bg-violet-500/10 text-violet-200 border border-violet-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 6. Architecture & Workflow */}
        <section className="mt-8 rounded-2xl glass-surface border border-cyan-500/20 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-3">
            <Layers className="w-4 h-4 text-cyan-400" />
            <h2 className="font-display font-semibold text-xl text-white">Architecture &amp; Workflow</h2>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed mb-5">{project.architecture}</p>
          <ol className="space-y-2.5">
            {project.workflowSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 shrink-0 mt-0.5">
                  0{i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* 7 & 8. My Personal Contribution vs AI-Assisted Development Approach */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="rounded-2xl bg-[#0d1225]/70 border border-violet-500/25 p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <User className="w-4 h-4 text-violet-400" />
              <h2 className="font-display font-semibold text-lg text-white">
                My Personal Contribution
              </h2>
            </div>
            <p className="text-xs font-mono text-violet-300 mb-3">
              Requirement analysis, feature planning, UI direction &amp; validation
            </p>
            <ul className="space-y-2.5">
              {project.myContribution.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl bg-[#0d1225]/70 border border-cyan-500/25 p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <Bot className="w-4 h-4 text-cyan-400" />
              <h2 className="font-display font-semibold text-lg text-white">
                AI-Assisted Development Approach
              </h2>
            </div>
            <p className="text-xs font-mono text-cyan-300 mb-3">
              AI-supported implementation guided by iterative prompting &amp; review
            </p>
            <ul className="space-y-2.5">
              {project.aiContribution.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 9 & 10. Testing and Validation + Challenges & Learning */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="rounded-2xl bg-[#0d1225]/70 border border-zinc-800 p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <TestTube2 className="w-4 h-4 text-emerald-400" />
              <h2 className="font-display font-semibold text-lg text-white">
                Testing &amp; Validation
              </h2>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.testing}</p>
          </section>

          <section className="rounded-2xl bg-[#0d1225]/70 border border-zinc-800 p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <h2 className="font-display font-semibold text-lg text-white">
                Challenges &amp; Learning
              </h2>
            </div>
            <ul className="space-y-2">
              {project.challengesAndLearning.map((item) => (
                <li key={item} className="text-sm text-zinc-300 leading-relaxed flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Honest Boundaries */}
        {project.boundaries && project.boundaries.length > 0 && (
          <section className="mt-8 rounded-2xl bg-amber-500/5 border border-amber-500/25 p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h2 className="font-display font-semibold text-lg text-white">
                Verified System Scope &amp; Boundaries
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.boundaries.map((b) => (
                <li key={b} className="text-sm text-zinc-300 flex items-start gap-2">
                  <span className="text-amber-400 font-mono text-xs mt-1">!</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 11. Actual Project Screenshots */}
        <section className="mt-8 rounded-2xl bg-[#0d1225]/70 border border-zinc-800 p-6 sm:p-8">
          <h2 className="font-display font-semibold text-xl text-white mb-2">
            Actual Project Screenshots
          </h2>
          {project.screenshots.length > 0 ? (
            <>
              <p className="text-xs sm:text-sm text-zinc-400 mb-5">
                Authentic captures from project execution and report evidence. Click any screenshot to enlarge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.screenshots.map((shot) => (
                  <button
                    key={shot.src}
                    type="button"
                    onClick={() => setLightboxSrc(shot)}
                    className="group text-left rounded-xl overflow-hidden border border-zinc-800 hover:border-violet-500/50 bg-[#0a0e1a] transition-colors cursor-pointer"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={shot.src}
                        alt={shot.caption}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="px-3 py-2.5 text-xs font-mono text-zinc-300 border-t border-zinc-800/80">
                      {shot.caption}
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="p-5 rounded-xl bg-[#0a0e1a]/80 border border-zinc-800 text-sm text-zinc-400">
              {project.screenshotNote}
            </div>
          )}
        </section>

        {/* 12. Bottom Prev / Next & GitHub */}
        <div className="mt-10 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/project/${prevProject.id}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 hover:border-violet-500/40 bg-[#0d1225]/70 text-xs sm:text-sm text-zinc-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Prev: {prevProject.title}</span>
            </Link>
          ) : (
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 hover:border-violet-500/40 bg-[#0d1225]/70 text-xs sm:text-sm text-zinc-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Projects</span>
            </Link>
          )}

          {nextProject ? (
            <Link
              to={`/project/${nextProject.id}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Back to Project Lab</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Screenshot Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxSrc.caption}
        >
          <div
            className="max-w-5xl w-full bg-[#0d1225] border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
              <span className="text-xs sm:text-sm font-mono text-zinc-200">
                {lightboxSrc.caption}
              </span>
              <button
                type="button"
                onClick={() => setLightboxSrc(null)}
                aria-label="Close image preview"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 bg-black/40 max-h-[80vh] overflow-auto flex items-center justify-center">
              <img
                src={lightboxSrc.src}
                alt={lightboxSrc.caption}
                className="max-w-full max-h-[75vh] object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
