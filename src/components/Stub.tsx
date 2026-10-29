import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Placeholder until each page is designed. Not indexed. */
export default function Stub({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <>
      <Header />
      <main className="wrap stub">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="sub">This page is being built.</p>
        <Link className="btn" href="/">
          Back home
        </Link>
      </main>
      <Footer />
    </>
  );
}
