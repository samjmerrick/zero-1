import ImageCard from "components/layout/ImageCard";
import Label from "components/Label";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Projects(props: { projects: ProjectFrontMatter[] }) {
  return (
    <section id="Projects" className=" py-20">
      <div className="flex flex-col space-y-24">
        {props.projects.map((project, i) => (
          <Project project={project} position={i} />
        ))}
      </div>
    </section>
  );
}

function Project(props: { project: ProjectFrontMatter; position: number }) {
  const project = props.project;

  function openUrl(url: string) {
    window.open(url, "_blank");
  }

  return (
    <div key={project.title}>
      <ImageCard
        image={project.image}
        cardLocation={props.position % 2 ? "Right" : "Left"}
      >
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
        <p className="pb-6">{project.summary2}</p>
        <a
          className="group cursor-pointer text-neutral-400 transition-all hover:font-bold hover:text-blue-400"
          onClick={() => openUrl(project.url)}
        >
          View{" "}
          <span className="inline-block transition-transform group-hover:translate-x-3">
            →
          </span>
        </a>
      </ImageCard>
    </div>
  );
}

export default Projects;
