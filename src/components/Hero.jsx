import pp1 from '../assets/pp3.jpg'
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className='bg-sky-100 py-24'>
        <div className="align-elements grid md:grid-cols-2 items-center gap-16">
            <article>
                <h1 className='text-7xl font-bold tracking-bolder'>Hi! I'm Srikanth</h1>
                <h3 className='mt-4 text-3xl capitalize text-slate-700 tracking-wide'>Front-End Developer</h3>
                <h3 className='mt-4 text-2xl capitalize text-slate-700 tracking-wide'>Code with Creativity, Design with Precision!</h3>
                <div className=" flex items-left py-4 gap-x-4 ">
                    <a href={`tel:9492622824`} className='flex gap-2 hover:text-sky-600 hover:scale-105 duration-300'><FiPhoneCall className='mt-1'/>9492622824</a>
                    <a target="_blank" href={`mailto:kolleparasrikanth@gmail.com`} className='flex gap-2 hover:text-sky-600 hover:scale-105 duration-300 '><HiOutlineMail className='mt-1  duration-300'/>kolleparasrikanth@gmail.com</a>
                    <a href="https://github.com/srikanth141199"  target="_blank">
                        <FaGithub  className='h-8 w-8 hover:text-sky-600 hover:scale-110 duration-300'/>
                    </a>
                    <a href="https://www.linkedin.com/in/srikanth-kollepara/"  target="_blank">
                        <FaLinkedin  className='h-8 w-8 hover:text-sky-600 hover:scale-110  duration-300'/>
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