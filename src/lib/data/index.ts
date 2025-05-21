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
  website: "amiralimotahari.com",
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
    position: "Head Frontend Developer",
    company: "Mavira",
    location: "Tehran, Iran",
    startDate: "Sep 2023",
    endDate: "Oct 2024",
    description:
      "Led the frontend development of Doctorize — a healthcare web platform enabling users to search for medical providers, view profiles, and book appointments based on real-time availability and geolocation. Oversaw the technical roadmap, architecture decisions, and frontend team collaboration to deliver a responsive, scalable experience.",
    achievements: [
      "Designed and implemented the entire frontend architecture for Doctorize, focusing on performance and scalability",
      "Managed a team of 5 frontend developers, introduced development best practices, and conducted regular code reviews",
      "Built a single-page application with features such as infinite scrolling, real-time data updates, and component memoization",
      "Integrated Google Maps APIs for provider discovery based on user location, distance filtering, and interactive map views",
      "Created a custom UI framework and toast notification system for consistent design and reusable logic",
      "Improved overall performance with lazy loading, dynamic imports, and optimized rendering strategies",
      "Collaborated with backend teams to ensure seamless API integration and real-time appointment logic",
    ],
    technologies: [
      // Core Web Technologies
      "JavaScript (ES6+)", // Core language for building dynamic UI logic
      "CSS3", // Styling, custom layouts, animations

      // API Integrations
      "Google Maps JavaScript API", // Interactive maps for provider locations and directions
      "Google Places API", // Location search and autocomplete for addresses
      "Google Geolocation API", // User-based location detection
      "Google Geocoding API", // Translating addresses into latitude/longitude and vice versa

      // Architecture & Patterns
      "Component-based Architecture", // Modular, reusable UI components
      "Custom UI Framework", // Internal library for consistent design and functionality
      "Memoization Techniques", // Optimizing component renders and performance
      "Debouncing and throttling",

      // UX & Performance
      "Infinite Scrolling", // Efficient data fetching for large provider lists
      "Real-time Data Updates", // Live availability and appointment updates
      "Lazy Loading & Code Splitting", // Optimized initial load and faster navigation

      // Tooling & Deployment
      "Version Control (Git)", // Team collaboration and codebase management
      "Responsive Design Principles", // Mobile-first approach for various device sizes
      "Custom Toast Notification System", // Real-time feedback for user actions
    ],
  },
  {
    position: "Fullstack Developer",
    company: "Donya L.L.C.",
    location: "Bethesda, MD",
    startDate: "Oct 2024",
    endDate: "Present",
    description:
      "Designed and developed the company's official website to showcase construction projects, highlight services, and allow potential clients to seamlessly schedule consultations. Focused on performance, accessibility, and a polished user experience tailored to the construction industry.",
    achievements: [
      "Built a portfolio-style website using Next.js and Tailwind CSS to present completed and ongoing projects",
      "Improved SEO and accessibility, resulting in a measurable increase in organic traffic and lead conversions",
      "Developed a modular component system using Shadcn UI and TypeScript for scalable future updates",
      "Connected form submissions and booking logic to backend services using RESTful APIs and Zod for validation",
      "Deployed the site on Vercel for optimized performance and ease of maintenance",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Zod",
      "RESTful API",
    ],
  },
];

export const education: EducationType = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Islamic Azad University: Science and Research Branch",
    location: "Tehran, Iran",
    startDate: "Sep 2019",
    endDate: "Aug 2023",
    description:
      "Focused on the fundamentals of computer architecture, software engineering, and algorithm design. Developed a strong foundation in both hardware and software systems, with hands-on experience in embedded systems, web development, and computer networks.",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Web Programming",
      "Database Systems",
      "Microprocessors & Assembly",
      "Software Engineering",
      "Artificial Intelligence",
      "Object-Oriented Programming (OOP)",
      "Digital Logic Design",
    ],
    achievements: [
      "Graduated with honors (Top 3 of class)",
      "GPA: 18.73 / 20",
      "Designed and developed a full-stack final year project using Django and js",
    ],
  },
  {
    degree: "Master of Artificial Intelligence",
    institution: "Islamic Azad University: Science and Research Branch",
    location: "Tehran, Iran",
    startDate: "Sep 2024",
    endDate: "In Progress",
    description:
      "Currently pursuing a Master's degree focused on advanced topics in Artificial Intelligence, including machine learning, deep learning, data science, and intelligent systems. The program emphasizes both theoretical foundations and hands-on research, preparing students for careers in AI development and research.",
    courses: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Data Mining",
      "Neural Networks",
      "Fuzzy Logic & Expert Systems",
      "Pattern Recognition",
    ],
    achievements: [
      "Engaged in ongoing research around transformer-based models for language understanding",
    ],
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Tehran Institute of Technology",
    location: "Tehran, Iran",
    startDate: "Nov 2022",
    endDate: "Aug 2023",
    description:
      "An intensive, hands-on bootcamp focused on modern frontend and backend web development practices. Gained practical experience in building responsive, accessible, and performant web applications using industry-standard tools and workflows. Emphasized real-world project building, version control, and team collaboration.",
    courses: [
      "Frontend Development",
      "HTML",
      "CSS",
      "JS/TS",
      "Git",
      "Responsive Design",
      "Jquery",
      "Sass",
      "RESTful API Development",
      "Deployment",
    ],
    achievements: [
      "Final score: 100/100",
      "Built and deployed several portfolio-ready web projects",
      "Completed a capstone project: a full-stack e-commerce app",
      "Led a group project simulating agile workflow using Git and GitHub",
      "Integrated third-party APIs to enhance real-world functionality",
      "Received 'Top Performer' recognition by instructors for consistent excellence",
    ],
  },
  {
    degree: "React Bootcamp",
    institution: "Laitec",
    location: "Tehran, Iran",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    description:
      "An advanced React-focused bootcamp designed to deepen understanding of component-based architecture, state management, form handling, and modern front-end tooling. Emphasis was placed on building scalable, maintainable applications using best practices with React and related libraries.",
    courses: [
      "React.js (Hooks, Context, Routing, etc)",
      "Redux.js (Redux Toolkit, Thunk)",
      "React-hook-form",
      "React Router",
      "Component Reusability & Optimization",
      "ReactQuery",
    ],
    achievements: [
      "Final score: 100/100",
      "Developed a fully responsive e-commerce web app using React and Redux",
      "Integrated complex forms and validation flows using react-hook-form",
      "Built multiple projects demonstrating route-based code splitting and lazy loading",
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
    date: new Date("2024-08-11"),
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
    date: new Date("2023-09-01"),
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
    date: new Date("2024-04-16"),
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
    date: new Date("2025-02-11"),
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
    date: new Date("2025-01-18"),
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
    date: new Date("2025-02-09"),
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
    date: new Date("2023-01-27"),
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
    date: new Date("2023-02-12"),
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
    date: new Date("2022-12-27"),
  },
];

export const certifications: CertificationsType = [];

export const languages: LanguagesType = [
  { name: "Persian", proficiency: "Native" },
  { name: "English", proficiency: "Advance" },
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
