import Link from 'next/link'
import Image from 'next/image'
import Logo from '../components/logo'



function Nav() {
    return (
        <nav className="fixed flex flex-wrap w-screen top-0 z-50 h-50 justify-between bg-slate-900 p-6">
            <a href='#'>
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