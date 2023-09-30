import React from 'react'
import {projects} from '../../data'
import SkillTitle from './SkillTitle'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='bg-white' id='projects'>
      <div className='py-16 align-elements'>
        <SkillTitle text = "Project Space"/>
          <article className="py-8 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project)=>{
                  return<ProjectCard id = {project} {...project}/>
              })}
          </article>
      </div>
    </section>
  )
}

export default Projects