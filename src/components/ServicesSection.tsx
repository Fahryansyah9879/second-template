import { Camera, Heart, Sparkles, BookOpen } from "lucide-react";
import { clientData } from "@/config/clientData";

const iconMap = [
  <Camera className="w-8 h-8" key="camera" />,
  <Heart className="w-8 h-8" key="heart" />,
  <Sparkles className="w-8 h-8" key="sparkles" />,
  <BookOpen className="w-8 h-8" key="book" />,
];

const ServicesSection = () => {
  const services = clientData.services;

  return (
    <section className="section-padding bg-champagne">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-refined text-muted-foreground mb-4 tracking-[0.2em]">
            What I Offer
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Services
          </h2>
          <div className="divider-elegant" />
          <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
            Bespoke photography experiences tailored to your unique vision and celebration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 stagger-children">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-8 lg:p-10 text-center group hover:shadow-elevated transition-shadow duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-forest border border-taupe group-hover:bg-forest group-hover:text-primary-foreground group-hover:border-forest transition-all duration-500">
                {iconMap[index % iconMap.length]}
              </div>
              
              <h3 className="heading-subsection text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-elegant text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
