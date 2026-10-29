import Link from "next/link";
import { DISCIPLINES, FORM_URL } from "@/content/site";

export default function Header({
  current,
}: {
  /** Marks the discipline page the visitor is on. */
  current?: "marketing" | "software" | "construction";
}) {
  return (
    <header className="top wrap">
      <Link className="mark" href="/">
        App Banton<i>.</i>
      </Link>
      <nav className="links" aria-label="Disciplines">
        {DISCIPLINES.map((d) => (
          <Link
            key={d.slug}
            href={`/${d.slug}`}
            aria-current={d.slug === current ? "page" : undefined}
          >
            {d.name}
          </Link>
        ))}
      </nav>
      <a
        className="btn sm"
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Start a project{" "}
        <span className="ar" aria-hidden="true">
          ↗
        </span>
      </a>
    </header>
  );
}
