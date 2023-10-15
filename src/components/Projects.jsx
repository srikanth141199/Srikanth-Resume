import React from 'react'
import {projects} from '../../data'
import SkillTitle from './SkillTitle'
import ProjectCard from './ProjectCard'
import O2CImg from '../assets/projectImg/O2C.jpg'

const Projects = () => {
  return (
    <section className='bg-white' id='projects'>
      <div className='py-16 align-elements'>
        <SkillTitle text = "Work Experience"/>
        <article className='mt-8 py-8 grid md:grid-cols-2 bg-slate-100 rounded-lg shadow-md hover:shadow-xl duration-300'>
          <img src={O2CImg} alt="O2C Img" className='pl-2 object-fit rounded-t-lg h-64' />
          <div className="grid p-8">
            <h2 className="text-xl tracking-wide font-medium uppercase">Order To Cash (O2C)</h2>
            <p className="text-sm text-slate-400">Wipro-Technologies<span className='pl-6'>July 2021 - Present</span> </p>
            <p className="text-slate-700 mt-4 leading-loose text-justify capitalize">Led and actively participated in the end-to-end implementation of the Order to Cash (O2C) project at Wipro, a comprehensive enterprise solution aimed at optimizing and enhancing the entire sales and revenue cycle. Designed and developed a unified, user-friendly application that serves as a one-stop platform for managing the complete order lifecycle, from initial order booking to resource allocation, project details, and invoice generation.</p>
          </div>
        </article>
          <article className="py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project)=>{
                  return<ProjectCard key={project.id} id = {project} {...project}/>
              })}
          </article>
      </div>
    </section>
  )
}

export default Projects