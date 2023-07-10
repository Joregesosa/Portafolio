import React from "react";
import Image from "next/image";

const projects = [
    {
        img: '/projects/deskTopTipCalculator.png',
        title: 'Tip Calculator',
        description: 'Calcula la propina del total de una cuenta y distibulle el total entre la cantidad de personas que pagarn la cuenta.',
        tehc: [
            {
                title: 'html',
                icon: '/icons/html.png'
            },
            {
                title: 'css',
                icon: '/icons/css.png'
            },
            {
                title: 'js',
                icon: '/icons/js.png'
            }]
        ,
        link: 'https://joregesosa.github.io/tipCalculator/'

    },
    {
        img: '/projects/deskTopWeather.png',
        title: 'Weather App',
        description: 'El usuario puede visualizar el clima de su localidad y el pronostico de los proximos 5 dias',
        tehc: [
            {
                title: 'nextjs',
                icon: '/icons/nextjs.png'
            },
            {
                title: 'tailwind',
                icon: '/icons/tailwind.png'
            },
        ],
        link: 'https://weather-app-tan-pi-94.vercel.app/',
    },
    {
        img: '/projects/deskTopWindBnb.png',
        title: 'Windbnb',
        description: 'Servicio de hospedaje, que permite filtrar por localidad y cantidad de invitados',
        tehc: [
            {
                title: 'react',
                icon: '/icons/react.png'
            },
            {
                title: 'css',
                icon: '/icons/css.png'
            },
        ],
        link: 'https://joregesosa.github.io/windbnb_challenge/'

    },

]

export function Projects() {

    return (
        <section className=' min-h-screen md:min-h-0 w-full p-6'>

            <h3 className=' text-3xl font-semibold text-blue-950 max-w-[340px] mx-auto md:max-w-6xl md:px-4'>

                Potafolio

            </h3>

            <h4 className=' text-xl font-semibold text-blue-950 max-w-[340px] mx-auto md:max-w-6xl md:px-4'>
                Recent Projects
            </h4>



            <div className='p-1 mt-4  mx-auto gap-5 flex flex-col md:grid md:grid-cols-auto-fit-cards md:max-w-6xl'>

                {projects.map(project => (
                    <a href={project.link} target="_blank">
                        <div className=' min-w-[340px] max-w-[340px] h-[470px] mx-auto overflow-hidden cursor-pointe shadow-md rounded-2xl pb-4 bg-description-grad'>

                            <Image className='rounded-2xl w-full h-60' src={project.img} alt={project.title} width={800} height={800} />

                            <h3 className='mt-4 text-xl font-semibold text-center  text-blue-950'>
                                {project.title}
                            </h3 >
                            <p className=' text-blue-950 text-justify p-4 italic'>- {project.description}</p>

                            <div className=' grid grid-cols-3 mx-auto gap-y-2'>

                                {project.tehc.map(tech => (
                                    <Image className='mx-auto' src={tech.icon} width={40} height={40} alt='logo tec' />

                                ))}


                            </div>


                        </div>
                    </a>
                ))}

            </div>

        </section>
    )
}