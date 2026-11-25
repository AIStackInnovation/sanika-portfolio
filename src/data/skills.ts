export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export const dataSkills: SkillCategory[] = [
  {
    title: 'Core Data Languages',
    icon: 'Code2',
    description: 'Programmatic analysis, structured querying, and analytical scripting.',
    skills: ['Python', 'SQL'],
  },
  {
    title: 'Wrangling & Spreadsheets',
    icon: 'Database',
    description: 'Tabular manipulation, numerical arrays, and structured workbook analysis.',
    skills: ['Pandas', 'NumPy', 'Microsoft Excel'],
  },
  {
    title: 'Cleaning & Preprocessing',
    icon: 'Filter',
    description: 'Deduplication, text normalization, imputation, and feature encoding.',
    skills: ['Data Cleaning', 'Data Preprocessing', 'Feature Engineering'],
  },
  {
    title: 'EDA & Visualization',
    icon: 'BarChart3',
    description: 'Distribution profiling, trend analysis, and clear statistical charts.',
    skills: ['Exploratory Data Analysis', 'Data Visualization', 'Matplotlib', 'Seaborn', 'Recharts'],
  },
  {
    title: 'Statistics & Machine Learning',
    icon: 'Brain',
    description: 'Descriptive statistics, regression modeling, and predictive evaluation.',
    skills: ['Statistics', 'Machine Learning', 'Predictive Analytics', 'Scikit-learn'],
  },
];

export const fullstackSkills: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: 'Layout',
    description: 'Accessible, responsive user interfaces with component-based state management.',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend & REST APIs',
    icon: 'Server',
    description: 'Typed API endpoints, validation, authentication, and server-side workflows.',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    title: 'Database Management',
    icon: 'Database',
    description: 'Relational schemas, document collections, GridFS binary storage, and realtime sync.',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'MongoDB GridFS'],
  },
  {
    title: 'Application Design & Mobile',
    icon: 'Smartphone',
    description: 'End-to-end user workflows, role-based UIs, and cross-platform web/mobile delivery.',
    skills: ['Web Applications', 'Application Design', 'Flutter', 'Dart'],
  },
  {
    title: 'Testing, Debugging & Tooling',
    icon: 'Wrench',
    description: 'Automated verification, version control, and local-to-cloud build workflows.',
    skills: ['Testing and Debugging', 'Pytest', 'Git', 'GitHub', 'Vite'],
  },
];
