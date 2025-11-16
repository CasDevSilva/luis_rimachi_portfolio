import React from 'react'
import { skills_data } from '../data/portfolio'

const Skills = () => {
    return (
        <div>
            <h3 className="font-title text-lg md:text-xl py-1.5 md:py-2">Habilidades</h3>
            <ul className="list-disc text-sm md:text-base text-neutral-400">
                {skills_data.map(skill => (
                    <li><b>{skill.title}</b>
                        <ul className="list-disc ml-4 md:ml-6 mt-1">
                            <li>{skill.description}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Skills