import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Newspaper,
  Radio,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="kicker">
            Deventer · Netherlands · Drum & Bass
          </div>

          <h1>
            RAVENTER<span>.</span>
          </h1>

          <p className="lead">
            A Drum & Bass project from Deventer, Netherlands.
            Heavy sounds, different DnB subgenres and local energy.
          </p>

          <div className="actions">
            <Link href="/live" className="btn primary">
              <Radio size={18} />
              Listen Live
            </Link>

            <Link href="/shows" className="btn">
              Upcoming Shows
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="grid grid-3">
          <Link href="/news" className="feature">
            <Newspaper size={25} />
            <b>Latest News</b>
            <span>Fresh updates from Raventer.</span>
          </Link>

          <Link href="/shows" className="feature">
            <CalendarDays size={25} />
            <b>Shows</b>
            <span>Find Raventer's next appearance.</span>
          </Link>

          <Link href="/announcements" className="feature">
            <Zap size={25} />
            <b>Announcements</b>
            <span>Don't miss the latest word.</span>
          </Link>
        </div>
      </section>

      <section className="container section split">
        <div>
          <div className="kicker">The Project</div>
          <h2>Meet Raventer.</h2>
        </div>

        <div>
          <p>
            Raventer is a Drum & Bass project from Deventer,
            Netherlands, covering multiple DnB subgenres and built
            around a serious love for heavy sounds, energetic sets
            and the local scene.
          </p>

          <Link href="/about" className="text-link">
            Discover Raventer <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="container section split">
        <div>
          <div className="kicker">The Megamind</div>
          <h2>Meet Aaron Rutters.</h2>
        </div>

        <div>
          <p>
            Aaron Rutters is the manager and driving force behind
            Raventer — the megamind behind the project and,
            proudly, a local beast from Deventer.
          </p>

          <Link href="/about/aaron" className="text-link">
            Meet Aaron <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}