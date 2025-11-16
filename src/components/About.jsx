import React from 'react'
import { motion } from "framer-motion"
import { about_data } from '../data/portfolio'
import Skills from './Skills'
import Education from './Education'


const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/4 flex flex-col gap-5 md:gap-6"
            // style={{
            //     border: "1px solid red"
            // }}
        >
            <h2 className="font-title text-xl md:text-2xl">Acerca de mí</h2>
            <p className="font-content text-sm md:text-base text-neutral-400">{about_data.bio}</p>
            <Skills/>
            <Education/>
        </motion.section>
    )
}

export default About