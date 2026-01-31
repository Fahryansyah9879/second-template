import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clientData } from "@/config/clientData";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-soft py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-wide px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className={`font-heading text-xl md:text-2xl transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {clientData.brand.name} <span className="italic font-normal">{clientData.brand.nameAccent}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["portfolio", "about", "services", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item === "about" ? "about" : item)}
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:opacity-70 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {item}
              </button>
            ))}
            <Button
              variant={isScrolled ? "elegant" : "elegantLight"}
              size="sm"
              onClick={() => scrollTo("contact")}
              className="ml-4"
            >
              Inquire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal transition-opacity duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 p-2 text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {["portfolio", "about", "services", "contact"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollTo(item === "about" ? "about" : item)}
              className="font-heading text-3xl text-primary-foreground hover:text-primary-foreground/70 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          <Button
            variant="elegantLight"
            size="lg"
            onClick={() => scrollTo("contact")}
            className="mt-4"
          >
            Inquire
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
