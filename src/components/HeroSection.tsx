import { Button } from '@/components/ui/button';
import { clientData } from '@/config/clientData';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document
      .getElementById('portfolio')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  // Variabel untuk memudahkan pengaturan stagger/durasi
  const transitionSettings = (delay = 0) => ({
    duration: 0.8,
    delay,
    ease: [0.215, 0.61, 0.355, 1.0] as const, // cubic-bezier untuk feel yang lebih halus
  });

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Background Image & Overlay */}
      <div className='absolute inset-0'>
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={clientData.images.hero}
          alt='Romantic wedding moment at golden hour'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60' />
      </div>

      {/* Content Container */}
      <div className='relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto'>
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionSettings(0.2)}
          className='text-refined text-primary-foreground/80 mb-6 tracking-[0.3em]'
        >
          {clientData.brand.tagline}
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionSettings(0.4)}
          className='heading-display text-primary-foreground mb-6 leading-[1.1]'
        >
          {clientData.brand.heroHeadline}
          <span className='block italic font-normal mt-2'>
            {clientData.brand.heroHeadlineAccent}
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionSettings(0.6)}
          className='text-elegant text-primary-foreground/90 mb-10 max-w-xl mx-auto'
        >
          {clientData.brand.heroSubtext}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionSettings(0.8)}
        >
          <Button
            variant='elegantLight'
            size='xl'
            onClick={scrollToPortfolio}
            // Hapus class animate-fade-in-delayed karena sudah dihandle Framer Motion
            className='hover:scale-105 transition-transform duration-300'
          >
            View Portfolio
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className='flex flex-col items-center gap-2 text-primary-foreground/60'
        >
          <span className='text-xs uppercase tracking-[0.2em]'>Scroll</span>
          <div className='h-12 w-px bg-primary-foreground/40' />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
