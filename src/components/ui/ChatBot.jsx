import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiMessageSquare, FiMic, FiSend } from 'react-icons/fi';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 w-80 bg-dark/95 rounded-lg shadow-2xl 
                     border border-primary/20 backdrop-blur-lg"
          >
            {/* Chat interface */}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-primary rounded-full shadow-glow"
      >
        <FiMessageSquare className="w-6 h-6 text-white" />
      </motion.button>
    </div>
  );
};

export default ChatBot;
