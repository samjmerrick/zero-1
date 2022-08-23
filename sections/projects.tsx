import Container from "../components/Container"
import ImageCard from "../components/ImageCard";
import Section from "../components/Section";
import Label from "../components/Label";

import Tend from "../public/projects/Tend.jpg"
import StudentBeans from "../public/projects/StudentBeans.jpg"
import HandDeco from "../public/projects/HandDeco.jpg"

function Projects() {
    return (
        <Section id='Projects'>
            <Container>
                <h2 className="text-center">Recent work</h2>
                <div
                    className="flex flex-col space-y-8"
                >
                    <ImageCard
                        image={Tend}
                        url='https://www.thetendapp.com/'
                    >
                        <h2>Tend <Label>Active Now</Label></h2>
                        <p>Tend is a mindfulness and meditation app, backed by social media influencer Jade Bowler (@unjadedjade).</p>
                        <br />
                        <p>We are currently building the Tend mobile apps (iOS / Android) and landing pages.</p>
                    </ImageCard>
                    <ImageCard
                        image={StudentBeans}
                        url='https://www.studentbeans.com/blog/uk'
                    >
                        <h2>Student Beans Blog</h2>
                        <p>Student Beans is a market leading student discount and rewards platform in the UK.</p>
                        <br />
                        <p>We developed and launched their new blog, which grew their SEO traffic by ~200% year-on-year.</p>
                    </ImageCard>
                    <ImageCard
                        image={HandDeco}
                        url='https://www.handdeco.com/'
                    >
                        <h2>HandDeco</h2>
                        <p>HandDeco is a handmade and custom embroidery start-up operating in Switzerland.</p>
                        <br />
                        <p>We overhauled their e-commerce store. The new site has seen sales increase by ~150%</p>
                    </ImageCard>
                </div>
            </Container>
        </Section >
    )
}

export default Projects
