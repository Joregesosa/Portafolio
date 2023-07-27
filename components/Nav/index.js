'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-slate-900 flex justify-center h-20 items-center fixed">

            <nav className="flex  w-full items-center   justify-between px-8 md:justify-center gap-x-10">

                <Link href="home" className="w-20 h-20 flex">

                    <Image className=' object-scale-down' width='50' height='50' src={'/icons/logo.png'} alt='logo' />

                </Link>

                <ul className={` flex-col absolute top-20 left-0 w-full md:bg-transparent items-end pr-10 text-gray-300 gap-y-4   py-6 md:flex-row md:p-0  md:static  md:w-fit md:gap-x-10  ${isMenuOpen ? 'flex' : 'hidden'} md:flex font-medium bg-blue-950 shadow-lg`}>

                    <Link href="#home" className="-m-1.5 p-1.5 hover:text-gray-400">

                        HOME

                    </Link>

                    <Link href="#about" className="-m-1.5 p-1.5 hover:text-gray-400">

                        ABOUT ME

                    </Link>

                    <Link href="#projects" className="-m-1.5 p-1.5 hover:text-gray-400">

                        PROJECTS

                    </Link>

                    <Link href="#tech" className="-m-1.5 p-1.5 hover:text-gray-400">

                        TEHCNOLOGIES

                    </Link>

                    <a href="#contacts" className="-m-1.5 p-1.5 hover:text-gray-400">

                        CONTACTS

                    </a>


                </ul>

                <span onClick={() => { setIsMenuOpen(!isMenuOpen) }} className=' md:hidden  cursor-pointer'>
                    <Image src='/menu.svg' width='40' height='40' alt='' />
                </span>

            </nav>


        </header>
    )
}