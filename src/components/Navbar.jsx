import React from 'react'
import { links } from '../../data'
import {TfiDownload} from 'react-icons/tfi'
import Resume from '../assets/Resume/Srikanth_Resume.pdf'

const Navbar = () => {
    return (
        <nav className='bg-sky-100'>
            <div className='align-elements py-4 flex flex-col justify-between md:flex-row md:gap-x-16 md:items-center md:py-8' >
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
                <div className='flex'>
                    <button className="button-33 " role="button"><a href={Resume} className='flex gap-2' download='Srikanth_Resume.pdf'>Download CV<TfiDownload className='mt-1'/></a></button>

                    {/* <div className="menu">
                        <div className="toggle">
                            <ion-icon name="share-social"></ion-icon>
                        </div>
                        <li style="-i:0;--clr:#1877f2">
                            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                        </li>
                    </div> */}

                    {/* <div className="menu">
                        <div className="toggle">
                            <ion-icon name="share-social"></ion-icon>
                        </div>
                        <ul>
                            <li style={{ "--i": 0, "--clr": "#1877f2" }}>
                            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                            </li>
                        </ul>
                    </div> */}

                    {/* <div className="menu">
                    <div className="toggle">
                        <ion-icon name="share-social"></ion-icon>
                    </div>
                    <ul>
                        <li style={{ "--i": 0, "--clr": "#1877f2" }}>
                        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                        </li>
                        <li style={{ "--i": 1, "--clr": "#25d366" }}>
                        <a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a>
                        </li>
                        <li style={{ "--i": 2, "--clr": "#1da1f2" }}>
                        <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                        </li>
                        <li style={{ "--i": 3, "--clr": "#FF5733" }}>
                        <a href="#"><ion-icon name="logo-reddit"></ion-icon></a>
                        </li>
                        <li style={{ "--i": 4, "--clr": "#0a66c2" }}>
                        <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
                        </li>
                        <li style={{ "--i": 5, "--clr": "#c32aa3" }}>
                        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                        </li>
                        <li style={{ "--i": 6, "--clr": "#1b1e21" }}>
                        <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                        </li>
                        <li style={{ "--i": 7, "--clr": "#ff0000" }}>
                        <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
                        </li>
                    </ul>
                    </div> */}

                </div>
            </div>
        </nav>
    )
}

export default Navbar