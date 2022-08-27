import Container from "../components/Container"
import ImageCard from "../components/ImageCard";
import Section from "../components/Section";
import Label from "../components/Label";

import Tend from "../public/projects/Tend.jpg"
import StudentBeans from "../public/projects/StudentBeans.jpg"
import HandDeco from "../public/projects/HandDeco.jpg"

function Projects({ allProjectsData }) {
    return (
        <Section id='Projects'>
            <Container>
                <h2 className="text-center">Recent work</h2>
                <div
                    className="flex flex-col space-y-8"
                >
                    {allProjectsData.map(({ title, summary, summary2, tags, url, image }) =>
                        <ImageCard
                            image={image}
                            url={url}
                        >
                            <h2>{title} {tags.map(tag => <Label>{tag}</Label>)}</h2>
                            <p>{summary}</p>
                            <br />
                            <p>{summary2}</p>
                        </ImageCard>
                    )}
                </div>
            </Container>
        </Section >
    )
}

export default Projects
