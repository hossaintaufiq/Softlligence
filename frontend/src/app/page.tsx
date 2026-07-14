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

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Marquee />
      <Stats />
      <Services summary />
      <Industries summary />
      <Process summary />
      <Comparison summary />
      <Work summary />
      <About summary />
      <Team summary />
      <FAQ summary />
      <Contact summary />
    </main>
  );
}
