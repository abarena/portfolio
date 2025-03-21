import { ProjectCategory } from "../../types/projects";

export const projects: ProjectCategory[] = [
    {
      name: "React examples",
      list: [
          {
              title:"PoC Jest & Enzyme Testing: ",
              repo: "https://github.com/Angel-Barena/jest-enzyme-testing", 
              demo: "https://angel-barena.github.io/jest-enzyme-testing/"
          },
          {
              title:"PoC React & Redux Blog: ",
              repo: "https://github.com/Angel-Barena/react-blog", 
              demo: "https://angel-barena.github.io/react-blog/"
          },
          {
              title:"PoC Material-UI & JWT auth React client: ",
              repo: "https://github.com/Angel-Barena/jwt-react-client", 
              demo: "https://authjwtclient.herokuapp.com/"
          },
          {
              title:"PoC JWT auth server with express.js",
              repo: "https://github.com/Angel-Barena/jwt-express-server",
              demo: "https://authjwtserver.herokuapp.com/"
          }
      ]
  }
]