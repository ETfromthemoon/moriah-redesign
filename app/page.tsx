import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { DualOffering } from "@/components/sections/DualOffering";
import { Cotizador } from "@/components/sections/Cotizador";
import { Galeria } from "@/components/sections/Galeria";
import { ParallaxDivider } from "@/components/sections/ParallaxDivider";
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
      <Cotizador />
      <Galeria />
      <ParallaxDivider />
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
