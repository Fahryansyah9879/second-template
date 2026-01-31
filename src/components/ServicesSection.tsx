import { Camera, Heart, Sparkles } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Full-Day Coverage",
    description: "From getting ready to the last dance, complete documentation of your celebration with a second photographer."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Engagement Sessions",
    description: "A relaxed, romantic session to celebrate your engagement and create stunning images for your invitations."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Destination Weddings",
    description: "Travel worldwide to capture your love story in the world's most breathtaking locations."
  }
];

const ServicesSection = () => {
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
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 stagger-children">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-8 lg:p-10 text-center group hover:shadow-elevated transition-shadow duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-forest border border-taupe group-hover:bg-forest group-hover:text-primary-foreground group-hover:border-forest transition-all duration-500">
                {service.icon}
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
