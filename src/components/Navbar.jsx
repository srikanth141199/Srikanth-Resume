import React from 'react'
import { links } from '../../data'
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';


const Navbar = () => {
    return (
        <nav className='bg-sky-100'>
            <div className='align-elements py-4 flex flex-col justify-between sm:flex-row sm:gap-x-16 sm:items-center sm:py-8' >
                <h2 className="text-5xl font-bold text-sky-800 capitalize">P<span className='text-sky-600 text-3xl'>ORTFOLIO</span>
                </h2>
                <div className="flex gap-4">
                    {links.map((link) => {
                        const { id, href, text } = link
                        return (
                            <a className='capitalize text-lg tracking-wide hover:text-sky-600 duration-300' key={id} href={href}>{text}</a>
                        )
                    })}
                </div>
                <div className="grid justify-end lg:grid-cols-2">
                    <a href={`tel:9492622824`} className='flex gap-2 md:ml-16'><FiPhoneCall className='mt-1'/>9492622824</a>
                    <a target="_blank" href={`mailto:kolleparasrikanth@gmail.com`} className='flex gap-2'><HiOutlineMail className='mt-1'/>kolleparasrikanth@gmail.com</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar