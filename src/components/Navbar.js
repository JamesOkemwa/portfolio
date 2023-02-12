import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs"
import Logo from '../assets/logo1.png'

const Navbar = () => {
  const [navOpen, setNavOpen ] = useState(false);

  const handleClick = () => setNavOpen(!navOpen)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{width: '50px'}}/>
      </div>

      {/* Menu  */}
      <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

      {/* Hambuger menu  */}
      <div className='md:hidden z-10' onClick={handleClick}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu  */}
        <ul className={navOpen ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'}>
          <li className='py-6 text-4xl '>Home</li>
          <li className='py-6 text-4xl '>About</li>
          <li className='py-6 text-4xl '>Skills</li>
          <li className='py-6 text-4xl '>Work</li>
          <li className='py-6 text-4xl '>Contact</li>
        </ul>

      {/* Social Icons  */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar