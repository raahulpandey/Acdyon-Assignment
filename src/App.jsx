import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InteractiveDemo from "./components/InteractiveDemo";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import DeveloperPhilosophy from "./components/DeveloperPhilosophy";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InteractiveDemo />
        <Features />
        <HowItWorks />
        <DeveloperPhilosophy />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
