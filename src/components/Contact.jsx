import React from 'react'
import { FileUser, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div
            className='flex flex-row gap-4 md:gap-5 lg:gap-6'
        >
            <Mail
                className="w-6 h-6 md:w-7 md:h-7 hover:text-neutral-400 transition"
            />
            <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href='#'
            >
                <Linkedin
                    className="w-6 h-6 md:w-7 md:h-7 hover:text-neutral-400 transition"
                />
            </motion.a>
            <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href='#'
            >
                <FileUser
                    className="w-6 h-6 md:w-7 md:h-7 hover:text-neutral-400 transition"
                />
            </motion.a>
        </div>
    )
}

export default Contact