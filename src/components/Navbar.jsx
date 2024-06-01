import React from 'react';
import logo from '../assets/nakulMantriLogo.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center px-20'>
        <img src={logo} className="mx-2 w-15 h-16" alt='logo' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl px-20'>
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
