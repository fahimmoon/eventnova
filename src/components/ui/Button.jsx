import { motion } from 'framer-motion';
import { FiLoader } from 'react-icons/fi';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon: Icon,
  isLoading,
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary via-secondary to-primary text-white',
    secondary: 'bg-transparent border-2 border-primary hover:bg-primary/10 text-white',
    outline: 'bg-transparent border-2 border-white hover:border-secondary text-white',
    text: 'bg-transparent hover:text-secondary text-white',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs sm:text-sm',
    md: 'px-4 py-2 sm:px-6 sm:py-3',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={isLoading}
      className={`
        ${variants[variant]} 
        ${sizes[size]}
        rounded-full font-semibold transition-all duration-300
        flex items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      {...props}
    >
      {isLoading ? (
        <FiLoader className="animate-spin" />
      ) : (
        <>
          {Icon && <Icon className="w-5 h-5" />}
          {children}
        </>
      )}
    </motion.button>
  );
};
