import React from "react";

export function AboutMe() {
    return (
        <section className='min-h-[400px] flex flex-col items-center p-6 justify-center '>

            <h3 className=' text-3xl font-semibold text-blue-950'>

                Sobre mi

            </h3>

            <div className='flex items-center justify-center'>

                <div className=' w-80 h-80 hidden md:block opacity-60'>

                    <img
                        src='https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?w=740&t=st=1687899860~exp=1687900460~hmac=d77cd4d2f5f5b2eb8929a3894efdf9b6f59f33329ac8b388fe45c5b457bb0171'
                        width={320} height={320} alt=''
                        className='rounded-full'
                    />

                </div>
                <p className=' md:w-4/5 p-6 text-justify text-xl  text-gray-900 font-medium md:text-2xl md:max-w-[900px] md:before:bg-main-img'>
                    Soy estudiante de la carrera ingeniería en software, me apasiona la tecnología y los retos que conlleva.

                    Mi mayor experiencia ha sido en el área de soporte técnico; sin embargo,  mis años de experiencia en soporte técnico combinados con las habilidades adquiridas en desarrollo de software me hacen un candidato confiable.
                </p>



            </div>

            <button className='w-fit uppercase my-4 py-1 px-4 rounded bg-blue-950 text-gray-300 mt-6 hover:bg-blue-900 hover:text-gray-400'>
                Hire me
            </button>
        </section>
    )
}