import React from 'react'
import skills from '../data/skills'

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
