import React from 'react'
import skills from '../data/skills'

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>Skills</h2>
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
