import React from 'react'
import { education_data } from '../data/portfolio'

const Education = () => {
    return (
        <div>
            <h3 className="font-title text-lg md:text-xl py-1.5 md:py-2">Educación</h3>
            <ul className="list-disc text-sm md:text-base text-neutral-400">
                {education_data.map(education => (
                    <li>
                        {education.specialization}
                        <ul className="list-disc ml-4 md:ml-6 mt-1">
                            <li>{education.college} ({education.time})</li>
                            <li>{education.status}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Education