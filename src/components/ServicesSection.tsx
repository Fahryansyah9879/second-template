import { Camera, Heart, Sparkles, BookOpen } from 'lucide-react';
import { clientData } from '@/config/clientData';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  ceremony: <Heart className='w-5 h-5 stroke-[1.2]' />,
  session: <Camera className='w-5 h-5 stroke-[1.2]' />,
  delivery: <Sparkles className='w-5 h-5 stroke-[1.2]' />,
  heirloom: <BookOpen className='w-5 h-5 stroke-[1.2]' />,
};

const ServicesSection = () => {
  // Jika clientData belum update, kita bisa definisikan di sini untuk amannya
  const weddingServices = [
    {
      title: 'The Wedding Day',
      description:
        'Full day documentation capturing every raw emotion and fleeting moment from dawn till dusk.',
      icon: 'ceremony',
    },
    {
      title: 'Engagement Session',
      description:
        'A relaxed, intimate session before the big day to celebrate your unique chemistry.',
      icon: 'session',
    },
    {
      title: 'Heirloom Albums',
      description:
        'Custom-designed, handcrafted albums made to preserve your memories for generations.',
      icon: 'heirloom',
    },
    {
      title: 'Digital Curation',
      description:
        'Artistically edited high-resolution images delivered in a private, elegant online gallery.',
      icon: 'delivery',
    },
  ];

  return (
    <section id='services' className='section-padding bg-champagne'>
      <div className='container-wide px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-24'
        >
          <p className='text-[10px] text-muted-foreground mb-4 tracking-[0.4em] uppercase'>
            The Experience
          </p>
          <h2 className='font-heading text-4xl md:text-5xl text-foreground mb-6'>
            Wedding <span className='italic font-light'>Services</span>
          </h2>
          <div className='w-10 h-px bg-taupe/40 mx-auto' />
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-taupe/20 border border-taupe/20'>
          {weddingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-champagne p-12 text-center group hover:bg-white transition-all duration-700'
            >
              <div className='inline-flex items-center justify-center w-12 h-12 mb-10 text-forest border border-forest/10 rounded-full group-hover:scale-110 transition-transform duration-500'>
                {iconMap[service.icon]}
              </div>

              <h3 className='text-[13px] tracking-[0.2em] uppercase font-semibold text-foreground mb-5'>
                {service.title}
              </h3>

              <p className='text-[13px] leading-relaxed text-muted-foreground/80 font-light'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
