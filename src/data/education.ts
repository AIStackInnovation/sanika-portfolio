export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  status: string;
  isCurrent?: boolean;
  breakdown?: { label: string; value: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
}

export const education: EducationItem[] = [
  {
    id: 'msc',
    degree: 'M.Sc. in Data Analytics',
    institution: 'Pillai College of Arts, Commerce & Science, New Panvel',
    period: 'Currently Pursuing',
    score: 'Pursuing',
    scoreLabel: 'Academic Status',
    status: 'In Progress',
    isCurrent: true,
    breakdown: [
      { label: 'Focus Areas', value: 'Data Analytics, Statistics, Machine Learning & Data Systems' },
    ],
  },
  {
    id: 'bsc',
    degree: 'B.Sc. in Computer Science',
    institution: 'University of Mumbai',
    period: 'Graduated',
    score: '9.36 CGPA',
    scoreLabel: 'Final Year CGPA',
    status: 'Completed',
    breakdown: [
      { label: 'Final Year', value: '9.36 CGPA' },
      { label: 'Second Year', value: '9.71 CGPA' },
      { label: 'First Year', value: '8.77 CGPA' },
    ],
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC — 12th)',
    institution: 'Maharashtra State Board',
    period: 'Completed',
    score: '60%',
    scoreLabel: 'Score',
    status: 'Completed',
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (SSC — 10th)',
    institution: 'Maharashtra State Board',
    period: 'Completed',
    score: '81.20%',
    scoreLabel: 'Score',
    status: 'Completed',
  },
];

export const certifications: Certification[] = [
  { id: 'cert-1', title: 'AI – Code Without Barriers', issuer: 'Ratan Tata Maharashtra State Skills University & Microsoft', category: 'Artificial Intelligence' },
  { id: 'cert-2', title: 'Generative AI Literacy', issuer: 'FutureSkills Prime', category: 'Generative AI' },
  { id: 'cert-3', title: 'Data Analytics', issuer: 'Simplilearn SkillUp', category: 'Data Analytics' },
  { id: 'cert-4', title: 'AWS Fundamentals', issuer: 'Simplilearn SkillUp', category: 'Cloud Infrastructure' },
  { id: 'cert-5', title: 'MS Excel', issuer: 'Simplilearn SkillUp', category: 'Data Tools' },
  { id: 'cert-6', title: 'Principles of Data Literacy', issuer: 'IBM SkillsBuild', category: 'Data Foundations' },
  { id: 'cert-7', title: 'Introduction to Databases & SQL Querying', issuer: 'IBM SkillsBuild', category: 'Databases & SQL' },
  { id: 'cert-8', title: 'Learn JavaScript', issuer: 'Codecademy', category: 'Web Development' },
  { id: 'cert-9', title: 'Learn HTML', issuer: 'Codecademy', category: 'Web Development' },
  { id: 'cert-10', title: 'Web Development Internship Certificate', issuer: 'Unified Mentor Pvt. Ltd.', category: 'Industry Experience' },
];
