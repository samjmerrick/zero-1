import Logo from '../components/logo'
import React from 'react';

if (typeof window !== 'undefined') {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function Nav() {
    return (
        <nav className="fixed flex flex-wrap w-screen top-0 z-50 h-50 justify-between bg-slate-900 p-6">
            <a href='#home'>
                <Logo />
            </a>
            <div className="text-sm space-x-4 ">
                <a href="#about" className="block lg:inline-block">
                    About
                </a>
                <a href="#projects" className="block lg:inline-block">
                    Projects
                </a>
                <a href="#contact" className="block lg:inline-block">
                    Contact
                </a>
            </div>

        </nav>
    )
}

export default Nav