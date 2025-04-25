import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiBell, FiCheck } from 'react-icons/fi';
import { Button } from './Button';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setEmail('');
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
    >
      <h3 className="text-xl font-bold text-white mb-2">Don't miss the next big thing</h3>
      <p className="text-gray-400 mb-4">Get exclusive updates and early access to ticket sales!</p>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg bg-dark/50 border border-white/10 text-white"
          required
        />
        <Button
          type="submit"
          variant="primary"
          icon={status === 'success' ? FiCheck : FiBell}
          isLoading={status === 'loading'}
        >
          {status === 'success' ? 'Subscribed!' : 'Subscribe'}
        </Button>
      </form>
    </motion.div>
  );
};

export default NewsletterSignup;
