import { Parallax } from "react-scroll-parallax"
import Logo from "../components/logo"
import { Page, Content } from "../components/page"
import Typewriter from 'typewriter-effect';
import ScrollDown from "../components/scrolldown";

function Hero() {
    return (
        <Page id='home'>
            <div className='absolute w-screen flex flex-row justify-center'>
                <Parallax speed={25}>
                    <Logo color='#1e293b' type='zero' size={600} />
                </Parallax>
                <Parallax speed={10}>
                    <Logo color='#1e293b' type='one' size={600} />
                </Parallax>
            </div>

            <Content>
                <Parallax speed={10}>
                    <h1 className=" grow">
                        Digital products from Zero to One.
                    </h1>
                </Parallax>
                <Parallax speed={0}>
                    <div className='text-3xl flex flex-row'>
                        We create&nbsp;

                        <Typewriter
                            options={{
                                strings: ['mobile apps', 'responsive websites', 'shopify stores', 'personal portfolios'],
                                loop: true,
                                autoStart: true,
                                delay: 20,
                                deleteSpeed: 20,
                            }}
                        />
                    </div>
                </Parallax>
            </Content>

            <ScrollDown label='Scroll to learn more' id='#about' />
        </Page>
    )
}

export default Hero