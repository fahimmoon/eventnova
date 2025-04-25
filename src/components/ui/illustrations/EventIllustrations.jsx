import { motion } from 'framer-motion';

const gradientDefs = (
  <defs>
    <linearGradient id="eventGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#5c27fe" stopOpacity="0.2" />
      <stop offset="100%" stopColor="#ff00c3" stopOpacity="0.2" />
    </linearGradient>
  </defs>
);

export const SpeakerIllustration = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ scale: 1.05 }}
  >
    {gradientDefs}
    <circle cx="50" cy="30" r="20" fill="#5c27fe" fillOpacity="0.2" />
    <circle cx="50" cy="30" r="15" fill="#5c27fe" fillOpacity="0.3" />
    <rect x="35" y="55" width="30" height="25" rx="5" fill="#ff00c3" fillOpacity="0.2" />
  </motion.svg>
);

export const TicketIllustration = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 50"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ scale: 1.05 }}
  >
    {gradientDefs}
    <rect x="5" y="10" width="90" height="30" rx="5" fill="#5c27fe" fillOpacity="0.2" />
    <line x1="70" y1="10" x2="70" y2="40" stroke="#ff00c3" strokeOpacity="0.3" strokeDasharray="2" />
  </motion.svg>
);

export const ScheduleIllustration = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ scale: 1.05 }}
  >
    {gradientDefs}
    <rect x="20" y="20" width="60" height="60" rx="5" fill="#5c27fe" fillOpacity="0.2" />
    <line x1="20" y1="35" x2="80" y2="35" stroke="#ff00c3" strokeOpacity="0.3" />
    <circle cx="35" cy="50" r="3" fill="#ff00c3" />
    <circle cx="35" cy="65" r="3" fill="#ff00c3" />
  </motion.svg>
);

export const FAQIllustration = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ scale: 1.05 }}
  >
    {gradientDefs}
    <circle cx="50" cy="50" r="40" fill="url(#eventGrad)" />
    <text x="50" y="55" fontSize="40" fill="#5c27fe" textAnchor="middle">?</text>
  </motion.svg>
);

export const GalleryIllustration = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ scale: 1.05 }}
  >
    {gradientDefs}
    <rect x="10" y="10" width="35" height="35" rx="5" fill="url(#eventGrad)" />
    <rect x="55" y="10" width="35" height="35" rx="5" fill="url(#eventGrad)" />
    <rect x="10" y="55" width="35" height="35" rx="5" fill="url(#eventGrad)" />
    <rect x="55" y="55" width="35" height="35" rx="5" fill="url(#eventGrad)" />
  </motion.svg>
);

export const ContactIllustration = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ scale: 1.05 }}
  >
    {gradientDefs}
    <rect x="20" y="30" width="60" height="40" rx="5" fill="url(#eventGrad)" />
    <path d="M20 30 L50 50 L80 30" stroke="#5c27fe" fill="none" strokeWidth="2" />
  </motion.svg>
);
