function MagentoExpertise() {
  return (
    <section className="section" id="magento-expertise">
      <div className="container">
        <h2><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>Core Magento / Adobe Commerce Expertise</h2>
        <ul className="expertise-list">
          <li className="expertise-item">
            <strong>Magento Front-End Architecture</strong><br /> Advanced mastery in developing and customizing themes based on Luma and Blank architectures, with deep expertise in file hierarchy manipulation and Magento&rsquo;s native theme fallback system.
          </li>
          <li className="expertise-item">
            <strong>UI Components &amp; State Management</strong><br /> Solid experience building dynamic interfaces using Knockout.js, ensuring seamless global data synchronization (such as cart updates and session states) via <code>customerData</code>.
          </li>
          <li className="expertise-item">
            <strong>Asynchronous Loading &amp; Optimization</strong><br /> Specialized in script modularization and optimization using RequireJS to prevent loading bottlenecks, eliminate scope conflicts, and improve Core Web Vitals.
          </li>
          <li className="expertise-item">
            <strong>Advanced Layout Customization</strong><br /> Expert handle on page structuring, blocks, and containers using complex Layout XML (<code>&lt;move&gt;</code>, <code>&lt;referenceBlock&gt;</code>, <code>&lt;argument&gt;</code>), preserving native platform extensibility while adhering strictly to Adobe&rsquo;s development best practices.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default MagentoExpertise
