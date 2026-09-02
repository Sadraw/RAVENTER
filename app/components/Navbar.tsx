"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "/about"],
    ["Live", "/live"],
    ["Shows", "/shows"],
    ["News", "/news"],
    ["Music", "/music"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link
          href="/"
          className="logo"
          onClick={() => setOpen(false)}
        >
          RAVENTER<span>.</span>
        </Link>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "open" : ""}>
          {links.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              onClick={() => setOpen(false)}
            >
              {name}
            </Link>
          ))}

          <Link
            href="/live"
            className="nav-live"
            onClick={() => setOpen(false)}
          >
            ● LIVE
          </Link>
        </nav>
      </div>
    </header>
  );
}