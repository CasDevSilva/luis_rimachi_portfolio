import React from 'react'
import { FileUser, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div
            className='flex flex-row gap-6'
        >
            <Mail
                size={28}
                className="hover:text-neutral-400 transition"
            />
            <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href='#'
            >
                <Linkedin
                    size={28}
                    className="hover:text-neutral-400 transition"
                />
            </motion.a>
            <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href='#'
            >
                <FileUser
                    size={28}
                    className="hover:text-neutral-400 transition"
                />
            </motion.a>
        </div>
    )
}

export default Contact