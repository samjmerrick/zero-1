// @ts-nocheck

import { Parallax } from "react-scroll-parallax"
import { PageFull, Content } from "../components/page"
import Typewriter from 'typewriter-effect';
import ScrollDown from "../components/scrolldown";

import Particles, { IParticlesProps } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import React, { useCallback } from "react";

import Options from "../components/particles.json"

function Hero() {
    // this customizes the component tsParticles installation
    const customInit = useCallback(async (engine: Engine) => {
        // this adds the bundle to tsParticles
        await loadFull(engine);
    }, []);

    return (
        <PageFull id='home'>
            <Particles
                options={Options}
                init={customInit}
                className='h-full'
            />;
            <Content>
                <Parallax speed={10}>
                    <h1 className=" grow">
                        Digital products from Zero to One.
                    </h1>
                </Parallax>
                <Parallax speed={0}>
                    <div className='text-4xl inline'>
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