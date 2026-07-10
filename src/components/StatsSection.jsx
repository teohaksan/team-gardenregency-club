export default function StatsSection({ tagline, title, cards }) {
  return (
    <section className="figures" id="overview">
      <div className="figures-inner">
        <div className="figures-header">
          <div className="figures-tag">{tagline}</div>
          <h2 className="figures-title">{title}</h2>
        </div>
        <div className="figures-grid">
          {cards.map((c, i) => (
            <div key={i} className="figure-card">
              <div className="figure-icon">
                {i === 0 ? '🏠' : i === 1 ? '📐' : i === 2 ? '🌿' : '🗓️'}
              </div>
              <div className="figure-value">
                {c.value}
                {c.value.includes('萬') && <span>呎</span>}
              </div>
              <div className="figure-label">{c.label}</div>
              {c.sub && <div className="figure-sub">{c.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
