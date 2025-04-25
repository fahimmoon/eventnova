import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCheck, FiShield } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1000));
    setStatus('success');
  };

  return (
    <section className="py-16 bg-dark/50 backdrop-blur-lg">
      <div className="max-w-4xl mx-auto px-4">
        <motion.form 
          onSubmit={handleSubmit}
          className="relative flex flex-col md:flex-row gap-4"
        >
          <motion.input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-lg bg-dark/50 border border-primary/20 
                     text-white placeholder:text-gray-400 focus:border-primary
                     shadow-[0_0_15px_rgba(92,39,254,0.2)] focus:shadow-[0_0_30px_rgba(92,39,254,0.4)]
                     transition-all duration-300"
            required
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-primary text-white rounded-lg shadow-glow"
          >
            {status === 'success' ? 'Subscribed!' : 'Subscribe Now'}
          </motion.button>
        </motion.form>
        
        <motion.div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-sm">
          <FiShield className="text-primary" />
          <span>No spam, just exciting updates about upcoming events</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
