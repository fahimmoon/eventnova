import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeIn, staggerContainer, glowPulse, floatingAnimation } from '../../utils/animations';
import { Button } from '../ui/Button';
import Countdown from '../ui/Countdown';
import { FiArrowDown, FiPlay, FiUsers, FiVideo, FiBookOpen } from 'react-icons/fi';
import ParticleBackground from '../ui/ParticleBackground';
import { DecorativeShapes } from '../ui/decorative/Shapes';

const StatItem = ({ number, label }) => (
  <div className="text-center">
    <h4 className="text-2xl md:text-3xl font-bold gradient-text">{number}+</h4>
    <p className="text-sm text-gray-400">{label}</p>
  </div>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pb-4 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
          poster="/images/event-bg.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark" />
      </div>

      {/* Decorative Shapes */}
      <DecorativeShapes />

      {/* Particle Effect */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      {/* Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-16 md:pt-20"
      >
        <div className="flex flex-col items-center space-y-4 md:space-y-6">
          {/* Event Badge */}
          <motion.span 
            variants={fadeIn('down')}
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs"
          >
            🎉 Next Event - June 30, 2025
          </motion.span>
          
          {/* Title */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="text-center space-y-2"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">Where Innovation</span>
              <br />
              <span className="text-white">Sparks the Future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Join the most anticipated tech event of the year with VR support and NFT-based access
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button variant="primary" icon={FiBookOpen} whileHover={{ scale: 1.05 }}>
                Reserve My Spot
              </Button>
              <Button variant="outline" icon={FiUsers} whileHover={{ scale: 1.05 }}>
                View Speakers
              </Button>
              <Button variant="secondary" icon={FiVideo} whileHover={{ scale: 1.05 }}>
                Join Livestream
              </Button>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            variants={floatingAnimation}
            className="w-full max-w-2xl"
          >
            <Countdown />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="relative z-10 mx-auto"
      >
        <FiArrowDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
