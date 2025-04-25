import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "CEO, TechStart",
    image: "https://source.unsplash.com/random/100x100?portrait=1",
    text: "The best tech event I've attended. The networking opportunities were invaluable.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, CodeCorp",
    image: "https://source.unsplash.com/random/100x100?portrait=2",
    text: "Incredible speakers and amazing organization. Can't wait for next year!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, InnovateCo",
    image: "https://source.unsplash.com/random/100x100?portrait=3",
    text: "The workshops were extremely informative. Great learning experience.",
    rating: 5
  }
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1, type: "spring" }}
      >
        <FiStar 
          className={`w-5 h-5 ${i < rating ? 'text-primary fill-primary' : 'text-gray-400'}`} 
        />
      </motion.div>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="bg-card/80 backdrop-blur-sm p-6 rounded-xl"
  >
    <div className="flex flex-col md:flex-row items-center gap-6">
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="flex-1 text-center md:text-left">
        <StarRating rating={testimonial.rating} />
        <p className="text-gray-300 text-lg mb-4">
          "{testimonial.text}"
        </p>
        <h4 className="text-white font-semibold">
          {testimonial.name}
        </h4>
        <p className="text-primary text-sm">
          {testimonial.role}
        </p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-dark relative overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Attendees Say
          </h2>
          <p className="text-gray-400">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <TestimonialCard key={current} testimonial={testimonials[current]} />
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white"
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
