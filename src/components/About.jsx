import React from 'react';
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-12'>
            {/* Heading - Normal Fade In when Scrolling */}
            <motion.h1
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 2 }}
                viewport={{ once: true, amount: 0.2 }} // Ensures it appears only once
                className='my-12 text-center text-4xl font-semibold'
            >
                About <span className='text-neutral-500'>Me</span>
            </motion.h1>

            {/* Paragraph - Slides in from Bottom when Scrolling */}
            <motion.div
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                viewport={{ once: true, amount: 0.2 }} // Appears once & stays visible
                className='flex justify-center'
            >
                <p className='max-w-3xl text-center font-light leading-relaxed px-6'>
                    I've always been fascinated by technology and its ability to shape the world around us. What excites me most is solving real-world problems through code—whether it's designing intuitive user interfaces or optimizing backend performance. I thrive on the process of learning, experimenting, and refining my skills, always striving to build software that is not just functional but also enjoyable to use.
                    <br /><br />
                    Beyond coding, I find inspiration in the little things—sketching ideas onto paper, exploring new technologies purely for the thrill of discovery, and immersing myself in music that fuels creativity. Open-source contributions keep me engaged with the broader developer community, allowing me to learn from others while sharing my own insights. At the core of everything I do, I believe that great software is more than just well-written code—it’s about creating meaningful experiences that make a difference.
                </p>
            </motion.div>
        </div>
    );
};

export default About;
