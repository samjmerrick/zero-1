import Container from "../components/Container"
import ImageCard from "../components/ImageCard";
import Section from "../components/Section";

function Projects() {
    return (
        <Section id='Projects'>
            <Container>
                <h2 className="text-center">Recent work</h2>
                <ImageCard
                    imagePath='/projects/StudentBeans.jpg'
                    url='https://www.studentbeans.com/blog/uk'
                >
                    <h2>Student Beans Blog</h2>
                    <p>Student Beans is a market leading student discount and rewards platform in the UK.</p>
                    <br />
                    <p>We worked on the development and launch of their new blog, providing expertise on UX and SEO best practices.</p>
                </ImageCard>
                <ImageCard
                    imagePath='/projects/Tend.jpg'
                    url='https://www.thetendapp.com/'
                >
                    <h2>Tend</h2>
                    <p>Tend is a mindfulness and meditation app aimed at a Gen-Z audience.</p>
                </ImageCard>
                <ImageCard
                    imagePath='/projects/HandDeco.jpg'
                    url='https://www.handdeco.com/'
                >
                    <h2>HandDeco</h2>
                    <p>HandDeco is a handmade and custom embroidery start-up operating in Switzerland.</p>
                </ImageCard>
                <ImageCard
                    imagePath='/VirginRed.png'
                    url='https://www.virgin.com/virgin-red'
                >
                    <h2>Virgin Red</h2>
                    <p>Virgin Red is a loyalty and rewards offering for customers of the Virgin Group.</p>
                </ImageCard>

            </Container>
        </Section >
    )
}

export default Projects
