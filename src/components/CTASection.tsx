import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-forest relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border border-primary-foreground/10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-primary-foreground/10 translate-x-1/2 translate-y-1/2" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
          <p className="text-refined text-primary-foreground/70 mb-4 tracking-[0.2em]">
            Let's Create Something Beautiful
          </p>
          
          <h2 className="heading-section text-primary-foreground mb-6">
            Ready to Tell Your Story?
          </h2>

          <div className="w-12 h-px bg-primary-foreground/30 mx-auto mb-8" />

          <p className="text-elegant text-primary-foreground/80 mb-10 leading-relaxed">
            Every love story deserves to be captured with artistry and intention. 
            I'd love to hear about your wedding day and how we can create something 
            truly extraordinary together.
          </p>

          <Button
            variant="elegantLight"
            size="xl"
            asChild
          >
            <a href="#contact">
              Inquire About Your Date
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
