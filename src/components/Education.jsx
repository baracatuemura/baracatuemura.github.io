import education from '../data/education'

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>Education</h2>
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
