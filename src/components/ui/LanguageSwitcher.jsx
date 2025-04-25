import { motion } from 'framer-motion';
import { useState } from 'react';

const languages = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'es', flag: '🇪🇸', name: 'Spanish' },
  { code: 'fr', flag: '🇫🇷', name: 'French' },
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  return (
    <motion.div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-dark/50 backdrop-blur-sm border border-white/10"
      >
        <span className="text-xl">{currentLang.flag}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-2 right-0 bg-dark/90 rounded-lg 
                     border border-white/10 backdrop-blur-lg overflow-hidden"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                whileHover={{ backgroundColor: "rgba(92,39,254,0.1)" }}
                onClick={() => {
                  setCurrentLang(lang);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 w-full text-left hover:text-primary"
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LanguageSwitcher;
