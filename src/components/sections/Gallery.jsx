import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const images = [
  {
    src: "https://source.unsplash.com/random/800x600?event=1",
    title: "Opening Ceremony"
  },
  {
    src: "https://source.unsplash.com/random/800x600?conference=1",
    title: "Keynote Speech"
  },
  {
    src: "https://source.unsplash.com/random/800x600?workshop=1",
    title: "Interactive Workshop"
  },
  {
    src: "https://source.unsplash.com/random/800x600?networking=1",
    title: "Networking Session"
  },
  {
    src: "https://source.unsplash.com/random/800x600?party=1",
    title: "After Party"
  },
  {
    src: "https://source.unsplash.com/random/800x600?tech=1",
    title: "Tech Exhibition"
  }
];

const GalleryImage = ({ image, onClick, index }) => (
  <motion.div
    className="relative overflow-hidden rounded-xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 8px 30px rgba(92, 39, 254, 0.2)"
    }}
  >
    <motion.img
      src={image.src}
      alt={image.title}
      className="w-full h-full object-cover"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.4 }}
    />
    <motion.div
      className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 hover:opacity-100 
                 transition-opacity flex items-end p-4"
      onClick={() => onClick(image)}
    >
      <h3 className="text-white font-semibold">{image.title}</h3>
    </motion.div>
  </motion.div>
);

const ImageLightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center"
    onClick={onClose}
  >
    <motion.img
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      src={images[currentIndex].src}
      alt={images[currentIndex].title}
      className="max-w-full max-h-[90vh] object-contain rounded-lg"
      onClick={(e) => e.stopPropagation()}
    />
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-white p-2 hover:text-primary"
    >
      <FiX size={24} />
    </button>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onPrev();
      }}
      className="absolute left-4 text-white p-2 hover:text-primary"
    >
      <FiArrowLeft size={24} />
    </button>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onNext();
      }}
      className="absolute right-4 text-white p-2 hover:text-primary"
    >
      <FiArrowRight size={24} />
    </button>
  </motion.div>
);

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <section className="py-20 bg-dark" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Event Gallery
          </h2>
          <p className="text-gray-400">
            Relive the moments from our previous events
          </p>
        </motion.div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 px-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            <GalleryImage 
              image={image}
              index={index}
              onClick={() => setCurrentImage(index)}
            />
          </div>
        ))}
      </div>
      
      <AnimatePresence>
        {currentImage !== null && (
          <ImageLightbox
            images={images}
            currentIndex={currentImage}
            onClose={() => setCurrentImage(null)}
            onNext={() => setCurrentImage((prev) => (prev + 1) % images.length)}
            onPrev={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
