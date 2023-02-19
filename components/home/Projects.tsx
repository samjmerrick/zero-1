import ImageCard from "components/layout/ImageCard";
import Label from "components/Label";

function Projects({ projects }) {
  return (
    <section id="Projects" className="space-y-8 py-12">
      <div className="flex flex-col space-y-8">
        {projects.map(({ title, summary, summary2, tags, url, image }) => (
          <ImageCard key={title} image={image} url={url}>
            <h2 className="py-4 text-5xl font-bold text-neutral-800">
              {title}
            </h2>
            <p className="h-12">
              {tags.map((tag) => (
                <Label key={tag}>{tag}</Label>
              ))}
            </p>
            <p>{summary}</p>
            <br />
            <p>{summary2}</p>
          </ImageCard>
        ))}
      </div>
    </section>
  );
}

export default Projects;
