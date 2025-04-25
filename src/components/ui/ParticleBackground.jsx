import { useEffect, useRef } from 'react';
import styles from '../../styles/Particles.module.css';

const ParticleBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const particleCount = 50;

    // Clear existing particles
    container.innerHTML = '';

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = styles.particle;
      
      // Random positions and sizes
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration and delay
      particle.style.animation = `${styles.float} ${Math.random() * 3 + 2}s infinite`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      
      container.appendChild(particle);
    }
  }, []);

  return <div ref={containerRef} className={styles.particleContainer} />;
};

export default ParticleBackground;
