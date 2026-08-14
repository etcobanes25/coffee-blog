import { Link } from 'react-router-dom'
import cover from '../assets/cover.jpg'
import profile from '../assets/profile.jpg'
import { posts } from '../data/posts'
import './Home.css'

const loves = [
  {
    mark: '01',
    title: 'People & their stories',
    text: "Give me a stranger and twenty minutes and I'll come back happier than I started. I love listening to what people have lived through the good, the messy, the painful, and the ordinary. Every experience has something to teach me.",
  },
  {
    mark: '02',
    title: 'Coffee, every mood',
    text: "Happy, sad, angry, or tired, there's a cup for it. Coffee gives me a moment to slow down, think, remember, and sit with whatever I'm feeling.",
  },
  {
    mark: '03',
    title: 'My Dogs, Music & MaehaL',
    text: "A good playlist, my dogs Max and Chase being funny and cute, and coffee with my favorite person MaehaL that's pretty much a perfect day for me.",
  },
]

export default function Home() {
  const latest = posts[0]

  return (
    <>
      <section className="hero">
        <img
          src={cover}
          alt="Two iced coffees on a wooden table, hands reaching for them"
          className="hero-img"
        />

        <div className="hero-scrim" />

        <div className="container hero-content">
          <p className="eyebrow" style={{ color: 'var(--vanilla)' }}>
            a personal blog
          </p>

          <h1 className="hero-title">Coffee &amp; Stories</h1>

          <p className="hero-sub">
            Stories worth sitting down for, usually with a coffee in hand.
          </p>

          <div className="hero-actions">
            <Link to="/blog" className="btn">
              Read the blog
            </Link>

            <Link
              to="/about"
              className="btn btn-outline hero-btn-outline"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      <section className="container intro">
        <div
          className="ring-stain"
          style={{ width: 220, height: 220, top: -60, right: -60 }}
        />

        <img
          src={profile}
          alt="Portrait, holding a McCafé iced coffee"
          className="intro-photo"
        />

        <div>
          <p className="eyebrow">
            Hi, I'm Louie your stranger, but a friendly listener.
          </p>

          <h2>
            I listen to people's stories because every experience has
            something to teach us.
          </h2>

          <p>
            I love hearing people's stories the good, the messy, the
            painful, and the ordinary. I don't listen just to know what
            happened. I listen because I want to understand, learn from
            their experiences, and maybe remind them that someone is
            willing to hear them.
          </p>

          <p>
            Sometimes people don't need advice. Sometimes they just need
            someone to sit beside them, share a cup of coffee, and listen
            without judgment.
          </p>
        </div>
      </section>

      <section className="loves-section">
        <div className="container">
          <p className="eyebrow">
            what this blog is actually about
          </p>

          <div className="loves-grid">
            {loves.map((l) => (
              <div className="love-card" key={l.mark}>
                <span className="love-mark">{l.mark}</span>

                <h3>{l.title}</h3>

                <p>{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container latest">
        <p className="eyebrow">from the blog</p>

        <Link
          to={`/blog/${latest.slug}`}
          className="latest-card"
        >
          <div>
            <h3>{latest.title}</h3>

            <p>{latest.excerpt}</p>

            <span className="latest-readmore">
              Read the post →
            </span>
          </div>

          <span className="latest-meta">
            {latest.readTime}
          </span>
        </Link>
      </section>
    </>
  )
}