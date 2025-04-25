export const fadeIn = (direction = 'up', delay = 0) => ({
  initial: {
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    opacity: 0
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: delay
    }
  }
});

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const glowPulse = {
  initial: { 
    boxShadow: '0 0 0 rgba(92, 39, 254, 0)' 
  },
  animate: {
    boxShadow: [
      '0 0 20px rgba(92, 39, 254, 0.3)',
      '0 0 40px rgba(255, 0, 195, 0.2)',
      '0 0 20px rgba(92, 39, 254, 0.3)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: ['-10px', '10px', '-10px'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
