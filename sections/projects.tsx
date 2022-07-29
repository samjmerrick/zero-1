
import Carousel from "../components/Carousel";
import ImageCard from "../components/ImageCard";
import Section from "../components/Section";

function Projects() {
    return (
        <Section id='Projects' title='Showcase'>
            <Carousel>
                <ImageCard
                    title='Tend'
                    caption='Tend is a mindfulness and meditation app aimed at a Gen-Z audience'
                    imagePath='/Tend.png'
                    url='https://www.thetendapp.com/'
                />
                <ImageCard
                    title='HandDeco'
                    caption='HandDeco is a handmade and custom embroidery start-up operating in Switzerland.'
                    imagePath='/HandDeco.jpeg'
                    url='https://www.handdeco.com/'
                />
                <ImageCard
                    title='Virgin Red'
                    caption='Virgin Red is a loyalty and rewards offering for customers of the Virgin Group.'
                    imagePath='/VirginRed.png'
                    url='https://www.virgin.com/virgin-red'
                />
                <ImageCard
                    title='Student Beans'
                    caption='Student Beans is a market leading student discount and rewards platform.'
                    imagePath='/StudentBeans.png'
                    url='https://www.studentbeans.com/uk'
                />
            </Carousel>
        </Section>
    )
}

export default Projects
