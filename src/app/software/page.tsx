import type { Metadata } from "next";
import Image from "next/image";
import { pageMeta } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROJECTS, type Project } from "@/content/software";

export const metadata: Metadata = pageMeta({
  title: "Software",
  description:
    "Live websites and web apps from App Banton Studios: ShadowGovTT, Skylark Villa, Literead and Cobaderos.",
  path: "/software",
});

function Entry({ p, lead = false }: { p: Project; lead?: boolean }) {
  return (
    <article className={`sw-proj${lead ? " sw-lead" : ""}`}>
      <a
        className="sw-shot"
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
      >
        <figure className="sw-cap">
          <Image
            src={p.image}
            alt={p.alt}
            fill
            sizes={
              lead
                ? "(max-width: 960px) 100vw, 58vw"
                : "(max-width: 1000px) 100vw, 33vw"
            }
            priority={lead}
            style={{ objectFit: "cover" }}
          />
        </figure>
      </a>
      <div className="sw-slate">
        <p className="sw-nm">{p.name}</p>
        <p className="sw-cat">{p.category}</p>
        <h2 className="sw-hd">{p.headline}</h2>
        <p className="sw-txt">{p.text}</p>
        <a
          className="sw-visit"
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit {p.label} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default function SoftwarePage() {
  const [lead, ...rest] = PROJECTS;
  return (
    <div className="sw">
      <Header current="software" />
      <main>
        <section className="sw-head wrap">
          <p className="eyebrow">App Banton Studios</p>
          <h1>Software</h1>
        </section>
        <section className="wrap">
          <Entry p={lead} lead />
          <div className="sw-grid">
            {rest.map((p) => (
              <Entry key={p.id} p={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
