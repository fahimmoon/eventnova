import { motion, AnimatePresence } from 'framer-motion';
import { useContact } from '../../context/ContactContext';
import { ContactForm } from './ContactTrigger';

const FloatingContactForm = () => {
  const { contactState, closeContact } = useContact();

  return (
    <AnimatePresence>
      {contactState.isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
               onClick={closeContact} />
          <ContactForm 
            onClose={closeContact}
            initialData={contactState}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactForm;
