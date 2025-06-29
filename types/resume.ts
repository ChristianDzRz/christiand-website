export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    github: string;
    linkedin: string;
    summary: string;
  };
  experiences: {
    company: string;
    role: string;
    period: string;
    summary: string;
    details: string[];
  }[];
  projects: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
  skills: string[];
  personalDetails: {
    title: string;
    content: string;
    icon: string;
  }[];
}