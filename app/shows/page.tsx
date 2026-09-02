const shows = [
  {
    date: "TBA",
    title: "Raventer — Deventer",
    venue: "Upcoming show",
    city: "Deventer, Netherlands",
  },
  {
    date: "TBA",
    title: "Raventer Live",
    venue: "More dates coming",
    city: "Netherlands",
  },
];

export default function Shows() {
  return (
    <main className="container page section">
      <div className="kicker">Calendar</div>

      <h1 className="page-title">
        Shows.
      </h1>

      <div className="list">
        {shows.map((show, index) => (
          <article className="show" key={index}>
            <div className="date">
              {show.date}
            </div>

            <div>
              <h2>{show.title}</h2>

              <p>
                {show.venue} · {show.city}
              </p>
            </div>

            <span className="text-link">
              Details →
            </span>
          </article>
        ))}
      </div>
    </main>
  );
}