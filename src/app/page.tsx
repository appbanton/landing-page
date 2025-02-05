import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Introduction from "../sections/Introduction";
import Process from "../sections/Process";
import TechStack from "../sections/TechStack";
import Faqs from "../sections/Faqs";
import CallToAction from "../sections/CallToAction";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Process />
      <TechStack />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
