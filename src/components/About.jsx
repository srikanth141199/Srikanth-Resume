import React from 'react'
import SkillTitle from './SkillTitle'
import Code from '../assets/Code1.jpg'

const About = () => {
  return (
    <section className='bg-white ' id='about'>
        <div className="py-20 align-elements grid md:grid-cols-2 gap-2">
          <div className="pl-20">
            <img src={Code} className='w-96 h-80 object-fit' />
          </div>
            <article>
                <SkillTitle text="Code and Coffee"/>
                <p className='text-slate-600 mt-8 leading-loose capitalize justify-center'>
                Front-End developer with 2+ years of experience known for crafting innovative, high-quality web experiences. With a profound commitment to clean code and modular development, I prioritize code quality, ensuring that websites not only look great but also remain efficient and maintainable. Continual improvement drives me forward, enabling me to explore emerging technologies and stay updated with industry trends. I excel in enhancing user engagement through interactive elements. My commitment to data security includes robust measures to protect user data and maintain trust.
                </p>
            </article>
        </div>

    </section>
  )
}

export default About