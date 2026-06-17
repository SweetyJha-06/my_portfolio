import type {
  SkillCategory,
  Experience,
  Project,
  Certification,
  Education,
} from "@/types";

export const personalInfo = {
  name: "Sweety Jha",
  title: "Software Developer",
  roles: ["Backend Developer", "ML Engineer", "Problem Solver", "Java Developer"],
  bio: "Software developer with a backend and applied-ML focus. I build API-driven applications and automate manual workflows with machine learning — turning slow, manual processes into reliable automated pipelines.",
  email: "jhasweety2609@gmail.com",
  github: "https://github.com/SweetyJha-06/",
  linkedin: "https://www.linkedin.com/in/sweety-jha-68b10a2a5",
  leetcode: "https://leetcode.com/u/jha_sweety/",
  leetcodeUsername: "jha_sweety",
  location: "India",
  availableForWork: true,
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "HTML", "CSS", "SQL"],
  },
  {
    category: "Data & Storage",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Android Studio", "VS Code", "Docker", "REST API"],
  },
  {
    category: "Foundations",
    skills: ["Data Structures & Algorithms", "OOP", "System Design", "Machine Learning"],
  },
];

export const experience: Experience[] = [
  {
    role: "Technical Intern",
    company: "Anna University",
    location: "Chennai, Tamil Nadu",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Automated AMS (analog/mixed-signal) circuit verification for an SRC-funded research project, eliminating manual spec-checking for the majority of test cases.",
      "Verified circuit design specs against analog output using Incremental Learning models, cutting manual verification time significantly.",
      "Built and adapted ML validation models with a cross-functional team to handle distinct operating conditions (voltage / temperature / frequency).",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Incremental Learning for AMS Circuit Verification",
    description:
      "An automated ML pipeline that verifies analog/mixed-signal circuit specifications without full model retraining — reducing retraining time from 13 hours to 1 hour.",
    tags: ["Python", "Machine Learning", "Data Analysis", "Incremental Learning"],
    github:
      "https://github.com/SweetyJha-06/Incremental-Learning-for-AMS-Cricuit-Verification",
    highlights: [
      "Reduced model retraining time from 13 hrs to 1 hr",
      "Processed datasets across voltage, temperature, and frequency conditions",
      "Automated previously manual verification tasks end-to-end",
    ],
  },
  {
    title: "Smart-Fare App",
    description:
      "An Android application integrating Uber and Ola REST APIs for real-time fare comparison — reducing fare-checking time from two apps to one.",
    tags: ["Java", "Android Studio", "Firebase", "REST API"],
    github: "https://github.com/SweetyJha-06/Smart-Fare-App",
    highlights: [
      "Integrated Uber & Ola REST APIs with retry handling and input validation",
      "Implemented Firebase authentication and per-user cloud data sync",
      "Built side-by-side live fare comparison UI in a single Android view",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Amazon HackOn",
    issuer: "Amazon",
    date: "2024",
  },
  {
    name: "Java Data Structures and Algorithms",
    issuer: "Problem-Solving Certification",
    date: "2024",
  },
  {
    name: "Fundamentals of Cyber Security",
    issuer: "Secure Application Development",
    date: "2024",
    credentialUrl:
      "https://drive.google.com/file/d/1YbQx4z5XkFwXSugnlw2GWxtA2JMMqxcz/view",
  },
  {
    name: "Deloitte Technology Job Simulation",
    issuer: "Forage",
    date: "April 2026",
    credentialUrl:
      "https://drive.google.com/file/d/1KoBtQYboQupesUp7hO9P_uAe7drqy1dL/view",
  },
];

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    period: "Jun 2024 – Apr 2026",
    grade: "GPA: 8.55 / 10",
    bullets: [
      "Specializing in backend systems, machine learning, and software engineering.",
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "R.M. College, B.N. Mandal University",
    location: "Saharsa, Bihar",
    period: "Jun 2019 – May 2022",
    grade: "CGPA: 8.16 / 10",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Contact", href: "#contact" },
];
