import React from 'react'
import { skills_data } from '../data/portfolio'

const Skills = () => {
    return (
        <div>
            <h3 className="font-title text-xl py-2">Habilidades</h3>
            <ul className="list-disc text-neutral-400">
                {skills_data.map(skill => (
                    <li><b>{skill.title}</b>
                        <ul className="list-disc ml-6 mt-1">
                            <li>{skill.description}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Skills