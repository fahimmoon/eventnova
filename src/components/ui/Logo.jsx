import { motion } from 'framer-motion';

const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <div className="flex items-center gap-2">
      <motion.svg
        viewBox="0 0 48 48"
        className={className}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5c27fe" />
            <stop offset="100%" stopColor="#ff00c3" />
          </linearGradient>
        </defs>
        <path
          d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm0 2c9.941 0 18 8.059 18 18s-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6z"
          fill="url(#logoGradient)"
        />
        <path
          d="M24 12c-3.314 0-6 2.686-6 6v4l-6 6v8h24v-8l-6-6v-4c0-3.314-2.686-6-6-6zm0 2c2.205 0 4 1.795 4 4v4.414l.586.586L34 28.414V34H14v-5.586L19.414 23l.586-.586V18c0-2.205 1.795-4 4-4z"
          fill="url(#logoGradient)"
        />
        <path
          d="M24 20c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"
          fill="url(#logoGradient)"
        />
      </motion.svg>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white">Event<span className="text-primary">Nova</span></span>
        <span className="text-xs text-gray-400">Summit 2025</span>
      </div>
    </div>
  );
};

export default Logo;
