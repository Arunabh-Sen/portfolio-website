import React from 'react';
import logo from "../assets/asLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className='mb-12 flex items-center justify-between py-4 px-4 lg:px-6'>
            <div className='flex items-center'>
                <img className='w-12 lg:w-16' src={logo} alt="logo" />
            </div>
            <div className='flex items-center gap-3 lg:gap-4 text-xl lg:text-2xl'>
                <a href="https://www.linkedin.com/in/arunabh-sen-a0622b29b" 
                   target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-cyan-400 transition-transform hover:scale-110" />
                </a>
                <a href="https://github.com/Arunabh-Sen" 
                   target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-cyan-400 transition-transform hover:scale-110" />
                </a>
                <a href="https://www.instagram.com/arun_xabh/?__pwa=1" 
                   target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-cyan-400 transition-transform hover:scale-110" />
                </a>
                <a href="https://x.com/arux_nabh?t=NITzYHHGFQ8UESS8S99czw&s=08" 
                   target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter className="hover:text-cyan-400 transition-transform hover:scale-110" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
