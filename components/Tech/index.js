import React from "react";
import Image from "next/image";

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


]

export function Tech() {
    return (
        <section className='flex flex-col p-8 items-center'>

            <h3 className=' text-3xl font-semibold text-blue-950'>

                Tecnologías & Frameworks

            </h3>

            <div className='mt-9 max-w-[340px] grid grid-cols-auto-fit-icons w-fit gap-x-4 md:max-w-6xl gap-y-7'>

                {technologies.map((tech) => (
               
                    <div className={`w-16 h-16 md:w-20 md:h-20 cursor-pointer relative`}>

                        <Image className=' w-10 h-10 mx-auto' src={tech.icon} width={256} height={256} alt={tech.title} />

                    </div>
                ))}





            </div>

        </section>
    )
}