
import Typewriter from 'typewriter-effect';
import React from "react";

import Container from '../components/Container';
import Section from '../components/Section';

function Hero() {

    return (
        <Section id='home'>
            <Container>
                <div className='relative flex flex-col space-y-8 '>

                    <h2 className="text-6xl md:text-5xl ">
                        We build digital products, from Zero to One.
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
        </Section>
    )
}

export default Hero