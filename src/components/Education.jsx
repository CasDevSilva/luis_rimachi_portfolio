import React from 'react'
import { education_data } from '../data/portfolio'

const Education = () => {
    return (
        <div>
            <h3 className="font-title text-xl py-2">Educación</h3>
            <ul className="list-disc text-neutral-400">
                {education_data.map(education => (
                    <li>
                        {education.specialization}
                        <ul className="list-disc ml-6 mt-1">
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