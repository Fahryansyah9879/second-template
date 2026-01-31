import { clientData } from "@/config/clientData";

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-up order-2 md:order-1">
            <div className="aspect-[3/4] overflow-hidden shadow-image">
              <img
                src={clientData.images.photographerPortrait}
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
              {clientData.brand.name} <span className="italic font-normal">{clientData.brand.nameAccent}</span>
            </h2>

            <div className="w-12 h-px bg-taupe mb-8" />

            {clientData.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-elegant text-muted-foreground mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <p className="font-heading text-lg italic text-forest">
              "{clientData.brand.philosophyQuote}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
