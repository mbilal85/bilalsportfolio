import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiGraphql,
  SiRedux,
  SiGit,
  SiNodedotjs,
} from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },

  {
    id: nanoid(),
    title: "Node.js",
    icon: <SiNodedotjs className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Node.js, building server-side applications and APIs with a focus on scalable and efficient backend development.",
  },

  {
    id: nanoid(),
    title: "Redux",
    icon: <SiRedux className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Redux, managing complex application state with predictable state management and scalable application architecture.",
  },

  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in TypeScript, writing strongly typed and maintainable code for scalable and reliable web applications.",
  },

  {
    id: nanoid(),
    title: "GraphQL",
    icon: <SiGraphql className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in GraphQL, designing efficient APIs and querying data with a focus on flexible and scalable application development.",
  },

  {
    id: nanoid(),
    title: "Git",
    icon: <SiGit className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Git, using version control to manage projects, track changes, collaborate with developers, and maintain organized development workflows.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/mbilal85",
    title: "Projects",
    text: "A selection of web applications built with modern technologies, focusing on clean design, responsive interfaces, and practical functionality.",
  },
];
