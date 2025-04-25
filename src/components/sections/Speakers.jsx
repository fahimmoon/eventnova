import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiGithub, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import { AbstractShape } from '../ui/illustrations/Shapes';

const SocialIcon = ({ icon: Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, y: -2 }}
    className="relative group"
  >
    <Icon className="text-gray-400 hover:text-primary transition-colors" />
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-dark/90 text-white text-xs px-2 py-1 rounded 
                 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
    >
      {label}
    </motion.span>
  </motion.a>
);

const SpeakerCard = ({ name, role, company, image, bio, socials }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-[300px] h-[400px] relative preserve-3d cursor-pointer"
      whileHover={{ scale: 1.02 }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      {/* Front of card */}
      <div className="absolute inset-0 backface-hidden">
        <div className="h-full bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
          <div className="relative h-48 overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-primary">{role}</p>
            <p className="text-gray-400 text-sm">{company}</p>
            
            <div className="flex gap-4 mt-4">
              <SocialIcon icon={FiTwitter} href={socials.twitter} label="Twitter" />
              <SocialIcon icon={FiLinkedin} href={socials.linkedin} label="LinkedIn" />
              <SocialIcon icon={FiGithub} href={socials.github} label="GitHub" />
            </div>
          </div>
        </div>
      </div>

      {/* Back of card */}
      <div 
        className="absolute inset-0 backface-hidden bg-card/90 p-6 rounded-xl"
        style={{ transform: "rotateY(180deg)" }}
      >
        <h4 className="text-xl font-bold text-white mb-4">About {name}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
};

const Speakers = () => {
  const speakers = [
    {
      name: "Sarah Johnson",
      role: "AI Research Lead",
      company: "TechCorp",
      image: "https://source.unsplash.com/random/400x400?person=1",
      bio: "Sarah Johnson is an AI Research Lead at TechCorp, specializing in machine learning and data science.",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "David Chen",
      role: "Blockchain Expert",
      company: "CryptoInnovate",
      image: "https://source.unsplash.com/random/400x400?person=2",
      bio: "David is a renowned blockchain architect with expertise in smart contracts and DeFi solutions.",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "VR/AR Director",
      company: "MetaVerse Labs",
      image: "https://source.unsplash.com/random/400x400?person=3",
      bio: "Emily leads innovative VR/AR projects and has pioneered several breakthrough immersive experiences.",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Michael Foster",
      role: "Tech Evangelist",
      company: "Google",
      image: "https://source.unsplash.com/random/400x400?person=4",
      bio: "Michael is passionate about emerging technologies and their impact on future innovations.",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Lisa Wang",
      role: "Security Expert",
      company: "CyberShield",
      image: "https://source.unsplash.com/random/400x400?person=5",
      bio: "Lisa specializes in cybersecurity and has protected numerous Fortune 500 companies from cyber threats.",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    }
  ];

  const [sliderRef, setSliderRef] = useState(null);
  const x = useMotionValue(0);

  const handleDrag = (_, { delta }) => {
    x.set(x.get() + delta.x);
  };

  return (
    <section className="py-20 bg-dark overflow-hidden" id="speakers">
      <AbstractShape className="absolute top-0 right-0 w-72 h-72 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Speakers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn from industry leaders and innovators
          </p>
        </motion.div>
        
        <motion.div
          ref={setSliderRef}
          className="flex gap-6 px-4 snap-x snap-mandatory overflow-x-auto hide-scrollbar"
          drag="x"
          dragConstraints={sliderRef}
          onDrag={handleDrag}
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 snap-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SpeakerCard {...speaker} />
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-primary/20 text-primary"
            onClick={() => x.set(x.get() + 300)}
          >
            <FiArrowLeft />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-primary/20 text-primary"
            onClick={() => x.set(x.get() - 300)}
          >
            <FiArrowRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
