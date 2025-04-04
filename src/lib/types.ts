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
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
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
