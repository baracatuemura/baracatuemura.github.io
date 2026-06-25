import React from 'react'
import education from '../data/education'

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2>Education</h2>
        {education.map((item, i) => (
          <div key={i} className="education-item">
            <div className="education-degree">{item.degree}</div>
            <div className="education-school">{item.school}</div>
            <div className="education-date">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
