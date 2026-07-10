export default function ClubSection({ tagline, title, subtitle, items }) {
  return (
    <section className="club" id="club">
      <div className="club-inner">
        <div className="club-header">
          <div>
            <span className="club-tag">{tagline}</span>
            <h2 className="club-title">{title}<br /><em>{subtitle}</em></h2>
          </div>
          <a href="#contact" className="club-link">查詢更多 →</a>
        </div>
        <div className="club-grid">
          {/* Featured large */}
          <div className="club-featured">
            <img src={items[0]?.src} alt={items[0]?.label} />
            <div className="club-featured-overlay">
              <div>
                <div className="club-featured-title">逾 10.6 萬平方呎</div>
                <div className="club-featured-sub">園林及會所空間 · Club Regency</div>
              </div>
            </div>
          </div>
          {/* Small cards */}
          {items.slice(1, 3).map((item, i) => (
            <div key={i} className="club-small">
              <img src={item.src} alt={item.label} loading="lazy" />
              <div className="club-small-overlay">
                <div className="club-small-title">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
