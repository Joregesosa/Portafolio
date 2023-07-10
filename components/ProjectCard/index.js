import React from "react";
import Image from "next/image";


export function ProjectsCard(
    {
        link,
        img,
        title,
        description,
        tech
    }
) {

    return (

        <li className=' min-w-[340px] max-w-[340px] h-[470px] mx-auto overflow-hidden cursor-pointe shadow-md rounded-2xl pb-4 bg-description-grad'>

            <a href={link} target="_blank">
                <Image className='rounded-2xl w-full h-60' src={img} alt={title} width={800} height={800} />

                <h3 className='mt-4 text-xl font-semibold text-center  text-blue-950'>
                    {title}
                </h3 >
                <p className=' text-blue-950 text-justify p-4 italic'>- {description}</p>

                <ul className=' grid grid-cols-3 mx-auto gap-y-2'>

                    {tech.map((tech, i) => (

                        <li key={i}>

                            <Image className='mx-auto' src={tech.icon} width={40} height={40} alt={tech.title} />

                        </li>

                    ))}

                </ul>
            </a>
        </li >

    )
}