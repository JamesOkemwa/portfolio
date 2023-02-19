import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Docker from '../assets/docker.svg'
import Django from '../assets/django.svg'
import Postgres from '../assets/postgresql.svg'

const Skills = () => {
    let Python = "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
    let JavaScript = "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    let TypeScript = "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"

  return (
    <div name='skills' className="w-full h-screen bg-[#0a192f] text-gray-300">
        {/* Container  */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="Python icon"/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon"/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TypeScript} alt="TypeScript Icon icon"/>
                    <p className='my-4'>TypeScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon"/>
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Django} alt="Django icon"/>
                    <p className='my-4'>Django</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Postgres} alt="Postgres icon"/>
                    <p className='my-4'>Postgres</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Docker} alt="Docker icon"/>
                    <p className='my-4'>Docker</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills