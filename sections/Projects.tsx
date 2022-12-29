import ImageCard from "../components/ImageCard";
import Section from "../components/Section";
import Label from "../components/Label";

function Projects({ allProjectsData }) {
  return (
    <Section id="Projects">
      <h2 className="py-4 text-center text-4xl font-bold">Recent Projects</h2>
      <div className="flex flex-col space-y-8">
        {allProjectsData.map(
          ({ title, summary, summary2, tags, url, image }) => (
            <ImageCard image={image} url={url}>
              <h2 className="py-4 text-4xl font-bold">{title}</h2>
              <p className="h-12">
                {tags.map((tag) => (
                  <Label>{tag}</Label>
                ))}
              </p>
              <p>{summary}</p>
              <br />
              <p>{summary2}</p>
            </ImageCard>
          )
        )}
      </div>
    </Section>
  );
}

export default Projects;
