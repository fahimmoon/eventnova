import { motion } from 'framer-motion';
import { FiCalendar, FiHeadphones, FiGrid, FiLock, FiVideo, FiSmartphone, FiKey, FiMessageSquare, FiBookOpen, FiAward } from 'react-icons/fi';
import { fadeIn, staggerContainer, glowPulse } from '../../utils/animations';

const featuresList = [
  {
    icon: FiCalendar,
    title: "Easy Booking Process",
    description: "Book your event in minutes with our streamlined booking system."
  },
  {
    icon: FiHeadphones,
    title: "24/7 Customer Support",
    description: "Our dedicated team is always available to assist you with any queries."
  },
  {
    icon: FiGrid,
    title: "Flexible Event Options",
    description: "Customize your event with our wide range of venue and service options."
  },
  {
    icon: FiLock,
    title: "Secure Payment Gateway",
    description: "Your transactions are protected with state-of-the-art security measures."
  },
  {
    icon: FiVideo,
    title: "VR-Enabled Sessions",
    description: "Experience keynotes in immersive virtual reality with real-time interaction."
  },
  {
    icon: FiKey,
    title: "NFT-Based Access",
    description: "Exclusive blockchain-verified tickets with special VIP privileges."
  },
  {
    icon: FiSmartphone,
    title: "Mobile Networking",
    description: "Connect with attendees through our AI-powered networking app."
  },
  {
    icon: FiMessageSquare,
    title: "Live Q&A Sessions",
    description: "Interactive Q&A with real-time translation in 30+ languages."
  },
  {
    icon: FiBookOpen,
    title: "Smart Scheduling",
    description: "AI-driven session recommendations based on your interests."
  },
  {
    icon: FiAward,
    title: "Digital Certificates",
    description: "Blockchain-verified certificates of attendance and achievements."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600">
            Discover the features that make our platform stand out
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuresList.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeIn('up', index * 0.2)}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                variants={glowPulse}
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto"
              >
                <feature.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
