import React from "react";
import Image from "next/image";
import { ContactCard } from "../ContactCard";

const contacts = [
    {

        title: 'Linkedin Icon',
        icon: '/icons/linkedin.png',
        link: 'https://www.linkedin.com/in/jorge-sosa-920499201/',

    },
    {

        title: 'Whatsapp Icon',
        icon: '/icons/whatsapp.png',
        link: 'https://wa.me/+59175570209',

    },
    {

        title: 'Github Icon',
        icon: '/icons/github.png',
        link: 'https://github.com/Joregesosa?tab=stars/',

    }
];

export function Footer() {
    return (
        
        <footer id="contacts" className=' bg-slate-900 text-gray-300 text-lg font-medium flex flex-col justify-center md:grid md:grid-cols-2 md:h-24'>

            <div className='flex flex-col justify-center w-fit mx-auto p-7 gap-3 md:flex-row md:gap-x-9'>

                <span className='flex gap-3 items-center'>
                    <Image src={'/icons/llamada.png'} width={40} height={40} alt='phone icon' />
                    (+591) 75570209
                </span>

                <span className='flex gap-3 items-center'>
                    <Image className='object-contain' src={'/icons/mail.png'} width={40} height={40} alt='phone icon' />
                    joregesosa@gmail.com
                </span>

            </div>

            <ul className='flex md:justify-end md:items-center md:px-10 gap-10 justify-around pb-5 md:pb-0'>

                {contacts.map((contact, i) => (

                    <ContactCard
                        key={i}
                        icon={contact.icon}
                        title={contact.title}
                        link={contact.link}
                    />

                ))}

            </ul>

        </footer>
    )
}