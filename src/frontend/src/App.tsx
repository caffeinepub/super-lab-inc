import { useEffect } from "react";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 },
    );

    const observe = () => {
      for (const el of document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right",
      )) {
        observer.observe(el);
      }
    };

    const timer = setTimeout(observe, 100);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "oklch(0.07 0 0)",
        color: "oklch(0.95 0 0)",
      }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
