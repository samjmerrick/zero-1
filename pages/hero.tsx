import { Parallax } from "react-scroll-parallax"
import { PageFull, Content } from "../components/page"
import Typewriter from 'typewriter-effect';
import ScrollDown from "../components/scrolldown";

function Hero() {
    return (
        <PageFull id='home'>
            <Content>
                <Parallax speed={10}>
                    <h1 className=" grow">
                        Digital products from Zero to One.
                    </h1>
                </Parallax>
                <Parallax speed={0}>
                    <div className='text-3xl inline'>
                        <Typewriter
                            options={{
                                strings: ['We build mobile apps', 'We design responsive websites', 'We create and manage ecommerce stores', 'We conduct user research', 'We shape the future'],
                                loop: true,
                                autoStart: true,
                                delay: 20,
                                deleteSpeed: 10,
                            }}
                        />
                    </div>
                </Parallax>
            </Content>
            <ScrollDown label='Scroll to learn more' id='#about' />
        </PageFull>
    )
}

export default Hero