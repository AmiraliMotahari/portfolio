import { defaultImage } from "../constants/images";
import {
  CertificationsType,
  EducationType,
  ExperiencesType,
  LanguagesType,
  PersonalInfoType,
  ProjectsType,
  SkillsType,
  SocialsType,
} from "../types";

export const personalInfo: PersonalInfoType = {
  firstName: "Amirali",
  lastName: "Motahari",
  yearOfBirth: 2000,
  name: "Amirali Motahari",
  title: "Creative Developer",
  email: "amiralimotahari.dev@gmail.com",
  location: "Tehran, Iran",
  website: "portfolio.example.com",
  summary:
    "Creative developer with over 5 years of experience in building beautiful, functional, and accessible web experiences. Specializing in interactive applications that combine cutting-edge technology with thoughtful design.",
  picture: "/assets/images/amirali-motahari.jpeg",
};

export const socials: SocialsType = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/amirali-motahari-252a651a7",
  },
  {
    title: "GitHub",
    href: "https://github.com/AmiraliMotahari",
  },
];

export const skills: SkillsType = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React & Next.js", level: 85 },
  { name: "CSS/Tailwind", level: 100 },
  { name: "Responsive Design", level: 100 },
  { name: "Git/Version Control", level: 80 },
  { name: "Performance Optimization", level: 75 },
  { name: "Accessibility", level: 70 },
];

export const experiences: ExperiencesType = [
  {
    position: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    startDate: "Jan 2021",
    endDate: "Present",
    description:
      "Lead developer for client projects, focusing on creating performant and accessible web applications. Implemented modern frontend architectures using React and Next.js.",
    achievements: [
      "Reduced load time by 40% through performance optimizations",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored junior developers and led technical workshops",
      "Developed component library used across multiple projects",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    position: "Frontend Developer",
    company: "Digital Solutions Agency",
    location: "Portland, OR",
    startDate: "Mar 2018",
    endDate: "Dec 2020",
    description:
      "Developed responsive websites and web applications for various clients across different industries.",
    achievements: [
      "Created interactive data visualizations for financial dashboard",
      "Built e-commerce platform with custom checkout flow",
      "Implemented design system used across multiple projects",
      "Optimized website performance achieving 95+ Lighthouse scores",
    ],
    technologies: ["JavaScript", "React", "SCSS", "Redux", "REST APIs"],
  },
  {
    position: "Web Developer Intern",
    company: "StartUp Ventures",
    location: "Seattle, WA",
    startDate: "Jun 2017",
    endDate: "Feb 2018",
    description:
      "Assisted in the development of web applications and learned modern development practices.",
    achievements: [
      "Contributed to open-source projects",
      "Developed landing pages for marketing campaigns",
      "Created interactive prototypes for user testing",
      "Assisted with UX research and user interviews",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
];

export const education: EducationType = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    location: "San Francisco, CA",
    startDate: "2013",
    endDate: "2017",
    description:
      "Focused on web technologies and human-computer interaction. Graduated with honors.",
    courses: [
      "Advanced Web Development",
      "User Interface Design",
      "Data Structures and Algorithms",
      "Database Systems",
      "Computer Networks",
    ],
    achievements: [
      "Dean's List for Academic Excellence (2015-2017)",
      "Best Final Year Project Award",
      "Student Representative for Computer Science Department",
    ],
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Code Academy",
    location: "Online",
    startDate: "2017",
    endDate: "2017",
    description:
      "Intensive 12-week program focused on modern web development technologies and practices.",
    courses: [
      "Frontend Development with React",
      "Backend Development with Node.js",
      "Database Design and Implementation",
      "RESTful API Development",
      "Deployment and DevOps",
    ],
    achievements: [
      "Top Student Award",
      "Built a full-stack application that was featured in the academy showcase",
    ],
  },
  {
    degree: "UI/UX Design Certification",
    institution: "Design Institute",
    location: "Portland, OR",
    startDate: "2018",
    endDate: "2018",
    description:
      "Specialized training in user interface and experience design principles and methodologies.",
    courses: [
      "User Research and Testing",
      "Interaction Design",
      "Visual Design Principles",
      "Prototyping and Wireframing",
      "Accessibility in Design",
    ],
    achievements: [
      "Portfolio selected for institute's annual exhibition",
      "Mentored junior designers in program",
    ],
  },
];

const projects: ProjectsType = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: defaultImage,
    category: "Web",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Template",
    description:
      "A customizable portfolio template for creative professionals with animations and dark mode.",
    image: defaultImage,
    category: "Design",
    tags: ["React", "Framer Motion", "Styled Components"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A mobile app for managing tasks, projects, and team collaboration with real-time updates.",
    image: defaultImage,
    category: "Mobile",
    tags: ["React Native", "Firebase", "Redux"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description:
      "A web application that uses AI to generate content for blogs, social media, and marketing materials.",
    image: defaultImage,
    category: "Web",
    tags: ["Next.js", "OpenAI API", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const certifications: CertificationsType = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2022",
    url: "https://aws.amazon.com/certification/",
  },
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "2021",
    url: "https://grow.google/certificates/ux-design/",
  },
];

export const languages: LanguagesType = [
  { name: "Persian", proficiency: "Native" },
  { name: "English", proficiency: "Advanced" },
];

export const user = {
  personalInfo,
  skills,
  experiences,
  education,
  projects,
  certifications,
  languages,
  socials,
};
