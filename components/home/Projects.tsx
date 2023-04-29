import ImageCard from "components/layout/ImageCard";
import Label from "components/Label";
import FadeIn from "components/FadeIn";
import Contact from "components/home/Contact";

function Projects(props: { projects: ProjectFrontMatter[] }) {
  return (
    <section id="Projects" className=" py-20">
      <div className="flex flex-col items-center space-y-24">
        {props.projects.map((project, i) => (
          <Project project={project} position={i} />
        ))}
        <Contact />
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
      <FadeIn>
        <ImageCard
          image={project.image}
          cardLocation={props.position % 2 ? "Right" : "Left"}
        >
          <h2 className="py-4 text-5xl font-bold text-white">
            {project.title}
          </h2>
          <p className="h-12">
            {project.tags.map((tag) => (
              <Label key={tag}>{tag}</Label>
            ))}
          </p>
          <p className="pb-6 text-neutral-300">{project.summary}</p>

          <a
            className="group cursor-pointer text-neutral-300 transition-all hover:font-semibold hover:text-white"
            onClick={() => openUrl(project.url)}
          >
            View{" "}
            <span className="inline-block transition-transform group-hover:translate-x-3">
              →
            </span>
          </a>
        </ImageCard>
      </FadeIn>
    </div>
  );
}

export default Projects;
