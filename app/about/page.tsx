import Link from "next/link";

export default function About() {
  return (
    <main className="container page section">
      <div className="kicker">Who We Are</div>

      <h1 className="page-title">
        Raventer.
      </h1>

      <div className="prose">
        <p>
          Raventer is a Drum & Bass project from Deventer,
          Netherlands, covering many different DnB subgenres.
        </p>

        <p>
          The project is about energy, community and pushing
          heavy electronic music from the local scene into bigger
          rooms.
        </p>

        <p>
          From deep and liquid sounds to heavier dancefloor and
          darker styles, Raventer isn't interested in staying in
          one box.
        </p>
      </div>

      <div className="card profile-card">
        <div className="kicker">Management</div>

        <h2>Aaron Rutters</h2>

        <p>
          The megamind behind the project. The local beast keeping
          Raventer moving.
        </p>

        <Link href="/about/aaron" className="text-link">
          Read Aaron's profile →
        </Link>
      </div>
    </main>
  );
}