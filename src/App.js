import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import { Navbar } from './components/layout/Navbar';
import AOS from 'aos';
import ScrollToTop from './components/ui/ScrollToTop';
import IntroLoader from './components/ui/IntroLoader';
import { ContactProvider } from './context/ContactContext';
import FloatingContactForm from './components/ui/FloatingContactForm';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      easing: 'ease-out-cubic',
      delay: 50
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => setIsReady(true), 500);
  };

  return (
    <ContactProvider>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroLoader onComplete={handleIntroComplete} />
        ) : (
          <motion.main
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark min-h-screen"
          >
            {isReady && (
              <>
                <Navbar />
                <Home />
                <ScrollToTop />
              </>
            )}
          </motion.main>
        )}
      </AnimatePresence>
      <FloatingContactForm />
    </ContactProvider>
  );
}

export default App;
