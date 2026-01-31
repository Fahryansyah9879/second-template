import photographerPortrait from "@/assets/photographer-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-up order-2 md:order-1">
            <div className="aspect-[3/4] overflow-hidden shadow-image">
              <img
                src={photographerPortrait}
                alt="Portrait of the photographer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-taupe -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-refined text-muted-foreground mb-4 tracking-[0.2em]">
              The Photographer
            </p>
            
            <h2 className="heading-section text-foreground mb-6">
              Eleanor <span className="italic font-normal">Rose</span>
            </h2>

            <div className="w-12 h-px bg-taupe mb-8" />

            <p className="text-elegant text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience capturing love stories across the world's most 
              breathtaking destinations, I believe that every wedding is a unique masterpiece 
              waiting to be immortalized.
            </p>

            <p className="text-elegant text-muted-foreground mb-8 leading-relaxed">
              My approach blends documentary authenticity with fine art aesthetics—creating 
              images that feel both timeless and deeply personal. Your wedding day deserves 
              nothing less than extraordinary.
            </p>

            <p className="font-heading text-lg italic text-forest">
              "Your story, beautifully told."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
