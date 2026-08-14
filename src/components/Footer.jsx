import { SHADES } from '../data/shades'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shade-strip">
        {SHADES.map((s) => (
          <span key={s.name} style={{ background: s.hex }} title={s.name} />
        ))}
      </div>
      <div className="container footer-inner">
        <p className="footer-line">
          Coffee &amp; Stories — one story, one cup at a time.
        </p>
        <p className="footer-line footer-sub">
          Built with React + Vite. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
