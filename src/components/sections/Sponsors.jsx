import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: '/sponsors/logo1.png' },
    // Add more sponsors...
  ];

  return (
    <div className="py-16 bg-dark overflow-hidden">
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex gap-8"
      >
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <motion.div
            key={`${sponsor.id}-${index}`}
            whileHover={{ 
              filter: "grayscale(0%)",
              scale: 1.05,
              boxShadow: "0 0 20px rgba(92,39,254,0.3)"
            }}
            className="w-48 h-24 bg-card/50 rounded-lg filter grayscale hover:grayscale-0 
                     transition-all duration-300 flex items-center justify-center"
          >
            <img src={sponsor.logo} alt={sponsor.name} className="max-w-[80%] max-h-[80%]" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Sponsors;
