import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/card/Card';
import { staggerContainer } from '../../components/framer/Framer';
import { detailsdata } from '../../data';

const SliderDetails = () => {
  const [active, setActive] = useState('hello-2');

  return (
    <section className='container  mx-auto py-14'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col'>

        <div className='my-10 w-full  flex flex-col gap-y-5 items-center justify-center md:flex-row gap-x-2 min-h-[70vh]'>
          {detailsdata.map((item, id) => (
            <>
              <Card
                key={item.id}
                item={item}
                id={id}
                active={active}
                handleClick={setActive}
              />
            </>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SliderDetails