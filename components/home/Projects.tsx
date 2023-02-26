import ImageCard from "components/layout/ImageCard";
import Label from "components/Label";
import Button from "components/Button";
import Icon from "@mdi/react";
import { mdiSend } from "@mdi/js";

function Projects(props: { projects: ProjectFrontMatter[] }) {
  return (
    <section id="Projects" className=" py-20">
      <div className="flex flex-col items-center space-y-24">
        {props.projects.map((project, i) => (
          <Project project={project} position={i} />
        ))}
        <div className="flex w-full max-w-2xl flex-col items-center justify-center space-y-6 rounded-lg border-2 border-dashed border-neutral-500 py-14 px-6 text-center">
          <h2 className="text-3xl font-bold">Your Project Here</h2>
          <div className="text-neutral-600">
            <p className="pb-2">
              We're excited to learn about your project, no matter how far along
              you are!
            </p>
            <p>
              Shoot us a message and let's see how we can bring your vision to
              life.
            </p>
          </div>

          <Button onClick={() => window.open("mailto:hello@zero-1.studio")}>
            <Icon className="mr-4 inline-block w-6" path={mdiSend} />
            Get in touch
          </Button>
        </div>
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
