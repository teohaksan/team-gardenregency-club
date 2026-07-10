export default function TransportSection({ items }) {
  return (
    <section className="transport" id="location">
      <div className="transport-inner">
        <div className="transport-header">
          <div className="transport-tag">Location · 位置交通</div>
          <h2 className="transport-title">多元交通 · 直達港九新界</h2>
        </div>
        <div className="transport-grid">
          {items.map((item, i) => (
            <div key={i} className="transport-item">
              <div className="transport-icon">{item.icon}</div>
              <div className="transport-name">{item.name}</div>
              {item.sub && <div className="transport-sub">{item.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
