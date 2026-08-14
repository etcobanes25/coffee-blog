export const posts = [
  {
    slug: 'why-i-still-say-yes-to-coffee',

    title: 'Coffee, Stories, and the Lessons People Leave Behind',

    date: '2026-08-14',

    excerpt:
      'Sometimes a simple cup of black coffee can hold memories, pain, acceptance, and the stories of people who helped us keep going.',

    readTime: '4 min read',

    body: `
Give me a stranger and twenty minutes, and I might come back happier than I started. I love listening to people's stories, not because I want to know everything about them, but because I believe every person carries an experience that can teach us something. I am happy to be part of a conversation, especially when I know what it feels like to have no one to listen.

Since 2008, I have been trying to live on my own. Along the way, I carried a lot of things in my mind. There was anger, pain, sadness, and a time when I felt completely lost. I felt like I had no one on my side, even my own family. One of the most painful things I ever heard was, "Forget about us because we forget you." Those words stayed with me.

But somewhere along my journey, I met strangers who showed me that kindness can come from unexpected people. One stranger would sit beside me and ask me questions, listen to me, and sometimes bring me food. There was also one thing they never forgot whenever they visited me: a cup of coffee.

I already loved coffee when I was little because my dad used to make it for me. But I never realized how many memories, conversations, and lessons could live inside one cup until I met that stranger. Coffee became more than something I drink. It became connected to people, memories, feelings, and experiences.

My favorite is still black coffee, without sugar. At first, you notice the bitterness. But when you become used to it, you begin to appreciate the aroma and the taste. Life can feel the same way. When something hurts, we sometimes want to add something to make the pain disappear. But I have learned that accepting what happened, forgiving when I can, and allowing myself to feel can also be part of healing.

For me, drinking coffee without sugar is a reminder not to force life to become sweeter just because I am afraid of its bitterness. Some experiences are painful, but they can still teach us something.

Every morning that we wake up is another chance. A chance to stand again when life brings us down. A chance to correct a wrong choice. A chance to learn from someone else's experience. A chance to become better than we were yesterday.

People say YOLO — you only live once. I'm not sure I see life that way. I think we live every day, and we die once. Every morning we wake up, we are given another opportunity to live, to love, to listen, to learn, and to forgive.

So, let's have a cup of coffee and talk.

I'm Lixus — your stranger, but a friendly listener.
    `.trim(),
  },
]

export const getPostBySlug = (slug) =>
  posts.find((p) => p.slug === slug)