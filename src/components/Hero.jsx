import React from 'react';
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-24 flex justify-center'>
            <div className='text-center max-w-3xl'>
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-5xl lg:text-8xl font-thin tracking-tight mt-6 lg:mt-16'>
                    Arunabh Sen
                </motion.h1>
                <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent mt-6 block'>
                    Full Stack Developer
                </motion.span>
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }} // Fixed `x: 0` to `y: 0`
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className='my-4 px-6 font-light tracking-tighter'>
                    I am Arunabh Sen, a passionate Software Developer with experience in building scalable and efficient web applications. With a strong foundation in both front-end and back-end technologies, I specialize in crafting seamless user experiences and robust system architectures. My expertise spans across modern frameworks, databases, and cloud solutions, enabling me to create high-performance digital solutions.
                </motion.p>
            </div>
        </div>
    );
};

export default Hero;
