import { motion } from 'framer-motion';
import { Bot, Brain, CheckCircle2, Database, Layers, Target } from 'lucide-react';

const interests = [
  {
    icon: Target,
    title: 'Data-Driven Problem Solving',
    desc: 'Turning messy real-world datasets and logs into structured statistical findings.',
    accent: 'text-violet-400 border-violet-500/25',
  },
  {
    icon: Layers,
    title: 'Full-Stack Application Design',
    desc: 'Designing clean, responsive React interfaces backed by typed REST APIs.',
    accent: 'text-cyan-400 border-cyan-500/25',
  },
  {
    icon: Database,
    title: 'Database & Storage Architecture',
    desc: 'Working across MongoDB collections, GridFS binary storage, PostgreSQL, and Firebase.',
    accent: 'text-violet-400 border-violet-500/25',
  },
  {
    icon: Brain,
    title: 'AI-Assisted Product Workflows',
    desc: 'Combining computer vision, OCR, and AI-supported engineering to build useful tools.',
    accent: 'text-cyan-400 border-cyan-500/25',
  },
];

const myRolePoints = [
  'Requirement analysis & understanding project objectives',
  'Feature planning, workflow design & interface structure',
  'Prompting & guiding AI-assisted development step by step',
  'Contributing to coding, data preparation & code modifications',
  'Testing features, identifying issues & reviewing outputs',
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 relative z-10">
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
              ABOUT ME
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Bridging Data Intelligence &amp; Software Engineering
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Bio + Honest AI-Assisted Development */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <p>
                I am <strong className="text-white">Sanika Shailesh Mhatre</strong>, an M.Sc. Data Analytics student at{' '}
                <span className="text-zinc-100">Pillai College of Arts, Commerce &amp; Science, New Panvel</span>, and a{' '}
                <span className="text-zinc-100">B.Sc. Computer Science</span> graduate from the University of Mumbai with a{' '}
                <span className="font-mono text-cyan-300">9.36</span> Final Year CGPA.
              </p>
              <p>
                Across approximately five months of industry experience—as a Student Trainee in Software Development at{' '}
                <span className="text-white">Jode Technologies Pvt. Ltd. (JodeTx)</span> and a Web Development Intern at{' '}
                <span className="text-white">Unified Mentor Pvt. Ltd.</span>—I have worked on responsive web applications, Flutter mobile modules, FastAPI services, computer vision workflows, and data analytics projects.
              </p>
            </div>

            {/* Honest AI-Assisted Development Card */}
            <div className="rounded-2xl glass-surface border border-violet-500/25 p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base sm:text-lg text-white">
                    Honest AI-Assisted Development Workflow
                  </h3>
                  <p className="text-xs font-mono text-violet-300">
                    Transparent engineering ownership &amp; validation
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                My featured projects were built primarily through <strong className="text-white">AI-assisted development</strong> and{' '}
                <strong className="text-white">AI-supported implementation</strong>. Rather than claiming to have independently written every line of code, I focus on owning the problem definition, system planning, user interface design, iterative prompting, code modifications, and thorough end-to-end validation:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {myRolePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Technical Interests */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-5 space-y-3.5"
          >
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Technical Interests
            </h3>
            {interests.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-4 sm:p-5 rounded-xl bg-[#0d1225]/70 border ${item.accent} hover:bg-[#131a35]/70 transition-colors`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#0a0e1a] border border-zinc-800 flex items-center justify-center shrink-0">
                      <Icon className={`w-5 h-5 ${item.accent.split(' ')[0]}`} />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm sm:text-base text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
