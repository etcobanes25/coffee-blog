import { useParams, Link, Navigate } from 'react-router-dom'
import { getPostBySlug } from '../data/posts'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <article className="container post-page">
      <Link to="/blog" className="post-back">
        ← back to the conversations
      </Link>

      <p className="eyebrow">
        {new Date(post.date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}
        {' · '}
        {post.readTime}
      </p>

      <h1>{post.title}</h1>

      <div className="post-body">
        {post.body.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="post-ending">
        <p>
          Thanks for sitting with me for a while.
        </p>

        <p>
          Until the next cup of coffee,
          <br />
          — Louie
        </p>
      </div>
    </article>
  )
}