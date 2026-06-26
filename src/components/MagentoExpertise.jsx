function MagentoExpertise() {
  return (
    <section className="section" id="magento-expertise">
      <div className="container">
        <h2>Core Magento / Adobe Commerce Expertise</h2>
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
