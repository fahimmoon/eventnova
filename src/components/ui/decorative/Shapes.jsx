import { motion } from 'framer-motion';

export const DecorativeShapes = () => {
  return (
    <>
      {/* Circles */}
      <motion.svg
        className="absolute top-20 right-10 w-20 h-20 text-primary/20"
        viewBox="0 0 100 100"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <circle cx="50" cy="50" r="40" strokeWidth="4" stroke="currentColor" fill="none" />
      </motion.svg>

      {/* Hexagon */}
      <motion.svg
        className="absolute bottom-40 left-10 w-16 h-16 text-secondary/20"
        viewBox="0 0 100 100"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <polygon 
          points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" 
          strokeWidth="4" 
          stroke="currentColor"
          fill="none"
        />
      </motion.svg>

      {/* Dots Grid */}
      <motion.svg
        className="absolute top-40 left-1/4 w-24 h-24 text-primary/30"
        viewBox="0 0 100 100"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {[...Array(16)].map((_, i) => (
          <circle
            key={i}
            cx={(i % 4) * 25 + 12.5}
            cy={Math.floor(i / 4) * 25 + 12.5}
            r="2"
            fill="currentColor"
          />
        ))}
      </motion.svg>

      {/* Glowing Lines */}
      <motion.svg
        className="absolute bottom-20 right-1/4 w-32 h-32 text-secondary/20"
        viewBox="0 0 100 100"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <motion.path
          d="M10 50 Q 25 25, 50 50 T 90 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>
    </>
  );
};
