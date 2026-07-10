export default function IntroSection({ title, text, image }) {
  return (
    <section className="intro" id="intro">
      <div className="intro-text">
        <h2>都市綠洲<br /><em>寫意人生</em></h2>
        <p>{text}</p>
      </div>
      <div className="intro-stats">
        <div className="intro-stat">
          <div className="intro-stat-num">1.43×</div>
          <div className="intro-stat-label">低地積比率</div>
        </div>
        <div className="intro-stat">
          <div className="intro-stat-num">~60%</div>
          <div className="intro-stat-label">園林覆蓋率</div>
        </div>
        <div className="intro-stat">
          <div className="intro-stat-num">33m</div>
          <div className="intro-stat-label">園林泳池</div>
        </div>
        <div className="intro-stat">
          <div className="intro-stat-num">3座</div>
          <div className="intro-stat-label">住宅大樓</div>
        </div>
      </div>
    </section>
  )
}
