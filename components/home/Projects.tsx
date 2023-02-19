import ImageCard from "components/layout/ImageCard";
import Label from "components/Label";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Projects(props: { projects: ProjectFrontMatter[] }) {
  return (
    <section id="Projects" className="space-y-8 py-12">
      <div className="flex flex-col space-y-8">
        {props.projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  );
}

function Project(props: { project: ProjectFrontMatter }) {
  const [hover, setHover] = useState(false);
  const project = props.project;

  return (
    <div
      key={project.title}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <ImageCard image={project.image} url={project.url}>
        <h2 className="py-4 text-5xl font-bold text-neutral-800">
          {project.title}
        </h2>
        <p className="h-12">
          {project.tags.map((tag) => (
            <Label key={tag}>{tag}</Label>
          ))}
        </p>
        <p>{project.summary}</p>
        <br />
        <p>{project.summary2}</p>
        <p
          className={twMerge(
            "pt-4 text-right text-neutral-400 transition-all",
            hover && "font-bold text-neutral-900"
          )}
        >
          View →
        </p>
      </ImageCard>
    </div>
  );
}

export default Projects;
