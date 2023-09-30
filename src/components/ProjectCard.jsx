import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectCard = ({url, img, github, title, text}) => {
  return (
    <article className='bg-slate-100 rounded-lg shadow-md block hover:shadow-xl duration-300'>
        <img src={img} alt={title} className='w-full object-cover rounded-t-lg h-64' />
        <div className="capitalize p-8">
            <h2 className="text-xl tracking-wide font-medium ">{title}</h2>
            <p className="text-slate-700 mt-4 leading-loose">{text}</p>
            <div className="flex gap-4 mt-4">
                <a href={url}>
                <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                </a>
                <a href={github}>
                <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                </a>
            </div>
        </div>
    </article>
  )
}

export default ProjectCard