import { motion, useMotionValue, useTransform, useSpring, useAnimation } from 'framer-motion';
import { Button } from '../ui/Button';
import { FiClock, FiMapPin, FiCalendar } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import BookingModal from '../ui/BookingModal';
import { ScheduleIllustration } from '../ui/illustrations/EventIllustrations';
import { WavePattern } from '../ui/illustrations/Shapes';

const events = [
  {
    id: 1,
    name: "Tech Conference 2024",
    date: "March 15, 2024",
    time: "09:00 AM - 05:00 PM",
    location: "Digital Arena",
    description: "Join industry leaders for a day of innovation and networking.",
    category: "Technology",
    image: "/images/tech-conference.jpg"
  },
  {
    id: 2,
    name: "Music Festival",
    date: "April 2, 2024",
    time: "06:00 PM - 11:00 PM",
    location: "Central Park",
    description: "Experience live performances from top artists across genres.",
    category: "Entertainment",
    image: "/images/music-festival.jpg"
  },
  {
    id: 3,
    name: "Business Summit",
    date: "April 15, 2024",
    time: "10:00 AM - 04:00 PM",
    location: "Grand Hotel",
    description: "Connect with entrepreneurs and learn from business experts.",
    category: "Business",
    image: "/images/business-summit.jpg"
  }
];

const EventCard = ({ event }) => {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useTransform(tiltY, [-100, 100], [10, -10]);
  const rotateY = useTransform(tiltX, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const posX = e.clientX - centerX;
    const posY = e.clientY - centerY;
    tiltX.set(posX / 10);
    tiltY.set(posY / 10);
  };

  return (
    <motion.div
      className="relative w-[300px] h-[400px] rounded-xl overflow-hidden"
      whileHover={{ scale: 1.05 }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        tiltX.set(0);
        tiltY.set(0);
      }}
    >
      <div className="absolute inset-0">
        <img 
          src={event.image} 
          alt={event.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm mb-3">
          {event.category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
        
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <FiCalendar className="text-primary" />
            {event.date}
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="text-primary" />
            {event.time}
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin className="text-primary" />
            {event.location}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

const Schedule = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [sliderRef, setSliderRef] = useState(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const autoSlide = setInterval(() => {
      controls.start({
        x: x.get() - 320,
        transition: { duration: 0.5 }
      });
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [controls, x]);

  const handleDragEnd = () => {
    const xPos = x.get();
    const width = sliderRef?.scrollWidth - sliderRef?.offsetWidth || 0;
    if (xPos > 0) x.set(0);
    if (xPos < -width) x.set(-width);
  };

  return (
    <section className="relative py-20 bg-dark overflow-hidden" id="schedule">
      <WavePattern className="absolute bottom-0 w-full" />
      <div className="relative z-10 container-padded">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="font-bold text-white mb-2 md:mb-4">
            Upcoming Events
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            Book your spot at our exclusive events
          </p>
        </motion.div>

        <motion.div
          ref={setSliderRef}
          className="flex gap-6 px-4"
          drag="x"
          dragConstraints={{ 
            left: sliderRef ? -(sliderRef.scrollWidth - sliderRef.offsetWidth) : 0,
            right: 0 
          }}
          animate={controls}
          style={{ x: springX }}
          onDragEnd={handleDragEnd}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          <motion.div
            className="w-2 h-2 rounded-full bg-white/20"
            whileInView={{ backgroundColor: "#5c27fe" }}
          />
          {/* Add more indicators based on content */}
        </div>

        <BookingModal
          event={selectedEvent || {}}
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      </div>
    </section>
  );
};

export default Schedule;
