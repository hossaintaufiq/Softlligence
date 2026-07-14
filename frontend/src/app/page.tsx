import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Process } from "@/components/Process";
import { Comparison } from "@/components/Comparison";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Industries />
        <Process />
        <Comparison />
        <Work />
        <About />
        <Team />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
