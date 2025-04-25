import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiTwitter, FiFacebook, FiInstagram, FiLinkedin, 
  FiYoutube, FiMail, FiPhone, FiMapPin, FiSend, FiArrowRight 
} from 'react-icons/fi';
import { Button } from '../ui/Button';

const FooterButton = ({ href, children, icon: Icon }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 
               hover:bg-primary/10 text-gray-400 hover:text-primary transition-all"
  >
    {Icon && <Icon size={18} />}
    <span>{children}</span>
  </motion.a>
);

const SocialButton = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 
               flex items-center justify-center text-gray-400 hover:text-primary 
               hover:shadow-glow transition-all"
  >
    <Icon size={20} />
  </motion.a>
);

const Footer = () => {
  const [email, setEmail] = useState('');

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press Kit', href: '#press' },
  ];

  const eventLinks = [
    { label: 'Upcoming Events', href: '#events' },
    { label: 'Past Events', href: '#past-events' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Event Gallery', href: '#gallery' },
  ];

  const resourceLinks = [
    { label: 'Blog', href: '#blog' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Support Center', href: '#support' },
    { label: 'Event Planning Guide', href: '#guide' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-dark pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">EventNova</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating unforgettable experiences through innovative event management and cutting-edge technology.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FiTwitter, href: '#twitter' },
                { icon: FiFacebook, href: '#facebook' },
                { icon: FiInstagram, href: '#instagram' },
                { icon: FiLinkedin, href: '#linkedin' },
                { icon: FiYoutube, href: '#youtube' }
              ].map((social, index) => (
                <SocialButton key={index} {...social} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <div className="grid grid-cols-1 gap-3">
              {companyLinks.map((link, index) => (
                <FooterButton key={index} href={link.href}>
                  {link.label}
                </FooterButton>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Events</h4>
            <div className="grid grid-cols-1 gap-3">
              {eventLinks.map((link, index) => (
                <FooterButton 
                  key={index} 
                  href={link.href}
                  icon={FiArrowRight}
                >
                  {link.label}
                </FooterButton>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <p className="text-gray-400 text-sm">Subscribe to our newsletter for exclusive updates and offers.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg
                           text-white placeholder:text-gray-500 focus:border-primary"
                  required
                />
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="sm" 
                  icon={FiSend}
                  className="hover:scale-105 transition-transform"
                >
                  Join
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-white/10">
          {[
            { icon: FiPhone, text: '+1 (555) 123-4567' },
            { icon: FiMail, text: 'contact@eventnova.com' },
            { icon: FiMapPin, text: '123 Event Street, NY 10001' },
          ].map(({ icon: Icon, text }, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400">
              <Icon size={16} className="text-primary" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Privacy Policy', href: '#privacy' },
              { label: 'Terms of Service', href: '#terms' },
              { label: 'Cookie Policy', href: '#cookies' }
            ].map((link, index) => (
              <FooterButton 
                key={index} 
                href={link.href}
                className="text-sm"
              >
                {link.label}
              </FooterButton>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
