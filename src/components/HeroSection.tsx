import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Romantic wedding moment at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-refined text-primary-foreground/80 mb-6 tracking-[0.3em]">
          Fine Art Wedding Photography
        </p>
        
        <h1 className="heading-display text-primary-foreground mb-6 leading-[1.1]">
          Capturing Unforgettable
          <span className="block italic font-normal mt-2">Moments</span>
        </h1>

        <div className="divider-elegant bg-primary-foreground/40" />

        <p className="text-elegant text-primary-foreground/90 mb-10 max-w-xl mx-auto">
          Timeless elegance, authentic emotion, and the artistry of your love story preserved forever.
        </p>

        <Button
          variant="elegantLight"
          size="xl"
          onClick={scrollToPortfolio}
          className="animate-fade-in-delayed"
        >
          View Portfolio
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-delayed">
        <div className="flex flex-col items-center text-primary-foreground/60">
          <span className="text-xs tracking-[0.2em] uppercase mb-3">Scroll</span>
          <div className="w-px h-12 bg-primary-foreground/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-primary-foreground animate-[slideDown_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
