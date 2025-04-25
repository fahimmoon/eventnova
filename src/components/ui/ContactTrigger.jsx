import { motion } from 'framer-motion';
import { useContact } from '../../context/ContactContext';
import { useRef, useEffect } from 'react';
import { FiX, FiCheck, FiSend } from 'react-icons/fi';

export const ContactForm = ({ onClose, initialData }) => {
  const formRef = useRef(null);
  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  return (
    <motion.div
      role="dialog"
      aria-labelledby="contact-title"
      className="relative w-full max-w-md bg-dark/90 rounded-xl p-6"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-primary"
      >
        <FiX size={24} />
      </button>
      
      <h2 id="contact-title" className="text-2xl font-bold text-white mb-4">
        Get in Touch
      </h2>

      <form ref={formRef} className="space-y-4">
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg h-32"
          defaultValue={initialData?.prefilledMessage || ''}
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-3 bg-primary text-white rounded-lg"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export const ContactTrigger = ({ 
  children, 
  context = "",
  template = "general",
  message = "" 
}) => {
  const { openContact } = useContact();

  const handleTrigger = (e) => {
    e.preventDefault();
    openContact({
      subject: context,
      template,
      prefilledMessage: message,
      triggerElement: e.currentTarget
    });
  };

  return (
    <motion.div
      onClick={handleTrigger}
      className="group relative cursor-pointer"
      whileHover="hover"
    >
      {children}
      <motion.div
        variants={{
          hover: { opacity: 1, y: 0 },
          initial: { opacity: 0, y: 10 }
        }}
        initial="initial"
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                 text-xs text-primary bg-dark/90 px-2 py-1 rounded"
      >
        Click to connect
      </motion.div>
    </motion.div>
  );
};
