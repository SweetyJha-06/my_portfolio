export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  bullets?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
}
