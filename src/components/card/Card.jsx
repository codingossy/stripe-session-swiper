import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../framer/Framer';


export const Card = ({ item, active, id, handleClick }) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', id * 0.5, 0.75)}
            className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
                } flex items-center justify-center w-full h-[70vh] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
            onClick={() => handleClick(id)}
        >
            <img
                src={item.image}
                alt=""
                className="absolute w-full h-full object-cover rounded-xl"
            />
            {active !== id ? (
                <>

                </>
            ) : (
                <div className="absolute top-10 left-5 p-4 ">
                    <div className={`flex items-center justify-center`}>
                        <h2 className=" font-semibold text-sm md:text-2xl text-white">
                            {item.title}
                        </h2>
                    </div>
                </div>
            )}
        </motion.div>
    )
}
