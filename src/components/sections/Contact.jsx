import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { fadeIn } from '../../utils/animations';

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="flex items-center gap-4 p-4 bg-card/30 rounded-lg backdrop-blur-sm">
    <div className="p-3 bg-primary/20 rounded-full text-primary">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-white font-medium">{title}</h4>
      <p className="text-gray-400 text-sm">{content}</p>
    </div>
  </div>
);

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="py-20 bg-dark" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Create Your Perfect Event
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied clients who've trusted us with their events
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={fadeIn('right')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-card/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-card/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-card/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-card/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <FiSend />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeIn('left')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ContactInfo
              icon={FiMail}
              title="Email Us"
              content="info@eventnova.com"
            />
            <ContactInfo
              icon={FiPhone}
              title="Call Us"
              content="+1 (555) 123-4567"
            />
            <ContactInfo
              icon={FiMapPin}
              title="Visit Us"
              content="123 Event Street, San Francisco, CA 94105"
            />
            
            {/* Map */}
            <div className="h-[200px] rounded-lg overflow-hidden">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

