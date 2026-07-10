export default function HeroSection({ image, stats }) {
  return (
    <section className="hero" id="hero">
      <img src={image} alt="Garden Regency 芊御" className="hero-img" />
      <div className="hero-dimmer" />
      <div className="hero-content">
        <div className="hero-eyebrow">新鴻基地產 · 傾心鉅獻</div>
        <h1 className="hero-title">芊御</h1>
        <p className="hero-subtitle">GARDEN REGENCY · 元朗錦田北</p>
        <div className="hero-stats">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat-item">
              <div className="hero-stat-num">{s.value}<span className="hero-stat-unit">{s.value.replace(/[0-9.]/g,'')}</span></div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="hero-btns">
          <a href="#contact" className="btn-sage">WhatsApp 查詢</a>
          <a href="#club" className="btn-outline-white">了解更多</a>
        </div>
      </div>
    </section>
  )
}
