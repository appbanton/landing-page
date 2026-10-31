import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import VideoTile from "@/components/VideoTile";
import { DISCIPLINES, FORM_URL, LONGEST_HOUR, SKYLARK } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "https://appbanton.com" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero wrap">
          <p className="eyebrow">App Banton Studios · Port of Spain, Trinidad</p>
          <h1>
            A design and build <em>studio.</em>
          </h1>
          <p className="sub">
            Got a story to tell, a product to launch or a home to build? We make
            all three.
          </p>

          <nav className="doors" aria-label="Choose a discipline">
            {DISCIPLINES.map((d) => (
              <Link key={d.slug} className="door" href={`/${d.slug}`}>
                <Photo
                  src={d.photo}
                  alt={d.alt}
                  tint={d.tint}
                  sizes="(max-width: 1180px) 100vw, 33vw"
                  priority
                />
                <div className="d-body">
                  <h2 className="d-name">{d.name}</h2>
                  <p className="d-line">{d.line}</p>
                  <span className="d-go">
                    <span className="txt">{d.cta}</span>
                    <span className="ar" aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </nav>
        </section>

        <section className="sec wrap" id="skylark">
          <div className="sec-head">
            <p className="eyebrow">{SKYLARK.eyebrow}</p>
            <h2>{SKYLARK.title}</h2>
            <p>{SKYLARK.blurb}</p>
          </div>

          <div className="trio">
            <Link className="tile" href="/construction/skylark-villa">
              <Photo
                src={SKYLARK.villaPhoto}
                alt="Timber door open at night onto a lit hallway"
                tint={["#4f4a38", "#161412"]}
                sizes="(max-width: 960px) 100vw, 33vw"
              />
              <div className="slate">
                <div className="slate-top">
                  <span>Construction</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </div>
                <h3>The villa</h3>
                <dl className="kv">
                  <div><dt>Where</dt><dd>Trinidad, northern coast</dd></div>
                  <div><dt>Scope</dt><dd>Design and construction</dd></div>
                  <div><dt>Status</dt><dd>Open to guests</dd></div>
                </dl>
              </div>
            </Link>

            <div className="tile">
              <VideoTile
                videoId={LONGEST_HOUR.id}
                youtubeUrl={LONGEST_HOUR.url}
                title={LONGEST_HOUR.title}
                poster={SKYLARK.filmPoster}
                posterAlt="Still from The Longest Hour"
              />
              <div className="slate">
                <Link className="slate-link" href="/marketing">
                  <div className="slate-top">
                    <span>Marketing</span>
                    <span className="arrow" aria-hidden="true">→</span>
                  </div>
                  <h3>{LONGEST_HOUR.title}</h3>
                </Link>
                <dl className="kv">
                  <div><dt>For</dt><dd>Skylark Villa</dd></div>
                  <div><dt>Includes</dt><dd>Film, photography, social posts</dd></div>
                  <div>
                    <dt>Film</dt>
                    <dd>
                      <a
                        className="ext"
                        href={LONGEST_HOUR.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch on YouTube <span aria-hidden="true">↗</span>
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="tile">
              {/* Plain <a>, not <Link>: Next's router can double the hash
                  (#skylark-villa#skylark-villa) on repeat visits, which
                  breaks the scroll and the :target highlight. */}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a className="tile-photo" href="/software#skylark-villa">
                <Photo
                  src={SKYLARK.sitePhoto}
                  alt="The Skylark Villa website on a screen"
                  tint={["#c9c2b8", "#c9c2b8"]}
                  sizes="(max-width: 960px) 100vw, 33vw"
                />
              </a>
              <div className="slate">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a className="slate-link" href="/software#skylark-villa">
                  <div className="slate-top">
                    <span>Software</span>
                    <span className="arrow" aria-hidden="true">→</span>
                  </div>
                  <h3>The website</h3>
                </a>
                <dl className="kv">
                  <div><dt>Type</dt><dd>Website</dd></div>
                  <div><dt>Status</dt><dd>Live</dd></div>
                  <div>
                    <dt>Site</dt>
                    <dd>
                      <a
                        className="ext"
                        href={SKYLARK.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {SKYLARK.siteLabel} <span aria-hidden="true">↗</span>
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap">
          <div className="more">
            <h2>Want to see more?</h2>
            <div>
              <ul>
                {DISCIPLINES.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/${d.slug}`}>
                      More {d.slug} <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <a className="btn" href={FORM_URL} target="_blank" rel="noopener noreferrer">
                Start a project <span className="ar" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
