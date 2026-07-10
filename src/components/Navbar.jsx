export default function Navbar({ brand, phone }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-brand-cn">{brand || '芊御'}</span>
        <span className="navbar-brand-en">GARDEN REGENCY</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#hero" className="active">概覽</a></li>
        <li><a href="#club">會所</a></li>
        <li><a href="#floorplans">平面圖</a></li>
        <li><a href="#location">位置</a></li>
        <li><a href="#contact">聯絡</a></li>
      </ul>
      <a href="#contact" className="navbar-cta">WhatsApp 查詢</a>
    </nav>
  )
}
