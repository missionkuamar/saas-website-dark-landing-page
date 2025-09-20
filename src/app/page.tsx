import { ProductShowcase } from "@/pages/ProductShowcase";
import { Banner } from "@/pages/Banner";
import { Features } from "@/pages/Features";
import { Hero } from "@/pages/Hero";
import { LogoTicker } from "@/pages/LogoTicker";
import { Navbar } from "@/pages/Navbar";
import { FAQs } from "@/pages/FAQs";
import { CallToAction } from "@/pages/CallToAction";
import { Footer } from "@/pages/Footer";

export default function Home() {
  return (
    <>
      
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
