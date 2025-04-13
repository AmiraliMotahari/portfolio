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
  website: "amiralimotahari.vercel.app",
  summary:
    "Creative developer with over 5 years of experience in building beautiful, functional, and accessible web experiences. Specializing in interactive applications that combine cutting-edge technology with thoughtful design.",
  picture: "/assets/images/amirali-motahari.jpeg",
  blurData:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nAXBMREAUAQAUHqZhZBCAne/gLNYDEJIoJflvwdVxcyqGhGwu4j43qsquDsimhkzA3cXke7OzA9toxi7H9pdQwAAAABJRU5ErkJggg==",
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
    slug: "donya-llc",
    title: "Donya LLC",
    description:
      "Donya LLC is a construction and renovation firm specializing in custom home builds, complete home makeovers, and expert repairs across Washington D.C., Maryland, and Virginia. Their services include design and build, renovation and remodeling, and construction management, all tailored to bring clients' visions to life with precision and craftsmanship.",
    image: "/assets/images/projects/donyallc.png",
    blurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAALUlEQVR4nAEiAN3/AI6Oi//29/v/7e70/7u9vf8AAwMA/01NTv9zbmz/DQMA/4UpE9caig/nAAAAAElFTkSuQmCC",
    category: "Web",
    tags: ["Next.js", "React", "Motion", "Tailwind CSS", "Shadcn UI"],
    demoUrl: "https://donyallc.com",
    githubUrl: null,
    featured: true,
  },
  {
    id: 2,
    slug: "doctorize",
    title: "Doctorize",
    description:
      "Doctorize is an online platform that helps users find and book appointments with verified doctors based on specialty, location, and availability. It ensures privacy and data security while offering a streamlined experience for both patients and healthcare providers.",
    image: "/assets/images/projects/doctorize.png",
    blurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAALUlEQVR4nAEiAN3/AFDQ3/+l////lfv//y23yv8AABI0/wArTf8AM1X/ABk6/29cEnFLfjKeAAAAAElFTkSuQmCC",
    category: "Web",
    tags: ["TypeScript", "CSS", "SPA", "Memo", "Google Api"],
    demoUrl: "https://doctorize.com/",
    githubUrl: null,
    featured: false,
  },
  {
    id: 3,
    slug: "themtfy",
    title: "Themtfy",
    description:
      "Themtfy is a lightweight JavaScript library for displaying toast notifications on web pages. It allows you to easily create customizable toast messages with various configuration options.",
    image: "/assets/images/projects/themtfy.png",
    blurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAK0lEQVR4nGMw1Nf5X1Ve9j8sNOy/tJT0fwYjQ8P/dXV1//fu3ff/7t17/wEDExIbDBveXAAAAABJRU5ErkJggg==",
    category: "Web",
    tags: ["TypeScript", "CSS"],
    demoUrl: "https://www.npmjs.com/package/themtfy",
    githubUrl: "https://github.com/AmiraliMotahari/themtfy",
    featured: false,
  },
  {
    id: 4,
    slug: "ako-pay",
    title: "Ako Pay",
    description:
      "Ako Pay is a custom tax management web application. It streamlines internal tax workflows by enabling staff to input financial data, automate tax calculations, manage document submissions, and receive important deadline notifications — all within a secure and user-friendly interface.",
    image: "/assets/images/projects/akopay.png",
    blurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAALUlEQVR4nAEiAN3/ABsmQv8DDSb/CBAj/3t+h/8A6+zs//n6+v/5+vv/7O3x/xuHFdUsJxJmAAAAAElFTkSuQmCC",
    category: "Web",
    tags: ["Next.js", "React", "Motion", "Tailwind CSS", "Shadcn UI"],
    demoUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 5,
    slug: "advance-data-table",
    title: "Advance Data Table",
    description:
      "Built a dynamic and responsive data table using ShadCN and React Table. This solution provides users with an intuitive interface to view, filter, and sort large datasets efficiently. It leverages React’s state management and ShadCN's design components to create a seamless and customizable experience for displaying structured data.",
    image: "/assets/images/projects/advance-data-table.png",
    blurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAALUlEQVR4nAEiAN3/ANzl8P+fprL/wcrS/4SLlP8ASlBa/zg+R/+AiJH/GR8n/4R+FErqoFkpAAAAAElFTkSuQmCC",
    category: "Web",
    tags: ["Next.js", "Shadcn UI", "React Table"],
    demoUrl: null,
    githubUrl: "https://github.com/AmiraliMotahari/advance-data-table",
    featured: false,
  },
  {
    id: 6,
    slug: "rich-text-editor",
    title: "Rich Text Editor",
    description:
      "Built a dynamic and responsive data table using ShadCN and React Table. This solution provides users with an intuitive interface to view, filter, and sort large datasets efficiently. It leverages React’s state management and ShadCN's design components to create a seamless and customizable experience for displaying structured data.",
    image: "/assets/images/projects/rich-text-editor.png",
    blurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJElEQVR4nGPg4eH5z8fH95+XlxeMGbi4uP5zc3P/5+TkBAsAAI/RCRalU6VhAAAAAElFTkSuQmCC",
    category: "Web",
    tags: ["Next.js", "Shadcn UI", "Tiptap", "Novel"],
    demoUrl: "https://rich-text-editor-chi-six.vercel.app/",
    githubUrl: "https://github.com/AmiraliMotahari/rich-text-editor",
    featured: false,
  },
  {
    id: 7,
    slug: "grocery-shop",
    title: "Grocery Shop",
    description:
      "My first project built with Django — a simple grocery management application designed to explore backend development using Python. The app supports item management through an admin dashboard and uses Pillow for image handling. It was a great introduction to working with Django's MVC architecture and database migrations.",
    image: "/assets/images/projects/grocery-shop.png",
    blurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAALUlEQVR4nAEiAN3/AIuTm/8iJy3/lJ+n/yAlLP8AyNHZ/1RaYv/L1eL/anJ6/zpvE80Sb4C1AAAAAElFTkSuQmCC",
    category: "Web",
    tags: ["Django", "HTML", "CSS", "JS", "Bootstrap"],
    demoUrl: null,
    githubUrl: "https://github.com/AmiraliMotahari/grocery",
    featured: false,
  },
  {
    id: 8,
    slug: "oriflame",
    title: "Oriflame",
    description:
      "Created my first fully responsive website using JavaScript (with AJAX), Sass for modular styling, and Swiper.js for interactive sliders. Focused on smooth user experience, modern design, and dynamic content loading.",
    image: "/assets/images/projects/oriflame.png",
    blurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAALUlEQVR4nAEiAN3/AIt4bf+Fd3D/Tgk0/zIAGP8A//jv//nq4P+9h53/q2+M/0EYFNpn3NZZAAAAAElFTkSuQmCC",
    category: "Web",
    tags: ["HTML", "CSS", "JS", "Sass"],
    demoUrl: "https://amiralimotahari.github.io/dynamicoriflame/",
    githubUrl: "https://github.com/AmiraliMotahari/dynamicoriflame",
    featured: false,
  },
  {
    id: 9,
    slug: "digikala",
    title: "Digikala",
    description:
      "Developed my first web project using HTML, CSS, and JavaScript, laying the foundation for my journey into web development.",
    image: "/assets/images/projects/digikala.png",
    blurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAALUlEQVR4nAEiAN3/APj///9HNzL/oJub//b29v8ApHd+/ygAAP97cHH/49fX/37KFgUtWJ01AAAAAElFTkSuQmCC",
    category: "Web",
    tags: ["HTML", "CSS", "JS"],
    demoUrl: "https://amiralimotahari.github.io/mydigikala/",
    githubUrl: "https://github.com/AmiraliMotahari/mydigikala",
    featured: false,
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
