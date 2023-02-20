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
    </div>
  )
}

export default ProjectCard