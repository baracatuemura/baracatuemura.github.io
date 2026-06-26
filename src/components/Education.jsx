import education from '../data/education'

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2>Education</h2>
        <ul className="education-list">
          {education.map((item, i) => (
            <li key={i} className="education-item">
              <span className="education-degree">{item.degree}</span>
              <span className="education-school">{item.school}</span>
              <span className="education-date">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
