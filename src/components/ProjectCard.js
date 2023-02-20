import React from 'react'
import dumbbell from '../assets/dumbbell.jpg'

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md shadow-[#040c16] hover:scale-105 duration-500">
        <img className="w-full" src={dumbbell} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.title}</div>
            <p className="text-gray-300 text-base">
                {project.description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {project.tags.map((tag, index) => {
                return (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                )
            })}
        </div>
        <div className="flex justify-between px-6 pt-4 pb-2">
            <a href={project.githubLink}>
                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Github</button>
            </a>
            <a href={project.demoLink}>
                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Demo</button>
            </a>
        </div>
    </div>
  )
}

export default ProjectCard