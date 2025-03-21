

import Summary from './Summary';
import SkillsLvl from './SkillsLvl';
import TechList from './TechList';

import { skills, summary, techList } from './constants';


export default function About () {
  return (
      <main className="about">
        <h1 className="about-title">About Me</h1>
          <Summary summary={summary}/>      
          <SkillsLvl skills={skills}/>
          <TechList techList={techList}/>       
      </main>
  );
    
}