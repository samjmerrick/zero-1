import Logo from '../components/logo'
import React from 'react';
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';

if (typeof window !== 'undefined') {

    const menu = document.querySelector('#menu');
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

    if (menu.classList.contains('w-full')) { // if the menu is on mobile
        menu.classList.add('hidden');
    }

    button.addEventListener('click', () => { menu.classList.toggle('hidden'); });
}

function Nav() {
    return (
        <nav className='fixed flex flex-wrap w-screen top-0 z-50 h-50 justify-between items-center bg-slate-800 md:bg-slate-900 p-6'>
            <Link href='/#home'>
                <a className='max-w-[66%]'><Logo /></a>
            </Link>

            <button id='menu-button'>
                <Icon
                    path={mdiMenu}
                    className='h-8 w-8 md:hidden'
                />
            </button>

            <div className="text-lg pt-6 md:pt-0 md:space-x-4 space-y-4 pr-2 md:space-y-0 hidden md:inline w-full md:w-auto " id='menu'>

                <Link href="/#About" className="block md:inline-block text-center">
                    About
                </Link>
                <Link href="/#Projects" className="block md:inline-block text-center">
                    Projects
                </Link>
                <Link href="/#Contact" className="block md:inline-block text-center">
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default Nav