import React from 'react'
import {skills,languages,devTools} from '../../data'
import SkillTitle from './SkillTitle'
import SkillCard from './SkillCard'
import { Tooltip } from 'react-tooltip'

const SkillSection = () => {
  return (
    <section className=' py-20 align-elements ' id = 'skills'>
        {/* <SkillTitle text = "Tech Stack"/>
 */}


        <div className="grid md:grid-cols-2 gap-12 ">
          <div>
            <SkillTitle text = "Languages I speak"/>  
            {/* <p>HTML,SASS,CSS,TAILWIND,Git,Javascript,TypeScript</p> */}
            <div className="py-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pr-6">
              {languages.map((lang)=>{
                const {id,icon,title} = lang
                return(
                    <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={title}
                    data-tooltip-place="bottom"
                     className='h-16 w-16'>
                      {icon} <Tooltip id="my-tooltip" />
                      </a>
                )
              })}
            </div>
            
          </div>
          <div>
            <SkillTitle text = "Dev Tools & Libraries"/>  
            {/* <p>React,Angular,Vue,GitHub,BootStrap,CI/CD,Ajax,Redux,FontAwesome,Angular materials</p> */}
            <div className="py-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pr-6">
              {devTools.map((tool)=>{
                const {id,icon,title} = tool
                return(
                    <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={title}
                    data-tooltip-place="bottom"
                     className='h-16 w-16'>
                      {icon} <Tooltip id="my-tooltip" />
                      </a>
                )
              })}
            </div>
          </div>
        </div>
        


        {/* <div class='py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'> 
            {skills.map((skill)=>{
                return(
                    <SkillCard key={skill.id} {...skill}/>
                )
            })}
        </div> */}
    </section>
  )
}

export default SkillSection