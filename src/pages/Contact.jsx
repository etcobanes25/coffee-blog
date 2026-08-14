import './Contact.css'

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()

    const form = e.target

    const subject = encodeURIComponent(
      `A message from ${form.name.value}`
    )

    const body = encodeURIComponent(
      `${form.message.value}\n\n— ${form.name.value} (${form.email.value})`
    )

    window.location.href =
      `mailto:lixusbat@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="container contact-page">
      <p className="eyebrow">come talk to me</p>

      <h1>Tell me your story.</h1>

      <p className="contact-lead">
        Maybe you have a story you've been wanting to share, a thought
        that's been sitting on your mind, or maybe you just want someone
        to listen. You don't have to know me to start a conversation.
        Grab a cup of coffee, take your time, and say hello.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Tell me what's on your mind..."
          />
        </label>

        <button type="submit" className="btn">
          Start a conversation
        </button>
      </form>

      <div className="contact-social">
        <a href="mailto:lixusbat@gmail.com">
          Email
        </a>

        <a
          href="https://www.instagram.com/eam_eiuol25/?utm_source=qr&r=nametag"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>

        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noreferrer"
        >
          Spotify
        </a>
      </div>
    </div>
  )
}