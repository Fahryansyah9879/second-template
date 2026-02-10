import { motion } from 'framer-motion';
import { clientData } from '@/config/clientData';

const AboutSection = () => {
  return (
    <section className='section-padding bg-background overflow-hidden'>
      <div className='container-luxury'>
        {' '}
        {/* Pastikan container ini ada di CSS Anda */}
        <div className='grid md:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative order-2 md:order-1'
          >
            <div className='aspect-[3/4] overflow-hidden shadow-image'>
              <img
                src={clientData.images.photographerPortrait}
                alt='Portrait of the photographer'
                className='w-full h-full object-cover'
              />
            </div>
            {/* Decorative Element */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className='absolute -bottom-4 -right-4 w-32 h-32 border border-taupe -z-10'
            />
          </motion.div>

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='order-1 md:order-2'
          >
            <p className='text-refined text-muted-foreground mb-4 tracking-[0.2em]'>
              The Photographer
            </p>

            <h2 className='heading-section text-foreground mb-6'>
              {clientData.brand.name}{' '}
              <span className='italic font-normal'>
                {clientData.brand.nameAccent}
              </span>
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }} // setara w-12
              transition={{ delay: 0.6, duration: 0.8 }}
              className='h-px bg-taupe mb-8'
            />

            {clientData.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className='text-elegant text-muted-foreground mb-6 leading-relaxed'
              >
                {paragraph}
              </p>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className='font-heading text-lg italic text-forest'
            >
              "{clientData.brand.philosophyQuote}"
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
