import React from 'react';
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import Container from './Container';

if (typeof window !== 'undefined') {

    const mobilemenu = document.querySelector('#mobile-menu');
    const button = document.querySelector('#menu-button');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: screen.width > 768 ? 'center' : 'start',
            });
        });
    });

    button.addEventListener('click', () => { mobilemenu.classList.toggle('hidden'); });
}

function Nav() {
    return (
        <nav className='w-full top-0 z-50 py-5'>
            <Container>
                <div className='flex justify-between items-center'>
                    <Link href='/#home'>
                        <a className='w-72'>
                            <img src={"/logos/logo_inline.svg"} />
                        </a>
                    </Link>

                    <button id='menu-button'>
                        <Icon
                            path={mdiMenu}
                            className='h-8 w-8 md:hidden'
                            color='white'
                        />
                    </button>

                    <div className="
                            pr-2 
                            pt-6 
                            md:pt-0 
                            hidden 
                            md:flex
                            flex-row
                            text-lg 
                            space-x-4"
                        id='menu'>

                        <Link href="/#Projects" className="block md:inline-block text-center">
                            Projects
                        </Link>
                        <Link href="/#Contact" className="block md:inline-block text-center">
                            Contact
                        </Link>
                    </div>

                </div>

                <div
                    id="mobile-menu" className="hidden md:hidden bg-slate-800 rounded-md text-lg">
                    <div className='
                        flex
                        flex-col
                        w-full
                        text-center
                        space-y-4
                        py-5
                    '
                    >
                        <Link href="/#Projects" className="block md:inline-block text-center">
                            Projects
                        </Link>
                        <Link href="/#Contact" className="block md:inline-block text-center">
                            Contact
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Nav