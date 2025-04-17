import { SkillList, TechCategoryList } from "../../types/tech";

export const summary = [
  `I’ve been a software engineer for a few years now, mostly working as Frontend Developer from junior to senior roles but, I also have experience in backend development.`,
  `Most of my experience has been focused buidling responsive web applications for companies in the healthcare and fintech sectors. I have experience working with various technologies, including HTML, CSS, JavaScript/Typescript, React, Next.js, and Node.js. I also have experience with version control systems like Git and CI/CD tools like Github Actions.`,
  `I have a passion for learning new technologies and keeping up with the latest trends in web development. I enjoy working in a collaborative environment and thrive on challenges that allow me to grow as a developer.`,
  `I have a strong understanding of web development principles and best practices, and I am always looking for ways to improve my skills and knowledge. I am comfortable working in an Agile environment and have experience with various project management tools like Jira.`,
  `I feel mostly comfortable with TypesScript and React, but I’m always open to learning new technologies.`,
  `When I'm not coding I'm usally hiking or rock climbing.`,
];

export const skills: SkillList = [
  { id: 0, lvl: "90%", name: "Frontend - ReactJS" },
  { id: 1, lvl: "70%", name: "Backend - NodeJS" },
];

export const techList: TechCategoryList = [
  {
    name: "HTML",
    list: [
      {
        name: "HTML5",
        type: "fa",
        color: "#e44d26",
        iconName: "html5",
      },
    ],
  },
  {
    name: "CSS",
    list: [
      {
        name: "CSS3",
        type: "fa",
        color: "#146eb0",
        iconName: "css3-alt",
      },
      {
        name: "Sass/SCSS",
        type: "fa",
        color: "#c66394",
        iconName: "sass",
      },
      {
        name: "Tailwind",
        type: "sprite",
        color: "#38bdf8",
        sprite: "tailwind",
      },
    ],
  },
  {
    name: "JS/TS",
    list: [
      {
        name: "Javascript",
        type: "fa",
        color: "#e8d44d",
        iconName: "js",
      },
      {
        name: "Typescript",
        type: "sprite",
        color: "#007acc",
        sprite: "typescript",
      },
      {
        name: "React.js",
        type: "fa",
        color: "#61dbfb",
        iconName: "react",
      },
      {
        name: "Next.js",
        type: "sprite",
        color: "#000",
        sprite: "nextjs",
      },
      {
        name: "Redux.js",
        type: "sprite",
        color: "#764abc",
        sprite: "redux",
      },
      {
        name: "MobX.js",
        type: "sprite",
        sprite: "mobx",
      },
      {
        name: "MaterialUI",
        type: "sprite",
        sprite: "mui",
      },
    ],
  },
  {
    name: "NodeJS",
    list: [
      {
        name: "NodeJS",
        type: "fa",
        color: "#80bc02",
        iconName: "node-js",
      },
      {
        name: "Express.js",
        type: "sprite",
        sprite: "express",
      },
      {
        name: "NestJS",
        type: "sprite",
        sprite: "nestjs",
      },
      {
        name: "Socket.io",
        type: "sprite",
        sprite: "socketio",
      },
    ],
  },
  {
    name: "Build tools",
    list: [
      {
        name: "Vite",
        type: "sprite",
        sprite: "vite",
      },
      {
        name: "Webpack",
        type: "sprite",
        sprite: "webpack",
      },
      {
        name: "Babel",
        type: "sprite",
        sprite: "babel",
      },
      {
        name: "ESLint",
        type: "sprite",
        sprite: "eslint",
      },
    ],
  },
  {
    name: "Database",
    list: [
      {
        name: "PostgreSQL",
        type: "sprite",
        sprite: "postgres",
      },
      {
        name: "MongoDB",
        type: "sprite",
        sprite: "mongodb",
      },
    ],
  },
  {
    name: "Testing",
    list: [
      {
        name: "Jest",
        type: "sprite",
        sprite: "jest",
      },
    ],
  },
  {
    name: "CI/CD",
    list: [
      {
        name: "Github Actions",
        type: "sprite",
        sprite: "githubactions",
      },
      {
        name: "Docker",
        type: "sprite",
        sprite: "docker",
      },
    ],
  },
  {
    name: "Version Control",
    list: [
      {
        name: "Git",
        type: "sprite",
        sprite: "git",
      },
      {
        name: "GitHub",
        type: "sprite",
        sprite: "github",
      },
      {
        name: "GitLab",
        type: "sprite",
        sprite: "gitlab",
      },
      {
        name: "Bitbucket",
        type: "sprite",
        sprite: "bitbucket",
      },
    ],
  },
  {
    name: "Other",
    list: [
      {
        name: "GraphQL",
        type: "sprite",
        sprite: "graphql",
      },
      {
        name: "AWS",
        type: "sprite",
        sprite: "aws",
      },
    ],
  },
];
