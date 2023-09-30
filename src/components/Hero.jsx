import pp1 from '../assets/pp1.jpg'
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import {SiNetlify} from 'react-icons/si'
import React from 'react'

const Hero = () => {
  return (
    <section className='bg-sky-100 py-24'>
        <div className="align-elements grid md:grid-cols-2 items-center gap-16">
            <article>
                <h1 className='text-7xl font-bold tracking-bolder'>I'm Srikanth</h1>
                <h3 className='mt-4 text-3xl capitalize text-slate-700 tracking-wide'>Front-End Developer</h3>
                <h3 className='mt-4 text-2xl capitalize text-slate-700 tracking-wide'>Turning Ideas Into Interactive Reality</h3>
                <div className='flex gap-x-4 mt-4'>
                    <a href="#">
                        <FaGithub  className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
                    </a>
                    <a href="#">
                        <FaLinkedin  className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
                    </a>
                    <a href="#" >
                        <SiNetlify  className='h-8 w-8 text-slate-500 hover:text-black duration-300 '/>
                    </a>
                </div>
            </article>
            <article className='hidden md:block'>
                <div className='img-con'>
                    <img className='img1'src={pp1} alt="Srikanth Img" />
                </div>
            </article>
        </div>
    </section>
  )
}

export default Hero