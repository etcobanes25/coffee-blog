import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import './Blog.css'

export default function Blog() {
  return (
    <div className="container blog-page">
      <p className="eyebrow">come sit for a while</p>

      <h1>Tell me your story. I’m listening.</h1>

      <p className="blog-sub">
        Stories, experiences, and little moments that remind me
        there is always something to learn from another person.
      </p>

      <div className="post-list">
        {posts.map((p) => (
          <Link
            to={`/blog/${p.slug}`}
            className="post-row"
            key={p.slug}
          >
            <div className="post-row-main">
              <h2>{p.title}</h2>

              <p>{p.excerpt}</p>
            </div>

            <div className="post-row-meta">
              <span>
                {new Date(p.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>

              <span>{p.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}