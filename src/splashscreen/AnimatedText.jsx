import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";



const AnimatedText = ({text, finishedLoading }) => {
    const words = text.split('')
    // console.log(words);

    const [mounted, setMounted] = useState(false);

  

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
      },
    }),
  };

  const child = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
    hidden: {
        opacity: 0,
        // y: -20,
        x: 20,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 6);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <motion.div
    variants={container} initial="hidden" animate="visible"
     mounted={mounted}
     className="bg-black h-screen text-white w-full flex overflow-hidden  capitalize items-center justify-center">
        {words.map((word, index) => (
            <motion.p className="text-center mr-2 flex items-center justify-center text-2xl font-semibold" variants={child} key={index}>{word}</motion.p>
        ))}
    </motion.div>
  )
}

export default AnimatedText