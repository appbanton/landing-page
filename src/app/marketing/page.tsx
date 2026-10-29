import type { Metadata } from "next";
import Image from "next/image";
import { pageMeta } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoTile from "@/components/VideoTile";
import TeaserMark from "@/components/TeaserMark";
import { LONGEST_HOUR, SKYLARK } from "@/content/site";

export const metadata: Metadata = pageMeta({
  title: "Marketing",
  description:
    "Film work from App Banton Studios. The Longest Hour is out now; more is in production.",
  path: "/marketing",
});

export default function MarketingPage() {
  return (
    <div className="sw">
      <Header current="marketing" />
      <main>
        <section className="sw-head wrap">
          <p className="eyebrow">App Banton Studios</p>
          <h1>Marketing</h1>
        </section>

        <section className="wrap">
          <article className="sw-proj sw-lead">
            <VideoTile
              videoId={LONGEST_HOUR.id}
              youtubeUrl={LONGEST_HOUR.url}
              title={LONGEST_HOUR.title}
              poster={SKYLARK.filmPoster}
              posterAlt="Still from The Longest Hour"
              location="marketing"
              wide
            />
            <div className="sw-slate">
              <p className="sw-nm">{LONGEST_HOUR.title}</p>
              <p className="sw-cat">Film · Skylark Villa</p>
              <h2 className="sw-hd">
                A film for a private villa on Trinidad&apos;s northern coast
              </h2>
              <a
                className="sw-visit"
                href={LONGEST_HOUR.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <div className="mk-grid">
            <article className="sw-proj">
              <figure className="mk-cap">
                <Image
                  src="/film-in-production.jpg"
                  alt="A crowd at night, lit through haze"
                  fill
                  sizes="(max-width: 1000px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </figure>
              <div className="sw-slate">
                <p className="sw-nm">The Road Never Stops</p>
                <p className="sw-cat">Film</p>
                <h2 className="sw-hd">In production</h2>
                <p className="sw-txt">Release date to be announced.</p>
              </div>
            </article>

            <article className="sw-proj">
              <figure className="mk-cap mk-teaser">
                <TeaserMark />
              </figure>
              <div className="sw-slate">
                <p className="sw-nm">Untitled</p>
                <p className="sw-cat">Teaser</p>
                <h2 className="sw-hd">Coming soon</h2>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
