import languages from '../data/languages'

function Languages() {
  return (
    <section className="section" id="languages">
      <div className="container">
        <h2>Languages</h2>
        <ul className="languages">
          {languages.map((lang) => (
            <li key={lang.name} className="language-item">
              <span className="language-name">{lang.name}</span>
              <span className="language-proficiency">{lang.proficiency}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Languages
