import { motion } from 'framer-motion';
import { FiUsers, FiMic, FiCalendar, FiGlobe } from 'react-icons/fi';
import { fadeIn, staggerContainer } from '../../utils/animations';

const StatCard = ({ icon: Icon, value, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative group"
  >
    <motion.div
      className="absolute inset-0 bg-primary/20 rounded-lg blur-xl 
                 group-hover:bg-primary/30 transition-all duration-300"
    />
    <div className="relative p-6 text-center">
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0] }}
        className="w-12 h-12 mx-auto mb-4 text-primary"
      >
        <Icon size={48} className="filter drop-shadow-glow" />
      </motion.div>
      
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-2"
      >
        {value}
      </motion.h3>
      
      <p className="text-gray-400">{label}</p>
    </div>
  </motion.div>
);

const Stats = () => {
  const stats = [
    { icon: FiUsers, value: "5000+", label: "Attendees" },
    { icon: FiMic, value: "120+", label: "Speakers" },
    { icon: FiCalendar, value: "80+", label: "Sessions" },
    { icon: FiGlobe, value: "30+", label: "Countries" }
  ];

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', index * 0.1)}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
