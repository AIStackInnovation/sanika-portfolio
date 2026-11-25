import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Brain,
  Code2,
  Database,
  Filter,
} from 'lucide-react';
import { dataSkills } from '../data/skills';

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Database,
  Filter,
  BarChart3,
  Brain,
};

const workflowSteps = [
  {
    step: '01',
    title: 'Collect',
    desc: 'Load CSV datasets, database exports, or API payloads with encoding validation.',
  },
  {
    step: '02',
    title: 'Clean',
    desc: 'Normalize whitespace, handle missing values, and deduplicate records.',
  },
  {
    step: '03',
    title: 'Preprocess',
    desc: 'Extract numerical features from strings and build leak-free ColumnTransformers.',
  },
  {
    step: '04',
    title: 'Explore (EDA)',
    desc: 'Profile descriptive statistics, distributions, medians, and outliers.',
  },
  {
    step: '05',
    title: 'Model & Evaluate',
    desc: 'Compare regression pipelines on held-out splits via MAE, MSE, RMSE & R².',
  },
  {
    step: '06',
    title: 'Visualize & Report',
    desc: 'Present clear charts, KPIs, and documented findings honestly.',
  },
];

// Verified figures extracted directly from Laptop_Price_Prediction_Analytics_PPT.pptx (Slides 7 & 11)
const laptopTypeMetrics = [
  { type: 'Notebook', count: 707, avgPrice: 789 },
  { type: 'Gaming', count: 205, avgPrice: 1732 },
  { type: 'Ultrabook', count: 194, avgPrice: 1557 },
  { type: '2-in-1 Convertible', count: 117, avgPrice: 1289 },
  { type: 'Workstation', count: 29, avgPrice: 2281 },
  { type: 'Netbook', count: 23, avgPrice: 673 },
];

export default function DataIntelligence() {
  const [metricView, setMetricView] = useState<'count' | 'avgPrice'>('avgPrice');

  const maxVal = metricView === 'count' ? 707 : 2281;

  return (
    <section id="data-intelligence" className="py-20 sm:py-24 relative z-10">
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
              <span className="w-8 h-px bg-violet-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
                01 — DATA INTELLIGENCE
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Analytical Thinking. Data-Driven Insights.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
              Verified data analytics competencies spanning Python, SQL, Pandas, NumPy, Microsoft Excel, data preprocessing, EDA, statistics, and supervised machine learning.
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/25 text-violet-300 self-start lg:self-auto">
            M.Sc. Data Analytics Track
          </span>
        </motion.div>

        {/* Verified Data Skills Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {dataSkills.map((group, idx) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-xl glass-surface border border-violet-500/15 hover:border-violet-400/40 p-5 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-lg bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-white">{group.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 mb-4 leading-relaxed">{group.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-200 border border-violet-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Interactive Verified Dataset Visual */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: 0.25 }}
            className="sm:col-span-2 lg:col-span-1 rounded-xl glass-surface border border-violet-500/25 p-5 glow-violet flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-violet-300 block">
                    Verified EDA Snapshot
                  </span>
                  <h3 className="font-display font-semibold text-sm text-white">
                    Kaggle Laptop Dataset (n = 1,303)
                  </h3>
                </div>
                <div className="inline-flex rounded-lg bg-[#0a0e1a] border border-zinc-800 p-0.5 text-[11px] font-mono">
                  <button
                    type="button"
                    onClick={() => setMetricView('avgPrice')}
                    className={`px-2 py-1 rounded-md cursor-pointer transition-colors ${
                      metricView === 'avgPrice'
                        ? 'bg-violet-600 text-white'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Avg €
                  </button>
                  <button
                    type="button"
                    onClick={() => setMetricView('count')}
                    className={`px-2 py-1 rounded-md cursor-pointer transition-colors ${
                      metricView === 'count'
                        ? 'bg-violet-600 text-white'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Count
                  </button>
                </div>
              </div>

              <div className="space-y-2.5 mt-3">
                {laptopTypeMetrics.map((row) => {
                  const val = metricView === 'count' ? row.count : row.avgPrice;
                  const pct = Math.round((val / maxVal) * 100);
                  return (
                    <div key={row.type}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-zinc-300 truncate pr-2">{row.type}</span>
                        <span className="font-mono text-violet-300 shrink-0">
                          {metricView === 'count' ? `${row.count} units` : `€${row.avgPrice.toLocaleString()}`}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#0a0e1a] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>Mean: €1,123.69</span>
              <span>Median: €977</span>
              <span>Max: €6,099</span>
            </div>
          </motion.div>
        </div>

        {/* 6-Stage Analytics Workflow */}
        <div className="mt-14">
          <h3 className="font-display font-semibold text-lg sm:text-xl text-white mb-5">
            Structured Analytical Pipeline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
            {workflowSteps.map((item, idx) => (
              <div
                key={item.step}
                className="relative rounded-xl bg-[#0d1225]/70 border border-zinc-800 hover:border-violet-500/35 p-4 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-violet-400">{item.step}</span>
                  {idx < workflowSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-600 hidden lg:block" />
                  )}
                </div>
                <h4 className="font-display font-semibold text-sm text-white mb-1">{item.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
