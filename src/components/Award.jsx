import React from 'react'
import SkillTitle from './SkillTitle'
import AwardImg from '../assets/projectImg/Award3.jpg'

const Award = () => {
  return (
    <section className=' bg-sky-100' id='award'>
        <div className="align-elements py-16">
            

            <div className="grid md:grid-cols-2 gap-8 py-8 ">
                <img src={AwardImg} alt="Avengers Award" className='w-120 h-80 object-fill rounded-2xl border-4 border-sky-200'/>
                <div >
                    <SkillTitle text="Award"/>
                    <p className='py-8 text-xl text-justify'>Received the prestigious <span className='font-bold text-sky-800'> "Avengers Award"</span> from Wipro in recognition of my outstanding contributions to project development.</p>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Award