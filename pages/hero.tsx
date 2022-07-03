import { Parallax } from "react-scroll-parallax"
import Logo from "../components/logo"
import { Page, Content } from "../components/page"
import Typewriter from 'typewriter-effect';
import ScrollDown from "../components/scrolldown";

function Hero() {
    return (
        <Page id='home'>
            <div className='absolute flex flex-row h-4/6 w-screen  justify-center '>
                <Logo color='#1e293b' type='zero' />
                <Logo color='#1e293b' type='one' />
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