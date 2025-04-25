import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactCountdown from 'react-countdown';
import { FiBell, FiCalendar, FiX } from 'react-icons/fi';
import { Button } from './Button';

const CountdownItem = ({ value, label, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="flex flex-col items-center p-2 sm:p-3 backdrop-blur-lg bg-dark/30 rounded-lg cursor-pointer
               hover:bg-primary/10 transition-all duration-300"
  >
    <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold gradient-text">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-[10px] sm:text-xs text-gray-400">
      {label}
    </span>
  </motion.div>
);

const ReminderPopup = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="fixed inset-0 z-50 flex items-center justify-center px-4"
  >
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
    <div className="relative bg-dark/90 p-6 rounded-xl border border-primary/20 max-w-md w-full">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
        <FiX />
      </button>
      <h3 className="text-xl font-bold mb-4">Set Event Reminder</h3>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-2 focus:border-primary"
        />
        <Button variant="primary" className="w-full" icon={FiBell}>
          Remind Me
        </Button>
      </div>
    </div>
  </motion.div>
);

const Countdown = () => {
  const [showReminder, setShowReminder] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const eventDate = new Date("June 30, 2025 12:00:00").getTime();

  const handleItemClick = (type) => {
    setActiveItem(type);
    setShowReminder(true);
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-primary/20 p-4 rounded-lg"
        >
          <p className="text-xl font-bold">Event has started! 🎉</p>
        </motion.div>
      );
    }

    return (
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        <CountdownItem 
          value={days} 
          label="Days" 
          onClick={() => handleItemClick('days')} 
        />
        <CountdownItem 
          value={hours} 
          label="Hours" 
          onClick={() => handleItemClick('hours')} 
        />
        <CountdownItem 
          value={minutes} 
          label="Minutes" 
          onClick={() => handleItemClick('minutes')} 
        />
        <CountdownItem 
          value={seconds} 
          label="Seconds" 
          onClick={() => handleItemClick('seconds')} 
        />
      </div>
    );
  };

  return (
    <div className="mt-8 md:mt-12 relative">
      <ReactCountdown 
        date={eventDate}
        renderer={renderer}
        onComplete={() => console.log('Event started!')}
      />

      <AnimatePresence>
        {showReminder && (
          <ReminderPopup onClose={() => {
            setShowReminder(false);
            setActiveItem(null);
          }} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-center text-sm text-gray-400"
      >
        Click on any time unit to set a reminder
      </motion.div>
    </div>
  );
};

export default Countdown;
