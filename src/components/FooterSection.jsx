export default function FooterSection({ brand, disclaimer }) {
  return (
    <footer className="footer">
      <div className="footer-brand">{brand} · Garden Regency</div>
      <div className="footer-note">{disclaimer}</div>
    </footer>
  )
}
