export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  score: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  verifyLink?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface PortfolioData {
  personal: {
    name: string;
    titles: string[];
    email: string;
    location: string;
    github: string;
    linkedin: string;
    bio: string;
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  certifications: Certification[];
  blogs: BlogPost[]; // Empty array implies "Coming Soon"
}