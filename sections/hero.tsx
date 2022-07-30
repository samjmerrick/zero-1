
import Typewriter from 'typewriter-effect';
import ScrollDown from "../components/scrolldown";

import Particles, { IParticlesProps } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import React, { useCallback } from "react";

import Options from "../components/particles.json"
import Container from '../components/Container';

function Hero() {
    // this customizes the component tsParticles installation
    const customInit = useCallback(async (engine: Engine) => {
        // this adds the bundle to tsParticles
        await loadFull(engine);
    }, []);

    return (
        <section id='home' className='w-full h-screen flex items-center -mt-20'>
            <Particles
                // @ts-expect-error
                options={Options}
                init={customInit}
                className='h-full'
            />
            <Container>
                <div className='relative flex flex-col space-y-8 '>

                    <h2 className="text-4xl md:text-5xl ">
                        We help businesses build digital products, from Zero to One
                    </h2>
                    <div className='text-2xl md:text-4xl inline'>
                        <Typewriter
                            options={{
                                strings: [
                                    'We build mobile apps',
                                    'We design responsive websites',
                                    'We create and manage ecommerce stores',
                                    'We conduct user research',
                                ],
                                loop: true,
                                autoStart: true,
                                delay: 20,
                                deleteSpeed: 10,
                            }}
                        />
                    </div>

                </div>
            </Container>
            <ScrollDown label='Scroll to learn more' id='#about' />
        </section>
    )
}

export default Hero