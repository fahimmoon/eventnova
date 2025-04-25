import { motion } from 'framer-motion';

export const AbstractShape = ({ className }) => (
  <motion.svg
    viewBox="0 0 200 200"
    className={className}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5c27fe" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#ff00c3" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <path
      d="M42.2,-65.7C54.9,-59.5,65.5,-47.8,71.7,-33.9C77.9,-20,79.7,-3.9,76.2,10.7C72.8,25.2,64.1,38.2,52.9,47.1C41.7,56,28,60.8,13.8,63.3C-0.4,65.9,-15.2,66.2,-29.3,62.1C-43.4,58,-56.8,49.5,-65.5,37.3C-74.3,25.1,-78.3,9.1,-76.1,-5.8C-73.9,-20.8,-65.4,-34.7,-54,-45.1C-42.6,-55.6,-28.3,-62.5,-13.7,-65.8C0.9,-69,15.5,-68.6,29.5,-67.7C43.6,-66.8,57.1,-65.4,42.2,-65.7Z"
      fill="url(#grad1)"
    />
  </motion.svg>
);

export const WavePattern = ({ className }) => (
  <motion.svg
    viewBox="0 0 1440 320"
    className={className}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <path
      fill="#5c27fe"
      fillOpacity="0.1"
      d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </motion.svg>
);

export const GridPattern = ({ className }) => (
  <svg className={className}>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path
        d="M 20 0 L 0 0 0 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.1"
      />
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);
