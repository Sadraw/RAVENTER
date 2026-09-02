"use client";

import { Pause, Play, Radio } from "lucide-react";
import { useState } from "react";

export default function Live() {
  const [playing, setPlaying] = useState(false);

  return (
    <main className="container page section">
      <div className="kicker">
        <span className="dot" />
        Live Broadcast
      </div>

      <h1 className="page-title">
        RAVENTER
        <br />
        LIVE.
      </h1>

      <div className="player">
        <div className="wave">
          {Array.from({ length: 40 }).map((_, i) => (
            <i
              key={i}
              style={{
                height: `${20 + ((i * 13) % 70)}px`,
              }}
            />
          ))}
        </div>

        <div className="now">
          <Radio />

          <div>
            <small>
              {playing ? "NOW PLAYING" : "STREAM READY"}
            </small>

            <strong>Raventer Radio</strong>
          </div>
        </div>

        <button
          className="play"
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause /> : <Play />}
        </button>

        <p className="hint">
          Add Raventer's real stream URL to this component when
          the livestream is ready.
        </p>
      </div>
    </main>
  );
}