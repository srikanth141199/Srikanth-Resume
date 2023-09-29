import React from 'react'

const SkillTitle = ({text}) => {
  return (
    <div className='border-b-2 border-sky-200 pb-5'>
        <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
    </div>
  )
}

export default SkillTitle