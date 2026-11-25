export interface ScreenshotItem {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  fullTitle: string;
  subtitle: string;
  domain: string;
  introduction: string;
  problemStatement: string;
  objective: string;
  technologies: string[];
  features: string[];
  architecture: string;
  workflowSteps: string[];
  testing: string;
  challengesAndLearning: string[];
  myContribution: string[];
  aiContribution: string[];
  boundaries?: string[];
  category: 'data-analytics' | 'full-stack' | 'ai-solutions';
  secondaryCategory?: 'data-analytics' | 'full-stack' | 'ai-solutions';
  filterTags: ('data-analytics' | 'full-stack' | 'ai-solutions')[];
  screenshots: ScreenshotItem[];
  screenshotNote?: string;
  githubUrl: string;
  highlights: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 'mailtrace',
    number: '01',
    title: 'MailTrace',
    fullTitle: 'MAILTRACE — Digital Email Forensics & Investigation System',
    subtitle: 'Deterministic Local Email Evidence Analysis & Forensic Platform',
    domain: 'Digital Forensics | Full-Stack Development | Cybersecurity',
    introduction:
      'MAILTRACE is a software-only digital email forensics and investigation platform built to inspect exported RFC 822 / RFC 5322 .eml files inside a structured, offline, reproducible workflow.',
    problemStatement:
      'Phishing campaigns, spoofed sender identities, header tampering, and disguised malicious attachments often evade basic inbox filters. Reviewing raw MIME headers, routing hops, and file signatures manually is slow and error-prone without a structured investigative interface.',
    objective:
      'Provide a deterministic, local investigation platform that parses raw .eml email evidence, computes cryptographic hashes, reconstructs transmission routing hops, detects attachment magic-byte spoofing, evaluates explainable forensic rules, and generates formal PDF investigation reports.',
    technologies: [
      'Python 3.11',
      'FastAPI',
      'React 18',
      'TypeScript 5.2',
      'Vite 5.1',
      'Tailwind CSS 3.4',
      'MongoDB',
      'PyMongo',
      'Pydantic',
      'ReportLab',
      'Pytest',
      'React Router',
      'Lucide Icons',
      'Recharts',
    ],
    features: [
      'Email evidence ingestion with .eml file validation',
      'SHA-256 and MD5 cryptographic hashing for evidence integrity',
      'MIME decomposition and RFC 822 / RFC 5322 email parsing',
      'Categorized email header analysis (From, Reply-To, Return-Path, Authentication-Results)',
      'Received-header routing hop reconstruction and IP extraction',
      'Body artifact extraction (URLs, domains, and embedded email addresses)',
      'Urgency and social-engineering keyword detection',
      'Attachment analysis with extension vs. magic-byte mismatch detection',
      'Seven explainable forensic indicator rules',
      'Additive risk scoring between 0 and 100 with severity classification',
      'Chronological investigation timeline across cases and evidence',
      'MongoDB evidence persistence with in-memory fallback for local demonstration',
      'Automated PDF forensic report generation via ReportLab',
    ],
    architecture:
      'Four-layer architecture: React 18 + TypeScript presentation layer → FastAPI REST API and service layer → deterministic Python forensic engine → MongoDB persistence (6 collections: cases, evidence, emails, attachments, indicators, investigations) and ReportLab PDF reporting.',
    workflowSteps: [
      'Create an investigation case and upload exported .eml email evidence',
      'Compute SHA-256 & MD5 hashes and persist immutable evidence metadata',
      'Decompose MIME structure, headers, routing hops, body artifacts, and attachments',
      'Inspect magic bytes vs. declared file extensions and evaluate 7 explainable forensic rules',
      'Review additive 0–100 risk score, chronological timeline, and export a PDF forensic report',
    ],
    testing:
      'Documented automated test execution via Pytest 9.1.1 (Python 3.11.9): 7/7 tests passed in 0.97 seconds across synthetic test cases (test_health_check, test_hash_calculation, test_attachment_mismatch_detection, test_executable_attachment_flag, test_body_extraction, test_routing_hops_parsing, test_case_creation_and_evidence_upload). Verified empirical corpus cases including suspicious_email.eml (100/100 Critical), attachment_mismatch.eml (35/100 Moderate — ZIP masquerading as PDF), replyto_mismatch.eml (40/100 Moderate), and normal_email.eml (0/100 Low baseline).',
    challengesAndLearning: [
      'Understanding RFC 822 / RFC 5322 MIME structures, multi-hop Received header ordering, and magic-byte signatures.',
      'Structuring a clean six-collection MongoDB schema while supporting an in-memory fallback for offline demos.',
      'Designing clear forensic disclaimers so deterministic heuristic scoring is never overstated as legal attribution.',
    ],
    myContribution: [
      'Defining project requirements, case workflow, and investigation scope',
      'Understanding email forensic objectives, RFC header structures, and evidence boundaries',
      'Planning forensic modules, indicator rules, and reporting features',
      'Designing the Forensics Command Center UI and investigation views',
      'Writing prompts and guiding AI-assisted development across frontend and backend',
      'Contributing to code modifications, data structuring, and project documentation',
      'Testing application workflows against normal, spoofed, and attachment-mismatch .eml samples',
      'Identifying issues, validating risk outputs, and reviewing generated PDF reports',
    ],
    aiContribution: [
      'AI-assisted implementation of Python RFC email parsing and MIME decomposition modules',
      'AI-supported development of FastAPI endpoints, Pydantic schemas, and MongoDB/fallback persistence',
      'AI-assisted construction of magic-byte inspection, seven indicator rules, and ReportLab PDF generation',
      'AI-supported React 18 + TypeScript + Recharts dashboard and case-detail UI components',
    ],
    boundaries: [
      'Analyzes exported email evidence (.eml) in a local workflow only',
      'Does not execute malware or perform dynamic sandbox detonation',
      'Does not perform active live DNS lookups',
      'Does not navigate or crawl external URLs',
      'Does not establish physical identity or issue legal verdicts',
    ],
    category: 'full-stack',
    filterTags: ['full-stack'],
    screenshots: [
      { src: '/assets/projects/mailtrace/01_dashboard.png', caption: 'Forensics Command Center Dashboard' },
      { src: '/assets/projects/mailtrace/04_upload_interface.png', caption: 'Evidence Ingestion & .eml Upload' },
      { src: '/assets/projects/mailtrace/06_header_analysis.png', caption: 'Categorized RFC Header Analysis' },
      { src: '/assets/projects/mailtrace/12_magic_byte_analysis.png', caption: 'Attachment Magic-Byte Mismatch Detection' },
      { src: '/assets/projects/mailtrace/15_risk_score.png', caption: 'Additive Risk Scoring (0–100) & Indicators' },
      { src: '/assets/projects/mailtrace/19_generated_pdf.png', caption: 'Generated ReportLab PDF Forensic Report' },
    ],
    githubUrl: 'https://github.com/AIStackInnovation',
    highlights: [
      { label: 'Pytest Suite', value: '7/7 Passed (0.97s)' },
      { label: 'DB Collections', value: '6 MongoDB Collections' },
      { label: 'Forensic Rules', value: '7 Explainable Rules' },
    ],
  },
  {
    id: 'datavault',
    number: '02',
    title: 'DataVault',
    fullTitle: 'DataVault — AI-Powered Digital Memory & Data Intelligence Platform',
    subtitle: 'Centralized Digital Asset Management, OCR & MongoDB Analytics Platform',
    domain: 'Full-Stack Development | Database Intelligence | Data Analytics',
    introduction:
      'DataVault is a centralized personal digital asset management and intelligence platform built to store, organize, extract text from, search, and analyze heterogeneous files, screenshots, notes, and links.',
    problemStatement:
      'Important screenshots, PDFs, DOCX documents, notes, and reference links often sit scattered across folders with generic filenames like IMG_9283.png, making content-based retrieval, duplicate tracking, and stale-item cleanup difficult.',
    objective:
      'Build a three-tier full-stack platform backed by native MongoDB and GridFS that automatically extracts searchable text from images, PDFs, and DOCX files, detects SHA-256 duplicates, flags forgotten memories, and exposes database intelligence via analytics and a read-only Query Lab.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB Community Server',
      'MongoDB Native Driver',
      'MongoDB GridFS',
      'Tesseract.js',
      'pdf-parse',
      'mammoth',
      'bcrypt',
      'JWT',
      'Nodemailer',
      'Recharts',
      'MongoDB Compass',
    ],
    features: [
      'User registration, JWT authentication, email verification support, and password recovery',
      'Role-based administration and feedback management dashboard',
      'Polymorphic digital asset uploads (images, screenshots, PDFs, DOCX, notes, links)',
      'Image and screenshot OCR text extraction using Tesseract.js',
      'PDF text extraction using pdf-parse and DOCX extraction using mammoth',
      'Content-based Smart Library search matching extracted OCR and document text',
      'MongoDB GridFS binary storage (vaultFiles bucket) with SHA-256 integrity hashing',
      'Advisory duplicate candidate detection via SHA-256 aggregation grouping',
      'Forgotten-memory triage (last opened > 180 days ago and view count < 3)',
      'Dashboard analytics for storage and category distribution, top tags, and activity logs',
      'Interactive read-only MongoDB Query Lab executing 12 whitelisted aggregation pipelines',
    ],
    architecture:
      'Three-tier architecture: React + TypeScript presentation tier → Node.js & Express business-logic/API tier → MongoDB persistence tier using the official native driver (no ODM) and GridFSBucket for binary chunks alongside a polymorphic assets collection.',
    workflowSteps: [
      'Authenticate with bcrypt-hashed credentials and HTTP-only JWT cookies',
      'Upload binary files (streamed to GridFS with SHA-256 hash) or create notes/links',
      'Run automated extraction (Tesseract.js OCR, pdf-parse, or mammoth) into searchable fields',
      'Search across extracted content in Smart Library or inspect storage/tag analytics',
      'Triage duplicate SHA-256 groups and forgotten-memory candidates or run 12 live pipelines in Query Lab',
    ],
    testing:
      'Verified 49/49 automated test assertions passing in 2.44 seconds across MongoDB connectivity, bcrypt/JWT auth, GridFS ingestion, OCR/PDF/DOCX extraction, content search (38ms query latency), SHA-256 duplicate grouping (12ms), all 12 Query Lab pipelines (8.4ms average latency), and feedback workflows.',
    challengesAndLearning: [
      'Using the native MongoDB Node.js driver directly with GridFSBucket and aggregation pipelines without an ODM.',
      'Designing advisory cleanup rules (SHA-256 grouping and 180-day/view-count triage) that never silently delete user records.',
      'Separating implemented extraction features from future scope such as scanned-PDF OCR and semantic vector search.',
    ],
    myContribution: [
      'Defining project requirements, user flows, and digital memory organization concepts',
      'Understanding database intelligence objectives, GridFS storage, and cleanup rules',
      'Planning features including OCR indexing, Smart Library, Query Lab, and admin views',
      'Designing the dashboard layout, Smart Library UX, and analytics presentation',
      'Writing prompts and guiding AI-assisted development across client and server tiers',
      'Working with test datasets, sample screenshots, and MongoDB evidence verification',
      'Testing end-to-end upload, OCR search, duplicate triage, and Query Lab outputs',
      'Identifying edge cases and documenting system boundaries honestly',
    ],
    aiContribution: [
      'AI-assisted implementation of Express REST API, Zod validation, and JWT/bcrypt authentication',
      'AI-supported integration of Tesseract.js, pdf-parse, mammoth, and GridFSBucket streaming',
      'AI-assisted creation of MongoDB aggregation pipelines and the 12-pipeline Query Lab',
      'AI-supported React + TypeScript frontend views and Recharts analytics visualizations',
    ],
    boundaries: [
      'Scanned-PDF OCR is future scope (pdf-parse handles text-based PDFs)',
      'Semantic vector search is future scope (current search uses indexed text matching & relevance scoring)',
      'Forgotten-memory triage uses deterministic explainable rules (>180 days & <3 views), not a trained predictive model',
      'Email verification and password recovery dispatch require configured SMTP credentials for Nodemailer',
      'Cleanup is strictly advisory — records are never silently deleted',
    ],
    category: 'full-stack',
    secondaryCategory: 'data-analytics',
    filterTags: ['full-stack', 'data-analytics'],
    screenshots: [
      { src: '/assets/projects/datavault/07_dashboard_dark.png', caption: 'DataVault Operational Intelligence Dashboard' },
      { src: '/assets/projects/datavault/09_add_to_vault.png', caption: 'Polymorphic Asset Upload & Ingestion' },
      { src: '/assets/projects/datavault/12_smart_library.png', caption: 'Smart Library Asset Browser' },
      { src: '/assets/projects/datavault/22_search_demonstration_ocr.png', caption: 'OCR Content-Based Search Demonstration' },
      { src: '/assets/projects/datavault/16_analytics_cleanup.png', caption: 'Storage Analytics & Advisory Cleanup' },
      { src: '/assets/projects/datavault/19_query_lab.png', caption: 'Interactive Read-Only MongoDB Query Lab' },
    ],
    githubUrl: 'https://github.com/AIStackInnovation',
    highlights: [
      { label: 'Test Suite', value: '49/49 Passed (2.44s)' },
      { label: 'Query Lab', value: '12 Pipelines (8.4ms avg)' },
      { label: 'Storage Engine', value: 'Native MongoDB + GridFS' },
    ],
  },
  {
    id: 'laptop-price',
    number: '03',
    title: 'Laptop Price Analysis & Prediction',
    fullTitle: 'Laptop Price Analysis & Prediction',
    subtitle: 'Exploratory Data Analysis & Regression Modeling on Kaggle Laptop Dataset',
    domain: 'Data Analytics | Exploratory Data Analysis | Machine Learning',
    introduction:
      'An end-to-end MSc Data Analytics machine learning notebook that cleans, explores, engineers features from, and models laptop hardware specifications from the Kaggle Laptop Price Dataset to predict Price_euros.',
    problemStatement:
      'Laptop pricing varies widely across hardware combinations—RAM, SSD/HDD capacity, display resolution, processor/GPU brands, and device categories—making it difficult to estimate fair market price from raw specification strings.',
    objective:
      'Clean and structure raw specification text fields, conduct Exploratory Data Analysis across brands and laptop types, train four regression models inside leak-free preprocessing pipelines, evaluate them on a held-out 20% test set, and provide an interactive specification-based price predictor.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Scikit-learn',
      'ipywidgets',
      'Joblib',
    ],
    features: [
      'Automatic CSV encoding detection and dataset validation (1,303 records, 13 columns)',
      'Text normalization, duplicate checking, and target validation for Price_euros',
      'Feature engineering extracting RAM_GB, Weight_kg, Storage_GB / SSD_GB, Screen_Width / Height, CPU_Brand, and GPU_Brand',
      'Exploratory Data Analysis comparing distributions and average prices across laptop types and brands',
      'Leak-free 80/20 train-test split (random_state = 42) with ColumnTransformer preprocessing',
      'Four regression pipelines: Linear Regression, Decision Tree, Random Forest (200 trees), Gradient Boosting',
      'Dynamic held-out test evaluation using MAE, MSE, RMSE, and R² with lowest-RMSE model selection',
      'Actual vs. Predicted diagnostics and native/permutation feature importance extraction',
      'Interactive ipywidgets Laptop Price Predictor connected to the exported Joblib pipeline (laptop_price_model.pkl)',
    ],
    architecture:
      'Reproducible Google Colab / Jupyter pipeline: CSV Load & Encoding Check → Data Cleaning → Specification Feature Engineering → EDA Visuals → ColumnTransformer (Median/StandardScaler + Most-Frequent/OneHotEncoder) → 4 Regressors → Lowest-RMSE Selection → ipywidgets Predictor & Joblib Export.',
    workflowSteps: [
      'Load Kaggle laptop_price.csv (1,303 records, 12 inputs + target Price_euros)',
      'Clean whitespace/duplicates and parse numerical specs from text strings (e.g. 8GB, 1.37kg, 256GB SSD)',
      'Explore distributions: Notebook (707), Gaming (205, avg €1,732), Ultrabook (194), 2-in-1 (117), Workstation (29, avg €2,281), Netbook (23)',
      'Train 4 Scikit-learn pipelines on 80% split and evaluate MAE, MSE, RMSE, R² on 20% test split',
      'Export the winning pipeline via Joblib for interactive widget price prediction',
    ],
    testing:
      'Verified dataset snapshot metrics from presentation outputs: 1,303 laptops, Price_euros mean €1,123.69, median €977.00, std €699.01, min €174, max €6,099. Note: The saved .ipynb file has cleared cell outputs and the PPTX evaluation screenshot records metrics as dynamically computed at runtime; therefore, specific test-set R²/RMSE/MAE scores are not fabricated here.',
    challengesAndLearning: [
      'Parsing heterogeneous string columns (like Memory and ScreenResolution) into clean numerical features without losing signal.',
      'Preventing data leakage by fitting imputation, scaling, and one-hot encoding strictly inside Scikit-learn Pipeline/ColumnTransformer.',
      'Reporting only verified dataset statistics from the project presentation and being transparent about cleared notebook runtime metrics.',
    ],
    myContribution: [
      'Defining the analytical problem statement and modeling objectives for Price_euros',
      'Understanding dataset columns, domain meaning, and specification parsing requirements',
      'Planning the end-to-end EDA, preprocessing, model comparison, and predictor workflow',
      'Designing the project presentation deck and analytics KPI layout',
      'Writing prompts and guiding AI-assisted notebook development',
      'Reviewing EDA distributions, descriptive statistics, and pipeline outputs',
      'Validating workflow logic and testing the interactive predictor structure',
    ],
    aiContribution: [
      'AI-assisted implementation of Python regex/string parsing and feature engineering functions',
      'AI-supported Scikit-learn ColumnTransformer and multi-regressor training boilerplate',
      'AI-assisted Matplotlib/Seaborn visualization and ipywidgets predictor interface code',
    ],
    boundaries: [
      'Saved Jupyter notebook (.ipynb) has cleared cell execution outputs; regression metrics (MAE, MSE, RMSE, R²) are computed dynamically at runtime when the CSV is loaded',
      'Dataset snapshot KPIs shown here come directly from the verified project presentation screenshots (1,303 Kaggle records)',
    ],
    category: 'data-analytics',
    filterTags: ['data-analytics'],
    screenshots: [
      { src: '/assets/projects/laptop-price/image-3-1.png', caption: 'Dataset Preview (df_clean.head)' },
      { src: '/assets/projects/laptop-price/image-6-1.png', caption: 'Descriptive Statistics Output (1,303 Records)' },
      { src: '/assets/projects/laptop-price/image-7-1.png', caption: 'EDA — Laptop Type Distribution' },
      { src: '/assets/projects/laptop-price/image-7-2.png', caption: 'EDA — Average Price by Laptop Type' },
      { src: '/assets/projects/laptop-price/image-9-1.png', caption: 'Dynamic Model Evaluation Output View' },
      { src: '/assets/projects/laptop-price/image-10-1.png', caption: 'Interactive Laptop Price Predictor Widget' },
      { src: '/assets/projects/laptop-price/image-11-1.png', caption: 'Analytics Dashboard KPI Snapshot' },
    ],
    githubUrl: 'https://github.com/AIStackInnovation',
    highlights: [
      { label: 'Dataset Size', value: '1,303 Laptops' },
      { label: 'Mean / Median', value: '€1,123.69 / €977' },
      { label: 'Models Compared', value: '4 Regressors (80/20)' },
    ],
  },
  {
    id: 'ai-shop-verification',
    number: '04',
    title: 'AI Shop Verification',
    fullTitle: 'AI Shop Verification System',
    subtitle: 'Automated Merchant Compliance & Visual Inspection Platform',
    domain: 'AI Solutions | Full-Stack Development | Computer Vision',
    introduction:
      'Developed during software development training at Jode Technologies Pvt. Ltd. (JodeTx), the AI Shop Verification System is an AI-powered merchant verification platform covering shop validation, document verification, facial verification, and API-based automation workflows.',
    problemStatement:
      'Manual merchant onboarding and retail compliance checks require reviewing storefront photos, business documents, and owner identity records by hand, creating bottlenecks and vulnerability to inconsistent or fraudulent submissions.',
    objective:
      'Streamline retail merchant verification through an API-driven computer vision pipeline combining object detection, optical character recognition, and facial detection.',
    technologies: ['Python', 'YOLO', 'OCR', 'MediaPipe', 'FastAPI', 'Ngrok'],
    features: [
      'Storefront and shop validation workflow using YOLO object detection',
      'Document and signage text extraction via OCR',
      'Facial verification support using MediaPipe',
      'FastAPI backend endpoints for automated verification workflows',
      'Secure local-to-cloud endpoint exposure via Ngrok for testing and demos',
    ],
    architecture:
      'FastAPI verification service exposing API endpoints (tunneled via Ngrok for testing) that orchestrate YOLO detection for shop/signage validation, OCR for document/text extraction, and MediaPipe for facial verification.',
    workflowSteps: [
      'Submit merchant storefront media and verification documents to the FastAPI API',
      'Run YOLO object/signage detection for shop validation',
      'Extract text from signage and documents using OCR',
      'Perform facial verification checks using MediaPipe',
      'Return structured verification workflow status via API response',
    ],
    testing:
      'Demonstrated and tested through mentor-guided API milestone reviews during internship training at Jode Technologies Pvt. Ltd. (JodeTx). Note: Standalone project report, benchmark accuracy metrics, and application screenshots are proprietary/unavailable in the local portfolio archive and are not fabricated.',
    challengesAndLearning: [
      'Coordinating multiple computer vision components (YOLO, OCR, MediaPipe) behind a single FastAPI service.',
      'Testing API integrations securely across devices using Ngrok tunnels during live mentor demonstrations.',
      'Following organizational coding standards, documentation practices, and confidentiality guidelines.',
    ],
    myContribution: [
      'Understanding merchant verification requirements and compliance workflow goals',
      'Planning API automation steps across shop, document, and facial verification checks',
      'Designing verification input/output workflows and participating in mentor demos',
      'Writing prompts and guiding AI-assisted development of service modules',
      'Contributing to code integration, testing API responses via Ngrok, and debugging issues',
    ],
    aiContribution: [
      'AI-assisted implementation of FastAPI endpoint scaffolding',
      'AI-supported integration logic for YOLO, OCR, and MediaPipe modules',
      'AI-assisted debugging and workflow optimization during prototyping',
    ],
    boundaries: [
      'Developed as an internship project at Jode Technologies Pvt. Ltd. (JodeTx); source code and proprietary screenshots are not stored in the local workspace',
      'No unverified accuracy percentages or synthetic screenshots are displayed',
    ],
    category: 'ai-solutions',
    filterTags: ['ai-solutions', 'full-stack'],
    screenshots: [],
    screenshotNote:
      'Authentic screenshots and proprietary source code for this JodeTx internship project are not stored in the local workspace due to organizational confidentiality guidelines. No mockup or synthetic screens are shown.',
    githubUrl: 'https://github.com/AIStackInnovation',
    highlights: [
      { label: 'Core Stack', value: 'YOLO + OCR + MediaPipe' },
      { label: 'API Layer', value: 'FastAPI + Ngrok' },
      { label: 'Context', value: 'JodeTx Internship' },
    ],
  },
  {
    id: 'edumeet',
    number: '05',
    title: 'EduMeet',
    fullTitle: 'EduMeet — Student-Teacher Appointment & Collaboration Platform',
    subtitle: 'Web & Mobile Academic Scheduling, Course & Role-Based Booking Platform',
    domain: 'Full-Stack Development | Web & Mobile Application',
    introduction:
      'EduMeet is a complete student-teacher appointment and communication platform built during software development training at Jode Technologies Pvt. Ltd. (JodeTx), featuring authentication, course management, booking workflows, role-based dashboards, and real-time synchronization across web and Flutter mobile apps.',
    problemStatement:
      'Academic consultations between students and teachers often rely on ad-hoc messages or manual registers, leading to scheduling conflicts, missed office-hour slots, and poor visibility for administrators.',
    objective:
      'Deliver a synchronized web and mobile appointment platform with role-based access for students, faculty, and administrators, supporting course management, real-time slot booking, and live status tracking.',
    technologies: ['React.js', 'TypeScript', 'Flutter', 'Firebase', 'PostgreSQL'],
    features: [
      'Role-based authentication and dedicated dashboards (Student, Teacher/Faculty, Admin)',
      'Course management and faculty availability scheduling',
      'End-to-end student appointment booking workflows with status tracking',
      'Real-time synchronization powered by Firebase alongside PostgreSQL persistence',
      'Cross-platform delivery spanning React.js + TypeScript web app and Flutter mobile app',
    ],
    architecture:
      'Multi-client architecture combining a React.js + TypeScript web interface and a Flutter mobile application connected to Firebase (real-time sync & auth) and PostgreSQL for structured relational persistence.',
    workflowSteps: [
      'Users sign in through role-based authentication (Student, Faculty, or Admin)',
      'Faculty/Admin manage courses and available consultation time slots',
      'Students browse availability and submit appointment booking requests',
      'Real-time synchronization updates booking confirmation and status across web and mobile',
    ],
    testing:
      'Validated across mentor milestone demos during the JodeTx internship, covering role-based authentication, booking creation, status updates, and real-time synchronization. (A companion vanilla HTML/CSS/JS + Firebase Student Meeting Booking System prototype also exists in the local archive demonstrating login, booking submission, summary confirmation, and Firestore onSnapshot admin approval flows.)',
    challengesAndLearning: [
      'Coordinating state and data consistency across both web (React/TypeScript) and mobile (Flutter) clients.',
      'Structuring clean role-based permissions separating student booking creation from faculty/admin approval actions.',
      'Managing real-time UI updates via Firebase listeners alongside relational data in PostgreSQL.',
    ],
    myContribution: [
      'Defining user roles, course management requirements, and booking workflows',
      'Planning dashboard views for students, faculty, and administrators',
      'Designing interface flows and responsive layouts for appointment scheduling',
      'Writing prompts and guiding AI-assisted development across web and mobile modules',
      'Contributing to feature modifications, testing booking flows, and presenting live demos to mentors',
    ],
    aiContribution: [
      'AI-assisted component implementation across React.js, TypeScript, and Flutter',
      'AI-supported Firebase real-time sync and PostgreSQL integration patterns',
      'AI-assisted form validation and role-based dashboard scaffolding',
    ],
    boundaries: [
      'Primary EduMeet web/Flutter codebase was built under JodeTx training guidelines; application screenshots are not present in the local workspace',
      'No synthetic screenshots are fabricated in place of real screens',
    ],
    category: 'full-stack',
    filterTags: ['full-stack'],
    screenshots: [],
    screenshotNote:
      'Authentic UI screenshots for EduMeet are not present in the local workspace (only a companion HTML/CSS/JS + Firebase StudentMeetingSystem code archive exists locally). Following our no-fake-screenshots policy, no mockups are presented as real screens.',
    githubUrl: 'https://github.com/AIStackInnovation',
    highlights: [
      { label: 'Platforms', value: 'Web (React) + Mobile (Flutter)' },
      { label: 'Backend', value: 'Firebase + PostgreSQL' },
      { label: 'Context', value: 'JodeTx Internship' },
    ],
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'data-analytics', label: 'Data Analytics' },
  { id: 'full-stack', label: 'Full-Stack Development' },
  { id: 'ai-solutions', label: 'AI Solutions' },
] as const;
