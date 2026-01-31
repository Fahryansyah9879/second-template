import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";

interface PortfolioImage {
  src: string;
  alt: string;
  title: string;
  location: string;
  size: "small" | "medium" | "large";
}

const portfolioImages: PortfolioImage[] = [
  { src: portfolio1, alt: "Wedding rings detail", title: "The Promise", location: "Napa Valley", size: "medium" },
  { src: portfolio2, alt: "Couple embrace in garden", title: "Garden Romance", location: "Tuscany", size: "large" },
  { src: portfolio3, alt: "Luxury venue interior", title: "Grand Affair", location: "The Plaza, NYC", size: "large" },
  { src: portfolio4, alt: "Bride portrait", title: "Radiant Bride", location: "Paris", size: "medium" },
  { src: portfolio5, alt: "First dance moment", title: "First Dance", location: "Lake Como", size: "large" },
  { src: portfolio6, alt: "Wedding bouquet", title: "Florals", location: "Provence", size: "small" },
  { src: portfolio7, alt: "Outdoor ceremony", title: "The Vows", location: "Amalfi Coast", size: "large" },
  { src: portfolio8, alt: "Table setting detail", title: "Details", location: "Martha's Vineyard", size: "small" },
];

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-champagne">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-refined text-muted-foreground mb-4 tracking-[0.2em]">
            Featured Work
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Portfolio
          </h2>
          <div className="divider-elegant" />
          <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
            A curated selection of moments from weddings around the world, 
            each telling its own beautiful story.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 stagger-children">
          {/* Row 1 */}
          <div 
            className="col-span-1 row-span-1 image-hover-zoom relative group"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img src={portfolioImages[0].src} alt={portfolioImages[0].alt} className="w-full h-full object-cover" />
            </div>
            <ImageOverlay image={portfolioImages[0]} isHovered={hoveredIndex === 0} />
          </div>

          <div 
            className="col-span-2 row-span-1 image-hover-zoom relative group"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="aspect-[16/9] md:aspect-[2/1] overflow-hidden">
              <img src={portfolioImages[1].src} alt={portfolioImages[1].alt} className="w-full h-full object-cover" />
            </div>
            <ImageOverlay image={portfolioImages[1]} isHovered={hoveredIndex === 1} />
          </div>

          <div 
            className="col-span-1 row-span-2 image-hover-zoom relative group"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="aspect-[3/4] md:aspect-auto md:h-full overflow-hidden">
              <img src={portfolioImages[3].src} alt={portfolioImages[3].alt} className="w-full h-full object-cover" />
            </div>
            <ImageOverlay image={portfolioImages[3]} isHovered={hoveredIndex === 3} />
          </div>

          {/* Row 2 */}
          <div 
            className="col-span-1 row-span-1 image-hover-zoom relative group"
            onMouseEnter={() => setHoveredIndex(5)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="aspect-square overflow-hidden">
              <img src={portfolioImages[5].src} alt={portfolioImages[5].alt} className="w-full h-full object-cover" />
            </div>
            <ImageOverlay image={portfolioImages[5]} isHovered={hoveredIndex === 5} />
          </div>

          <div 
            className="col-span-2 row-span-1 image-hover-zoom relative group"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="aspect-[16/9] md:aspect-[2/1] overflow-hidden">
              <img src={portfolioImages[2].src} alt={portfolioImages[2].alt} className="w-full h-full object-cover" />
            </div>
            <ImageOverlay image={portfolioImages[2]} isHovered={hoveredIndex === 2} />
          </div>

          {/* Row 3 */}
          <div 
            className="col-span-2 row-span-1 image-hover-zoom relative group"
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="aspect-[16/9] md:aspect-[2/1] overflow-hidden">
              <img src={portfolioImages[4].src} alt={portfolioImages[4].alt} className="w-full h-full object-cover" />
            </div>
            <ImageOverlay image={portfolioImages[4]} isHovered={hoveredIndex === 4} />
          </div>

          <div 
            className="col-span-1 row-span-1 image-hover-zoom relative group"
            onMouseEnter={() => setHoveredIndex(6)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={portfolioImages[6].src} alt={portfolioImages[6].alt} className="w-full h-full object-cover" />
            </div>
            <ImageOverlay image={portfolioImages[6]} isHovered={hoveredIndex === 6} />
          </div>

          <div 
            className="col-span-1 row-span-1 image-hover-zoom relative group"
            onMouseEnter={() => setHoveredIndex(7)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={portfolioImages[7].src} alt={portfolioImages[7].alt} className="w-full h-full object-cover" />
            </div>
            <ImageOverlay image={portfolioImages[7]} isHovered={hoveredIndex === 7} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageOverlay = ({ image, isHovered }: { image: PortfolioImage; isHovered: boolean }) => (
  <div 
    className={`absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-4 md:p-6 transition-opacity duration-500 ${
      isHovered ? "opacity-100" : "opacity-0"
    }`}
  >
    <div className="text-primary-foreground">
      <p className="font-heading text-lg md:text-xl mb-1">{image.title}</p>
      <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/70">{image.location}</p>
    </div>
  </div>
);

export default PortfolioSection;
