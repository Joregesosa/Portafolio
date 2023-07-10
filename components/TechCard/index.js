import React from "react";
import Image from "next/image";

export function TechCard(
    {
        icon,
        title
    }
) {
    return (
        <li className={`w-16 h-16 md:w-20 md:h-20 cursor-pointer relative`}>

            <Image className=' w-10 h-10 mx-auto' src={icon} width={256} height={256} alt={title} />

        </li>
    )
}