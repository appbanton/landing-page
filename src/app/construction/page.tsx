import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROJECTS, type Project } from "@/content/construction";

export const metadata: Metadata = pageMeta({
  title: "Construction",
  description:
    "New build and renovation work from App Banton Studios: a private villa in Blanchisseuse, and renovations in Cascade and San Juan.",
  path: "/construction",
});

function Body({ p }: { p: Project }) {
  return (
    <div className="sw-slate">
      <p className="sw-nm">{p.name}</p>
      <p className="sw-cat">{p.category}</p>
      <h2 className="sw-hd">{p.headline}</h2>
      <p className="sw-txt">{p.text}</p>
      <span className="sw-visit">
        View the project <span aria-hidden="true">→</span>
      </span>
    </div>
  );
}

export default function ConstructionPage() {
  const [lead, ...rest] = PROJECTS;
  return (
    <div className="sw">
      <Header current="construction" />
      <main>
        <section className="sw-head wrap">
          <p className="eyebrow">App Banton Studios</p>
          <h1>Construction</h1>
        </section>
        <section className="wrap">
          <Link className="sw-proj sw-lead" href={`/construction/${lead.slug}`}>
            <figure className="sw-cap">
              <Image
                src={lead.cover.src}
                alt={lead.cover.alt}
                fill
                sizes="(max-width: 960px) 100vw, 58vw"
                priority
                style={{ objectFit: "cover" }}
              />
            </figure>
            <Body p={lead} />
          </Link>
          <div className="mk-grid">
            {rest.map((p) => (
              <Link
                key={p.slug}
                className="sw-proj cn-card"
                href={`/construction/${p.slug}`}
              >
                <figure className="mk-cap">
                  <Image
                    src={p.cover.src}
                    alt={p.cover.alt}
                    fill
                    sizes="(max-width: 1000px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
                <Body p={p} />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
