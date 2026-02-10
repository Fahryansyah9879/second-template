import { Instagram, Mail, Phone, MessageCircle } from 'lucide-react';
import { clientData } from '@/config/clientData';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id='contact'
      className='bg-charcoal text-primary-foreground border-t border-white/5'
    >
      <div className='section-padding py-24'>
        <div className='container-narrow px-6 text-center'>
          {/* Brand Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='mb-16'
          >
            <h2 className='font-heading text-3xl md:text-4xl mb-4 tracking-tight'>
              {clientData.brand.name}{' '}
              <span className='italic font-light opacity-80'>
                {clientData.brand.nameAccent}
              </span>
            </h2>
            <p className='text-refined text-primary-foreground/40 tracking-[0.4em] uppercase text-[9px] md:text-[10px]'>
              {clientData.brand.tagline}
            </p>
          </motion.div>

          {/* Main Action Area */}
          <div className='mb-20'>
            {/* WhatsApp Button - Samakan dengan Hero */}
            {/* Tombol WA yang disesuaikan agar konsisten dengan Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='flex justify-center'
            >
              <Button
                variant='elegantLight' // Ini akan memastikan warnanya sama dengan tombol di CTA
                size='xl'
                asChild
                className='hover:scale-105 transition-transform duration-300'
              >
                <a
                  href={`https://wa.me/${clientData.contact.phoneRaw}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3'
                >
                  <WhatsAppIcon />
                  Contact via WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Secondary Links & Socials */}
          <div className='space-y-12'>
            {/* Email & Phone - Hover terpisah */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12'>
              <a
                href={`mailto:${clientData.contact.email}`}
                className='flex items-center gap-3 text-primary-foreground/40 hover:text-primary-foreground transition-all duration-300 group'
              >
                <Mail className='w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity' />
                <span className='text-[10px] tracking-[0.2em] uppercase'>
                  {clientData.contact.email}
                </span>
              </a>
              <div className='hidden md:block w-[1px] h-3 bg-white/10' />
              <a
                href={`tel:${clientData.contact.phoneRaw}`}
                className='flex items-center gap-3 text-primary-foreground/40 hover:text-primary-foreground transition-all duration-300 group'
              >
                <Phone className='w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity' />
                <span className='text-[10px] tracking-[0.2em] uppercase'>
                  {clientData.contact.phone}
                </span>
              </a>
            </div>

            {/* Social Icons - Hover terpisah */}
            <div className='flex items-center justify-center gap-8'>
              {[
                {
                  icon: <Instagram className='w-5 h-5' />,
                  link: clientData.social.instagram,
                },
                {
                  icon: (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5' />
                    </svg>
                  ),
                  link: clientData.social.pinterest,
                },
              ].map(
                (social, index) =>
                  social.link && (
                    <a
                      key={index}
                      href={social.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-foreground/30 hover:text-primary-foreground hover:-translate-y-1 transition-all duration-500'
                    >
                      {social.icon}
                    </a>
                  )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className='border-t border-white/5 py-8 text-center px-6'>
        <p className='text-center text-xs text-primary-foreground/40 tracking-wider'>
          © {currentYear} {clientData.brand.name} {clientData.brand.nameAccent}{' '}
          Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const WhatsAppIcon = () => (
  <svg className='w-4 h-4 mr-2' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
  </svg>
);
