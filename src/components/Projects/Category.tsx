import { ProjectCategory } from "../../types/projects";
import ProjectDetails from "./ProjectDetails";

type CategoryProps = {
  categoryData: ProjectCategory;
}

export default function Category ({ categoryData }: CategoryProps) {
    return(
    <li key={categoryData.name} className="category__list-item">
        <h2 className="category__list-item__name">{categoryData.name}</h2>
        <ul className="projects__list">
            {categoryData.list.map(entry => <ProjectDetails key={entry.title} projectData={entry} />)}
        </ul>
    </li>
    );
}