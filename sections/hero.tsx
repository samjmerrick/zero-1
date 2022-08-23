import Typewriter from 'typewriter-effect';
import React from "react";
import Container from '../components/Container';
import ColumnLayout from '../components/ColumnLayout';

function Hero() {
    return (
        <Container>
            <ColumnLayout>
                <div className='flex flex-col space-y-8 pt-20 lg:w-3/5'>
                    <h1 className="text-6xl md:text-6xl ">
                        Digital products from Zero to One
                    </h1>
                    <p className='text-2xl' >
                        We are a team of creative technologists that build early stage digital products.
                    </p>
                </div>

                <img src={'/illustrations/hero.svg'} className='lg:w-2/5' />
            </ColumnLayout>
        </Container>
    )
}

export default Hero