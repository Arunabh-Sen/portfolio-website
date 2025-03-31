import React from 'react';
import { motion } from "framer-motion";

const projects = [
    {
        title: "Crypto Tracker",
        description: "A real-time cryptocurrency price tracker that fetches live market data, displays trends, and allows users to track their favorite coins.",
        tech: "React, CoinGecko API, Tailwind CSS",
        link: "https://github.com/Arunabh-Sen/crypto-application"
    },
    {
        title: "Employee Management System",
        description: "A task management system with an admin and employee dashboard. Allows admins to assign, track, and update task statuses.",
        tech: "React, Tailwind CSS, Local Storage",
        link: "https://github.com/Arunabh-Sen/employee-management-system"
    },
    {
        title: "Weather App",
        description: "A simple weather application that provides real-time weather updates, including temperature, humidity, and forecasts for any city.",
        tech: "React, OpenWeather API, Tailwind CSS",
        link: "https://github.com/Arunabh-Sen/weather_application"
    },
    {
        title: "Dice Game",
        description: "A fun and interactive dice rolling game where players roll dice and compete for the highest score.",
        tech: "React, JavaScript, Tailwind CSS",
        link: "https://github.com/Arunabh-Sen/dice_game"
    },
    {
        title: "Spotify Web Clone",
        description: "A fully responsive Spotify web app clone with playback controls, a seekbar, and automatic song transitions.",
        tech: "HTML, CSS, JavaScript, Local Storage",
        link: "https://github.com/Arunabh-Sen/spotify-clone"
    },
    {
        title: "Netflix Clone",
        description: "A front-end Netflix clone designed to replicate the UI of the streaming platform, featuring dynamic content sections and hover animations.",
        tech: "HTML, CSS",
        link: "https://github.com/Arunabh-Sen/netflix-clone"
    }
];

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-12'>
            {/* Heading - Appears on scroll */}
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className='my-12 text-center text-4xl font-semibold'
            >
                Projects <span className='text-neutral-500'>Made</span>
            </motion.h2>

            {/* Cards appear one by one */}
            <div className='flex flex-wrap justify-center gap-8'>
                {projects.map((project, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }} // Delay each card by 0.2s
                        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the card is in view
                        className="relative group w-80"
                    >
                        {/* Animated Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
                                        rounded-lg opacity-0 group-hover:opacity-100 transition-opacity 
                                        animate-spin-fast blur-md"></div>

                        {/* Card Content */}
                        <div className='relative z-10 p-6 border border-neutral-800 rounded-lg bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-lg 
                                        h-72 flex flex-col justify-between'>
                            <h3 className='text-2xl font-semibold'>{project.title}</h3>
                            <p className='text-neutral-400 flex-1 overflow-hidden'>{project.description}</p>
                            <p className='text-sm text-neutral-500'>Tech Stack: {project.tech}</p>
                            <a href={project.link} target='_blank' rel='noopener noreferrer'
                                className='mt-2 inline-block text-cyan-400 hover:text-cyan-300'>
                                View Project →
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
