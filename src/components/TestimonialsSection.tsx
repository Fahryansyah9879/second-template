import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  couple: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Eleanor captured our day with such grace and artistry. Every photograph feels like a page from a beautiful storybook. We couldn't be more grateful.",
    couple: "Sarah & James",
    location: "Lake Como, Italy"
  },
  {
    quote: "The way she captured the light, the emotion, the tiny details we didn't even notice—it's absolutely magical. These photos are our most treasured possessions.",
    couple: "Victoria & Alexander",
    location: "The Plaza, New York"
  },
  {
    quote: "Working with Eleanor was a dream. She made us feel so comfortable, and the results exceeded every expectation. Pure artistry.",
    couple: "Charlotte & William",
    location: "Château de Chantilly, France"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-refined text-muted-foreground mb-4 tracking-[0.2em]">
            Kind Words
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Testimonials
          </h2>
          <div className="divider-elegant" />
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
            >
              <blockquote className="text-center">
                <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="w-12 h-px bg-taupe mx-auto mb-6" />
                
                <footer>
                  <cite className="not-italic">
                    <span className="block font-heading text-xl text-foreground mb-1">
                      {testimonials[currentIndex].couple}
                    </span>
                    <span className="text-refined text-muted-foreground text-xs tracking-[0.15em]">
                      {testimonials[currentIndex].location}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={goToPrev}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-forest w-6" 
                      : "bg-taupe hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
