import React from 'react'
import ProjectCard from './ProjectCard'

const Work = () => {
    let projects = [
        {
            title: 'Gym App',
            description: 'An application for searching and demonstrating various gym exercises',
            tags: ['React', 'Python', 'JavaScript'],
            image: "",
            githubLink: "",
            demoLink: ""
        },
        {
            title: 'Gym App',
            description: 'An application for searching and demonstrating various gym exercises',
            tags: ['React', 'Python', 'JavaScript'],
            image: "",
            githubLink: "",
            demoLink: ""
        },
        {
            title: 'Gym App',
            description: 'An application for searching and demonstrating various gym exercises',
            tags: ['React', 'Python', 'JavaScript'],
            image: "",
            githubLink: "",
            demoLink: ""
        },
        {
            title: 'Gym App',
            description: 'An application for searching and demonstrating various gym exercises',
            tags: ['React', 'Python', 'JavaScript'],
            image: "",
            githubLink: "",
            demoLink: ""
        },
        {
            title: 'Gym App',
            description: 'An application for searching and demonstrating various gym exercises',
            tags: ['React', 'Python', 'JavaScript'],
            image: "",
            githubLink: "",
            demoLink: ""
        },
        {
            title: 'Gym App',
            description: 'An application for searching and demonstrating various gym exercises',
            tags: ['React', 'Python', 'JavaScript'],
            image: "",
            githubLink: "",
            demoLink: ""
        },
    ]

  return (
    <div name='work' className='w-full h-auto text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            {/* Grid Container  */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Card Item  */}
                {projects.map((project, index) => {
                    return (
                        <ProjectCard project={project}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Work