import React from "react";
import Image from "next/image";
import { TechCard } from "../TechCard";

const technologies = [
    {
        title: 'CSS',
        icon: '/icons/css.png'
    },
    {
        title: 'HMTL',
        icon: '/icons/html.png'
    },
    {
        title: 'JS',
        icon: '/icons/js.png'
    },
    {
        title: 'GIT',
        icon: '/icons/git.png'
    },
    {
        title: 'GITHUB',
        icon: '/icons/github.png'
    },
    {
        title: 'MYSQL',
        icon: '/icons/mysql.png'
    },
    {
        title: 'PHP',
        icon: '/icons/php.png'
    },
    {
        title: 'Next js',
        icon: '/icons/nextjs.png'
    },
    {
        title: 'Tailwind',
        icon: '/icons/tailwind.png'
    },


]

export function Tech() {
    return (
        <section id="tech" className='flex flex-col p-8 items-center md:px-6 md:py-24'>

            <h3 className=' text-2xl md:text-3xl font-semibold text-blue-950'>

                Tecnologías & Frameworks

            </h3>

            <ul className='mt-9 max-w-[340px] grid grid-cols-auto-fit-icons w-fit gap-x-4 md:max-w-6xl gap-y-7'>

                {technologies.map((tech, i) => (

                    <TechCard
                        key={i}
                        icon={tech.icon}
                        title={tech.title}
                    />

                ))}

            </ul>

        </section>
    )
}