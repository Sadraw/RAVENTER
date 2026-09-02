const posts = [
  {
    title: "Raventer is live",
    text: "Welcome to the official Raventer app. News, music, shows and announcements all in one place.",
  },
  {
    title: "Deventer DnB",
    text: "Raventer comes from Deventer and moves across multiple Drum & Bass subgenres.",
  },
  {
    title: "More noise incoming",
    text: "New shows, livestreams and releases will be announced here.",
  },
];

export default function News() {
  return (
    <main className="container page section">
      <div className="kicker">Updates</div>

      <h1 className="page-title">
        News.
      </h1>

      <div className="grid grid-3">
        {posts.map((post) => (
          <article className="card" key={post.title}>
            <small className="post-label">
              RAVENTER
            </small>

            <h2>{post.title}</h2>

            <p>{post.text}</p>

            <a href="#" className="text-link">
              Read more →
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}