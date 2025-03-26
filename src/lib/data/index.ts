import { defaultImage } from "../constants/images";

export const personalInfo = {
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

export const skills = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React & Next.js", level: 85 },
  { name: "CSS/Tailwind", level: 100 },
  { name: "Responsive Design", level: 100 },
  { name: "Git/Version Control", level: 80 },
  { name: "Performance Optimization", level: 75 },
  { name: "Accessibility", level: 70 },
];

export const experience = [
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
    ],
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
    ],
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
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    location: "San Francisco, CA",
    startDate: "2013",
    endDate: "2017",
    description:
      "Focused on web technologies and human-computer interaction. Graduated with honors.",
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Code Academy",
    location: "Online",
    startDate: "2017",
    endDate: "2017",
    description:
      "Intensive 12-week program focused on modern web development technologies and practices.",
  },
];

const projects = [
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

export const certifications = [
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

export const languages = [
  { name: "Persian", proficiency: "Native" },
  { name: "English", proficiency: "Advanced" },
];

export const user = {
  personalInfo,
  skills,
  experience,
  education,
  projects,
  certifications,
  languages,
};
