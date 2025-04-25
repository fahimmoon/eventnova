import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { FiClock, FiMapPin, FiUser, FiChevronDown } from 'react-icons/fi';

const sessions = [
  {
    day: "Day 1",
    date: "June 30, 2025",
    events: [
      {
        time: "09:00 AM",
        title: "Opening Keynote",
        speaker: "Sarah Johnson",
        location: "Main Hall",
        description: "Future of Tech & Innovation"
      },
      {
        time: "11:00 AM",
        title: "AI Workshop",
        speaker: "Dr. Michael Chen",
        location: "Workshop Room A",
        description: "Hands-on AI Development"
      }
    ]
  },
  // Add more days...
];

const TimelineEvent = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8"
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 w-4 h-4 rounded-full bg-primary"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring" }}
      />
      
      {/* Event card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-card/80 backdrop-blur-sm rounded-lg p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start">
          <div>
            <span className="text-primary text-sm">{event.time}</span>
            <h3 className="text-white font-bold mt-1">{event.title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiChevronDown className="text-gray-400" />
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0 }}
          className="overflow-hidden"
        >
          {isExpanded && (
            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FiUser className="text-primary" />
                {event.speaker}
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-primary" />
                {event.location}
              </div>
              <p className="text-gray-300 mt-2">{event.description}</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-20 bg-dark" id="timeline">
      <div className="max-w-4xl mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Event Schedule</h2>
          <p className="text-gray-400">Explore our day-by-day program</p>
        </motion.div>

        {/* Progress Line */}
        <div className="relative">
          <div className="absolute left-[15px] top-0 w-[2px] h-full bg-white/10" />
          <motion.div
            className="absolute left-[15px] top-0 w-[2px] bg-gradient-to-b from-primary to-secondary"
            style={{ scaleY: scaleX, transformOrigin: "top" }}
          />

          {/* Timeline Events */}
          {sessions.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-12">
              <h3 className="text-2xl text-white font-bold mb-6">{day.date}</h3>
              {day.events.map((event, eventIndex) => (
                <TimelineEvent key={eventIndex} event={event} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
