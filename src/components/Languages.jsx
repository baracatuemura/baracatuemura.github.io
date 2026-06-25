import React from 'react'
import languages from '../data/languages'

function Languages() {
  return (
    <section className="section" id="languages">
      <div className="container">
        <h2>Languages</h2>
        <div className="languages">
          {languages.map((lang) => (
            <div key={lang.name} className="language-item">
              <span className="language-name">{lang.name}</span>
              <span className="language-proficiency">{lang.proficiency}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
