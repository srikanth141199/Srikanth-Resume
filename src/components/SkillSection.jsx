import React from 'react'
import {skills} from '../../data'
import SkillTitle from './SkillTitle'
import SkillCard from './SkillCard'

const SkillSection = () => {
  return (
    <section className=' py-20 align-elements ' id = 'skills'>
        <SkillTitle text = "Tech Stack"/>
        <div class='py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'> 
            {skills.map((skill)=>{
                return(
                    <SkillCard key={skill.id} {...skill}/>
                )
            })}
        </div>
    </section>
  )
}

export default SkillSection