import React from "react";
import Image from "next/image";
export function ContactCard(
    {
        icon,
        title, 
        link
    }
) {
    return (

        <li>

            <a href={link} target="_blank">

                <Image className='object-contain' src={icon} width={25} height={25} alt={title} />

            </a>

        </li>
    )
}