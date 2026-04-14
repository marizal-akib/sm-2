import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Services from "@/components/sections/Services";
import Promise from "@/components/sections/Promise";
import Process from "@/components/sections/Process";
import Fees from "@/components/sections/Fees";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Services />
      <Promise />
      <Process />
      <Fees />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
