import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import ProductContents from "./components/ProductContents";
import ProductPreview from "./components/ProductPreview";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import WhoItsFor from "./components/WhoItsFor";
import EmotionalSection from "./components/EmotionalSection";
import TrustDisclaimer from "./components/TrustDisclaimer";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-800">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <ProductContents />
        <ProductPreview />
        <Benefits />
        <HowItWorks />
        <WhoItsFor />
        <EmotionalSection />
        <TrustDisclaimer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
