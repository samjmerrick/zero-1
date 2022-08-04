import Typewriter from 'typewriter-effect';
import React from "react";
import Container from '../components/Container';
import ColumnLayout from '../components/ColumnLayout';

function Hero() {
    return (
        <Container>
            <ColumnLayout>
                <div className='flex flex-col space-y-8 pt-20 lg:w-1/2'>
                    <h1 className="text-6xl md:text-6xl ">
                        We build digital products
                    </h1>
                    <div className='text-2xl md:text-4xl inline'>
                        <Typewriter
                            options={{
                                strings: [
                                    'Mobile apps',
                                    'Responsive websites',
                                    'E-commerce stores',
                                    'WordPress blogs',
                                    'Landing pages',
                                    'Corporate portals',
                                ],
                                loop: true,
                                autoStart: true,
                                delay: 20,
                                deleteSpeed: 10,
                            }}
                        />
                    </div>

                </div>

                <img src={'/illustrations/hero.svg'} className='lg:w-1/2' />
            </ColumnLayout>
        </Container>
    )
}

export default Hero