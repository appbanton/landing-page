import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { PROJECTS } from "@/content/construction";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return { title: "Construction" };
  return pageMeta({
    title: p.name,
    description: `${p.headline}. ${p.category.replace(" · ", ", ")}.`,
    path: `/construction/${p.slug}`,
    image: { url: p.cover.src, alt: p.cover.alt },
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const i = PROJECTS.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = PROJECTS[i];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <div className="sw">
      <Header current="construction" />
      <main>
        <section className="sw-head cn-head wrap">
          <Link className="cn-back" href="/construction">
            <span aria-hidden="true">←</span> All construction
          </Link>
          <p className="eyebrow">{p.category}</p>
          <h1>{p.name}</h1>
          <p className="cn-lede">{p.headline}</p>
          <dl className="cn-facts">
            {p.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="wrap">
          <Gallery chapters={p.chapters} />
          <div className="cn-end">
            <p>Next: {next.name}</p>
            <Link className="btn" href={`/construction/${next.slug}`}>
              View the project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
