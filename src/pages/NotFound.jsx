import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
      <p className="eyebrow">404</p>
      <h1>This cup's empty.</h1>
      <p style={{ color: 'var(--dark-roast)', marginBottom: 28 }}>
        Nothing here — head back and grab a fresh page.
      </p>
      <Link to="/" className="btn">Back home</Link>
    </div>
  )
}
