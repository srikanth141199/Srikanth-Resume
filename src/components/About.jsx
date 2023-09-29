import aboutImg from '../assets/about.svg'
import React from 'react'
import SkillTitle from './SkillTitle'

const About = () => {
  return (
    <section className='bg-white ' id='about'>
        <div className="py-20 align-elements grid md:grid-cols-2">
            <img src={aboutImg} className='w-full h-64' />
            <article>
                <SkillTitle text="Code and Coffee"/>
                <p className='text-slate-600 mt-8 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam soluta delectus? Assumenda nesciunt blanditiis ad, accusantium commodi dolor tenetur autem soluta cum laudantium illum in perspiciatis similique dolorem nostrum.</p>
            </article>
        </div>

    </section>
  )
}

export default About