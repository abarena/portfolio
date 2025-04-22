import { ProjectCategory } from "../../types/projects";

export const projects: ProjectCategory[] = [
  {
    name: "Capstone Project: Full Stack E-commerce App",
    list: [
      {
        title: "Frontend: Next.js + MUI + Tailwind CSS + Stripe",
        repo: "https://github.com/abarena/shoppy-ui",
      },
      {
        title: "Backend: NestJS + Prisma + PostgreSQL + Socket.io",
        repo: "https://github.com/abarena/shoppy-backend",
      },
    ],
  },
  {
    name: "Capstone Project: Full Stack Post App",
    list: [
      {
        title: "FE & BE: Next.js + Shadcn + Zod + Prisma + MongoDB",
        repo: "https://github.com/abarena/posty",
      },
    ],
  },
  {
    name: "Legacy React apps",
    list: [
      {
        title: "PoC Jest & Enzyme Testing: ",
        repo: "https://github.com/Angel-Barena/jest-enzyme-testing",
        demo: "https://angel-barena.github.io/jest-enzyme-testing/",
      },
      {
        title: "PoC React & Redux Blog: ",
        repo: "https://github.com/Angel-Barena/react-blog",
        demo: "https://angel-barena.github.io/react-blog/",
      },
      {
        title: "PoC Material-UI & JWT auth React client: ",
        repo: "https://github.com/Angel-Barena/jwt-react-client",
        demo: "https://authjwtclient.herokuapp.com/",
      },
      {
        title: "PoC JWT auth server with express.js",
        repo: "https://github.com/Angel-Barena/jwt-express-server",
        demo: "https://authjwtserver.herokuapp.com/",
      },
    ],
  },
];
