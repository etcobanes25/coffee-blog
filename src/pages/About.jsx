import profile from '../assets/profile.jpg'
import { SHADES } from '../data/shades'
import './About.css'

const facts = [
  { label: 'Good at', value: 'Listening, remembering little things, and being there' },
  { label: 'Coffee', value: 'Black coffee, no sugar' },
  { label: 'Dogs', value: 'Loved way too much and probably spoiled' },
  { label: 'Music', value: 'Always somewhere in the background' },
  { label: 'Life lesson', value: 'Every person has a story worth listening to' },
]

export default function About() {
  return (
    <div className="about">
      <div className="container about-hero">
        <img
          src={profile}
          alt="Louie holding a coffee"
          className="about-photo"
        />

        <div>
          <p className="eyebrow">about me</p>

          <h1>
            I'm Louie your stranger, but a friendly listener.
          </h1>

          <p className="about-lead">
            I’m the kind of person who would rather listen to your story
            than talk about myself. I love hearing about what people have
            been through the good, the messy, the painful, and even the
            ordinary moments that seem small but somehow stay with us.
          </p>

          <p className="about-lead">
            I know what it feels like to have a lot on your mind and feel
            like there is no one beside you who will listen. That is why,
            whenever someone wants to talk, I’m happy to be part of the
            conversation. I may be a stranger, but sometimes a stranger
            can become the person who listens without judging.
          </p>

          <p className="about-lead">
            Coffee has always been part of my story. My dad introduced me
            to it when I was little, but as I grew older, I realized that
            coffee could mean more than just a drink. A cup of coffee can
            carry memories, conversations, feelings, and experiences.
          </p>

          <p className="about-lead">
            My favorite is still black coffee with no sugar. Maybe because
            it reminds me of life. Sometimes it is bitter, but you learn
            to appreciate it. You learn from what you have experienced,
            accept what you cannot change, and keep moving forward.
          </p>

          <p className="about-lead">
            I believe every person I meet has something I can learn from.
            Every story carries an experience, and every experience can
            teach us something about life.
          </p>

          <p className="about-lead">
            So if you ever find yourself sitting across the table from me,
            don’t worry about being a stranger. Have a cup of coffee.
            Tell me your story. I’m listening.
          </p>
        </div>
      </div>

      <div className="shade-strip about-strip">
        {SHADES.map((s) => (
          <span
            key={s.name}
            style={{ background: s.hex }}
            title={s.name}
          />
        ))}
      </div>

      <div className="container about-facts">
        <p className="eyebrow">quick facts</p>

        <dl className="facts-list">
          {facts.map((f) => (
            <div className="fact-row" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}