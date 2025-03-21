import { SkillList } from "../../types/tech";

type SkillsLvlProps = {
  skills: SkillList;
};

export default function SkillsLvl({ skills }: SkillsLvlProps ) {
  return(
      <section className="about-skills">
        <h2 className="about-skills__title">Areas of Expertise</h2>
        <ul className="about-skills__list">
          {skills.map(skill => {
                return (
                    <li key={skill.id} className="about-skills__list-item">
                        {skill.name} 
                        <div className="skillbar--base">
                        <div className="skillbar--lvl" style={{width: skill.lvl}}></div>
                        </div>
                    </li>
                );
            })}
        </ul>
      </section>
  );
}