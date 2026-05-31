import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { DualOffering } from "@/components/sections/DualOffering";
import { Metodo } from "@/components/sections/Metodo";
import { Casos } from "@/components/sections/Casos";
import { Testimoniales } from "@/components/sections/Testimoniales";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";
import { ScrollProgress } from "@/components/sections/ScrollProgress";

export default function HomePage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <StatsBar />
      <DualOffering />
      <Metodo />
      <Casos />
      <Testimoniales />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
