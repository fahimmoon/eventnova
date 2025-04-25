import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiX, FiCalendar, FiUsers, FiClock } from 'react-icons/fi';

const BookingModal = ({ isOpen, onClose, eventDetails }) => {
  const [step, setStep] = useState(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md bg-dark/90 rounded-xl p-6 border border-primary/20"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-primary"
            >
              <FiX size={24} />
            </button>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Book Your Event</h3>
              <p className="text-gray-400">Fill in the details below</p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Number of Attendees</label>
                <div className="flex items-center gap-2 mt-1">
                  <FiUsers className="text-primary" />
                  <input
                    type="number"
                    min="1"
                    className="w-full px-4 py-2 bg-dark/50 border border-white/10 rounded-lg 
                             focus:border-primary transition-colors"
                    placeholder="Enter number of attendees"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400">Preferred Date</label>
                <div className="flex items-center gap-2 mt-1">
                  <FiCalendar className="text-primary" />
                  <input
                    type="date"
                    className="w-full px-4 py-2 bg-dark/50 border border-white/10 rounded-lg 
                             focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400">Time Slot</label>
                <div className="flex items-center gap-2 mt-1">
                  <FiClock className="text-primary" />
                  <select
                    className="w-full px-4 py-2 bg-dark/50 border border-white/10 rounded-lg 
                             focus:border-primary transition-colors"
                  >
                    <option value="">Select a time slot</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 bg-primary text-white rounded-lg"
              >
                Confirm Booking
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
