import React from 'react';
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h2
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className='my-10 text-center text-4xl font-semibold'>
                Get in <span className='text-neutral-500'>Touch</span>
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className='text-center tracking-tighter'>
                {/* Address */}
                <p className='my-4'>
                    <span className='text-neutral-500'>Address: </span>
                    Kalinga Institute of Industrial Technology, Patia, Bhubaneswar, Odisha - 751024
                </p>

                {/* Phone */}
                <p className='my-4'>
                    <span className='text-neutral-500'>Phone: </span>+91-7905209137
                </p>

                {/* Email */}
                <a href="mailto:arunabhsen100705@gmail.com" className='my-4 block text-cyan-400 hover:text-cyan-300 transition'>
                    <span className='text-neutral-500'>Email: </span>arunabhsen100705@gmail.com
                </a>

                {/* Resume Download (Google Drive Link) */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://docs.google.com/document/d/13KnJzD3kzrsESo4wluIo9jev3Zd83ze8/edit?usp=sharing&ouid=100506038795218263885&rtpof=true&sd=true" // Replace with actual GDrive link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-[#20202F] text-white px-6 py-2 rounded-lg 
                     shadow-md hover:bg-cyan-900 transition">
                    Download Resume
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Contact;
