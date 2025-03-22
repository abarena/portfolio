import { ProjectData } from "../../types/projects";

type ProjectDetailsProps = {
  projectData: ProjectData;
};

export default function ProjectDetails({ projectData }: ProjectDetailsProps) {
  const { title, repo, demo } = projectData;
  return (
    <li key={title} className="projects__list-item">
      <h2 className="projects__list-item-title">{title}</h2>
      <div>
        <a className="projects__list-item-repo" href={repo} target="_blank">Repo</a>
        <a className="projects__list-item-demo" href={demo} target="_blank">Demo</a>
      </div>
    </li>
  )
}