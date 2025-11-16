import React from 'react'
import Contact from './Contact'
import { motion } from 'framer-motion'
import { about_data, name_data } from '../data/portfolio'

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='w-full lg:w-1/2 flex flex-col gap-6 md:gap-7 lg:gap-8'
            // style={{
            //     border: "1px solid red"
            // }}
        >
            <h1 className='font-title text-2xl md:text-3xl lg:text-3xl'>{name_data}</h1>
            <p className='font-content text-sm md:text-base text-neutral-400'>{about_data.intro}</p>
            <Contact/>
        </motion.section>
    )
}

export default Hero