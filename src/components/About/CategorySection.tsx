import { TechCategory } from "../../models/tech";
import Icon from "./Icon";

type CategoryListProps = {
  category: TechCategory;
};

export default function CategorySection ({ category }: CategoryListProps) {
  return(
    <ul className="tech-list">
        {category.list.map(tech => {
            return(
                <li key={tech.name} className="tech-list__item">
                    <Icon tech={tech}/>
                    <div className="tech-list__item__name">{tech.name}</div>
                </li>
            );
        })}
    </ul>
  );
}