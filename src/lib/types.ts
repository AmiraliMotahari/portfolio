export type PersonalInfoType = {
  firstName: string;
  lastName: string;
  yearOfBirth: number;
  name: string;
  title: string;
  email: string;
  location: string;
  website: string;
  summary: string;
  picture: string;
  blurData: string;
};

export type SocialsType = {
  title: string;
  href: string;
}[];

export type SkillsType = {
  name: string;
  level: number;
}[];

export type ExperiencesType = {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}[];

export type EducationType = {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  courses: string[];
  achievements: string[];
}[];

export type ProjectsType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  blurData:string;
  category: string;
  tags: string[];
  demoUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
}[];

export type CertificationsType = {
  name: string;
  issuer: string;
  date: string;
  url: string;
}[];

export type LanguagesType = {
  name: string;
  proficiency: string;
}[];

export type UserType = {
  personalInfo: PersonalInfoType;
  skills: SkillsType;
  experiences: ExperiencesType;
  education: EducationType;
  projects: ProjectsType;
  certifications: CertificationsType;
  languages: LanguagesType;
  socials: SocialsType;
};

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  readingTime: number;
  excerpt: string;
  coverImage: string;
  coverBlurData:string;
  content:string;
  tags: string[];
};
