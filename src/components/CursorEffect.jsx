import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorEffect = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-40 h-40 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
                       rounded-full opacity-20 blur-3xl pointer-events-none mix-blend-screen"
            animate={{
                x: position.x - 64, // Offset to center the effect
                y: position.y - 64,
            }}
            transition={{
                type: "spring",
                stiffness: 100, // Makes the movement less rigid
                damping: 15, // Controls the braking effect
                mass: 0.5, // Adds a floating effect
            }}
        />
    );
};

export default CursorEffect;
