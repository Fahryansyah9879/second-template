import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { clientData } from '@/config/clientData';

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<null | any>(null);

  // Mengambil 12 foto pertama
  const allImages = clientData.images.portfolio
    .slice(0, 12)
    .map((src, index) => ({
      src,
      title: clientData.portfolioItems[index]?.title || `Moment ${index + 1}`,
      location: clientData.portfolioItems[index]?.location || 'Gallery',
    }));

  /**
   * Strategi Distribusi:
   * Agar simetris, kita membagi 12 foto ke dalam 3 array (kolom).
   * Tips: Jika ada foto yang sangat tinggi, letakkan di kolom yang memiliki banyak foto kotak (1:1).
   */
  const columns = [
    allImages.filter((_, i) => i % 3 === 0), // Foto 1, 4, 7, 10
    allImages.filter((_, i) => i % 3 === 1), // Foto 2, 5, 8, 11
    allImages.filter((_, i) => i % 3 === 2), // Foto 3, 6, 9, 12
  ];

  return (
    <section id='portfolio' className='section-padding bg-[#FAF9F6]'>
      <div className='container-wide'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-serif text-charcoal'>
            Instagram Gallery
          </h2>
          <div className='h-px w-16 bg-charcoal/20 mx-auto mt-4' />
        </div>

        {/* Flexbox Masonry Wrapper */}
        <div className='flex flex-col md:flex-row gap-[15px]'>
          {columns.map((column, colIdx) => (
            <div key={colIdx} className='flex-1 flex flex-col gap-[15px]'>
              {column.map((img, imgIdx) => (
                <motion.div
                  key={imgIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (colIdx + imgIdx) * 0.1 }}
                  className='relative group cursor-pointer overflow-hidden rounded-[12px] bg-white shadow-sm'
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className='w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105'
                  />

                  {/* Subtle Overlay */}
                  <div className='absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-sm p-4'
            onClick={() => setSelectedImage(null)}
          >
            <button className='absolute top-6 right-6 text-charcoal'>
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className='max-w-3xl w-full flex flex-col items-center'
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                className='max-h-[80vh] w-auto rounded-lg shadow-2xl'
              />
              <p className='mt-4 font-serif text-xl'>{selectedImage.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
