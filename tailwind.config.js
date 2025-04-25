/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#5c27fe',    // Electric Blue
        secondary: '#ff00c3',  // Neon Pink
        dark: '#0f051d',       // Deep Purple Black
        light: '#ffffff',      // Pure White
        muted: '#d1d5db',      // Soft Gray
        card: '#1b0b2e',       // Card Background
        border: '#2c2c54'      // Border Color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(92, 39, 254, 0.3), 0 0 40px rgba(255, 0, 195, 0.2)',
        'neon': '0 0 10px rgba(255, 0, 195, 0.5)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #5c27fe, #ff00c3, #5c27fe)',
        'gradient-card': 'linear-gradient(to bottom, #1b0b2e, #0f051d)',
      }
    },
  },
  plugins: [],
}
