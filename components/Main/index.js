import React from "react";
import Image from "next/image";
export function Main(){
    return(
        <main className='h-[calc(100vh-80px)] bg-main-img bg-no-repeat bg-cover flex flex-col items-center overflow-hidden m-auto md:flex-row md:h-[calc(80vh-80px)] md:min-h-[660px] md:min-w-[960px]'>

        <div className=' w-full h-[calc(50vh-80px)] flex flex-col items-center md:items-end justify-center md:h-full'>

            <div className='flex flex-col w-full px-2 pt-2 md:w-[32rem] justify-center'>

                <span className=' text-2xl text-cyan-50 my-2 md:text-3xl'>
                    Developer
                </span>

                <p className='text-blue-950 text-5xl font-semibold md:text-6xl w-96  md:w-[460px] ' >
                    <span className=' text-slate-50'>Hola, </span>
                    Soy Jorge Sosa
                </p>

                <p className=' text-base capitalize md:w-fit italic font-bold md:text-xl'>
                    Junior Front-End Developer
                </p>

                <button className='w-fit uppercase my-4 py-2 px-4 rounded bg-blue-950 text-gray-300 mt-6 hover:bg-blue-900'>
                    Download CV
                </button>

            </div>


        </div>

        <div className=' h-[50vh] w-screen overflow-hidden md:h-full flex items-end justify-center '>

            <Image src='/Perfil2.png' width='600' height='600' className=' md:max-w-[500px] md:min-w-[460px] h-[95%] object-contain md:h-fit' alt='Personal img' />

        </div>

    </main>
    )
}