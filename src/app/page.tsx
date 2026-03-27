import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";
import Ticker from "@/sections/Ticker";
import Work from "@/sections/Work";
import WhatWeBuild from "@/sections/WhatWeBuild";
import Process from "@/sections/Process";
import Faqs from "@/sections/Faqs";
import Feature from "@/sections/Feature";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Grain />
      <Navbar />
      <Hero />
      <Ticker />
      <Work />
      <WhatWeBuild />
      <Process />
      <Faqs />
      <Feature />
      <Footer />
    </>
  );
}
