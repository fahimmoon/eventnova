import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiCalendar, FiChevronDown, FiBell, FiInfo, FiHome, FiStar, FiAward, FiClock, FiList, FiUsers, FiHelpCircle, FiDollarSign, FiMapPin, FiMaximize2, FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import Logo from '../ui/Logo';

const PopupNotification = ({ message, type = 'info', onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full 
              bg-dark/90 backdrop-blur-sm border border-white/10 shadow-lg"
  >
    {type === 'info' ? <FiInfo className="text-primary" /> : <FiBell className="text-secondary" />}
    <span className="text-sm text-light">{message}</span>
  </motion.div>
);

const ContentWindow = ({ item, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="bg-dark/95 w-full max-w-lg rounded-xl p-6 border border-white/10"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {item.icon && <item.icon className="w-5 h-5 text-primary" />}
              <h3 className="text-xl font-bold text-white">{item.label}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <FiX size={20} />
            </button>
          </div>
          <div className="prose prose-invert max-w-none">
            {item.content || (
              <div className="text-gray-400">
                <p>Content for {item.label} will be displayed here.</p>
                <div className="mt-4 flex items-center gap-2">
                  <FiMaximize2 className="text-primary" />
                  <span>Section under development</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const NavLink = ({ to, label, dropdown, onClick, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    if (dropdown) {
      setIsOpen(!isOpen);
    } else {
      handleClick();
    }
  };

  const handleClick = () => {
    if (onClick) onClick();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="relative group" ref={dropdownRef}>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={`flex items-center gap-1 cursor-pointer text-light hover:text-primary 
                   transition-all duration-300 py-2 px-4 relative ${isActive ? 'text-primary' : ''}`}
        onClick={handleLinkClick}
      >
        {label}
        {dropdown && (
          <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        )}
        <motion.div
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
          initial={false}
          animate={{ scaleX: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      
      <AnimatePresence>
        {showPopup && (
          <PopupNotification 
            message={`Navigating to ${label}`} 
            onClose={() => setShowPopup(false)}
          />
        )}
      </AnimatePresence>
      
      {dropdown && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 w-56 py-2 bg-dark/90 backdrop-blur-lg rounded-lg 
                       shadow-xl border border-white/10"
            >
              {dropdown.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedItem(item)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-light w-full
                           hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  {item.icon && <item.icon className="w-4 h-4 opacity-70" />}
                  <span>{item.label}</span>
                  <FiExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <ContentWindow
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { 
      to: 'home', 
      label: 'Home',
      dropdown: [
        { 
          href: '#overview', 
          label: 'Overview', 
          icon: FiHome,
          content: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Welcome to EventNova</h4>
              <p>Discover the future of event management with our innovative platform.</p>
              <ul className="mt-4 space-y-2">
                <li>✨ Cutting-edge technology</li>
                <li>🎯 Seamless experience</li>
                <li>🚀 Next-gen features</li>
              </ul>
            </div>
          )
        },
        { href: '#highlights', label: 'Highlights', icon: FiStar },
      ]
    },
    { 
      to: 'events', 
      label: 'Events',
      dropdown: [
        { href: '#upcoming', label: 'Upcoming Events', icon: FiCalendar },
        { href: '#featured', label: 'Featured Events', icon: FiAward },
        { href: '#past', label: 'Past Events', icon: FiClock },
      ]
    },
    { 
      to: 'schedule', 
      label: 'Schedule',
      dropdown: [
        { href: '#sessions', label: 'Sessions', icon: FiList },
        { href: '#workshops', label: 'Workshops', icon: FiUsers },
        { href: '#timings', label: 'Timings', icon: FiClock },
      ]
    },
    { 
      to: 'contact', 
      label: 'Contact',
      dropdown: [
        { href: '#support', label: 'Support', icon: FiHelpCircle },
        { href: '#sales', label: 'Sales', icon: FiDollarSign },
        { href: '#locations', label: 'Locations', icon: FiMapPin },
      ]
    },
  ];

  const handleBookEvent = () => {
    setShowBookingPopup(true);
    setTimeout(() => setShowBookingPopup(false), 2000);
  };

  const handleNavClick = (to) => {
    setIsOpen(false);
    setActiveSection(to);
  };

  const MobileNavLink = ({ to, label, onClick }) => (
    <div
      className="block w-full px-4 py-2 text-light hover:text-primary cursor-pointer"
      onClick={onClick}
    >
      {label}
    </div>
  );

  return (
    <nav className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'py-2 bg-dark/80 backdrop-blur-lg shadow-lg' : 'py-4 bg-transparent'}
    `}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"
        animate={{
          opacity: isScrolled ? 1 : 0,
        }}
      />

      <AnimatePresence>
        {showBookingPopup && (
          <PopupNotification 
            message="Opening booking form..." 
            type="notification"
            onClose={() => setShowBookingPopup(false)}
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                {...link} 
                onClick={() => handleNavClick(link.to)}
                isActive={activeSection === link.to}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              icon={FiCalendar}
              className="ml-4"
              onClick={handleBookEvent}
            >
              Book Event
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-light hover:text-primary transition-colors z-50"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-dark/95 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="pt-20 px-4"
            onClick={e => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.to}
                {...link}
                onClick={() => {
                  handleNavClick(link.to);
                  setIsOpen(false);
                }}
              />
            ))}
            <Button
              variant="primary"
              size="sm"
              icon={FiCalendar}
              className="w-full mt-4"
              onClick={() => {
                handleBookEvent();
                setIsOpen(false);
              }}
            >
              Book Event
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
