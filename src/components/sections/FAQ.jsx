import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiMessageCircle } from 'react-icons/fi';

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <motion.div
    className="border-b border-white/10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <motion.button
      className="w-full py-4 flex items-center justify-between text-left"
      whileHover={{ 
        backgroundColor: "rgba(92, 39, 254, 0.1)",
        transition: { duration: 0.2 }
      }}
      onClick={onToggle}
    >
      <span className="text-lg font-medium text-white">{question}</span>
      {isOpen ? (
        <FiMinus className="text-primary" />
      ) : (
        <FiPlus className="text-primary" />
      )}
    </motion.button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-4 text-gray-400">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When and where is the event?",
      answer: "The event will be held on June 30, 2025, at our main venue in downtown."
    },
    {
      question: "What's included in the ticket?",
      answer: "Each ticket includes access to all main sessions, workshop materials, lunch, and networking events."
    },
    // Add more FAQs
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-dark" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Find answers to common questions about the event
          </p>
        </motion.div>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AIChatButton = () => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-6 right-6 p-4 bg-primary rounded-full shadow-glow"
  >
    <FiMessageCircle className="w-6 h-6 text-white" />
  </motion.button>
);

export default FAQ;
