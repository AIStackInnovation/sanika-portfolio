export interface Experience {
  id: string;
  role: string;
  company: string;
  shortName?: string;
  engagementType: string;
  location: string;
  period: string;
  durationNote: string;
  summary: string;
  responsibilities: string[];
  keyProjects: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'jodetx',
    role: 'Student Trainee — Software Development',
    company: 'Jode Technologies Pvt. Ltd.',
    shortName: 'JodeTx',
    engagementType: 'Full-time, On-site Training',
    location: 'Thane West, Maharashtra',
    period: 'May 2026 – August 2026',
    durationNote: '3 months (Engagement letter: 6-month term from May 2026)',
    summary:
      'Gained hands-on industry exposure developing production-oriented web, mobile, and AI-driven applications while adhering to engineering quality guidelines and mentor-led architectural reviews.',
    responsibilities: [
      'Developed production-oriented web and mobile applications using React.js, TypeScript, JavaScript, Flutter, and Firebase.',
      'Built AI-powered solutions involving Optical Character Recognition (OCR), Computer Vision, NLP, and workflow automation.',
      'Contributed across the full development lifecycle: research, prototyping, coding, testing, debugging, and deployment.',
      'Followed coding standards, documentation practices, and quality guidelines across assigned modules and projects.',
      'Presented regular progress reports and live demos to mentors and participated actively in training sessions and project discussions.',
    ],
    keyProjects: ['EduMeet (Web + Mobile)', 'Jode X Meet', 'AI Shop Verification System', 'Graph-based R&D initiatives'],
    technologies: ['React.js', 'TypeScript', 'JavaScript', 'Flutter', 'Firebase', 'Python', 'OCR', 'Computer Vision', 'NLP', 'FastAPI'],
  },
  {
    id: 'unified-mentor',
    role: 'Web Development Intern',
    company: 'Unified Mentor Pvt. Ltd.',
    engagementType: 'Remote Internship',
    location: 'Remote / India',
    period: 'April 2025 – June 2025',
    durationNote: '2 months',
    summary:
      'Built responsive web interfaces and improved client-facing user experience using semantic HTML5, modern CSS3, and interactive JavaScript.',
    responsibilities: [
      'Developed responsive web interfaces and improved user experience using HTML5, CSS3, and JavaScript.',
      'Ensured clean cross-device layout behavior across desktop, tablet, and mobile viewports.',
      'Iterated on interface usability, layout clarity, and interactive DOM behavior based on mentor feedback.',
    ],
    keyProjects: ['Responsive Web Interfaces & UI Enhancements'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI Design'],
  },
];
