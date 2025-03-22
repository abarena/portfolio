import { BrowserRouter, Routes, Route } from "react-router";

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faCodepen } from "@fortawesome/free-brands-svg-icons/faCodepen";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import { faSass } from "@fortawesome/free-brands-svg-icons/faSass";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons/faPhoneSquare";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons/faEnvelopeSquare";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";


library.add(
  faLinkedin,
  faGithub,
  faCodepen,
  faPhoneSquare,
  faEnvelopeSquare,
  faCog,
  faExternalLinkAlt,
  faHtml5,
  faReact,
  faCss3Alt,
  faSass,
  faJs,
  faNodeJs,
  faGit
);


export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="portfolio" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
