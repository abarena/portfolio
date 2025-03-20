import { TechCategory } from "../../models/tech";
import Icon from "./Icon";
import SpriteIcon from "./SpriteIcon";

import { iconsArr } from "./constants";

type CategoryListProps = {
  category: TechCategory;
};

export default function CategorySection ({ category }: CategoryListProps) {
  return(
    <ul className="tech-list">
        {category.list.map(tech => {
            const icon =<Icon tech={tech}/>
            const spriteIcon = <SpriteIcon 
              svgIcon={
                iconsArr.find(sprite => sprite.id==`${tech.icon}-usage`)
              }
            />
            return(
                <li key={tech.name} className="tech-list__item">
                    {tech.type=='sprite'? spriteIcon : icon}
                    <div className="tech-list__item__name">{tech.name}</div>
                </li>
            );
        })}
    </ul>
  );
}