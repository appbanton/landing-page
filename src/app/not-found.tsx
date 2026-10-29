import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="wrap stub">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="sub">That address doesn&apos;t lead anywhere.</p>
        <Link className="btn" href="/">
          Back home
        </Link>
      </main>
      <Footer />
    </>
  );
}
