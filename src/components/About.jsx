import React from 'react'
import SkillTitle from './SkillTitle'
import codeCoffee1 from '../assets/codeCoffee1.jpg'
import Code from '../assets/Code1.jpg'

const About = () => {
  return (
    <section className='bg-white ' id='about'>
        <div className="py-20 align-elements grid md:grid-cols-2 gap-2">
          <div className="pl-20">
            <img src={codeCoffee1} className='w-96 h-80 object-fit' />
          </div>
            <article>
                <SkillTitle text="Code and Coffee"/>
                <p className='text-slate-600 mt-8 leading-loose capitalize'>
                I'm a Front-End developer known for crafting innovative, high-quality web experiences. With a profound commitment to clean code and modular development, I prioritize code quality, ensuring that websites not only look great but also remain efficient and maintainable. Continual improvement drives me forward, enabling me to explore emerging technologies and stay updated with industry trends. I excel in enhancing user engagement through interactive elements. My commitment to data security includes robust measures to protect user data and maintain trust.
                </p>
            </article>
        </div>

    </section>
  )
}

export default About