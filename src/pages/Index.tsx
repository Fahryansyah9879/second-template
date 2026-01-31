import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <PortfolioSection />
      <TestimonialsSection />
      <section id="services">
        <ServicesSection />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
