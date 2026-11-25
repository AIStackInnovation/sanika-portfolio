import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';

export default function GitHubSection() {
  return (
    <section id="github" className="py-16 sm:py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl glass-surface border border-violet-500/30 p-8 sm:p-12 text-center glow-violet"
        >
          <div className="w-14 h-14 mx-auto rounded-2xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300 mb-5">
            <GitHubIcon className="w-7 h-7" />
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
            There&apos;s More to Explore.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Explore more experiments, academic projects and development work on GitHub.
          </p>

          <div className="mt-7">
            <a
              href="https://github.com/AIStackInnovation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-violet-600/25 transition-all"
            >
              <GitHubIcon className="w-5 h-5" />
              <span>Explore GitHub (@AIStackInnovation)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
