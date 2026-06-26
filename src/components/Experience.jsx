import experience from '../data/experience'

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2>Experience</h2>
        {experience.map((job) => (
          <article key={job.id} className="job">
            <div className="job-logo">
              {job.logo ? (
                <img src={job.logo} alt={`${job.company} logo`} loading="lazy" />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: '#e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: job.id === '79kb' ? '20px' : '14px',
                  fontWeight: 700,
                  color: '#64748b',
                }}>
                  {job.placeholder}
                </div>
              )}
            </div>
            <div className="job-body">
              <header className="job-header">
                <span>
                  <span className="job-title">{job.title}</span>
                  <span className="job-company">  {job.company}</span>
                </span>
                <span className="job-date">{job.date}</span>
              </header>
              <p className="job-description" dangerouslySetInnerHTML={{ __html: job.description }} />
              {job.projects && (
                <ul className="project-list">
                  {job.projects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
