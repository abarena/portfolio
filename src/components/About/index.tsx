import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Summary from './Summary';
import SkillsLvl from './SkillsLvl';
import TechList from './TechList';

import { skills, summary, techList } from './constants';


export default function About() {
  const nodeRef = useRef(null);
  return (
    <CSSTransition nodeRef={nodeRef} in={true} appear={true} timeout={300} classNames="fade">
      <main ref={nodeRef} className="about">
        <h1 className="about-title">About Me</h1>
        <Summary summary={summary} />
        <SkillsLvl skills={skills} />
        <TechList techList={techList} />
      </main>
    </CSSTransition>
  );

}