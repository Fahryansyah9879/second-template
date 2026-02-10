import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { clientData } from '@/config/clientData';

const navLinks = [
  'home',
  'about',
  'portfolio',
  'testimonials',
  'services',
  'contact',
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm shadow-soft py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className='container-wide px-4 md:px-6 flex items-center justify-between'>
          {/* Logo */}
          <a
            href='#'
            className={`font-heading text-xl md:text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {clientData.brand.name}{' '}
            <span className='italic font-normal'>
              {clientData.brand.nameAccent}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-8'>
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:opacity-70 ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {item}
              </button>
            ))}
            <Button
              variant={isScrolled ? 'elegant' : 'elegantLight'}
              size='sm'
              onClick={() => scrollTo('contact')}
              className='ml-4'
            >
              Inquire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label='Open menu'
          >
            <Menu className='w-6 h-6' />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-[60] bg-charcoal flex flex-col items-center justify-center'
          >
            {/* Close Button Inside Overlay */}
            <button
              className='absolute top-6 right-6 p-2 text-primary-foreground'
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label='Close menu'
            >
              <X className='w-6 h-6' />
            </button>

            <div className='flex flex-col items-center gap-8'>
              {navLinks.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => scrollTo(item)}
                  className='font-heading text-3xl text-primary-foreground hover:text-primary-foreground/70 transition-colors duration-300'
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
              >
                <Button
                  variant='elegantLight'
                  size='lg'
                  onClick={() => scrollTo('contact')}
                  className='mt-4'
                >
                  Inquire
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
